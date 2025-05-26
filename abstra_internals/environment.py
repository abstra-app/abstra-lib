import os

DEFAULT_LOGLEVEL = "WARNING"
LOGLEVEL = lambda: os.getenv("ABSTRA_LOGLEVEL", DEFAULT_LOGLEVEL)  # noqa: E731
NOISY_LOGLEVEL = lambda: os.getenv("ABSTRA_NOISY_LOGLEVEL", DEFAULT_LOGLEVEL)  # noqa: E731

PROCESS_LOGFORMAT = "[%(asctime)s][%(levelname)s][%(name)s][%(process)d]%(message)s"
DEFAULT_LOGFORMAT = "[%(asctime)s][%(levelname)s][%(name)s] %(message)s"
LOGFORMAT = lambda: os.getenv("ABSTRA_LOGFORMAT", DEFAULT_LOGFORMAT)  # noqa: E731

WORKERS = os.getenv("ABSTRA_WORKERS", 2)
THREADS = os.getenv("ABSTRA_THREADS", 20)
WORKER_TEMP_DIR = os.getenv("ABSTRA_WORKER_TEMP_DIR")
WORKER_CLASS = os.getenv("ABSTRA_WORKER_CLASS", "gthread")

HOST = os.getenv("ABSTRA_HOST", "localhost")
DEFAULT_PORT = os.getenv("PORT") or os.getenv("ABSTRA_SERVER_PORT")

BUILD_ID = os.getenv("ABSTRA_BUILD_ID") or "dev"
PROJECT_ID = os.getenv("ABSTRA_PROJECT_ID") or "dev-project-id"
PROJECT_URL = os.getenv("ABSTRA_PROJECT_URL")

EMAIL_JWT_AUDIENCE = f"abstra:email:{PROJECT_ID}"

IS_PRODUCTION = os.getenv("ABSTRA_ENVIRONMENT") == "production"
SHOW_WATERMARK = os.getenv("ABSTRA_SHOW_WATERMARK", "false") == "true"

DISABLE_STDIO_PATCH = os.getenv("ABSTRA_DISABLE_STDIO_PATCH", "false") == "true"

CLOUD_API_ENDPOINT = os.getenv("CLOUD_API_ENDPOINT") or "https://cloud-api.abstra.cloud"
CLOUD_API_CLI_URL = f"{CLOUD_API_ENDPOINT}/cli"
WAITING_ROOM_URL = os.getenv("ABSTRA_WAITING_ROOM_URL") or ""

PUBLIC_KEY = os.getenv("ABSTRA_JWT_PUBLIC_KEY_PEM")
FILES_FOLDER = os.getenv("ABSTRA_FILES_FOLDER")
DISABLED_STAGES_FOLDER = os.getenv("ABSTRA_DISABLED_STAGES_FOLDER")

SIDECAR_SHARED_TOKEN = os.getenv("ABSTRA_SIDECAR_SHARED_TOKEN", "shared")
SIDECAR_HEADERS = {"shared-token": SIDECAR_SHARED_TOKEN}
SIDECAR_URL = os.getenv("ABSTRA_SIDECAR_URL")

EDITOR_MODE = os.getenv("ABSTRA_EDITOR_MODE") or "local"

RABBITMQ_EXECUTION_QUEUE = os.getenv("ABSTRA_RABBITMQ_EXECUTION_QUEUE", "executions")
RABBITMQ_DEFAUT_EXCHANGE = os.getenv("ABSTRA_RABBITMQ_DEFAUT_EXCHANGE", "")
RABBITMQ_CONNECTION_URI = os.getenv("ABSTRA_RABBITMQ_CONNECTION_URI")
RABBITMQ_QUEUE_RECONNECT_BACKOFF_TIME = int(
    os.getenv("ABSTRA_RABBITMQ_QUEUE_RECONNECT_BACKOFF_TIME", 10)
)
RABBITMQ_QUEUE_RECONNECT_ATTEMPTS = int(
    os.getenv("ABSTRA_RABBITMQ_QUEUE_RECONNECT_ATTEMPTS", 3)
)
# Used for the RabbitMQ and Local queues
EXECUTION_QUEUE_CONCURRENCY = int(os.getenv("ABSTRA_RABBITMQ_QUEUE_CONCURRENCY", 2))

OIDC_CLIENT_ID = lambda: os.getenv("ABSTRA_OIDC_CLIENT_ID")  # noqa: E731
OIDC_AUTHORITY = lambda: os.getenv("ABSTRA_OIDC_AUTHORITY")  # noqa: E731

__WORKER_UUID_ENV__ = "ABSTRA_WORKER_UUID"
WORKER_UUID = lambda: os.getenv(__WORKER_UUID_ENV__)  # noqa: E731

REQUEST_TIMEOUT = int(os.getenv("ABSTRA_REQUEST_TIMEOUT", 300))


def set_WORKER_UUID(worker_uuid: str):
    os.environ[__WORKER_UUID_ENV__] = worker_uuid


__SERVER_UUID_ENV__ = "ABSTRA_SERVER_UUID"
SERVER_UUID = lambda: os.getenv(__SERVER_UUID_ENV__)  # noqa: E731


def set_SERVER_UUID(server_uuid: str):
    os.environ[__SERVER_UUID_ENV__] = server_uuid
