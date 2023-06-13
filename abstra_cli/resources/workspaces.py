import json, sys

from .. import messages
from ..utils import parse_timestamp, sampling
from ..resources.resources import Resource
from ..apis import (
    jobs as jobs_api,
    hooks as hooks_api,
    forms as forms_api,
    dashes as dashes_api,
    workspaces as workspaces_api,
)

SIDEBAR_PARAMETERS = ["sidebar"]
NON_FLAG_PARAMETERS = SIDEBAR_PARAMETERS


def check_valid_parameters(parameters: dict) -> None:
    for param, value in parameters.items():
        if param in NON_FLAG_PARAMETERS and value in [True, False]:
            messages.invalid_non_flag_parameter_value(param)
            sys.exit(1)


def evaluate_optional_parameter(parameter_name: str, parameters: dict) -> dict:
    parameter_value = parameters.get(parameter_name)
    if not parameter_value:
        return {}
    return {parameter_name: parameter_value}


class Workspaces(Resource):
    @staticmethod
    def logs(*args, **kwargs):
        limit = kwargs.get("limit", None)
        offset = kwargs.get("offset", 0)

        job_logs = jobs_api.list_logs(limit, offset)["logs"]
        hook_logs = hooks_api.list_logs(limit, offset)["logs"]
        form_logs = forms_api.list_logs(limit, offset)["logs"]
        dash_logs = dashes_api.list_logs(limit, offset)["logs"]

        logs = job_logs + hook_logs + form_logs + dash_logs
        logs.sort(key=lambda x: parse_timestamp(x["created_at"]), reverse=True)
        logs = sampling(logs, limit, offset)
        serialized_logs = json.dumps(logs, default=str, indent=4)
        messages.print_logs(serialized_logs)

    @staticmethod
    def update(*args, **kwargs):
        wid = workspaces_api.get_workspace_id()
        if not wid:
            messages.error_getting_workspace_id()
            sys.exit(1)

        check_valid_parameters(kwargs)

        workspace_data = {
            **evaluate_optional_parameter("sidebar", kwargs),
        }

        if workspace_data:
            try:
                workspaces_api.update_workspace(wid, workspace_data)
                subdomain_name = workspaces_api.get_workspace_subdomain(wid)
                messages.updated_message("Workspace", wid)
                messages.workspace_url(subdomain_name)
                messages.subdomain_helper()
            except Exception as e:
                print(e)
                messages.update_failed("Workspace", wid)
                sys.exit(1)

    @staticmethod
    def map_deploy_data(abstra_json_data: dict):
        workspace_data = abstra_json_data.get("workspace")
        if not workspace_data:
            return {}

        return {
            "sidebar": abstra_json_data["workspace"].get("sidebar", None),
        }
