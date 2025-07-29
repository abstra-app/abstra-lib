from dataclasses import dataclass
from typing import List, Optional, Tuple

from abstra_internals.interface.sdk import user_exceptions
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.tasks import TaskDTO
from abstra_internals.utils.datetime import from_utc_iso_string


@dataclass
class DataRequestFilter:
    stage: Optional[List[str]]
    status: Optional[List[str]]
    start_date: Optional[str]
    end_date: Optional[str]

    @staticmethod
    def from_dict(data: dict) -> "DataRequestFilter":
        return DataRequestFilter(
            stage=data.get("stage", None),
            status=data.get("status", None),
            start_date=data.get("startDate", None),
            end_date=data.get("endDate", None),
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


@dataclass
class DataRequest:
    filter: DataRequestFilter
    limit: int
    offset: int

    @staticmethod
    def from_dict(data: dict) -> "DataRequest":
        return DataRequest(
            filter=DataRequestFilter.from_dict(data.get("filter", {})),
            limit=data.get("limit", 10),
            offset=data.get("offset", 0),
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


class ListTasksItem(TaskDTO):
    target_stage_title: str
    target_stage_type: str
    source_stage_title: Optional[str]
    source_stage_type: Optional[str]


class TasksController:
    def __init__(
        self,
        repositories: Repositories,
    ) -> None:
        self.repos = repositories

    def get_stage(self, stage_id: str):
        project = self.repos.project.load(include_disabled_stages=True)
        stage = project.get_stage(stage_id)

        if not stage:
            raise Exception(f"Stage {stage_id} not found")

        return {
            "title": stage.title,
            "type_name": "tasklet" if stage.type_name == "script" else stage.type_name,
        }

    def get_nullable_stage(self, stage_id: Optional[str]):
        if not stage_id:
            return {
                "title": None,
                "type_name": None,
            }
        return self.get_stage(stage_id)

    def list_all_tasks(
        self, req: Optional[DataRequest] = None
    ) -> Tuple[List[ListTasksItem], int]:
        """
        Retrieve a filtered and paginated list of all tasks in the system.

        This method returns tasks with optional filtering by stage, status, and date range,
        along with pagination support. Each task includes information about both the
        target stage (where the task will be executed) and source stage (where it originated).

        Args:
            req (Optional[DataRequest], optional): Filter and pagination parameters.
                If None, returns all tasks without pagination. Contains:
                - filter.stage: List of stage IDs to filter by
                - filter.status: List of task statuses to filter by ('pending', 'locked', 'completed')
                - filter.start_date: ISO date string for earliest creation date
                - filter.end_date: ISO date string for latest creation date
                - limit: Maximum number of tasks to return
                - offset: Number of tasks to skip for pagination

        Returns:
            Tuple[List[ListTasksItem], int]: A tuple containing:
                - List of ListTasksItem objects with task details and stage information
                - Total count of tasks matching the filter (before pagination)

        Example:
            ```python
            controller = TasksController(repositories)

            # Get all tasks
            all_tasks, total_count = controller.list_tasks()
            print(f"Found {total_count} total tasks")

            # Get tasks with filtering and pagination
            filter_req = DataRequest.from_dict({
                "filter": {
                    "stage": ["form-123", "script-456"],
                    "status": ["pending", "locked"],
                    "startDate": "2024-01-01T00:00:00Z",
                    "endDate": "2024-12-31T23:59:59Z"
                },
                "limit": 10,
                "offset": 0
            })

            filtered_tasks, total = controller.list_tasks(filter_req)
            for task in filtered_tasks:
                print(f"Task {task.id}: {task.target_stage_title} -> {task.source_stage_title}")
                print(f"  Status: {task.status}, Type: {task.type}")
            ```

        Note:
            - Tasks are returned with enriched information including stage titles and types
            - Source stage information may be None if the task wasn't created by a stage
            - Date filtering uses UTC ISO string format
            - Script stages are displayed as "tasklet" type in the response

        Copywritings:
            List all tasks
            Listing all tasks...
        """
        items = []
        for task in self.repos.tasks.get_all_tasks():
            if (
                req
                and req.filter.stage
                and task.target_stage_id not in req.filter.stage
            ):
                continue
            if req and req.filter.status and task.status not in req.filter.status:
                continue
            if req and (
                req.filter.start_date
                and from_utc_iso_string(task.created.at)
                < from_utc_iso_string(req.filter.start_date)
            ):
                continue
            if req and (
                req.filter.end_date
                and from_utc_iso_string(task.created.at)
                > from_utc_iso_string(req.filter.end_date)
            ):
                continue

            target_stage = self.get_stage(task.target_stage_id)
            source_stage = self.get_nullable_stage(task.created.by_stage_id)

            items.append(
                ListTasksItem(
                    **task.dump(),
                    target_stage_type=target_stage["type_name"],
                    target_stage_title=target_stage["title"],
                    source_stage_type=source_stage["type_name"],
                    source_stage_title=source_stage["title"],
                )
            )

        if not req:
            return items, len(items)

        return items[req.offset : req.offset + req.limit], len(items)

    def list_tasks_sent_to_stage(self, stage_id) -> List[ListTasksItem]:
        """
        Retrieve all tasks targeted to a specific stage, sorted by creation date.

        This method returns tasks that are assigned to execute on the specified stage,
        providing comprehensive information about each task including source stage details.
        Tasks are sorted in descending order by creation time (newest first).

        Args:
            stage_id (str): Unique identifier of the stage to get tasks for.

        Returns:
            List[ListTasksItem]: List of tasks targeted to the specified stage,
                each containing:
                - Task metadata (id, type, status, payload, etc.)
                - Target stage information (title, type)
                - Source stage information (title, type, may be None)

        Raises:
            Exception: If the stage with the given ID is not found.

        Example:
            ```python
            controller = TasksController(repositories)

            # Get all tasks for a specific stage
            stage_tasks = controller.get_stage_tasks("form-123")

            print(f"Found {len(stage_tasks)} tasks for stage")
            for task in stage_tasks:
                print(f"Task {task.id}:")
                print(f"  Type: {task.type}")
                print(f"  Status: {task.status}")
                print(f"  Target: {task.target_stage_title} ({task.target_stage_type})")

                if task.source_stage_title:
                    print(f"  Source: {task.source_stage_title} ({task.source_stage_type})")
                else:
                    print("  Source: External/Manual")

                print(f"  Payload: {task.payload}")
            ```

        Note:
            - Tasks are sorted by creation date in descending order (newest first)
            - Source stage information will be None for tasks created externally
            - The target stage must exist or an exception will be raised
            - Includes tasks in all statuses (pending, locked, completed)

        Copywritings:
            List all tasks sent to a stage
            Listing all tasks sent to a stage...
        """
        target_stage = self.get_stage(stage_id)
        tasks = self.repos.tasks.get_stage_tasks(stage_id)

        tasks.sort(
            key=lambda task: from_utc_iso_string(task.created.at),
            reverse=True,
        )

        if not target_stage["title"]:
            raise Exception(f"Stage {stage_id} not found")

        return [
            ListTasksItem(
                **task.dump(),
                target_stage_title=target_stage["title"],
                target_stage_type=target_stage["type_name"],
                source_stage_title=self.get_nullable_stage(task.created.by_stage_id)[
                    "title"
                ],
                source_stage_type=self.get_nullable_stage(task.created.by_stage_id)[
                    "type_name"
                ],
            )
            for task in tasks
        ]

    def list_tasks_sent_by_stage(self, stage_id) -> List[ListTasksItem]:
        """
        Retrieve all tasks that were created/sent by a specific stage during its executions.

        This method returns tasks that originated from the specified stage, providing
        insight into what tasks a stage has generated during its execution lifecycle.
        Tasks are sorted by creation date in descending order (newest first).

        Args:
            stage_id (str): Unique identifier of the stage that sent/created the tasks.

        Returns:
            List[ListTasksItem]: List of tasks created by the specified stage,
                each containing:
                - Task metadata (id, type, status, payload, etc.)
                - Target stage information (where the task will be executed)
                - Source stage information (the originating stage)

        Example:
            ```python
            controller = TasksController(repositories)

            # Get all tasks sent by a specific stage
            sent_tasks = controller.get_sent_tasks("script-456")

            print(f"Stage script-456 has sent {len(sent_tasks)} tasks:")
            for task in sent_tasks:
                print(f"Task {task.id}:")
                print(f"  Type: {task.type}")
                print(f"  Status: {task.status}")
                print(f"  Sent to: {task.target_stage_title} ({task.target_stage_type})")
                print(f"  Created: {task.created.at}")
                print(f"  Payload: {task.payload}")
            ```

        Note:
            - Only tasks created during stage executions are included
            - Tasks are sorted by creation date in descending order (newest first)
            - The method traces tasks through execution relationships
            - Returns empty list if the stage hasn't sent any tasks
            - Useful for understanding workflow progression and debugging

        Copywritings:
            List all tasks sent by a stage
            Listing all tasks sent by a stage...
        """
        all_tasks, _ = self.list_all_tasks()
        tasks_with_executions = [
            (task, self.repos.execution.get(task.created.by_execution_id))
            for task in all_tasks
            if task.created.by_execution_id is not None
        ]

        tasks_with_executions.sort(
            key=lambda task: from_utc_iso_string(task[0].created.at),
            reverse=True,
        )

        return [
            ListTasksItem(
                **task.dump(),
                target_stage_title=task.target_stage_title,
                target_stage_type=task.target_stage_title,
                source_stage_title=self.get_nullable_stage(task.created.by_stage_id)[
                    "title"
                ],
                source_stage_type=self.get_nullable_stage(task.created.by_stage_id)[
                    "type_name"
                ],
            )
            for task, execution in tasks_with_executions
            if execution and execution.stage_id == stage_id
        ]

    def update_task_status(self, task_id: str, status: str) -> None:
        """
        Update the status of an existing task.

        This method allows manual control over task lifecycle by changing task status.
        It's useful for task management, workflow control, and handling exceptional cases.

        Args:
            task_id (str): Unique identifier of the task to update.
            status (str): New status for the task. Valid values:
                - 'completed': Mark task as completed without execution
                - 'pending': Reset task to pending status for re-execution

        Raises:
            TaskInvalidStatus: If an invalid status value is provided.

        Example:
            ```python
            controller = TasksController(repositories)

            # Mark a task as completed (skip execution)
            try:
                controller.update_task_status("task-123", "completed")
                print("Task marked as completed")
            except Exception as e:
                print(f"Failed to update task: {e}")

            # Reset a task to pending status
            controller.update_task_status("task-456", "pending")
            print("Task reset to pending - will be re-executed")

            # Invalid status will raise an exception
            try:
                controller.update_task_status("task-789", "invalid_status")
            except TaskInvalidStatus as e:
                print(f"Invalid status: {e}")
            ```

        Note:
            - Completed tasks will not trigger stage execution
            - Pending tasks will be picked up by the execution engine
            - Status changes are immediate and cannot be undone
            - Use with caution as it affects workflow execution flow
            - 'locked' status is managed internally and cannot be set manually

        Copywritings:
            Update the status of a task
            Updating the status of a task...
        """
        if status == "completed":
            self.repos.tasks.complete_task(task_id, None, None)
        elif status == "pending":
            self.repos.tasks.set_task_to_pending(task_id)
        else:
            raise user_exceptions.TaskInvalidStatus(status)

    def create_task(
        self,
        name: str,
        stage_id: str,
        payload: dict,
        source_stage_id: Optional[str] = None,
        execution_id: Optional[str] = None,
    ) -> TaskDTO:
        """
        Create a new task to be executed by a specific stage.

        This method creates a task that will trigger the execution of the target stage
        with the provided payload data. Tasks are the primary mechanism for workflow
        progression and data passing between stages.

        Args:
            name (str): Type/name of the task (e.g., 'user_registration', 'data_processing').
            stage_id (str): Unique identifier of the target stage that will execute this task.
            payload (dict): Data to be passed to the target stage when it executes.
                This data will be available to the stage during execution.
            source_stage_id (Optional[str], optional): ID of the stage that is creating
                this task. Used for workflow tracking and debugging.
            execution_id (Optional[str], optional): ID of the execution context that
                is creating this task. Used for tracking task relationships.

        Returns:
            TaskDTO: The created task object containing all task metadata including
                assigned ID, creation timestamp, and status.

        Example:
            ```python
            controller = TasksController(repositories)

            # Create a simple task
            task = controller.create_task(
                name="user_signup",
                stage_id="welcome-form",
                payload={"user_email": "user@example.com", "signup_date": "2024-01-15"}
            )
            print(f"Created task {task.id} with status {task.status}")

            # Create task with source tracking
            task_with_source = controller.create_task(
                name="process_order",
                stage_id="order-processor",
                payload={"order_id": 12345, "items": ["item1", "item2"]},
                source_stage_id="order-form",
                execution_id="exec-789"
            )

            # Create workflow progression task
            approval_task = controller.create_task(
                name="approval_needed",
                stage_id="approval-form",
                payload={
                    "request_id": "req-456",
                    "amount": 1000.00,
                    "description": "Budget approval needed"
                }
            )
            ```

        Note:
            - Tasks are created in 'pending' status and will be picked up for execution
            - The payload must be JSON-serializable
            - Target stage must exist or task creation may fail
            - Source stage and execution tracking help with workflow debugging
            - Tasks enable asynchronous workflow execution

        Copywritings:
            Create a new task for a stage
            Creating a new task for a stage...
        """
        task = self.repos.tasks.send_task(
            name, payload, stage_id, source_stage_id, execution_id
        )
        return task

    def clear_tasks(self) -> None:
        """
        Clear all tasks in this workflow

        This method is useful to clear all tasks from every stage.

        Copywritings:
            Clear all tasks in this workflow
            Clearing all tasks in this workflow...
        """

        self.repos.tasks.clear()
