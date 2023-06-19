from .socket import send, receive
from .generated.widget_schema import WidgetSchema
from .page_response import PageResponse
from abstra.widgets.validation import validate_widget_props
from .reactive import Reactive

from typing import Callable, Dict, Union, List


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
        validate: Callable = None,
        end_program: bool = False,
        reactive_polling_interval=0,
        initial_payload: Dict = None,
    ):
        super().__init__()
        self.__actions = actions
        self.__columns = columns
        self.__validate = validate
        self.__end_program = end_program
        self.__reactive_polling_interval = reactive_polling_interval
        self.__initial_payload = initial_payload

    def run(
        self,
        actions: Union[str, List[str]] = "Next",
        columns: float = 1,
        validate: Callable = None,
        end_program: bool = False,
        reactive_polling_interval=0,
        initial_payload: Dict = None,
        steps_info: Dict = None,
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
        initial_payload = (
            initial_payload if initial_payload != None else self.__initial_payload
        )
        validate = validate if validate != None else self.__validate

        if initial_payload:
            for widget in self.widgets:
                if (
                    not isinstance(widget, Reactive)
                    and hasattr(widget, "key")
                    and widget.key in initial_payload
                ):
                    widget.initial_value = initial_payload[widget.key]

        widgets_json = self.__get_validated_page_widgets_json(self.convert_answer({}))

        if self.__is_progress_screen():
            self.__send_form_message(
                widgets=widgets_json,
                columns=columns,
                actions=[],
                end_program=end_program,
                reactive_polling_interval=reactive_polling_interval,
                steps_info=steps_info,
            )
            return

        self.__send_form_message(
            widgets=widgets_json,
            columns=columns,
            actions=self.__actions_property(actions, end_program),
            end_program=end_program,
            reactive_polling_interval=reactive_polling_interval,
            steps_info=steps_info,
        )
        response: Dict = self.__user_event_messages(validate=validate)

        if end_program:
            exit()

        return PageResponse(
            self.convert_answer(response["payload"]),
            response.get("action"),
        )

    def __user_event_messages(self, **kwargs):
        response: Dict = receive()

        while response["type"] == "user-event":
            converted_payload = self.convert_answer(response["payload"])
            widgets_json = self.__get_validated_page_widgets_json(converted_payload)
            self.__send_user_event_message(
                widgets=widgets_json,
                validation=self.__build_validation_object(
                    validation=kwargs.get("validate"), payload=converted_payload
                ),
            )

            response = receive()

        return response

    def __get_validated_page_widgets_json(self, converted_payload):
        widgets_json = self.json(converted_payload)
        for widget in widgets_json:
            validate_widget_props(widget)
        return widgets_json

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

    def __build_validation_object(self, validation, payload):
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

    def __send_user_event_message(self, widgets, validation):
        send(
            {
                "type": "user-event",
                "widgets": widgets,
                "validation": validation,
            }
        )
