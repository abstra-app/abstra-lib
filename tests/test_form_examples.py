import json
import unittest
from pathlib import Path

from abstra_internals.repositories.project.project import FormStage, NotificationTrigger

from .fixtures import clear_dir, init_dir
from .utils import assert_form


class TestFormExamples(unittest.TestCase):
    def setUp(self) -> None:
        self.base_path = (
            Path(Path(__file__).parent, "./resources/test_form_examples")
            .absolute()
            .resolve()
        )
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def assertFormExample(self, example_name: str):
        code_path = f"./{example_name}/code.py"
        msgs_path = f"./{example_name}/messages.json"
        msgs = json.load(self.base_path.joinpath(msgs_path).open())
        file_path = self.base_path.joinpath(code_path)
        form_json = FormStage(
            id="test_form",
            title="Test Form",
            path="test_form",
            file=file_path.as_posix(),
            workflow_transitions=[],
            workflow_position=(0, 0),
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )
        assert_form(self, form_json, msgs, execution_id="execution-id")

    # def test_back_and_forth(self):
    #     self.assertFormExample("test_back_and_forth")

    # # Tests if required errors are correctly sent when field becomes empty
    # def test_required_error(self):
    #     self.assertFormExample("test_required_error")

    # # Tests if required errors are correctly sent when next button is pressed
    # def test_required_error_next_page(self):
    #     self.assertFormExample("test_required_error_next_page")

    # # back n forth on run_steps should not cache future responses and not compute errors on future pages
    # def test_change_last_response_error(self):
    #     self.assertFormExample("test_change_last_response_error")

    # def test_list_reactive(self):
    #     self.assertFormExample("test_list_reactive")
