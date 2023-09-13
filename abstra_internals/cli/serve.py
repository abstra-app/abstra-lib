import os, logging

from ..utils import get_free_port
from .messages import serve_message
from ..server.apps import serve_local
from .version import check_latest_version

PORT = os.getenv("PORT")


def serve(
    port: int,
    debug: bool,
    use_reloader: bool,
    load_dotenv: bool,
):
    default_port = int(PORT or port)
    free_port = get_free_port(default_port=default_port)

    if not debug:
        log = logging.getLogger("werkzeug")
        log.setLevel(logging.WARNING)

    serve_message(free_port)
    check_latest_version()

    serve_local(
        port=free_port,
        debug=debug,
        use_reloader=use_reloader,
        load_dotenv=load_dotenv,
    )
