from typing import Any, Mapping
import unittest
from .fixtures import init_dir, clear_dir
from abstra_internals.server.api import API
from abstra_internals.server.api.classes import (
    AbstraJSON,
    HookJSON,
    WorkflowTransitionJSON,
)
from abstra_internals.server.apps import create_app
from abstra_internals.repositories import StageRunRepository
from abstra_internals.repositories.stage_run import LocalStageRunRepository

code_implicit = """
from abstra.workflows import get_stage

stage = get_stage()
"""

code_explicit = """
from abstra.workflows import get_stage, next_stage

stage = get_stage()

next_stage("foo")
"""

code_multiple = """
from abstra.workflows import get_stage, next_stage

stage = get_stage()

next_stage([{ "stage": "hook_b" }, { "stage": "hook_c" }])
"""


class TestWorkflowNext(unittest.TestCase):
    def assertDictIn(
        self, dict_subset: Mapping[Any, Any], target_dict: Mapping[Any, Any]
    ) -> None:
        return self.assertEqual(target_dict, {**target_dict, **dict_subset})

    def build_hook(self, file, path, title, transitions):
        return HookJSON(
            file=file,
            enabled=True,
            is_initial=True,
            path=path,
            title=title,
            workflow_position=(0, 0),
            workflow_transitions=transitions,
        )

    def build_transition(self, id, target_path, target_type, label):
        return WorkflowTransitionJSON(
            id=id,
            target_path=target_path,
            target_type=target_type,
            label=label,
        )

    def setUp(self) -> None:
        self.root = init_dir()
        api = API()
        self.client = create_app(api).test_client()
        LocalStageRunRepository.clear()

    def tearDown(self) -> None:
        clear_dir(self.root)
        LocalStageRunRepository.clear()

    def test_implicit_single_transition(self):
        abstra_json = AbstraJSON.make_empty()

        file = "test_implicit_single_transition.py"

        self.root.joinpath(file).write_text(code_implicit)

        transition = self.build_transition("foo", "hook_b", "hooks", "success")
        hook_a = self.build_hook(file, "hook_a", "Hook A", [transition])
        hook_b = self.build_hook("foo.py", "hook_b", "Hook B", [])

        abstra_json.hooks.extend([hook_a, hook_b])

        self.api = API()
        self.api.persist(abstra_json=abstra_json)

        response = self.client.post("/_hooks/hook_a")
        stage_runs = StageRunRepository.find({})

        self.assertEqual(response.status_code, 200)

        self.assertDictIn(
            {"stage": "hook_a", "assignee": None, "data": {}}, stage_runs[0].to_dto()
        )

        self.assertDictIn(
            {"stage": "hook_b", "assignee": None, "data": {}}, stage_runs[1].to_dto()
        )

        LocalStageRunRepository.clear()

    def test_explicit_single_transition(self):
        abstra_json = AbstraJSON.make_empty()

        file = "test_implicit_single_transition.py"

        self.root.joinpath(file).write_text(code_implicit)

        transition = self.build_transition("foo", "hook_b", "hooks", "success")
        hook_a = self.build_hook(file, "hook_a", "Hook A", [transition])
        hook_b = self.build_hook("foo.py", "hook_b", "Hook B", [])

        abstra_json.hooks.extend([hook_a, hook_b])

        self.api = API()
        self.api.persist(abstra_json=abstra_json)

        response = self.client.post(f"/_hooks/hook_a")
        stage_runs = StageRunRepository.find({})

        self.assertEqual(response.status_code, 200)

        self.assertDictIn(
            {"stage": "hook_a", "assignee": None, "data": {}}, stage_runs[0].to_dto()
        )
        self.assertDictIn(
            {"stage": "hook_b", "assignee": None, "data": {}}, stage_runs[1].to_dto()
        )
        LocalStageRunRepository.clear()

    def test_multiple_transition(self):
        abstra_json = AbstraJSON.make_empty()

        file = "test_implicit_single_transition.py"

        self.root.joinpath(file).write_text(code_multiple)

        transition_b = self.build_transition("foo", "hook_b", "hooks", "success")
        transition_c = self.build_transition("bar", "hook_c", "hooks", "success")
        hook_a = self.build_hook(file, "hook_a", "Hook A", [transition_b, transition_c])
        hook_b = self.build_hook("hook_b.py", "hook_b", "Hook B", [])
        hook_c = self.build_hook("hook_c.py", "hook_c", "Hook C", [])

        abstra_json.hooks.extend([hook_a, hook_b, hook_c])

        self.api = API()
        self.api.persist(abstra_json=abstra_json)

        self.client.post("/_hooks/hook_a")
        stage_runs = StageRunRepository.find({})

        self.assertDictIn(
            {"stage": "hook_a", "assignee": None, "data": {}, "status": "finished"},
            stage_runs[0].to_dto(),
        )
        self.assertDictIn(
            {"stage": "hook_b", "assignee": None, "data": {}, "status": "waiting"},
            stage_runs[1].to_dto(),
        )
        self.assertDictIn(
            {"stage": "hook_c", "assignee": None, "data": {}, "status": "waiting"},
            stage_runs[2].to_dto(),
        )

        LocalStageRunRepository.clear()
