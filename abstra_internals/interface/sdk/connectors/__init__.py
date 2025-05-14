from abstra_internals.controllers.sdk.sdk_context import SDKContextStore
from abstra_internals.repositories.connectors import AccessTokenDTO

from .google_credentials import create_abstra_google_credentials


def get_access_token(name: str) -> AccessTokenDTO:
    """
    Retrieve an access token by its name.

    Args:
        name (str): The name of the access token to retrieve.

    Returns:
        AccessTokenDTO: The access token data transfer object.
    """
    context = SDKContextStore.get_by_thread()
    return context.repositories.connectors.get_access_token(name)


def get_gsheets_credentials(connection_name: str = "google-sheets"):
    """
    Get Google Sheets credentials.

    Args:
        connection_name (str): The name of the Google Sheets connection. Defaults to "google-sheets".

    Returns:
        AbstraGoogleCredentials: Credentials object for Google Sheets authentication.
    """
    return create_abstra_google_credentials(connection_name)


def get_gdrive_credentials(connection_name: str = "google-drive"):
    """
    Get Google Drive credentials.

    Args:
        connection_name (str): The name of the Google Drive connection. Defaults to "google-drive".

    Returns:
        AbstraGoogleCredentials: Credentials object for Google Drive authentication.
    """
    return create_abstra_google_credentials(connection_name)


def get_gmail_credentials(connection_name: str = "gmail"):
    """
    Get Gmail credentials.

    Args:
        connection_name (str): The name of the Gmail connection. Defaults to "gmail".

    Returns:
        AbstraGoogleCredentials: Credentials object for Gmail authentication.
    """
    return create_abstra_google_credentials(connection_name)


def get_bigquery_credentials(connection_name: str = "google-bigquery"):
    """
    Get Google BigQuery credentials.

    Args:
        connection_name (str): The name of the BigQuery connection. Defaults to "google-bigquery".

    Returns:
        AbstraGoogleCredentials: Credentials object for Google BigQuery authentication.
    """
    return create_abstra_google_credentials(connection_name)


def get_google_cal_credentials(connection_name: str = "google-calendar"):
    """
    Get Google Calendar credentials.

    Args:
        connection_name (str): The name of the Google Calendar connection. Defaults to "google-calendar".

    Returns:
        AbstraGoogleCredentials: Credentials object for Google Calendar authentication.
    """
    return create_abstra_google_credentials(connection_name)
