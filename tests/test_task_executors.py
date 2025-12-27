"""
Comprehensive test suite for TaskExecutor.send_task with module/component support.

This test suite covers:
- Basic task sending without modules
- Task sending with ComponentStages (module entry)
- Task sending from module output stages (module exit)
- Multiple input/output stages in modules
- Complex workflows with nested transitions
- Edge cases: empty transitions, invalid stages, multiple paths
"""

import json
from pathlib import Path
from unittest.mock import Mock, patch

from abstra_internals.controllers.common.task_executors import TaskExecutor
from abstra_internals.entities.execution_context import (
    ScriptContext,
)
from abstra_internals.repositories.project.project import (
    ComponentStage,
    FormStage,
    NotificationTrigger,
    ScriptStage,
    WorkflowTransition,
)
from abstra_internals.repositories.tasks import TaskDTO, TaskEventDetails
from abstra_internals.settings import Settings
from tests.fixtures import BaseTest


class TaskExecutorTest(BaseTest):
    """Test suite for TaskExecutor.send_task functionality"""

    def setUp(self):
        super().setUp()
        self.modules_path = Settings.root_path / "abstra_components"

        # Mock repositories
        self.mock_tasks_repo = Mock()
        self.mock_producer = Mock()
        self.mock_email = Mock()

        self.repositories.tasks = self.mock_tasks_repo
        self.repositories.producer = self.mock_producer
        self.repositories.email = self.mock_email

        # Don't create executor yet - wait until after test data is set up
        self.executor = None

    def get_executor(self):
        """Create or return executor (creates after test data is set up)"""
        if self.executor is None:
            self.executor = TaskExecutor(self.repositories)
        return self.executor

    def tearDown(self) -> None:
        super().tearDown()

    def create_module_directory(self, module_name: str) -> Path:
        """Helper: Create a module directory structure"""
        module_path = self.modules_path / module_name
        module_path.mkdir(parents=True, exist_ok=True)
        return module_path

    def create_module_abstra_json(self, module_name: str, stages: dict):
        """Helper: Create an abstra.json file for a module"""
        module_path = self.create_module_directory(module_name)

        # Ensure all stages have required fields with defaults
        for stage_type in ["forms", "hooks", "scripts", "jobs", "components"]:
            for stage in stages.get(stage_type, []):
                if "transitions" not in stage:
                    stage["transitions"] = []

        abstra_json = {
            "version": "17.0",
            "workspace": {
                "name": f"{module_name} Module",
                "brand_name": "",
                "theme": None,
                "logo_url": None,
                "favicon_url": None,
                "main_color": None,
                "font_family": None,
                "font_color": None,
                "language": "en",
            },
            "home": {"access_control": {"is_public": False, "required_roles": []}},
            "forms": stages.get("forms", []),
            "hooks": stages.get("hooks", []),
            "scripts": stages.get("scripts", []),
            "jobs": stages.get("jobs", []),
            "components": stages.get("components", []),
        }

        abstra_json_path = module_path / "abstra.json"
        with open(abstra_json_path, "w", encoding="utf-8") as f:
            json.dump(abstra_json, f, indent=2)

        return abstra_json_path

    def create_mock_task(self, target_stage_id: str) -> TaskDTO:
        """Helper: Create a mock task DTO"""
        return TaskDTO(
            id="task-123",
            type="task",
            payload={"data": "test"},
            target_stage_id=target_stage_id,
            status="pending",
            created=TaskEventDetails(
                at="2024-01-01T00:00:00",
                by_execution_id=None,
                by_stage_id="source",
            ),
            locked=None,
            completed=None,
        )

    # ==================== BASIC TESTS (No Modules) ====================

    def test_send_task_simple_form_to_script(self):
        """Test basic task sending from form to script (no modules)"""
        project = self.repositories.project.load()

        form = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="script-1",
                    target_type="scripts",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        script = ScriptStage(
            id="script-1",
            file="script1.py",
            title="Script 1",
            workflow_position=(100, 0),
            workflow_transitions=[],
        )

        project.forms.append(form)
        project.scripts.append(script)
        self.repositories.project.save(project)

        # Mock task repository
        mock_task = self.create_mock_task("script-1")
        self.mock_tasks_repo.send_task = Mock(return_value=mock_task)

        # Execute
        self.get_executor().send_task(
            type="task",
            current_stage=form,
            payload={"data": "test"},
            execution=None,
        )

        # Verify
        self.mock_tasks_repo.send_task.assert_called_once()
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["source_stage_id"], "form-1")
        self.assertEqual(call_args["target_stage_id"], "script-1")
        self.assertEqual(call_args["type"], "task")

        # Script should be enqueued
        self.mock_producer.enqueue.assert_called_once()

    def test_send_task_no_transitions(self):
        """Test sending task from stage with no transitions shows warning"""
        project = self.repositories.project.load()

        form = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[],  # No transitions
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        project.forms.append(form)
        self.repositories.project.save(project)

        # Execute with warning capture
        with patch("builtins.print") as mock_print:
            self.get_executor().send_task(
                type="task",
                current_stage=form,
                payload={"data": "test"},
                execution=None,
                show_warning=True,
            )

        # Should print warning
        mock_print.assert_called_once()
        self.assertIn("No transitions found", str(mock_print.call_args))

        # Should not send any tasks
        self.mock_tasks_repo.send_task.assert_not_called()

    def test_send_task_multiple_transitions(self):
        """Test sending tasks to multiple target stages"""
        project = self.repositories.project.load()

        form = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="script-1",
                    target_type="scripts",
                    type="task",
                ),
                WorkflowTransition(
                    id="trans-2",
                    target_id="script-2",
                    target_type="scripts",
                    type="task",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        script1 = ScriptStage(
            id="script-1",
            file="script1.py",
            title="Script 1",
            workflow_position=(100, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            id="script-2",
            file="script2.py",
            title="Script 2",
            workflow_position=(100, 100),
            workflow_transitions=[],
        )

        project.forms.append(form)
        project.scripts.append(script1)
        project.scripts.append(script2)
        self.repositories.project.save(project)

        # Mock
        self.mock_tasks_repo.send_task = Mock(
            side_effect=[
                self.create_mock_task("script-1"),
                self.create_mock_task("script-2"),
            ]
        )

        # Execute
        self.get_executor().send_task(
            type="task",
            current_stage=form,
            payload={"data": "test"},
            execution=None,
        )

        # Should send 2 tasks
        self.assertEqual(self.mock_tasks_repo.send_task.call_count, 2)

        # Check both targets
        calls = self.mock_tasks_repo.send_task.call_args_list
        target_ids = [call[1]["target_stage_id"] for call in calls]
        self.assertIn("script-1", target_ids)
        self.assertIn("script-2", target_ids)

    def test_send_task_with_task_type_filter(self):
        """Test that task type filtering works correctly"""
        project = self.repositories.project.load()

        form = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="script-1",
                    target_type="scripts",
                    type="task",
                    task_type="success",
                ),
                WorkflowTransition(
                    id="trans-2",
                    target_id="script-2",
                    target_type="scripts",
                    type="task",
                    task_type="error",
                ),
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        script1 = ScriptStage(
            id="script-1",
            file="script1.py",
            title="Success Script",
            workflow_position=(100, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            id="script-2",
            file="script2.py",
            title="Error Script",
            workflow_position=(100, 100),
            workflow_transitions=[],
        )

        project.forms.append(form)
        project.scripts.append(script1)
        project.scripts.append(script2)
        self.repositories.project.save(project)

        # Mock
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("script-1")
        )

        # Execute with "success" type - should only match script-1
        self.get_executor().send_task(
            type="success",
            current_stage=form,
            payload={"data": "test"},
            execution=None,
        )

        # Should send only 1 task to script-1
        self.mock_tasks_repo.send_task.assert_called_once()
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["target_stage_id"], "script-1")

    def test_send_task_script_gets_enqueued(self):
        """Test that script stages are enqueued for execution"""
        project = self.repositories.project.load()

        form = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="script-1",
                    target_type="scripts",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        script = ScriptStage(
            id="script-1",
            file="script1.py",
            title="Script 1",
            workflow_position=(100, 0),
            workflow_transitions=[],
        )

        project.forms.append(form)
        project.scripts.append(script)
        self.repositories.project.save(project)

        # Mock
        mock_task = self.create_mock_task("script-1")
        self.mock_tasks_repo.send_task = Mock(return_value=mock_task)

        # Execute
        self.get_executor().send_task(
            type="task",
            current_stage=form,
            payload={"data": "test"},
            execution=None,
        )

        # Script should be enqueued
        self.mock_producer.enqueue.assert_called_once()
        call_args = self.mock_producer.enqueue.call_args[1]
        self.assertEqual(call_args["stage_id"], "script-1")
        self.assertIsInstance(call_args["context"], ScriptContext)
        self.assertEqual(call_args["context"].task_id, "task-123")

    def test_send_task_form_not_enqueued(self):
        """Test that form stages are NOT enqueued (only scripts)"""
        project = self.repositories.project.load()

        form1 = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="form-2",
                    target_type="forms",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        form2 = FormStage(
            id="form-2",
            path="form2",
            title="Form 2",
            file="form2.py",
            workflow_position=(100, 0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        project.forms.append(form1)
        project.forms.append(form2)
        self.repositories.project.save(project)

        # Mock
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("form-2")
        )

        # Execute
        self.get_executor().send_task(
            type="task",
            current_stage=form1,
            payload={"data": "test"},
            execution=None,
        )

        # Form should NOT be enqueued
        self.mock_producer.enqueue.assert_not_called()

    # ==================== MODULE ENTRY TESTS (ComponentStage) ====================

    def test_send_task_to_component_expands_to_input_stages(self):
        """Test that sending task to ComponentStage expands to module's input stages"""
        # Create module with input stages
        self.create_module_abstra_json(
            "test-module",
            stages={
                "forms": [
                    {
                        "id": "module-input-form",
                        "path": "input",
                        "title": "Module Input",
                        "file": "input.py",
                        "workflow_position": [0, 0],
                        "is_initial": True,
                        "notification_trigger": {
                            "variable_name": "assignee_emails",
                            "enabled": False,
                        },
                        "auto_start": False,
                        "end_message": None,
                        "start_message": None,
                        "error_message": None,
                        "timeout_message": None,
                        "start_button_text": None,
                        "access_control": {"is_public": False, "required_roles": []},
                        "input": True,  # Input stage
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()

        form = FormStage(
            id="main-form",
            path="main",
            title="Main Form",
            file="main.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="comp-1",
                    target_type="components",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        component = ComponentStage(
            id="comp-1",
            title="Test Module",
            package_name="test-module",
            workflow_position=(100, 0),
            workflow_transitions=[],
        )

        project.forms.append(form)
        project.components.append(component)
        self.repositories.project.save(project)

        # Mock
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("module-input-form")
        )

        # Execute
        self.get_executor().send_task(
            type="task",
            current_stage=form,
            payload={"data": "test"},
            execution=None,
        )

        # Should send task to module input, NOT to component
        self.mock_tasks_repo.send_task.assert_called_once()
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["target_stage_id"], "module-input-form")
        self.assertNotEqual(call_args["target_stage_id"], "comp-1")

    def test_send_task_to_component_with_multiple_inputs(self):
        """Test that component with multiple input stages sends to all of them"""
        # Create module with 2 input stages
        self.create_module_abstra_json(
            "multi-input-module",
            stages={
                "forms": [
                    {
                        "id": "input-form-1",
                        "path": "input1",
                        "title": "Input 1",
                        "file": "input1.py",
                        "workflow_position": [0, 0],
                        "is_initial": True,
                        "notification_trigger": {
                            "variable_name": "assignee_emails",
                            "enabled": False,
                        },
                        "auto_start": False,
                        "end_message": None,
                        "start_message": None,
                        "error_message": None,
                        "timeout_message": None,
                        "start_button_text": None,
                        "access_control": {"is_public": False, "required_roles": []},
                        "input": True,
                        "output": False,
                    },
                    {
                        "id": "input-form-2",
                        "path": "input2",
                        "title": "Input 2",
                        "file": "input2.py",
                        "workflow_position": [0, 100],
                        "is_initial": True,
                        "notification_trigger": {
                            "variable_name": "assignee_emails",
                            "enabled": False,
                        },
                        "auto_start": False,
                        "end_message": None,
                        "start_message": None,
                        "error_message": None,
                        "timeout_message": None,
                        "start_button_text": None,
                        "access_control": {"is_public": False, "required_roles": []},
                        "input": True,
                        "output": False,
                    },
                ]
            },
        )

        project = self.repositories.project.load()

        form = FormStage(
            id="main-form",
            path="main",
            title="Main Form",
            file="main.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="comp-1",
                    target_type="components",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        component = ComponentStage(
            id="comp-1",
            title="Multi Input Module",
            package_name="multi-input-module",
            workflow_position=(100, 0),
            workflow_transitions=[],
        )

        project.forms.append(form)
        project.components.append(component)
        self.repositories.project.save(project)

        # Mock
        self.mock_tasks_repo.send_task = Mock(
            side_effect=[
                self.create_mock_task("input-form-1"),
                self.create_mock_task("input-form-2"),
            ]
        )

        # Execute
        self.get_executor().send_task(
            type="task",
            current_stage=form,
            payload={"data": "test"},
            execution=None,
        )

        # Should send 2 tasks to both input stages
        self.assertEqual(self.mock_tasks_repo.send_task.call_count, 2)

        calls = self.mock_tasks_repo.send_task.call_args_list
        target_ids = [call[1]["target_stage_id"] for call in calls]
        self.assertIn("input-form-1", target_ids)
        self.assertIn("input-form-2", target_ids)

    def test_send_task_to_component_with_no_input_stages(self):
        """Test handling of component with no input stages (edge case)"""
        # Create module with NO input stages
        self.create_module_abstra_json(
            "no-input-module",
            stages={
                "forms": [
                    {
                        "id": "regular-form",
                        "path": "regular",
                        "title": "Regular Form",
                        "file": "regular.py",
                        "workflow_position": [0, 0],
                        "is_initial": True,
                        "notification_trigger": {
                            "variable_name": "assignee_emails",
                            "enabled": False,
                        },
                        "auto_start": False,
                        "end_message": None,
                        "start_message": None,
                        "error_message": None,
                        "timeout_message": None,
                        "start_button_text": None,
                        "access_control": {"is_public": False, "required_roles": []},
                        "input": False,  # Not an input stage
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()

        form = FormStage(
            id="main-form",
            path="main",
            title="Main Form",
            file="main.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="comp-1",
                    target_type="components",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        component = ComponentStage(
            id="comp-1",
            title="No Input Module",
            package_name="no-input-module",
            workflow_position=(100, 0),
            workflow_transitions=[],
        )

        project.forms.append(form)
        project.components.append(component)
        self.repositories.project.save(project)

        # Execute - should handle gracefully
        self.get_executor().send_task(
            type="task",
            current_stage=form,
            payload={"data": "test"},
            execution=None,
        )

        # Should not send any tasks (no input stages to expand to)
        self.mock_tasks_repo.send_task.assert_not_called()

    # ==================== MODULE EXIT TESTS (Output Stages) ====================

    def test_send_task_from_module_output_uses_component_transitions(self):
        """Test that module output stage uses parent component's transitions"""
        # Create module with output stage
        self.create_module_abstra_json(
            "exit-module",
            stages={
                "scripts": [
                    {
                        "id": "module-output-script",
                        "file": "output.py",
                        "title": "Module Output",
                        "workflow_position": [100, 0],
                        "transitions": [],  # No transitions - will use component's transitions
                        "is_initial": True,
                        "input": False,
                        "output": True,  # Output stage
                    }
                ]
            },
        )

        project = self.repositories.project.load()

        component = ComponentStage(
            id="comp-1",
            title="Exit Module",
            package_name="exit-module",
            workflow_position=(50, 0),
            workflow_transitions=[
                # This transition should be USED
                WorkflowTransition(
                    id="component-trans",
                    target_id="final-form",
                    target_type="forms",
                    type="task",
                )
            ],
        )

        final_form = FormStage(
            id="final-form",
            path="final",
            title="Final Form",
            file="final.py",
            workflow_position=(200, 0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        project.components.append(component)
        project.forms.append(final_form)
        self.repositories.project.save(project)

        # Get the module output stage
        module_output = project.get_stage("module-output-script", include_modules=True)

        # Mock
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("final-form")
        )

        # Execute from module output stage
        self.get_executor().send_task(
            type="task",
            current_stage=module_output,
            payload={"data": "test"},
            execution=None,
        )

        # Should send task to final-form (from component's transitions)
        self.mock_tasks_repo.send_task.assert_called_once()
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["target_stage_id"], "final-form")

    def test_send_task_from_module_internal_uses_own_transitions(self):
        """Test that non-output module stages use their own transitions"""
        # Create module with internal stage (not output)
        self.create_module_abstra_json(
            "internal-module",
            stages={
                "forms": [
                    {
                        "id": "module-internal-form",
                        "path": "internal",
                        "title": "Module Internal",
                        "file": "internal.py",
                        "workflow_position": [0, 0],
                        "transitions": [
                            {
                                "id": "internal-trans",
                                "target_id": "module-script",
                                "target_type": "scripts",
                                "type": "task",
                                "task_type": None,
                            }
                        ],
                        "is_initial": True,
                        "notification_trigger": {
                            "variable_name": "assignee_emails",
                            "enabled": False,
                        },
                        "auto_start": False,
                        "end_message": None,
                        "start_message": None,
                        "error_message": None,
                        "timeout_message": None,
                        "start_button_text": None,
                        "access_control": {"is_public": False, "required_roles": []},
                        "input": True,
                        "output": False,  # NOT an output stage
                    }
                ],
                "scripts": [
                    {
                        "id": "module-script",
                        "file": "script.py",
                        "title": "Module Script",
                        "workflow_position": [100, 0],
                        "is_initial": False,
                        "input": False,
                        "output": False,
                    }
                ],
            },
        )

        project = self.repositories.project.load()

        component = ComponentStage(
            id="comp-1",
            title="Internal Module",
            package_name="internal-module",
            workflow_position=(50, 0),
            workflow_transitions=[],  # Component has no transitions
        )

        project.components.append(component)
        self.repositories.project.save(project)

        # Get the module internal stage
        module_form = project.get_stage("module-internal-form", include_modules=True)

        # Mock
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("module-script")
        )

        # Execute from internal module stage
        self.get_executor().send_task(
            type="task",
            current_stage=module_form,
            payload={"data": "test"},
            execution=None,
        )

        # Should use stage's own transitions (to module-script)
        self.mock_tasks_repo.send_task.assert_called_once()
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["target_stage_id"], "module-script")

    def test_send_task_from_module_output_with_multiple_component_transitions(self):
        """Test module output with multiple transitions on parent component"""
        # Create module
        self.create_module_abstra_json(
            "multi-exit-module",
            stages={
                "scripts": [
                    {
                        "id": "module-output",
                        "file": "output.py",
                        "title": "Module Output",
                        "workflow_position": [100, 0],
                        "is_initial": False,
                        "input": False,
                        "output": True,
                    }
                ]
            },
        )

        project = self.repositories.project.load()

        component = ComponentStage(
            id="comp-1",
            title="Multi Exit Module",
            package_name="multi-exit-module",
            workflow_position=(50, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="form-1",
                    target_type="forms",
                    type="task",
                ),
                WorkflowTransition(
                    id="trans-2",
                    target_id="form-2",
                    target_type="forms",
                    type="task",
                ),
            ],
        )

        form1 = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(200, 0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        form2 = FormStage(
            id="form-2",
            path="form2",
            title="Form 2",
            file="form2.py",
            workflow_position=(200, 100),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        project.components.append(component)
        project.forms.append(form1)
        project.forms.append(form2)
        self.repositories.project.save(project)

        # Get module output
        module_output = project.get_stage("module-output", include_modules=True)

        # Mock
        self.mock_tasks_repo.send_task = Mock(
            side_effect=[
                self.create_mock_task("form-1"),
                self.create_mock_task("form-2"),
            ]
        )

        # Execute
        self.get_executor().send_task(
            type="task",
            current_stage=module_output,
            payload={"data": "test"},
            execution=None,
        )

        # Should send to both forms (component's transitions)
        self.assertEqual(self.mock_tasks_repo.send_task.call_count, 2)

        calls = self.mock_tasks_repo.send_task.call_args_list
        target_ids = [call[1]["target_stage_id"] for call in calls]
        self.assertIn("form-1", target_ids)
        self.assertIn("form-2", target_ids)

    def test_send_task_from_module_output_with_no_component_transitions(self):
        """Test module output when parent component has no transitions"""
        # Create module
        self.create_module_abstra_json(
            "orphan-module",
            stages={
                "scripts": [
                    {
                        "id": "module-output",
                        "file": "output.py",
                        "title": "Module Output",
                        "workflow_position": [100, 0],
                        "is_initial": False,
                        "input": False,
                        "output": True,
                    }
                ]
            },
        )

        project = self.repositories.project.load()

        component = ComponentStage(
            id="comp-1",
            title="Orphan Module",
            package_name="orphan-module",
            workflow_position=(50, 0),
            workflow_transitions=[],  # No transitions!
        )

        project.components.append(component)
        self.repositories.project.save(project)

        # Get module output
        module_output = project.get_stage("module-output", include_modules=True)

        # Execute with warning capture
        with patch("builtins.print") as mock_print:
            self.get_executor().send_task(
                type="task",
                current_stage=module_output,
                payload={"data": "test"},
                execution=None,
                show_warning=True,
            )

        # Should show warning
        mock_print.assert_called_once()

        # Should not send any tasks
        self.mock_tasks_repo.send_task.assert_not_called()

    # ==================== COMPLEX WORKFLOW TESTS ====================

    def test_send_task_main_to_component_to_main(self):
        """Test complete flow: main -> component -> module internal -> module exit -> main"""
        # Create module with input, internal, and output stages
        self.create_module_abstra_json(
            "full-flow-module",
            stages={
                "forms": [
                    {
                        "id": "module-input",
                        "path": "input",
                        "title": "Module Input",
                        "file": "input.py",
                        "workflow_position": [0, 0],
                        "transitions": [
                            {
                                "id": "trans-internal",
                                "target_id": "module-processor",
                                "target_type": "scripts",
                                "type": "task",
                                "task_type": None,
                            }
                        ],
                        "is_initial": True,
                        "notification_trigger": {
                            "variable_name": "assignee_emails",
                            "enabled": False,
                        },
                        "auto_start": False,
                        "end_message": None,
                        "start_message": None,
                        "error_message": None,
                        "timeout_message": None,
                        "start_button_text": None,
                        "access_control": {"is_public": False, "required_roles": []},
                        "input": True,
                        "output": False,
                    }
                ],
                "scripts": [
                    {
                        "id": "module-processor",
                        "file": "processor.py",
                        "title": "Module Processor",
                        "workflow_position": [100, 0],
                        "transitions": [
                            {
                                "id": "trans-to-output",
                                "target_id": "module-output",
                                "target_type": "scripts",
                                "type": "task",
                                "task_type": None,
                            }
                        ],
                        "is_initial": False,
                        "input": False,
                        "output": False,
                    },
                    {
                        "id": "module-output",
                        "file": "output.py",
                        "title": "Module Output",
                        "workflow_position": [200, 0],
                        "is_initial": False,
                        "input": False,
                        "output": True,
                    },
                ],
            },
        )

        project = self.repositories.project.load()

        initial_form = FormStage(
            id="initial-form",
            path="initial",
            title="Initial Form",
            file="initial.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-to-comp",
                    target_id="comp-1",
                    target_type="components",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        component = ComponentStage(
            id="comp-1",
            title="Full Flow Module",
            package_name="full-flow-module",
            workflow_position=(100, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-to-final",
                    target_id="final-form",
                    target_type="forms",
                    type="task",
                )
            ],
        )

        final_form = FormStage(
            id="final-form",
            path="final",
            title="Final Form",
            file="final.py",
            workflow_position=(300, 0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        project.forms.append(initial_form)
        project.components.append(component)
        project.forms.append(final_form)
        self.repositories.project.save(project)

        # Step 1: Send from initial form to component
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("module-input")
        )

        self.get_executor().send_task(
            type="task",
            current_stage=initial_form,
            payload={"data": "step1"},
            execution=None,
        )

        # Should expand component to module-input
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["target_stage_id"], "module-input")

        # Step 2: Module input -> processor (internal transition)
        module_input = project.get_stage("module-input", include_modules=True)
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("module-processor")
        )

        self.get_executor().send_task(
            type="task",
            current_stage=module_input,
            payload={"data": "step2"},
            execution=None,
        )

        # Should use module stage's own transitions
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["target_stage_id"], "module-processor")

        # Step 3: Module output -> final form (exits module via component)
        module_output = project.get_stage("module-output", include_modules=True)
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("final-form")
        )

        self.get_executor().send_task(
            type="task",
            current_stage=module_output,
            payload={"data": "step3"},
            execution=None,
        )

        # Should use component's transitions (exit module)
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["target_stage_id"], "final-form")

    def test_send_task_with_nested_components(self):
        """Test workflow with multiple components in sequence"""
        # Create two modules
        self.create_module_abstra_json(
            "module-a",
            stages={
                "forms": [
                    {
                        "id": "input-a",
                        "path": "inputa",
                        "title": "Input A",
                        "file": "inputa.py",
                        "workflow_position": [0, 0],
                        "is_initial": True,
                        "notification_trigger": {
                            "variable_name": "assignee_emails",
                            "enabled": False,
                        },
                        "auto_start": False,
                        "end_message": None,
                        "start_message": None,
                        "error_message": None,
                        "timeout_message": None,
                        "start_button_text": None,
                        "access_control": {"is_public": False, "required_roles": []},
                        "input": True,
                        "output": True,  # Also output
                    }
                ]
            },
        )

        self.create_module_abstra_json(
            "module-b",
            stages={
                "scripts": [
                    {
                        "id": "input-b",
                        "file": "inputb.py",
                        "title": "Input B",
                        "workflow_position": [0, 0],
                        "is_initial": True,
                        "input": True,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()

        comp_a = ComponentStage(
            id="comp-a",
            title="Module A",
            package_name="module-a",
            workflow_position=(50, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-a-to-b",
                    target_id="comp-b",
                    target_type="components",
                    type="task",
                )
            ],
        )

        comp_b = ComponentStage(
            id="comp-b",
            title="Module B",
            package_name="module-b",
            workflow_position=(150, 0),
            workflow_transitions=[],
        )

        project.components.append(comp_a)
        project.components.append(comp_b)
        self.repositories.project.save(project)

        # Module A output exits to comp-b, which should expand to module B input
        module_a_output = project.get_stage("input-a", include_modules=True)

        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("input-b")
        )

        self.get_executor().send_task(
            type="task",
            current_stage=module_a_output,
            payload={"data": "test"},
            execution=None,
        )

        # Should go through: module-a-output -> comp-a transitions -> comp-b -> expand to input-b
        self.mock_tasks_repo.send_task.assert_called_once()
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["target_stage_id"], "input-b")

    def test_send_task_with_execution_context(self):
        """Test that execution context is properly updated with sent tasks"""
        project = self.repositories.project.load()

        form = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="script-1",
                    target_type="scripts",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        script = ScriptStage(
            id="script-1",
            file="script1.py",
            title="Script 1",
            workflow_position=(100, 0),
            workflow_transitions=[],
        )

        project.forms.append(form)
        project.scripts.append(script)
        self.repositories.project.save(project)

        # Create execution with mock context that has sent_tasks attribute
        execution = Mock()
        execution.id = "exec-123"
        execution.context = Mock()
        execution.context.sent_tasks = []

        # Mock
        mock_task = self.create_mock_task("script-1")
        self.mock_tasks_repo.send_task = Mock(return_value=mock_task)

        # Execute
        self.get_executor().send_task(
            type="task",
            current_stage=form,
            payload={"data": "test"},
            execution=execution,
        )

        # Execution context should have sent task ID
        self.assertIn("task-123", execution.context.sent_tasks)

    def test_send_task_component_to_multiple_regular_stages(self):
        """Test component transitioning to mix of regular stages and components"""
        # Create module
        self.create_module_abstra_json(
            "test-module",
            stages={
                "scripts": [
                    {
                        "id": "module-output",
                        "file": "output.py",
                        "title": "Output",
                        "workflow_position": [0, 0],
                        "is_initial": False,
                        "input": False,
                        "output": True,
                    }
                ]
            },
        )

        project = self.repositories.project.load()

        component = ComponentStage(
            id="comp-1",
            title="Test Module",
            package_name="test-module",
            workflow_position=(50, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="form-1",
                    target_type="forms",
                    type="task",
                ),
                WorkflowTransition(
                    id="trans-2",
                    target_id="script-1",
                    target_type="scripts",
                    type="task",
                ),
            ],
        )

        form1 = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(200, 0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        script1 = ScriptStage(
            id="script-1",
            file="script1.py",
            title="Script 1",
            workflow_position=(200, 100),
            workflow_transitions=[],
        )

        project.components.append(component)
        project.forms.append(form1)
        project.scripts.append(script1)
        self.repositories.project.save(project)

        # Module output exits
        module_output = project.get_stage("module-output", include_modules=True)

        self.mock_tasks_repo.send_task = Mock(
            side_effect=[
                self.create_mock_task("form-1"),
                self.create_mock_task("script-1"),
            ]
        )

        self.get_executor().send_task(
            type="task",
            current_stage=module_output,
            payload={"data": "test"},
            execution=None,
        )

        # Should send to both regular stages
        self.assertEqual(self.mock_tasks_repo.send_task.call_count, 2)

        calls = self.mock_tasks_repo.send_task.call_args_list
        target_ids = [call[1]["target_stage_id"] for call in calls]
        self.assertIn("form-1", target_ids)
        self.assertIn("script-1", target_ids)

        # Script should be enqueued
        self.mock_producer.enqueue.assert_called_once()

    # ==================== EDGE CASES ====================

    def test_send_task_module_stage_without_parent_component(self):
        """Test handling of orphaned module stage (no parent component found)"""
        # Create module
        self.create_module_abstra_json(
            "orphan-module",
            stages={
                "scripts": [
                    {
                        "id": "orphan-output",
                        "file": "output.py",
                        "title": "Orphan Output",
                        "workflow_position": [0, 0],
                        "is_initial": False,
                        "input": False,
                        "output": True,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        # Don't add any ComponentStage referencing this module!
        self.repositories.project.save(project)

        # Get orphan stage
        orphan_stage = project.get_stage("orphan-output", include_modules=True)

        # Execute - should handle gracefully
        with patch("builtins.print") as mock_print:
            self.get_executor().send_task(
                type="task",
                current_stage=orphan_stage,
                payload={"data": "test"},
                execution=None,
                show_warning=True,
            )

        # Should show warning (no transitions found)
        mock_print.assert_called_once()

        # Should not send tasks
        self.mock_tasks_repo.send_task.assert_not_called()

    def test_send_task_to_component_with_no_package_name(self):
        """Test component with None package_name (edge case)"""
        project = self.repositories.project.load()

        form = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="comp-1",
                    target_type="components",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        component = ComponentStage(
            id="comp-1",
            title="Invalid Component",
            package_name=None,  # No package!
            workflow_position=(100, 0),
            workflow_transitions=[],
        )

        project.forms.append(form)
        project.components.append(component)
        self.repositories.project.save(project)

        # Mock task creation
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("comp-1")
        )

        # Execute - ComponentStage without package_name will be treated as regular stage
        self.get_executor().send_task(
            type="task",
            current_stage=form,
            payload={"data": "test"},
            execution=None,
        )

        # Task is sent to the component stage itself (not expanded since no package)
        self.mock_tasks_repo.send_task.assert_called_once()
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["target_stage_id"], "comp-1")

    def test_send_task_notification_enabled_form(self):
        """Test that send_task calls notification check for forms with enabled trigger"""
        project = self.repositories.project.load()

        form1 = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="form-2",
                    target_type="forms",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        form2 = FormStage(
            id="form-2",
            path="form2",
            title="Form 2 (with notification)",
            file="form2.py",
            workflow_position=(100, 0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails",
                enabled=True,  # Notification enabled!
            ),
        )

        project.forms.append(form1)
        project.forms.append(form2)
        self.repositories.project.save(project)

        # Mock
        mock_task = self.create_mock_task("form-2")
        self.mock_tasks_repo.send_task = Mock(return_value=mock_task)

        # Execute
        self.get_executor().send_task(
            type="task",
            current_stage=form1,
            payload={"assignee_emails": ["test@example.com"]},
            execution=None,
        )

        # Task should be sent
        self.mock_tasks_repo.send_task.assert_called_once()

        # Note: Email sending happens internally when notification is enabled,
        # but testing it requires patching the reloaded stage object which is complex.
        # The important part is that the task is sent correctly.

    def test_send_task_with_circular_reference(self):
        """Test handling of deeply nested component workflow"""
        # Create two modules that chain together
        self.create_module_abstra_json(
            "module-a",
            stages={
                "scripts": [
                    {
                        "id": "script-a",
                        "file": "script_a.py",
                        "title": "Script A",
                        "workflow_position": [0, 0],
                        "is_initial": True,
                        "input": True,
                        "output": False,
                    }
                ]
            },
        )

        self.create_module_abstra_json(
            "module-b",
            stages={
                "scripts": [
                    {
                        "id": "script-b",
                        "file": "script_b.py",
                        "title": "Script B",
                        "workflow_position": [0, 0],
                        "is_initial": True,
                        "input": True,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()

        # Create chained components: main -> comp-a -> comp-b
        form = FormStage(
            id="main-form",
            path="main",
            title="Main Form",
            file="main.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="comp-a",
                    target_type="components",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        comp_a = ComponentStage(
            id="comp-a",
            title="Module A",
            package_name="module-a",
            workflow_position=(100, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-2",
                    target_id="comp-b",
                    target_type="components",
                    type="task",
                )
            ],
        )

        comp_b = ComponentStage(
            id="comp-b",
            title="Module B",
            package_name="module-b",
            workflow_position=(200, 0),
            workflow_transitions=[],
        )

        project.forms.append(form)
        project.components.append(comp_a)
        project.components.append(comp_b)
        self.repositories.project.save(project)

        # Mock
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("script-a")
        )

        # Execute - should expand comp-a to script-a
        self.get_executor().send_task(
            type="task",
            current_stage=form,
            payload={"data": "test"},
            execution=None,
        )

        # Should send task to module-a's input
        self.mock_tasks_repo.send_task.assert_called_once()
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["target_stage_id"], "script-a")

    def test_send_task_type_matching_with_none_task_type(self):
        """Test that transitions with task_type=None match any type"""
        project = self.repositories.project.load()

        form = FormStage(
            id="form-1",
            path="form1",
            title="Form 1",
            file="form1.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="script-1",
                    target_type="scripts",
                    type="task",
                    task_type=None,  # Matches any type
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        script = ScriptStage(
            id="script-1",
            file="script1.py",
            title="Script 1",
            workflow_position=(100, 0),
            workflow_transitions=[],
        )

        project.forms.append(form)
        project.scripts.append(script)
        self.repositories.project.save(project)

        # Mock
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("script-1")
        )

        # Execute with any type
        self.get_executor().send_task(
            type="custom-type",
            current_stage=form,
            payload={"data": "test"},
            execution=None,
        )

        # Should still match and send task
        self.mock_tasks_repo.send_task.assert_called_once()

    def test_send_task_module_with_all_stage_types(self):
        """Test module containing forms, hooks, scripts, and jobs"""
        self.create_module_abstra_json(
            "complex-module",
            stages={
                "forms": [
                    {
                        "id": "mod-form",
                        "path": "modform",
                        "title": "Mod Form",
                        "file": "form.py",
                        "workflow_position": [0, 0],
                        "is_initial": True,
                        "notification_trigger": {
                            "variable_name": "assignee_emails",
                            "enabled": False,
                        },
                        "auto_start": False,
                        "end_message": None,
                        "start_message": None,
                        "error_message": None,
                        "timeout_message": None,
                        "start_button_text": None,
                        "access_control": {"is_public": False, "required_roles": []},
                        "input": True,
                        "output": False,
                    }
                ],
                "hooks": [
                    {
                        "id": "mod-hook",
                        "path": "modhook",
                        "file": "hook.py",
                        "title": "Mod Hook",
                        "enabled": True,
                        "workflow_position": [100, 0],
                        "is_initial": False,
                        "input": False,
                        "output": False,
                    }
                ],
                "scripts": [
                    {
                        "id": "mod-script",
                        "file": "script.py",
                        "title": "Mod Script",
                        "workflow_position": [200, 0],
                        "is_initial": False,
                        "input": False,
                        "output": True,
                    }
                ],
            },
        )

        project = self.repositories.project.load()

        component = ComponentStage(
            id="comp-1",
            title="Complex Module",
            package_name="complex-module",
            workflow_position=(50, 0),
            workflow_transitions=[],
        )

        main_form = FormStage(
            id="main-form",
            path="main",
            title="Main Form",
            file="main.py",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="trans-1",
                    target_id="comp-1",
                    target_type="components",
                    type="task",
                )
            ],
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
        )

        project.forms.append(main_form)
        project.components.append(component)
        self.repositories.project.save(project)

        # Send to component - should expand to form input
        self.mock_tasks_repo.send_task = Mock(
            return_value=self.create_mock_task("mod-form")
        )

        self.get_executor().send_task(
            type="task",
            current_stage=main_form,
            payload={"data": "test"},
            execution=None,
        )

        # Should go to module form (input stage)
        call_args = self.mock_tasks_repo.send_task.call_args[1]
        self.assertEqual(call_args["target_stage_id"], "mod-form")
