from abstra_internals.controllers.execution_store import ExecutionStore
from abstra_internals.interface.sdk.connectors.google_credentials import (
    create_abstra_google_credentials,
)
from abstra_internals.repositories.connectors import AccessTokenDTO


def get_access_token(name: str) -> AccessTokenDTO:
    sdk_ctx = ExecutionStore.get_by_thread()
    return sdk_ctx.repositories.connectors.get_access_token(name)


def get_gsheets_credentials(connection_name: str = "google-sheets"):
    return create_abstra_google_credentials(connection_name)


def get_gdrive_credentials(connection_name: str = "google-drive"):
    return create_abstra_google_credentials(connection_name)


def get_gmail_credentials(connection_name: str = "gmail"):
    return create_abstra_google_credentials(connection_name)


def get_bigquery_credentials(connection_name: str = "google-bigquery"):
    return create_abstra_google_credentials(connection_name)


def get_google_cal_credentials(connection_name: str = "google-calendar"):
    return create_abstra_google_credentials(connection_name)
