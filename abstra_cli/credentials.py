import os
from pathlib import Path
from .utils import CREDENTIALS_FILE


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

    print(str(credentials_path))
    credentials_path.write_text(token, encoding="utf-8")
