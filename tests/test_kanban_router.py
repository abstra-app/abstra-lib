from unittest import TestCase

from .fixtures import init_dir, clear_dir, get_local_client
from abstra_internals.repositories.project.project import (
    ProjectRepository,
    HookStage,
    ScriptStage,
    WorkflowTransition,
)
from abstra_internals.server.controller.kanban import (
    DataRequest,
    DataRequestFilter,
    DataRequestSelection,
)
from abstra_internals.utils.datetime import to_utc_iso_string
from abstra_internals.repositories import stage_run_repository


class TestKanbanRouter(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.client = get_local_client()
        stage_run_repository.clear()  # type: ignore
        self.stage_run_repository = stage_run_repository
        self.stage_run_repository.clear()  # type: ignore

    def tearDown(self) -> None:
        clear_dir(self.root)
        del self.client

    def test_ancestors_logs(self):
        project = ProjectRepository.load()
        stage = HookStage.create(title="test", file="test.py")
        project.add_stage(stage)
        ProjectRepository.save(project)
        initial = self.stage_run_repository.create_initial(stage.id)
        res = self.client.get("/_editor/api/kanban/logs/" + initial.id)
        self.assertEqual(res.status_code, 200)
        assert res.json is not None
        self.assertEqual(len(res.json), 1)
        self.assertEqual(res.json[0]["stage_run"]["id"], initial.id)
        self.assertEqual(res.json[0]["logs"], [])
        self.assertEqual(
            res.json[0]["stage"],
            {
                "type": "hooks",
                "id": stage.id,
                "title": "test",
                "position": {"x": 0, "y": 0},
                "props": {"filename": "test.py", "variableName": None, "path": "test"},
            },
        )

    def test_get_data(self):
        project = ProjectRepository.load()
        stage = HookStage.create(title="test", file="test.py")
        project.add_stage(stage)
        ProjectRepository.save(project)
        stage_run = self.stage_run_repository.create_initial(stage.id)
        res = self.client.post(
            "/_editor/api/kanban",
            json=DataRequest(
                filter=DataRequestFilter.from_dict({}),
                selection=[
                    DataRequestSelection.from_dict(
                        {
                            "stage_id": stage.id,
                        }
                    )
                ],
            ).to_dict(),
        )
        self.maxDiff = None
        self.assertEqual(res.status_code, 200)
        self.assertEqual(
            {
                "columns": [
                    {
                        "selected_stage": {
                            "can_be_started": False,
                            "id": stage.id,
                            "path": None,
                            "title": "test",
                            "type": "hook",
                        },
                        "stage_run_cards": [
                            {
                                "content": [],
                                "created_at": to_utc_iso_string(stage_run.created_at),
                                "id": stage_run.id,
                                "status": "waiting",
                            }
                        ],
                        "stages": [
                            {
                                "can_be_started": False,
                                "id": stage.id,
                                "path": None,
                                "title": "test",
                                "type": "hook",
                            }
                        ],
                        "total_count": 1,
                    }
                ],
                "next_stage_options": [],
            },
            res.json,
        )

    def test_data_with_trasitions(self):
        project = ProjectRepository.load()
        stage = HookStage.create(title="test", file="test.py")

        script = ScriptStage.create(title="script", file="script.py")

        stage.workflow_transitions = [
            WorkflowTransition(
                id="qualquer",
                target_id=script.id,
                target_type="script",
                condition_value=None,
                type="hooks:finished",
            )
        ]

        project.add_stage(script)
        project.add_stage(stage)

        ProjectRepository.save(project)
        stage_run = self.stage_run_repository.create_initial(stage.id)
        res = self.client.post(
            "/_editor/api/kanban",
            json=DataRequest(
                filter=DataRequestFilter.from_dict({}),
                selection=[
                    DataRequestSelection.from_dict(
                        {
                            "stage_id": stage.id,
                        }
                    )
                ],
            ).to_dict(),
        )

        self.maxDiff = None
        self.assertEqual(res.status_code, 200)
        self.assertEqual(
            {
                "columns": [
                    {
                        "selected_stage": {
                            "can_be_started": False,
                            "id": stage.id,
                            "path": None,
                            "title": "test",
                            "type": "hook",
                        },
                        "stage_run_cards": [
                            {
                                "content": [],
                                "created_at": to_utc_iso_string(stage_run.created_at),
                                "id": stage_run.id,
                                "status": "waiting",
                            }
                        ],
                        "stages": [
                            {
                                "can_be_started": False,
                                "id": stage.id,
                                "path": None,
                                "title": "test",
                                "type": "hook",
                            },
                        ],
                        "total_count": 1,
                    }
                ],
                "next_stage_options": [
                    {
                        "can_be_started": False,
                        "id": script.id,
                        "path": None,
                        "title": "script",
                        "type": "script",
                    }
                ],
            },
            res.json,
        )
