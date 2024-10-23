from typing import Callable, Dict, List, Optional, Union

from abstra_internals.entities.forms.page_response import PageResponse
from abstra_internals.entities.forms.steps_response import StepsResponse
from abstra_internals.interface.sdk.forms.page import Page

Step = Union[Page, Callable]
Steps = List[Step]


def get_page_info(steps: Steps, current_page: Page) -> Dict:
    pages = [step for step in steps if isinstance(step, Page)]
    return {"current": pages.index(current_page) + 1, "total": len(pages)}


def run_steps(steps: Steps) -> StepsResponse:
    executed_steps: Steps = []  # stack
    responses: StepsResponse = StepsResponse()  # stack
    steps_to_execute = steps[::-1]

    if not steps_to_execute:
        return responses

    first_step = steps_to_execute.pop()
    if not isinstance(first_step, Page):
        raise ValueError("First step needs to be a Page")
    response = run_page(steps, first_step, executed_steps, responses)

    while steps_to_execute or response.action == "i18n_back_action":
        if steps_to_execute and response.action != "i18n_back_action":
            next_page = execute_functions(steps_to_execute, executed_steps, responses)
            if not next_page:
                break
            response = run_page(steps, next_page, executed_steps, responses)

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
