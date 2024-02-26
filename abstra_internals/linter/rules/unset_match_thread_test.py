from unittest import TestCase
from .unset_match_thread import UnsetMatchThread
from tests.fixtures import init_dir, clear_dir
from ...repositories.project.project import (
    ProjectRepository,
    ScriptStage,
    HookStage,
    WorkflowTransition,
)


class UnsetMatchThreadTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_unset_match_thread_valid_default(self):
        rule = UnsetMatchThread()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_valid_unset_match_thread(
        self,
    ):
        rule = UnsetMatchThread()
        project = ProjectRepository.load()

        hook_file = self.root / "hook.py"
        hook_file.write_text(
            "\n".join(
                [
                    "from abstra.workflows import match_thread",
                    "try:",
                    "    match_thread({'test': 0})",
                    "except:",
                    "    pass",
                ]
            )
        )
        hook = HookStage(
            id="test",
            file=str(hook_file),
            title="Test",
            is_initial=False,
            workflow_position=(0, 0),
            workflow_transitions=[],
            enabled=True,
            path="hook",
        )
        project.add_stage(hook)

        script_file = self.root / "script.py"
        script_file.write_text(
            "\n".join(
                [
                    "import abstra.workflows as aw",
                    "aw.set_data('test', 1)",
                ]
            )
        )
        script = ScriptStage(
            id="test",
            file=str(script_file),
            title="Test",
            is_initial=False,
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script.workflow_transitions = [
            WorkflowTransition(
                id="1",
                target_type=hook.type_name,
                target_id=hook.id,
                type=WorkflowTransition.default_type(script.type_name),
                condition_value=None,
            )
        ]

        project.add_stage(script)

        ProjectRepository.save(project)
        self.assertEqual(len(rule.find_issues()), 0)

    def test_invalid_unset_match_thread(
        self,
    ):
        rule = UnsetMatchThread()
        project = ProjectRepository.load()

        hook_file = self.root / "hook.py"
        hook_file.write_text(
            "\n".join(
                [
                    "from abstra.workflows import match_thread",
                    "try:",
                    "    match_thread({'unset': 0})",
                    "except:",
                    "    pass",
                ]
            )
        )
        hook = HookStage(
            id="test",
            file=str(hook_file),
            title="Test",
            is_initial=False,
            workflow_position=(0, 0),
            workflow_transitions=[],
            enabled=True,
            path="hook",
        )
        project.add_stage(hook)

        script_file = self.root / "script.py"
        script_file.write_text(
            "\n".join(
                [
                    "import abstra.workflows as aw",
                    "aw.set_data('set', 1)",
                ]
            )
        )
        script = ScriptStage(
            id="test",
            file=str(script_file),
            title="Test",
            is_initial=False,
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script.workflow_transitions = [
            WorkflowTransition(
                id="1",
                target_type=hook.type_name,
                target_id=hook.id,
                type=WorkflowTransition.default_type(script.type_name),
                condition_value=None,
            )
        ]

        project.add_stage(script)

        ProjectRepository.save(project)
        self.assertEqual(len(rule.find_issues()), 1)
