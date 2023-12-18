from unittest import TestCase
from .fixtures import init_dir, clear_dir, get_local_client
from abstra_internals.repositories.project.project import ProjectRepository, HookStage
from abstra_internals.repositories.stage_run import LocalStageRunRepository


class TestKanbanRouter(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.client = get_local_client()

    def tearDown(self) -> None:
        clear_dir(self.root)
        del self.client

    def test_ancestors_logs(self):
        project = ProjectRepository.load()
        stage = HookStage.create(title="test", file="test.py")
        project.add_stage(stage)
        ProjectRepository.save(project)
        initial = LocalStageRunRepository.create_initial(stage.id)
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
        stage_run = LocalStageRunRepository.create_initial(stage.id)
        res = self.client.post(
            "/_editor/api/kanban", json=dict(selected_stages_ids=[stage_run.stage])
        )
        self.assertEqual(res.status_code, 200)
        self.assertEqual(
            res.json,
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
                                "created_at": stage_run.created_at.isoformat(),
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
                    }
                ],
                "next_stage_options": [],
            },
        )
