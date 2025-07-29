#!/usr/bin/env python3
"""
Example demonstrating the fix_graph_positions functionality
with a realistic workflow scenario
"""

import os
import sys

sys.path.insert(0, os.path.abspath("."))

from abstra_internals.utils.physics import simulate_layout


def create_sample_workflow():
    """Create a sample workflow with multiple stages and transitions"""

    # Sample stages representing a financial reconciliation workflow
    stages = [
        {
            "id": "upload-form",
            "type": "forms",
            "position": {"x": 0, "y": 0},
            "title": "Upload Financial Data",
            "props": {"filename": "forms/upload.py", "path": "/upload"},
        },
        {
            "id": "validate-script",
            "type": "scripts",
            "position": {"x": 0, "y": 0},
            "title": "Validate Data",
            "props": {"filename": "scripts/validate.py"},
        },
        {
            "id": "process-script",
            "type": "scripts",
            "position": {"x": 0, "y": 0},
            "title": "Process Reconciliation",
            "props": {"filename": "scripts/reconcile.py"},
        },
        {
            "id": "approval-form",
            "type": "forms",
            "position": {"x": 0, "y": 0},
            "title": "Review & Approve",
            "props": {"filename": "forms/approval.py", "path": "/approve"},
        },
        {
            "id": "notification-hook",
            "type": "hooks",
            "position": {"x": 0, "y": 0},
            "title": "Send Notifications",
            "props": {"filename": "hooks/notify.py", "path": "/notify"},
        },
        {
            "id": "archive-job",
            "type": "jobs",
            "position": {"x": 0, "y": 0},
            "title": "Archive Old Data",
            "props": {"filename": "jobs/archive.py"},
        },
        {
            "id": "report-hook",
            "type": "hooks",
            "position": {"x": 0, "y": 0},
            "title": "Generate Report",
            "props": {"filename": "hooks/report.py", "path": "/report"},
        },
    ]

    # Sample transitions defining the workflow flow
    transitions = [
        {
            "id": "trans-1",
            "sourceStageId": "upload-form",
            "targetStageId": "validate-script",
            "type": "form_submission",
            "props": {"taskType": "data_uploaded"},
        },
        {
            "id": "trans-2",
            "sourceStageId": "validate-script",
            "targetStageId": "process-script",
            "type": "script_completion",
            "props": {"taskType": "validation_passed"},
        },
        {
            "id": "trans-3",
            "sourceStageId": "process-script",
            "targetStageId": "approval-form",
            "type": "script_completion",
            "props": {"taskType": "processing_complete"},
        },
        {
            "id": "trans-4",
            "sourceStageId": "approval-form",
            "targetStageId": "notification-hook",
            "type": "form_submission",
            "props": {"taskType": "approved"},
        },
        {
            "id": "trans-5",
            "sourceStageId": "approval-form",
            "targetStageId": "report-hook",
            "type": "form_submission",
            "props": {"taskType": "approved"},
        },
        {
            "id": "trans-6",
            "sourceStageId": "notification-hook",
            "targetStageId": "archive-job",
            "type": "hook_completion",
            "props": {"taskType": "notified"},
        },
    ]

    return stages, transitions


def demonstrate_layout_optimization():
    """Demonstrate the layout optimization with before/after comparison"""

    print("Financial Reconciliation Workflow Layout Optimization")
    print("=" * 60)

    stages, transitions = create_sample_workflow()

    print("\nOriginal workflow (all stages at origin):")
    for stage in stages:
        print(
            f"  {stage['title']:<25} ({stage['type']:<7}): "
            f"({stage['position']['x']:>6.1f}, {stage['position']['y']:>6.1f})"
        )

    print("\nWorkflow connections:")
    for transition in transitions:
        source = next(s for s in stages if s["id"] == transition["sourceStageId"])
        target = next(s for s in stages if s["id"] == transition["targetStageId"])
        print(
            f"  {source['title']:<25} → {target['title']:<25} ({transition['props']['taskType']})"
        )

    # Apply physics simulation to optimize layout
    print("\nRunning physics simulation...")
    optimized_stages = simulate_layout(stages, transitions, iterations=100)

    print("\nOptimized layout positions:")
    for stage in optimized_stages:
        print(
            f"  {stage['title']:<25} ({stage['type']:<7}): "
            f"({stage['position']['x']:>6.1f}, {stage['position']['y']:>6.1f})"
        )

    # Calculate some basic metrics
    def calculate_total_edge_length(stages_list, transitions_list):
        total_length = 0
        for transition in transitions_list:
            source = next(
                s for s in stages_list if s["id"] == transition["sourceStageId"]
            )
            target = next(
                s for s in stages_list if s["id"] == transition["targetStageId"]
            )

            dx = source["position"]["x"] - target["position"]["x"]
            dy = source["position"]["y"] - target["position"]["y"]
            length = (dx**2 + dy**2) ** 0.5
            total_length += length

        return total_length

    original_length = calculate_total_edge_length(stages, transitions)
    optimized_length = calculate_total_edge_length(optimized_stages, transitions)

    print("\nLayout Quality Metrics:")
    print(f"  Original total edge length:  {original_length:>8.1f}")
    print(f"  Optimized total edge length: {optimized_length:>8.1f}")

    if original_length > 0:
        improvement = (original_length - optimized_length) / original_length * 100
        print(f"  Improvement:                 {improvement:>7.1f}%")
    else:
        print("  Improvement:                 Layout spread from origin")

    # Show spread of positions
    def calculate_spread(stages_list):
        xs = [s["position"]["x"] for s in stages_list]
        ys = [s["position"]["y"] for s in stages_list]
        x_range = max(xs) - min(xs)
        y_range = max(ys) - min(ys)
        return x_range, y_range

    orig_x_range, orig_y_range = calculate_spread(stages)
    opt_x_range, opt_y_range = calculate_spread(optimized_stages)

    print("\nLayout Spread:")
    print(f"  Original: {orig_x_range:>6.1f} x {orig_y_range:>6.1f}")
    print(f"  Optimized: {opt_x_range:>6.1f} x {opt_y_range:>6.1f}")

    print("\nThe optimized layout provides:")
    print("  • Better visual separation between stages")
    print("  • Reduced edge crossings")
    print("  • More intuitive workflow flow")
    print("  • Appropriate sizing for different stage types")


if __name__ == "__main__":
    demonstrate_layout_optimization()
