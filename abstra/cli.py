import fire
from abstra_internals.interface.cli.serve import serve
from abstra_internals.interface.cli.deploy import deploy
from abstra_internals.interface.cli.version import check_latest_version
from abstra_internals.settings import SettingsController


class CLI(object):
    """
    A CLI to manage your Abstra Cloud Workspace environment.

    usage: abstra <command> <resource> [<argument> ...] [parameters]
    """

    def deploy(self, workspace_root: str = "."):
        SettingsController.set_root_path(workspace_root)
        deploy()

    def version(self):
        check_latest_version()

    def serve(
        self,
        workspace_root: str = ".",
        port: int = 3000,
        debug=False,
        load_dotenv=True,
    ):
        SettingsController.set_root_path(workspace_root)
        SettingsController.set_server_port(port)
        serve(
            debug=debug,
            load_dotenv=load_dotenv,
        )


def _SeparateFlagArgs(args):
    try:
        index = args.index("--help")
        args = args[:index]
        return args, ["--help"]
    except ValueError:
        return args, []


def main():
    fire.core.parser.SeparateFlagArgs = _SeparateFlagArgs  # type: ignore
    fire.Fire(CLI)


if __name__ == "__main__":
    main()
