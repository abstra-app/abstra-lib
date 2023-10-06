import warnings


def strict_compatible_missing_entities(data):
    if "hooks" not in data:
        data["hooks"] = []

    if "jobs" not in data:
        data["jobs"] = []

    if "forms" not in data:
        data["forms"] = []

    if "dashes" not in data:
        data["dashes"] = []

    if "scripts" not in data:
        data["scripts"] = []

    if "workspace" not in data:
        data["workspace"] = {
            "name": "Untitled Workspace",
            "sidebar": [],
        }

    if "workflow_transitions" not in data:
        data["workflow_transitions"] = []

    return data


def strict_compatible_workflow_positions(data: dict):
    # On release v{TBD} we added workflow positions to the abstra.json file.
    # By default, positions should be placed in columns
    size = 110
    forms = data["forms"]
    for idx, form in enumerate(forms):
        if "workflow_position" not in form:
            form["workflow_position"] = [0, idx * size]

    for idx, job in enumerate(data["jobs"]):
        if "workflow_position" not in job:
            job["workflow_position"] = [size, idx * size]

    for idx, hook in enumerate(data["hooks"]):
        if "workflow_position" not in hook:
            hook["workflow_position"] = [2 * size, idx * size]
    return data


def strict_compatible_is_initial(data: dict):
    for form in data["forms"]:
        if "is_initial" in form:
            del form["is_initial"]

    for job in data["jobs"]:
        if "is_initial" in job:
            del job["is_initial"]

    for hook in data["hooks"]:
        if "is_initial" in hook:
            del hook["is_initial"]

    for script in data["scripts"]:
        if "is_initial" in script:
            del script["is_initial"]

    return data


def strict_compatible_transitions(data: dict):
    for form in data["forms"]:
        if "transitions" not in form:
            form["transitions"] = []

    for job in data["jobs"]:
        if "transitions" not in job:
            job["transitions"] = []

    for hook in data["hooks"]:
        if "transitions" not in hook:
            hook["transitions"] = []
    return data


def _find_transition_target(data: dict, target_path: str, target_type: str, warn: bool):
    for form in data["forms"]:
        if form["path"] == target_path and target_type == "forms":
            return form

    for job in data["jobs"]:
        if job["identifier"] == target_path and target_type == "jobs":
            return job

    for hook in data["hooks"]:
        if hook["path"] == target_path and target_type == "hooks":
            return hook

    for script in data["scripts"]:
        if script["path"] == target_path and target_type == "scripts":
            return script

    if warn:
        warnings.warn(
            f"Could not find transition target {target_type}:{target_path}. This will be ignored, but please, make sure to remove it from your abstra.json file"
        )
    return None


def strict_compatible_remove_dangling_transitions(data: dict):
    for form in data["forms"]:
        form["transitions"] = [
            transition
            for transition in form["transitions"]
            if _find_transition_target(
                data, transition["target_path"], transition["target_type"], warn=True
            )
            is not None
        ]

    for job in data["jobs"]:
        job["transitions"] = [
            transition
            for transition in job["transitions"]
            if _find_transition_target(
                data, transition["target_path"], transition["target_type"], warn=True
            )
            is not None
        ]

    for hook in data["hooks"]:
        hook["transitions"] = [
            transition
            for transition in hook["transitions"]
            if _find_transition_target(
                data, transition["target_path"], transition["target_type"], warn=True
            )
            is not None
        ]

    return data


def strict_compatible(data: dict):
    data = strict_compatible_missing_entities(data)
    data = strict_compatible_workflow_positions(data)
    data = strict_compatible_is_initial(data)
    data = strict_compatible_transitions(data)
    data = strict_compatible_remove_dangling_transitions(data)
    return data
