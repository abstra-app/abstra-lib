import traceback
from abc import ABC
from typing import Any, Dict, List, Optional, Tuple, Union

from ...contract import dashes_contract as contract
from ...repositories.json.classes import (
    DashJSON,
    DashWidgetJSON,
    SlotJSON,
    SlottableJSON,
)
from ...utils import formated_traceback_error_message
from ...widgets import (
    Input,
    Output,
    get_widget_class,
    input_types,
    is_broker_prop_form_only,
)
from ..live_execution import LiveExecution
from .autocomplete import get_suggestions
from .program import PythonProgram


def preview_only_check(method):
    def wrapper(self: "DashRuntime", *args, **kwargs):
        if self.execution.is_preview:
            method(self, *args, **kwargs)
            return

        self.execution.send(
            contract.ErrorMessage("This method is only allowed in preview mode")
        )

    return wrapper


class IfSlottable:
    visible: bool

    def __init__(self, metadata: SlottableJSON) -> None:
        self.metadata = metadata
        self.visible = True

    def set_props(self, props: dict):
        self.visible = props["condition"]

    @property
    def props(self):
        return self.metadata.props.items()

    def render(self, context: dict):
        return dict(condition=self.visible)


class ItemRuntime(ABC):
    props_errors: Dict[str, str]
    runtime_state: Optional[Union[IfSlottable, Input, Output]]
    props: List[Tuple[str, str]]
    metadata: Union[DashWidgetJSON, SlottableJSON]

    def set_props(self, props: dict):
        raise NotImplementedError("set_props not implemented")


def iter_children(slot: SlotJSON):
    for child_id, child_metadata in slot.items():
        if isinstance(child_metadata, DashWidgetJSON):
            yield WidgetRuntime(child_metadata)
        elif isinstance(child_metadata, SlottableJSON):
            yield SlottableRuntime(child_metadata)
        else:
            raise Exception(f"Invalid slottable type {type(child_metadata)}")


class SlottableRuntime(ItemRuntime):
    metadata: SlottableJSON
    runtime_state: Optional[IfSlottable]
    _children: List[ItemRuntime]

    def __init__(self, metadata: SlottableJSON):
        self.metadata = metadata
        self.runtime_state = None
        self._children = []
        self.props_errors = {}

    def set_props(self, props: dict):
        if not self.runtime_state:
            self.runtime_state = IfSlottable(self.metadata)
        self.runtime_state.set_props(props)
        self._children = list(iter_children(self.metadata.slot))

    @property
    def props(self):
        return self.metadata.props.items()

    @property
    def children(self):
        if self.runtime_state and self.runtime_state.visible:
            return self._children
        else:
            return []

    def make_children(self):
        self._children = list(iter_children(self.metadata.slot))

    def flatten_children(self):
        yield self
        for child in self.children:
            if not child.runtime_state:
                continue
            if isinstance(child, SlottableRuntime):
                yield from child.flatten_children()
            else:
                yield child


class RootRuntime:
    slot: SlotJSON
    children: List[ItemRuntime]

    def __init__(self, slot: SlotJSON):
        self.slot = slot
        self.children = list(iter_children(slot))

    def update(self, slot: SlotJSON):
        self.slot = slot
        self.children = list(iter_children(slot))

    def flatten_children(self):
        for child in self.children:
            if not child.runtime_state:
                continue
            if isinstance(child, SlottableRuntime):
                yield from child.flatten_children()
            else:
                yield child


class WidgetRuntime(ItemRuntime):
    runtime_state: Optional[Union[Input, Output]]
    metadata: DashWidgetJSON
    variable_error: Optional[Exception]

    def __init__(self, metadata: DashWidgetJSON):
        self.metadata = metadata
        self.runtime_state = None
        self.variable_error = None
        self.props_errors = {}

    @property
    def props(self):
        return filter(
            lambda prop: not is_broker_prop_form_only(self.metadata.type, prop[0]),
            self.metadata.props.items(),
        )

    def set_props(self, props: dict):
        if self.runtime_state:
            self.runtime_state.set_props(props)
        else:
            self.runtime_state = get_widget_class(self.metadata.type)(**props)


