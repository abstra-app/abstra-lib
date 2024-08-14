from abstra_internals.interface.sdk.connectors.google_credentials import (
    create_abstra_google_credentials,
)
from abstra_internals.repositories import connectors_repository
from abstra_internals.repositories.connectors import AccessTokenDTO


def get_credentials(name: str) -> AccessTokenDTO:
    return connectors_repository.get_access_token(name)


def get_google_sheets_credentials(
    connection_name: str = "google-sheets",
):
    return create_abstra_google_credentials(connectors_repository, connection_name)
