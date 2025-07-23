from typing import Optional

from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import (
    AdministracaoApi as TBAdministracaoApi,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import (
    ApiClient,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import (
    CobrancaApi as TBCobrancaApi,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import (
    ContaCorrenteApi as TBContaCorrenteApi,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import (
    DetranApi as TBDetranApi,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import (
    FolhaDePagamentoCadastroApi as TBFolhaDePagamentoCadastroApi,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import (
    PagamentoCadastroApi as TBPagamentoCadastroApi,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import (
    PagamentosApi as TBPagamentosApi,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import (
    PixApi as TBPixApi,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client import (
    WebhooksApi as TBWebhooksApi,
)

from .client_factory import get_banking_api_client_factory

DEFAULT_BANKING_CONNECTION_NAME = "totalbank"


def _create_api_wrapper_class(base_class, class_name: str):
    """Create a wrapper class for the given base API class."""

    class ApiWrapper(base_class):
        def __init__(self, api_client: Optional[ApiClient] = None):
            if api_client is None:
                api_client = get_banking_api_client_factory().create_api_client(
                    DEFAULT_BANKING_CONNECTION_NAME
                )
            super().__init__(api_client)

    ApiWrapper.__name__ = class_name
    ApiWrapper.__qualname__ = class_name
    return ApiWrapper


# Dynamically create all API wrapper classes
PixApi = _create_api_wrapper_class(TBPixApi, "PixApi")
CobrancaApi = _create_api_wrapper_class(TBCobrancaApi, "CobrancaApi")
AdministracaoApi = _create_api_wrapper_class(TBAdministracaoApi, "AdministracaoApi")
ContaCorrenteApi = _create_api_wrapper_class(TBContaCorrenteApi, "ContaCorrenteApi")
DetranApi = _create_api_wrapper_class(TBDetranApi, "DetranApi")
FolhaDePagamentoCadastroApi = _create_api_wrapper_class(
    TBFolhaDePagamentoCadastroApi, "FolhaDePagamentoCadastroApi"
)
PagamentoCadastroApi = _create_api_wrapper_class(
    TBPagamentoCadastroApi, "PagamentoCadastroApi"
)
PagamentosApi = _create_api_wrapper_class(TBPagamentosApi, "PagamentosApi")
WebhooksApi = _create_api_wrapper_class(TBWebhooksApi, "WebhooksApi")


class BankingApi:
    def __init__(self, connection_name: str = DEFAULT_BANKING_CONNECTION_NAME):
        self._connection_name = connection_name
        self._api_client = get_banking_api_client_factory().create_api_client(
            connection_name
        )
        self._initialize_apis()

    def _initialize_apis(self) -> None:
        self.pix = PixApi(api_client=self._api_client)
        self.cobranca = CobrancaApi(api_client=self._api_client)
        self.administracao = AdministracaoApi(api_client=self._api_client)
        self.conta_corrente = ContaCorrenteApi(api_client=self._api_client)
        self.detran = DetranApi(api_client=self._api_client)
        self.folha_de_pagamento_cadastro = FolhaDePagamentoCadastroApi(
            api_client=self._api_client
        )
        self.pagamento_cadastro = PagamentoCadastroApi(api_client=self._api_client)
        self.pagamentos = PagamentosApi(api_client=self._api_client)
        self.webhooks = WebhooksApi(api_client=self._api_client)

    @property
    def connection_name(self) -> str:
        return self._connection_name

    @property
    def api_client(self) -> ApiClient:
        return self._api_client


def get_banking_api(
    connection_name: str = DEFAULT_BANKING_CONNECTION_NAME,
) -> BankingApi:
    return BankingApi(connection_name=connection_name)
