import unittest, pathlib
from abstra_internals.server.api import API, UnknownNodeTypeError
from abstra_internals.repositories.json.classes import (
    AbstraJSON,
    FormJSON,
    JobJSON,
    HookJSON,
    AbstraJSONRepository,
    RuntimeNotFoundError,
)
from .fixtures import init_dir, clear_dir


class TestWorkflowEditorDeleteApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()

        abstra_json = AbstraJSON.create()
        for i in range(10):
            form = FormJSON(
                path=f"form{i}",
                file=f"form{i}.py",
                workflow_transitions=[],
                workflow_position=(0, 0),
                title=f"Form {i}",
            )
            abstra_json.forms.append(form)
            job = JobJSON(
                file=f"job{i}.py",
                workflow_transitions=[],
                identifier=f"job{i}",
                schedule="* * * * *",
                title=f"Job {i}",
                workflow_position=(0, 0),
            )
            abstra_json.jobs.append(job)
            hook = HookJSON(
                file=f"hook{i}.py",
                enabled=True,
                path=f"hook{i}",
                title=f"Hook {i}",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
            pathlib.Path(f"form{i}.py").write_text("print('hello world')")
            pathlib.Path(f"job{i}.py").write_text("print('hello world')")
            pathlib.Path(f"hook{i}.py").write_text("print('hello world')")
            abstra_json.hooks.append(hook)
        self.api = API()
        AbstraJSONRepository.save(abstra_json=abstra_json)

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_deleting(self):
        old_json = AbstraJSONRepository.load()
        self.api.workflow_delete([])
        new_json = AbstraJSONRepository.load()
        self.assertEqual(old_json, new_json)

    def test_accept_simple_deleting(self):
        self.api.workflow_delete([{"id": "form1", "type": "forms"}])
        json = AbstraJSONRepository.load()
        self.assertEqual(json.forms[1].path, "form2")

    def test_accept_transition_deleting(self):
        self.api.workflow_add_transition(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "forms", "id": "form2"},
                    "id": "foo",
                }
            ]
        )
        transition = AbstraJSONRepository.load().forms[1].workflow_transitions[0]
        self.api.workflow_delete([{"id": transition.id, "type": "transitions"}])
        json = AbstraJSONRepository.load()
        self.assertEqual(len(json.forms[1].workflow_transitions), 0)

    def test_reject_invalid_id(self):
        with self.assertRaises(RuntimeNotFoundError):
            self.api.workflow_delete(
                [
                    {
                        "id": "invalid",
                        "type": "forms",
                    }
                ]
            )

    def test_delete_transitions_pointing_to_deleted_node(self):
        self.api.workflow_add_transition(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "forms", "id": "form2"},
                    "id": "foo",
                }
            ]
        )
        self.api.workflow_delete([{"id": "form2", "type": "forms"}])
        json = AbstraJSONRepository.load()
        self.assertEqual(len(json.forms[1].workflow_transitions), 0)

    def test_delete_also_delete_file(self):
        self.assertTrue(pathlib.Path("form1.py").exists())
        self.api.workflow_delete([{"id": "form1", "type": "forms"}])
        self.assertFalse(pathlib.Path("form1.py").exists())

    def test_delete_not_break_when_file_not_found(self):
        pathlib.Path("form1.py").unlink()
        self.api.workflow_delete([{"id": "form1", "type": "forms"}])
        self.assertFalse(pathlib.Path("form1.py").exists())
