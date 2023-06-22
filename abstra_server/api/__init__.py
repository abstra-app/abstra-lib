import json, pathlib, os, typing
import webbrowser
from .classes import AbstraJSON, DashJSON, FormJSON, WorkspaceJSON, HookJSON, JobJSON
from ..utils import random_id


class API:
    def __init__(self, root: str):
        cwd = pathlib.Path.cwd()
        self.root_path = (cwd / root).resolve().as_posix()
        self.abstra_json_path = (cwd / root / "abstra.json").resolve().as_posix()

        try:
            self.__get_abstra_json()
        except FileNotFoundError:
            self.init_empty()

    def init_empty(self):
        self.persist(AbstraJSON.make_empty())

    def persist(self, abstra_json: AbstraJSON):
        with open(self.abstra_json_path, "w") as f:
            json.dump(abstra_json.__dict__, f, indent=2)

    def __get_abstra_json(self) -> AbstraJSON:
        with open(self.abstra_json_path, "r") as f:
            abstra_json_content = json.load(f)
        return AbstraJSON.from_dict(abstra_json_content)

    def read_text_file(self, path) -> str:
        with open(os.path.join(self.root_path, path), "r") as f:
            return f.read()

    def get_workspace(self) -> WorkspaceJSON:
        abstra_json = self.__get_abstra_json()
        return abstra_json.workspace

    def get_page_runtime(self, path) -> typing.Union[DashJSON, FormJSON, None]:
        abstra_json = self.__get_abstra_json()

        for form in abstra_json.forms:
            if path == form.path:
                return form

        for dash in abstra_json.dashes:
            if path == dash.path:
                return dash

        for hook in abstra_json.hooks:
            if path == hook.path:
                return hook

        return None

    # Forms CLRUD

    def create_form(self) -> FormJSON:
        abstra_json = self.__get_abstra_json()

        file_name = f"new_form_{random_id()}"
        file_path = f"{file_name}.py"

        with open(os.path.join(self.root_path, file_path), "w") as f:
            f.write("""from abstra.forms import display, read


name = read("What is your name?")
display(f"Hello World, {name}")""")

        form = FormJSON(file=file_path, path=file_name, title="Untitled Form")

        abstra_json.forms.append(form)

        self.persist(abstra_json)

        return form

    def get_forms(self) -> list[FormJSON]:
        abstra_json = self.__get_abstra_json()
        return abstra_json.forms

    def get_form(self, path: str) -> typing.Optional[FormJSON]:
        abstra_json = self.__get_abstra_json()

        for form in abstra_json.forms:
            if path == form.path:
                return form

        return None

    def update_form(
        self, path: str, changes: dict[str, typing.Any]
    ) -> typing.Optional[FormJSON]:
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

    def create_dash(self) -> DashJSON:
        abstra_json = self.__get_abstra_json()

        file_name = f"new_dash_{random_id()}"
        file_path = f"{file_name}.py"

        with open(os.path.join(self.root_path, file_path), "w") as f:
            f.write("foo = 'bar'")

        dash = DashJSON(
            file=file_path,
            path=f"new-dash_{random_id()}",
            title="Untitled Dash",
            layout=dict(version="0.2", props={}, slot={}),
        )

        abstra_json.dashes.append(dash)

        self.persist(abstra_json)

        return dash

    def get_dashes(self) -> list[DashJSON]:
        abstra_json = self.__get_abstra_json()
        return abstra_json.dashes

    def get_dash(self, path: str) -> typing.Optional[DashJSON]:
        abstra_json = self.__get_abstra_json()

        for dash in abstra_json.dashes:
            if path == dash.path:
                return dash

        return None

    def update_dash(
        self, path: str, changes: dict[str, typing.Any]
    ) -> typing.Optional[DashJSON]:
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

    def create_hook(self) -> HookJSON:
        abstract_json = self.__get_abstra_json()

        file_name = f"new_hook_{random_id()}"
        file_path = f"{file_name}.py"

        with open(os.path.join(self.root_path, file_path), "w") as f:
            f.write("print('Hello World')")

        hook = HookJSON(file=file_path, path=file_name, title="Untitled Hook")

        abstract_json.hooks.append(hook)

        self.persist(abstract_json)

        return hook

    def get_hooks(self) -> list[HookJSON]:
        abstra_json = self.__get_abstra_json()
        return abstra_json.hooks

    def get_hook(self, path: str) -> typing.Optional[HookJSON]:
        abstra_json = self.__get_abstra_json()

        for hook in abstra_json.hooks:
            if path == hook.path:
                return hook

        return None

    def update_hook(
        self, path: str, changes: dict[str, typing.Any]
    ) -> typing.Optional[HookJSON]:
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

    def open_file(self, file_path: str, create_if_not_exists: bool = False):
        complete_file_path = os.path.join(self.root_path, file_path)

        if (
            create_if_not_exists
            and file_path.endswith(".py")
            and not os.path.isfile(complete_file_path)
        ):
            with open(complete_file_path, "w") as f:
                f.write("")

        webbrowser.open("file://" + complete_file_path)

    def check_file(self, file_path: str):
        complete_file_path = os.path.join(self.root_path, file_path)
        return os.path.isfile(complete_file_path)

    def update_workspace(self, changes: dict[str, typing.Any]):
        abstra_json = self.__get_abstra_json()
        abstra_json.workspace.update(changes)
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

        with open(os.path.join(self.root_path, file_path), "w") as f:
            f.write("print('Hello World')")

        job = JobJSON(
            file=file_path,
            identifier=random_id(),
            schedule="* * * * *",
            title="Untitled Job",
        )

        abstra_json.jobs.append(job)

        self.persist(abstra_json)

        return job

    def update_job(self, identifier: str, changes: dict[str, typing.Any]):
        abstra_json = self.__get_abstra_json()
        jobs = [j for j in abstra_json.jobs if j.identifier == identifier]
        if len(jobs) == 0:
            raise Exception("Job not found for identifier ", identifier)
        job = jobs[0]
        job.update(changes)

        self.persist(abstra_json)

        return job
