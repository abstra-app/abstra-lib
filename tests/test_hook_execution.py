import unittest

from .fixtures import init_dir, clear_dir, get_local_client

from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.repositories.project.project import Project, HookStage


class TestHookExecution(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
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

        self.client = get_local_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_initial_case(self):
        response = self.client.post("/_hooks/initial_hook")
        self.assertEqual(response.status_code, 200)
