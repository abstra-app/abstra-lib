import unittest
from uuid import uuid4 as uuid

from abstra_internals.repositories.project.project import JobStage, WorkflowTransition
from abstra_internals.utils.geometry import Point2D, Rect

from .physics import (
    attraction_strength,
    ideal_edge_length,
    node_repulsion_strength,
    simulate_layout,
    stage_height,
    stage_width,
)


def node(x: float, y: float) -> JobStage:
    return JobStage(
        id=str(uuid()),
        file="test_file.py",
        title="Test Stage",
        schedule="",
        workflow_position=(x, y),
        workflow_transitions=[],
    )


def link(a: JobStage, b: JobStage):
    a.workflow_transitions.append(
        WorkflowTransition(
            id=str(uuid()), target_id=b.id, target_type=b.type_name, type="task"
        )
    )


def dist(a: JobStage, b: JobStage) -> float:
    p1 = Point2D(a.workflow_position[0], a.workflow_position[1])
    p2 = Point2D(b.workflow_position[0], b.workflow_position[1])
    r1 = Rect(p1, stage_width, stage_height)
    r2 = Rect(p2, stage_width, stage_height)
    return r1.distance_to_rect(r2)


class PhysicsTest(unittest.TestCase):
    def test_converge_to_ideal_distance_binary_system(self):
        a = node(0, 0)
        b = node(0, 0)

        link(a, b)

        simulate_layout([a, b])

        def find_convergence_distance():
            min_distance = ideal_edge_length
            max_distance = 1e4

            def f(d):
                return (d - ideal_edge_length) * (d**2)

            while True:
                dist = (min_distance + max_distance) / 2
                value = f(dist)
                if max_distance - min_distance < 1e-6:
                    return dist
                if value > node_repulsion_strength / attraction_strength:
                    max_distance = dist
                else:
                    min_distance = dist

        self.assertAlmostEqual(dist(a, b) / find_convergence_distance(), 1, delta=0.1)

    def test_converge_to_ideal_distance_6_points_star(self):
        n1 = node(0, 0)
        n2 = node(0, 0)
        n3 = node(0, 0)
        n4 = node(0, 0)
        n5 = node(0, 0)
        n6 = node(0, 0)
        center = node(0, 0)
        link(center, n1)
        link(center, n2)
        link(center, n3)
        link(center, n4)
        link(center, n5)
        link(center, n6)
        simulate_layout([n1, n2, n3, n4, n5, n6, center])
        avg_dist = (
            dist(center, n1)
            + dist(center, n2)
            + dist(center, n3)
            + dist(center, n4)
            + dist(center, n5)
            + dist(center, n6)
        ) / 6

        self.assertAlmostEqual(dist(n1, center) / avg_dist, 1, delta=0.1)
        self.assertAlmostEqual(dist(n2, center) / avg_dist, 1, delta=0.1)
        self.assertAlmostEqual(dist(n3, center) / avg_dist, 1, delta=0.1)
        self.assertAlmostEqual(dist(n4, center) / avg_dist, 1, delta=0.1)
        self.assertAlmostEqual(dist(n5, center) / avg_dist, 1, delta=0.1)
        self.assertAlmostEqual(dist(n6, center) / avg_dist, 1, delta=0.1)
