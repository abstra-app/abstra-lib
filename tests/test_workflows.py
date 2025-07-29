from abstra_internals.controllers.workflows import WorkflowController
from abstra_internals.repositories.project.project import (
    FormStage,
    JobStage,
    NotificationTrigger,
    ScriptStage,
    WorkflowTransition,
)
from tests.fixtures import BaseTest, clear_dir


class WorkflowTest(BaseTest):
    def setUp(self):
        super().setUp()
        self.wf_controller = WorkflowController(self.repositories)

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_empty_project(self):
        path = self.wf_controller.get_path(3)
        self.assertEqual(path, [])

    def test_get_empty(self):
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(workflow, {"stages": [], "transitions": []})

    def test_get_with_stages(self):
        initial_state = {
            "stages": [
                {
                    "type": "forms",
                    "id": "foo",
                    "title": "Foo",
                    "props": {
                        "filename": "foo.py",
                        "path": "foo",
                    },
                    "position": {"x": 0, "y": 0},
                }
            ],
            "transitions": [],
        }
        self.wf_controller.update_workflow(initial_state)
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(workflow, initial_state)

    def test_get_with_transitions(self):
        initial_state = {
            "stages": [
                {
                    "type": "forms",
                    "id": "foo",
                    "title": "Foo",
                    "props": {
                        "filename": "foo.py",
                        "path": "foo",
                    },
                    "position": {"x": 0, "y": 0},
                },
                {
                    "type": "hooks",
                    "id": "bar",
                    "props": {
                        "filename": "bar.py",
                        "path": "bar",
                    },
                    "title": "Bar",
                    "position": {"x": 0, "y": 0},
                },
            ],
            "transitions": [
                {
                    "id": "foo",
                    "sourceStageId": "foo",
                    "targetStageId": "bar",
                    "type": "task",
                    "props": {"taskType": None},
                }
            ],
        }

        updated_workflow = self.wf_controller.update_workflow(initial_state)

        self.assertEqual(updated_workflow, initial_state)

        project = self.repositories.project.load()

        self.assertEqual(len(project.forms[0].workflow_transitions), 1)

        gotten_workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(gotten_workflow, initial_state)

        initial_state = {
            "stages": [
                {
                    "type": "forms",
                    "id": "foo",
                    "props": {
                        "filename": "foo.py",
                        "path": "foo",
                    },
                    "title": "Foo",
                    "position": {"x": 0, "y": 0},
                },
                {
                    "type": "hooks",
                    "id": "bar",
                    "props": {
                        "filename": "bar.py",
                        "path": "bar",
                    },
                    "title": "Bar",
                    "position": {"x": 0, "y": 0},
                },
            ],
            "transitions": [
                {
                    "id": "foo",
                    "sourceStageId": "foo",
                    "targetStageId": "bar",
                    "type": "task",
                    "props": {"taskType": None},
                }
            ],
        }

        updated_workflow = self.wf_controller.update_workflow(initial_state)

        self.assertEqual(updated_workflow, initial_state)

    def test_update_add_stages(self):
        self.wf_controller.update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "path": "foo",
                            "filename": "foo.py",
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow["stages"]), 1)

    def test_update_remove_stages(self):
        self.wf_controller.update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "path": "foo",
                            "filename": "foo.py",
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow["stages"]), 1)
        self.wf_controller.update_workflow(
            {
                "stages": [],
                "transitions": [],
            }
        )
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow["stages"]), 0)

    def test_update_change_stage_position(self):
        self.wf_controller.update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "path": "foo",
                            "filename": "foo.py",
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow["stages"]), 1)
        self.assertEqual(workflow["stages"][0]["position"], {"x": 0, "y": 0})
        self.wf_controller.update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 1, "y": 1},
                        "props": {
                            "filename": "foo.py",
                            "path": "foo",
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow["stages"]), 1)
        self.assertEqual(workflow["stages"][0]["position"], {"x": 1, "y": 1})

    def test_update_change_stage_title(self):
        self.wf_controller.update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "path": "foo",
                            "filename": "foo.py",
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow["stages"]), 1)
        self.assertEqual(workflow["stages"][0]["title"], "Foo")
        self.wf_controller.update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Bar",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "filename": "bar.py",
                            "path": "bar",
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow["stages"]), 1)
        self.assertEqual(workflow["stages"][0]["title"], "Bar")

    def test_update_add_transitions(self):
        self.wf_controller.update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "path": "foo",
                            "filename": "foo.py",
                        },
                    },
                    {
                        "type": "hooks",
                        "id": "bar",
                        "title": "Bar",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "filename": "bar.py",
                            "path": "bar",
                        },
                    },
                ],
                "transitions": [],
            }
        )
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow["transitions"]), 0)
        self.wf_controller.update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "path": "foo",
                            "filename": "foo.py",
                        },
                    },
                    {
                        "type": "hooks",
                        "id": "bar",
                        "title": "Bar",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "filename": "bar.py",
                            "path": "bar",
                        },
                    },
                ],
                "transitions": [
                    {
                        "id": "foo",
                        "sourceStageId": "foo",
                        "targetStageId": "bar",
                        "type": "task",
                        "taskType": None,
                    }
                ],
            }
        )
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow["transitions"]), 1)

    def test_update_remove_transitions(self):
        self.wf_controller.update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "path": "foo",
                            "filename": "foo.py",
                        },
                    },
                    {
                        "type": "hooks",
                        "id": "bar",
                        "title": "Bar",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "filename": "bar.py",
                            "path": "bar",
                        },
                    },
                ],
                "transitions": [
                    {
                        "id": "foo",
                        "sourceStageId": "foo",
                        "targetStageId": "bar",
                        "type": "foo",
                        "taskType": None,
                    }
                ],
            }
        )
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow["transitions"]), 1)
        self.wf_controller.update_workflow(
            {
                "stages": [],
                "transitions": [],
            }
        )
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow["transitions"]), 0)

    def test_single_form(self):
        project = self.repositories.project.load()
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
        self.repositories.project.save(project)

        path = self.wf_controller.get_path(3)
        self.assertEqual(path, ["form"])

    def test_more_then_one_stage(self):
        project = self.repositories.project.load()
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
                    type="task",
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
        self.repositories.project.save(project)

        path = self.wf_controller.get_path(2)
        self.assertEqual(path, ["form", "script"])

    def test_more_stages_then_limit(self):
        project = self.repositories.project.load()
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
                    type="task",
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
        self.repositories.project.save(project)

        path = self.wf_controller.get_path(1)
        self.assertEqual(path, ["form"])

    def test_more_then_one_path(self):
        project = self.repositories.project.load()
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
                    type="task",
                ),
                WorkflowTransition(
                    id="2",
                    target_type="script",
                    target_id="script2",
                    type="task",
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
                    type="task",
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
        self.repositories.project.save(project)

        path = self.wf_controller.get_path(3)
        self.assertEqual(path, ["form0", "script2", "script3"])

    def test_more_than_one_initial_stage(self):
        project = self.repositories.project.load()
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
                    type="task",
                ),
                WorkflowTransition(
                    id="2",
                    target_type="script",
                    target_id="script2",
                    type="task",
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
                    type="task",
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
                    type="task",
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
        self.repositories.project.save(project)

        path = self.wf_controller.get_path(3)
        self.assertEqual(path, ["form1", "form2", "script2"])

    def test_disjointed_graphs(self):
        project = self.repositories.project.load()
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
                    type="task",
                ),
                WorkflowTransition(
                    id="2",
                    target_type="script",
                    target_id="script2",
                    type="task",
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
                    type="task",
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
                    type="task",
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
        self.repositories.project.save(project)

        path = self.wf_controller.get_path(3)
        self.assertEqual(path, ["form1", "form2", "form3"])

    def test_simple_loop(self):
        project = self.repositories.project.load()
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
                    type="task",
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
                    type="task",
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
                    type="task",
                ),
            ],
        )

        project.jobs.append(job0)
        project.forms.append(form0)
        project.scripts.append(script1)
        self.repositories.project.save(project)

        path = self.wf_controller.get_path(3)
        self.assertEqual(path, ["job0", "form0", "script1"])

    def test_dont_enter_in_loops(self):
        project = self.repositories.project.load()
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
                    type="task",
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
                    type="task",
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
                    type="task",
                ),
            ],
        )

        project.jobs.append(job0)
        project.forms.append(form0)
        project.scripts.append(script1)
        self.repositories.project.save(project)

        path = self.wf_controller.get_path(10)
        self.assertEqual(path, ["job0", "form0", "script1"])

    def test_clips_the_largest_path(self):
        project = self.repositories.project.load()
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
                    type="task",
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
                    type="task",
                ),
                WorkflowTransition(
                    id="3",
                    target_type="script",
                    target_id="script1",
                    type="task",
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
                    type="task",
                ),
                WorkflowTransition(
                    id="5",
                    target_type="script",
                    target_id="script2",
                    type="task",
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
                    type="task",
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
        self.repositories.project.save(project)

        path = self.wf_controller.get_path(3)
        self.assertEqual(path, ["form0", "form1", "form2"])
