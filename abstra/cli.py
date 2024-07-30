from typing import Optional

import fire

from abstra_internals.interface.cli.deploy import deploy
from abstra_internals.interface.cli.dir import select_dir
from abstra_internals.interface.cli.editor import editor
from abstra_internals.interface.cli.tables import dump, restore
from abstra_internals.interface.cli.version import version
from abstra_internals.settings import SettingsController


class CLI(object):
    """
    A CLI to manage your Abstra Cloud project environment.

    usage: abstra <command> <resource> [<argument> ...] [parameters]
    """

    def version(self):
        version()

    def deploy(self, root_dir: Optional[str] = None):
        SettingsController.set_root_path(root_dir or select_dir())
        deploy()

    def editor(
        self,
        root_dir: Optional[str] = None,
        port: int = 3000,
        debug=False,
        load_dotenv=True,
        reloading=False,
    ):
        SettingsController.set_root_path(root_dir or select_dir())
        SettingsController.set_server_port(port)
        editor(
            debug=debug,
            load_dotenv=load_dotenv,
            reloading=reloading,
        )

    def serve(
        self,
        root_dir: Optional[str] = None,
        port: int = 3000,
        debug=False,
        load_dotenv=True,
        reloading=False,
    ):
        print("This command is deprecated. Please use 'abstra editor' instead.")
        self.editor(
            root_dir=root_dir,
            port=port,
            debug=debug,
            load_dotenv=load_dotenv,
            reloading=reloading,
        )

    def dump(self, root_dir: str = "."):
        SettingsController.set_root_path(root_dir)
        dump()

    def restore(self, root_dir: str = "."):
        SettingsController.set_root_path(root_dir)
        restore()


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
