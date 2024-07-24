import os

WORKERS = os.getenv("ABSTRA_WORKERS", 2)
THREADS = os.getenv("ABSTRA_THREADS", 20)
WORKER_TEMP_DIR = os.getenv("ABSTRA_WORKER_TEMP_DIR")
WORKER_CLASS = os.getenv("ABSTRA_WORKER_CLASS", "gthread")

HOST = os.getenv("ABSTRA_HOST", "localhost")
DEFAULT_PORT = os.getenv("PORT") or os.getenv("ABSTRA_SERVER_PORT")

BUILD_ID = os.getenv("ABSTRA_BUILD_ID") or "dev"
PROJECT_ID = os.getenv("ABSTRA_PROJECT_ID") or "dev-project-id"
PROJECT_URL = os.getenv("ABSTRA_PROJECT_URL")

IS_PRODUCTION = os.getenv("ABSTRA_ENVIRONMENT") == "production"
SHOW_WATERMARK = os.getenv("ABSTRA_SHOW_WATERMARK", "false") == "true"

CLOUD_API_ENDPOINT = os.getenv("CLOUD_API_ENDPOINT") or "https://cloud-api.abstra.cloud"
CLOUD_API_CLI_URL = f"{CLOUD_API_ENDPOINT}/cli"

PUBLIC_KEY = os.getenv("ABSTRA_JWT_PUBLIC_KEY_PEM")
FILES_FOLDER = os.getenv("ABSTRA_FILES_FOLDER")

SIDECAR_SHARED_TOKEN = os.getenv("ABSTRA_SIDECAR_SHARED_TOKEN", "shared")
SIDECAR_HEADERS = {"shared-token": SIDECAR_SHARED_TOKEN}
SIDECAR_URL = os.getenv("ABSTRA_SIDECAR_URL")

__WORKER_UUID_ENV__ = "ABSTRA_WORKER_UUID"


def WORKER_UUID():
    return os.getenv(__WORKER_UUID_ENV__)


def set_WORKER_UUID(worker_uuid: str):
    os.environ[__WORKER_UUID_ENV__] = worker_uuid


__SERVER_UUID_ENV__ = "ABSTRA_SERVER_UUID"


def SERVER_UUID():
    return os.getenv(__SERVER_UUID_ENV__)


def set_SERVER_UUID(server_uuid: str):
    os.environ[__SERVER_UUID_ENV__] = server_uuid


def OIDC_CLIENT_ID():
    return os.getenv("ABSTRA_OIDC_CLIENT_ID")


def OIDC_AUTHORITY():
    return os.getenv("ABSTRA_OIDC_AUTHORITY")
