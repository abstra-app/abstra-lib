import webbrowser, sys, os, json
from glob import glob

from ..resources.resources import Resource
from .. import messages as messages
from .. import utils as utils
from .. import apis as apis


NAME_PARAMETERS = ["name", "title"]
PATH_PARAMETERS = ["path"]
CODE_PARAMETERS = ["code", "c"]
BACKGROUND_PARAMETERS = ["background"]
OTHER_PARAMETERS = [
    "main_color",
    "font_family",
    "logo_url",
    "log_messages",
    "brand_name",
]

LAYOUT_PARAMETERS = ["layout"]
NON_FLAG_PARAMETERS = (
    NAME_PARAMETERS
    + PATH_PARAMETERS
    + CODE_PARAMETERS
    + BACKGROUND_PARAMETERS
    + OTHER_PARAMETERS
    + LAYOUT_PARAMETERS
)
FLAG_PARAMETERS = ["enabled"]
DASH_PARAMETERS = FLAG_PARAMETERS + NON_FLAG_PARAMETERS


def check_valid_parameters(parameters: dict) -> None:
    for param in parameters.keys():
        if param not in DASH_PARAMETERS:
            messages.invalid_parameter(param)
            sys.exit(1)
    for param, value in parameters.items():
        if param in NON_FLAG_PARAMETERS and value in [True, False]:
            messages.invalid_non_flag_parameter_value(param)
            sys.exit(1)


def evaluate_parameter_title(parameters: dict, use_default=True) -> dict:
    title = parameters.get("name") or parameters.get("n") or parameters.get("title")
    if not title and not use_default:
        return {}
    return {"title": title or "New Dash"}


def evaluate_optional_parameter(parameter_name: str, parameters: dict) -> dict:
    parameter_value = parameters.get(parameter_name)
    if parameter_value is None:
        return {}
    return {parameter_name: parameter_value}


def evaluate_parameters_code(parameters: dict) -> dict:
    code = parameters.get("code") or parameters.get("c")

    if not code:
        print("Code is required")
        sys.exit(1)

    return {"code_file_path": code}


def evaluate_parameter_layout(parameters: dict) -> dict:
    layout = parameters.get("layout")
    if not layout:
        print("Layout is required")
        sys.exit(1)

    return {"layout": layout}


def evaluate_flag_parameters(parameters: dict) -> dict:
    evaluated_params = {}
    for param, value in parameters.items():
        if param in FLAG_PARAMETERS:
            if value == "true" or value == True:
                evaluated_params[param] = True
                continue
            if value == "false" or value == False:
                evaluated_params[param] = False
                continue

            messages.invalid_flag_parameter_value(param)
            sys.exit(1)
    return evaluated_params


def evaluate_other_parameters(parameters: dict) -> dict:
    other_parameters = {}
    for param, value in parameters.items():
        if param in OTHER_PARAMETERS:
            other_parameters[param] = value

    return other_parameters


def evaluate_background_parameter_value(parameters: dict) -> dict:
    background = parameters.get("background", None)
    if not background:
        return {}

    if utils.check_color(background):
        return {"theme": background}

    if utils.check_is_url(background):
        return {"theme": background}

    if not utils.path_exists(background):
        messages.file_path_does_not_exists_message(background)
        sys.exit(1)

    if utils.check_is_image_path(background):
        filename = utils.slugify_filename(background)
        try:
            with open(background, "rb") as f:
                file = f.read()
                url = apis.asset_upload(filename, file)
                return {"theme": url}
        except Exception as e:
            messages.error_upload_background_message(background)
            sys.exit(1)

    messages.invalid_background_parameter_value()
    sys.exit(1)


def upsert_dash_data_from_kwargs(kwargs: dict) -> dict:
    return {
        **evaluate_parameters_code(kwargs),
        **evaluate_flag_parameters(kwargs),
        **evaluate_other_parameters(kwargs),
        **evaluate_background_parameter_value(kwargs),
        **evaluate_parameter_layout(kwargs),
        **evaluate_optional_parameter("path", kwargs),
        **evaluate_optional_parameter("main_color", kwargs),
        **evaluate_optional_parameter("font_family", kwargs),
        **evaluate_optional_parameter("logo_url", kwargs),
        **evaluate_optional_parameter("brand_name", kwargs),
    }


