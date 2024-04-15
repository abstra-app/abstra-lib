from unittest import TestCase

from tests.fixtures import clear_dir, init_dir

from ...repositories.project.project import (
    FormStage,
    JobStage,
    NotificationTrigger,
    ProjectRepository,
    ScriptStage,
    WorkflowTransition,
)
from .workflows import get_path


class WorkflowTest(TestCase):
    def setUp(self):
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_empty_project(self):
        path = get_path(3)
        self.assertEqual(path, [])

    def test_single_form(self):
        project = ProjectRepository.load()
        form = FormStage(
            id="form",
            path="form",
            title="Form",
            file="form.py",
            workflow_position=(0, 0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )
        project.forms.append(form)
        ProjectRepository.save(project)

        path = get_path(3)
        self.assertEqual(path, ["form"])

    def test_more_then_one_stage(self):
        project = ProjectRepository.load()
        form = FormStage(
            id="form",
            path="form",
            title="Form",
            file="form.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="script",
                    target_id="script",
                    type="finished",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )
        script = ScriptStage(
            id="script",
            file="script.py",
            title="Script",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.forms.append(form)
        project.scripts.append(script)
        ProjectRepository.save(project)

        path = get_path(2)
        self.assertEqual(path, ["form", "script"])

    def test_more_stages_then_limit(self):
        project = ProjectRepository.load()
        form = FormStage(
            id="form",
            path="form",
            title="Form",
            file="form.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="script",
                    target_id="script",
                    type="finished",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )
        script = ScriptStage(
            id="script",
            file="script.py",
            title="Script",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.forms.append(form)
        project.scripts.append(script)
        ProjectRepository.save(project)

        path = get_path(1)
        self.assertEqual(path, ["form"])

    def test_more_then_one_path(self):
        project = ProjectRepository.load()
        form0 = FormStage(
            id="form0",
            path="form0",
            title="Form0",
            file="form0.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="script",
                    target_id="script1",
                    type="finished",
                ),
                WorkflowTransition(
                    id="2",
                    target_type="script",
                    target_id="script2",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )
        script1 = ScriptStage(
            id="script1",
            file="script1.py",
            title="Script1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            id="script2",
            file="script2.py",
            title="Script2",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="3",
                    target_type="script",
                    target_id="script3",
                    type="finished",
                )
            ],
        )

        script3 = ScriptStage(
            id="script3",
            file="script3.py",
            title="Script3",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        project.forms.append(form0)
        project.scripts.append(script1)
        project.scripts.append(script2)
        project.scripts.append(script3)
        ProjectRepository.save(project)

        path = get_path(3)
        self.assertEqual(path, ["form0", "script2", "script3"])

    def test_more_than_one_initial_stage(self):
        project = ProjectRepository.load()
        form0 = FormStage(
            id="form0",
            path="form0",
            title="Form0",
            file="form0.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="script",
                    target_id="script1",
                    type="finished",
                ),
                WorkflowTransition(
                    id="2",
                    target_type="script",
                    target_id="script2",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )
        script1 = ScriptStage(
            id="script1",
            file="script1.py",
            title="Script1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            id="script2",
            file="script2.py",
            title="Script2",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        form1 = FormStage(
            id="form1",
            path="form1",
            title="Form1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="3",
                    target_type="form",
                    target_id="form2",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        form2 = FormStage(
            id="form2",
            path="form2",
            title="Form2",
            file="form2.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="4",
                    target_type="script",
                    target_id="script2",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        project.forms.append(form0)
        project.scripts.append(script1)
        project.scripts.append(script2)
        project.forms.append(form1)
        project.forms.append(form2)
        ProjectRepository.save(project)

        path = get_path(3)
        self.assertEqual(path, ["form1", "form2", "script2"])

    def test_disjointed_graphs(self):
        project = ProjectRepository.load()
        form0 = FormStage(
            id="form0",
            path="form0",
            title="Form0",
            file="form0.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="script",
                    target_id="script1",
                    type="finished",
                ),
                WorkflowTransition(
                    id="2",
                    target_type="script",
                    target_id="script2",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )
        script1 = ScriptStage(
            id="script1",
            file="script1.py",
            title="Script1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            id="script2",
            file="script2.py",
            title="Script2",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        form1 = FormStage(
            id="form1",
            path="form1",
            title="Form1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="3",
                    target_type="form",
                    target_id="form2",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        form2 = FormStage(
            id="form2",
            path="form2",
            title="Form2",
            file="form2.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="4",
                    target_type="form",
                    target_id="form3",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        form3 = FormStage(
            id="form3",
            path="form3",
            title="Form3",
            file="form3.py",
            workflow_position=(0, 0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        project.forms.append(form0)
        project.scripts.append(script1)
        project.scripts.append(script2)
        project.forms.append(form1)
        project.forms.append(form2)
        project.forms.append(form3)
        ProjectRepository.save(project)

        path = get_path(3)
        self.assertEqual(path, ["form1", "form2", "form3"])

    def test_simple_loop(self):
        project = ProjectRepository.load()
        job0 = JobStage(
            id="job0",
            title="Job0",
            file="job0.py",
            workflow_position=(0, 0),
            schedule="* * * * *",
            workflow_transitions=[
                WorkflowTransition(
                    id="0",
                    target_type="form",
                    target_id="form0",
                    type="finished",
                ),
            ],
        )
        form0 = FormStage(
            id="form0",
            path="form0",
            title="Form0",
            file="form0.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="script",
                    target_id="script1",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )
        script1 = ScriptStage(
            id="script1",
            file="script1.py",
            title="Script1",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="2",
                    target_type="form",
                    target_id="form0",
                    type="finished",
                ),
            ],
        )

        project.jobs.append(job0)
        project.forms.append(form0)
        project.scripts.append(script1)
        ProjectRepository.save(project)

        path = get_path(3)
        self.assertEqual(path, ["job0", "form0", "script1"])

    def test_dont_enter_in_loops(self):
        project = ProjectRepository.load()
        job0 = JobStage(
            id="job0",
            title="Job0",
            file="job0.py",
            workflow_position=(0, 0),
            schedule="* * * * *",
            workflow_transitions=[
                WorkflowTransition(
                    id="0",
                    target_type="form",
                    target_id="form0",
                    type="finished",
                ),
            ],
        )
        form0 = FormStage(
            id="form0",
            path="form0",
            title="Form0",
            file="form0.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="script",
                    target_id="script1",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )
        script1 = ScriptStage(
            id="script1",
            file="script1.py",
            title="Script1",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="2",
                    target_type="form",
                    target_id="form0",
                    type="finished",
                ),
            ],
        )

        project.jobs.append(job0)
        project.forms.append(form0)
        project.scripts.append(script1)
        ProjectRepository.save(project)

        path = get_path(10)
        self.assertEqual(path, ["job0", "form0", "script1"])

    def test_clips_the_largest_path(self):
        project = ProjectRepository.load()
        form0 = FormStage(
            id="form0",
            path="form0",
            title="Form0",
            file="form0.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="form",
                    target_id="form1",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        form1 = FormStage(
            id="form1",
            path="form1",
            title="Form1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="2",
                    target_type="form",
                    target_id="form2",
                    type="finished",
                ),
                WorkflowTransition(
                    id="3",
                    target_type="script",
                    target_id="script1",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        script1 = ScriptStage(
            id="script1",
            file="script1.py",
            title="Script1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        form2 = FormStage(
            id="form2",
            path="form2",
            title="Form2",
            file="form2.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="4",
                    target_type="form",
                    target_id="form3",
                    type="finished",
                ),
                WorkflowTransition(
                    id="5",
                    target_type="script",
                    target_id="script2",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        script2 = ScriptStage(
            id="script2",
            file="script2.py",
            title="Script2",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        form3 = FormStage(
            id="form3",
            path="form3",
            title="Form3",
            file="form3.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="7",
                    target_type="script",
                    target_id="script3",
                    type="finished",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        script3 = ScriptStage(
            id="script3",
            file="script3.py",
            title="Script3",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        project.forms.append(form0)
        project.forms.append(form1)
        project.scripts.append(script1)
        project.forms.append(form2)
        project.scripts.append(script2)
        project.forms.append(form3)
        project.scripts.append(script3)
        ProjectRepository.save(project)

        path = get_path(3)
        self.assertEqual(path, ["form0", "form1", "form2"])
