from colorama import Fore, Style

from ...settings import Settings
from ...utils.environment import HOST


def serve_message():
    print(
        Fore.MAGENTA
        + Style.BRIGHT
        + f"\n\nABSTRA EDITOR RUNNING: http://{HOST}:{Settings.server_port}/_editor\n\n"
        + Style.RESET_ALL
    )
