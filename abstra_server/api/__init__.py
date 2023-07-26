import json, os, typing, webbrowser, requests, tempfile
from werkzeug.datastructures import FileStorage
from abstra.tables import get_db
from abstra_cli.deploy import deploy
from abstra.widgets.apis import get_random_filepath, internal_path
from abstra_cli.credentials import get_credentials, delete_credentials, set_credentials
from pathlib import Path
from . import classes
from ..utils import random_id


CLOUD_API_ENDPOINT = os.getenv("CLOUD_API_ENDPOINT", "https://cloud-api.abstra.cloud")
ABSTRA_DATABASE_URL = os.environ.get("ABSTRA_DATABASE_URL")


class API:
    def __init__(self, root: Path):
        root.mkdir(exist_ok=True)
        self.root_path = root
        self.abstra_json_path = Path(self.root_path, "abstra.json")
        if ABSTRA_DATABASE_URL:
            db_path = Path(ABSTRA_DATABASE_URL)
        else:
            db_path = Path(self.root_path, "db.sqlite3")

        self.db = get_db(db_path.as_uri())

        try:
            self.__get_abstra_json()
        except FileNotFoundError:
            self.init_empty()

    def deploy(self):
        deploy(self.root_path)

    def init_empty(self):
        self.persist(classes.AbstraJSON.make_empty())

    def persist(self, abstra_json: classes.AbstraJSON):
        with open(self.abstra_json_path, "w", encoding="utf-8") as f:
            json.dump(abstra_json.__dict__, f, indent=2)

    def __get_abstra_json(self) -> classes.AbstraJSON:
        abstra_json_content = json.loads(
            self.abstra_json_path.read_text(encoding="utf-8")
        )
        return classes.AbstraJSON.from_dict(abstra_json_content)

    def read_text_file(self, path) -> str:
        return self.root_path.joinpath(path).read_text(encoding="utf-8")

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

    # Forms CLRUD

    def create_form(self) -> classes.FormJSON:
        abstra_json = self.__get_abstra_json()

        file_name = f"new_form_{random_id()}"
        file_path = f"{file_name}.py"

        txt = """from abstra.forms import display, read
name = read("What is your name?")
display(f"Hello World, {name}")"""
        self.root_path.joinpath(file_path).write_text(encoding="utf-8", data=txt)

        form = classes.FormJSON(file=file_path, path=file_name, title="Untitled Form")

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
        form.update(changes, workspace_root=self.root_path)

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
        file_path = f"{file_name}.py"

        txt = "foo = 'bar'"
        self.root_path.joinpath(file_path).write_text(encoding="utf-8", data=txt)

        dash = classes.DashJSON(
            file=file_path,
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
        dash.update(changes, workspace_root=self.root_path)

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
        file_path = f"{file_name}.py"

        txt = "print('Hello World')"
        self.root_path.joinpath(file_path).write_text(encoding="utf-8", data=txt)

        hook = classes.HookJSON(file=file_path, path=file_name, title="Untitled Hook")

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
        hook.update(changes, workspace_root=self.root_path)
        self.persist(abstra_json)

        return hook

    def delete_hook(self, path: str):
        abstra_json = self.__get_abstra_json()
        hooks = abstra_json.hooks
        abstra_json.hooks = [h for h in hooks if h.path != path]

        self.persist(abstra_json)

    def open_file(self, file_path: str, create_if_not_exists: bool = False):
        complete_file_path = Path(self.root_path, file_path)

        if (
            create_if_not_exists
            and file_path.endswith(".py")
            and not complete_file_path.is_file()
        ):
            complete_file_path.touch()

        webbrowser.open(complete_file_path.as_uri())

    def check_file(self, file_path: str):
        complete_file_path = Path(self.root_path, file_path)
        return complete_file_path.is_file()

    def update_workspace(self, changes: typing.Dict[str, typing.Any]):
        abstra_json = self.__get_abstra_json()
        abstra_json.workspace.update(changes, abstra_json.dashes, abstra_json.forms)
        self.persist(abstra_json)
        return abstra_json.workspace

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
        file_path = f"{file_name}.py"

        txt = "print('Hello World')"
        self.root_path.joinpath(file_path).write_text(encoding="utf-8", data=txt)

        job = classes.JobJSON(
            file=file_path,
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
        job.update(changes, workspace_root=self.root_path)

        self.persist(abstra_json)

        return job

    def delete_job(self, identifier: str):
        abstra_json = self.__get_abstra_json()
        jobs = abstra_json.jobs
        abstra_json.jobs = [j for j in jobs if j.identifier != identifier]

        self.persist(abstra_json)

    # Login

    def get_login(self):
        credentials = get_credentials(self.root_path)
        if not credentials:
            return {"logged": False, "reason": "NO_API_TOKEN"}

        url = f"{CLOUD_API_ENDPOINT}/cli/auth-info"
        headers = {"Api-Authorization": f"Bearer {credentials}"}
        try:
            response = requests.get(url, headers=headers)
        except:
            return {"logged": False, "reason": "CONNECTION_ERROR"}
        print(response.text)
        if response.ok:
            response_json = response.json()
            return {
                "logged": True,
                "author_id": response_json["authorId"],
                "project_id": response_json["projectId"],
            }
        else:
            return {"logged": False, "reason": "INVALID_API_TOKEN"}

    def create_login(self, token):
        set_credentials(self.root_path, token)
        return self.get_login()

    def delete_login(self):
        delete_credentials(self.root_path)
        return self.get_login()

    # AI
    def send_ai_message(self, messages, runtime):
        credentials = get_credentials(self.root_path)

        if not credentials:
            return None

        url = f"{CLOUD_API_ENDPOINT}/cli/ai/messages"
        body = {"messages": messages, "runtime": runtime}
        headers = {"Api-Authorization": f"Bearer {credentials}"}

        return requests.post(
            url, headers=headers, json=body, stream=True
        ).iter_content()

    # files
    def save_file(self, file: FileStorage):
        name, path = get_random_filepath()
        file.save(path)
        return name

    def get_file(self, path: str) -> str:
        return internal_path(path)
