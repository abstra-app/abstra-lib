import shutil
import time
from pathlib import Path
from unittest.mock import ANY

from tests.fixtures import BaseWorkflowTest, sort_response


class TestWorkflowD(BaseWorkflowTest):
    def setUp(self) -> None:
        super().setUp()

    def create_project_d_py_files(self):
        shutil.copytree(
            Path(__file__).parent / "assets" / "project_d",
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
                "props": {"taskType": "approved"},
            },
            {
                "id": "2",
                "type": "task",
                "sourceStageId": "job_a",
                "targetStageId": "script_c",
                "props": {"taskType": "declined"},
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
                },
            },
            {
                "type": "scripts",
                "id": "script_c",
                "title": "Script C",
                "position": {
                    "x": 40,
                    "y": 40,
                },
                "props": {
                    "filename": "script_c.py",
                },
            },
        ]

        update_dto = {
            "state": {
                "stages": stages,
                "transitions": transitions,
            }
        }

        put_response = self.client.put("/_editor/api/workflows", json=update_dto)
        self.assertEqual(put_response.status_code, 200)

    def test_project_creation(self):
        self.create_project_d_py_files()
        self.create_stages_and_transitions()

        get_response = self.client.get("/_editor/api/workflows")
        self.assertEqual(get_response.status_code, 200)

        self.assertEqual(
            get_response.get_json(),
            {
                "stages": [
                    {
                        "id": "job_a",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "filename": "job_a.py",
                        },
                        "title": "Job A",
                        "type": "jobs",
                        "input": False,
                        "output": False,
                        "module": None,
                    },
                    {
                        "id": "script_b",
                        "position": {"x": 20, "y": 20},
                        "props": {
                            "filename": "script_b.py",
                        },
                        "title": "Script B",
                        "type": "scripts",
                        "input": False,
                        "output": False,
                        "module": None,
                    },
                    {
                        "id": "script_c",
                        "position": {"x": 40, "y": 40},
                        "props": {
                            "filename": "script_c.py",
                        },
                        "title": "Script C",
                        "type": "scripts",
                        "input": False,
                        "output": False,
                        "module": None,
                    },
                ],
                "transitions": [
                    {
                        "id": "1",
                        "props": {"taskType": "approved"},
                        "sourceStageId": "job_a",
                        "targetStageId": "script_b",
                        "type": "task",
                    },
                    {
                        "id": "2",
                        "props": {"taskType": "declined"},
                        "sourceStageId": "job_a",
                        "targetStageId": "script_c",
                        "type": "task",
                    },
                ],
            },
        )

    def test_sending_tasks_conditionally(self):
        # Setup
        self.create_project_d_py_files()
        self.create_stages_and_transitions()

        # Run job
        run_response = self.client.post("/_editor/api/jobs/job_a/run")
        self.assertEqual(run_response.status_code, 200)

        for _ in range(20):
            # Check completed task in script stage
            response = self.client.post(
                "/_editor/api/tasks/list",
                json={
                    "filter": {
                        "stage": ["script_b"],
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
                and tasks[0]["status"] == "completed"
            ):
                break

            time.sleep(0.2)
        else:
            self.fail("Script did not completed task")

        self.assertEqual(
            sort_response(response.get_json()),
            sort_response(
                {
                    "tasks": [
                        {
                            "id": ANY,
                            "type": "approved",
                            "payload": {
                                "key_a": "job a set this",
                            },
                            "status": "completed",
                            "sourceStageType": "job",
                            "sourceStageTitle": "Job A",
                            "targetStageId": "script_b",
                            "targetStageType": "tasklet",
                            "targetStageTitle": "Script B",
                            "created": {
                                "at": ANY,
                                "byExecutionId": ANY,
                                "byStageId": "job_a",
                            },
                            "completed": ANY,
                            "locked": ANY,
                        },
                    ],
                    "totalCount": 1,
                }
            ),
        )

    def test_not_sending_tasks_conditionally(self):
        # Setup
        self.create_project_d_py_files()
        self.create_stages_and_transitions()

        # Run job
        run_response = self.client.post("/_editor/api/jobs/job_a/run")
        self.assertEqual(run_response.status_code, 200)

        for _ in range(20):
            # Check completed task in script stage
            response = self.client.post(
                "/_editor/api/tasks/list",
                json={
                    "filter": {
                        "stage": ["script_c"],
                        "status": [],
                    },
                    "limit": 10,
                    "offset": 0,
                },
            )

            tasks = response.get_json()["tasks"]
            if len(tasks) != 0:
                self.fail("Task sent to script_c, but it should not")

            time.sleep(0.2)
