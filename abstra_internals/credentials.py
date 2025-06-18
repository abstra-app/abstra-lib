import os
from threading import Lock

from abstra_internals.consts.filepaths import CREDENTIALS_FILEPATH
from abstra_internals.settings import Settings

credentials_lock = Lock()


def get_credentials():
    token = os.getenv("ABSTRA_API_TOKEN")
    if token:
        return token

    with credentials_lock:
        credentials_path = Settings.root_path.joinpath(CREDENTIALS_FILEPATH)

        if not credentials_path.exists():
            return None

        with open(credentials_path, "r", encoding="utf-8") as f:
            return f.read().strip()


def delete_credentials():
    with credentials_lock:
        credentials_path = Settings.root_path.joinpath(CREDENTIALS_FILEPATH)

        if credentials_path.exists():
            credentials_path.unlink()


def set_credentials(token: str):
    with credentials_lock:
        credentials_path = Settings.root_path.joinpath(CREDENTIALS_FILEPATH)
        credentials_path.parent.mkdir(exist_ok=True)

        credentials_path.write_text(token, encoding="utf-8")


def resolve_headers():
    credentials = get_credentials()

    if not credentials:
        return None

    return {"Api-Authorization": f"Bearer {credentials}"}


def resolve_headers_raise():
    headers = resolve_headers()
    if headers is None:
        raise Exception("You must be logged in to execute this operation")
    return headers
