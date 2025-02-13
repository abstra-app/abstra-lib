import types
from typing import Dict, Generator, List, Optional, Union

from abstra_internals.controllers.sdk_context import SDKContextStore
from abstra_internals.controllers.sdk_forms import FormSDKController
from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.steps import (
    EndPageStep,
    GeneratorPageStep,
    PageStep,
    Step,
)
from abstra_internals.entities.forms.template import (
    GeneratorFunc,
    Template,
    TemplateFunc,
)
from abstra_internals.interface.sdk.forms.exceptions import InvalidRunInputError
from abstra_internals.widgets.widget_base import Input, Widget

Runnable = Union[TemplateFunc, Template, GeneratorFunc]


class Form:
    controller: FormSDKController
    state: State
    hide_steps: bool

    def _create_step(self, runnable: Runnable) -> Step:
        if isinstance(runnable, EndPageStep):
            return runnable
        elif isinstance(runnable, types.FunctionType):
            if isinstance(runnable(State()), Generator):
                return GeneratorPageStep(runnable)
            return PageStep(runnable)
        elif isinstance(runnable, list):
            return PageStep(lambda _: (runnable, None))

        raise InvalidRunInputError(str(type(runnable)))

    def __init__(
        self,
        runnables: List[Runnable],
        initial_state: Optional[Dict] = None,
        hide_steps: bool = False,
    ):
        self.steps = [self._create_step(runnable) for runnable in runnables]
        self.controller = SDKContextStore.get_by_thread().form_sdk
        self.state = State(initial_state or {})
        self.hide_steps = hide_steps
        if len(list(filter(lambda s: not s.computation_step, self.steps))) == 1:
            self.hide_steps = True

    def run(self) -> Dict:
        return self.controller.run_form(self.steps, self.state, self.hide_steps)


# TODO: Do we want multiple return types here?
def run(
    runnables: Union[List[Runnable], Widget],
    state: Optional[Dict] = None,
    hide_steps: bool = False,
) -> Union[State, None, object]:
    if isinstance(runnables, Widget):
        state = Form([[runnables]], state, hide_steps).run()
        if isinstance(runnables, Input):
            return state[runnables.key]
        return None

    return Form(runnables, state, hide_steps).run()
