from unittest import TestCase
from abstra_internals.repositories.stage_run import LocalStageRunRepository


class TestLocalStageRunRepository(TestCase):
    def test_new_initial(self):
        s = LocalStageRunRepository.create_initial("foo")
        self.assertEqual(s.data, {})
        self.assertEqual(s.status, "waiting")
        self.assertEqual(s.stage, "foo")

    def test_new_child(self):
        parent = LocalStageRunRepository.create_initial("parent", {"a": 1, "b": 2})
        child = LocalStageRunRepository.create_next(
            parent, [dict(stage="foo", data=dict(b=3, c=4))]
        )[0]
        self.assertEqual(child.data, {"a": 1, "b": 3, "c": 4})

    def test_find_ancestors_when_child(self):
        parent = LocalStageRunRepository.create_initial("parent", {"a": 1, "b": 2})
        child = LocalStageRunRepository.create_next(
            parent, [dict(stage="foo", data=dict(b=3, c=4))]
        )[0]
        self.assertEqual(
            LocalStageRunRepository.find_ancestors(child.id), [parent, child]
        )

    def test_find_ancestors_when_initial(self):
        initial = LocalStageRunRepository.create_initial("parent", {"a": 1, "b": 2})
        self.assertEqual(LocalStageRunRepository.find_ancestors(initial.id), [initial])

    def test_find_ancestors_when_forked(self):
        parent = LocalStageRunRepository.create_initial("parent", {"a": 1, "b": 2})
        child1, child2 = LocalStageRunRepository.create_next(
            parent,
            [
                dict(stage="foo", data=dict(b=3, c=4)),
                dict(stage="foo", data=dict(b=5, c=6)),
            ],
        )
        self.assertEqual(
            LocalStageRunRepository.find_ancestors(child1.id), [parent, child1]
        )
        self.assertEqual(
            LocalStageRunRepository.find_ancestors(child2.id), [parent, child2]
        )

    def test_find_ancestors_when_not_found(self):
        with self.assertRaises(Exception):
            LocalStageRunRepository.find_ancestors("not_found")
