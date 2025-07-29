import inspect
import types
from typing import Dict, List, Optional, Union, cast, overload

from abstra_internals.controllers.sdk.sdk_context import SDKContextStore
from abstra_internals.controllers.sdk.sdk_forms import FormSDKController
from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.steps import (
    ComputationStep,
    GeneratorStep,
    PageStep,
    Step,
)
from abstra_internals.entities.forms.template import (
    Template,
    TemplateFunction,
    TemplateGeneratorFunction,
)
from abstra_internals.entities.forms.widgets.widget_base import InputWidget, Widget
from abstra_internals.interface.sdk.forms.exceptions import InvalidRunInputError
from abstra_internals.utils.code import always_returns_none

Runnable = Union[
    Step, TemplateFunction, Template, TemplateGeneratorFunction, types.FunctionType
]


class Form:
    controller: FormSDKController
    state: State
    hide_steps: bool

    def _is_widgets_list(self, runnable: Runnable) -> bool:
        return isinstance(runnable, list) and all(
            isinstance(w, Widget) for w in runnable
        )

    def _create_step(self, runnable: Runnable) -> Step:
        if isinstance(runnable, Step):
            return runnable
        elif self._is_widgets_list(runnable):
            return PageStep(lambda _: cast(List, runnable))
        elif inspect.isgeneratorfunction(runnable):
            return GeneratorStep(runnable)
        elif isinstance(runnable, types.FunctionType):
            if always_returns_none(runnable):
                return ComputationStep(runnable)
            return PageStep(runnable)

        raise InvalidRunInputError(str(type(runnable)))

    def __init__(
        self,
        runnables: List[Runnable],
        *,
        initial_state: Optional[Dict] = None,
        hide_steps: bool = False,
    ):
        self.steps = [self._create_step(runnable) for runnable in runnables]
        self.controller = SDKContextStore.get_by_thread().form_sdk
        self.state = State(initial_state or {})
        self.hide_steps = hide_steps

    def run(self) -> Dict:
        return self.controller.run_form(
            steps=self.steps, state=self.state, hide_steps=self.hide_steps
        )


@overload
def run(
    runnables: List[Runnable],
    state: Optional[Dict] = None,
    hide_steps: bool = False,
) -> State: ...


@overload
def run(
    runnables: Widget,
    state: Optional[Dict] = None,
    hide_steps: bool = False,
) -> Optional[object]: ...


def run(
    runnables: Union[List["Runnable"], "Widget"],
    state: Optional[Dict] = None,
    hide_steps: bool = False,
) -> Union[State, None, object]:
    """Run a form with the given runnables or a single widget.

    This is the main entry point for executing forms. It supports two modes:
    1. Running a list of runnables as a multi-step form
    2. Running a single widget to get its value

    Args:
        runnables (Union[List[Runnable], Widget]): Either a list of form steps or a single widget.
        state (Optional[Dict]): Initial state values for the form.
        hide_steps (bool): Whether to hide steps navigation in the UI.

    Returns:
        Union[State, None, object]:
            - For a list of runnables: the final State object
            - For a single InputWidget: the widget's value
            - For other single widgets: None

    Examples:

        # Running a single-step form:
        ```python
        from abstra_internals.interface.sdk.forms import run
        from abstra_internals.interface.sdk.forms.widgets import InputWidget
        from abstra_internals.interface.sdk.forms.widgets import TextInput
        run([[
            TextInput(label="Enter your name"),
            TextInput(label="Enter your email")
        ]])
        ```

        # Running a multi-step form:
        ```python
        from abstra_internals.interface.sdk.forms import run
        from abstra_internals.interface.sdk.forms.widgets import InputWidget
        from abstra_internals.interface.sdk.forms.widgets import TextInput
        run([
            [TextInput(label="Enter your name")],
            [TextInput(label="Enter your email")]
        ])

    """
    # Single widget run
    if isinstance(runnables, Widget):
        state = Form([[runnables]], initial_state=state, hide_steps=hide_steps).run()
        if isinstance(runnables, InputWidget):
            return state[runnables._ensure_key]
        return None

    return Form(runnables, initial_state=state, hide_steps=hide_steps).run()
