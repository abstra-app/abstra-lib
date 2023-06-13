import json, sys
from .resources import (
    Forms,
    Files,
    Packages,
    Vars,
    Hooks,
    Jobs,
    Dashes,
    Workspaces,
)

from . import messages


ACCEPTED_KEYS = ["files", "workspace", "forms", "hooks", "jobs", "packages", "vars"]


def get_abstra_json_path(parameters: dict) -> str:
    return parameters.get("file") or parameters.get("f") or "abstra.json"


def evaluate_parameters_file(parameters: dict) -> dict:
    file = get_abstra_json_path(parameters)

    data = None
    try:
        with open(file) as f:
            data = json.loads(f.read())
            if not isinstance(data, dict):
                print("Bad data")
                sys.exit(1)
    except:
        print("Deploy file not found or not correct format")
        sys.exit(1)

    for key in data.keys():
        if key not in ACCEPTED_KEYS:
            print(f"Extra data in deploy file {file} not accepted")
            sys.exit(1)

    return data, file


def deploy(**kwargs):
    abstra_json_data, abstra_json_path = evaluate_parameters_file(kwargs)

    dashes = Dashes.map_deploy_data(abstra_json_path, abstra_json_data)
    if len(dashes):
        messages.start_dashes_deploy()
        for dash_props in dashes:
            Dashes.add(upsert=True, **dash_props)

        remote_dashes_files = Files.list_dashes_files(".")
        local_dashes_files = [
            d["code"].replace(".py", ".abstradash.json") for d in dashes
        ]
        deleted_dashes_files = [
            f for f in remote_dashes_files if f not in local_dashes_files
        ]

        for deleted_dash_file in deleted_dashes_files:
            deleted_dash_path = deleted_dash_file.replace(
                ".abstradash.json", ""
            ).replace(f"./", "")
            Dashes.remove(deleted_dash_path)
            Files.remove(
                deleted_dash_file, deleted_dash_file.replace(".abstradash.json", ".py")
            )
    else:
        messages.no_dashes_to_deploy()
        pass

    forms = abstra_json_data.pop("forms", None)
    if forms:
        messages.start_forms_deploy()
        for form in forms:
            Forms.add(upsert=True, **form)
    else:
        messages.no_forms_to_deploy()
        pass

    hooks = abstra_json_data.pop("hooks", None)
    if hooks:
        messages.start_hooks_deploy()
        for hook in hooks:
            Hooks.add(upsert=True, **hook)
    else:
        messages.no_hooks_to_deploy()
        pass

    jobs = abstra_json_data.pop("jobs", None)
    if jobs:
        messages.start_jobs_deploy()
        for job in jobs:
            Jobs.add(upsert=True, **job)
    else:
        messages.no_jobs_to_deploy()
        pass

    files = abstra_json_data.pop("files", ["."])  # review security implications
    if files:
        messages.start_files_deploy()
        if isinstance(files, dict):
            Files.add(**files)
        elif isinstance(files, list):
            Files.add(*files)
    else:
        messages.no_files_to_deploy()
        pass

    packages = abstra_json_data.pop("packages", {"requirement": "requirements.txt"})
    if packages:
        messages.start_packages_deploy()
        if isinstance(packages, dict):
            Packages.add(**packages)
        elif isinstance(packages, list):
            Packages.add(*packages)
    else:
        messages.no_packages_to_deploy()
        pass

    vars = abstra_json_data.pop("vars", None)
    if vars:
        messages.start_vars_deploy()
        if isinstance(vars, dict):
            Vars.add(**vars)
        elif isinstance(vars, list):
            Vars.add(*vars)
    else:
        messages.no_vars_to_deploy()
        pass

    workspace_deploy_data = Workspaces.map_deploy_data(abstra_json_data)
    if workspace_deploy_data:
        Workspaces.update(**workspace_deploy_data)
