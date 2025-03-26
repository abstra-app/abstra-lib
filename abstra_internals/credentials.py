import os
from threading import Lock

from abstra_internals.settings import Settings
from abstra_internals.utils.dot_abstra import CREDENTIALS_FILE

credentials_lock = Lock()


def get_credentials():
    if os.getenv("ABSTRA_API_TOKEN"):
        return os.getenv("ABSTRA_API_TOKEN")

    with credentials_lock:
        credentials_path = Settings.root_path.joinpath(CREDENTIALS_FILE)

        if not credentials_path.exists():
            return None

        with open(credentials_path, "r", encoding="utf-8") as f:
            return f.read().strip()


def delete_credentials():
    with credentials_lock:
        credentials_path = Settings.root_path.joinpath(CREDENTIALS_FILE)

        if credentials_path.exists():
            credentials_path.unlink()


def set_credentials(token: str):
    with credentials_lock:
        credentials_path = Settings.root_path.joinpath(CREDENTIALS_FILE)
        credentials_path.parent.mkdir(exist_ok=True)

        credentials_path.write_text(token, encoding="utf-8")


def resolve_headers():
    credentials = get_credentials()

    if not credentials:
        return None

    return {"Api-Authorization": f"Bearer {credentials}"}
