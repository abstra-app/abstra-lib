import json
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


class TestFork(TestCase):
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
        ]

        update_dto = {
            "stages": stages,
            "transitions": transitions,
        }

        put_response = self.client.put("/_editor/api/workflows", json=update_dto)
        self.assertEqual(put_response.status_code, 200)

    def _run_until_script_finish(self):
        # Setup
        self.create_project_a_py_files()
        self.create_stages_and_transitions()

        # Run job a
        self.client.post("/_editor/api/jobs/job_a/run")

        # Check job a finished - wait for "hook b waiting"
        for _ in range(10):
            first_kanban_state = self.client.post(
                "/_editor/api/kanban",
                json={
                    "filter": {
                        "stage": ["job_a", "hook_b", "script_c"],
                        "data": {},
                        "status": [],
                        "search": "",
                    },
                    "limit": 10,
                    "offset": 0,
                },
            )

            cards = first_kanban_state.get_json()["stage_run_cards"]

            if (
                len(cards) == 1
                and cards[0]["stage"] == "hook_b"
                and cards[0]["status"] == "waiting"
            ):
                break

            time.sleep(0.5)
        else:
            assert False, "Job a did not finish or hook b did not wait"

        # Run hook b
        self.client.post(
            "/_editor/api/hooks/hook_b/run?abstra-run-id=" + cards[0]["id"]
        )

        # Check scripts finished
        for _ in range(10):
            second_kanban_state = self.client.post(
                "/_editor/api/kanban",
                json={
                    "filter": {
                        "stage": ["job_a", "hook_b", "script_c"],
                        "data": {},
                        "status": [],
                        "search": "",
                    },
                    "limit": 10,
                    "offset": 0,
                },
            )

            cards = second_kanban_state.get_json()["stage_run_cards"]

            if (
                len(cards) == 1
                and cards[0]["stage"] == "script_c"
                and cards[0]["status"] == "finished"
            ):
                break

            time.sleep(0.5)
        else:
            assert False, "Hook b did not finish or script c did not run/finish"

        second_kanban_state_json = second_kanban_state.get_json()
        self.assertEqual(
            sort_response(second_kanban_state_json),
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
                    "total_count": 1,
                }
            ),
        )

        return second_kanban_state_json["stage_run_cards"][0]["id"]

    def test_fork_script_with_custom_data(self):
        stage_run_id = self._run_until_script_finish()

        fork_result = self.client.post(
            "/_editor/api/stage_runs/fork",
            json={
                "stage_run_id": stage_run_id,
                "custom_thread_data": json.dumps(
                    {
                        "key_a": "forked key a",
                        "key_b": "forked key b",
                    }
                ),
            },
        )

        self.assertEqual(fork_result.status_code, 200)

        kanban = self.client.post(
            "/_editor/api/kanban",
            json={
                "filter": {
                    "stage": ["job_a", "hook_b", "script_c"],
                    "data": {},
                    "status": ["waiting"],
                    "search": "",
                },
                "limit": 10,
                "offset": 0,
            },
        )

        self.assertEqual(kanban.status_code, 200)

        kanban_json = kanban.get_json()
        self.assertEqual(
            sort_response(kanban_json),
            sort_response(
                {
                    "not_found_stages": [],
                    "stage_run_cards": [
                        {
                            "content": [
                                {
                                    "key": "key_a",
                                    "type": "text",
                                    "value": "forked key a",
                                },
                                {
                                    "key": "key_b",
                                    "type": "text",
                                    "value": "forked key b",
                                },
                            ],
                            "created_at": ANY,
                            "id": ANY,
                            "stage": "script_c",
                            "status": "waiting",
                            "updated_at": ANY,
                        },
                    ],
                    "total_count": 1,
                }
            ),
        )

    def test_fork_script(self):
        stage_run_id = self._run_until_script_finish()

        fork_result = self.client.post(
            "/_editor/api/stage_runs/fork",
            json={
                "stage_run_id": stage_run_id,
            },
        )

        self.assertEqual(fork_result.status_code, 200)

        kanban = self.client.post(
            "/_editor/api/kanban",
            json={
                "filter": {
                    "stage": ["job_a", "hook_b", "script_c"],
                    "data": {},
                    "status": ["waiting"],
                    "search": "",
                },
                "limit": 10,
                "offset": 0,
            },
        )

        self.assertEqual(kanban.status_code, 200)

        kanban_json = kanban.get_json()
        self.assertEqual(
            sort_response(kanban_json),
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
                            ],
                            "created_at": ANY,
                            "id": ANY,
                            "stage": "script_c",
                            "status": "waiting",
                            "updated_at": ANY,
                        },
                    ],
                    "total_count": 1,
                }
            ),
        )

    # todo: add tests with iterator in fork
