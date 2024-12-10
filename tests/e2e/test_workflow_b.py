import shutil
import time
from pathlib import Path
from unittest.mock import ANY

from tests.fixtures import BaseWorkflowTest, sort_response


class TestWorkflowB(BaseWorkflowTest):
    def setUp(self) -> None:
        super().setUp()

    def create_project_b_py_files(self):
        shutil.copytree(
            Path(__file__).parent / "assets" / "legacy_project_b",
            self.root,
            dirs_exist_ok=True,
        )

    def create_stages_and_transitions(self):
        transitions = [
            {
                "id": "1",
                "type": "task",
                "sourceStageId": "job_a",
                "targetStageId": "script_b",
            },
        ]

        stages = [
            {
                "type": "jobs",
                "id": "job_a",
                "title": "Job A",
                "position": {
                    "x": 0,
                    "y": 0,
                },
                "props": {
                    "filename": "job_a.py",
                    "path": None,
                },
            },
            {
                "type": "scripts",
                "id": "script_b",
                "title": "Script B",
                "position": {
                    "x": 20,
                    "y": 20,
                },
                "props": {
                    "filename": "script_b.py",
                    "path": None,
                },
            },
        ]

        update_dto = {
            "stages": stages,
            "transitions": transitions,
        }

        put_response = self.client.put("/_editor/api/workflows", json=update_dto)
        self.assertEqual(put_response.status_code, 200)

    def test_project_creation(self):
        self.create_project_b_py_files()
        self.create_stages_and_transitions()

        get_response = self.client.get("/_editor/api/workflows")
        self.assertEqual(get_response.status_code, 200)

        self.assertEqual(
            get_response.get_json(),
            {
                "stages": [
                    {
                        "id": "job_a",
                        "position": {"x": 0.0, "y": 0.0},
                        "props": {
                            "filename": "job_a.py",
                            "path": None,
                        },
                        "title": "Job A",
                        "type": "jobs",
                    },
                    {
                        "id": "script_b",
                        "position": {"x": 20.0, "y": 20.0},
                        "props": {
                            "filename": "script_b.py",
                            "path": None,
                        },
                        "title": "Script B",
                        "type": "scripts",
                    },
                ],
                "transitions": [
                    {
                        "id": "1",
                        "props": {"taskType": None},
                        "sourceStageId": "job_a",
                        "targetStageId": "script_b",
                        "type": "task",
                    },
                ],
            },
        )

    def test_no_set_data_nor_send_task(self):
        # Setup
        self.create_project_b_py_files()
        self.create_stages_and_transitions()

        # Run job
        run_response = self.client.post("/_editor/api/jobs/job_a/run")
        self.assertEqual(run_response.status_code, 200)

        for _ in range(10):
            # Check completed task in script stage
            response = self.client.post(
                "/_editor/api/tasks/list",
                json={
                    "filter": {
                        "stage": ["job_a", "script_b"],
                        "status": [],
                    },
                    "limit": 10,
                    "offset": 0,
                },
            )

            tasks = response.get_json()["tasks"]
            if (
                len(tasks) == 1
                and tasks[0]["targetStageId"] == "script_b"
                and tasks[0]["status"] == "pending"
            ):
                break

            time.sleep(0.1)
        else:
            self.fail("Script did not completed task")

        self.assertEqual(
            sort_response(response.get_json()),
            sort_response(
                {
                    "tasks": [
                        {
                            "id": ANY,
                            "payload": {
                                "_id": ANY,
                            },
                            "type": "success",
                            "status": "pending",
                            "sourceStageType": "job",
                            "sourceStageTitle": "Job A",
                            "targetStageId": "script_b",
                            "targetStageType": "on-task",
                            "targetStageTitle": "Script B",
                            "created": {
                                "at": ANY,
                                "byExecutionId": ANY,
                                "byStageId": "job_a",
                            },
                            "completed": None,
                            "locked": None,
                        }
                    ],
                    "totalCount": 1,
                }
            ),
        )
