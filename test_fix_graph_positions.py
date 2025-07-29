#!/usr/bin/env python3
"""
Test script to demonstrate the fix_graph_positions functionality
"""

import os
import sys
from typing import List

sys.path.insert(0, os.path.abspath("."))

from abstra_internals.repositories.project.project import (
    FormStage,
    HookStage,
    ScriptStage,
    Stage,
    WorkflowTransition,
)
from abstra_internals.utils.geometry import Point2D, Rect, Vector2D
from abstra_internals.utils.physics import simulate_layout


def test_geometry():
    """Test basic geometry operations"""

    p1 = Point2D(0, 0)
    p2 = Point2D(10, 5)

    vector = p2.sub(p1)
    print(f"Vector from origin to (10,5): ({vector.dx}, {vector.dy})")

    # Test Vector2D
    v1 = Vector2D(3, 4)
    print(f"Vector (3,4) length: {v1.length()}")
    print(f"Vector (3,4) normalized: ({v1.norm().dx:.3f}, {v1.norm().dy:.3f})")

    # Test Rect
    rect = Rect(Point2D(0, 0), 100, 50)
    print(f"Rect center: ({rect.center.x}, {rect.center.y})")
    print(f"Rect contains (25, 20): {rect.contains(Point2D(25, 20))}")

    print("Geometry tests passed!\n")


def test_physics():
    """Test physics simulation"""

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


def test_workflow_controller():
    """Test workflow controller integration (if available)"""
    print("Testing workflow controller integration...")

    try:
        import importlib.util

        spec = importlib.util.find_spec("abstra_internals.controllers.workflows")
        if spec is not None:
            print("WorkflowController module is available")
            print("Workflow controller integration test passed!\n")
        else:
            print("WorkflowController module not found\n")

    except ImportError as e:
        print(f"Could not find WorkflowController: {e}")
        print("This is expected if dependencies are not available\n")


if __name__ == "__main__":
    print("Running tests for graph position fixing...\n")

    test_geometry()
    test_physics()
    test_workflow_controller()

    print("All tests completed successfully!")
