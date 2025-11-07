import uuid
from pathlib import Path
from typing import Dict, List, Optional, TypedDict

from abstra_internals.controllers.main import UnknownNodeTypeError
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.project.project import (
    ComponentStage,
    FormStage,
    HookStage,
    JobStage,
    NotificationTrigger,
    Project,
    ScriptStage,
    Stage,
    WorkflowTransition,
)
from abstra_internals.settings import Settings
from abstra_internals.utils.physics import simulate_layout


class StageDTO(TypedDict):
    id: str
    type: str
    title: str
    position: Dict[str, float]
    props: Dict[str, Optional[str]]
    module: Optional[str]  # For module stages only
    input: bool
    output: bool


class WorkflowController:
    def __init__(self, repos: Repositories):
        self.repos = repos

    # workflow visual editor
    def get_workflow_settings(self):
        """
        Retrieve the complete workflow configuration including all stages and transitions.

        This method returns a comprehensive representation of the project's workflow,
        including all stages (forms, hooks, jobs, scripts) and the transitions between them.
        It includes disabled stages for complete workflow visualization.

        Returns:
            Dict: Workflow configuration containing:
                - stages: List of stage objects with metadata and positioning
                - transitions: List of connections between stages with task type information

        Example:
            ```python
            controller = WorkflowController(repositories)

            workflow = controller.get_workflow()

            print(f"Workflow has {len(workflow['stages'])} stages")
            print(f"Workflow has {len(workflow['transitions'])} transitions")

            # Examine stages
            for stage in workflow['stages']:
                print(f"Stage: {stage['title']} ({stage['type']})")
                print(f"  ID: {stage['id']}")
                print(f"  Position: ({stage['position']['x']}, {stage['position']['y']})")
                if 'filename' in stage['props']:
                    print(f"  File: {stage['props']['filename']}")
                if 'path' in stage['props']:
                    print(f"  Path: {stage['props']['path']}")

            # Examine transitions
            for transition in workflow['transitions']:
                print(f"Transition: {transition['sourceStageId']} -> {transition['targetStageId']}")
                print(f"  Type: {transition['type']}")
                if transition['props']['taskType']:
                    print(f"  Task Type: {transition['props']['taskType']}")
            ```

        Note:
            - Includes both enabled and disabled stages for complete workflow view
            - Stage positions are returned in x, y coordinate format for visual editor
            - Transitions include task type information for conditional workflow routing
            - Used primarily by the visual workflow editor for rendering and editing

        Copywritings:
            Get the workflow stages and transitions
            Retrieving the workflow stages and transitions...
        """
        project = self.repos.project.load(include_disabled_stages=True)
        return self._make_workflow_dto(project)

    def build_adjacency_list(
        self,
    ) -> Dict[str, List[str]]:
        workflow = self.get_workflow_settings()
        transitions = workflow["transitions"]
        adj = {}
        for t in transitions:
            if t["sourceStageId"] not in adj:
                adj[t["sourceStageId"]] = []
            adj[t["sourceStageId"]].append(t["targetStageId"])
        return adj

    def get_initial_stages(
        self,
    ):
        workflow = self.get_workflow_settings()
        stages = workflow["stages"]
        target_stage_ids = set([t["targetStageId"] for t in workflow["transitions"]])
        return [s for s in stages if s["id"] not in target_stage_ids]

    def get_path(self, n: int):
        adj = self.build_adjacency_list()
        initial_stages = self.get_initial_stages()
        longest_path = []

        def dfs(stage_id: str, current_path: List[str]):
            if stage_id in current_path:
                return
            current_path = current_path.copy()
            current_path.append(stage_id)
            if len(current_path) > len(longest_path):
                longest_path.clear()
                longest_path.extend(current_path)
            for next_stage_id in adj.get(stage_id, []):
                dfs(next_stage_id, current_path)

        for stage in initial_stages:
            dfs(stage["id"], [])

        return longest_path[:n]

    def make_stage_dto(self, stage: Stage) -> StageDTO:
        filename = None
        props = {}
        if isinstance(stage, (HookStage, ScriptStage, FormStage, JobStage)):
            filename = stage.file
            props["filename"] = filename
        path = None
        if isinstance(stage, (FormStage, HookStage)):
            path = stage.path
            props["path"] = path
        if isinstance(stage, ComponentStage):
            props["packageName"] = stage.package_name
        return StageDTO(
            id=stage.id,
            type=stage.type_name + "s",
            title=stage.title,
            position=dict(
                x=stage.workflow_position[0],
                y=stage.workflow_position[1],
            ),
            props=props,
            input=stage.input,
            output=stage.output,
            module=None,
        )

    def _make_workflow_dto(self, project: Project):
        stages = []
        used_modules = set()

        for stage in project.workflow_stages:
            stage_dto = self.make_stage_dto(stage)

            if (
                isinstance(stage, FormStage)
                or isinstance(stage, ScriptStage)
                or isinstance(stage, HookStage)
                or isinstance(stage, JobStage)
            ):
                stage_dto["props"]["filename"] = stage.file

            if isinstance(stage, FormStage) or isinstance(stage, HookStage):
                stage_dto["props"]["path"] = stage.path

            if isinstance(stage, ComponentStage):
                stage_dto["props"]["packageName"] = stage.package_name
                used_modules.add(stage.package_name)

            stages.append(stage_dto)

        transitions = []
        for stage in project.workflow_stages:
            for transition in stage.workflow_transitions:
                props: dict = {"taskType": None}

                if transition.task_type is not None:
                    props["taskType"] = transition.task_type

                transitions.append(
                    dict(
                        id=transition.id,
                        sourceStageId=stage.id,
                        targetStageId=transition.target_id,
                        type=transition.type,
                        props=props,
                    )
                )

        modules = project.get_installed_modules()
        for module in modules:
            if module.name not in used_modules:
                continue
            for stage in module.get_stages():
                stage_dto = self.make_stage_dto(stage)
                stage_dto["module"] = module.name
                stages.append(stage_dto)
                for transition in stage.workflow_transitions:
                    props: dict = {"taskType": None}

                    if transition.task_type is not None:
                        props["taskType"] = transition.task_type

                    transitions.append(
                        dict(
                            id=transition.id,
                            sourceStageId=stage.id,
                            targetStageId=transition.target_id,
                            type=transition.type,
                            props=props,
                        )
                    )

        return dict(
            stages=stages,
            transitions=transitions,
        )

    def add_transition(
        self,
        source_stage_id: str,
        target_stage_id: str,
        task_type: Optional[str] = None,
    ):
        """
        Add a new transition between two stages in the workflow.
        This method creates a new transition from the source stage to the target stage,
        allowing for task-based routing in the workflow.

        Args:
            source_stage_id (str): ID of the source stage where the transition starts.
            target_stage_id (str): ID of the target stage where the transition ends.
            task_type (Optional[str]): Optional filter that should filter only tasks of this type.
        Raises:
            ValueError: If the source or target stage does not exist in the workflow.
            UnknownNodeTypeError: If the source or target stage type is invalid.

        Copywritings:
            Add a new transition between two stages in the workflow
            Adding a new transition between two stages in the workflow...
        """
        project = self.repos.project.load()
        stage = project.get_stage(source_stage_id)
        if stage is None:
            raise ValueError(f"Source stage {source_stage_id} does not exist.")
        target_stage = project.get_stage(target_stage_id)
        if target_stage is None:
            raise ValueError(f"Target stage {target_stage_id} does not exist.")
        transition = WorkflowTransition(
            id=str(uuid.uuid4()),
            target_id=target_stage_id,
            target_type=target_stage.type_name,
            type="task",
            task_type=task_type,
        )
        stage.workflow_transitions.append(transition)
        self.repos.project.save(project)

    def delete_transition(self, transition_id: str):
        """
        Delete a transition from the workflow by its ID.
        This method removes the specified transition from the workflow,
        breaking the connection between two stages.

        Args:
            transition_id (str): ID of the transition to delete.

        Raises:
            ValueError: If the transition with the given ID does not exist.

        Copywritings:
            Delete a transition from the workflow
            Deleting a transition from the workflow...
        """
        project = self.repos.project.load()
        transition_found = False

        for stage in project.workflow_stages:
            for i, transition in enumerate(stage.workflow_transitions):
                if transition.id == transition_id:
                    stage.workflow_transitions.pop(i)
                    transition_found = True
                    break
            if transition_found:
                break

        if not transition_found:
            raise ValueError(f"Transition {transition_id} does not exist.")

        self.repos.project.save(project)

    def update_workflow(self, workflow_state_dto: Dict, module: Optional[str] = None):
        """
        Update the entire workflow configuration with new stages and transitions.

        This method performs a comprehensive workflow update, handling stage creation,
        modification, deletion, and transition management. It's the primary method
        used by the visual workflow editor to persist changes.

        Args:
            workflow_state_dto (Dict): Complete workflow state containing:
                - stages: List of stage objects with updated properties
                - transitions: List of transition objects defining workflow connections

                Stage objects should have:
                - id: Unique stage identifier
                - type: Stage type ("forms", "hooks", "jobs", "scripts")
                - title: Display name
                - position: Dict with x, y coordinates
                - props: Dict with stage-specific properties (filename, path)
                - input: Boolean indicating if stage is an input stage of a module
                - output: Boolean indicating if stage is an output stage of a module

                Transition objects should have:
                - id: Unique transition identifier
                - sourceStageId: ID of the source stage
                - targetStageId: ID of the target stage
                - type: Transition type
                - props: Dict with taskType and other transition properties

            module (Optional[str]): If provided, indicates that the workflow update is specific to a particular module. If None, the update applies to the main project workflow.

        Returns:
            Dict: The updated workflow configuration in the same format as get_workflow()

        Example:
            ```python
            controller = WorkflowController(repositories)

            # Define a workflow with form -> script -> hook flow
            workflow_update = {
                "stages": [
                    {
                        "id": "registration-form",
                        "type": "forms",
                        "title": "User Registration",
                        "position": {"x": 100, "y": 150},
                        "props": {
                            "filename": "forms/registration.py",
                            "path": "/register"
                        },
                        "input": False,
                        "output": False
                    },
                    {
                        "id": "data-processor",
                        "type": "scripts",
                        "title": "Process Registration",
                        "position": {"x": 300, "y": 150},
                        "props": {
                            "filename": "scripts/process_user.py"
                        },
                        "input": False,
                        "output": False
                    },
                    {
                        "id": "welcome-hook",
                        "type": "hooks",
                        "title": "Welcome API",
                        "position": {"x": 500, "y": 150},
                        "props": {
                            "filename": "hooks/welcome.py",
                            "path": "/welcome"
                        },
                        "input": False,
                        "output": False
                    }
                ],
                "transitions": [
                    {
                        "id": "trans-1",
                        "sourceStageId": "registration-form",
                        "targetStageId": "data-processor",
                        "type": "form_submission",
                        "props": {"taskType": "user_registered"}
                    },
                    {
                        "id": "trans-2",
                        "sourceStageId": "data-processor",
                        "targetStageId": "welcome-hook",
                        "type": "script_completion",
                        "props": {"taskType": "processing_complete"}
                    }
                ]
            }

            # Apply the workflow update
            updated_workflow = controller.update_workflow(workflow_update)
            print(f"Updated workflow with {len(updated_workflow['stages'])} stages")

            # Update individual stage properties
            workflow = controller.get_workflow()
            for stage in workflow['stages']:
                if stage['id'] == 'registration-form':
                    stage['title'] = 'New User Registration'
                    stage['position']['x'] = 120

            controller.update_workflow(workflow)
            ```

        Raises:
            UnknownNodeTypeError: If an invalid stage type is provided.

        Note:
            - Creates new stages that don't exist in the current project
            - Updates existing stages with new properties, positions, and metadata
            - Deletes stages that are not present in the new workflow configuration
            - Completely rebuilds all workflow transitions based on the provided data
            - Changes are persisted immediately to the project configuration
            - Use with caution as it can completely restructure the workflow
        """
        # Deduplicate transitions from frontend to prevent corrupted state
        # This handles cases where the client may send duplicate transitions
        # Rules:
        # 1. No duplicate IDs (keep first occurrence)
        # 2. No duplicate source→target pairs (keep last occurrence as an update)
        # 3. Allow bidirectional: a→b and b→a are both valid
        project = self.repos.project.load(include_disabled_stages=True)

        module_per_stage = {}
        for stage in project.workflow_stages:
            module_per_stage[stage.id] = None

        all_modules = project.get_installed_modules()
        for m in all_modules:
            for stage in m.get_stages():
                module_per_stage[stage.id] = m.name

        for stage in workflow_state_dto["stages"]:
            if stage["id"] not in module_per_stage:
                continue  # new stage
            stage_module = module_per_stage.get(stage["id"])
            if stage_module != module:
                workflow_state_dto["stages"] = [
                    s for s in workflow_state_dto["stages"] if s["id"] != stage["id"]
                ]

        for transition in workflow_state_dto["transitions"]:
            source_module = module_per_stage.get(transition["sourceStageId"])
            target_module = module_per_stage.get(transition["targetStageId"])
            if (source_module != module and source_module is not None) or (
                target_module != module and target_module is not None
            ):
                workflow_state_dto["transitions"] = [
                    t
                    for t in workflow_state_dto["transitions"]
                    if t["id"] != transition["id"]
                ]

        installed_module = None
        if module is not None:
            for m in all_modules:
                if m.name == module:
                    installed_module = m
                    project = m.get_project()
                    break

        if "transitions" in workflow_state_dto:
            original_count = len(workflow_state_dto["transitions"])

            # Use dict to track transitions by (source, target) pair
            # This ensures only one transition per direction
            transitions_by_direction = {}

            for transition in workflow_state_dto["transitions"]:
                source_id = transition.get("sourceStageId")
                target_id = transition.get("targetStageId")

                # Skip invalid transitions
                if not source_id or not target_id:
                    continue

                # Key by (source, target) to enforce one transition per direction
                # Note: (a, b) != (b, a), so bidirectional edges are allowed
                direction_key = (source_id, target_id)

                # Later occurrences replace earlier ones (update semantics)
                transitions_by_direction[direction_key] = transition

            workflow_state_dto["transitions"] = list(transitions_by_direction.values())

            # Log if duplicates were found and removed
            deduped_count = len(workflow_state_dto["transitions"])
            if original_count > deduped_count:
                from abstra_internals.logger import AbstraLogger

                removed_count = original_count - deduped_count
                AbstraLogger.warning(
                    f"Removed {removed_count} duplicate transitions from workflow update "
                    f"(had {original_count}, now {deduped_count}). "
                    f"Multiple transitions with same source→target were treated as updates."
                )

        for stage_dto in workflow_state_dto["stages"]:
            stage = project.get_stage(stage_dto["id"], include_modules=False)
            if installed_module is not None:
                absolute_updated_path = Settings.root_path / Path(
                    stage_dto["props"]["filename"]
                )
                relative_path = absolute_updated_path.relative_to(installed_module.path)
                stage_dto["props"]["filename"] = str(relative_path)
            if stage is not None:
                stage.workflow_position = (
                    stage_dto["position"]["x"],
                    stage_dto["position"]["y"],
                )
                stage.title = stage_dto["title"]
                if (
                    isinstance(stage, FormStage)
                    or isinstance(stage, ScriptStage)
                    or isinstance(stage, HookStage)
                    or isinstance(stage, JobStage)
                ):
                    stage.update({"file": f"{stage_dto['props']['filename']}"})
                    stage.file = f"{stage_dto['props']['filename']}"
                if isinstance(stage, FormStage) or isinstance(stage, HookStage):
                    stage.path = stage_dto["props"]["path"]
                if isinstance(stage, ComponentStage):
                    package_name = stage_dto.get("props", {}).get("packageName")
                    if package_name is not None:
                        stage.update({"package_name": package_name})
            elif stage_dto["type"] == "forms":
                stage = FormStage(
                    id=stage_dto["id"],
                    path=stage_dto["props"]["path"],
                    file=stage_dto["props"]["filename"],
                    title=stage_dto["title"],
                    workflow_transitions=[],
                    is_initial=False,
                    workflow_position=(
                        stage_dto["position"]["x"],
                        stage_dto["position"]["y"],
                    ),
                    notification_trigger=NotificationTrigger(
                        variable_name="assignee_emails",
                        enabled=False,
                    ),
                )
                project.forms.append(stage)
            elif stage_dto["type"] == "scripts":
                stage = ScriptStage(
                    file=stage_dto["props"]["filename"],
                    is_initial=False,
                    id=stage_dto["id"],
                    title=stage_dto["title"],
                    workflow_position=(
                        stage_dto["position"]["x"],
                        stage_dto["position"]["y"],
                    ),
                    workflow_transitions=[],
                )
                project.scripts.append(stage)
            elif stage_dto["type"] == "hooks":
                stage = HookStage(
                    id=stage_dto["id"],
                    enabled=True,
                    file=stage_dto["props"]["filename"],
                    is_initial=False,
                    path=stage_dto["props"]["path"],
                    title=stage_dto["title"],
                    workflow_position=(
                        stage_dto["position"]["x"],
                        stage_dto["position"]["y"],
                    ),
                    workflow_transitions=[],
                )
                project.hooks.append(stage)
            elif stage_dto["type"] == "jobs":
                stage = JobStage(
                    file=stage_dto["props"]["filename"],
                    id=stage_dto["id"],
                    schedule="0 * * * *",
                    title=stage_dto["title"],
                    workflow_position=(
                        stage_dto["position"]["x"],
                        stage_dto["position"]["y"],
                    ),
                    workflow_transitions=[],
                )
                project.jobs.append(stage)
            elif stage_dto["type"] == "components":
                stage = ComponentStage(
                    id=stage_dto["id"],
                    title=stage_dto["title"],
                    workflow_position=(
                        stage_dto["position"]["x"],
                        stage_dto["position"]["y"],
                    ),
                    workflow_transitions=[],
                    is_initial=False,
                    package_name=None,
                )
                project.components.append(stage)
            else:
                raise UnknownNodeTypeError(stage_dto["type"])

        # Delete removed stages
        for stage in project.workflow_stages:
            if stage.id not in [s["id"] for s in workflow_state_dto["stages"]]:
                project.delete_stage(stage.id)

        for stage in project.workflow_stages:
            stage.workflow_transitions = []
            for transition in workflow_state_dto["transitions"]:
                props = transition.get("props", {})
                task_type = props.get("taskType", None)
                if transition["sourceStageId"] == stage.id:
                    target = project.get_stage(transition["targetStageId"])
                    assert target is not None
                    stage.workflow_transitions.append(
                        WorkflowTransition(
                            id=transition["id"],
                            type="task",
                            target_id=transition["targetStageId"],
                            target_type=target.type_name + "s",
                            task_type=task_type,
                        )
                    )

        self.repos.project.save(project)

        return self.get_workflow_settings()

    def fix_positions_with_autolayout(self, stage_ids: Optional[List[str]] = None):
        """
        Fix the positions of the workflow stages in the graph.
        This method ensures that all stages have valid positions, either by
        assigning new positions or by resetting them to default values.

        Args:
            ids (List[str]): Optional list of stage IDs to fix. If None, all stages are fixed.

        Returns:
            Dict: The updated workflow configuration with fixed positions.

        Copywritings:
            Fix the positions of the workflow stages in the graph
            Fixing the positions of the workflow stages in the graph...
        """

        # Get current workflow configuration
        project = self.repos.project.load()
        stages = [
            s for s in project.workflow_stages if stage_ids is None or s.id in stage_ids
        ]

        # Run physics simulation to calculate optimal positions
        simulate_layout(stages, iterations=100)

        self.repos.project.save(project)
