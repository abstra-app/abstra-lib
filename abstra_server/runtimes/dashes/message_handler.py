import traceback, typing
from ...contract import dashes_contract as contract
from ...api.classes import SlotJSON
from ...session import LiveSession
from .program import PythonProgram, DashPageState
from ...utils import formated_traceback_error_message


def preview_only_check(method):
    def wrapper(self: "MessageHandler", *args, **kwargs):
        if self.session.is_preview:
            method(self, *args, **kwargs)
            return

        self.session.send(
            contract.ErrorMessage("This method is only allowed in preview mode")
        )

    return wrapper


class MessageHandler:
    py: PythonProgram
    session: LiveSession
    dash_page_state: typing.Optional[DashPageState]

    def __init__(self, py: PythonProgram, session: LiveSession, main_file=None) -> None:
        self.py = py
        self.session = session
        self.dash_page_state = None
        self.main_file = main_file

    def handle(self, type: str, data):
        handlers = {
            "client-start": self.start,
            "widget-input": self.widget_input,
            "widget-event": self.widget_event,
            "browser:try-disconnect": self.log_only,
            "eval": self.eval,
            "widgets-changed": self.widgets_changed,
            "variable-created": self.variable_created,
            "autocomplete:load": self.autocomplete_load,
        }
        handler = handlers.get(type, self.default_handler)
        self.dash_page_state = data.get("state", self.dash_page_state)
        handler(data)

    def default_handler(self, _data):
        self.session.send(contract.ErrorMessage("unknown type"))

    def start(self, data):
        # data: { type: client-start, state: PAGESTATE, params: PARAMS }
        self.session.context["query_params"] = data.get("params", {})
        try:
            self.py.execute_initial_code()
        except Exception as e:
            tb = traceback.extract_tb(e.__traceback__)
            formated_error = formated_traceback_error_message(e, self.main_file)

            self.session.send(contract.ProgramStartFailedMessage(formated_error, tb))
            self.session.close()

        self._compute_and_send_widgets_props()

    def widget_input(self, data):
        # data: { type: widget-input, widgetId: string, state: PAGESTATE }
        if self.dash_page_state and self.py.execute_widget_input(
            data["widgetId"], self.dash_page_state
        ):
            self._compute_and_send_widgets_props()

    def widget_event(self, data):
        # data: { type: widget-event, widgetId: string, event: { type: string, payload: any }, state: PAGESTATE }
        if self.dash_page_state and self.py.execute_widget_event(
            data["widgetId"],
            data["event"]["type"],
            data["event"].get("payload", {}),
            self.dash_page_state,
        ):
            self._compute_and_send_widgets_props()

    def log_only(self, _data):
        # data: { type: 'browser:try-disconnect', ... }
        # print("browser:try-disconnect", data)
        pass

    @preview_only_check
    def eval(self, data):
        # data: {type: eval, expression: string}
        try:
            try:
                value = self.py.ev(data["expression"])
                self.session.send(contract.EvalReturnMessage(repr(value)))
            except SyntaxError:
                self.py.ex(data["expression"])
                self.session.send(contract.EvalReturnMessage(""))
        except Exception as e:
            tb = traceback.extract_tb(e.__traceback__)
            formated_error = formated_traceback_error_message(e, self.main_file)
            self.session.send(contract.EvalErrorMessage(formated_error))

        self._compute_and_send_widgets_props()

    @preview_only_check
    def widgets_changed(self, data):
        # data: { type: widgets-changed, dashDefinition: { slot }, state }
        self.py.root = SlotJSON(data["dashDefinition"]["slot"])
        self._compute_and_send_widgets_props()

    @preview_only_check
    def variable_created(self, data):
        # data: { type: variable-created, name, value?, state }
        self.py.set_variable(data["name"], data.get("value"))
        self._compute_and_send_widgets_props()

    @preview_only_check
    def autocomplete_load(self, data):
        # data: { type: autocomplete:load, suggestionsFor: string, code: string }
        try:
            suggestions = self.py.get_autocomplete_suggestions(data["code"])
        except Exception as e:
            suggestions = []

        self.session.send(
            contract.AutocompleteSuggestionsMessage(
                suggestions=suggestions,
                suggestionsFor=data["suggestionsFor"],
            )
        )

    def _compute_and_send_widgets_props(self):
        try:
            computed = (
                self.py.evaluate_widgets(self.dash_page_state)
                if self.dash_page_state
                else {}
            )
            self.session.send(contract.WidgetsComputedMessage(**computed))
        except Exception as e:
            tb = traceback.extract_tb(e.__traceback__)
            formated_error = formated_traceback_error_message(e, self.main_file)
            self.session.send(
                contract.WidgetsComputedGeneralErrorMessage(formated_error)
            )
