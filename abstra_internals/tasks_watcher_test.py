import json
import tempfile
import time
import unittest
from pathlib import Path
from unittest.mock import MagicMock

from pydantic import ValidationError

from abstra_internals.repositories.tasks import TaskDTO
from abstra_internals.tasks_watcher import TasksWatcher


class TestTasksWatcher(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.mkdtemp()
        self.tasks_dir = Path(self.temp_dir) / "tasks"
        self.tasks_dir.mkdir(parents=True, exist_ok=True)

    def tearDown(self):
        import shutil

        shutil.rmtree(self.temp_dir, ignore_errors=True)

    def test_invalid_task_json_raises_validation_error(self):
        """
        Test that TasksWatcher raises ValidationError when encountering
        a JSON file that doesn't match TaskDTO schema.

        This reproduces the error seen when starting an empty project where
        some JSON file in the tasks directory doesn't have the required fields
        (id, type, payload, status, targetStageId, created, locked, completed).
        """
        # Create a mock handler
        mock_handler = MagicMock()
        watcher = TasksWatcher(handlers=[mock_handler])

        # Create an invalid JSON file that resembles a schema definition
        # (like the one in the error message)
        invalid_task_json = {
            "a8a61558-625d-483e-82f9": {
                "type": "string",
                "nullable": False,
                "default": None,
            }
        }

        invalid_file = self.tasks_dir / "invalid_task.json"
        invalid_file.write_text(json.dumps(invalid_task_json))

        # This should raise a ValidationError when trying to parse as TaskDTO
        with self.assertRaises(ValidationError) as context:
            watcher._handle_file_event(invalid_file)

        # Verify the error contains the expected missing fields
        error = context.exception
        error_dict = error.errors()

        # Check that all required fields are reported as missing
        required_fields = [
            "id",
            "type",
            "payload",
            "status",
            "targetStageId",
            "created",
            "locked",
            "completed",
        ]
        reported_fields = [e["loc"][0] for e in error_dict]

        for field in required_fields:
            self.assertIn(
                field, reported_fields, f"Field '{field}' should be reported as missing"
            )

    def test_valid_task_json_calls_handler(self):
        """
        Test that TasksWatcher successfully processes a valid TaskDTO JSON
        and calls the registered handlers.
        """
        mock_handler = MagicMock()
        watcher = TasksWatcher(handlers=[mock_handler])

        # Create a valid task JSON
        valid_task_json = {
            "id": "test-123",
            "type": "test-type",
            "payload": {"key": "value"},
            "status": "pending",
            "targetStageId": "stage-123",
            "created": {
                "at": "2025-01-01T00:00:00Z",
                "byExecutionId": None,
                "byStageId": None,
            },
            "locked": None,
            "completed": None,
        }

        valid_file = self.tasks_dir / "valid_task.json"
        valid_file.write_text(json.dumps(valid_task_json))

        # This should not raise any error
        watcher._handle_file_event(valid_file)

        # Wait a bit for the thread to process
        time.sleep(0.1)

        # Handler should have been called
        mock_handler.assert_called_once()

        # Verify the TaskDTO was correctly parsed
        called_task = mock_handler.call_args[0][0]
        self.assertIsInstance(called_task, TaskDTO)
        self.assertEqual(called_task.id, "test-123")
        self.assertEqual(called_task.type, "test-type")
        self.assertEqual(called_task.status, "pending")

    def test_task_dto_validation_with_malformed_data(self):
        """
        Direct test of TaskDTO validation with the exact error pattern
        from the bug report.
        """
        # This is similar to what was in the JSON file causing the error
        malformed_data = {
            "a8a61558-625d-483e-82f9": {
                "type": "string",
                "nullable": False,
                "default": None,
            }
        }

        with self.assertRaises(ValidationError) as context:
            TaskDTO(**malformed_data)  # type: ignore

        error = context.exception
        self.assertIn("Field required", str(error))

        # Verify all 8 validation errors (as shown in the original error)
        error_dict = error.errors()
        self.assertEqual(
            len(error_dict),
            8,
            "Should have 8 validation errors for missing required fields",
        )

    def test_non_dict_json_files_should_be_ignored(self):
        """
        Test that TasksWatcher should IGNORE JSON files that don't contain dictionaries.

        This includes arrays, strings, numbers, null, etc.
        """
        mock_handler = MagicMock()
        watcher = TasksWatcher(handlers=[mock_handler])

        # Test various non-dict JSON types
        test_cases = [
            ("array.json", "[]"),
            ("array_with_data.json", "[1, 2, 3]"),
            ("string.json", '"some string"'),
            ("number.json", "42"),
            ("null.json", "null"),
            ("boolean.json", "true"),
        ]

        for filename, content in test_cases:
            file_path = self.tasks_dir / filename
            file_path.write_text(content)

            try:
                watcher._handle_file_event(file_path)
                mock_handler.assert_not_called()
            except Exception as e:
                self.fail(
                    f"TasksWatcher should ignore non-dict JSON in {filename} but raised {type(e).__name__}: {e}"
                )

    def test_empty_array_json_file_should_be_ignored(self):
        """
        Test that TasksWatcher should IGNORE JSON files containing empty arrays.

        The FileSystemJsonTables creates files with [] content that should be ignored.
        This test follows TDD approach - it will FAIL until we implement the fix.
        """
        mock_handler = MagicMock()
        watcher = TasksWatcher(handlers=[mock_handler])

        # Create a JSON file with empty array (as created by FileSystemJsonTables)
        empty_array_file = self.tasks_dir / "f910a9f0-6f46-4450-85b4-2373fed7a584.json"
        empty_array_file.write_text("[]")

        # This should NOT raise any error - the file should be ignored
        try:
            watcher._handle_file_event(empty_array_file)
            # If we get here without error, the handler should NOT have been called
            mock_handler.assert_not_called()
        except (ValidationError, TypeError) as e:
            self.fail(
                f"TasksWatcher should ignore empty array JSON files but raised {type(e).__name__}"
            )

    def test_schema_json_file_should_be_ignored(self):
        """
        Test that TasksWatcher should IGNORE the __schema__.json file
        created by FileSystemJsonTables.

        This test follows TDD approach - it will FAIL until we implement
        the fix to skip __schema__.json files.
        """
        mock_handler = MagicMock()
        watcher = TasksWatcher(handlers=[mock_handler])

        # Create a __schema__.json file with the actual structure
        # that FileSystemJsonTables creates
        schema_json = {
            "a8a61558-625d-483e-82f9-0d996ac19367": {
                "table_name": "data",
                "columns": [
                    {
                        "id": "50def2fe-1731-4467-a936-e5ead2d84a5e",
                        "name": "id",
                        "schema": {"type": "string"},
                        "is_primary_key": True,
                        "default": None,
                    },
                    {
                        "id": "ee553b31-4594-45f7-b6c0-c613c5e2548b",
                        "name": "type",
                        "schema": {"type": "string"},
                        "is_primary_key": False,
                        "default": None,
                    },
                ],
            }
        }

        schema_file = self.tasks_dir / "__schema__.json"
        schema_file.write_text(json.dumps(schema_json))

        # This should NOT raise any error - the file should be ignored
        # Currently this will FAIL because the watcher tries to parse it
        try:
            watcher._handle_file_event(schema_file)
            # If we get here without error, the handler should NOT have been called
            mock_handler.assert_not_called()
        except ValidationError:
            self.fail(
                "TasksWatcher should ignore __schema__.json files but raised ValidationError"
            )


if __name__ == "__main__":
    unittest.main()
