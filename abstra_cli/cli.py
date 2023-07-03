import fire
from .utils.server import get_free_port
from abstra_server.apps import serve
from .deploy import deploy
from typing import Optional
from .version import check_latest_version
from . import messages


class CLI(object):
    """
    A CLI to manage your Abstra Cloud Workspace environment.

    usage: abstra <command> <resource> [<argument> ...] [parameters]
    """

    def deploy(self, workspace_root: str = "."):
        deploy(workspace_root=workspace_root)

    def serve(
        self,
        workspace_root: str = ".",
        port: Optional[int] = None,
        debug=False,
        use_reloader=False,
    ):
        messages.serve_message(port)
        check_latest_version()

        if port is None:
            port = get_free_port()

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
