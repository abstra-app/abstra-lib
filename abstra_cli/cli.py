import fire

from abstra_server.apps import serve

from .deploy import deploy
from .login import configure, login
from .version import check_latest_version
from . import messages
from . import checkers
from .resources import (
    Forms,
    Files,
    Packages,
    Vars,
    Hooks,
    Jobs,
    Dashes,
    Subdomains,
    Workspaces,
)


class CLI(object):
    """
    A CLI to manage your Abstra Cloud Workspace environment.

    usage: abstra <command> <resource> [<argument> ...] [parameters]
    """

    def configure(self, api_token=None):
        configure(api_token)
        checkers.configuration_check("configure", api_token)

    def login(self):
        login()
        checkers.configuration_check("login")

    def deploy(self, **kwargs):
        should_login = kwargs.get("login", False)
        if not checkers.is_logged() and should_login:
            login()

        checkers.extension_check(**kwargs)
        checkers.credentials_check("deploy", **kwargs)
        deploy(**kwargs)

    def extension(self, **kwargs):
        checkers.extension_check(**kwargs)

    def list(self, resource, **kwargs):
        checkers.credentials_check("list", resource, **kwargs)
        list_func = {
            "vars": Vars.list,
            "jobs": Jobs.list,
            "files": Files.list,
            "forms": Forms.list,
            "hooks": Hooks.list,
            "dashes": Dashes.list,
            "packages": Packages.list,
            "subdomain": Subdomains.list,
        }.get(resource, messages.not_implemented)

        list_func()

    def add(self, resource, *args, **kwargs):
        checkers.credentials_check("add", resource, *args, **kwargs)
        add_func = {
            "vars": Vars.add,
            "dash": Dashes.add,
            "dashes": Dashes.add,
            "form": Forms.add,
            "forms": Forms.add,
            "hook": Hooks.add,
            "hooks": Hooks.add,
            "job": Jobs.add,
            "jobs": Jobs.add,
            "files": Files.add,
            "packages": Packages.add,
        }.get(resource, messages.not_implemented)

        add_func(*args, **kwargs)

    def update(self, resource, *args, **kwargs):
        checkers.credentials_check("update", resource, *args, **kwargs)
        update_func = {
            "dash": Dashes.update,
            "dashes": Dashes.update,
            "form": Forms.update,
            "forms": Forms.update,
            "hook": Hooks.update,
            "hooks": Hooks.update,
            "job": Jobs.update,
            "jobs": Jobs.update,
            "subdomain": Subdomains.update,
        }.get(resource, messages.not_implemented)

        update_func(*args, **kwargs)

    def remove(self, resource, *args, **kwargs):
        checkers.credentials_check("remove", resource, *args, **kwargs)
        remove_func = {
            "vars": Vars.remove,
            "dash": Dashes.remove,
            "dashes": Dashes.remove,
            "form": Forms.remove,
            "forms": Forms.remove,
            "hook": Hooks.remove,
            "hooks": Hooks.remove,
            "job": Jobs.remove,
            "jobs": Jobs.remove,
            "files": Files.remove,
            "packages": Packages.remove,
        }.get(resource, messages.not_implemented)

        remove_func(*args, **kwargs)

    def play(self, resource, *args, **kwargs):
        checkers.credentials_check("play", resource, *args, **kwargs)
        play_func = {
            "dash": Dashes.play,
            "form": Forms.play,
            "hook": Hooks.play,
            "forms": Forms.play,
            "hooks": Hooks.play,
        }.get(resource, messages.not_implemented)

        play_func(*args, **kwargs)

    def logs(self, resource, *args, **kwargs):
        checkers.credentials_check("logs", resource, *args, **kwargs)
        logs_func = {
            "dash": Dashes.logs,
            "form": Forms.logs,
            "hooks": Hooks.logs,
            "hook": Hooks.log,
            "jobs": Jobs.logs,
            "job": Jobs.log,
            "workspace": Workspaces.logs,
        }.get(resource, messages.not_implemented)

        logs_func(*args, **kwargs)

    # Aliases
    def upload(self, *args, **kwargs):
        if not len(args):
            args = ["."]
        self.add("files", *args, **kwargs)

    def ls(self, *args, **kwargs):
        self.list("files", *args, **kwargs)

    def rm(self, *args, **kwargs):
        self.remove("files", *args, **kwargs)

    def install(self, *args, **kwargs):
        self.add("packages", *args, **kwargs)

    # Beta local app

    def serve(
        self,
        workspace_root: str = ".",
        port: int = 8002,
        debug=False,
        use_reloader=False,
    ):
        messages.serve_message(port)
        check_latest_version()

        serve(
            workspace_root=workspace_root,
            port=port,
            debug=debug,
            use_reloader=use_reloader,
        )


def _SeparateFlagArgs(args):
    try:
        index = args.index("--help")
        args = args[:index]
        return args, ["--help"]
    except ValueError:
        return args, []


def main():
    fire.core.parser.SeparateFlagArgs = _SeparateFlagArgs
    fire.Fire(CLI)


if __name__ == "__main__":
    main()
