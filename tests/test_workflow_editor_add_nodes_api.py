import unittest
from abstra_internals.server.api import API, UnknownNodeTypeError
from .fixtures import init_dir, clear_dir
from abstra_internals.repositories.json.classes import AbstraJSONRepository


class TestWorkflowEditorAddNodesApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()
        self.api = API()

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_add_nodes(self):
        old_json = AbstraJSONRepository.load()
        self.api.workflow_add_nodes([])
        new_json = AbstraJSONRepository.load()
        self.assertEqual(old_json, new_json)

    def test_accept_simple_adding(self):
        self.api.workflow_add_nodes(
            [{"id": "form1", "type": "forms", "position": [0, 0], "title": "Form 1"}]
        )
        json = AbstraJSONRepository.load()
        self.assertEqual(len(json.forms), 1)
        self.assertEqual(json.forms[0].path, "form1")
        self.assertEqual(json.forms[0].workflow_position, (0, 0))
        self.assertTrue(self.path.joinpath(json.forms[0].file).exists())

    def test_reject_invalid_node_type(self):
        with self.assertRaises(UnknownNodeTypeError):
            self.api.workflow_add_nodes(
                [
                    {
                        "id": "form1",
                        "type": "invalid",
                        "position": [0, 0],
                        "title": "Form 1",
                    }
                ]
            )
