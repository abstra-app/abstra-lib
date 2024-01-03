import debugpy
from ...utils import get_free_port

CONNECTED_PORT = None


def start_debugger():
    global CONNECTED_PORT
    if CONNECTED_PORT is None:
        CONNECTED_PORT = get_free_port(5678)
        debugpy.listen(CONNECTED_PORT)
    return CONNECTED_PORT


def is_client_connected():
    return debugpy.is_client_connected()
