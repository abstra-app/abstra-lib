import sys
from typing import Callable, Dict, List, Optional, Union

from ....contract import forms_contract
from ....widgets.prop_check import validate_widget_props
from .connection import receive, send
from .generated.widget_schema import WidgetSchema
from .page_response import PageResponse
from .reactive import Reactive


class Page(WidgetSchema):
    """A form page that can be displayed to the user

    This is a page that can be displayed to the user. It can be used to
    show data as well as collect informations. After configuring the
    inputs and outputs, use the run method to display the form to the
    user and collect the answers.
    """

    def __init__(
        self,
        actions: Union[str, List[str]] = "i18n_next_action",
        validate: Optional[Callable] = None,
        end_program: bool = False,
        reactive_polling_interval=0,
        context: Optional[Dict] = None,
    ):
        super().__init__()
        self.__actions = actions
        self.__validate = validate
        self.__end_program = end_program
        self.__reactive_polling_interval = reactive_polling_interval
        self.__context = context or {}

    def run(
        self,
        actions: Union[str, List[str]] = "i18n_next_action",
        validate: Optional[Callable] = None,
        end_program: bool = False,
        reactive_polling_interval=0,
        context: Optional[Dict] = None,
        steps_info: Optional[Dict] = None,
    ) -> PageResponse:
        """Run the form

        Args:
            button_text: The text of the button that is used to submit the form
            end_program: End program whilst showing this page, making this an end page
            reactive_polling_interval: Interval to poll and rerender reactive slots, in seconds (0 to disable)

        Returns:
            The form result as a dict with the keys being the key of the input and the value being the value of the input
        """

        actions = actions if actions != "i18n_next_action" else self.__actions
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

        for widget in self.widgets:
            if hasattr(widget, "key"):
                self.__context[widget.key] = widget.value

        rendered_page = self.render(context=self.__context)

        self.__check_widget_props(rendered_page)

        if self.__is_progress_screen():
            self.__send_mount_page_message(
                widgets=rendered_page,
                actions=[],
                end_program=end_program,
                reactive_polling_interval=reactive_polling_interval,
                steps_info=steps_info,
            )
            return PageResponse({}, "")

        self.__send_mount_page_message(
            widgets=rendered_page,
            actions=self.__actions_property(actions, end_program),
            end_program=end_program,
            reactive_polling_interval=reactive_polling_interval,
            steps_info=steps_info,
        )

        if end_program:
            sys.exit(0)

        response: Dict = self.__handle_page_user_events(validate_func=validate)

        return PageResponse(
            self.parse_value(response["payload"]),
            response.get("action"),
        )

    def __handle_page_user_events(self, validate_func: Optional[Callable]):
        while True:
            response = receive()

            self.update(response["payload"])

            # TODO: handle back actions without string comparison
            if response.get("action") == "i18n_back_action":
                break

            # TODO: Refactor validation to use values instead of payload
            parsed_payload = self.parse_value(response["payload"])
            validation_result = self._get_validation_result(
                validation=validate_func, payload=parsed_payload
            )

            if response["type"] != "form:user-event":
                self.set_errors()
                if not self.has_errors() and validation_result.get("status"):
                    break

            rendered_page = self.render(self.__context)

            self.__send_form_update_message(
                widgets=rendered_page,
                validation=validation_result,
                event_seq=response["seq"],
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

    def _get_validation_result(
        self, validation, payload
    ) -> forms_contract.ValidationResult:
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

    def __send_mount_page_message(
        self,
        widgets: list,
        actions: list,
        end_program: bool,
        reactive_polling_interval,
        steps_info,
    ):
        send(
            forms_contract.FormMountPageMessage(
                widgets=widgets,
                actions=actions,
                end_program=end_program,
                reactive_polling_interval=reactive_polling_interval,
                steps=steps_info,
            )
        )

    def __send_form_update_message(
        self, widgets: list, validation: forms_contract.ValidationResult, event_seq: int
    ):
        send(
            forms_contract.FormUpdatePageMessage(
                widgets=widgets,
                validation=validation,
                event_seq=event_seq,
            )
        )
