import copy
from dataclasses import dataclass
from typing import Callable, Dict, Generator, List, Optional, Tuple, TypedDict, Union

from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.widgets.widget_base import InputWidget, Widget

SPREADED_KEY = "__spreaded_"


@dataclass
class Button:
    """
    Render buttons with custom functionality in your form for conditional logic and branching paths.

    Buttons allow users to trigger custom Python functions, processing or different form behaviors. When a button is pressed, its key becomes `True` in the form state, enabling conditional logic to determine the next steps in your workflow. This makes buttons essential for creating approval workflows, multi-path forms, and interactive decision trees.

    Unlike automatic navigation buttons (NextButton/BackButton), custom Button widgets give you full control over widget behavior within a page and can be used to implement complex conditional logic based on user choices.

    ## How Button State Works ##

    When a user clicks a button, the button's key is set to `True` in the form state. You can then check this state using `state.get("button_key")` to determine which button was pressed and conditionally render different widgets or forms.

    ## Usage Pattern ##

    Buttons are optionally returned from your Page function (a function that returns a list of widgets). You have two options:

    **Option 1: Return only widgets (default behavior)**
    ```python
    def my_page(state):
        return [TextOutput("Hello"), TextOutput("world!")]  # Default navigation buttons will be used
    ```

    **Option 2: Return widgets + custom buttons as a tuple**
    ```python
    def my_page(state):
        widgets = [TextOutput("Hello"), TextOutput("world!")]
        buttons = [Button("Label 1", key="key1"), Button("Label 2", key="key2")]
        return widgets, buttons
    ```

    If you don't return buttons (Option 1), the system automatically provides default navigation buttons (Next/Back). If you want custom buttons, you must return a tuple with widgets as the first element and a list of Button objects as the second element.

    ## Common Use Cases

    - **Approval Workflows**: Create "Approve" and "Reject" buttons for document review processes
    - **Data Reload**: Refresh page content with updated information from external APIs or databases
    - **Multi-path Forms**: Allow users to choose between different information collection paths
    - **Decision Trees**: Build complex conditional forms based on user choices
    - **Custom Navigation**: Implement non-linear form progression with custom logic

    Args:
        label (str): The text displayed on the button.
        key (Optional[str]): An optional key for the button.
            If not provided, the label will be used as the key.
    """

    label: str
    key: Optional[str]

    def __init__(
        self,
        label: str,
        key: Optional[str] = None,
    ):
        """Initialize a Button with the given label.

        Args:
            label (str): The text displayed on the button.
            key (Optional[str]): An optional key for the button.
                If not provided, the label will be used as the key.
        """
        self.label = label
        self.key = key

    def safe_get_key(self) -> str:
        return self.key if self.key else self.label


class NextButton(Button):
    """
    Automatic navigation button for progressing to the next step in multi-step forms.

    NextButton is automatically added to forms when using multi-step workflows created with the `run()` function. It handles forward navigation between form steps without requiring manual implementation. The button is automatically labeled with internationalized "Next" text that adapts to the user's language settings.

    ## Automatic Behavior

    - **Auto-added**: NextButton appears automatically on each step of a multi-step form (you don't need to import or create it)
    - **Smart positioning**: Only shows when there are more steps ahead
    - **Internationalized**: Button text automatically translates based on user locale
    - **State preservation**: User input is preserved when navigating between steps

    ## When to Use

    NextButton is ideal for:
    - **Linear workflows**: Step-by-step data collection processes
    - **Wizards**: Multi-step onboarding or configuration flows
    - **Progressive forms**: Breaking long forms into manageable sections
    - **Data collection pipelines**: Structured information gathering processes

    Unlike custom Button widgets, NextButton doesn't require state management or conditional logic - it's handled automatically by the form system.
    """

    def __init__(self):
        """Initialize a NextButton with the default internationalized label."""
        super().__init__("i18n_next_action")


class BackButton(Button):
    """
    Automatic navigation button for returning to previous steps in multi-step forms.

    BackButton is automatically added to forms starting from step 2 onwards in multi-step workflows. It enables backward navigation while preserving all user input, allowing users to review and modify their previous responses without losing data. The button is automatically labeled with internationalized "Back" text that adapts to the user's language settings.

    ## Automatic Behavior

    - **Auto-added**: BackButton appears automatically from step 2 onwards in multi-step forms (you don't need to import or create it)
    - **Smart positioning**: Only shows when there are previous steps to navigate to
    - **Internationalized**: Button text automatically translates based on user locale
    - **Data preservation**: All user input is maintained when navigating backwards
    - **Seamless integration**: Works automatically with the form system's navigation logic

    ## Key Features

    - **Non-destructive navigation**: Users can go back without losing their progress
    - **Form state management**: Previous inputs are automatically restored when returning
    - **User-friendly**: Provides confidence for users to explore and correct their inputs

    ## When BackButton Appears

    BackButton is ideal for:
    - **Multi-step wizards**: Allow users to review and modify previous steps
    - **Data collection forms**: Enable correction of earlier responses
    - **Progressive workflows**: Provide flexibility in non-linear completion
    - **Review processes**: Allow users to double-check their inputs before submission

    Unlike custom Button widgets, BackButton doesn't require any implementation - it's automatically managed by the form system.
    """

    def __init__(self):
        """Initialize a BackButton with the default internationalized label."""
        super().__init__("i18n_back_action")


Template = List[Widget]
TemplateWithButtons = Tuple[Template, Optional[List[Button]]]

TemplateFunction = Callable[[State], Optional[Union[Template, TemplateWithButtons]]]
TemplateGenerator = Generator[Union[Template, TemplateWithButtons], None, None]
TemplateGeneratorFunction = Callable[[State], TemplateGenerator]


class RenderOutput(TypedDict):
    widgets: List[Dict]
    has_errors: bool


class TemplateRenderer:
    def __init__(self, template: Template) -> None:
        self._raw_template = template

    @property
    def template(self) -> Template:
        # Avoids using mutable objects as widgets currently have a internal state
        return copy.deepcopy(self._raw_template)

    def parse_state(self, *, raw_state: Dict, include_missing: bool) -> State:
        parsed = {}
        for idx, widget in enumerate(self.template):
            if not isinstance(widget, InputWidget):
                continue

            key = widget._ensure_key(idx)

            if not include_missing and key not in raw_state:
                continue

            if key.startswith(SPREADED_KEY):
                to_update = widget._parse_value(raw_state)
                parsed.update(to_update)
            else:
                parsed[key] = widget._parse_value(raw_state.get(key))

        return State(parsed)

    def render(self, state: State) -> RenderOutput:
        rendered_widgets = []
        has_errors = False

        for idx, widget in enumerate(self.template):
            if isinstance(widget, InputWidget):
                key = widget._ensure_key(idx)
                if key.startswith(SPREADED_KEY):
                    value = state
                else:
                    value = state.get(key)

                if value is not None:
                    widget.value = value

                if key in state:
                    widget._apply_validation()

                if len(widget.errors) > 0:
                    has_errors = True

            rendered = widget._render()
            rendered_widgets.append(rendered)

        return RenderOutput(widgets=rendered_widgets, has_errors=has_errors)
