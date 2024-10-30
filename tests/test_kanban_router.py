from abstra_internals.controllers.kanban import DataRequest, DataRequestFilter
from abstra_internals.repositories.project.project import (
    HookStage,
    ProjectRepository,
    ScriptStage,
    WorkflowTransition,
)
from abstra_internals.utils.datetime import to_utc_iso_string
from tests.fixtures import BaseTest


class TestKanbanRouter(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.client = self.get_editor_flask_client()

    def test_ancestors_logs(self):
        project = ProjectRepository.load()
        stage = HookStage.create(title="test", file="test.py")
        project.add_stage(stage)
        ProjectRepository.save(project)
        initial = self.repositories.stage_run.create_initial(stage.id)
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
                "props": {
                    "filename": "test.py",
                    "variableName": None,
                    "path": "test",
                    "itemName": None,
                },
            },
        )

    def test_get_data(self):
        project = ProjectRepository.load()
        stage = HookStage.create(title="test", file="test.py")
        project.add_stage(stage)
        ProjectRepository.save(project)
        stage_run = self.repositories.stage_run.create_initial(stage.id)
        res = self.client.post(
            "/_editor/api/kanban",
            json=DataRequest(
                filter=DataRequestFilter.from_dict({"stage": [stage.id]}),
                limit=10,
                offset=0,
            ).to_dict(),
        )
        self.maxDiff = None
        self.assertEqual(res.status_code, 200)
        self.assertEqual(
            {
                "stage_run_cards": [
                    {
                        "content": [],
                        "created_at": to_utc_iso_string(stage_run.created_at),
                        "updated_at": to_utc_iso_string(stage_run.updated_at),
                        "id": stage_run.id,
                        "status": "waiting",
                        "stage": stage.id,
                    }
                ],
                "not_found_stages": [],
                "total_count": 1,
            },
            res.json,
        )

    def test_data_with_trasitions(self):
        project = ProjectRepository.load()
        hook = HookStage.create(title="test", file="test.py")

        script = ScriptStage.create(title="script", file="script.py")

        hook.workflow_transitions = [
            WorkflowTransition(
                id="qualquer",
                target_id=script.id,
                target_type="script",
                condition_value=None,
                type="hooks:finished",
            )
        ]

        project.add_stage(script)
        project.add_stage(hook)

        ProjectRepository.save(project)
        stage_run = self.repositories.stage_run.create_initial(hook.id)
        res = self.client.post(
            "/_editor/api/kanban",
            json=DataRequest(
                limit=10,
                offset=0,
                filter=DataRequestFilter.from_dict({"stage": [hook.id]}),
            ).to_dict(),
        )

        self.maxDiff = None
        self.assertEqual(res.status_code, 200)
        self.assertEqual(
            {
                "stage_run_cards": [
                    {
                        "content": [],
                        "created_at": to_utc_iso_string(stage_run.created_at),
                        "updated_at": to_utc_iso_string(stage_run.updated_at),
                        "id": stage_run.id,
                        "status": "waiting",
                        "stage": hook.id,
                    }
                ],
                "not_found_stages": [],
                "total_count": 1,
            },
            res.json,
        )