class Dashes(Resource):
    @staticmethod
    def list():
        dashes = apis.list_workspace_dashes()
        messages.print_dashes(dashes)

    @staticmethod
    def add(*args, **kwargs):
        upsert = kwargs.pop("upsert", False)
        path = kwargs.get("path")
        if upsert and path is None:
            messages.upsert_without_identifier("path")
            sys.exit(1)

        check_valid_parameters(kwargs)

        dash_data = {
            **evaluate_parameter_title(kwargs),
            **upsert_dash_data_from_kwargs(kwargs),
        }

        if dash_data:
            try:
                if upsert:
                    apis.upsert_workspace_dash(dash_data)
                    messages.upserted_message("Dash", path or "main")
                else:
                    path = apis.add_workspace_dash(dash_data)["path"]
                    messages.created_message("Dash", path or "main")
            except Exception as e:
                print(e)
                messages.create_failed("Dash")
                sys.exit(1)

    @staticmethod
    def update(*args, **kwargs):
        if not len(args):
            messages.required_argument("path")
            sys.exit(1)
        path = args[0]

        if not len(kwargs):
            messages.missing_parameters_to_update("dash", path)
            sys.exit(1)

        check_valid_parameters(kwargs)

        dash_data = {
            **evaluate_parameter_title(kwargs, use_default=False),
            **upsert_dash_data_from_kwargs(kwargs),
        }

        if dash_data:
            try:
                apis.update_workspace_dash(path, dash_data)
                messages.updated_message("Dash", path)
            except Exception as e:
                print(e)
                messages.update_failed("Dash", path)
                sys.exit(1)

    @staticmethod
    def remove(*args, **kwargs):
        if not len(args):
            messages.required_argument("path")
            sys.exit(1)

        path = args[0]
        apis.delete_workspace_dash(path)
        messages.deleted_message("Dash", path)

    @staticmethod
    def play(*args, **kwargs):
        if not len(args):
            messages.required_argument("path")
            sys.exit(1)

        path = args[0]
        subdomain_name = apis.get_subdomain()
        url = utils.get_prod_dash_url(subdomain_name, path)
        messages.dash_url(url)
        webbrowser.open(url)

    @staticmethod
    def map_deploy_data(abstra_json_path: str, abstra_json_data: dict):
        workspace_data = abstra_json_data.get("workspace")
        if not workspace_data:
            return []

        abstra_json_dir = os.path.dirname(abstra_json_path)
        base_path = utils.remove_suffix(workspace_data.get("base_path", ""), "/")

        dash_files = glob(
            os.path.join(abstra_json_dir, "**", "*.abstradash.json"),
            recursive=True,
        )
        dash_props = []
        for dash_file_path in dash_files:
            common_path = dash_file_path.replace(".abstradash.json", "")
            route = os.path.relpath(
                common_path, os.path.join(abstra_json_dir, ".")
            ).replace("\\", "/")

            route = utils.remove_prefix(route, f"{base_path}/")

            script_path = common_path + ".py"
            dash_json_data = json.load(open(dash_file_path, "r"))
            prop = {
                "title": dash_json_data.get("title") or route,
                "layout": dash_json_data["layout"],
                "background": workspace_data.get("theme"),
                "main_color": workspace_data.get("main_color"),
                "font_family": workspace_data.get("font_family"),
                "brand_name": workspace_data.get("brand_name"),
                "logo_url": workspace_data.get("logo_url"),
                "path": route if route != "main" else "",
                "code": script_path,
            }
            dash_props.append(prop)
        return dash_props

    @staticmethod
    def logs(*args, **kwargs):
        path = kwargs.pop("path", None)
        limit = kwargs.pop("limit", 20)
        offset = kwargs.pop("offset", 0)

        if limit == 0:
            limit = None
        if path is None:
            logs = apis.dashes.list_logs(limit=limit, offset=offset)
        else:
            logs = apis.dashes.list_logs_by_path(path, limit=limit, offset=offset)

        serialized_logs = json.dumps(logs, default=str, indent=4)
        messages.print_logs(serialized_logs)
