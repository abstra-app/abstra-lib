import unittest
from typing import List

from abstra_internals.repositories.project.project import (
    FormStage,
    HookStage,
    ScriptStage,
    Stage,
    WorkflowTransition,
)
from abstra_internals.utils.geometry import Point2D, Rect, Vector2D
from abstra_internals.utils.physics import simulate_layout


class TestGraphPositions(unittest.TestCase):
    def test_geometry_point2d(self):
        """Test basic Point2D operations"""
        p1 = Point2D(0, 0)
        p2 = Point2D(10, 5)

        vector = p2.sub(p1)
        self.assertEqual(vector.dx, 10)
        self.assertEqual(vector.dy, 5)

    def test_geometry_vector2d(self):
        """Test Vector2D operations"""
        v1 = Vector2D(3, 4)
        self.assertEqual(v1.length(), 5.0)

        normalized = v1.norm()
        self.assertAlmostEqual(normalized.dx, 0.6, places=3)
        self.assertAlmostEqual(normalized.dy, 0.8, places=3)

    def test_geometry_rect(self):
        """Test Rect operations"""
        rect = Rect(Point2D(0, 0), 100, 50)
        # Verify that Rect is created successfully
        self.assertIsNotNone(rect)
        self.assertIsNotNone(rect.center)
        # Test contains method
        self.assertTrue(rect.contains(Point2D(25, 20)))
        self.assertFalse(rect.contains(Point2D(150, 150)))

    def test_physics_simulation(self):
        """Test physics simulation with stages"""
        stages: List[Stage] = [
            FormStage.create(
                title="Registration Form",
                file="form1.py",
                id="form1",
                workflow_position=(0, 0),
            ),
            ScriptStage.create(
                title="Process Data",
                file="script1.py",
                id="script1",
                workflow_position=(50, 50),
            ),
            HookStage.create(
                title="API Endpoint",
                file="hook1.py",
                id="hook1",
                workflow_position=(100, 0),
            ),
        ]

        stages[0].workflow_transitions = [
            WorkflowTransition.from_dict(
                {
                    "target_id": "script1",
                    "target_type": "script",
                    "type": "task",
                    "id": "t1",
                    "task_type": "form_submission",
                }
            )
        ]
        stages[1].workflow_transitions = [
            WorkflowTransition.from_dict(
                {
                    "target_id": "hook1",
                    "target_type": "hook",
                    "type": "task",
                    "id": "t2",
                    "task_type": "data_processed",
                }
            )
        ]

        simulate_layout(stages, iterations=30)

        # Verify that positions were updated
        for stage in stages:
            self.assertIsNotNone(stage.workflow_position)
            self.assertIsInstance(stage.workflow_position, tuple)
            self.assertEqual(len(stage.workflow_position), 2)
