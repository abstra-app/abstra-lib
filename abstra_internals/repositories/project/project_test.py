from unittest import TestCase

from abstra_internals.repositories.project.project import (
    FormStage,
    NotificationTrigger,
    Project,
    ProjectRepository,
    ScriptStage,
    WorkflowTransition,
)
from tests.fixtures import clear_dir, init_dir


class ProjectTests(TestCase):
    def setUp(self):
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_delete_file_if_remove_file_true(self):
        project = ProjectRepository.load()
        file = self.root / "script.py"
        file.write_text("print('hello, world')")

        script = ScriptStage(
            file="script.py",
            id="test",
            is_initial=True,
            title="test",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.scripts.append(script)
        ProjectRepository.save(project)
        project.delete_stage("test", remove_file=True)
        self.assertFalse(file.exists())

    def test_dont_delete_file_if_remove_file_false(self):
        project = ProjectRepository.load()
        file = self.root / "script.py"
        file.write_text("print('hello, world')")

        script = ScriptStage(
            file="script.py",
            id="test",
            is_initial=True,
            title="test",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.scripts.append(script)
        ProjectRepository.save(project)
        project.delete_stage("test", remove_file=False)
        self.assertTrue(file.exists())

    def test_is_initial_false(self):
        project = Project.create()

        form1 = FormStage(
            id="form1",
            path="form1",
            title="form1",
            file="form1.py",
            workflow_position=(0.0, 0.0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        form2 = FormStage(
            id="form2",
            path="form2",
            title="form2",
            file="form2.py",
            workflow_position=(0.0, 0.0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        script = ScriptStage(
            file="script.py",
            id="script",
            is_initial=True,
            title="script",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        form1.workflow_transitions.append(
            WorkflowTransition(
                id="1",
                target_id=form2.id,
                target_type=form2.type_name,
                type=WorkflowTransition.default_type(form1.type_name),
            )
        )

        form1.workflow_transitions.append(
            WorkflowTransition(
                id="2",
                target_id=script.id,
                target_type=script.type_name,
                type=WorkflowTransition.default_type(form1.type_name),
            )
        )

        project = ProjectRepository.load()

        project.add_stage(form1)
        project.add_stage(form2)
        project.add_stage(script)

        ProjectRepository.save(project)

        read_project = ProjectRepository.load()

        read_form1 = read_project.get_stage(form1.id)
        if read_form1 is None or not isinstance(read_form1, FormStage):
            self.fail("form1 is null")

        self.assertTrue(read_form1.is_initial)

        read_form2 = read_project.get_stage(form2.id)
        if read_form2 is None or not isinstance(read_form2, FormStage):
            self.fail("form2 is null")

        self.assertFalse(read_form2.is_initial)

        read_script = read_project.get_stage(script.id)
        if read_script is None or not isinstance(read_script, ScriptStage):
            self.fail("script is null")

        self.assertFalse(read_script.is_initial)

    def test_graph_dependencies(self):
        project = Project.create()

        form1 = FormStage(
            id="form1",
            path="form1",
            title="form1",
            file="form1.py",
            workflow_position=(0.0, 0.0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        form2 = FormStage(
            id="form2",
            path="form2",
            title="form2",
            file="form2.py",
            workflow_position=(0.0, 0.0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        script = ScriptStage(
            file="script.py",
            id="script",
            is_initial=True,
            title="script",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        form1.workflow_transitions.append(
            WorkflowTransition(
                id="1",
                target_id=form2.id,
                target_type=form2.type_name,
                type=WorkflowTransition.default_type(form1.type_name),
            )
        )

        form1.workflow_transitions.append(
            WorkflowTransition(
                id="2",
                target_id=script.id,
                target_type=script.type_name,
                type=WorkflowTransition.default_type(form1.type_name),
            )
        )

        project = ProjectRepository.load()

        project.add_stage(form1)
        project.add_stage(form2)
        project.add_stage(script)

        ProjectRepository.save(project)

        p = ProjectRepository.load()

        self.assertEqual(p.get_next_stages_ids(form1.id), [form2.id, script.id])
        self.assertEqual(p.get_next_stages_ids(form2.id), [])

        self.assertEqual(p.get_previous_stages_ids(form2.id), [form1.id])
