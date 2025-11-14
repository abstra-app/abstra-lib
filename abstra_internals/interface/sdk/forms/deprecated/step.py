from typing import Callable, List, Optional, Union

from abstra_internals.interface.contract import StepsInfo
from abstra_internals.interface.sdk.forms.deprecated.page import Page
from abstra_internals.interface.sdk.forms.deprecated.page_response import PageResponse
from abstra_internals.interface.sdk.forms.deprecated.steps_response import StepsResponse

Step = Union[Page, Callable]
Steps = List[Step]


def get_page_info(steps: Steps, current_page: Page) -> StepsInfo:
    pages = [step for step in steps if isinstance(step, Page)]
    return StepsInfo(
        current=pages.index(current_page) + 1, total=len(pages), disabled=False
    )


def run_steps(steps: Steps, initial_step=1, context={}) -> StepsResponse:
    assert initial_step >= 1, "Initial step must be greater than or equal to 1"

    executed_steps: Steps = []  # stack
    responses: StepsResponse = StepsResponse()  # stack

    page_steps = [
        (idx, step) for idx, step in enumerate(steps) if isinstance(step, Page)
    ]
    first_step_idx, first_step = page_steps[initial_step - 1]
    steps_to_execute = []
    for idx, step in enumerate(steps):
        if idx < first_step_idx:
            executed_steps.append(step)
            responses.append(context)
        elif idx == first_step_idx:
            first_step = step
        elif idx > first_step_idx:
            steps_to_execute.append(step)

    steps_to_execute.reverse()

    assert first_step is not None
    if not isinstance(first_step, Page):
        raise ValueError("First step needs to be a Page")
    response = run_page(steps, first_step, executed_steps, responses, context)

    while steps_to_execute or response.action == "i18n_back_action":
        if steps_to_execute and response.action != "i18n_back_action":
            next_page = execute_functions(steps_to_execute, executed_steps, responses)
            if not next_page:
                break
            response = run_page(steps, next_page, executed_steps, responses, context)

        if response.action == "i18n_back_action":
            response = go_back(steps, steps_to_execute, executed_steps, responses)

    return responses


def go_back(
    steps: Steps,
    steps_to_execute: Steps,
    executed_steps: Steps,
    responses: StepsResponse,
):
    page = executed_steps.pop()
    responses.pop()
    steps_to_execute.append(page)

    next_page = undo_functions(steps_to_execute, executed_steps, responses)
    response = run_back_page(steps, next_page, executed_steps, responses)
    return response


def execute_functions(
    steps_to_execute: Steps, executed_steps: Steps, responses: StepsResponse
) -> Optional[Page]:
    while steps_to_execute:
        step = steps_to_execute.pop()
        if not isinstance(step, Page):
            responses.append(step(responses))
            executed_steps.append(step)
        else:
            return step
    return None


def undo_functions(
    steps_to_execute: Steps, executed_steps: Steps, responses: StepsResponse
) -> Page:
    while executed_steps:
        step = executed_steps.pop()
        if not isinstance(step, Page):
            steps_to_execute.append(step)
            responses.pop()
        else:
            return step

    raise ValueError("No steps to undo")


def run_page(
    steps: Steps,
    next_page: Page,
    executed_steps: Steps,
    responses: StepsResponse,
    context: dict,
) -> PageResponse:
    steps_info = get_page_info(steps, next_page)
    response = (
        next_page.run(steps_info=steps_info, context=responses.acc)
        if steps_info["current"] == 1
        else next_page.run(
            actions=["i18n_back_action", "i18n_next_action"],
            steps_info=steps_info,
            context=responses.acc,
        )
    )
    responses.append(response)
    executed_steps.append(next_page)
    return response


def run_back_page(
    steps: Steps,
    next_page: Page,
    executed_steps: Steps,
    responses: StepsResponse,
):
    steps_info = get_page_info(steps, next_page)
    responses.pop()
    response = (
        next_page.run(context=responses.acc, steps_info=steps_info)
        if steps_info["current"] == 1
        else next_page.run(
            actions=["i18n_back_action", "i18n_next_action"],
            context=responses.acc,
            steps_info=steps_info,
        )
    )
    responses.append(response)
    executed_steps.append(next_page)
    return response
