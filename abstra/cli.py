import fire
from abstra_internals.interface.cli.editor import editor
from abstra_internals.interface.cli.deploy import deploy
from abstra_internals.interface.cli.version import check_latest_version
from abstra_internals.settings import SettingsController


class CLI(object):
    """
    A CLI to manage your Abstra Cloud project environment.

    usage: abstra <command> <resource> [<argument> ...] [parameters]
    """

    def deploy(self, project_root: str = "."):
        SettingsController.set_root_path(project_root)
        deploy()

    def version(self):
        check_latest_version()

    def editor(
        self,
        project_root: str = ".",
        port: int = 3000,
        debug=False,
        load_dotenv=True,
    ):
        SettingsController.set_root_path(project_root)
        SettingsController.set_server_port(port)
        editor(
            debug=debug,
            load_dotenv=load_dotenv,
        )

    def serve(
        self,
        project_root: str = ".",
        port: int = 3000,
        debug=False,
        load_dotenv=True,
    ):
        print("This command is deprecated. Please use 'abstra editor' instead.")
        self.editor(
            project_root=project_root,
            port=port,
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
