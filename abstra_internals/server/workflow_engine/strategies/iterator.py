from ....repositories.stage_run import StageRun
from ....repositories.project.project import IteratorStage


def iterator_strategy(
    stage: IteratorStage, stage_run: StageRun, transition_type="iterators:each"
):
    variable_value = stage_run.data.get(stage.variable_name)

    if not isinstance(variable_value, list):
        return []

    next_stage_ids = [
        t.target_id for t in stage.workflow_transitions if t.type == transition_type
    ]

    return [
        dict(stage=stage_id, data={"item": item})
        for item in variable_value
        for stage_id in next_stage_ids
    ]
