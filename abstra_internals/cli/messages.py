import sys
from colorama import Fore, Style


def serve_message(port):
    print(
        Fore.MAGENTA
        + Style.BRIGHT
        + f"\n\nABSTRA EDITOR RUNNING: http://localhost:{port}/_editor\n\n"
        + Style.RESET_ALL
    )


def read_credentials():
    credentials = input(f"API Token: ")
    if not credentials:
        print("No API token configured")
        sys.exit(1)
    return credentials
