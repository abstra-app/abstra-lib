from typing import Any, Mapping, List
import unittest
from .fixtures import init_dir, clear_dir
from abstra_internals.server.controller import MainController
from abstra_internals.repositories.project.project import (
    Project,
    HookStage,
    WorkflowTransition,
    ScriptStage,
    ProjectRepository,
)
from abstra_internals.server import get_local_app
from abstra_internals.repositories import StageRunRepository
from abstra_internals.repositories.stage_run import LocalStageRunRepository
from abstra_internals.execution.execution import Execution
import time

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

code_multiple_scripts = """
from abstra.workflows import get_stage, next_stage

stage = get_stage()

next_stage([{ "stage": "script_b" }, { "stage": "script_c" }])
"""

hello_world_code = """
def a(b):
  return b

a(2)
"""


class TestWorkflowNext(unittest.TestCase):
    def assertDictIn(
        self, dict_subset: Mapping[Any, Any], target_dict: Mapping[Any, Any]
    ) -> None:
        return self.assertEqual(target_dict, {**target_dict, **dict_subset})

    def build_hook(
        self, file, path: str, title: str, transitions: List[WorkflowTransition]
    ):
        return HookStage(
            file=file,
            enabled=True,
            path=path,
            title=title,
            workflow_position=(0, 0),
            workflow_transitions=transitions,
        )

    def build_script(self, file, path, title, transitions):
        return ScriptStage(
            file=file,
            path=path,
            title=title,
            workflow_position=(0, 0),
            workflow_transitions=transitions,
        )

    def build_transition(self, id, target_path, target_type, label):
        return WorkflowTransition(
            id=id,
            target_path=target_path,
            target_type=target_type,
            label=label,
        )

    def setUp(self) -> None:
        self.root = init_dir()
        controller = MainController()
        self.client = get_local_app(controller).test_client()
        LocalStageRunRepository.clear()

    def tearDown(self) -> None:
        clear_dir(self.root)
        LocalStageRunRepository.clear()

    def wait_pending_stages(self):
        while True:
            waiting = StageRunRepository.find({"status": "waiting"})
            time.sleep(0.1)
            if len(waiting) == 0:
                break

    def test_file(self):
        project = Project.create()

        file = "test_file.py"

        self.root.joinpath(file).write_text(code_implicit)

        transition = self.build_transition("foo", "hook_b", "hooks", "success")
        hook_a = self.build_hook(file, "hook_a", "Hook A", [transition])
        hook_b = self.build_hook("foo.py", "hook_b", "Hook B", [])

        project.hooks = [hook_a, hook_b]

        self.controller = MainController()
        ProjectRepository.save(project=project)

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
        project = Project.create()

        file = "test_file.py"

        self.root.joinpath(file).write_text(code_implicit)

        transition = self.build_transition("foo", "hook_b", "hooks", "success")
        hook_a = self.build_hook(file, "hook_a", "Hook A", [transition])
        hook_b = self.build_hook("foo.py", "hook_b", "Hook B", [])

        project.hooks = [hook_a, hook_b]

        self.controller = MainController()
        ProjectRepository.save(project=project)

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
        project = Project.create()

        file = "test_file.py"

        self.root.joinpath(file).write_text(code_multiple)

        transition_b = self.build_transition("foo", "hook_b", "hooks", "success")
        transition_c = self.build_transition("bar", "hook_c", "hooks", "success")
        hook_a = self.build_hook(file, "hook_a", "Hook A", [transition_b, transition_c])
        hook_b = self.build_hook("hook_b.py", "hook_b", "Hook B", [])
        hook_c = self.build_hook("hook_c.py", "hook_c", "Hook C", [])

        project.hooks = [hook_a, hook_b, hook_c]

        self.controller = MainController()
        ProjectRepository.save(project=project)

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

    @unittest.skip(
        "Could't find a way to test threads as they are currently implemented"
    )
    def test_scripts_multiple_transition(self):
        project = Project.create()

        file = "test_file.py"
        hello_world_file = "hello_world.py"

        self.root.joinpath(file).write_text(code_multiple_scripts)
        self.root.joinpath(hello_world_file).write_text(hello_world_code)

        transition_a_b = self.build_transition("foo", "script_b", "scripts", "success")
        transition_a_c = self.build_transition("foo", "script_c", "scripts", "fail")
        transition_c_d = self.build_transition("foo", "script_d", "scripts", "fail")

        hook_a = self.build_hook(
            file, "hook_a", "Hook A", [transition_a_b, transition_a_c]
        )

        script_b = self.build_script(hello_world_file, "script_b", "script B", [])
        script_c = self.build_script(
            hello_world_file, "script_c", "script C", [transition_c_d]
        )
        script_d = self.build_script(hello_world_file, "script_d", "script D", [])

        project.hooks = [hook_a]
        project.scripts = [script_b, script_c, script_d]

        self.controller = MainController()
        ProjectRepository.save(project=project)

        self.client.post("/_hooks/hook_a")
        stage_runs = StageRunRepository.find({})

        self.wait_pending_stages()

        self.assertDictIn(
            {"stage": "hook_a", "assignee": None, "data": {}, "status": "finished"},
            stage_runs[0].to_dto(),
        )
        self.assertDictIn(
            {"stage": "script_b", "assignee": None, "data": {}, "status": "finished"},
            stage_runs[1].to_dto(),
        )
        self.assertDictIn(
            {"stage": "script_c", "assignee": None, "data": {}, "status": "finished"},
            stage_runs[2].to_dto(),
        )
        self.assertDictIn(
            {"stage": "script_d", "assignee": None, "data": {}, "status": "finished"},
            stage_runs[3].to_dto(),
        )

        LocalStageRunRepository.clear()
