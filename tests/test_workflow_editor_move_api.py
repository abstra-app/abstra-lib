import unittest
from abstra_internals.server.controller import MainController, UnknownNodeTypeError
from abstra_internals.repositories.json.classes import (
    AbstraJSON,
    FormJSON,
    JobJSON,
    HookJSON,
    AbstraJSONRepository,
    RuntimeNotFoundError,
)
from .fixtures import init_dir, clear_dir


class TestWorkflowEditorMoveApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()

        abstra_json = AbstraJSON.create()
        for i in range(10):
            form = FormJSON(
                path=f"form{i}",
                file="foo.py",
                workflow_transitions=[],
                workflow_position=(0, 0),
                title=f"Form {i}",
            )
            abstra_json.forms.append(form)
            job = JobJSON(
                file="foo.py",
                workflow_transitions=[],
                identifier=f"job{i}",
                schedule="* * * * *",
                title=f"Job {i}",
                workflow_position=(0, 0),
            )
            abstra_json.jobs.append(job)
            hook = HookJSON(
                file="foo.py",
                enabled=True,
                path=f"hook{i}",
                title=f"Hook {i}",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
            abstra_json.hooks.append(hook)
        self.controller = MainController()
        AbstraJSONRepository.save(abstra_json=abstra_json)

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_moving(self):
        old_json = AbstraJSONRepository.load()
        self.controller.workflow_move([])
        new_json = AbstraJSONRepository.load()
        self.assertEqual(old_json, new_json)

    def test_accept_simple_moving(self):
        self.controller.workflow_move(
            [{"id": "form1", "type": "forms", "position": [2, 3]}]
        )
        json = AbstraJSONRepository.load()
        self.assertEqual(json.forms[1].workflow_position, (2, 3))

    def test_reject_invalid_id(self):
        with self.assertRaises(RuntimeNotFoundError):
            self.controller.workflow_move(
                [{"id": "invalid", "type": "forms", "position": [2, 3]}]
            )
