import unittest

from abstra_internals.repositories.stage_run import LocalStageRunRepository


class TestLocalStepsRepository(unittest.TestCase):
    def setUp(self) -> None:
        LocalStageRunRepository.clear()

    def test_starts_empy(self):
        rep = LocalStageRunRepository()
        stage_runs = rep.find({})
        self.assertEqual(len(stage_runs), 0)

    def test_create(self):
        rep = LocalStageRunRepository()
        stage_run = rep.create_initial("stage1")
        stage_runs = rep.find({})
        self.assertEqual(len(stage_runs), 1)

    def test_leaves_simple(self):
        rep = LocalStageRunRepository()
        stage_run = rep.create_initial("stage1")
        stage_runs = rep.find_leaves({})
        self.assertEqual(len(stage_runs), 1)

    def test_leaves(self):
        repository = LocalStageRunRepository()

        wfs1_stage1 = repository.create_initial("stage1")
        wfs2_stage1 = repository.create_initial("stage1")
        repository.create_next(wfs1_stage1, [{"stage": "stage2"}])
        wfs1_stage2 = repository.find({"parent_id": wfs1_stage1.id})
        self.assertEqual(len(wfs1_stage2), 1)
        repository.create_next(wfs1_stage2[0], [{"stage": "stage3"}])
        repository.create_next(wfs1_stage2[0], [{"stage": "stage3"}])
        all_stage_runs = repository.find({})
        self.assertEqual(len(all_stage_runs), 5)
        leaves = repository.find_leaves({})
        self.assertEqual(len(leaves), 3)
        leaves_stage1 = repository.find_leaves({"stage": "stage1"})
        self.assertEqual(len(leaves_stage1), 1)
        leaves_stage2 = repository.find_leaves({"stage": "stage2"})
        self.assertEqual(len(leaves_stage2), 0)
        leaves_stage3 = repository.find_leaves({"stage": "stage3"})
        self.assertEqual(len(leaves_stage3), 2)
