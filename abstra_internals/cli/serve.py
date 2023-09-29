import logging

from .messages import serve_message
from ..server.apps import serve_local
from .version import check_latest_version


def serve(
    debug: bool,
    use_reloader: bool,
    load_dotenv: bool,
):
    if not debug:
        log = logging.getLogger("werkzeug")
        log.setLevel(logging.WARNING)

    serve_message()
    check_latest_version()

    serve_local(
        debug=debug,
        use_reloader=use_reloader,
        load_dotenv=load_dotenv,
    )
