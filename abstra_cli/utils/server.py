import socket
from contextlib import closing


def get_free_port(default_port=3000):
    for port in range(default_port, default_port + 10):
        with closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
            port_is_available = sock.connect_ex(("localhost", port)) != 0
            if port_is_available:
                return port
