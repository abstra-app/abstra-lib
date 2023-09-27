import unittest
from .fixtures import init_dir, clear_dir
from abstra_internals.server.api import API
from abstra_internals.repositories.json.classes import AbstraJSON, HookJSON
from abstra_internals.server.apps import create_app


class TestHookExecution(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        api = API()
        abstra_json = AbstraJSON.make_empty()
        file = "initial_hook.py"
        self.root.joinpath(file).write_text("print('hello world')")
        hook = HookJSON(
            file=file,
            path="initial_hook",
            title="Hook 1",
            is_initial=True,
            workflow_transitions=[],
        )
        abstra_json.hooks.append(hook)
        api.persist(abstra_json)
        self.client = create_app(api).test_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_initial_case(self):
        path = "initial_hook"
        response = self.client.post("/_hooks/initial_hook")
        self.assertEqual(response.status_code, 200)
