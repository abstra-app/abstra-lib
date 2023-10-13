import unittest, pathlib
from abstra_internals.server.controller import MainController
from abstra_internals.repositories.json.classes import (
    AbstraJSON,
    FormJSON,
    JobJSON,
    ScriptJSON,
    HookJSON,
    AbstraJSONRepository,
    RuntimeNotFoundError,
)
from .fixtures import init_dir, clear_dir


class TestWorkflowEditorDuplicateNodesApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()

        abstra_json = AbstraJSON.create()
        form = FormJSON(
            path="form1",
            file="form1.py",
            workflow_transitions=[],
            workflow_position=(0, 0),
            title="Form 1",
        )
        abstra_json.forms.append(form)
        job = JobJSON(
            file="job1.py",
            workflow_transitions=[],
            identifier="job1",
            schedule="* * * * *",
            title="Job 1",
            workflow_position=(0, 0),
        )
        abstra_json.jobs.append(job)
        hook = HookJSON(
            file="hook1.py",
            enabled=True,
            path="hook1",
            title="Hook 1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        abstra_json.hooks.append(hook)
        script = ScriptJSON(
            file="script1.py",
            path="script1",
            is_initial=True,
            title="Script 1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        abstra_json.scripts.append(script)
        pathlib.Path("form1.py").write_text("print('hello world')")
        pathlib.Path("job1.py").write_text("print('hello world')")
        pathlib.Path("hook1.py").write_text("print('hello world')")
        pathlib.Path("script1.py").write_text("print('hello world')")
        self.controller = MainController()
        AbstraJSONRepository.save(abstra_json=abstra_json)

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_duplicate_nodes(self):
        old_json = AbstraJSONRepository.load()
        self.controller.workflow_duplicate_nodes([])
        new_json = AbstraJSONRepository.load()
        self.assertEqual(old_json, new_json)

    def test_accept_simple_duplicating(self):
        self.controller.workflow_duplicate_nodes(
            [
                {
                    "original_id": "form1",
                    "new_id": "duplicated",
                    "type": "forms",
                    "position": [2, 2],
                    "title": "Duplicated",
                }
            ]
        )
        json = AbstraJSONRepository.load()
        self.assertEqual(len(json.forms), 2)
        self.assertEqual(json.forms[0].path, "form1")
        self.assertEqual(json.forms[0].workflow_position, (0, 0))
        self.assertEqual(json.forms[1].path, "duplicated")
        self.assertEqual(json.forms[1].workflow_position, (2, 2))
        self.assertTrue(pathlib.Path("form1-copy.py").exists())

    def test_reject_invalid_node_id(self):
        with self.assertRaises(RuntimeNotFoundError):
            self.controller.workflow_duplicate_nodes(
                [
                    {
                        "original_id": "invalid",
                        "new_id": "duplicated",
                        "type": "forms",
                        "position": [0, 0],
                        "title": "Duplicated",
                    }
                ]
            )

    def test_accept_duplicating_nodes_with_no_file(self):
        pathlib.Path("job1.py").unlink()
        self.controller.workflow_duplicate_nodes(
            [
                {
                    "original_id": "job1",
                    "new_id": "duplicated",
                    "type": "jobs",
                    "position": [2, 2],
                    "title": "Duplicated",
                }
            ]
        )
        json = AbstraJSONRepository.load()
        self.assertEqual(len(json.jobs), 2)
        self.assertEqual(json.jobs[0].identifier, "job1")
        self.assertEqual(json.jobs[0].workflow_position, (0, 0))
        self.assertEqual(json.jobs[1].identifier, "duplicated")
        self.assertEqual(json.jobs[1].workflow_position, (2, 2))
        self.assertFalse(pathlib.Path("job1-copy.py").exists())

    def test_duplicating_should_not_maintain_external_transition(self):
        self.controller.workflow_add_transition(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "hooks", "id": "hook1"},
                    "id": "transition1",
                }
            ]
        )
        self.controller.workflow_duplicate_nodes(
            [
                {
                    "original_id": "form1",
                    "new_id": "duplicated",
                    "type": "forms",
                    "position": [2, 2],
                    "title": "Duplicated",
                }
            ]
        )
        json = AbstraJSONRepository.load()
        duplicated = json.forms[1]
        self.assertEqual(duplicated.path, "duplicated")
        self.assertEqual(duplicated.workflow_transitions, [])

    def test_duplicating_should_maintain_internal_transitions(self):
        self.controller.workflow_add_transition(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "hooks", "id": "hook1"},
                    "id": "transition1",
                }
            ]
        )
        self.controller.workflow_duplicate_nodes(
            [
                {
                    "original_id": "form1",
                    "new_id": "duplicated-form",
                    "type": "forms",
                    "position": [2, 2],
                    "title": "Duplicated Form",
                },
                {
                    "original_id": "hook1",
                    "new_id": "duplicated-hook",
                    "type": "hooks",
                    "position": [2, 2],
                    "title": "Duplicated Hook",
                },
            ]
        )
        json = AbstraJSONRepository.load()
        duplicated = json.forms[1]
        self.assertEqual(duplicated.path, "duplicated-form")
        self.assertEqual(len(duplicated.workflow_transitions), 1)
        self.assertEqual(duplicated.workflow_transitions[0].target_type, "hooks")
        self.assertEqual(
            duplicated.workflow_transitions[0].target_path, "duplicated-hook"
        )

    def test_all_runtimes_can_be_duplicated(self):
        abstra_json = AbstraJSONRepository.load()

        form1 = abstra_json.get_workflow_runtime_by_path("form1")
        form2 = form1.duplicate()
        self.assertEqual(form1, form2)

        job1 = abstra_json.get_workflow_runtime_by_path("job1")
        job2 = job1.duplicate()
        self.assertEqual(job1, job2)

        hook1 = abstra_json.get_workflow_runtime_by_path("hook1")
        hook2 = hook1.duplicate()
        self.assertEqual(hook1, hook2)

        script1 = abstra_json.get_workflow_runtime_by_path("script1")
        script2 = script1.duplicate()
        self.assertEqual(script1, script2)
