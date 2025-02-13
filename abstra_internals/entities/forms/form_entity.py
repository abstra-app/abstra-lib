from typing import List, Optional, TypedDict

from abstra_internals.entities.forms.form_state import (
    AutoNext,
    BackButton,
    Button,
    NextButton,
    State,
)
from abstra_internals.entities.forms.steps import (
    EndPageStep,
    GeneratorPageStep,
    PageStep,
    Step,
)
from abstra_internals.entities.forms.template import TemplateRenderer

BACK_ACTION = BackButton().label
NEXT_ACTION = NextButton().label
DEFAULT_ACTIONS = [NextButton().label, BackButton().label]


class StepsInfo(TypedDict):
    current: int
    total: int
    disabled: Optional[bool]


class RenderedForm(TypedDict):
    widgets: List[dict]
    end_page: bool
    steps_info: StepsInfo
    buttons: Optional[List[Button]]
    yielding: bool


class FormEntity:
    steps: List[Step]
    current_step_idx: int
    state: State
    hide_steps: bool

    def __init__(self, steps: List[Step], state: State, hide_steps: bool = False):
        self.steps = steps
        self.state = state
        self.hide_steps = hide_steps or False
        self.current_step_idx = 0

    def get_previous_page_idx(self) -> int:
        return next(
            self.current_step_idx - 1 - idx
            for idx, s in enumerate(self.steps[: self.current_step_idx][::-1])
            if not s.computation_step
        )

    def run(self) -> Optional[RenderedForm]:
        steps_info = StepsInfo(
            current=self.current_step_idx + 1,
            total=len(list(filter(lambda s: not s.computation_step, self.steps))),
            disabled=self.hide_steps,
        )

        if self.current_step_idx >= len(self.steps):
            return None

        step = self.steps[self.current_step_idx]

        if isinstance(step, PageStep):
            result = step.call(self.state)
            if result is None:
                self.current_step_idx += 1
                return self.run()
            if isinstance(result, AutoNext):
                self.current_step_idx += 1
                return self.run()
            if isinstance(result, tuple):
                template, buttons = result
            else:
                template, buttons = result, None
            renderer = TemplateRenderer(template)
            output = renderer.render(self.state)
            init_state = renderer.parse_state({})
            self.state.init_keys(init_state)
            end_page = isinstance(step, EndPageStep)
            self.has_errors = output["has_errors"]

            return RenderedForm(
                widgets=output["widgets"],
                end_page=end_page,
                steps_info=steps_info,
                buttons=buttons,
                yielding=False,
            )

        elif isinstance(step, GeneratorPageStep):
            generator = step.initialize_generator(self.state)
            buttons = None

            try:
                result = next(generator)
                if isinstance(result, tuple):
                    template, buttons = result
                else:
                    template, buttons = result, None
                renderer = TemplateRenderer(template)
                output = renderer.render(self.state)
                init_state = renderer.parse_state({})
                self.state.init_keys(init_state)
                self.has_errors = output["has_errors"]

                return RenderedForm(
                    widgets=output["widgets"],
                    end_page=False,
                    steps_info=steps_info,
                    buttons=buttons,
                    yielding=True,
                )

            except StopIteration:
                self.current_step_idx += 1

                if self.current_step_idx < len(self.steps):
                    return self.run()

                return None

        else:
            raise Exception(f"Internal error: invalid step type {step}")

    def handle_navigation(self, dto: dict) -> None:
        step = self.steps[self.current_step_idx]

        if not isinstance(step, PageStep) and not isinstance(step, GeneratorPageStep):
            raise Exception(f"Internal error: navigation on non-page step {step}")

        if dto["action"] not in DEFAULT_ACTIONS:
            self.state[dto["action"]] = True
            return

        if dto["action"] == BACK_ACTION:
            if self.current_step_idx == 0:
                raise Exception("Internal error: reached negative step index")
            self.current_step_idx = self.get_previous_page_idx()
            return

        result = step.call(self.state)
        if isinstance(result, tuple):
            template, _ = result
        else:
            template = result
        renderer = TemplateRenderer(template)

        self.state.merge(renderer.parse_state(dto["payload"]))
        self.state.touch_all()

        output = renderer.render(self.state)

        if output["has_errors"]:
            return

        self.current_step_idx += 1

    def handle_input(self, dto: dict) -> None:
        step = self.steps[self.current_step_idx]

        if not isinstance(step, PageStep) and not isinstance(step, GeneratorPageStep):
            raise Exception(f"Internal error: input on non-page step {step}")

        result = step.call(self.state)
        if isinstance(result, tuple):
            template, _ = result
        else:
            template = result

        renderer = TemplateRenderer(template)

        self.state.merge(renderer.parse_state(dto["payload"]))
