import unittest
from abstra_internals.server.api import API, UnknownNodeTypeError, NodeNotFoundError
from abstra_internals.repositories.json.classes import (
    AbstraJSON,
    FormJSON,
    JobJSON,
    HookJSON,
)
from .fixtures import init_dir, clear_dir


class TestWorkflowEditorMoveApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()

        abstra_json = AbstraJSON.make_empty()
        for i in range(10):
            form = FormJSON(
                path=f"form{i}",
                file="foo.py",
                workflow_transitions=[],
                workflow_position=(0, 0),
                title=f"Form {i}",
                is_initial=False,
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
                is_initial=True,
                path=f"hook{i}",
                title=f"Hook {i}",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
            abstra_json.hooks.append(hook)
        self.api = API()
        self.api.persist(abstra_json=abstra_json)

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_moving(self):
        old_json = self.api.load_abstra_json()
        self.api.workflow_move([])
        new_json = self.api.load_abstra_json()
        self.assertEqual(old_json, new_json)

    def test_accept_simple_moving(self):
        self.api.workflow_move([{"id": "form1", "type": "forms", "position": [2, 3]}])
        json = self.api.load_abstra_json()
        self.assertEqual(json.forms[1].workflow_position, (2, 3))

    def test_reject_invalid_node_type(self):
        with self.assertRaises(UnknownNodeTypeError):
            self.api.workflow_move(
                [{"id": "form1", "type": "invalid", "position": [2, 3]}]
            )

    def test_reject_invalid_id(self):
        with self.assertRaises(NodeNotFoundError):
            self.api.workflow_move(
                [{"id": "invalid", "type": "forms", "position": [2, 3]}]
            )
