import unittest
from typing import Generator, List, Optional
from unittest.mock import patch

from abstra_internals.controllers.sdk.sdk_context import SDKContextStore
from abstra_internals.controllers.sdk.sdk_forms import FormSDKController
from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.steps import (
    ComputationStep,
    GeneratorStep,
    PageStep,
    Step,
)
from abstra_internals.entities.forms.template import Template
from abstra_internals.entities.forms.widgets.library import TextOutput
from abstra_internals.entities.forms.widgets.widget_base import Widget

from .form import Runnable, run


def page_function(state: State) -> Template:
    return [TextOutput("Hello, world!")]


def computation_function(state: State):
    state["a"] = 1 + 1


def page_function_with_optional_return(state: State) -> Optional[Template]:
    if state.get("a"):
        return [TextOutput("Hello, world!")]


def generator_function(state: State) -> Generator[Template, None, None]:
    yield [TextOutput("Hello, world!")]


basic_template: List[Widget] = [TextOutput("Hello, world!")]


class MockFormSDKController(FormSDKController):
    def __init__(self) -> None:
        pass

    def run_form(self, *, steps: List[Step], state: State, hide_steps: bool) -> State:
        return State({"mock": "mock"})


class MockContext:
    def __init__(self) -> None:
        self.form_sdk = MockFormSDKController()


class FormInterfaceTest(unittest.TestCase):
    @patch.object(SDKContextStore, "get_by_thread", return_value=MockContext())
    def test_multiple_inputs(self, mock_get_by_thread):
        with patch.object(MockFormSDKController, "run_form") as mock_run_form:
            # mock SDKContextStore.get_by_thread().form_sdk
            runnables: List[Runnable] = [
                page_function,
                computation_function,
                page_function_with_optional_return,
                generator_function,
                basic_template,
            ]

            run(runnables)

            classes = [type(arg) for arg in mock_run_form.call_args_list[0][1]["steps"]]

            self.assertEqual(
                classes, [PageStep, ComputationStep, PageStep, GeneratorStep, PageStep]
            )

    @patch.object(SDKContextStore, "get_by_thread", return_value=MockContext())
    def test_single_widget(self, mock_get_by_thread):
        with patch.object(MockFormSDKController, "run_form") as mock_run_form:
            # mock SDKContextStore.get_by_thread().form_sdk

            run(TextOutput("Hello, world!"))

            classes = [type(arg) for arg in mock_run_form.call_args_list[0][1]["steps"]]

            self.assertEqual(classes, [PageStep])
