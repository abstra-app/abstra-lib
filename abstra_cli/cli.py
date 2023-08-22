import logging, os, fire, pathlib
from abstra_server.apps import serve

from . import messages
from .deploy import deploy
from .utils.server import get_free_port
from .version import check_latest_version
from .tables import upload, download, list_backups

PORT = os.getenv("PORT")


class Tables(object):
    # tables command always assume that the cwd is the workspace root

    def upload(self, f: str = "db.sqlite"):
        upload(db_path=pathlib.Path(f))

    def download(self):
        download()

    def list_backups(self):
        list_backups()


class CLI(object):
    """
    A CLI to manage your Abstra Cloud Workspace environment.

    usage: abstra <command> <resource> [<argument> ...] [parameters]
    """

    def __init__(self):
        self.tables = Tables()

    def deploy(self, workspace_root: str = "."):
        deploy(workspace_root=pathlib.Path(workspace_root))

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
        default_port = int(PORT or port)
        free_port = get_free_port(default_port=default_port)

        if not debug:
            log = logging.getLogger("werkzeug")
            log.setLevel(logging.WARNING)

        messages.serve_message(free_port)
        check_latest_version()

        serve(
            workspace_root=pathlib.Path(workspace_root),
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
