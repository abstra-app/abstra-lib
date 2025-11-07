from typing import Optional

import fire

from abstra_internals.consts.filepaths import ABSTRA_TABLES_FILEPATH
from abstra_internals.controllers.git import GitController
from abstra_internals.interface.cli.components import install, uninstall
from abstra_internals.interface.cli.deploy import deploy_without_git
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

    def deploy(self, root_dir: Optional[str] = None, use_git=False):
        SettingsController.set_root_path(root_dir or select_dir())
        if use_git:
            git_controller = GitController()
            git_controller.push_and_deploy()
        else:
            deploy_without_git()

    def editor(
        self,
        root_dir: Optional[str] = None,
        port: int = 3000,
        headless=False,
        verbose=False,
    ):
        SettingsController.set_root_path(root_dir or select_dir())
        SettingsController.set_server_port(port)
        editor(headless=headless, verbose=verbose)

    def serve(self, root_dir: Optional[str] = None, port: int = 3000, headless=False):
        print("This command is deprecated. Please use 'abstra editor' instead.")
        self.editor(root_dir=root_dir, port=port, headless=headless)

    def dump(self, root_dir: str = "."):
        SettingsController.set_root_path(root_dir)
        dump()

    def restore(
        self,
        root_dir: str = ".",
        dry_run: bool = False,
        file: str = ABSTRA_TABLES_FILEPATH,
    ):
        SettingsController.set_root_path(root_dir)
        restore(dry_run=dry_run, file=file)

    def install(self, github_url: str, root_dir: Optional[str] = None):
        install(github_url, root_dir)

    def uninstall(self, component_name: str, root_dir: Optional[str] = None):
        uninstall(component_name, root_dir)


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

__all__ = ["CLI"]
