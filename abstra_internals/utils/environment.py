import os

HOST = os.getenv("ABSTRA_HOST", "localhost")
DEFAULT_PORT = os.getenv("PORT") or os.getenv("ABSTRA_SERVER_PORT")
ENABLE_TALISMAN = os.getenv("ABSTRA_ENABLE_TALISMAN", "false").lower() == "true"

BUILD_ID = os.getenv("ABSTRA_BUILD_ID") or "dev"
PROJECT_ID = os.getenv("ABSTRA_PROJECT_ID") or "dev-project-id"
CLIENT_ID = os.getenv("ABSTRA_CLIENT_ID") or "dev-client-id"

IS_PREVIEW = os.getenv("ABSTRA_ENVIRONMENT") != "production"
SHOW_WATERMARK = os.getenv("ABSTRA_SHOW_WATERMARK", "false") == "true"

CLOUD_API_ENDPOINT = os.getenv("CLOUD_API_ENDPOINT") or "https://cloud-api.abstra.cloud"

LOCAL_CONNECTORS_EXECUTE_URL = "https://cloud-api.abstra.cloud/cli/connectors/execute"
CONNECTORS_EXECUTE_URL = os.getenv("ABSTRA_CONNECTORS_EXECUTE_URL")

LOCAL_TABLES_EXECUTE_URL = "https://cloud-api.abstra.cloud/cli/tables/execute"
TABLES_EXECUTE_URL = os.getenv("ABSTRA_TABLES_EXECUTE_URL")

SIDECAR_SHARED_TOKEN = os.getenv("ABSTRA_SIDECAR_SHARED_TOKEN", "shared")
LOG_SERVICE_URL = os.getenv("ABSTRA_LOG_SERVICE_URL")
PUBLIC_KEY = os.getenv("ABSTRA_JWT_PUBLIC_KEY_PEM")
SIDECAR_URL = os.getenv("ABSTRA_SIDECAR_URL")
AUTHN_URL = os.getenv("ABSTRA_AUTHN_URL")

FILES_FOLDER = os.getenv("ABSTRA_FILES_FOLDER")
