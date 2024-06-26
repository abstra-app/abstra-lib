import shutil
import time
from pathlib import Path
from unittest import TestCase
from unittest.mock import ANY

from abstra_internals.repositories.stage_run import LocalStageRunRepository
from abstra_internals.utils.dot_abstra import DOT_ABSTRA_FOLDER_NAME
from tests.fixtures import clear_dir, get_editor_flask_client, init_dir


def sort_response(response: dict):
    response["stage_run_cards"] = sorted(
        response["stage_run_cards"], key=lambda x: x["stage"]
    )
    for stage_run_card in response["stage_run_cards"]:
        stage_run_card["content"] = sorted(
            stage_run_card["content"], key=lambda x: x["key"]
        )
    return response


class TestWorkflowA(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.stage_run_repository = LocalStageRunRepository()
        self.client = get_editor_flask_client()
        self.maxDiff = None

        (self.root / DOT_ABSTRA_FOLDER_NAME).mkdir(exist_ok=True)

    def tearDown(self) -> None:
        self.stage_run_repository.clear()
        clear_dir(self.root)

    def create_project_a_py_files(self):
        shutil.copytree(
            Path(__file__).parent / "assets" / "project_a",
            self.root,
            dirs_exist_ok=True,
        )

    def create_stages_and_transitions(self):
        transitions = [
            {
                "id": "1",
                "type": "jobs:finished",
                "sourceStageId": "job_a",
                "targetStageId": "hook_b",
            },
            {
                "id": "2",
                "type": "hooks:finished",
                "sourceStageId": "hook_b",
                "targetStageId": "script_c",
            },
            {
                "id": "3",
                "type": "hooks:finished",
                "sourceStageId": "hook_b",
                "targetStageId": "script_d",
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
                    "variableName": None,
                    "itemName": None,
                },
            },
            {
                "type": "hooks",
                "id": "hook_b",
                "title": "hook B",
                "position": {
                    "x": 10,
                    "y": 10,
                },
                "props": {
                    "filename": "hook_b.py",
                    "path": "hook-b",
                    "variableName": None,
                    "itemName": None,
                },
            },
            {
                "type": "scripts",
                "id": "script_c",
                "title": "Script C",
                "position": {
                    "x": 20,
                    "y": 20,
                },
                "props": {
                    "filename": "script_c.py",
                    "path": None,
                    "variableName": None,
                    "itemName": None,
                },
            },
            {
                "type": "scripts",
                "id": "script_d",
                "title": "Script D",
                "position": {
                    "x": 30,
                    "y": 30,
                },
                "props": {
                    "filename": "script_d.py",
                    "path": None,
                    "variableName": None,
                    "itemName": None,
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
        self.create_project_a_py_files()
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
                            "itemName": None,
                            "path": None,
                            "variableName": None,
                        },
                        "title": "Job A",
                        "type": "jobs",
                    },
                    {
                        "id": "hook_b",
                        "position": {"x": 10.0, "y": 10.0},
                        "props": {
                            "filename": "hook_b.py",
                            "itemName": None,
                            "path": "hook-b",
                            "variableName": None,
                        },
                        "title": "hook B",
                        "type": "hooks",
                    },
                    {
                        "id": "script_c",
                        "position": {"x": 20.0, "y": 20.0},
                        "props": {
                            "filename": "script_c.py",
                            "itemName": None,
                            "path": None,
                            "variableName": None,
                        },
                        "title": "Script C",
                        "type": "scripts",
                    },
                    {
                        "id": "script_d",
                        "position": {"x": 30.0, "y": 30.0},
                        "props": {
                            "filename": "script_d.py",
                            "itemName": None,
                            "path": None,
                            "variableName": None,
                        },
                        "title": "Script D",
                        "type": "scripts",
                    },
                ],
                "transitions": [
                    {
                        "id": "1",
                        "props": {"conditionValue": None},
                        "sourceStageId": "job_a",
                        "targetStageId": "hook_b",
                        "type": "jobs:finished",
                    },
                    {
                        "id": "2",
                        "props": {"conditionValue": None},
                        "sourceStageId": "hook_b",
                        "targetStageId": "script_c",
                        "type": "hooks:finished",
                    },
                    {
                        "id": "3",
                        "props": {"conditionValue": None},
                        "sourceStageId": "hook_b",
                        "targetStageId": "script_d",
                        "type": "hooks:finished",
                    },
                ],
            },
        )

    def test_hook_is_waiting_after_job(self):
        # Setup
        self.create_project_a_py_files()
        self.create_stages_and_transitions()

        # Run job
        run_response = self.client.post("/_editor/api/jobs/job_a/run")
        self.assertEqual(run_response.status_code, 200)

        # Check hook is waiting
        response = self.client.post(
            "/_editor/api/kanban",
            json={
                "filter": {
                    "stage": ["job_a", "hook_b", "script_c", "script_d"],
                    "data": {},
                    "status": [],
                    "search": "",
                },
                "limit": 10,
                "offset": 0,
            },
        )

        self.assertEqual(response.status_code, 200)

        self.assertEqual(
            sort_response(response.get_json()),
            sort_response(
                {
                    "not_found_stages": [],
                    "stage_run_cards": [
                        {
                            "content": [
                                {
                                    "key": "key_a",
                                    "type": "text",
                                    "value": "job a set this",
                                },
                                {
                                    "key": "key_x",
                                    "type": "text",
                                    "value": "job a set this",
                                },
                            ],
                            "created_at": ANY,
                            "id": ANY,
                            "stage": "hook_b",
                            "status": "waiting",
                            "updated_at": ANY,
                        }
                    ],
                    "total_count": 1,
                }
            ),
        )

    def test_scripts_ran_after_hook(self):
        # Setup
        self.create_project_a_py_files()
        self.create_stages_and_transitions()

        # Run job and hook
        self.client.post("/_editor/api/jobs/job_a/run")
        time.sleep(1)  # TODO: better way to wait all threads

        first_kanban_state = self.client.post(
            "/_editor/api/kanban",
            json={
                "filter": {
                    "stage": ["job_a", "hook_b", "script_c", "script_d"],
                    "data": {},
                    "status": [],
                    "search": "",
                },
                "limit": 10,
                "offset": 0,
            },
        )

        assert len(first_kanban_state.get_json()["stage_run_cards"]) == 1
        hook_b_thread_id = first_kanban_state.get_json()["stage_run_cards"][0]["id"]

        self.client.post(
            "/_editor/api/hooks/hook_b/run?abstra-run-id=" + hook_b_thread_id,
        )
        time.sleep(1)  # TODO: better way to wait all threads

        # Check scripts ran
        first_kanban_state = self.client.post(
            "/_editor/api/kanban",
            json={
                "filter": {
                    "stage": ["job_a", "hook_b", "script_c", "script_d"],
                    "data": {},
                    "status": [],
                    "search": "",
                },
                "limit": 10,
                "offset": 0,
            },
        )

        self.assertEqual(first_kanban_state.status_code, 200)

        self.assertEqual(
            sort_response(first_kanban_state.get_json()),
            sort_response(
                {
                    "not_found_stages": [],
                    "stage_run_cards": [
                        {
                            "content": [
                                {
                                    "key": "key_b",
                                    "type": "text",
                                    "value": "hook b set this",
                                },
                                {
                                    "key": "key_a",
                                    "type": "text",
                                    "value": "job a set this",
                                },
                                {
                                    "key": "key_x",
                                    "type": "text",
                                    "value": "job a set this",
                                },
                                {
                                    "key": "key_d",
                                    "type": "text",
                                    "value": "job a set this\nscript d set this",
                                },
                            ],
                            "created_at": ANY,
                            "id": ANY,
                            "stage": "script_d",
                            "status": "finished",
                            "updated_at": ANY,
                        },
                        {
                            "content": [
                                {
                                    "key": "key_b",
                                    "type": "text",
                                    "value": "hook b set this",
                                },
                                {
                                    "key": "key_a",
                                    "type": "text",
                                    "value": "job a set this",
                                },
                                {
                                    "key": "key_x",
                                    "type": "text",
                                    "value": "job a set this",
                                },
                                {
                                    "key": "key_c",
                                    "type": "text",
                                    "value": "job a set this\nscript c set this",
                                },
                            ],
                            "created_at": ANY,
                            "id": ANY,
                            "stage": "script_c",
                            "status": "finished",
                            "updated_at": ANY,
                        },
                    ],
                    "total_count": 2,
                }
            ),
        )

    def test_running_each_detached(self):
        # Setup
        self.create_project_a_py_files()
        self.create_stages_and_transitions()
        write_response = self.client.post(
            "/_editor/api/workspace/write-test-data",
            json={
                "test_data": '{\n    "key_x": "some test data"\n}',
            },
        )
        self.assertEqual(write_response.status_code, 200)
        # Run job, hook and scripts
        job_a_response = self.client.post("/_editor/api/jobs/job_a/test")
        self.assertEqual(job_a_response.status_code, 200)
        time.sleep(1)  # TODO: better way to wait all threads

        write_response = self.client.post(
            "/_editor/api/workspace/write-test-data",
            json={
                "test_data": '{\n    "key_x": "some test data"\n, "key_a": "job a set this"}',
            },
        )
        hook_b_response = self.client.post("/_editor/api/hooks/hook_b/test")
        self.assertEqual(hook_b_response.status_code, 200)
        time.sleep(1)  # TODO: better way to wait all threads
        script_c_response = self.client.post("/_editor/api/scripts/script_c/test")
        self.assertEqual(script_c_response.status_code, 200)
        time.sleep(1)  # TODO: better way to wait all threads
        script_d_response = self.client.post("/_editor/api/scripts/script_d/test")
        self.assertEqual(script_d_response.status_code, 200)

        time.sleep(1)  # TODO: better way to wait all threads
        # Check responses

        logs = {
            "script_c": Path(self.root) / "script_c.log",
            "script_d": Path(self.root) / "script_d.log",
            "job_a": Path(self.root) / "job_a.log",
            "hook_b": Path(self.root) / "hook_b.log",
        }

        # Check scripts ran
        self.assertEqual(logs["job_a"].read_text(), "job ran successfully")
        self.assertEqual(logs["hook_b"].read_text(), "some test data")
        self.assertEqual(logs["script_c"].read_text(), "some test data")
        self.assertEqual(
            logs["script_d"].read_text(), "job a set this\nscript d set this"
        )
