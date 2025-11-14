import sys
from typing import Callable, Dict, List, Optional, Union

from abstra_internals.controllers.sdk.sdk_context import SDKContextStore
from abstra_internals.interface.contract.forms_contract import (
    StepsInfo,
    ValidationResult,
)
from abstra_internals.interface.sdk.forms.deprecated.page_response import PageResponse
from abstra_internals.interface.sdk.forms.deprecated.widgets.prop_check import (
    validate_widget_props,
)
from abstra_internals.interface.sdk.forms.deprecated.widgets.widget_base import Input
from abstra_internals.interface.sdk.forms.generated.widget_schema import WidgetSchema


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
        self._actions = actions
        self._validate = validate
        self._end_program = end_program
        self._reactive_polling_interval = reactive_polling_interval
        self._context = context or {}

    @property
    def controller(self):
        return SDKContextStore.get_by_thread().form_sdk

    def run(
        self,
        actions: Union[str, List[str]] = "i18n_next_action",
        validate: Optional[Callable] = None,
        end_program: bool = False,
        reactive_polling_interval=0,
        context: Optional[Dict] = None,
        steps_info: Optional[StepsInfo] = None,
    ) -> PageResponse:
        """Run the form

        Args:
            button_text: The text of the button that is used to submit the form
            end_program: End program whilst showing this page, making this an end page
            reactive_polling_interval: Interval to poll and rerender reactive slots, in seconds (0 to disable)

        Returns:
            The form result as a dict with the keys being the key of the input and the value being the value of the input
        """
        actions = actions if actions != "i18n_next_action" else self._actions
        end_program = end_program if end_program is not False else self._end_program
        reactive_polling_interval = (
            reactive_polling_interval
            if reactive_polling_interval != 0
            else self._reactive_polling_interval
        )
        self._context = context if context is not None else self._context
        validate = validate if validate is not None else self._validate

        if self._context:
            for widget in self.widgets:
                if (
                    widget.type != "reactive"
                    and isinstance(widget, Input)
                    and widget.key in self._context
                ):
                    widget.value = self._context[widget.key]

        for widget in self.widgets:
            if widget.type != "reactive" and isinstance(widget, Input):
                if self.controller.client.is_test:
                    widget.value = self.controller.client.get_next_answer()
                self._context[widget.key] = widget.value

        if self.controller.client.is_test:
            return PageResponse(self._context, "")

        rendered_page = self.render(context=self._context)

        self._check_widget_props(rendered_page)

        if self._is_progress_screen():
            self.controller.request_mount_page(
                widgets=rendered_page,
                actions=[],
                end_program=end_program,
                reactive_polling_interval=reactive_polling_interval,
                steps_info=steps_info,
            )
            return PageResponse({}, "")

        self.controller.request_mount_page(
            widgets=rendered_page,
            actions=self._actions_property(actions, end_program),
            end_program=end_program,
            reactive_polling_interval=reactive_polling_interval,
            steps_info=steps_info,
        )

        if end_program:
            sys.exit(0)

        response: Dict = self._handle_page_user_events(validate_func=validate)

        return PageResponse(
            self.parse_value(response["payload"]),
            response.get("action"),
        )

    def _handle_page_user_events(self, validate_func: Optional[Callable]):
        while True:
            response = self.controller.next_user_message()

            self.update(response.get("payload"))

            # TODO: handle back actions without string comparison
            if response.get("action") == "i18n_back_action":
                break

            # TODO: Refactor validation to use values instead of payload
            parsed_payload = self.parse_value(response["payload"])
            validation_result = self._get_validation_result(
                validation=validate_func, payload=parsed_payload
            )

            if response["type"] != "form:input":
                self.set_errors()
                if not self.has_errors() and validation_result.get("status"):
                    break

            rendered_page = self.render(self._context)

            self.controller.request_page_update(
                widgets=rendered_page,
                validation=validation_result,
                event_seq=response["seq"],
            )

        return response

    def _check_widget_props(self, rendered_page):
        for widget in rendered_page:
            if isinstance(widget, list):
                self._check_widget_props(widget)
            else:
                validate_widget_props(widget)

    def _actions_property(self, actions, end_page):
        if end_page:
            return []
        elif isinstance(actions, list):
            return actions
        elif actions is None:
            return []
        return [actions]

    def _is_progress_screen(self):
        return len(self.widgets) == 1 and self.widgets[0].type == "progress-output"

    def update(self, payload):
        parsed_values = self.parse_value(payload)
        self.set_values(parsed_values)
        self._context.update(parsed_values)

    def _get_validation_result(self, validation, payload) -> ValidationResult:
        # TODO: Refactor this to use widget.get_value() instead of payload
        validation_status = True
        validation_message = ""

        if validation:
            validation_response = validation(payload)
            if isinstance(validation_response, bool):
                validation_status = validation_response
                validation_message = ""
            elif isinstance(validation_response, str):
                validation_status = False
                validation_message = validation_response

        return {"status": validation_status, "message": validation_message}

    def is_equal_to(self, page: "Page") -> bool:
        if len(self.widgets) != len(page.widgets):
            return False

        for widget1, widget2 in zip(self.widgets, page.widgets):
            if type(widget1) is not type(widget2):
                return False

            if not widget1.is_equal_to(widget2):
                return False

        return True
