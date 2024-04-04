import fire

from abstra_internals.interface.cli.deploy import deploy
from abstra_internals.interface.cli.editor import editor
from abstra_internals.interface.cli.version import check_latest_version
from abstra_internals.settings import SettingsController


class CLI(object):
    """
    A CLI to manage your Abstra Cloud project environment.

    usage: abstra <command> <resource> [<argument> ...] [parameters]
    """

    def deploy(self, root_dir: str = "."):
        SettingsController.set_root_path(root_dir)
        deploy()

    def version(self):
        check_latest_version()

    def editor(
        self,
        root_dir: str = ".",
        port: int = 3000,
        debug=False,
        load_dotenv=True,
    ):
        SettingsController.set_root_path(root_dir)
        SettingsController.set_server_port(port)
        editor(
            debug=debug,
            load_dotenv=load_dotenv,
        )

    def serve(
        self,
        root_dir: str = ".",
        port: int = 3000,
        debug=False,
        load_dotenv=True,
    ):
        print("This command is deprecated. Please use 'abstra editor' instead.")
        self.editor(
            root_dir=root_dir,
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
