from abstra_internals.interface.sdk.user_exceptions import MissingDependencyError
from abstra_internals.repositories.connectors import ConnectorsRepository
from abstra_internals.utils.datetime import from_utc_iso_string


def create_abstra_google_credentials(
    repository: ConnectorsRepository, connection_name: str
):
    try:
        from google.auth.credentials import (  # type: ignore
            Credentials as BaseCredentials,
        )
    except ImportError:
        raise MissingDependencyError("google-auth")

    class AbstraGoogleCredentials(BaseCredentials):
        def __init__(
            self, repository: ConnectorsRepository, connection_name: str
        ) -> None:
            super().__init__()
            self.repository = repository
            self.connection_name = connection_name

        def refresh(self, request):
            dto = self.repository.get_access_token(self.connection_name)
            self.token = dto.token
            self.expiry = from_utc_iso_string(dto.expiresAt)
            self.expiry = self.expiry.replace(tzinfo=None)

    return AbstraGoogleCredentials(repository, connection_name)
