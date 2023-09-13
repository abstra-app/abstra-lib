import json, os, tempfile, typing, webbrowser
from werkzeug.datastructures import FileStorage
from pathlib import Path


from ...credentials import (
    get_credentials,
    delete_credentials,
    resolve_headers,
    set_credentials,
)
from ...widgets.apis import get_random_filepath, internal_path
from ...cloud_api import get_auth_info, get_ai_messages
from ...settings import Settings
from ...cli.deploy import deploy
from ...utils import random_id
from . import classes


CLOUD_API_ENDPOINT = os.getenv("CLOUD_API_ENDPOINT", "https://cloud-api.abstra.cloud")
ABSTRA_DATABASE_URL = os.environ.get("ABSTRA_DATABASE_URL")


class API:
    def __init__(self):
        self.abstra_json_path = Settings.root_path.joinpath("abstra.json")
        if not self.abstra_json_path.exists():
            self.init_empty()

    def deploy(self):
        deploy()

    def init_empty(self):
        self.persist(classes.AbstraJSON.make_empty())

    def persist(self, abstra_json: classes.AbstraJSON):
        temp_file = Path(tempfile.mkdtemp()) / "abstra.json"

        with temp_file.open("w") as f:
            json.dump(abstra_json.__dict__, f, indent=2)
        temp_file.replace(self.abstra_json_path)

    def __get_abstra_json(self) -> classes.AbstraJSON:
        abstra_json_content = json.loads(
            self.abstra_json_path.read_text(encoding="utf-8")
        )
        return classes.AbstraJSON.from_dict(abstra_json_content)

    def get_workspace(self) -> classes.WorkspaceJSON:
        abstra_json = self.__get_abstra_json()
        return abstra_json.workspace

    def get_page_runtime(
        self, path
    ) -> typing.Union[classes.DashJSON, classes.FormJSON, None]:
        abstra_json = self.__get_abstra_json()

        for form in abstra_json.forms:
            if path == form.path:
                return form

        for dash in abstra_json.dashes:
            if path == dash.path:
                return dash

        return None

    def open_file(self, file_path: str, create_if_not_exists: bool = False):
        complete_file_path = Settings.root_path.joinpath(file_path)

        if (
            create_if_not_exists
            and file_path.endswith(".py")
            and not complete_file_path.is_file()
        ):
            complete_file_path.touch()

        webbrowser.open(complete_file_path.absolute().as_uri())

    def check_file(self, file_path: str):
        return Settings.root_path.joinpath(file_path).is_file()

    def update_workspace(self, changes: typing.Dict[str, typing.Any]):
        abstra_json = self.__get_abstra_json()
        abstra_json.workspace.update(changes, abstra_json.dashes, abstra_json.forms)
        self.persist(abstra_json)
        return abstra_json.workspace

    # Forms CLRUD

    def create_form(self) -> classes.FormJSON:
        abstra_json = self.__get_abstra_json()

        file_name = f"new_form_{random_id()}"
        file = f"{file_name}.py"
        txt = """from abstra.forms import display, read
name = read("What is your name?")
display(f"Hello World, {name}")"""

        Settings.root_path.joinpath(file).write_text(encoding="utf-8", data=txt)
        form = classes.FormJSON(file=file, path=file_name, title="Untitled Form")

        abstra_json.forms.append(form)

        self.persist(abstra_json)

        return form

    def get_forms(self) -> typing.List[classes.FormJSON]:
        abstra_json = self.__get_abstra_json()
        return abstra_json.forms

    def get_form(self, path: str) -> typing.Optional[classes.FormJSON]:
        abstra_json = self.__get_abstra_json()

        for form in abstra_json.forms:
            if path == form.path:
                return form

        return None

    def update_form(
        self, path: str, changes: typing.Dict[str, typing.Any]
    ) -> typing.Optional[classes.FormJSON]:
        abstra_json = self.__get_abstra_json()
        forms = [f for f in abstra_json.forms if f.path == path]
        if len(forms) == 0:
            raise Exception("Form not found for path ", path)
        form = forms[0]
        form.update(changes)

        self.persist(abstra_json)

        return form

    def delete_form(self, path: str):
        abstra_json = self.__get_abstra_json()
        forms = abstra_json.forms
        abstra_json.forms = [f for f in forms if f.path != path]

        self.persist(abstra_json)

    # Dashes CLRUD

    def create_dash(self) -> classes.DashJSON:
        abstra_json = self.__get_abstra_json()

        file_name = f"new_dash_{random_id()}"
        file = f"{file_name}.py"
        txt = "foo = 'bar'"

        Settings.root_path.joinpath(file).write_text(encoding="utf-8", data=txt)
        dash = classes.DashJSON(
            file=file,
            path=f"new-dash_{random_id()}",
            title="Untitled Dash",
            layout=classes.LayoutJSON(
                version="0.2", props={}, slot=classes.SlotJSON({})
            ),
        )

        abstra_json.dashes.append(dash)

        self.persist(abstra_json)

        return dash

    def get_dashes(self) -> typing.List[classes.DashJSON]:
        abstra_json = self.__get_abstra_json()
        return abstra_json.dashes

    def get_dash(self, path: str) -> typing.Optional[classes.DashJSON]:
        abstra_json = self.__get_abstra_json()

        for dash in abstra_json.dashes:
            if path == dash.path:
                return dash

        return None

    def update_dash(
        self, path: str, changes: typing.Dict[str, typing.Any]
    ) -> typing.Optional[classes.DashJSON]:
        abstra_json = self.__get_abstra_json()
        dashes = [d for d in abstra_json.dashes if d.path == path]
        if len(dashes) == 0:
            raise Exception("Dash not found for path ", path)
        dash = dashes[0]
        dash.update(changes)

        self.persist(abstra_json)

        return dash

    def delete_dash(self, path: str):
        abstra_json = self.__get_abstra_json()
        dashes = abstra_json.dashes
        abstra_json.dashes = [d for d in dashes if d.path != path]

        self.persist(abstra_json)

    # Hooks CLRUD

    def create_hook(self) -> classes.HookJSON:
        abstract_json = self.__get_abstra_json()

        file_name = f"new_hook_{random_id()}"
        file = f"{file_name}.py"
        txt = "print('Hello World')"

        Settings.root_path.joinpath(file).write_text(encoding="utf-8", data=txt)
        hook = classes.HookJSON(file=file, path=file_name, title="Untitled Hook")

        abstract_json.hooks.append(hook)

        self.persist(abstract_json)

        return hook

    def get_hooks(self) -> typing.List[classes.HookJSON]:
        abstra_json = self.__get_abstra_json()
        return abstra_json.hooks

    def get_hook(self, path: str) -> typing.Optional[classes.HookJSON]:
        abstra_json = self.__get_abstra_json()

        for hook in abstra_json.hooks:
            if path == hook.path:
                return hook

        return None

    def update_hook(
        self, path: str, changes: typing.Dict[str, typing.Any]
    ) -> typing.Optional[classes.HookJSON]:
        abstra_json = self.__get_abstra_json()
        hooks = [h for h in abstra_json.hooks if h.path == path]
        if len(hooks) == 0:
            raise Exception("Hook not found for path ", path)
        hook = hooks[0]
        hook.update(changes)
        self.persist(abstra_json)

        return hook

    def delete_hook(self, path: str):
        abstra_json = self.__get_abstra_json()
        hooks = abstra_json.hooks
        abstra_json.hooks = [h for h in hooks if h.path != path]

        self.persist(abstra_json)

    # Jobs CLRUD

    def get_jobs(self):
        abstra_json = self.__get_abstra_json()
        return abstra_json.jobs

    def get_job(self, identifier: str):
        abstra_json = self.__get_abstra_json()
        for job in abstra_json.jobs:
            if identifier == job.identifier:
                return job
        return None

    def create_job(self):
        abstra_json = self.__get_abstra_json()

        file_name = f"new_job_{random_id()}"
        file = f"{file_name}.py"
        txt = "print('Hello World')"

        Settings.root_path.joinpath(file).write_text(encoding="utf-8", data=txt)
        job = classes.JobJSON(
            file=file,
            identifier=random_id(),
            schedule="0 * * * *",
            title="Untitled Job",
        )

        abstra_json.jobs.append(job)

        self.persist(abstra_json)

        return job

    def update_job(self, identifier: str, changes: typing.Dict[str, typing.Any]):
        abstra_json = self.__get_abstra_json()
        jobs = [j for j in abstra_json.jobs if j.identifier == identifier]
        if len(jobs) == 0:
            raise Exception("Job not found for identifier ", identifier)
        job = jobs[0]
        job.update(changes)

        self.persist(abstra_json)

        return job

    def delete_job(self, identifier: str):
        abstra_json = self.__get_abstra_json()
        jobs = abstra_json.jobs
        abstra_json.jobs = [j for j in jobs if j.identifier != identifier]

        self.persist(abstra_json)

    # Login

    def get_credentials(self):
        return get_credentials()

    def get_login(self):
        headers = resolve_headers()
        if not headers:
            return {"logged": False, "reason": "NO_API_TOKEN"}
        return get_auth_info(headers)

    def create_login(self, token):
        set_credentials(token)
        return self.get_login()

    def delete_login(self):
        delete_credentials()
        return self.get_login()

    # AI
    def send_ai_message(self, messages, runtime):
        headers = resolve_headers()
        yield from get_ai_messages(messages, runtime, headers)

    # files
    def save_file(self, file: FileStorage, filename: str):
        name, path = get_random_filepath(filename)
        file.save(path)
        return name

    def get_file(self, path: str) -> str:
        return internal_path(path)
