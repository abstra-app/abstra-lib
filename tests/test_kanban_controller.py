from unittest import TestCase

from .fixtures import init_dir, clear_dir

from abstra_internals.execution.execution import RequestData
from abstra_internals.server.controller.main import MainController
from abstra_internals.execution.hook_execution import HookExecution
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.repositories.stage_run import LocalStageRunRepository
from abstra_internals.server.controller.kanban import KanbanController, KanbanData


class TestKanbanController(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)
        LocalStageRunRepository.clear()

    def test_initial_value(self):
        controller = KanbanController(LocalStageRunRepository, ProjectRepository)
        data = controller.get_data([])
        self.assertEqual(data, KanbanData([], []))

    def test_with_single_stage_run_selected(self):
        main_controller = MainController()
        hook = main_controller.create_hook()
        execution = HookExecution(
            hook, main_controller.is_initial(hook.id), RequestData({}, "", "", {})
        )
        execution.run_sync()
        main_controller.executor.shutdown(wait=True)
        kanban_controller = KanbanController(LocalStageRunRepository, ProjectRepository)

        data = kanban_controller.get_data(selected_stages_ids=[])
        self.assertEqual(len(data.columns), 0)
        self.assertEqual(len(data.next_stage_options), 1)
        self.assertEqual(data.next_stage_options[0].id, hook.id)

        data = kanban_controller.get_data(selected_stages_ids=[hook.id])
        self.assertEqual(len(data.columns), 1)
        self.assertEqual(data.columns[0].selected_stage.id, hook.id)
        self.assertEqual(len(data.columns[0].stage_run_cards), 1)
        self.assertEqual(data.columns[0].stage_run_cards[0].content, [])
        self.assertEqual(len(data.columns[0].stages), 1)
        self.assertEqual(len(data.next_stage_options), 0)

    def test_transition_with_run(self):
        main_controller = MainController()
        hook = main_controller.create_hook()
        script = main_controller.create_script()
        main_controller.bulk_create_transitions(
            [
                {
                    "source": {"type": "hooks", "id": hook.id},
                    "target": {"type": "scripts", "id": script.id},
                    "label": "success",
                    "id": "foo",
                }
            ]
        )
        hook = main_controller.get_hook(hook.id)
        assert hook is not None
        execution = HookExecution(
            hook, main_controller.is_initial(hook.id), RequestData({}, "", "", {})
        )
        execution.run_sync()
        main_controller.run_waiting_scripts(execution.stage_run)
        main_controller.executor.shutdown(wait=True)
        kanban_controller = KanbanController(LocalStageRunRepository, ProjectRepository)

        data = kanban_controller.get_data(selected_stages_ids=[])
        self.assertEqual(len(data.columns), 0)
        self.assertEqual(len(data.next_stage_options), 1)
        self.assertEqual(data.next_stage_options[0].id, hook.id)

        data = kanban_controller.get_data(selected_stages_ids=[hook.id])
        self.assertEqual(len(data.columns), 1)
        self.assertEqual(data.columns[0].selected_stage.id, hook.id)
        self.assertEqual(len(data.columns[0].stage_run_cards), 0)
        self.assertEqual(len(data.columns[0].stages), 1)
        self.assertEqual(len(data.next_stage_options), 1)
        self.assertEqual(data.next_stage_options[0].id, script.id)

        data = kanban_controller.get_data(selected_stages_ids=[hook.id, script.id])
        self.assertEqual(len(data.columns), 2)
        self.assertEqual(data.columns[0].selected_stage.id, hook.id)
        self.assertEqual(len(data.columns[0].stage_run_cards), 0)
        self.assertEqual(len(data.columns[0].stages), 1)
        self.assertEqual(data.columns[1].selected_stage.id, script.id)
        self.assertEqual(len(data.columns[1].stage_run_cards), 1)
        self.assertEqual(len(data.columns[1].stages), 1)
        self.assertEqual(len(data.next_stage_options), 0)

    def test_transition_no_interference(self):
        main_controller = MainController()
        hook1 = main_controller.create_hook()
        script1 = main_controller.create_script()
        main_controller.bulk_create_transitions(
            [
                {
                    "source": {"type": "hooks", "id": hook1.id},
                    "target": {"type": "scripts", "id": script1.id},
                    "label": "success",
                    "id": "foo",
                }
            ]
        )
        hook1 = main_controller.get_hook(hook1.id)
        assert hook1 is not None

        hook2 = main_controller.create_hook()
        script2 = main_controller.create_script()
        main_controller.bulk_create_transitions(
            [
                {
                    "source": {"type": "hooks", "id": hook2.id},
                    "target": {"type": "scripts", "id": script2.id},
                    "label": "success",
                    "id": "foo",
                }
            ]
        )
        hook2 = main_controller.get_hook(hook2.id)
        assert hook2 is not None

        execution = HookExecution(
            hook1, main_controller.is_initial(hook1.id), RequestData({}, "", "", {})
        )
        execution.run_sync()
        main_controller.run_waiting_scripts(execution.stage_run)
        main_controller.executor.shutdown(wait=True)
        kanban_controller = KanbanController(LocalStageRunRepository, ProjectRepository)

        data = kanban_controller.get_data(selected_stages_ids=[])
        self.assertEqual(len(data.columns), 0)
        self.assertEqual(len(data.next_stage_options), 2)
        self.assertEqual(data.next_stage_options[0].id, hook1.id)

        data = kanban_controller.get_data(selected_stages_ids=[hook1.id])
        self.assertEqual(len(data.columns), 1)
        self.assertEqual(data.columns[0].selected_stage.id, hook1.id)
        self.assertEqual(len(data.columns[0].stage_run_cards), 0)
        self.assertEqual(len(data.columns[0].stages), 2)
        self.assertEqual(len(data.next_stage_options), 1)
        self.assertEqual(data.next_stage_options[0].id, script1.id)

        data = kanban_controller.get_data(selected_stages_ids=[hook1.id, script1.id])
        self.assertEqual(len(data.columns), 2)
        self.assertEqual(data.columns[0].selected_stage.id, hook1.id)
        self.assertEqual(len(data.columns[0].stage_run_cards), 0)
        self.assertEqual(len(data.columns[0].stages), 2)
        self.assertEqual(data.columns[1].selected_stage.id, script1.id)
        self.assertEqual(len(data.columns[1].stage_run_cards), 1)
        self.assertEqual(len(data.columns[1].stages), 1)
        self.assertEqual(len(data.next_stage_options), 0)
