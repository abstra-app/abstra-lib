import abc
import logging

from abstra_internals.credentials import get_credentials
from abstra_internals.environment import (
    CLOUD_API_ENDPOINT,
    CLOUD_API_PROD_SHARED_TOKEN,
    IS_PRODUCTION,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import (
    ApiClient,
    Configuration,
)

logger = logging.getLogger(__name__)


class BankingApiClientFactory(abc.ABC):
    @abc.abstractmethod
    def create_api_client(self, connection_name: str) -> ApiClient:
        pass

    def _set_common_headers(self, client: ApiClient) -> None:
        client.set_default_header("Content-Type", "application/json")
        client.set_default_header("Accept", "application/json")


class LocalBankingApiClientFactory(BankingApiClientFactory):
    def create_api_client(self, connection_name: str) -> ApiClient:
        host = (
            f"{CLOUD_API_ENDPOINT}/cli/connectors/connection/{connection_name}/banking"
        )

        config = Configuration(host=host)
        client = ApiClient(configuration=config)

        self._set_auth_header(client)
        self._set_common_headers(client)

        return client

    def _set_auth_header(self, client: ApiClient) -> None:
        try:
            credentials = get_credentials()
            if credentials:
                client.set_default_header("Api-Authorization", f"Bearer {credentials}")
        except Exception as e:
            logger.warning(f"Failed to load credentials for local environment: {e}")
            # Continue without Bearer auth - this is expected in some environments


class ProductionBankingApiClientFactory(BankingApiClientFactory):
    def create_api_client(self, connection_name: str) -> ApiClient:
        host = (
            f"{CLOUD_API_ENDPOINT}/cli/connectors/connection/{connection_name}/banking"
        )
        config = Configuration(host=host)
        client = ApiClient(configuration=config)

        client.set_default_header("shared-token", CLOUD_API_PROD_SHARED_TOKEN)
        self._set_common_headers(client)

        return client


def get_banking_api_client_factory() -> BankingApiClientFactory:
    if IS_PRODUCTION:
        return ProductionBankingApiClientFactory()
    else:
        return LocalBankingApiClientFactory()
