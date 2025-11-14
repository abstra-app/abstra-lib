from multiprocessing import Queue
from unittest import TestCase

from abstra_internals.repositories.consumer import EditorConsumer
from abstra_internals.repositories.factory import build_editor_repositories
from abstra_internals.repositories.project.project import (
    FormStage,
    NotificationTrigger,
    Project,
    ScriptStage,
    WorkflowTransition,
)
from tests.fixtures import clear_dir, init_dir


class ProjectTests(TestCase):
    def setUp(self):
        self.root = init_dir()
        self.queue = Queue()
        repos = build_editor_repositories(self.queue)
        self.project_repository = repos.project
        self.consumer = EditorConsumer(self.queue)

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_delete_file_if_remove_file_true(self):
        project = self.project_repository.load()
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
        self.project_repository.save(project)
        project.delete_stage("test", remove_file=True)
        self.assertFalse(file.exists())

    def test_dont_delete_file_if_remove_file_false(self):
        project = self.project_repository.load()
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
        self.project_repository.save(project)
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
                type="task",
            )
        )

        form1.workflow_transitions.append(
            WorkflowTransition(
                id="2",
                target_id=script.id,
                target_type=script.type_name,
                type="task",
            )
        )

        project = self.project_repository.load()

        project.add_stage(form1)
        project.add_stage(form2)
        project.add_stage(script)

        self.project_repository.save(project)

        read_project = self.project_repository.load()

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
                type="task",
            )
        )

        form1.workflow_transitions.append(
            WorkflowTransition(
                id="2",
                target_id=script.id,
                target_type=script.type_name,
                type="task",
            )
        )

        project = self.project_repository.load()

        project.add_stage(form1)
        project.add_stage(form2)
        project.add_stage(script)

        self.project_repository.save(project)

        p = self.project_repository.load()

        self.assertEqual(p.get_next_stages_ids(form1.id), [form2.id, script.id])
        self.assertEqual(p.get_next_stages_ids(form2.id), [])

        self.assertEqual(p.get_previous_stages_ids(form2.id), [form1.id])

    def test_deduplicate_transitions_on_load(self):
        """Test that duplicate transitions are removed on save (and remain deduplicated on load)"""
        # Create a project with a script that has duplicate transitions
        script1 = ScriptStage(
            file="script1.py",
            id="script1",
            is_initial=True,
            title="Script 1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            file="script2.py",
            id="script2",
            is_initial=False,
            title="Script 2",
            workflow_position=(100, 100),
            workflow_transitions=[],
        )

        # Add the same transition multiple times (simulating corrupted data)
        duplicate_transition = WorkflowTransition(
            id="transition1",
            target_id=script2.id,
            target_type=script2.type_name,
            type="task",
            task_type="test_task",
        )

        script1.workflow_transitions.append(duplicate_transition)
        script1.workflow_transitions.append(duplicate_transition)
        script1.workflow_transitions.append(duplicate_transition)

        project = self.project_repository.load()
        project.add_stage(script1)
        project.add_stage(script2)
        self.project_repository.save(project)

        # Verify that duplicates are removed on save
        import json

        json_path = self.project_repository.get_file_path()
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        # Now with sanitization on save, only one transition should be saved
        self.assertEqual(len(data["scripts"][0]["transitions"]), 1)

        # Load the project - should still have only one transition
        loaded_project = self.project_repository.load()

        loaded_script1 = loaded_project.get_script(script1.id)
        self.assertIsNotNone(loaded_script1)
        assert loaded_script1 is not None  # Type narrowing for pyright

        # Verify that only one transition remains
        self.assertEqual(len(loaded_script1.workflow_transitions), 1)
        self.assertEqual(loaded_script1.workflow_transitions[0].id, "transition1")
        self.assertEqual(loaded_script1.workflow_transitions[0].target_id, script2.id)

    def test_deduplicate_multiple_unique_transitions(self):
        """Test that unique transitions are preserved while duplicates are removed"""
        script1 = ScriptStage(
            file="script1.py",
            id="script1",
            is_initial=True,
            title="Script 1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            file="script2.py",
            id="script2",
            is_initial=False,
            title="Script 2",
            workflow_position=(100, 100),
            workflow_transitions=[],
        )

        script3 = ScriptStage(
            file="script3.py",
            id="script3",
            is_initial=False,
            title="Script 3",
            workflow_position=(200, 200),
            workflow_transitions=[],
        )

        # Create unique and duplicate transitions
        transition1 = WorkflowTransition(
            id="transition1",
            target_id=script2.id,
            target_type=script2.type_name,
            type="task",
        )

        transition2 = WorkflowTransition(
            id="transition2",
            target_id=script3.id,
            target_type=script3.type_name,
            type="task",
        )

        # Add transitions: 2 unique, but transition1 is duplicated
        script1.workflow_transitions.append(transition1)
        script1.workflow_transitions.append(transition2)
        script1.workflow_transitions.append(transition1)  # duplicate

        project = self.project_repository.load()
        project.add_stage(script1)
        project.add_stage(script2)
        project.add_stage(script3)
        self.project_repository.save(project)

        # Load and verify deduplication
        loaded_project = self.project_repository.load()
        loaded_script1 = loaded_project.get_script(script1.id)

        self.assertIsNotNone(loaded_script1)
        assert loaded_script1 is not None  # Type narrowing for pyright
        self.assertEqual(len(loaded_script1.workflow_transitions), 2)

        # Verify both unique transitions are present
        transition_ids = [t.id for t in loaded_script1.workflow_transitions]
        self.assertIn("transition1", transition_ids)
        self.assertIn("transition2", transition_ids)

    def test_deduplicate_transitions_with_same_source_target(self):
        """Test that multiple transitions with same source→target (but different IDs) are deduplicated on save"""
        # Create stages
        script1 = ScriptStage(
            file="script1.py",
            id="script1",
            is_initial=True,
            title="Script 1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            file="script2.py",
            id="script2",
            is_initial=False,
            title="Script 2",
            workflow_position=(100, 100),
            workflow_transitions=[],
        )

        # Add DIFFERENT transitions with SAME source→target
        # This simulates corrupted data where multiple transitions point same direction
        transition_a = WorkflowTransition(
            id="trans-a",
            target_id=script2.id,
            target_type=script2.type_name,
            type="task",
            task_type="type1",
        )

        transition_b = WorkflowTransition(
            id="trans-b",
            target_id=script2.id,  # SAME target as trans-a
            target_type=script2.type_name,
            type="task",
            task_type="type2",
        )

        transition_c = WorkflowTransition(
            id="trans-c",
            target_id=script2.id,  # SAME target as trans-a
            target_type=script2.type_name,
            type="task",
            task_type="type3",
        )

        script1.workflow_transitions.append(transition_a)
        script1.workflow_transitions.append(transition_b)
        script1.workflow_transitions.append(transition_c)

        project = self.project_repository.load()
        project.add_stage(script1)
        project.add_stage(script2)
        self.project_repository.save(project)

        # Verify that duplicates are removed on save (defense in depth)
        import json

        json_path = self.project_repository.get_file_path()
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        # With sanitization on save, only 1 transition should be saved
        self.assertEqual(len(data["scripts"][0]["transitions"]), 1)

        # Load the project - should still have only one transition
        loaded_project = self.project_repository.load()
        loaded_script1 = loaded_project.get_script(script1.id)

        self.assertIsNotNone(loaded_script1)
        assert loaded_script1 is not None  # Type narrowing for pyright

        # Should keep only ONE transition (first occurrence)
        self.assertEqual(
            len(loaded_script1.workflow_transitions),
            1,
            f"Expected 1 transition after deduplication, got {len(loaded_script1.workflow_transitions)}",
        )

        # Should be the first one (trans-a)
        self.assertEqual(loaded_script1.workflow_transitions[0].id, "trans-a")
        self.assertEqual(loaded_script1.workflow_transitions[0].target_id, script2.id)

    def test_deduplicate_allows_bidirectional_transitions(self):
        """Test that bidirectional transitions (a→b and b→a) are both preserved"""
        # Create stages
        script1 = ScriptStage(
            file="script1.py",
            id="script1",
            is_initial=True,
            title="Script 1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            file="script2.py",
            id="script2",
            is_initial=False,
            title="Script 2",
            workflow_position=(100, 100),
            workflow_transitions=[],
        )

        # Add bidirectional transitions: script1→script2 and script2→script1
        forward = WorkflowTransition(
            id="forward",
            target_id=script2.id,
            target_type=script2.type_name,
            type="task",
            task_type="forward_type",
        )

        backward = WorkflowTransition(
            id="backward",
            target_id=script1.id,
            target_type=script1.type_name,
            type="task",
            task_type="backward_type",
        )

        script1.workflow_transitions.append(forward)
        script2.workflow_transitions.append(backward)

        project = self.project_repository.load()
        project.add_stage(script1)
        project.add_stage(script2)
        self.project_repository.save(project)

        # Load and verify both directions are preserved
        loaded_project = self.project_repository.load()
        loaded_script1 = loaded_project.get_script(script1.id)
        loaded_script2 = loaded_project.get_script(script2.id)

        self.assertIsNotNone(loaded_script1)
        self.assertIsNotNone(loaded_script2)
        assert loaded_script1 is not None
        assert loaded_script2 is not None

        # script1 should have forward transition
        self.assertEqual(len(loaded_script1.workflow_transitions), 1)
        self.assertEqual(loaded_script1.workflow_transitions[0].id, "forward")
        self.assertEqual(loaded_script1.workflow_transitions[0].target_id, script2.id)

        # script2 should have backward transition
        self.assertEqual(len(loaded_script2.workflow_transitions), 1)
        self.assertEqual(loaded_script2.workflow_transitions[0].id, "backward")
        self.assertEqual(loaded_script2.workflow_transitions[0].target_id, script1.id)

    def test_save_removes_duplicate_stages(self):
        """Test that duplicate stages are removed when saving a project"""
        project = self.project_repository.load()

        # Create two scripts with the same ID (simulating corrupted data)
        script1 = ScriptStage(
            file="script1.py",
            id="duplicate-id",
            is_initial=True,
            title="Script 1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            file="script2.py",
            id="duplicate-id",  # SAME ID
            is_initial=True,
            title="Script 2",
            workflow_position=(100, 100),
            workflow_transitions=[],
        )

        # Add both scripts (corrupted state)
        project.scripts.append(script1)
        project.scripts.append(script2)

        # Save should deduplicate
        self.project_repository.save(project)

        # Load and verify only one stage with that ID exists
        loaded_project = self.project_repository.load()
        duplicate_stages = [s for s in loaded_project.scripts if s.id == "duplicate-id"]

        self.assertEqual(len(duplicate_stages), 1)
        self.assertEqual(duplicate_stages[0].title, "Script 1")  # First one is kept

    def test_save_removes_duplicate_stages_across_types(self):
        """Test that duplicate stage IDs across different stage types are removed"""
        project = self.project_repository.load()

        # Create stages with the same ID but different types
        script = ScriptStage(
            file="script.py",
            id="duplicate-id",
            is_initial=True,
            title="Script",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        form = FormStage(
            id="duplicate-id",  # SAME ID
            path="form",
            title="Form",
            file="form.py",
            workflow_position=(100, 100),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        # Add both (script added first, form second)
        project.scripts.append(script)
        project.forms.append(form)

        # Save should deduplicate
        self.project_repository.save(project)

        # Load and verify only one stage with that ID exists
        loaded_project = self.project_repository.load()

        script_matches = [s for s in loaded_project.scripts if s.id == "duplicate-id"]
        form_matches = [f for f in loaded_project.forms if f.id == "duplicate-id"]

        # Only the first occurrence (script) should remain
        self.assertEqual(len(script_matches), 1)
        self.assertEqual(len(form_matches), 0)

    def test_save_removes_duplicate_transitions(self):
        """Test that duplicate transition IDs are removed when saving a project"""
        project = self.project_repository.load()

        script1 = ScriptStage(
            file="script1.py",
            id="script1",
            is_initial=True,
            title="Script 1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            file="script2.py",
            id="script2",
            is_initial=False,
            title="Script 2",
            workflow_position=(100, 100),
            workflow_transitions=[],
        )

        # Create transitions with same ID
        transition1 = WorkflowTransition(
            id="duplicate-transition",
            target_id=script2.id,
            target_type=script2.type_name,
            type="task",
        )

        transition2 = WorkflowTransition(
            id="duplicate-transition",  # SAME ID
            target_id=script2.id,
            target_type=script2.type_name,
            type="task",
        )

        script1.workflow_transitions.append(transition1)
        script1.workflow_transitions.append(transition2)

        project.add_stage(script1)
        project.add_stage(script2)

        # Save should deduplicate
        self.project_repository.save(project)

        # Load and verify only one transition exists
        loaded_project = self.project_repository.load()
        loaded_script1 = loaded_project.get_script(script1.id)

        self.assertIsNotNone(loaded_script1)
        assert loaded_script1 is not None

        self.assertEqual(len(loaded_script1.workflow_transitions), 1)
        self.assertEqual(
            loaded_script1.workflow_transitions[0].id, "duplicate-transition"
        )

    def test_save_removes_duplicate_transitions_across_stages(self):
        """Test that duplicate transition IDs across different stages are removed"""
        project = self.project_repository.load()

        script1 = ScriptStage(
            file="script1.py",
            id="script1",
            is_initial=True,
            title="Script 1",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        script2 = ScriptStage(
            file="script2.py",
            id="script2",
            is_initial=False,
            title="Script 2",
            workflow_position=(100, 100),
            workflow_transitions=[],
        )

        script3 = ScriptStage(
            file="script3.py",
            id="script3",
            is_initial=False,
            title="Script 3",
            workflow_position=(200, 200),
            workflow_transitions=[],
        )

        # Create transitions with same ID in different stages
        transition1 = WorkflowTransition(
            id="shared-id",
            target_id=script3.id,
            target_type=script3.type_name,
            type="task",
        )

        transition2 = WorkflowTransition(
            id="shared-id",  # SAME ID
            target_id=script3.id,
            target_type=script3.type_name,
            type="task",
        )

        script1.workflow_transitions.append(transition1)
        script2.workflow_transitions.append(transition2)  # Same ID in different stage

        project.add_stage(script1)
        project.add_stage(script2)
        project.add_stage(script3)

        # Save should deduplicate globally
        self.project_repository.save(project)

        # Load and verify
        loaded_project = self.project_repository.load()
        loaded_script1 = loaded_project.get_script(script1.id)
        loaded_script2 = loaded_project.get_script(script2.id)

        self.assertIsNotNone(loaded_script1)
        self.assertIsNotNone(loaded_script2)
        assert loaded_script1 is not None
        assert loaded_script2 is not None

        # First stage should keep the transition
        self.assertEqual(len(loaded_script1.workflow_transitions), 1)
        self.assertEqual(loaded_script1.workflow_transitions[0].id, "shared-id")

        # Second stage should have it removed
        self.assertEqual(len(loaded_script2.workflow_transitions), 0)

    def test_load_removes_duplicate_stages_from_corrupted_file(self):
        """Test that duplicate stages in the JSON file are removed when loading"""
        import json

        # Create a corrupted JSON file with duplicate stage IDs
        corrupted_data = {
            "version": "17.0",
            "workspace": {
                "name": "Test",
                "language": "en",
                "theme": None,
                "logo_url": None,
                "favicon_url": None,
                "brand_name": None,
                "main_color": None,
                "font_family": None,
                "font_color": None,
            },
            "home": {"access_control": {"is_public": False, "required_roles": []}},
            "scripts": [
                {
                    "id": "duplicate-id",
                    "file": "script1.py",
                    "title": "Script 1",
                    "workflow_position": [0, 0],
                    "is_initial": True,
                    "transitions": [],
                    "input": False,
                    "output": False,
                },
                {
                    "id": "duplicate-id",  # DUPLICATE
                    "file": "script2.py",
                    "title": "Script 2",
                    "workflow_position": [100, 100],
                    "is_initial": True,
                    "transitions": [],
                    "input": False,
                    "output": False,
                },
            ],
            "forms": [],
            "hooks": [],
            "jobs": [],
            "components": [],
        }

        # Write corrupted data to file
        json_path = self.project_repository.get_file_path()
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(corrupted_data, f, indent=2)

        # Load should deduplicate
        loaded_project = self.project_repository.load()

        # Verify only one stage remains
        duplicate_stages = [s for s in loaded_project.scripts if s.id == "duplicate-id"]
        self.assertEqual(len(duplicate_stages), 1)
        self.assertEqual(duplicate_stages[0].title, "Script 1")  # First one is kept
