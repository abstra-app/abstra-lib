from typing import List, Optional

from abstra_internals.repositories.execution import ExecutionFilter
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.project.project import Stage, StageWithFile
from abstra_internals.utils.mcp import mcp_bp


def get_editor_bp(repositories: Repositories):
    def list_stages() -> List[Stage]:
        """List all workflow stages in the project.

        Returns all stages (forms, hooks, jobs, scripts) that make up the workflow.
        Each stage has properties like id, title, type, file path, and transitions.
        Use this to understand the overall project structure and workflow flow."""
        project = repositories.project.load()
        return project.workflow_stages

    def read_stage_file(stage_id: str) -> str:
        """Read the Python file content of a specific stage.

        Given a stage ID from list_stages(), returns the actual Python code
        that implements that stage. This is useful for understanding what
        each stage does and how it's implemented.

        Args:
            stage_id: The unique identifier of the stage to read
        """
        project = repositories.project.load()
        for stage in project.workflow_stages:
            if stage.id == stage_id:
                assert isinstance(
                    stage, StageWithFile
                ), "Stage must have an associated file."
                return stage.file_path.read_text(encoding="utf-8")
        raise ValueError(f"Stage with ID {stage_id} not found.")

    def get_project_overview():
        """Get a comprehensive overview of the project structure and workflow.

        Returns detailed information about the project including:
        - Total number of stages by type (forms, hooks, jobs, scripts)
        - Workflow connections and transitions between stages
        - Initial stages (entry points) in the workflow
        - Project configuration and settings
        """
        project = repositories.project.load()

        stages_by_type = {}
        for stage in project.workflow_stages:
            stage_type = stage.type_name
            if stage_type not in stages_by_type:
                stages_by_type[stage_type] = []

            stage_info = {"id": stage.id, "title": stage.title, "type": stage.type_name}

            # Add file info for stages that have files
            if isinstance(stage, StageWithFile):
                stage_info["file"] = stage.file

            # Add stage type specific properties safely
            is_initial = getattr(stage, "is_initial", False)
            if is_initial:
                stage_info["is_initial"] = "true"
            else:
                stage_info["is_initial"] = "false"

            stages_by_type[stage_type].append(stage_info)

        # Get workflow transitions
        transitions = []
        for stage in project.workflow_stages:
            for transition in stage.workflow_transitions:
                transitions.append(
                    {
                        "from_stage": stage.id,
                        "from_title": stage.title,
                        "to_stage": transition.target_id,
                        "transition_type": transition.type,
                        "task_type": transition.task_type,
                    }
                )

        return {
            "total_stages": len(project.workflow_stages),
            "stages_by_type": stages_by_type,
            "workflow_transitions": transitions,
            "workspace_settings": {"theme": project.workspace.theme},
        }

    def get_stage_details(stage_id: str):
        """Get detailed information about a specific stage.

        Returns comprehensive details about a stage including:
        - Basic properties (id, title, type, file)
        - Workflow position and connections
        - Stage-specific configuration
        - Related files and dependencies

        Args:
            stage_id: The unique identifier of the stage
        """
        project = repositories.project.load()
        for stage in project.workflow_stages:
            if stage.id == stage_id:
                details = {
                    "id": stage.id,
                    "title": stage.title,
                    "type": stage.type_name,
                    "workflow_position": stage.workflow_position,
                    "transitions": [t.as_dict for t in stage.workflow_transitions],
                }

                # Add file-specific details for stages with files
                if isinstance(stage, StageWithFile):
                    details["file"] = stage.file
                    details["file_path"] = str(stage.file_path)

                # Add type-specific properties using getattr for safety
                path = getattr(stage, "path", None)
                if path:
                    details["path"] = path

                enabled = getattr(stage, "enabled", None)
                if enabled is not None:
                    details["enabled"] = "true" if enabled else "false"

                schedule = getattr(stage, "schedule", None)
                if schedule:
                    details["schedule"] = schedule

                is_initial = getattr(stage, "is_initial", None)
                if is_initial is not None:
                    details["is_initial"] = "true" if is_initial else "false"

                return details

        raise ValueError(f"Stage with ID {stage_id} not found.")

    def get_workflow_graph():
        """Get the workflow as a graph structure.

        Returns the workflow represented as nodes and edges, making it easy
        to understand the flow and relationships between stages.
        Useful for visualization and understanding execution paths.
        """
        project = repositories.project.load()

        nodes = []
        edges = []

        for stage in project.workflow_stages:
            node = {
                "id": stage.id,
                "title": stage.title,
                "type": stage.type_name,
                "position": stage.workflow_position,
            }

            # Add file info for stages that have files
            if isinstance(stage, StageWithFile):
                node["file"] = stage.file

            # Add type-specific properties using getattr for safety
            path = getattr(stage, "path", None)
            if path:
                node["path"] = path

            schedule = getattr(stage, "schedule", None)
            if schedule:
                node["schedule"] = schedule

            is_initial = getattr(stage, "is_initial", None)
            if is_initial is not None:
                node["is_initial"] = "true" if is_initial else "false"

            nodes.append(node)

            # Add edges for transitions
            for transition in stage.workflow_transitions:
                edges.append(
                    {
                        "from": stage.id,
                        "to": transition.target_id,
                        "type": transition.type,
                        "task_type": transition.task_type,
                        "transition_id": transition.id,
                    }
                )

        # Find initial stages (no incoming edges)
        target_ids = {edge["to"] for edge in edges}
        initial_stages = [node["id"] for node in nodes if node["id"] not in target_ids]

        return {
            "nodes": nodes,
            "edges": edges,
            "initial_stages": initial_stages,
            "total_nodes": len(nodes),
            "total_edges": len(edges),
        }

    def get_all_tasks():
        """Get all tasks in the workflow system.

        Returns all tasks that have been created in the workflow, including:
        - Task ID, type, and payload data
        - Status (pending, locked, completed)
        - Source and target stage information
        - Creation, lock, and completion timestamps
        - Execution details

        Useful for understanding task flow and debugging workflow execution.
        """
        return [task.__dict__ for task in repositories.tasks.get_all_tasks()]

    def get_pending_tasks_for_stage(stage_id: str, limit: int = 50, offset: int = 0):
        """Get pending tasks for a specific stage.

        Returns tasks that are waiting to be processed by the specified stage.

        Args:
            stage_id: The stage ID to get pending tasks for
            limit: Maximum number of tasks to return (default 50)
            offset: Number of tasks to skip (default 0)
        """
        tasks = repositories.tasks.get_pending_tasks(stage_id, limit, offset, {})
        return [task.__dict__ for task in tasks]

    def get_sent_tasks_from_stage(stage_id: str, limit: int = 50, offset: int = 0):
        """Get tasks sent from a specific stage.

        Returns tasks that were created/sent by the specified stage.

        Args:
            stage_id: The stage ID to get sent tasks from
            limit: Maximum number of tasks to return (default 50)
            offset: Number of tasks to skip (default 0)
        """
        tasks = repositories.tasks.get_sent_tasks(stage_id, limit, offset, {})
        return [task.__dict__ for task in tasks]

    def get_stage_tasks(stage_id: str):
        """Get all tasks associated with a specific stage.

        Returns all tasks that are targeted to the specified stage,
        regardless of their current status.

        Args:
            stage_id: The stage ID to get tasks for
        """
        tasks = repositories.tasks.get_stage_tasks(stage_id)
        return [task.__dict__ for task in tasks]

    def get_task_by_id(task_id: str):
        """Get a specific task by its ID.

        Returns detailed information about a single task including:
        - Task payload and metadata
        - Current status and history
        - Associated stage and execution information

        Args:
            task_id: The unique task identifier
        """
        task = repositories.tasks.get_by_id(task_id)
        return task.__dict__

    def get_execution_sent_tasks(execution_id: str):
        """Get all tasks sent during a specific execution.

        Returns tasks that were created during the specified execution,
        useful for tracking what a particular stage run produced.

        Args:
            execution_id: The execution ID to get sent tasks for
        """
        tasks = repositories.tasks.get_execution_sent_tasks(execution_id)
        return [task.__dict__ for task in tasks]

    def get_last_executions_for_stage(stage_id: str, limit: int = 20):
        """Get the most recent executions for a specific stage.

        Returns the latest executions that have run for the specified stage,
        including their status, timestamps, and performance metrics.

        Args:
            stage_id: The stage ID to filter executions by
            limit: Maximum number of executions to return (default 20)
        """

        filter = ExecutionFilter(stage_id=stage_id, limit=limit, offset=0)

        response = repositories.execution.list(filter)
        return {
            "executions": [execution.dump() for execution in response.executions],
            "total_count": response.total_count,
            "limit": limit,
            "filtered_by": {"stage_id": stage_id},
        }

    def get_execution_logs(execution_id: str, event_type: Optional[str] = None):
        """Get execution logs for a specific execution.

        Returns log entries (stdout/stderr) from a stage execution.
        Useful for debugging and understanding what happened during execution.

        Args:
            execution_id: The execution ID to get logs for
            event_type: Optional filter for log type ('stdout' or 'stderr')
        """
        from abstra_internals.repositories.execution_logs import LogEvent

        # Convert string to proper LogEvent type or None
        log_event: Optional[LogEvent] = None
        if event_type == "stdout" or event_type == "stderr":
            log_event = event_type

        logs = repositories.execution_logs.get(execution_id, log_event)
        return [log.to_dto() for log in logs]

    def get_tasks_by_type(task_type: str):
        """Get all tasks of a specific type.

        Filters all tasks by their type (e.g., 'approved', 'invoice_needed', etc.).
        Useful for analyzing specific workflow paths and task patterns.

        Args:
            task_type: The task type to filter by
        """
        all_tasks = repositories.tasks.get_all_tasks()
        filtered_tasks = [task for task in all_tasks if task.type == task_type]
        return [task.__dict__ for task in filtered_tasks]

    def get_task_flow_summary():
        """Get a summary of task flow across the entire workflow.

        Provides analytics about task distribution, status counts,
        and flow patterns across all stages. Useful for workflow optimization
        and understanding bottlenecks.
        """
        all_tasks = repositories.tasks.get_all_tasks()

        # Group tasks by status
        status_counts = {}
        type_counts = {}
        stage_task_counts = {}

        for task in all_tasks:
            # Count by status
            status = task.status
            status_counts[status] = status_counts.get(status, 0) + 1

            # Count by type
            task_type = task.type
            type_counts[task_type] = type_counts.get(task_type, 0) + 1

            # Count by target stage
            target_stage = task.target_stage_id
            stage_task_counts[target_stage] = stage_task_counts.get(target_stage, 0) + 1

        return {
            "total_tasks": len(all_tasks),
            "status_distribution": status_counts,
            "type_distribution": type_counts,
            "stage_distribution": stage_task_counts,
            "recent_tasks": [
                task.__dict__
                for task in sorted(all_tasks, key=lambda t: t.created.at, reverse=True)[
                    :10
                ]
            ],
        }

    def get_last_executions(
        limit: int = 20, stage_id: Optional[str] = None, status: Optional[str] = None
    ):
        """Get the most recent executions in the system.

        Returns the latest executions with detailed information including:
        - Execution ID, status, and timestamps
        - Associated stage and context information
        - Duration and performance metrics
        - Error information if execution failed

        Args:
            limit: Maximum number of executions to return (default 20)
            stage_id: Optional filter by specific stage ID
            status: Optional filter by status ('running', 'finished', 'failed', 'abandoned')
        """
        from abstra_internals.repositories.execution import ExecutionFilter

        filter = ExecutionFilter(
            stage_id=stage_id, status=status, limit=limit, offset=0
        )

        response = repositories.execution.list(filter)
        return {
            "executions": [execution.dump() for execution in response.executions],
            "total_count": response.total_count,
            "limit": limit,
            "filtered_by": {"stage_id": stage_id, "status": status},
        }

    def get_last_tasks(
        limit: int = 20, status: Optional[str] = None, task_type: Optional[str] = None
    ):
        """Get the most recent tasks in the system.

        Returns the latest tasks sorted by creation time, with optional filtering.
        Useful for monitoring recent workflow activity and debugging.

        Args:
            limit: Maximum number of tasks to return (default 20)
            status: Optional filter by status ('pending', 'locked', 'completed')
            task_type: Optional filter by task type (e.g., 'approved', 'invoice_needed')
        """
        all_tasks = repositories.tasks.get_all_tasks()

        # Apply filters
        filtered_tasks = all_tasks
        if status:
            filtered_tasks = [task for task in filtered_tasks if task.status == status]
        if task_type:
            filtered_tasks = [task for task in filtered_tasks if task.type == task_type]

        # Sort by creation time (most recent first) and limit
        sorted_tasks = sorted(filtered_tasks, key=lambda t: t.created.at, reverse=True)[
            :limit
        ]

        return {
            "tasks": [task.__dict__ for task in sorted_tasks],
            "total_count": len(filtered_tasks),
            "returned_count": len(sorted_tasks),
            "filtered_by": {"status": status, "task_type": task_type},
        }

    def get_last_tasks_sent_by(
        stage_id: str, limit: int = 20, task_type: Optional[str] = None
    ):
        """Get the most recent tasks sent by a specific stage.

        Returns tasks that were created/sent by the specified stage,
        sorted by creation time. Useful for tracking what a stage has produced.

        Args:
            stage_id: The stage ID to get sent tasks from
            limit: Maximum number of tasks to return (default 20)
            task_type: Optional filter by task type
        """
        # Use the existing method but with larger limit for filtering
        all_sent_tasks = repositories.tasks.get_sent_tasks(stage_id, None, 0, {})

        # Apply task type filter if specified
        filtered_tasks = all_sent_tasks
        if task_type:
            filtered_tasks = [task for task in filtered_tasks if task.type == task_type]

        # Sort by creation time (most recent first) and limit
        sorted_tasks = sorted(filtered_tasks, key=lambda t: t.created.at, reverse=True)[
            :limit
        ]

        return {
            "stage_id": stage_id,
            "tasks": [task.__dict__ for task in sorted_tasks],
            "total_sent": len(all_sent_tasks),
            "filtered_count": len(filtered_tasks),
            "returned_count": len(sorted_tasks),
            "filtered_by": {"task_type": task_type},
        }

    def get_last_tasks_received_by(
        stage_id: str,
        limit: int = 20,
        status: Optional[str] = None,
        task_type: Optional[str] = None,
    ):
        """Get the most recent tasks received by a specific stage.

        Returns tasks that are targeted to the specified stage,
        sorted by creation time. Useful for monitoring stage workload.

        Args:
            stage_id: The stage ID to get received tasks for
            limit: Maximum number of tasks to return (default 20)
            status: Optional filter by status ('pending', 'locked', 'completed')
            task_type: Optional filter by task type
        """
        # Get all tasks for this stage
        all_stage_tasks = repositories.tasks.get_stage_tasks(stage_id)

        # Apply filters
        filtered_tasks = all_stage_tasks
        if status:
            filtered_tasks = [task for task in filtered_tasks if task.status == status]
        if task_type:
            filtered_tasks = [task for task in filtered_tasks if task.type == task_type]

        # Sort by creation time (most recent first) and limit
        sorted_tasks = sorted(filtered_tasks, key=lambda t: t.created.at, reverse=True)[
            :limit
        ]

        return {
            "stage_id": stage_id,
            "tasks": [task.__dict__ for task in sorted_tasks],
            "total_received": len(all_stage_tasks),
            "filtered_count": len(filtered_tasks),
            "returned_count": len(sorted_tasks),
            "filtered_by": {"status": status, "task_type": task_type},
        }

    def get_recent_activity_summary(hours: int = 24):
        """Get a summary of recent workflow activity.

        Provides an overview of activity in the last N hours including:
        - Recent executions with status breakdown
        - Recent tasks created and their types
        - Stage activity levels
        - Error rates and performance metrics

        Args:
            hours: Number of hours to look back (default 24)
        """
        from datetime import datetime, timedelta

        from abstra_internals.repositories.execution import ExecutionFilter

        # Calculate time window
        end_time = datetime.now()
        start_time = end_time - timedelta(hours=hours)

        # Get recent executions
        exec_filter = ExecutionFilter(
            start_date=start_time.isoformat(),
            end_date=end_time.isoformat(),
            limit=100,  # Get up to 100 recent executions for analysis
        )

        exec_response = repositories.execution.list(exec_filter)
        recent_executions = exec_response.executions

        # Get recent tasks
        all_tasks = repositories.tasks.get_all_tasks()
        recent_tasks = [
            task
            for task in all_tasks
            if datetime.fromisoformat(task.created.at.replace("Z", "+00:00"))
            >= start_time
        ]

        # Analyze execution statuses
        exec_status_counts = {}
        stage_exec_counts = {}
        for execution in recent_executions:
            status = execution.status
            exec_status_counts[status] = exec_status_counts.get(status, 0) + 1

            stage_id = execution.stage_id
            stage_exec_counts[stage_id] = stage_exec_counts.get(stage_id, 0) + 1

        # Analyze task types and statuses
        task_type_counts = {}
        task_status_counts = {}
        tasks_by_stage = {}

        for task in recent_tasks:
            # Count by type
            task_type = task.type
            task_type_counts[task_type] = task_type_counts.get(task_type, 0) + 1

            # Count by status
            status = task.status
            task_status_counts[status] = task_status_counts.get(status, 0) + 1

            # Count by target stage
            target_stage = task.target_stage_id
            if target_stage not in tasks_by_stage:
                tasks_by_stage[target_stage] = {"received": 0, "sent": 0}
            tasks_by_stage[target_stage]["received"] += 1

            # Count by source stage
            source_stage = task.created.by_stage_id
            if source_stage:
                if source_stage not in tasks_by_stage:
                    tasks_by_stage[source_stage] = {"received": 0, "sent": 0}
                tasks_by_stage[source_stage]["sent"] += 1

        return {
            "time_window": {
                "hours": hours,
                "start_time": start_time.isoformat(),
                "end_time": end_time.isoformat(),
            },
            "executions": {
                "total": len(recent_executions),
                "status_breakdown": exec_status_counts,
                "by_stage": stage_exec_counts,
                "success_rate": (
                    exec_status_counts.get("finished", 0)
                    / max(len(recent_executions), 1)
                )
                * 100,
            },
            "tasks": {
                "total": len(recent_tasks),
                "type_breakdown": task_type_counts,
                "status_breakdown": task_status_counts,
                "by_stage": tasks_by_stage,
            },
            "top_active_stages": sorted(
                stage_exec_counts.items(), key=lambda x: x[1], reverse=True
            )[:5],
        }

    def get_execution_by_id(execution_id: str):
        """Get detailed information about a specific execution.

        Returns comprehensive details about an execution including:
        - Execution metadata and status
        - Associated stage information
        - Context and performance data
        - Related tasks and logs

        Args:
            execution_id: The unique execution identifier
        """
        try:
            execution = repositories.execution.get(execution_id)

            # Get related tasks
            sent_tasks = repositories.tasks.get_execution_sent_tasks(execution_id)

            # Get logs
            logs = repositories.execution_logs.get(execution_id)

            return {
                "execution": execution.dump(),
                "sent_tasks": [task.__dict__ for task in sent_tasks],
                "logs_count": len(logs),
                "has_logs": len(logs) > 0,
                "log_events": [log.event for log in logs] if logs else [],
            }
        except Exception as e:
            return {
                "error": f"Execution with ID {execution_id} not found: {str(e)}",
                "execution": None,
                "sent_tasks": [],
                "logs_count": 0,
                "has_logs": False,
            }

    return mcp_bp(
        [
            list_stages,
            read_stage_file,
            get_project_overview,
            get_stage_details,
            get_workflow_graph,
            get_all_tasks,
            get_pending_tasks_for_stage,
            get_sent_tasks_from_stage,
            get_stage_tasks,
            get_task_by_id,
            get_execution_sent_tasks,
            get_execution_logs,
            get_tasks_by_type,
            get_task_flow_summary,
            get_last_executions,
            get_last_tasks,
            get_last_tasks_sent_by,
            get_last_tasks_received_by,
            get_recent_activity_summary,
            get_execution_by_id,
            get_last_executions_for_stage,
        ]
    )
