import os, sys
from .utils import ABSTRA_FOLDER, CREDENTIALS_FILE

overwriten_auth_headers = {}


def overwrite_auth_headers(headers):
    if not isinstance(headers, dict):
        raise ValueError("headers must be a dict")
    global overwriten_auth_headers
    overwriten_auth_headers = headers


def create_abstra_dir():
    if not os.path.exists(ABSTRA_FOLDER):
        os.makedirs(ABSTRA_FOLDER)


def save_credentials(api_token: str):
    create_abstra_dir()
    with open(CREDENTIALS_FILE, "w") as f:
        f.write(api_token.strip())


def get_credentials():
    if os.getenv("ABSTRA_API_TOKEN"):
        return os.getenv("ABSTRA_API_TOKEN")

    if not os.path.exists(CREDENTIALS_FILE):
        return None

    with open(CREDENTIALS_FILE) as f:
        return f.read().strip()


def get_auth_headers(api_token=None):
    if overwriten_auth_headers:
        return {"content-type": "application/json", **overwriten_auth_headers}

    api_token = api_token or get_credentials()
    if api_token:
        return {"content-type": "application/json", "API-Authorization": api_token}

    print("No API token found. Please login with `abstra login`")
    return None
