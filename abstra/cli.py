import fire

from abstra_internals.cli.deploy import deploy
from abstra_internals.cli.serve import serve
from abstra_internals.cli.version import check_latest_version


class CLI(object):
    """
    A CLI to manage your Abstra Cloud Workspace environment.

    usage: abstra <command> <resource> [<argument> ...] [parameters]
    """

    def deploy(self, workspace_root: str = "."):
        deploy(workspace_root=workspace_root)

    def version(self):
        check_latest_version()

    def serve(
        self,
        workspace_root: str = ".",
        port: int = 3000,
        debug=False,
        use_reloader=False,
        load_dotenv=True,
    ):
        serve(
            workspace_root=workspace_root,
            port=port,
            debug=debug,
            use_reloader=use_reloader,
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
    fire.core.parser.SeparateFlagArgs = _SeparateFlagArgs
    fire.Fire(CLI)


if __name__ == "__main__":
    main()
