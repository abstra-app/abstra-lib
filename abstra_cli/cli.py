import fire, os
from abstra_server.apps import serve
from pathlib import Path
from . import messages
from .deploy import deploy
from .version import check_latest_version
from .utils.server import get_free_port

PORT = os.getenv("PORT")


class CLI(object):
    """
    A CLI to manage your Abstra Cloud Workspace environment.

    usage: abstra <command> <resource> [<argument> ...] [parameters]
    """

    def deploy(self, workspace_root: str = "."):
        deploy(workspace_root=Path(workspace_root))

    def serve(
        self,
        workspace_root: str = ".",
        port: int = 3000,
        debug=False,
        use_reloader=False,
        load_dotenv=True,
    ):
        default_port = int(PORT or port)
        free_port = get_free_port(default_port=default_port)

        messages.serve_message(free_port)
        check_latest_version()

        serve(
            workspace_root=Path(workspace_root),
            port=free_port,
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
