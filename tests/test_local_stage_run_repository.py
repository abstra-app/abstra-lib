from unittest import TestCase

from abstra_internals.repositories.project.project import Project
from abstra_internals.repositories.stage_run import (
    GetStageRunByQueryFilter,
    LocalStageRunRepository,
    Pagination,
)
from tests.fixtures import clear_dir, init_dir


class TestLocalStageRunRepository(TestCase):
    def setUp(self) -> None:
        self.repository = LocalStageRunRepository()
        self.project = Project.create()
        self.root = init_dir()

    def tearDown(self):
        clear_dir(self.root)

    def assert_stage_run_list_equals(self, actual, expected):
        self.assertEqual(len(actual), len(expected))
        for a, e in zip(actual, expected):
            self.assertEqual(a.to_dto(), e.to_dto())

    def test_starts_empty(self):
        stage_runs = self.repository.find(GetStageRunByQueryFilter.from_dict({}))
        self.assertEqual(len(stage_runs), 0)

    def test_create(self):
        self.repository.create_initial("stage1")
        stage_runs = self.repository.find(GetStageRunByQueryFilter.from_dict({}))
        self.assertEqual(len(stage_runs), 1)

    def test_new_initial(self):
        s = self.repository.create_initial("foo")
        self.assertEqual(s.data, {})
        self.assertEqual(s.status, "waiting")
        self.assertEqual(s.stage, "foo")

    def test_new_child(self):
        parent = self.repository.create_initial("parent", {"a": 1, "b": 2})
        child = self.repository.create_next(
            parent, [dict(stage="foo", data=dict(b=3, c=4))]
        )[0]
        self.assertEqual(child.data, {"a": 1, "b": 3, "c": 4})

    def test_find_ancestors_when_child(self):
        parent = self.repository.create_initial("parent", {"a": 1, "b": 2})
        child = self.repository.create_next(
            parent, [dict(stage="foo", data=dict(b=3, c=4))]
        )[0]

        self.assert_stage_run_list_equals(
            self.repository.find_ancestors(child.id), [parent, child]
        )

    def test_find_ancestors_when_initial(self):
        initial = self.repository.create_initial("parent", {"a": 1, "b": 2})
        self.assert_stage_run_list_equals(
            self.repository.find_ancestors(initial.id), [initial]
        )

    def test_find_ancestors_when_forked(self):
        parent = self.repository.create_initial("parent", {"a": 1, "b": 2})
        child1, child2 = self.repository.create_next(
            parent,
            [
                dict(stage="foo", data=dict(b=3, c=4)),
                dict(stage="foo", data=dict(b=5, c=6)),
            ],
        )
        self.assert_stage_run_list_equals(
            self.repository.find_ancestors(child1.id), [parent, child1]
        )
        self.assert_stage_run_list_equals(
            self.repository.find_ancestors(child2.id), [parent, child2]
        )

    def test_find_ancestors_when_not_found(self):
        with self.assertRaises(Exception):
            self.repository.find_ancestors("not_found")

    def test_leaves_simple(self):
        self.repository.create_initial("stage1")
        pagination = Pagination(limit=10, offset=0)
        stage_runs = self.repository.find_leaves(
            GetStageRunByQueryFilter.from_dict({}), pagination
        )
        self.assertEqual(len(stage_runs.stage_runs), 1)

    def test_leaves(self):
        repository = self.repository

        pagination = Pagination(limit=10, offset=0)

        wfs1_stage1 = repository.create_initial("stage1")
        repository.create_initial("stage1")
        repository.create_next(wfs1_stage1, [{"stage": "stage2"}])
        wfs1_stage2 = repository.find(
            GetStageRunByQueryFilter.from_dict({"parent_id": wfs1_stage1.id})
        )
        self.assertEqual(len(wfs1_stage2), 1)
        repository.create_next(wfs1_stage2[0], [{"stage": "stage3"}])
        repository.create_next(wfs1_stage2[0], [{"stage": "stage3"}])
        all_stage_runs = repository.find(GetStageRunByQueryFilter.from_dict({}))
        self.assertEqual(len(all_stage_runs), 5)
        leaves = repository.find_leaves(
            GetStageRunByQueryFilter.from_dict({}), pagination=pagination
        )
        self.assertEqual(len(leaves.stage_runs), 3)
        leaves_stage1 = repository.find_leaves(
            GetStageRunByQueryFilter.from_dict({"stage": "stage1"}),
            pagination=pagination,
        )
        self.assertEqual(len(leaves_stage1.stage_runs), 1)
        leaves_stage2 = repository.find_leaves(
            GetStageRunByQueryFilter.from_dict({"stage": "stage2"}),
            pagination=pagination,
        )
        self.assertEqual(len(leaves_stage2.stage_runs), 0)
        leaves_stage3 = repository.find_leaves(
            GetStageRunByQueryFilter.from_dict({"stage": "stage3"}),
            pagination=pagination,
        )
        self.assertEqual(len(leaves_stage3.stage_runs), 2)

    def test_leaves_in_reverse_order(self):
        repository = self.repository

        pagination = Pagination(limit=10, offset=0)

        wfs1_stage1 = repository.create_initial("stage1")
        repository.create_initial("stage1")
        wfs1_stage2 = repository.create_next(wfs1_stage1, [{"stage": "stage2"}])
        repository.create_next(wfs1_stage2[0], [{"stage": "stage3"}])
        leaves = repository.find_leaves(
            GetStageRunByQueryFilter.from_dict({}), pagination=pagination
        )
        self.assertEqual(leaves.stage_runs[0].stage, "stage3")
        self.assertEqual(leaves.stage_runs[1].stage, "stage1")

    def test_fork(self):
        parent = self.repository.create_initial("parent", {"a": 1, "b": 2})
        child = self.repository.create_next(
            parent, [dict(stage="foo", data=dict(b=3, c=4))]
        )[0]
        clone = self.repository.fork(child, False)
        self.assertNotEqual(clone.id, child.id)
        self.assertEqual(clone.status, "waiting")
        self.assertEqual(clone.data, parent.data)
        self.assertEqual(clone.stage, child.stage)
        self.assertEqual(clone.parent_id, child.parent_id)
        self.assertEqual(clone.execution_id, None)

    def test_fork_with_custom_thread_data(self):
        parent = self.repository.create_initial("parent", {"a": 1, "b": 2})
        child = self.repository.create_next(
            parent, [dict(stage="foo", data=dict(b=3, c=4))]
        )[0]
        clone = self.repository.fork(child, False, '{"custom": "data"}')
        self.assertNotEqual(clone.id, child.id)
        self.assertEqual(clone.status, "waiting")
        self.assertEqual(clone.data, {"custom": "data"})
        self.assertEqual(clone.stage, child.stage)
        self.assertEqual(clone.parent_id, child.parent_id)
        self.assertEqual(clone.execution_id, None)

    def test_retry_if_failed_is_root(self):
        stage = self.repository.create_initial("stage1")
        stage.data = {"a": 1, "b": 2}
        has_changed = self.repository.change_status(stage.id, "running")
        self.assertTrue(has_changed)

        has_changed = self.repository.change_status(stage.id, "failed")
        self.assertTrue(has_changed)

        retried = self.repository.retry(stage.id)

        self.assertEqual(retried.status, "waiting")
        self.assertEqual(retried.data, {})
        self.assertEqual(retried.stage, "stage1")

    def test_retry_if_failed_is_not_root(self):
        parent = self.repository.create_initial("parent", {"a": 1, "b": 2})
        child = self.repository.create_next(
            parent, [dict(stage="foo", data=dict(b=3, c=4))]
        )[0]
        has_changed = self.repository.change_status(child.id, "running")
        self.assertTrue(has_changed)

        has_changed = self.repository.change_status(child.id, "failed")
        self.assertTrue(has_changed)

        retried = self.repository.retry(child.id)

        self.assertEqual(retried.status, "waiting")
        self.assertEqual(retried.data, {"a": 1, "b": 2})
        self.assertEqual(retried.stage, "foo")

    def test_retry_if_not_failed(self):
        stage = self.repository.create_initial("stage1")

        with self.assertRaises(Exception):
            self.repository.retry(stage.id)

    def test_retry_with_retry_sequence(self):
        parent = self.repository.create_initial("parent", {"a": 1, "b": 2})
        child = self.repository.create_next(
            parent, [dict(stage="foo", data=dict(b=3, c=4))]
        )[0]

        has_changed = self.repository.change_status(child.id, "running")
        self.assertTrue(has_changed)

        has_changed = self.repository.change_status(child.id, "failed")
        self.assertTrue(has_changed)
        retry1 = self.repository.retry(child.id)

        has_changed = self.repository.change_status(retry1.id, "running")
        self.assertTrue(has_changed)

        has_changed = self.repository.change_status(retry1.id, "failed")
        self.assertTrue(has_changed)
        retry2 = self.repository.retry(retry1.id)

        has_changed = self.repository.change_status(retry2.id, "running")
        self.assertTrue(has_changed)

        has_changed = self.repository.change_status(retry2.id, "failed")
        self.assertTrue(has_changed)
        retry3 = self.repository.retry(retry2.id)

        self.assertEqual(retry3.status, "waiting")
        self.assertEqual(retry3.data, {"a": 1, "b": 2})
        self.assertEqual(retry3.stage, "foo")

    def test_retry_with_other_failed_stages(self):
        parent = self.repository.create_initial("parent", {"a": 1, "b": 2})
        child1 = self.repository.create_next(
            parent, [dict(stage="foo", data=dict(b=3, c=4))]
        )[0]

        has_changed = self.repository.change_status(child1.id, "running")
        self.assertTrue(has_changed)

        has_changed = self.repository.change_status(child1.id, "failed")
        self.assertTrue(has_changed)
        child2 = self.repository.create_next(
            child1, [dict(stage="bar", data=dict(d=5, e=6))]
        )[0]

        has_changed = self.repository.change_status(child2.id, "running")
        self.assertTrue(has_changed)

        has_changed = self.repository.change_status(child2.id, "failed")
        self.assertTrue(has_changed)
        retry1 = self.repository.retry(child2.id)

        has_changed = self.repository.change_status(retry1.id, "running")
        self.assertTrue(has_changed)

        has_changed = self.repository.change_status(retry1.id, "failed")
        self.assertTrue(has_changed)
        retry2 = self.repository.retry(retry1.id)

        self.assertEqual(retry2.status, "waiting")
        self.assertEqual(retry2.data, {"a": 1, "b": 3, "c": 4})
        self.assertEqual(retry2.stage, "bar")

    def test_ensure_not_abandoned_if_not_abandoned(self):
        parent = self.repository.create_initial("parent")

        stage_run_id = self.repository.ensure_not_abandoned(parent.id)

        self.assertEqual(stage_run_id, parent.id)

    def test_ensure_not_abandoned_if_abandoned(self):
        parent = self.repository.create_initial("parent")
        child = self.repository.create_next(parent, [dict(stage="foo")])[0]

        has_changed = self.repository.change_status(child.id, "running")
        self.assertTrue(has_changed)

        has_changed = self.repository.change_status(child.id, "abandoned")
        self.assertTrue(has_changed)

        stage_run_id = self.repository.ensure_not_abandoned(child.id)

        self.assertNotEqual(stage_run_id, parent.id)

    def test_ensure_not_abandoned_if_multiple_abandoned(self):
        parent = self.repository.create_initial("parent")
        child1 = self.repository.create_next(parent, [dict(stage="foo")])[0]

        has_changed = self.repository.change_status(child1.id, "running")
        self.assertTrue(has_changed)

        has_changed = self.repository.change_status(child1.id, "abandoned")
        self.assertTrue(has_changed)

        child2 = self.repository.create_next(parent, [dict(stage="bar")])[0]

        has_changed = self.repository.change_status(child2.id, "running")
        self.assertTrue(has_changed)

        has_changed = self.repository.change_status(child2.id, "abandoned")
        self.assertTrue(has_changed)

        stage_run_id = self.repository.ensure_not_abandoned(child2.id)

        self.assertNotEqual(stage_run_id, parent.id)
