from ....repositories.stage_run import StageRun
from ....repositories.project.project import ActionStage


def action_strategy(stage: ActionStage, stage_run: StageRun, transition_type: str):
    if transition_type == "forms:abandoned" and not stage.is_initial:
        return [dict(stage=stage_run.stage, data=stage_run.data)]

    next_stage_ids = [
        t.target_id for t in stage.workflow_transitions if t.type == transition_type
    ]

    return [dict(stage=stage_id, data=stage_run.data) for stage_id in next_stage_ids]