class DashRuntime:
    py: PythonProgram
    execution: LiveExecution
    root_slot_runtime: RootRuntime
    dash_json: DashJSON
    seq: int
    code: str

    def __init__(self, execution: LiveExecution, dash_json: DashJSON) -> None:
        self.code = dash_json.file_path.read_text(encoding="utf-8")
        self.py = PythonProgram(self.code)
        self.execution = execution
        self.root_slot_runtime = RootRuntime(dash_json.layout.slot)
        self.dash_json = dash_json
        self.seq = 0

    def handle(self, type: str, data):
        handlers = {
            "client-start": self.start,
            "widget-input": self.widget_input,
            "widget-event": self.widget_event,
            "browser:try-disconnect": self.log_only,
            "refresh:request": self.refresh_request,
            "eval": self.eval,
            "widgets-changed": self.widgets_changed,
            "variable-created": self.variable_created,
            "autocomplete:load": self.autocomplete_load,
        }
        handler = handlers.get(type, self.default_handler)
        handler(data)

    def default_handler(self, _data):
        self.execution.send(contract.ErrorMessage("unknown type"))

    def start(self, data):
        # data: { type: client-start, params: PARAMS }
        self.execution.context["query_params"] = data.get("params", {})
        try:
            self.py.execute_initial_code()
            self._compute_and_send_widgets_props()
        except Exception as e:
            tb = traceback.extract_tb(e.__traceback__)
            formated_error = formated_traceback_error_message(e, self.dash_json.file)

            self.execution.send(contract.ProgramStartFailedMessage(formated_error, tb))
            self.execution.close()

    def widget_input(self, data):
        # data: { type: widget-input, widgetId: string, newValue: any, seq: number }
        self.seq = data["seq"]
        if self.execute_widget_input(data["widgetId"], data["newValue"]):
            self.execute_widget_event(
                data["widgetId"], "update:value", data["newValue"]
            )
            self._compute_and_send_widgets_props()

    def widget_event(self, data):
        # data: { type: widget-event, widgetId: string, event: { type: string, payload: any }, seq: number }
        self.seq = data["seq"]
        if self.execute_widget_event(
            data["widgetId"], data["event"]["type"], data["event"].get("payload", {})
        ):
            self._compute_and_send_widgets_props()

    def refresh_request(self, data):
        # data: { type: refresh:request }
        self._compute_and_send_widgets_props()

    def log_only(self, _data):
        # data: { type: 'browser:try-disconnect', ... }
        pass

    @preview_only_check
    def eval(self, data):
        # data: {type: eval, expression: string}
        try:
            try:
                value = self.py.ev(data["expression"])
                self.execution.send(contract.EvalReturnMessage(repr(value)))
            except SyntaxError:
                self.py.ex(data["expression"])
                self.execution.send(contract.EvalReturnMessage(""))
        except Exception as e:
            tb = traceback.extract_tb(e.__traceback__)
            formated_error = formated_traceback_error_message(e, self.dash_json.file)
            self.execution.send(contract.EvalErrorMessage(formated_error))

        self._compute_and_send_widgets_props()

    @preview_only_check
    def widgets_changed(self, data):
        # data: { type: widgets-changed, dashDefinition: { slot }, state }
        self.root_slot_runtime.update(SlotJSON(data["dashDefinition"]["slot"]))
        self.py.root = self.root_slot_runtime.slot
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
            suggestions = self.get_autocomplete_suggestions(data["code"])
        except Exception as e:
            suggestions = []

        self.execution.send(
            contract.AutocompleteSuggestionsMessage(
                suggestions=suggestions,
                suggestionsFor=data["suggestionsFor"],
            )
        )

    def make_widgets_computed_response(self) -> contract.WidgetsComputedMessage:
        props = {}
        variables = {}
        errors = {}
        for child in self.root_slot_runtime.flatten_children():
            if not child.runtime_state:
                raise Exception("Widget not computed")
            props[child.metadata.id] = child.runtime_state.render({})
            if isinstance(child.runtime_state, Input):
                variables[child.metadata.id] = child.runtime_state.serialize_value()
            errors[child.metadata.id] = child.props_errors

        return contract.WidgetsComputedMessage(
            props=props,
            variables=variables,
            errors=errors,
            seq=self.seq,
        )

    def _compute_and_send_widgets_props(self):
        try:
            self.evaluate_widgets()
            self.execution.send(self.make_widgets_computed_response())
        except Exception as e:
            tb = traceback.extract_tb(e.__traceback__)
            formated_error = formated_traceback_error_message(e, self.dash_json.file)
            traceback.print_exc()
            self.execution.send(
                contract.WidgetsComputedGeneralErrorMessage(formated_error)
            )

    def execute_widget_event(self, wid, type, payload):
        widget = self.__get_widget(wid)
        cmd = widget.metadata.events.get(type)

        if not cmd:
            return False

        self.__execute_widget_event_command(widget, cmd, payload)
        return True

    def __execute_widget_event_command(self, widget: WidgetRuntime, cmd: str, payload):
        # TODO: use widget runtime to parse event payload
        self.py.state.update({"__event__": payload})

        try:
            self.py.ex(cmd)
        except Exception as e:
            traceback.print_exc()
            return {"repr": traceback.format_exc()}
        finally:
            self.py.state.pop("__widget__", None)
            self.py.state.pop("__event__", None)

    def execute_widget_input(self, wid: str, new_value: Any):
        widget = self.__get_widget(wid)
        if not widget.metadata.variable:
            return False

        self.py.set_variable(widget.metadata.variable, new_value)
        return True

    def evaluate_widgets(self):
        self.__compute_root()

    def __compute_root(self):
        for child in self.root_slot_runtime.children:
            if isinstance(child, SlottableRuntime):
                self.__compute_slottable_widgets(child)
            elif isinstance(child, WidgetRuntime):
                self.__compute_widget(child)
            else:
                raise Exception(f"Invalid slot type {type(child)}")

    def __compute_slottable_widgets(self, slot: Optional[SlottableRuntime]):
        if not slot or not isinstance(slot, SlottableRuntime):
            raise Exception(f"Invalid slot type: {type(slot)}")
        self.__compute_slot_props(slot)
        for child in slot.children:
            if isinstance(child, SlottableRuntime):
                self.__compute_slottable_widgets(child)
            elif isinstance(child, WidgetRuntime):
                self.__compute_widget(child)
            else:
                raise Exception(f"Invalid slot type {type(slot)}")

    def __compute_widget(self, widget: WidgetRuntime):
        try:
            self.__compute_slot_props(widget)
            if isinstance(widget.runtime_state, Input):
                self.__compute_widget_variable(widget)
        except Exception as e:
            traceback.print_exc()
            widget.props_errors["__general__"] = str(e)

    def __compute_slot_props(self, slot: ItemRuntime):
        if slot.metadata.type in [i.type for i in input_types] and issubclass(
            get_widget_class(slot.metadata.type), Input
        ):
            props = dict(key=None)
        else:
            props = {}
        for prop, expr in slot.props:
            try:
                props[prop] = self.py.ev(expr) if expr else None
            except Exception as e:
                traceback.print_exc()
                slot.props_errors[prop] = str(e)
        slot.set_props(props)

    def __compute_widget_variable(self, widget: WidgetRuntime):
        if not widget.runtime_state:
            raise Exception("Widget not computed")
        if isinstance(widget.runtime_state, Output):
            raise Exception("Output widgets can't have variables")

        if not widget.metadata.variable:
            parsed_value = widget.runtime_state.parse_value(None)
            widget.runtime_state.set_value(parsed_value)
            return

        try:
            self.py.ev(widget.metadata.variable)
            self.py.ex(f"{widget.metadata.variable} = {widget.metadata.variable}")
            variable_value = self.py.ev(widget.metadata.variable)
            parsed_value = widget.runtime_state.parse_value(variable_value)
            widget.runtime_state.set_value(parsed_value)
        except Exception as e:
            traceback.print_exc()
            widget.variable_error = e

    def __get_widget(self, wid: str):
        widget = search_widget_runtime(self.root_slot_runtime, wid)
        if not widget:
            raise Exception(f"Widget {wid} not found")
        return widget

    def get_autocomplete_suggestions(self, added_code_snippet):
        return get_suggestions(self.code, added_code_snippet)


def search_widget_runtime(
    slot: Union[RootRuntime, SlottableRuntime], wid: str
) -> Optional[WidgetRuntime]:
    for child in slot.children:
        if isinstance(child, WidgetRuntime) and child.metadata.id == wid:
            return child
        elif isinstance(child, SlottableRuntime):
            widget = search_widget_runtime(child, wid)
            if widget:
                return widget
    return None


def merge_errors(errors, errors_slot):
    errors["props"] = {**errors["props"], **errors_slot["props"]}
    errors["variables"] = {**errors["variables"], **errors_slot["variables"]}
    errors["widgets"] = {**errors["widgets"], **errors_slot["widgets"]}
