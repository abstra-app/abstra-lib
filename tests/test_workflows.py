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
                    "input": False,
                    "output": False,
                    "module": None,
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
                    "input": False,
                    "output": False,
                    "module": None,
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
                    "input": False,
                    "output": False,
                    "module": None,
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
                    "input": False,
                    "output": False,
                    "module": None,
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
                    "input": False,
                    "output": False,
                    "module": None,
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

    def test_update_deduplicates_transitions(self):
        """Test that duplicate transitions are removed during update_workflow"""
        # Create workflow with duplicate transitions (simulating corrupted frontend state)
        workflow_with_duplicates = {
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
                    "id": "transition-1",
                    "sourceStageId": "foo",
                    "targetStageId": "bar",
                    "type": "task",
                    "props": {"taskType": None},
                },
                # Duplicate transition with same ID
                {
                    "id": "transition-1",
                    "sourceStageId": "foo",
                    "targetStageId": "bar",
                    "type": "task",
                    "props": {"taskType": None},
                },
                # Another duplicate
                {
                    "id": "transition-1",
                    "sourceStageId": "foo",
                    "targetStageId": "bar",
                    "type": "task",
                    "props": {"taskType": None},
                },
            ],
        }

        # Update workflow with duplicates
        updated_workflow = self.wf_controller.update_workflow(workflow_with_duplicates)

        # Verify only one transition is returned
        self.assertEqual(len(updated_workflow["transitions"]), 1)
        self.assertEqual(updated_workflow["transitions"][0]["id"], "transition-1")

        # Verify only one transition is saved in the project
        project = self.repositories.project.load()
        self.assertEqual(len(project.forms[0].workflow_transitions), 1)
        self.assertEqual(project.forms[0].workflow_transitions[0].id, "transition-1")

        # Verify subsequent loads also return only one transition
        workflow_after_reload = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow_after_reload["transitions"]), 1)

    def test_update_preserves_unique_transitions_while_removing_duplicates(self):
        """Test that unique transitions are preserved while duplicates are removed"""
        workflow_with_mixed_transitions = {
            "stages": [
                {
                    "type": "forms",
                    "id": "form1",
                    "title": "Form 1",
                    "props": {"filename": "form1.py", "path": "form1"},
                    "position": {"x": 0, "y": 0},
                },
                {
                    "type": "scripts",
                    "id": "script1",
                    "title": "Script 1",
                    "props": {"filename": "script1.py"},
                    "position": {"x": 100, "y": 0},
                },
                {
                    "type": "hooks",
                    "id": "hook1",
                    "title": "Hook 1",
                    "props": {"filename": "hook1.py", "path": "hook1"},
                    "position": {"x": 200, "y": 0},
                },
            ],
            "transitions": [
                {
                    "id": "trans-1",
                    "sourceStageId": "form1",
                    "targetStageId": "script1",
                    "type": "task",
                    "props": {"taskType": None},
                },
                {
                    "id": "trans-2",
                    "sourceStageId": "script1",
                    "targetStageId": "hook1",
                    "type": "task",
                    "props": {"taskType": None},
                },
                # Duplicate of trans-1
                {
                    "id": "trans-1",
                    "sourceStageId": "form1",
                    "targetStageId": "script1",
                    "type": "task",
                    "props": {"taskType": None},
                },
            ],
        }

        updated_workflow = self.wf_controller.update_workflow(
            workflow_with_mixed_transitions
        )

        # Should have exactly 2 unique transitions
        self.assertEqual(len(updated_workflow["transitions"]), 2)

        # Verify both unique transitions are present
        transition_ids = [t["id"] for t in updated_workflow["transitions"]]
        self.assertIn("trans-1", transition_ids)
        self.assertIn("trans-2", transition_ids)

        # Verify in project
        project = self.repositories.project.load()
        form = project.forms[0]
        script = project.scripts[0]

        self.assertEqual(len(form.workflow_transitions), 1)
        self.assertEqual(form.workflow_transitions[0].id, "trans-1")

        self.assertEqual(len(script.workflow_transitions), 1)
        self.assertEqual(script.workflow_transitions[0].id, "trans-2")

    def test_update_prevents_duplicate_source_target_pairs(self):
        """Test that multiple transitions with same source→target are treated as updates"""
        workflow_with_duplicate_directions = {
            "stages": [
                {
                    "type": "forms",
                    "id": "form1",
                    "title": "Form 1",
                    "props": {"filename": "form1.py", "path": "form1"},
                    "position": {"x": 0, "y": 0},
                },
                {
                    "type": "scripts",
                    "id": "script1",
                    "title": "Script 1",
                    "props": {"filename": "script1.py"},
                    "position": {"x": 100, "y": 0},
                },
            ],
            "transitions": [
                {
                    "id": "trans-1",
                    "sourceStageId": "form1",
                    "targetStageId": "script1",
                    "type": "task",
                    "props": {"taskType": "type1"},
                },
                {
                    "id": "trans-2",
                    "sourceStageId": "form1",
                    "targetStageId": "script1",  # Same source→target
                    "type": "task",
                    "props": {"taskType": "type2"},
                },
                {
                    "id": "trans-3",
                    "sourceStageId": "form1",
                    "targetStageId": "script1",  # Same source→target again
                    "type": "task",
                    "props": {"taskType": "type3"},
                },
            ],
        }

        updated_workflow = self.wf_controller.update_workflow(
            workflow_with_duplicate_directions
        )

        # Should have only 1 transition (last one wins as an update)
        self.assertEqual(len(updated_workflow["transitions"]), 1)

        # Should be the last transition (trans-3) since later ones replace earlier
        transition = updated_workflow["transitions"][0]
        self.assertEqual(transition["id"], "trans-3")
        self.assertEqual(transition["props"]["taskType"], "type3")

        # Verify in project
        project = self.repositories.project.load()
        form = project.forms[0]
        self.assertEqual(len(form.workflow_transitions), 1)
        self.assertEqual(form.workflow_transitions[0].task_type, "type3")

    def test_update_allows_bidirectional_transitions(self):
        """Test that a→b and b→a are both allowed (bidirectional edges)"""
        workflow_with_bidirectional = {
            "stages": [
                {
                    "type": "forms",
                    "id": "form1",
                    "title": "Form 1",
                    "props": {"filename": "form1.py", "path": "form1"},
                    "position": {"x": 0, "y": 0},
                },
                {
                    "type": "scripts",
                    "id": "script1",
                    "title": "Script 1",
                    "props": {"filename": "script1.py"},
                    "position": {"x": 100, "y": 0},
                },
            ],
            "transitions": [
                {
                    "id": "forward",
                    "sourceStageId": "form1",
                    "targetStageId": "script1",
                    "type": "task",
                    "props": {"taskType": "forward_type"},
                },
                {
                    "id": "backward",
                    "sourceStageId": "script1",
                    "targetStageId": "form1",  # Reverse direction
                    "type": "task",
                    "props": {"taskType": "backward_type"},
                },
            ],
        }

        updated_workflow = self.wf_controller.update_workflow(
            workflow_with_bidirectional
        )

        # Should have both transitions (bidirectional is allowed)
        self.assertEqual(len(updated_workflow["transitions"]), 2)

        # Verify both directions exist
        transition_ids = [t["id"] for t in updated_workflow["transitions"]]
        self.assertIn("forward", transition_ids)
        self.assertIn("backward", transition_ids)

        # Verify in project
        project = self.repositories.project.load()
        form = project.forms[0]
        script = project.scripts[0]

        # form1 → script1
        self.assertEqual(len(form.workflow_transitions), 1)
        self.assertEqual(form.workflow_transitions[0].id, "forward")
        self.assertEqual(form.workflow_transitions[0].task_type, "forward_type")

        # script1 → form1
        self.assertEqual(len(script.workflow_transitions), 1)
        self.assertEqual(script.workflow_transitions[0].id, "backward")
        self.assertEqual(script.workflow_transitions[0].task_type, "backward_type")

    def test_update_complex_deduplication_scenario(self):
        """Test complex scenario with multiple stages and various duplicate patterns"""
        workflow_complex = {
            "stages": [
                {
                    "type": "forms",
                    "id": "A",
                    "title": "A",
                    "props": {"filename": "a.py", "path": "a"},
                    "position": {"x": 0, "y": 0},
                },
                {
                    "type": "scripts",
                    "id": "B",
                    "title": "B",
                    "props": {"filename": "b.py"},
                    "position": {"x": 100, "y": 0},
                },
                {
                    "type": "hooks",
                    "id": "C",
                    "title": "C",
                    "props": {"filename": "c.py", "path": "c"},
                    "position": {"x": 200, "y": 0},
                },
            ],
            "transitions": [
                # A → B (first)
                {
                    "id": "1",
                    "sourceStageId": "A",
                    "targetStageId": "B",
                    "type": "task",
                    "props": {"taskType": "old"},
                },
                # B → C (unique)
                {
                    "id": "2",
                    "sourceStageId": "B",
                    "targetStageId": "C",
                    "type": "task",
                    "props": {"taskType": None},
                },
                # A → B (duplicate direction, should replace first)
                {
                    "id": "3",
                    "sourceStageId": "A",
                    "targetStageId": "B",
                    "type": "task",
                    "props": {"taskType": "new"},
                },
                # B → A (reverse direction, should be kept)
                {
                    "id": "4",
                    "sourceStageId": "B",
                    "targetStageId": "A",
                    "type": "task",
                    "props": {"taskType": "reverse"},
                },
                # C → A (unique)
                {
                    "id": "5",
                    "sourceStageId": "C",
                    "targetStageId": "A",
                    "type": "task",
                    "props": {"taskType": None},
                },
            ],
        }

        updated_workflow = self.wf_controller.update_workflow(workflow_complex)

        # Should have 4 unique transitions:
        # A→B (latest), B→C, B→A, C→A
        self.assertEqual(len(updated_workflow["transitions"]), 4)

        # Verify A→B used the latest transition (id=3)
        a_to_b = [
            t
            for t in updated_workflow["transitions"]
            if t["sourceStageId"] == "A" and t["targetStageId"] == "B"
        ]
        self.assertEqual(len(a_to_b), 1)
        self.assertEqual(a_to_b[0]["id"], "3")
        self.assertEqual(a_to_b[0]["props"]["taskType"], "new")

        # Verify B→A exists (bidirectional)
        b_to_a = [
            t
            for t in updated_workflow["transitions"]
            if t["sourceStageId"] == "B" and t["targetStageId"] == "A"
        ]
        self.assertEqual(len(b_to_a), 1)
        self.assertEqual(b_to_a[0]["id"], "4")

    def test_update_and_reload_does_not_duplicate_transitions(self):
        """
        Test that simulates the exact bug: update workflow (move stage) + reload
        should NOT duplicate transitions on subsequent GET requests.

        This reproduces the issue where:
        1. User moves a stage
        2. Frontend saves via PUT /workflows
        3. Page reloads
        4. GET /workflows returns DOUBLE the transitions
        """
        # Step 1: Create initial workflow with 2 stages and 1 transition
        initial_workflow = {
            "stages": [
                {
                    "type": "forms",
                    "id": "form1",
                    "title": "Form 1",
                    "props": {"filename": "form1.py", "path": "form1"},
                    "position": {"x": 100, "y": 100},
                },
                {
                    "type": "scripts",
                    "id": "script1",
                    "title": "Script 1",
                    "props": {"filename": "script1.py"},
                    "position": {"x": 200, "y": 100},
                },
            ],
            "transitions": [
                {
                    "id": "trans-1",
                    "sourceStageId": "form1",
                    "targetStageId": "script1",
                    "type": "task",
                    "props": {"taskType": None},
                }
            ],
        }

        # Save initial workflow
        self.wf_controller.update_workflow(initial_workflow)

        # Verify initial state
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(
            len(workflow["transitions"]), 1, "Initial: should have 1 transition"
        )
        self.assertEqual(workflow["transitions"][0]["id"], "trans-1")

        # Step 2: Simulate user moving a stage (update position)
        # This is what happens when user drags a stage in the UI
        updated_workflow = {
            "stages": [
                {
                    "type": "forms",
                    "id": "form1",
                    "title": "Form 1",
                    "props": {"filename": "form1.py", "path": "form1"},
                    "position": {"x": 150, "y": 150},  # Position changed
                },
                {
                    "type": "scripts",
                    "id": "script1",
                    "title": "Script 1",
                    "props": {"filename": "script1.py"},
                    "position": {"x": 250, "y": 150},  # Position changed
                },
            ],
            "transitions": [
                {
                    "id": "trans-1",
                    "sourceStageId": "form1",
                    "targetStageId": "script1",
                    "type": "task",
                    "props": {"taskType": None},
                }
            ],
        }

        # Update workflow (simulates PUT request)
        self.wf_controller.update_workflow(updated_workflow)

        # Step 3: Simulate page reload - GET the workflow again
        # This is what happens when user refreshes the page
        reloaded_workflow = self.wf_controller.get_workflow_settings()

        # BUG CHECK: Transitions should NOT duplicate after reload
        self.assertEqual(
            len(reloaded_workflow["transitions"]),
            1,
            f"After reload: should still have 1 transition, got {len(reloaded_workflow['transitions'])}",
        )
        self.assertEqual(reloaded_workflow["transitions"][0]["id"], "trans-1")

        # Step 4: Do it again to make sure it doesn't accumulate
        # Simulate another update (move again)
        updated_workflow_2 = {
            "stages": [
                {
                    "type": "forms",
                    "id": "form1",
                    "title": "Form 1",
                    "props": {"filename": "form1.py", "path": "form1"},
                    "position": {"x": 200, "y": 200},  # Position changed again
                },
                {
                    "type": "scripts",
                    "id": "script1",
                    "title": "Script 1",
                    "props": {"filename": "script1.py"},
                    "position": {"x": 300, "y": 200},  # Position changed again
                },
            ],
            "transitions": [
                {
                    "id": "trans-1",
                    "sourceStageId": "form1",
                    "targetStageId": "script1",
                    "type": "task",
                    "props": {"taskType": None},
                }
            ],
        }

        self.wf_controller.update_workflow(updated_workflow_2)

        # Reload again
        reloaded_workflow_2 = self.wf_controller.get_workflow_settings()

        # Should STILL be 1 transition (not 2, not 4, not any accumulation)
        self.assertEqual(
            len(reloaded_workflow_2["transitions"]),
            1,
            f"After 2nd reload: should still have 1 transition, got {len(reloaded_workflow_2['transitions'])}",
        )
        self.assertEqual(reloaded_workflow_2["transitions"][0]["id"], "trans-1")

    def test_multiple_update_reload_cycles_with_multiple_transitions(self):
        """
        Test multiple update/reload cycles with a more complex workflow
        to ensure transitions never duplicate regardless of complexity
        """
        # Create workflow with multiple transitions
        initial_workflow = {
            "stages": [
                {
                    "type": "forms",
                    "id": "A",
                    "title": "A",
                    "props": {"filename": "a.py", "path": "a"},
                    "position": {"x": 0, "y": 0},
                },
                {
                    "type": "scripts",
                    "id": "B",
                    "title": "B",
                    "props": {"filename": "b.py"},
                    "position": {"x": 100, "y": 0},
                },
                {
                    "type": "hooks",
                    "id": "C",
                    "title": "C",
                    "props": {"filename": "c.py", "path": "c"},
                    "position": {"x": 200, "y": 0},
                },
            ],
            "transitions": [
                {
                    "id": "t1",
                    "sourceStageId": "A",
                    "targetStageId": "B",
                    "type": "task",
                    "props": {"taskType": None},
                },
                {
                    "id": "t2",
                    "sourceStageId": "B",
                    "targetStageId": "C",
                    "type": "task",
                    "props": {"taskType": None},
                },
            ],
        }

        self.wf_controller.update_workflow(initial_workflow)

        # Perform 5 update/reload cycles
        for i in range(5):
            # Update positions
            updated = self.wf_controller.get_workflow_settings()
            for stage in updated["stages"]:
                stage["position"]["x"] += 10
                stage["position"]["y"] += 10

            # Save update
            self.wf_controller.update_workflow(updated)

            # Reload
            reloaded = self.wf_controller.get_workflow_settings()

            # Should always have exactly 2 transitions
            self.assertEqual(
                len(reloaded["transitions"]),
                2,
                f"Cycle {i + 1}: should have 2 transitions, got {len(reloaded['transitions'])}",
            )

            # Verify transition IDs are correct
            transition_ids = [t["id"] for t in reloaded["transitions"]]
            self.assertIn("t1", transition_ids)
            self.assertIn("t2", transition_ids)
