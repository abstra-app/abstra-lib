import unittest
from .fixtures import init_dir, clear_dir
from abstra_internals.server.controller import MainController
from abstra_internals.repositories.project.project import Project, HookStage
from abstra_internals.server import get_local_app
from abstra_internals.repositories.project.project import ProjectRepository


class TestHookExecution(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        controller = MainController()
        project = Project.create()
        file = "initial_hook.py"
        self.root.joinpath(file).write_text("print('hello world')")
        hook = HookStage(
            file=file,
            path="initial_hook",
            title="Hook 1",
            workflow_transitions=[],
        )
        project.hooks.append(hook)
        ProjectRepository.save(project)
        self.client = get_local_app(controller).test_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_initial_case(self):
        path = "initial_hook"
        response = self.client.post("/_hooks/initial_hook")
        self.assertEqual(response.status_code, 200)
