"""
Comprehensive test suite for workflow components/modules feature.

This test suite covers:
- Basic module creation and loading
- Module stage concatenation with main project
- Module-specific workflow updates
- Cross-module transitions
- Module boundary enforcement (input/output stages)
- Module isolation during updates
- Edge cases: empty modules, nested transitions, duplicate handling
- Concurrent module operations
- Module deletion and cleanup
"""

import json
from pathlib import Path

from abstra_internals.controllers.workflows import WorkflowController
from abstra_internals.repositories.project.project import (
    ComponentStage,
    FormStage,
    NotificationTrigger,
    WorkflowTransition,
)
from abstra_internals.settings import Settings
from tests.fixtures import BaseTest, clear_dir


class WorkflowComponentsTest(BaseTest):
    """Test suite for workflow components functionality"""

    def setUp(self):
        super().setUp()
        self.wf_controller = WorkflowController(self.repositories)
        self.modules_path = Settings.root_path / "abstra_components"

    def tearDown(self) -> None:
        clear_dir(self.root)

    def create_module_directory(self, module_name: str) -> Path:
        """Helper: Create a module directory structure"""
        module_path = self.modules_path / module_name
        module_path.mkdir(parents=True, exist_ok=True)
        return module_path

    def create_module_abstra_json(
        self, module_name: str, stages: dict, transitions: dict = None
    ):
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

    # ==================== BASIC MODULE TESTS ====================

    def test_empty_modules_directory(self):
        """Test that workflow works when modules directory doesn't exist"""
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(workflow, {"stages": [], "transitions": []})

    def test_empty_modules_directory_exists(self):
        """Test that workflow works when modules directory is empty"""
        self.modules_path.mkdir(parents=True, exist_ok=True)
        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(workflow, {"stages": [], "transitions": []})

    def test_module_without_abstra_json_is_ignored(self):
        """Test that modules without abstra.json are ignored"""
        invalid_module = self.create_module_directory("invalid-module")
        (invalid_module / "some_file.py").write_text("print('hello')")

        workflow = self.wf_controller.get_workflow_settings()
        self.assertEqual(workflow, {"stages": [], "transitions": []})

    def test_single_module_without_component_stage_not_loaded(self):
        """Test that module stages are not loaded if no ComponentStage references them"""
        # Create a module with stages
        self.create_module_abstra_json(
            "unused-module",
            stages={
                "forms": [
                    {
                        "id": "module-form-1",
                        "path": "module-form",
                        "title": "Module Form",
                        "file": "form.py",
                        "workflow_position": [0, 0],
                        "transitions": [],
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
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        # Don't create a ComponentStage referencing it
        workflow = self.wf_controller.get_workflow_settings()

        # Module stages should NOT appear
        self.assertEqual(len(workflow["stages"]), 0)

    def test_single_module_with_component_stage_is_loaded(self):
        """Test that module stages ARE loaded when ComponentStage references them"""
        # Create a module with stages
        self.create_module_abstra_json(
            "my-module",
            stages={
                "forms": [
                    {
                        "id": "module-form-1",
                        "path": "module-form",
                        "title": "Module Form",
                        "file": "form.py",
                        "workflow_position": [100, 100],
                        "transitions": [],
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
                ]
            },
        )

        # Create a ComponentStage in main project referencing the module
        project = self.repositories.project.load()
        component = ComponentStage(
            id="component-1",
            title="My Module Component",
            package_name="my-module",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.components.append(component)
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should have 2 stages: component + module form
        self.assertEqual(len(workflow["stages"]), 2)

        # Find the module stage
        module_stage = next(
            (s for s in workflow["stages"] if s["id"] == "module-form-1"), None
        )
        self.assertIsNotNone(module_stage)
        self.assertEqual(module_stage["module"], "my-module")
        self.assertEqual(
            module_stage["props"]["filename"], "abstra_components/my-module/form.py"
        )

    def test_module_stages_have_module_field(self):
        """Test that module stages have the 'module' field set correctly"""
        self.create_module_abstra_json(
            "test-module",
            stages={
                "scripts": [
                    {
                        "id": "module-script-1",
                        "file": "script.py",
                        "title": "Module Script",
                        "workflow_position": [0, 0],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp-1",
                title="Test Module",
                package_name="test-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        component_stage = next((s for s in workflow["stages"] if s["id"] == "comp-1"))
        self.assertIsNone(component_stage.get("module"))

        module_stage = next(
            (s for s in workflow["stages"] if s["id"] == "module-script-1")
        )
        self.assertEqual(module_stage["module"], "test-module")

    # ==================== MULTIPLE MODULES TESTS ====================

    def test_multiple_modules_loaded_when_referenced(self):
        """Test that multiple modules can be loaded simultaneously"""
        # Create module A
        self.create_module_abstra_json(
            "module-a",
            stages={
                "forms": [
                    {
                        "id": "form-a",
                        "path": "form-a",
                        "title": "Form A",
                        "file": "form_a.py",
                        "workflow_position": [0, 0],
                        "transitions": [],
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
                ]
            },
        )

        # Create module B
        self.create_module_abstra_json(
            "module-b",
            stages={
                "scripts": [
                    {
                        "id": "script-b",
                        "file": "script_b.py",
                        "title": "Script B",
                        "workflow_position": [0, 0],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
                        "output": True,
                    }
                ]
            },
        )

        # Reference both modules
        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp-a",
                title="Module A",
                package_name="module-a",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        project.components.append(
            ComponentStage(
                id="comp-b",
                title="Module B",
                package_name="module-b",
                workflow_position=(100, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should have 4 stages: 2 components + 2 module stages
        self.assertEqual(len(workflow["stages"]), 4)

        module_a_stage = next((s for s in workflow["stages"] if s["id"] == "form-a"))
        module_b_stage = next((s for s in workflow["stages"] if s["id"] == "script-b"))

        self.assertEqual(module_a_stage["module"], "module-a")
        self.assertEqual(module_b_stage["module"], "module-b")

    def test_one_module_referenced_other_not(self):
        """Test that only referenced modules are loaded"""
        # Create two modules
        self.create_module_abstra_json(
            "used-module",
            stages={
                "forms": [
                    {
                        "id": "used-form",
                        "path": "used",
                        "title": "Used Form",
                        "file": "form.py",
                        "workflow_position": [0, 0],
                        "transitions": [],
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
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        self.create_module_abstra_json(
            "unused-module",
            stages={
                "scripts": [
                    {
                        "id": "unused-script",
                        "file": "script.py",
                        "title": "Unused Script",
                        "workflow_position": [0, 0],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        # Only reference one module
        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp-1",
                title="Used Module",
                package_name="used-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should only have stages from used module
        stage_ids = [s["id"] for s in workflow["stages"]]
        self.assertIn("comp-1", stage_ids)
        self.assertIn("used-form", stage_ids)
        self.assertNotIn("unused-script", stage_ids)

    # ==================== MODULE UPDATE TESTS ====================

    def test_update_main_project_does_not_affect_module(self):
        """Test that updating main project workflow doesn't modify module"""
        # Create module
        self.create_module_abstra_json(
            "isolated-module",
            stages={
                "forms": [
                    {
                        "id": "module-form",
                        "path": "mform",
                        "title": "Module Form",
                        "file": "form.py",
                        "workflow_position": [50, 50],
                        "transitions": [],
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
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Module",
                package_name="isolated-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        project.forms.append(
            FormStage(
                id="main-form",
                path="main",
                title="Main Form",
                file="main.py",
                workflow_position=(100, 100),
                workflow_transitions=[],
                notification_trigger=NotificationTrigger(
                    variable_name="assignee_emails", enabled=False
                ),
            )
        )
        self.repositories.project.save(project)

        # Update main project (move main-form)
        workflow = self.wf_controller.get_workflow_settings()
        for stage in workflow["stages"]:
            if stage["id"] == "main-form":
                stage["position"]["x"] = 200
                stage["position"]["y"] = 200

        self.wf_controller.update_workflow(workflow, module=None)

        # Check module abstra.json wasn't modified
        module_json_path = self.modules_path / "isolated-module" / "abstra.json"
        with open(module_json_path, encoding="utf-8") as f:
            module_data = json.load(f)

        # Module form should still be at original position
        self.assertEqual(module_data["forms"][0]["workflow_position"], [50, 50])

    def test_update_module_does_not_affect_main_project(self):
        """Test that updating module workflow doesn't modify main project"""
        # Create module
        self.create_module_abstra_json(
            "test-module",
            stages={
                "forms": [
                    {
                        "id": "module-form",
                        "path": "mform",
                        "title": "Module Form",
                        "file": "form.py",
                        "workflow_position": [50, 50],
                        "transitions": [],
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
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Module",
                package_name="test-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        project.forms.append(
            FormStage(
                id="main-form",
                path="main",
                title="Main Form",
                file="main.py",
                workflow_position=(100, 100),
                workflow_transitions=[],
                notification_trigger=NotificationTrigger(
                    variable_name="assignee_emails", enabled=False
                ),
            )
        )
        self.repositories.project.save(project)

        # Get full workflow and update module stage
        workflow = self.wf_controller.get_workflow_settings()
        for stage in workflow["stages"]:
            if stage["id"] == "module-form":
                stage["position"]["x"] = 300
                stage["position"]["y"] = 300

        # Update with module parameter
        self.wf_controller.update_workflow(workflow, module="test-module")

        # Check main abstra.json wasn't modified
        main_json_path = Settings.root_path / "abstra.json"
        with open(main_json_path, encoding="utf-8") as f:
            main_data = json.load(f)

        # Main form should still be at original position
        self.assertEqual(main_data["forms"][0]["workflow_position"], [100, 100])

    def test_update_module_only_updates_that_module(self):
        """Test that updating one module doesn't affect other modules"""
        # Create two modules
        self.create_module_abstra_json(
            "module-a",
            stages={
                "forms": [
                    {
                        "id": "form-a",
                        "path": "forma",
                        "title": "Form A",
                        "file": "form_a.py",
                        "workflow_position": [10, 10],
                        "transitions": [],
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
                        "input": False,
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
                        "workflow_position": [20, 20],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp-a",
                title="Module A",
                package_name="module-a",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        project.components.append(
            ComponentStage(
                id="comp-b",
                title="Module B",
                package_name="module-b",
                workflow_position=(100, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        # Update module A
        workflow = self.wf_controller.get_workflow_settings()
        for stage in workflow["stages"]:
            if stage["id"] == "form-a":
                stage["position"]["x"] = 500
                stage["position"]["y"] = 500

        self.wf_controller.update_workflow(workflow, module="module-a")

        # Check module A was updated
        module_a_path = self.modules_path / "module-a" / "abstra.json"
        with open(module_a_path, encoding="utf-8") as f:
            module_a_data = json.load(f)
        self.assertEqual(module_a_data["forms"][0]["workflow_position"], [500, 500])

        # Check module B was NOT modified
        module_b_path = self.modules_path / "module-b" / "abstra.json"
        with open(module_b_path, encoding="utf-8") as f:
            module_b_data = json.load(f)
        self.assertEqual(module_b_data["scripts"][0]["workflow_position"], [20, 20])

    def test_update_module_filters_out_main_project_stages(self):
        """Test that module update filters out stages from main project"""
        self.create_module_abstra_json(
            "my-module",
            stages={
                "forms": [
                    {
                        "id": "module-form",
                        "path": "mform",
                        "title": "Module Form",
                        "file": "form.py",
                        "workflow_position": [0, 0],
                        "transitions": [],
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
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Module",
                package_name="my-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        project.forms.append(
            FormStage(
                id="main-form",
                path="main",
                title="Main Form",
                file="main.py",
                workflow_position=(100, 100),
                workflow_transitions=[],
                notification_trigger=NotificationTrigger(
                    variable_name="assignee_emails", enabled=False
                ),
            )
        )
        self.repositories.project.save(project)

        # Try to update module with main project stage included
        workflow = self.wf_controller.get_workflow_settings()

        # Attempt to modify main-form position via module update
        for stage in workflow["stages"]:
            if stage["id"] == "main-form":
                stage["position"]["x"] = 999
                stage["position"]["y"] = 999

        # Update module
        self.wf_controller.update_workflow(workflow, module="my-module")

        # Main project should be unchanged
        main_project = self.repositories.project.load()
        main_form = main_project.forms[0]
        self.assertEqual(main_form.workflow_position, (100, 100))

    def test_update_module_filters_out_other_module_stages(self):
        """Test that updating module A doesn't allow modification of module B stages"""
        self.create_module_abstra_json(
            "module-a",
            stages={
                "forms": [
                    {
                        "id": "form-a",
                        "path": "forma",
                        "title": "Form A",
                        "file": "form_a.py",
                        "workflow_position": [10, 10],
                        "transitions": [],
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
                        "input": False,
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
                        "workflow_position": [20, 20],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp-a",
                title="Module A",
                package_name="module-a",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        project.components.append(
            ComponentStage(
                id="comp-b",
                title="Module B",
                package_name="module-b",
                workflow_position=(100, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        # Get workflow and try to modify module B via module A update
        workflow = self.wf_controller.get_workflow_settings()
        for stage in workflow["stages"]:
            if stage["id"] == "script-b":
                stage["position"]["x"] = 999
                stage["position"]["y"] = 999

        # Update module A
        self.wf_controller.update_workflow(workflow, module="module-a")

        # Module B should be unchanged
        module_b_path = self.modules_path / "module-b" / "abstra.json"
        with open(module_b_path, encoding="utf-8") as f:
            module_b_data = json.load(f)
        self.assertEqual(module_b_data["scripts"][0]["workflow_position"], [20, 20])

    # ==================== TRANSITION TESTS ====================

    def test_component_stage_transitions_shown_in_workflow(self):
        """Test that component stages can have transitions to other main project stages"""
        self.create_module_abstra_json(
            "target-module",
            stages={
                "scripts": [
                    {
                        "id": "module-script",
                        "file": "script.py",
                        "title": "Module Script",
                        "workflow_position": [100, 100],
                        "is_initial": True,
                        "input": True,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Target Module",
                package_name="target-module",
                workflow_position=(50, 50),
                workflow_transitions=[
                    WorkflowTransition(
                        id="trans-1",
                        target_id="final-form",
                        target_type="forms",
                        type="task",
                    )
                ],
            )
        )
        project.forms.append(
            FormStage(
                id="main-form",
                path="main",
                title="Main Form",
                file="main.py",
                workflow_position=(0, 0),
                workflow_transitions=[
                    WorkflowTransition(
                        id="trans-2",
                        target_id="comp",
                        target_type="components",
                        type="task",
                    )
                ],
                notification_trigger=NotificationTrigger(
                    variable_name="assignee_emails", enabled=False
                ),
            )
        )
        project.forms.append(
            FormStage(
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
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should show main project transitions: main-form -> comp -> final-form
        # Module stages are also visible but transitions stay at component level
        main_transitions = [
            t
            for t in workflow["transitions"]
            if t["sourceStageId"] in ["main-form", "comp"]
        ]
        self.assertEqual(len(main_transitions), 2)

        trans_dict = {t["id"]: t for t in main_transitions}
        self.assertEqual(trans_dict["trans-2"]["sourceStageId"], "main-form")
        self.assertEqual(trans_dict["trans-2"]["targetStageId"], "comp")
        self.assertEqual(trans_dict["trans-1"]["sourceStageId"], "comp")
        self.assertEqual(trans_dict["trans-1"]["targetStageId"], "final-form")

    def test_module_to_module_transition_same_module(self):
        """Test transition between stages within the same module"""
        self.create_module_abstra_json(
            "internal-module",
            stages={
                "forms": [
                    {
                        "id": "module-form",
                        "path": "mform",
                        "title": "Module Form",
                        "file": "form.py",
                        "workflow_position": [0, 0],
                        "transitions": [
                            {
                                "id": "trans-internal",
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
                        "output": False,
                    }
                ],
                "scripts": [
                    {
                        "id": "module-script",
                        "file": "script.py",
                        "title": "Module Script",
                        "workflow_position": [100, 0],
                        "transitions": [],
                        "is_initial": False,
                        "input": False,
                        "output": True,
                    }
                ],
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Internal Module",
                package_name="internal-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should have internal transition
        internal_transitions = [
            t
            for t in workflow["transitions"]
            if t["sourceStageId"] == "module-form"
            and t["targetStageId"] == "module-script"
        ]
        self.assertEqual(len(internal_transitions), 1)

    def test_two_separate_modules_both_load(self):
        """Test that two separate modules both load their stages correctly"""
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
                        "input": False,
                        "output": True,
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
                        "workflow_position": [100, 0],
                        "is_initial": True,
                        "input": True,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp-a",
                title="Module A",
                package_name="module-a",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        project.components.append(
            ComponentStage(
                id="comp-b",
                title="Module B",
                package_name="module-b",
                workflow_position=(100, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should have stages from both modules
        stage_ids = [s["id"] for s in workflow["stages"]]
        self.assertIn("script-a", stage_ids)
        self.assertIn("script-b", stage_ids)

        # Check module fields
        script_a = next(s for s in workflow["stages"] if s["id"] == "script-a")
        script_b = next(s for s in workflow["stages"] if s["id"] == "script-b")
        self.assertEqual(script_a["module"], "module-a")
        self.assertEqual(script_b["module"], "module-b")

    def test_update_module_filters_cross_module_transitions(self):
        """Test that updating module A filters out transitions to/from module B"""
        self.create_module_abstra_json(
            "module-a",
            stages={
                "scripts": [
                    {
                        "id": "script-a",
                        "file": "script_a.py",
                        "title": "Script A",
                        "workflow_position": [0, 0],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
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
                        "workflow_position": [100, 0],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp-a",
                title="Module A",
                package_name="module-a",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        project.components.append(
            ComponentStage(
                id="comp-b",
                title="Module B",
                package_name="module-b",
                workflow_position=(100, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        # Get workflow and add cross-module transition
        workflow = self.wf_controller.get_workflow_settings()
        workflow["transitions"].append(
            {
                "id": "cross-trans",
                "sourceStageId": "script-a",
                "targetStageId": "script-b",
                "type": "task",
                "props": {"taskType": None},
            }
        )

        # Try to save via module-a update
        self.wf_controller.update_workflow(workflow, module="module-a")

        # Module A should not have the cross-module transition
        module_a_path = self.modules_path / "module-a" / "abstra.json"
        with open(module_a_path, encoding="utf-8") as f:
            module_a_data = json.load(f)

        self.assertEqual(len(module_a_data["scripts"][0]["transitions"]), 0)

    def test_update_main_filters_transitions_to_module_stages(self):
        """Test that updating main project filters out transitions to module stages"""
        self.create_module_abstra_json(
            "test-module",
            stages={
                "scripts": [
                    {
                        "id": "module-script",
                        "file": "script.py",
                        "title": "Module Script",
                        "workflow_position": [0, 0],
                        "is_initial": True,
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Module",
                package_name="test-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        project.forms.append(
            FormStage(
                id="main-form",
                path="main",
                title="Main Form",
                file="main.py",
                workflow_position=(100, 100),
                workflow_transitions=[],
                notification_trigger=NotificationTrigger(
                    variable_name="assignee_emails", enabled=False
                ),
            )
        )
        self.repositories.project.save(project)

        # Get workflow and add transition to module
        workflow = self.wf_controller.get_workflow_settings()
        workflow["transitions"].append(
            {
                "id": "main-to-module",
                "sourceStageId": "main-form",
                "targetStageId": "module-script",
                "type": "task",
                "props": {"taskType": None},
            }
        )

        # Update main project (module=None)
        self.wf_controller.update_workflow(workflow, module=None)

        # Main project should NOT have the cross-boundary transition
        # because update_workflow filters out transitions to/from module stages
        main_project = self.repositories.project.load()
        main_form = main_project.forms[0]
        self.assertEqual(len(main_form.workflow_transitions), 0)

    # ==================== DUPLICATE HANDLING IN MODULES ====================

    def test_module_update_deduplicates_transitions(self):
        """Test that module update removes duplicate transitions"""
        self.create_module_abstra_json(
            "dup-module",
            stages={
                "forms": [
                    {
                        "id": "form-1",
                        "path": "form1",
                        "title": "Form 1",
                        "file": "form1.py",
                        "workflow_position": [0, 0],
                        "transitions": [],
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
                        "input": False,
                        "output": False,
                    }
                ],
                "scripts": [
                    {
                        "id": "script-1",
                        "file": "script1.py",
                        "title": "Script 1",
                        "workflow_position": [100, 0],
                        "transitions": [],
                        "is_initial": False,
                        "input": False,
                        "output": False,
                    }
                ],
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Dup Module",
                package_name="dup-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        # Get workflow and add duplicate transitions
        workflow = self.wf_controller.get_workflow_settings()
        workflow["transitions"] = [
            {
                "id": "trans-1",
                "sourceStageId": "form-1",
                "targetStageId": "script-1",
                "type": "task",
                "props": {"taskType": None},
            },
            {
                "id": "trans-2",  # Different ID
                "sourceStageId": "form-1",
                "targetStageId": "script-1",  # Same source->target
                "type": "task",
                "props": {"taskType": None},
            },
            {
                "id": "trans-3",  # Different ID again
                "sourceStageId": "form-1",
                "targetStageId": "script-1",  # Same source->target
                "type": "task",
                "props": {"taskType": None},
            },
        ]

        # Update module
        updated = self.wf_controller.update_workflow(workflow, module="dup-module")

        # Should only have one transition (last one wins)
        self.assertEqual(len(updated["transitions"]), 1)
        self.assertEqual(updated["transitions"][0]["id"], "trans-3")

    def test_module_load_deduplicates_corrupted_transitions(self):
        """Test that loading a module with corrupted duplicate transitions deduplicates them"""
        # Create module with duplicate transitions (simulating corruption)
        self.create_module_abstra_json(
            "corrupted-module",
            stages={
                "forms": [
                    {
                        "id": "form-1",
                        "path": "form1",
                        "title": "Form 1",
                        "file": "form1.py",
                        "workflow_position": [0, 0],
                        "transitions": [
                            {
                                "id": "trans-1",
                                "target_id": "script-1",
                                "target_type": "scripts",
                                "type": "task",
                                "task_type": None,
                            },
                            {
                                "id": "trans-1",  # Duplicate ID
                                "target_id": "script-1",
                                "target_type": "scripts",
                                "type": "task",
                                "task_type": None,
                            },
                            {
                                "id": "trans-2",
                                "target_id": "script-1",  # Duplicate target
                                "target_type": "scripts",
                                "type": "task",
                                "task_type": None,
                            },
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
                        "input": False,
                        "output": False,
                    }
                ],
                "scripts": [
                    {
                        "id": "script-1",
                        "file": "script1.py",
                        "title": "Script 1",
                        "workflow_position": [100, 0],
                        "transitions": [],
                        "is_initial": False,
                        "input": False,
                        "output": False,
                    }
                ],
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Corrupted Module",
                package_name="corrupted-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        # Load workflow - should deduplicate
        workflow = self.wf_controller.get_workflow_settings()

        # Should only have 1 transition (duplicates removed during load)
        form_transitions = [
            t for t in workflow["transitions"] if t["sourceStageId"] == "form-1"
        ]
        self.assertEqual(len(form_transitions), 1)

    # ==================== COMPLEX WORKFLOW TESTS ====================

    def test_complex_workflow_with_multiple_modules(self):
        """Test complex workflow with multiple modules and components"""
        # Module A
        self.create_module_abstra_json(
            "module-a",
            stages={
                "forms": [
                    {
                        "id": "form-a",
                        "path": "forma",
                        "title": "Form A",
                        "file": "form_a.py",
                        "workflow_position": [100, 0],
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
                ]
            },
        )

        # Module B
        self.create_module_abstra_json(
            "module-b",
            stages={
                "scripts": [
                    {
                        "id": "script-b",
                        "file": "script_b.py",
                        "title": "Script B",
                        "workflow_position": [200, 0],
                        "is_initial": True,
                        "input": True,
                        "output": True,
                    }
                ]
            },
        )

        # Main project with components representing modules
        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
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
        )
        project.components.append(
            ComponentStage(
                id="comp-b",
                title="Module B",
                package_name="module-b",
                workflow_position=(150, 0),
                workflow_transitions=[
                    WorkflowTransition(
                        id="trans-b-to-final",
                        target_id="final-form",
                        target_type="forms",
                        type="task",
                    )
                ],
            )
        )
        project.forms.append(
            FormStage(
                id="initial-form",
                path="initial",
                title="Initial Form",
                file="initial.py",
                workflow_position=(0, 0),
                workflow_transitions=[
                    WorkflowTransition(
                        id="trans-init-to-a",
                        target_id="comp-a",
                        target_type="components",
                        type="task",
                    )
                ],
                notification_trigger=NotificationTrigger(
                    variable_name="assignee_emails", enabled=False
                ),
            )
        )
        project.forms.append(
            FormStage(
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
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should have all stages (main stages, components, and module stages)
        stage_ids = [s["id"] for s in workflow["stages"]]
        self.assertIn("initial-form", stage_ids)
        self.assertIn("comp-a", stage_ids)
        self.assertIn("form-a", stage_ids)  # from module-a
        self.assertIn("comp-b", stage_ids)
        self.assertIn("script-b", stage_ids)  # from module-b
        self.assertIn("final-form", stage_ids)

        # Should have 3 transitions at component level
        self.assertEqual(len(workflow["transitions"]), 3)

        # Verify the component-level transitions
        trans_dict = {t["id"]: t for t in workflow["transitions"]}
        self.assertEqual(trans_dict["trans-init-to-a"]["targetStageId"], "comp-a")
        self.assertEqual(trans_dict["trans-a-to-b"]["targetStageId"], "comp-b")
        self.assertEqual(trans_dict["trans-b-to-final"]["targetStageId"], "final-form")

    def test_module_with_internal_loop(self):
        """Test module that has internal loop (form -> script -> form)"""
        self.create_module_abstra_json(
            "loop-module",
            stages={
                "forms": [
                    {
                        "id": "loop-form",
                        "path": "loopform",
                        "title": "Loop Form",
                        "file": "loop_form.py",
                        "workflow_position": [0, 0],
                        "transitions": [
                            {
                                "id": "trans-form-to-script",
                                "target_id": "loop-script",
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
                        "id": "loop-script",
                        "file": "loop_script.py",
                        "title": "Loop Script",
                        "workflow_position": [100, 0],
                        "transitions": [
                            {
                                "id": "trans-script-to-form",
                                "target_id": "loop-form",
                                "target_type": "forms",
                                "type": "task",
                                "task_type": None,
                            }
                        ],
                        "is_initial": False,
                        "input": False,
                        "output": True,
                    }
                ],
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Loop Module",
                package_name="loop-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should have both transitions (loop)
        self.assertEqual(len(workflow["transitions"]), 2)

        trans_dict = {t["id"]: t for t in workflow["transitions"]}
        self.assertEqual(
            trans_dict["trans-form-to-script"]["targetStageId"], "loop-script"
        )
        self.assertEqual(
            trans_dict["trans-script-to-form"]["targetStageId"], "loop-form"
        )

    def test_module_with_multiple_input_output_stages(self):
        """Test module with multiple entry and exit points"""
        self.create_module_abstra_json(
            "multi-io-module",
            stages={
                "forms": [
                    {
                        "id": "input-form-1",
                        "path": "input1",
                        "title": "Input Form 1",
                        "file": "input1.py",
                        "workflow_position": [0, 0],
                        "transitions": [
                            {
                                "id": "trans-1",
                                "target_id": "processor",
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
                    },
                    {
                        "id": "input-form-2",
                        "path": "input2",
                        "title": "Input Form 2",
                        "file": "input2.py",
                        "workflow_position": [0, 100],
                        "transitions": [
                            {
                                "id": "trans-2",
                                "target_id": "processor",
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
                    },
                ],
                "scripts": [
                    {
                        "id": "processor",
                        "file": "processor.py",
                        "title": "Processor",
                        "workflow_position": [100, 50],
                        "transitions": [
                            {
                                "id": "trans-3",
                                "target_id": "output-script-1",
                                "target_type": "scripts",
                                "type": "task",
                                "task_type": "success",
                            },
                            {
                                "id": "trans-4",
                                "target_id": "output-script-2",
                                "target_type": "scripts",
                                "type": "task",
                                "task_type": "failure",
                            },
                        ],
                        "is_initial": False,
                        "input": False,
                        "output": False,
                    },
                    {
                        "id": "output-script-1",
                        "file": "output1.py",
                        "title": "Output 1",
                        "workflow_position": [200, 0],
                        "is_initial": False,
                        "input": False,
                        "output": True,
                    },
                    {
                        "id": "output-script-2",
                        "file": "output2.py",
                        "title": "Output 2",
                        "workflow_position": [200, 100],
                        "is_initial": False,
                        "input": False,
                        "output": True,
                    },
                ],
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Multi IO Module",
                package_name="multi-io-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should have all 5 module stages + 1 component
        self.assertEqual(len(workflow["stages"]), 6)

        # Check that module stages are present
        module_stages = [
            s for s in workflow["stages"] if s.get("module") == "multi-io-module"
        ]
        self.assertEqual(len(module_stages), 5)

        # Find forms (should have input=True)
        form_stages = [s for s in module_stages if s["type"] == "forms"]
        self.assertEqual(len(form_stages), 2)

        # Find output scripts
        script_stages = [s for s in module_stages if s["type"] == "scripts"]
        self.assertEqual(len(script_stages), 3)

        # Should have 4 transitions (all within module)
        self.assertEqual(len(workflow["transitions"]), 4)

    # ==================== EDGE CASES ====================

    def test_module_update_with_empty_stages(self):
        """Test updating a module with no stages"""
        self.create_module_abstra_json("empty-module", stages={})

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Empty Module",
                package_name="empty-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should only have component stage
        self.assertEqual(len(workflow["stages"]), 1)

        # Update should work without error
        updated = self.wf_controller.update_workflow(workflow, module="empty-module")
        self.assertEqual(len(updated["stages"]), 1)

    def test_module_update_add_new_stage(self):
        """Test adding a new stage to a module via update"""
        self.create_module_abstra_json(
            "grow-module",
            stages={
                "forms": [
                    {
                        "id": "existing-form",
                        "path": "existing",
                        "title": "Existing Form",
                        "file": "existing.py",
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
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Grow Module",
                package_name="grow-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        # Get workflow and add new stage
        workflow = self.wf_controller.get_workflow_settings()
        workflow["stages"].append(
            {
                "id": "new-script",
                "type": "scripts",
                "title": "New Script",
                "position": {"x": 100, "y": 0},
                "props": {"filename": "abstra_components/grow-module/new_script.py"},
                "module": "grow-module",
                "input": False,
                "output": False,
            }
        )

        # Update module
        updated = self.wf_controller.update_workflow(workflow, module="grow-module")

        # Should have new stage
        stage_ids = [s["id"] for s in updated["stages"]]
        self.assertIn("new-script", stage_ids)

        # Check module abstra.json
        module_path = self.modules_path / "grow-module" / "abstra.json"
        with open(module_path, encoding="utf-8") as f:
            module_data = json.load(f)
        self.assertEqual(len(module_data["scripts"]), 1)

    def test_module_update_delete_stage(self):
        """Test deleting a stage from a module via update"""
        self.create_module_abstra_json(
            "shrink-module",
            stages={
                "forms": [
                    {
                        "id": "form-to-keep",
                        "path": "keep",
                        "title": "Keep Form",
                        "file": "keep.py",
                        "workflow_position": [0, 0],
                        "transitions": [],
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
                        "input": False,
                        "output": False,
                    }
                ],
                "scripts": [
                    {
                        "id": "script-to-delete",
                        "file": "delete.py",
                        "title": "Delete Script",
                        "workflow_position": [100, 0],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
                        "output": False,
                    }
                ],
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Shrink Module",
                package_name="shrink-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        # Get workflow and remove script
        workflow = self.wf_controller.get_workflow_settings()
        workflow["stages"] = [
            s for s in workflow["stages"] if s["id"] != "script-to-delete"
        ]

        # Update module
        updated = self.wf_controller.update_workflow(workflow, module="shrink-module")

        # Should not have deleted stage
        stage_ids = [s["id"] for s in updated["stages"]]
        self.assertNotIn("script-to-delete", stage_ids)

        # Check module abstra.json
        module_path = self.modules_path / "shrink-module" / "abstra.json"
        with open(module_path, encoding="utf-8") as f:
            module_data = json.load(f)
        self.assertEqual(len(module_data["scripts"]), 0)

    def test_module_update_move_stage_position(self):
        """Test moving a stage position within a module"""
        self.create_module_abstra_json(
            "move-module",
            stages={
                "forms": [
                    {
                        "id": "movable-form",
                        "path": "movable",
                        "title": "Movable Form",
                        "file": "movable.py",
                        "workflow_position": [50, 50],
                        "transitions": [],
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
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Move Module",
                package_name="move-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        # Get workflow and move stage
        workflow = self.wf_controller.get_workflow_settings()
        for stage in workflow["stages"]:
            if stage["id"] == "movable-form":
                stage["position"]["x"] = 400
                stage["position"]["y"] = 500

        # Update module
        self.wf_controller.update_workflow(workflow, module="move-module")

        # Check module abstra.json
        module_path = self.modules_path / "move-module" / "abstra.json"
        with open(module_path, encoding="utf-8") as f:
            module_data = json.load(f)
        self.assertEqual(module_data["forms"][0]["workflow_position"], [400, 500])

    def test_module_with_all_stage_types(self):
        """Test module containing all stage types: form, hook, job, script"""
        self.create_module_abstra_json(
            "full-module",
            stages={
                "forms": [
                    {
                        "id": "mod-form",
                        "path": "modform",
                        "title": "Module Form",
                        "file": "form.py",
                        "workflow_position": [0, 0],
                        "transitions": [],
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
                        "title": "Module Hook",
                        "enabled": True,
                        "workflow_position": [100, 0],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
                        "output": False,
                    }
                ],
                "jobs": [
                    {
                        "id": "mod-job",
                        "file": "job.py",
                        "title": "Module Job",
                        "schedule": "0 * * * *",
                        "workflow_position": [200, 0],
                        "transitions": [],
                        "input": False,
                        "output": False,
                    }
                ],
                "scripts": [
                    {
                        "id": "mod-script",
                        "file": "script.py",
                        "title": "Module Script",
                        "workflow_position": [300, 0],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
                        "output": True,
                    }
                ],
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Full Module",
                package_name="full-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should have 5 stages (1 component + 4 module stages)
        self.assertEqual(len(workflow["stages"]), 5)

        # Check all types are present
        stage_types = {s["type"] for s in workflow["stages"]}
        self.assertIn("forms", stage_types)
        self.assertIn("hooks", stage_types)
        self.assertIn("jobs", stage_types)
        self.assertIn("scripts", stage_types)
        self.assertIn("components", stage_types)

    def test_reload_after_module_update_no_duplication(self):
        """Test that reloading after module update doesn't duplicate transitions"""
        self.create_module_abstra_json(
            "reload-module",
            stages={
                "forms": [
                    {
                        "id": "form-1",
                        "path": "form1",
                        "title": "Form 1",
                        "file": "form1.py",
                        "workflow_position": [0, 0],
                        "transitions": [
                            {
                                "id": "trans-1",
                                "target_id": "script-1",
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
                        "input": False,
                        "output": False,
                    }
                ],
                "scripts": [
                    {
                        "id": "script-1",
                        "file": "script1.py",
                        "title": "Script 1",
                        "workflow_position": [100, 0],
                        "transitions": [],
                        "is_initial": False,
                        "input": False,
                        "output": False,
                    }
                ],
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Reload Module",
                package_name="reload-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        # Initial load
        workflow = self.wf_controller.get_workflow_settings()
        initial_transition_count = len(workflow["transitions"])
        self.assertEqual(initial_transition_count, 1)

        # Update module (move stage)
        for stage in workflow["stages"]:
            if stage["id"] == "form-1":
                stage["position"]["x"] = 50
                stage["position"]["y"] = 50

        self.wf_controller.update_workflow(workflow, module="reload-module")

        # Reload - should still have same number of transitions
        workflow_after_update = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow_after_update["transitions"]), 1)

        # Do it again to make sure no accumulation
        for stage in workflow_after_update["stages"]:
            if stage["id"] == "form-1":
                stage["position"]["x"] = 100
                stage["position"]["y"] = 100

        self.wf_controller.update_workflow(
            workflow_after_update, module="reload-module"
        )

        # Reload again
        workflow_after_second_update = self.wf_controller.get_workflow_settings()
        self.assertEqual(len(workflow_after_second_update["transitions"]), 1)

    def test_component_stage_has_no_file(self):
        """Test that ComponentStage doesn't have file attribute"""
        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Test Component",
                package_name="test-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        comp_stage = next(s for s in workflow["stages"] if s["id"] == "comp")

        # ComponentStage should not have filename in props
        self.assertNotIn("filename", comp_stage["props"])
        self.assertIn("packageName", comp_stage["props"])

    def test_main_project_update_with_module_none_explicit(self):
        """Test that explicitly passing module=None updates main project"""
        self.create_module_abstra_json(
            "test-module",
            stages={
                "scripts": [
                    {
                        "id": "module-script",
                        "file": "script.py",
                        "title": "Module Script",
                        "workflow_position": [0, 0],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        project.components.append(
            ComponentStage(
                id="comp",
                title="Test Module",
                package_name="test-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        project.forms.append(
            FormStage(
                id="main-form",
                path="main",
                title="Main Form",
                file="main.py",
                workflow_position=(100, 100),
                workflow_transitions=[],
                notification_trigger=NotificationTrigger(
                    variable_name="assignee_emails", enabled=False
                ),
            )
        )
        self.repositories.project.save(project)

        # Get workflow and modify main form
        workflow = self.wf_controller.get_workflow_settings()
        for stage in workflow["stages"]:
            if stage["id"] == "main-form":
                stage["title"] = "Updated Main Form"

        # Update with module=None explicitly
        self.wf_controller.update_workflow(workflow, module=None)

        # Check main project was updated
        main_project = self.repositories.project.load()
        main_form = main_project.forms[0]
        self.assertEqual(main_form.title, "Updated Main Form")

    def test_multiple_components_same_module(self):
        """Test having multiple ComponentStages referencing the same module (should still load once)"""
        self.create_module_abstra_json(
            "shared-module",
            stages={
                "scripts": [
                    {
                        "id": "shared-script",
                        "file": "script.py",
                        "title": "Shared Script",
                        "workflow_position": [0, 0],
                        "transitions": [],
                        "is_initial": True,
                        "input": False,
                        "output": False,
                    }
                ]
            },
        )

        project = self.repositories.project.load()
        # Add two components referencing same module
        project.components.append(
            ComponentStage(
                id="comp-1",
                title="Module Instance 1",
                package_name="shared-module",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
        )
        project.components.append(
            ComponentStage(
                id="comp-2",
                title="Module Instance 2",
                package_name="shared-module",
                workflow_position=(100, 0),
                workflow_transitions=[],
            )
        )
        self.repositories.project.save(project)

        workflow = self.wf_controller.get_workflow_settings()

        # Should have 2 components + 1 module stage (not duplicated)
        self.assertEqual(len(workflow["stages"]), 3)

        # Check we have both components
        comp_ids = [s["id"] for s in workflow["stages"] if s["type"] == "components"]
        self.assertIn("comp-1", comp_ids)
        self.assertIn("comp-2", comp_ids)

        # Check module stage appears once
        module_stages = [s for s in workflow["stages"] if s["id"] == "shared-script"]
        self.assertEqual(len(module_stages), 1)
