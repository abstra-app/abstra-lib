from .socket import send, receive
from .generated.widget_schema import WidgetSchema
from .page_response import PageResponse
from abstra.widgets.prop_check import validate_widget_props
from .reactive import Reactive

from typing import Callable, Dict, Union, List, Optional


class Page(WidgetSchema):
    """A form page that can be displayed to the user

    This is a page that can be displayed to the user. It can be used to
    show data as well as collect informations. After configuring the
    inputs and outputs, use the run method to display the form to the
    user and collect the answers.
    """

    def __init__(
        self,
        actions: Union[str, List[str]] = "Next",
        columns: float = 1,
        validate: Optional[Callable] = None,
        end_program: bool = False,
        reactive_polling_interval=0,
        context: Optional[Dict] = None,
    ):
        super().__init__()
        self.__actions = actions
        self.__columns = columns
        self.__validate = validate
        self.__end_program = end_program
        self.__reactive_polling_interval = reactive_polling_interval
        self.__context = context or {}
        self.user_event_sent_widgets = None

    def run(
        self,
        actions: Union[str, List[str]] = "Next",
        columns: float = 1,
        validate: Optional[Callable] = None,
        end_program: bool = False,
        reactive_polling_interval=0,
        context: Optional[Dict] = None,
        steps_info: Optional[Dict] = None,
    ) -> Dict:
        """Run the form

        Args:
            button_text: The text of the button that is used to submit the form
            columns: The number of columns of the form
            end_program: End program whilst showing this page, making this an end page
            reactive_polling_interval: Interval to poll and rerender reactive slots, in seconds (0 to disable)

        Returns:
            The form result as a dict with the keys being the key of the input and the value being the value of the input
        """

        actions = actions if actions != "Next" else self.__actions
        columns = columns if columns != 1 else self.__columns
        end_program = end_program if end_program != False else self.__end_program
        reactive_polling_interval = (
            reactive_polling_interval
            if reactive_polling_interval != 0
            else self.__reactive_polling_interval
        )
        self.__context = context if context is not None else self.__context
        validate = validate if validate != None else self.__validate

        if self.__context:
            for widget in self.widgets:
                if (
                    not isinstance(widget, Reactive)
                    and hasattr(widget, "key")
                    and widget.key in self.__context
                ):
                    widget.value = self.__context[widget.key]

        if self.user_event_sent_widgets:
            rendered_page = self.user_event_sent_widgets
        else:
            rendered_page = self.render(context=self.__context)

        self.__check_widget_props(rendered_page)

        if self.__is_progress_screen():
            self.__send_form_message(
                widgets=rendered_page,
                columns=columns,
                actions=[],
                end_program=end_program,
                reactive_polling_interval=reactive_polling_interval,
                steps_info=steps_info,
            )
            return dict()

        self.__send_form_message(
            widgets=rendered_page,
            columns=columns,
            actions=self.__actions_property(actions, end_program),
            end_program=end_program,
            reactive_polling_interval=reactive_polling_interval,
            steps_info=steps_info,
        )
        response: Dict = self.__handle_page_user_events(validate=validate)

        if end_program:
            exit()

        return PageResponse(
            self.parse_value(response["payload"]),
            response.get("action"),
        )

    def __handle_page_user_events(self, **kwargs):
        while True:
            response: Dict = receive()

            self.update(response["payload"])

            # TODO: handle back actions without string comparison
            if response.get("action") == "Back":
                break

            if response["type"] != "user-event":
                self.set_errors()
                if not self.has_errors():
                    break

            rendered_page = self.render(self.__context)
            self.user_event_sent_widgets = rendered_page

            # TODO: Refactor validation to use values instead of payload
            parsed_payload = self.parse_value(response["payload"])
            self.__send_form_update_message(
                widgets=rendered_page,
                validation=self.__build_validation_object(
                    validation=kwargs.get("validate"), payload=parsed_payload
                ),
            )

        return response

    def __check_widget_props(self, rendered_page):
        for widget in rendered_page:
            if isinstance(widget, list):
                self.__check_widget_props(widget)
            else:
                validate_widget_props(widget)

    def __actions_property(self, actions, end_page):
        if end_page:
            return []
        elif isinstance(actions, list):
            return actions
        elif actions is None:
            return []
        return [actions]

    def __is_progress_screen(self):
        return len(self.widgets) == 1 and self.widgets[0].type == "progress-output"

    def update(self, payload):
        parsed_values = self.parse_value(payload)
        self.set_values(parsed_values)
        self.__context.update(parsed_values)

    def __build_validation_object(self, validation, payload):
        # TODO: Refactor this to use widget.get_value() instead of payload
        validation_status = True
        validation_message = ""

        if validation:
            validation_response = validation(payload)
            if type(validation_response) == bool:
                validation_status = validation_response
                validation_message = ""
            elif type(validation_response) == str:
                validation_status = False
                validation_message = validation_response

        return {"status": validation_status, "message": validation_message}

    def __send_form_message(
        self,
        widgets,
        actions,
        columns,
        end_program,
        reactive_polling_interval,
        steps_info,
    ):
        send(
            {
                "type": "form",
                "widgets": widgets,
                "columns": columns,
                "actions": actions,
                "endProgram": end_program,
                "reactivePollingInterval": reactive_polling_interval,
                "steps": steps_info,
            }
        )

    def __send_form_update_message(self, widgets, validation):
        send(
            {
                "type": "form-update",
                "widgets": widgets,
                "validation": validation,
            }
        )
