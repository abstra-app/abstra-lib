from typing import TypedDict, Dict, Optional
import flask
from ...repositories.project.project import (
    ConditionStage,
    IteratorStage,
    NotificationTrigger,
    Project,
    ProjectRepository,
    FormStage,
    JobStage,
    HookStage,
    ScriptStage,
    WorkflowTransition,
    WorkflowStage,
)
from ...usage import usage
from .main import MainController, UnknownNodeTypeError


# workflow visual editor
def get_workflow():
    project = ProjectRepository.load()
    return _make_workflow_dto(project)


class StageDTO(TypedDict):
    id: str
    type: str
    title: str
    position: Dict[str, float]
    props: Dict[str, Optional[str]]


def make_stage_dto(stage: WorkflowStage) -> StageDTO:
    filename = None
    if isinstance(stage, (HookStage, ScriptStage, FormStage, JobStage)):
        filename = stage.file
    variable_name = None
    if isinstance(stage, (IteratorStage, ConditionStage)):
        variable_name = stage.variable_name
    path = None
    if isinstance(stage, (FormStage, HookStage)):
        path = stage.path
    return StageDTO(
        id=stage.id,
        type=stage.type_name + "s",
        title=stage.title,
        position=dict(
            x=stage.workflow_position[0],
            y=stage.workflow_position[1],
        ),
        props={
            "filename": filename,
            "variableName": variable_name,
            "path": path,
        },
    )


def _make_workflow_dto(project: Project):
    stages = []
    for stage in project.workflow_stages:
        stage_dto = make_stage_dto(stage)

        if isinstance(stage, IteratorStage) or isinstance(stage, ConditionStage):
            stage_dto["props"]["variableName"] = stage.variable_name

        if (
            isinstance(stage, FormStage)
            or isinstance(stage, ScriptStage)
            or isinstance(stage, HookStage)
            or isinstance(stage, JobStage)
        ):
            stage_dto["props"]["filename"] = stage.file

        if isinstance(stage, FormStage) or isinstance(stage, HookStage):
            stage_dto["props"]["path"] = stage.path

        stages.append(stage_dto)

    transitions = []
    for stage in project.workflow_stages:
        for transition in stage.workflow_transitions:
            props: dict = {"conditionValue": None}

            if transition.condition_value is not None:
                props["conditionValue"] = transition.condition_value

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


def update_workflow(workflow_state_dto: dict):
    project = ProjectRepository.load()

    for stage_dto in workflow_state_dto["stages"]:
        stage = project.get_stage(stage_dto["id"])
        if stage is not None:
            stage.workflow_position = (
                stage_dto["position"]["x"],
                stage_dto["position"]["y"],
            )
            stage.title = stage_dto["title"]
            if isinstance(stage, IteratorStage) or isinstance(stage, ConditionStage):
                stage.variable_name = stage_dto["props"]["variableName"]
            if (
                isinstance(stage, FormStage)
                or isinstance(stage, ScriptStage)
                or isinstance(stage, HookStage)
                or isinstance(stage, JobStage)
            ):
                stage.file = f"{stage_dto['props']['filename']}"
            if isinstance(stage, FormStage) or isinstance(stage, HookStage):
                stage.path = stage_dto["props"]["path"]
        elif stage_dto["type"] == "forms":
            stage = FormStage(
                id=stage_dto["id"],
                path=stage_dto["props"]["path"],
                file=f"{stage_dto['props']['filename']}",
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
                file=f"{stage_dto['props']['filename']}",
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
                file=f"{stage_dto['props']['filename']}",
                is_initial=False,
                path=stage_dto["id"],
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
                file=f"{stage_dto['props']['filename']}",
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
        elif stage_dto["type"] == "iterators":
            props = stage_dto.get("props", {})
            variable_name = props.get("variableName", "")

            stage = IteratorStage(
                id=stage_dto["id"],
                title=stage_dto["title"],
                workflow_position=(
                    stage_dto["position"]["x"],
                    stage_dto["position"]["y"],
                ),
                variable_name=variable_name,
                workflow_transitions=[],
            )
            project.add_stage(stage)
        elif stage_dto["type"] == "conditions":
            props = stage_dto.get("props", {})
            variable_name = props.get("variableName", "")

            stage = ConditionStage(
                id=stage_dto["id"],
                title=stage_dto["title"],
                workflow_position=(
                    stage_dto["position"]["x"],
                    stage_dto["position"]["y"],
                ),
                variable_name=variable_name,
                workflow_transitions=[],
            )
            project.add_stage(stage)
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
            condition_value = props.get("conditionValue", None)
            if transition["sourceStageId"] == stage.id:
                target = project.get_stage(transition["targetStageId"])
                assert target is not None
                stage.workflow_transitions.append(
                    WorkflowTransition(
                        id=transition["id"],
                        type=transition["type"],
                        target_id=transition["targetStageId"],
                        target_type=target.type_name + "s",
                        condition_value=condition_value,
                    )
                )

    ProjectRepository.save(project)

    return _make_workflow_dto(project)


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_workflows", __name__)

    # 1s pooling in this route
    @bp.get("/")
    def _load_workflow():
        try:
            return get_workflow()
        except Exception as e:
            return str(e), 500

    @bp.put("/")
    @usage
    def _update_workflow():
        # try:
        payload = flask.request.json
        if payload is None:
            raise Exception("No payload found")
        new_state = update_workflow(payload)
        return new_state
        # except Exception as e:
        #     return str(e), 500

    return bp
