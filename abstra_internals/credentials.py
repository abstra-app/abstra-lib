import os
from .settings import Settings
from .utils.dot_abstra import CREDENTIALS_FILE


def get_credentials():
    if os.getenv("ABSTRA_API_TOKEN"):
        return os.getenv("ABSTRA_API_TOKEN")

    credentials_path = Settings.root_path.joinpath(CREDENTIALS_FILE)
    if not credentials_path.exists():
        return None

    return credentials_path.read_text(encoding="utf-8").strip()


def delete_credentials():
    credentials_path = Settings.root_path.joinpath(CREDENTIALS_FILE)

    if credentials_path.exists():
        credentials_path.unlink()


def set_credentials(token: str):
    credentials_path = Settings.root_path.joinpath(CREDENTIALS_FILE)
    credentials_path.parent.mkdir(exist_ok=True)

    credentials_path.write_text(token, encoding="utf-8")


def resolve_headers():
    credentials = get_credentials()

    if not credentials:
        return None

    return {"Api-Authorization": f"Bearer {credentials}"}
