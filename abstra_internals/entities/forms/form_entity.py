from typing import List, Optional, TypedDict

from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.steps import (
    ComputationStep,
    EndPageStep,
    GeneratorStep,
    PageStep,
    Step,
)
from abstra_internals.entities.forms.template import (
    BackButton,
    Button,
    NextButton,
    TemplateRenderer,
)

BACK_ACTION_LABEL = BackButton().label
NEXT_ACTION_LABEL = NextButton().label


class StepsInfo(TypedDict):
    current: int
    total: int
    disabled: Optional[bool]


class RenderedForm(TypedDict):
    widgets: List[dict]
    end_page: bool
    steps_info: StepsInfo
    buttons: List[Button]
    yielding: bool


class ButtonAction(TypedDict):
    key: str
    label: str


class FormEntity:
    steps: List[Step]
    current_step_idx: int
    state: State
    hide_steps: bool

    def __init__(self, steps: List[Step], state: State, *, force_hide_steps: bool):
        self.steps = steps
        self.state = state
        self.hide_steps = force_hide_steps or self.total_pages == 1
        self.current_step_idx = 0

    def get_previous_page_idx(self) -> int:
        return next(
            self.current_step_idx - 1 - idx
            for idx, s in enumerate(self.steps[: self.current_step_idx][::-1])
            if isinstance(s, PageStep)
        )

    @property
    def total_pages(self) -> int:
        return len(list(filter(lambda s: isinstance(s, PageStep), self.steps)))

    @property
    def current_page_idx(self) -> int:
        return len(
            list(
                filter(
                    lambda s: isinstance(s, PageStep),
                    self.steps[: self.current_step_idx],
                )
            )
        )

    def get_default_buttons(self, step_idx: int) -> List[Button]:
        if isinstance(self.steps[step_idx], (EndPageStep, ComputationStep)):
            return []
        if step_idx == 0:
            return [NextButton()]
        return [BackButton(), NextButton()]

    def run(self) -> Optional[RenderedForm]:
        steps_info = StepsInfo(
            current=self.current_page_idx + 1,
            total=self.total_pages,
            disabled=self.hide_steps,
        )

        if self.current_step_idx >= len(self.steps):
            return None

        step = self.steps[self.current_step_idx]
        result = step.run(self.state)

        if result is None:
            self.current_step_idx += 1
            return self.run()

        template, buttons = result

        if buttons is None:
            buttons = self.get_default_buttons(self.current_step_idx)

        renderer = TemplateRenderer(template)
        output = renderer.render(self.state)

        return RenderedForm(
            widgets=output["widgets"],
            end_page=isinstance(step, EndPageStep),
            steps_info=steps_info,
            buttons=buttons,
            yielding=isinstance(step, GeneratorStep),
        )

    def handle_navigation(self, dto: dict) -> None:
        step = self.steps[self.current_step_idx]

        if not isinstance(step, PageStep):
            raise Exception(f"Internal error: navigation on non-page step {step}")

        if dto["action"] == BACK_ACTION_LABEL:
            if self.current_step_idx == 0:
                raise Exception("Internal error: reached negative step index")
            self.current_step_idx = self.get_previous_page_idx()
            return

        if dto["action"] == NEXT_ACTION_LABEL:
            result = step.run(self.state)

            if result is None:
                raise Exception("Internal error: next action None result")

            template, _ = result

            renderer = TemplateRenderer(template)
            parsed = renderer.parse_state(
                raw_state=dto["payload"], include_missing=True
            )
            self.state.update(parsed)

            output = renderer.render(self.state)

            if output["has_errors"]:
                return

            self.current_step_idx += 1
            return
        else:
            self.state[dto["action"]] = True
            return

    def handle_input(self, dto: dict) -> None:
        step = self.steps[self.current_step_idx]

        if not isinstance(step, PageStep):
            raise Exception(f"Internal error: input on non-page step {step}")

        result = step.run(self.state)

        if result is None:
            raise Exception("Internal error: input None result")

        template, _ = result
        renderer = TemplateRenderer(template)

        parsed = renderer.parse_state(raw_state=dto["payload"], include_missing=False)
        self.state.update(parsed)
