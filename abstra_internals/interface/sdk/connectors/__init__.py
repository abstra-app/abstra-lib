from abstra_internals.controllers.sdk_context import SDKContextStore
from abstra_internals.repositories.connectors import AccessTokenDTO

from .google_credentials import create_abstra_google_credentials


def get_access_token(name: str) -> AccessTokenDTO:
    context = SDKContextStore.get_by_thread()
    return context.repositories.connectors.get_access_token(name)


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
