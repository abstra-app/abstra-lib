import sys
from progress.bar import FillingSquaresBar
from colorama import init, Fore, Back, Style
from . import utils as utils


def serve_message(port):
    print(
        Fore.MAGENTA
        + Style.BRIGHT
        + f"\n\nABSTRA EDITOR RUNNING: http://localhost:{port}/_editor\n\n"
        + Style.RESET_ALL
    )


def read_credentials():
    credentials = input(f"API Token: ")
    if not credentials:
        print("No API token configured")
        sys.exit(1)
    return credentials


def show_progress(message, max) -> FillingSquaresBar:
    return FillingSquaresBar(message, suffix="%(percent)d%%", max=max)


def print_files(files):
    files.sort(key=lambda x: x["Key"])
    max_d = utils.digits(max([f["Size"] for f in files]))
    for file in files:
        print(
            f"{utils.format_digits(file['Size'], max_d)} - {file['LastModified']}: {file['Key']}"
        )


def print_vars(vars):
    vars.sort(key=lambda x: x["name"])
    for var in vars:
        print(f"{var['name']}={var['value']}")


def print_packages(packages):
    packages.sort(key=lambda x: x["name"])
    for pkg in packages:
        print(f"{pkg['name']}{'==' + pkg['version'] if pkg['version'] else ''}")


def print_forms(forms):
    forms.sort(key=lambda x: x["path"])
    max_path = max([len(f["path"]) for f in forms])
    max_title = max([len(f["title"]) for f in forms])
    for form in forms:
        enabled = "enabled" if form["script"]["enabled"] else "disabled"
        print(
            f"{utils.format_digits(form['path'], max_path)} - {utils.format_digits(form['title'], max_title)} ({enabled})"
        )


def print_dashes(dashes):
    dashes.sort(key=lambda x: x["path"])
    max_path = max([len(f["path"]) for f in dashes])
    max_title = max([len(f["title"]) for f in dashes])
    for dash in dashes:
        enabled = "enabled" if dash["script"]["enabled"] else "disabled"
        print(
            f"{utils.format_digits(dash['path'], max_path)} - {utils.format_digits(dash['title'], max_title)} ({enabled})"
        )


def print_hooks(hooks):
    hooks.sort(key=lambda x: x["path"])
    max_path = max([len(f["path"]) for f in hooks])
    max_title = max([len(f["title"]) for f in hooks])
    for hook in hooks:
        enabled = "enabled" if hook["script"]["enabled"] else "disabled"
        print(
            f"{utils.format_digits(hook['path'], max_path)} - {utils.format_digits(hook['title'], max_title)} ({enabled})"
        )


def print_jobs(jobs):
    jobs.sort(key=lambda x: x["identifier"])
    max_idt = max([len(f["identifier"]) for f in jobs])
    max_title = max([len(f["title"]) for f in jobs])
    max_schedule = max([len(f["schedule"]) for f in jobs])
    for j in jobs:
        enabled = "enabled" if j["script"]["enabled"] else "disabled"
        print(
            f"{utils.format_digits(j['identifier'], max_idt)} - {utils.format_digits(j['schedule'], max_schedule)} - {utils.format_digits(j['title'], max_title)} ({enabled})"
        )


def print_subdomains(subdomain):
    print(f"workspace subdomain: {subdomain}")


def print_logs(logs):
    print(logs)


def created_message(resource: str, form: str):
    print(f"{resource} created successfully: {form}")


def upserted_message(resource: str, form: str):
    print(f"{resource} upserted successfully: {form}")


def create_failed(resource: str):
    print(f"Failed to create {resource}")


def updated_message(resource: str, form: str):
    print(f"{resource} updated successfully: {form}")


def deleted_message(resource: str, form: str):
    print(f"{resource} deleted successfully: {form}")


def update_failed(resource: str, form: str):
    print(f"Failed to update {resource}: {form}")


def not_implemented(*args, **kwargs):
    print("Invalid command")


def required_argument(argument):
    print(f"required argument: [{argument}]")


def required_parameter(parameter):
    print(f"required parameter: --{parameter} [{parameter}]")


def invalid_variable(argument):
    print(f"invalid variable: {argument}")


def invalid_parameter(parameter):
    print(f"invalid parameter: --{parameter} [{parameter}]")


def invalid_flag_parameter_value(parameter):
    print(
        f"invalid parameter value: --{parameter} [{parameter}] value must be true or false"
    )


def invalid_non_flag_parameter_value(parameter):
    print(f"invalid parameter value: --{parameter} [{parameter}] value must be string")


def invalid_background_parameter_value():
    print(
        f"""
        invalid parameter value: --background [background] value must be a color or image path.\n
        Allowed image extensions are: [.png, .jpeg, .jpg, .svg]"""
    )


def duplicate_variable(argument):
    print(f"duplicate variable: {argument}")


def code_and_file_not_allowed():
    print("you can set either code or file parameters, but not both.")


def missing_parameters_to_update(resource_name, resource):
    print(f"missing parameters to be updated of {resource_name} {resource}")


def conflict_name(resource_name, resource):
    print(f"Conflict error: {resource_name} already exists for {resource}")


def file_path_does_not_exists_message(path):
    print(f"file path not found: {path}")


def upsert_without_identifier(idt):
    print(f"Failed to upsert without identifier: {idt}")


def error_upload_background_message(path):
    print(f"Some error happened during background upload: {path}")


def form_url(url):
    print(f"Opening URL {url}")


def dash_url(url):
    print(f"Opening URL {url}")


def hook_url(url, method):
    print(f"Making {method} request to URL {url}")


def invalid_credentials():
    print("Invalid credentials")


def error_opening_browser(url):
    print(f"Failed to auto open browser.\nOpen in your browser: {url}")


def waiting_for_api_token():
    print("Waiting for API token...")


def failed_to_get_api_token():
    print("Failed to get API token")


def no_variables():
    print("No environment variables added")


def no_packages():
    print("No packages added")


def no_files():
    print("No files added")


def start_dashes_deploy():
    print("Deploying dashboards...")


def no_dashes_to_deploy():
    print("No dashboards to deploy")


def start_forms_deploy():
    print("Deploying forms...")


def no_forms_to_deploy():
    print("No forms to deploy")


def start_hooks_deploy():
    print("Deploying hooks...")


def no_hooks_to_deploy():
    print("No hooks to deploy")


def start_jobs_deploy():
    print("Deploying jobs...")


def no_jobs_to_deploy():
    print("No jobs to deploy")


def start_files_deploy():
    print("Deploying files...")


def no_files_to_deploy():
    print("No files to deploy")


def start_packages_deploy():
    print("Deploying packages...")


def no_packages_to_deploy():
    print("No packages to deploy")


def start_vars_deploy():
    print("Deploying variables...")


def no_vars_to_deploy():
    print("No variables to deploy")


def error_getting_workspace_id():
    print("Failed to get workspace id")


def workspace_url(workspace_subdomain):
    print(f"Your workspace: https://{workspace_subdomain}.abstra.run")


def subdomain_helper():
    print(
        "You can set the subdomain of your workspace using `abstra update subdomain [new-subdomain]`"
    )
