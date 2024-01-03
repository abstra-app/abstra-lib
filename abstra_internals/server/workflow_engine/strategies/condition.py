from ....repositories.stage_run import StageRun
from ....repositories.project.project import ConditionStage, WorkflowTransition
from warnings import warn


def match(workflow_transition: WorkflowTransition, variable_value):
    if workflow_transition.type != "conditions:patternMatched":
        return False
    if type(variable_value) == int or type(variable_value) == float:
        return workflow_transition.condition_value == str(variable_value)
    if type(variable_value) == str:
        return workflow_transition.condition_value == variable_value
    elif variable_value is None:
        return (
            workflow_transition.condition_value is None
            or workflow_transition.condition_value == ""
        )
    else:
        warn(f"Unknown type {type(variable_value)} for variable_value")
        return False


def condition_strategy(
    stage: ConditionStage,
    stage_run: StageRun,
    transition_type="conditions:patternMatched",
):
    variable_value = stage_run.data.get(stage.variable_name)

    next_stage_ids = [
        t.target_id for t in stage.workflow_transitions if match(t, variable_value)
    ]

    return [dict(stage=stage_id, data=stage_run.data) for stage_id in next_stage_ids]
