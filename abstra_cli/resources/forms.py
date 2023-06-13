import webbrowser, sys, json
from ..resources.resources import Resource
from .. import messages
from .. import utils
from .. import apis


NAME_PARAMETERS = ["name", "title"]
PATH_PARAMETERS = ["path"]
CODE_PARAMETERS = ["file", "f", "code", "c"]
BACKGROUND_PARAMETERS = ["background"]
OTHER_PARAMETERS = [
    "start_message",
    "end_message",
    "error_message",
    "timeout_mesage",
    "main_color",
    "start_button_text",
    "restart_button_text",
    "logo_url",
    "log_messages",
    "font_color",
    "welcome_title",
    "brand_name",
]
NON_FLAG_PARAMETERS = (
    NAME_PARAMETERS
    + PATH_PARAMETERS
    + CODE_PARAMETERS
    + BACKGROUND_PARAMETERS
    + OTHER_PARAMETERS
)
FLAG_PARAMETERS = ["auto_start", "allow_restart", "enabled"]
FORM_PARAMETERS = FLAG_PARAMETERS + NON_FLAG_PARAMETERS


def check_valid_parameters(parameters: dict) -> None:
    for param in parameters.keys():
        if param not in FORM_PARAMETERS:
            messages.invalid_parameter(param)
            sys.exit(1)
    for param, value in parameters.items():
        if param in NON_FLAG_PARAMETERS and value in [True, False]:
            messages.invalid_non_flag_parameter_value(param)
            sys.exit(1)


def evaluate_parameter_name(parameters: dict, use_default=True) -> dict:
    name = parameters.get("name") or parameters.get("n") or parameters.get("title")
    if not name and not use_default:
        return {}
    return {"name": name or "New Form"}


def evaluate_parameter_path(parameters: dict) -> dict:
    path = parameters.get("path")
    if not path:
        return {}
    return {"path": path}


def evaluate_parameters_file_and_code(parameters: dict, use_default=True) -> dict:
    EMPTY_FORM = "from hackerforms import *"
    file = parameters.get("file") or parameters.get("f")
    code = parameters.get("code") or parameters.get("c")

    if file and code:
        messages.code_and_file_not_allowed()
        sys.exit(1)

    if file:
        with open(file, "r") as f:
            return {"code": f.read()}

    if code:
        return {"code": code}

    return {"code": EMPTY_FORM} if use_default else {}


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


class Forms(Resource):
    @staticmethod
    def list():
        forms = apis.list_workspace_forms()
        messages.print_forms(forms)

    @staticmethod
    def add(*args, **kwargs):
        upsert = kwargs.pop("upsert", False)
        path = kwargs.get("path")
        if upsert and not path:
            messages.upsert_without_identifier("path")
            sys.exit(1)

        check_valid_parameters(kwargs)

        form_data = {
            **evaluate_parameter_name(kwargs),
            **evaluate_parameter_path(kwargs),
            **evaluate_parameters_file_and_code(kwargs),
            **evaluate_flag_parameters(kwargs),
            **evaluate_other_parameters(kwargs),
            **evaluate_background_parameter_value(kwargs),
        }

        if form_data:
            try:
                if upsert:
                    apis.upsert_workspace_form(form_data)
                    messages.upserted_message("Form", path)
                else:
                    path = apis.add_workspace_form(form_data)["path"]
                    messages.created_message("Form", path)
            except Exception as e:
                print(e)
                messages.create_failed("Form")
                sys.exit(1)

    @staticmethod
    def update(*args, **kwargs):
        if not len(args):
            messages.required_argument("path")
            sys.exit(1)
        path = args[0]

        if not len(kwargs):
            messages.missing_parameters_to_update("form", path)
            sys.exit(1)

        check_valid_parameters(kwargs)

        form_data = {
            **evaluate_parameter_name(kwargs, use_default=False),
            **evaluate_parameter_path(kwargs),
            **evaluate_parameters_file_and_code(kwargs, use_default=False),
            **evaluate_flag_parameters(kwargs),
            **evaluate_other_parameters(kwargs),
            **evaluate_background_parameter_value(kwargs),
        }

        if form_data:
            try:
                apis.update_workspace_form(path, form_data)
                messages.updated_message("Form", path)
            except Exception as e:
                print(e)
                messages.update_failed("Form", path)
                sys.exit(1)

    @staticmethod
    def remove(*args, **kwargs):
        if not len(args):
            messages.required_argument("path")
            sys.exit(1)

        path = args[0]
        apis.delete_workspace_form(path)
        messages.deleted_message("Form", path)

    @staticmethod
    def play(*args, **kwargs):
        if not len(args):
            messages.required_argument("path")
            sys.exit(1)

        path = args[0]
        subdomain_name = apis.get_subdomain()
        url = utils.get_prod_form_url(subdomain_name, path)
        messages.form_url(url)
        webbrowser.open(url)

    @staticmethod
    def logs(*args, **kwargs):
        id = kwargs.get("id", None)
        limit = kwargs.get("limit", 20)
        offset = kwargs.get("offset", 0)

        if limit == 0:
            limit = None
        if id is None:
            logs = apis.forms.list_logs(limit=limit, offset=offset)
        else:
            logs = apis.forms.list_logs_by_id(id, limit=limit, offset=offset)

        serialized_logs = json.dumps(logs, default=str, indent=4)
        messages.print_logs(serialized_logs)
