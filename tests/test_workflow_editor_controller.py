from unittest import TestCase

from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.server.controller.main import MainController
from abstra_internals.server.controller.workflows import get_workflow, update_workflow
from tests.fixtures import clear_dir, init_dir


class TestWorkflowEditorController(TestCase):
    def setUp(self) -> None:
        self.maxDiff = None
        self.root = init_dir()
        self.controller = MainController()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_get_empty(self):
        workflow = get_workflow()
        self.assertEqual(workflow, {"stages": [], "transitions": []})

    def test_get_with_stages(self):
        initial_state = {
            "stages": [
                {
                    "type": "forms",
                    "id": "foo",
                    "title": "Foo",
                    "props": {
                        "filename": "foo.py",
                        "path": "foo",
                        "variableName": None,
                        "itemName": None,
                    },
                    "position": {"x": 0, "y": 0},
                }
            ],
            "transitions": [],
        }
        update_workflow(initial_state)
        workflow = get_workflow()
        self.assertEqual(workflow, initial_state)

    def test_get_with_transitions(self):
        initial_state = {
            "stages": [
                {
                    "type": "forms",
                    "id": "foo",
                    "title": "Foo",
                    "props": {
                        "filename": "foo.py",
                        "path": "foo",
                        "variableName": None,
                        "itemName": None,
                    },
                    "position": {"x": 0, "y": 0},
                },
                {
                    "type": "hooks",
                    "id": "bar",
                    "props": {
                        "filename": "bar.py",
                        "path": "bar",
                        "variableName": None,
                        "itemName": None,
                    },
                    "title": "Bar",
                    "position": {"x": 0, "y": 0},
                },
            ],
            "transitions": [
                {
                    "id": "foo",
                    "sourceStageId": "foo",
                    "targetStageId": "bar",
                    "type": "forms:finished",
                    "props": {"conditionValue": None},
                }
            ],
        }

        updated_workflow = update_workflow(initial_state)

        self.assertEqual(updated_workflow, initial_state)

        project = ProjectRepository.load()

        self.assertEqual(len(project.forms[0].workflow_transitions), 1)

        gotten_workflow = get_workflow()
        self.assertEqual(gotten_workflow, initial_state)

        initial_state = {
            "stages": [
                {
                    "type": "forms",
                    "id": "foo",
                    "props": {
                        "filename": "foo.py",
                        "path": "foo",
                        "variableName": None,
                        "itemName": None,
                    },
                    "title": "Foo",
                    "position": {"x": 0, "y": 0},
                },
                {
                    "type": "hooks",
                    "id": "bar",
                    "props": {
                        "filename": "bar.py",
                        "path": "bar",
                        "variableName": None,
                        "itemName": None,
                    },
                    "title": "Bar",
                    "position": {"x": 0, "y": 0},
                },
            ],
            "transitions": [
                {
                    "id": "foo",
                    "sourceStageId": "foo",
                    "targetStageId": "bar",
                    "type": "foo",
                    "props": {"conditionValue": None},
                }
            ],
        }

        updated_workflow = update_workflow(initial_state)

        self.assertEqual(updated_workflow, initial_state)

    def test_update_add_stages(self):
        update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "variableName": None,
                            "path": "foo",
                            "filename": "foo.py",
                            "itemName": None,
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["stages"]), 1)

    def test_update_remove_stages(self):
        update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "variableName": None,
                            "path": "foo",
                            "filename": "foo.py",
                            "itemName": None,
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["stages"]), 1)
        update_workflow(
            {
                "stages": [],
                "transitions": [],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["stages"]), 0)

    def test_update_change_stage_position(self):
        update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "variableName": None,
                            "path": "foo",
                            "filename": "foo.py",
                            "itemName": None,
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["stages"]), 1)
        self.assertEqual(workflow["stages"][0]["position"], {"x": 0, "y": 0})
        update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 1, "y": 1},
                        "props": {
                            "filename": "foo.py",
                            "path": "foo",
                            "variableName": None,
                            "itemName": None,
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["stages"]), 1)
        self.assertEqual(workflow["stages"][0]["position"], {"x": 1, "y": 1})

    def test_update_change_stage_title(self):
        update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "variableName": None,
                            "path": "foo",
                            "filename": "foo.py",
                            "itemName": None,
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["stages"]), 1)
        self.assertEqual(workflow["stages"][0]["title"], "Foo")
        update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Bar",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "filename": "bar.py",
                            "path": "bar",
                            "variableName": None,
                            "itemName": None,
                        },
                    }
                ],
                "transitions": [],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["stages"]), 1)
        self.assertEqual(workflow["stages"][0]["title"], "Bar")

    def test_update_add_transitions(self):
        update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "variableName": None,
                            "path": "foo",
                            "filename": "foo.py",
                            "itemName": None,
                        },
                    },
                    {
                        "type": "hooks",
                        "id": "bar",
                        "title": "Bar",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "filename": "bar.py",
                            "path": "bar",
                            "variableName": None,
                            "itemName": None,
                        },
                    },
                ],
                "transitions": [],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["transitions"]), 0)
        update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "variableName": None,
                            "path": "foo",
                            "filename": "foo.py",
                            "itemName": None,
                        },
                    },
                    {
                        "type": "hooks",
                        "id": "bar",
                        "title": "Bar",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "filename": "bar.py",
                            "path": "bar",
                            "variableName": None,
                            "itemName": None,
                        },
                    },
                ],
                "transitions": [
                    {
                        "id": "foo",
                        "sourceStageId": "foo",
                        "targetStageId": "bar",
                        "type": "foo",
                        "conditionValue": None,
                    }
                ],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["transitions"]), 1)

    def test_update_remove_transitions(self):
        update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "variableName": None,
                            "path": "foo",
                            "filename": "foo.py",
                            "itemName": None,
                        },
                    },
                    {
                        "type": "hooks",
                        "id": "bar",
                        "title": "Bar",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "filename": "bar.py",
                            "path": "bar",
                            "variableName": None,
                            "itemName": None,
                        },
                    },
                ],
                "transitions": [
                    {
                        "id": "foo",
                        "sourceStageId": "foo",
                        "targetStageId": "bar",
                        "type": "foo",
                        "conditionValue": None,
                    }
                ],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["transitions"]), 1)
        update_workflow(
            {
                "stages": [],
                "transitions": [],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["transitions"]), 0)

    def test_update_change_transition_type(self):
        update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "variableName": None,
                            "path": "foo",
                            "filename": "foo.py",
                            "itemName": None,
                        },
                    },
                    {
                        "type": "hooks",
                        "id": "bar",
                        "title": "Bar",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "filename": "bar.py",
                            "path": "bar",
                            "variableName": None,
                            "itemName": None,
                        },
                    },
                ],
                "transitions": [
                    {
                        "id": "foo",
                        "sourceStageId": "foo",
                        "targetStageId": "bar",
                        "type": "foo",
                        "conditionValue": None,
                    }
                ],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["transitions"]), 1)
        self.assertEqual(workflow["transitions"][0]["type"], "foo")
        update_workflow(
            {
                "stages": [
                    {
                        "type": "forms",
                        "id": "foo",
                        "title": "Foo",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "variableName": None,
                            "path": "foo",
                            "filename": "foo.py",
                            "itemName": None,
                        },
                    },
                    {
                        "type": "hooks",
                        "id": "bar",
                        "title": "Bar",
                        "position": {"x": 0, "y": 0},
                        "props": {
                            "filename": "bar.py",
                            "path": "bar",
                            "variableName": None,
                            "itemName": None,
                        },
                    },
                ],
                "transitions": [
                    {
                        "id": "foo",
                        "sourceStageId": "foo",
                        "targetStageId": "bar",
                        "type": "bar",
                    }
                ],
            }
        )
        workflow = get_workflow()
        self.assertEqual(len(workflow["transitions"]), 1)
        self.assertEqual(workflow["transitions"][0]["type"], "bar")
