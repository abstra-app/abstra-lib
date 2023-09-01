import os
from pathlib import Path
from .utils.file import CREDENTIALS_FILE, resolve_cwd


def get_credentials(root_path: Path):
    if os.getenv("ABSTRA_API_TOKEN"):
        return os.getenv("ABSTRA_API_TOKEN")

    credentials_path = Path(root_path, CREDENTIALS_FILE)
    if not credentials_path.exists():
        return None

    return credentials_path.read_text(encoding="utf-8").strip()


def delete_credentials(root_path: Path):
    credentials_path = Path(root_path, CREDENTIALS_FILE)

    if credentials_path.exists():
        credentials_path.unlink()


def set_credentials(root_path: Path, token: str):
    credentials_path = Path(root_path, CREDENTIALS_FILE)
    credentials_path.parent.mkdir(exist_ok=True)

    credentials_path.write_text(token, encoding="utf-8")


def resolve_headers(root: Path = Path(".")):
    root_path = resolve_cwd(root)
    credentials = get_credentials(root_path)

    if not credentials:
        return None

    return {"Api-Authorization": f"Bearer {credentials}"}
