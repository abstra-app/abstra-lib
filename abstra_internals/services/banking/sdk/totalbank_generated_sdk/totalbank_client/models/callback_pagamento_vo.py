# coding: utf-8

"""
OpenAPI Supply Midia

Plataforma de gateways do Portal TotalBank.   Os serviços expostos permitem ao usuário estabelecer integração de sua automação com os serviços de cobrança, pagamento, PIX e conta-corrente. É possível consultar, emitir relatórios e registrar movimentações para os respectivos serviços.   # Obtenção de credenciais   Para obter credenciais para consumo da API de token de acesso, é necessário:   - Criação de uma conta de acesso, habilitada para utilizar o serviço 'Gateway Supply', no portal <a href=\"https://portal.totalbank.com.br/\" target=\"_blank\">TotalBank</a>. Esta conta de acesso é criada a partir de uma solicitação ao nosso <a href=\"mailto:suporte@supplymidia.com.br\">suporte</a>.  - Criação de um usuário com perfil de 'Gestor de API' no portal <a href=\"https://portal.totalbank.com.br/\" target=\"_blank\">TotalBank</a>.   - Este usuário 'Gestor de API' deverá criar um usuário para ser utilizado na API de token de acesso, no menu: Administração - Configuração de API - Usuários gateway.   - Neste mesmo menu, na aba Documentação gateway, é possível visualizar o endereço de nosso endpoint e a documentação da API de autorização, para receber o token de acesso necessário para consumir nossas APIs.   - A partir desta etapa, você estará apto a obter tokens de acesso para consumir nossos serviços.   # Webhooks   ## Pré-requisitos para uso do webhook    Habilitar o serviço 'Gateway Supply'.   ## Cadastro e gestão de webhook   Para as contas de acesso que têm o serviço 'Gateway Supply', o usuário administrador com a permissão 'Gestor WS' terá acesso ao menu Administração->Configuração de API.   Nele, além de ser possível gerenciar os usuários gateway, há a opção 'Webhooks', na qual o usuário administrador tem a gestao dos webhooks cadastrados para sua conta de acesso.   Clicando no botão 'Adicionar configuração de web-service, o usuário administrador conseguirá cadastrar a URL do webhook e um e-mail para contato.   Este e-mail para contato é acionado quando há falha no envio da notificação.   A configuração cadastrada nesta tela engloba a conta de acesso.   ## Configuração do webhook para um convênio   Para sobrescrever a configuração do webhook para a conta de acesso e utilizar uma configuração única para o convênio, no menu Administração->Convênios, é possível criar uma configuração própria para o convênio, basta selecionar a opção 'Sobrescreve configuração de webhook?'.   ## Testes sandbox   No menu Administração->Configuração de web-service, clicando em 'Testes', é possível iniciar os testes em ambiente sandbox. Com ele será possível chamar a URL do seu Webhook com um payload exemplo de Pix, Cobrança ou Pagamento, e assim preparar o Webhook para receber os dados do banco.   Fique a vontade para testar e garantir que está tudo funcionando.   Nos testes são disponibilizados exemplos de payloads para preparar seu sistema para recebimento.   ## Notificações   Por enquanto, o portal TotalBank está adaptado para as notificações dos tipos Pix, Cobrança e Pagamento.   <a href=\"#post-/rest/documentacao-webhook/cobranca\">Webhook de cobrança</a>   <a href=\"#post-/rest/documentacao-webhook/pagamento\">Webhook de pagamentos</a>   <a href=\"#post-/rest/documentacao-webhook/pix\">Webhook de PIX</a>   # Rate Limit: Limite de requisições por minuto   Para assegurar uma experiência de alta qualidade e a estabilidade dos nossos serviços, introduzimos um limite de requisições por minuto (rate limit) nas nossas APIs. Esta nova medida visa proporcionar um acesso justo e eficiente aos nossos recursos tecnológicos, garantindo desempenho consistente e confiável para todos os usuários e parceiros.   Ao superar o limite estipulado na conta de acesso, as requisições adicionais serão bloqueadas temporariamente, gerando um erro de código HTTP 429 - Too Many Requests que indica muitas requisições em um determinado período, isto é, por minuto. Isso é parte do nosso esforço para prevenir sobrecargas no sistema, mantendo-o rápido e acessível a todos.   Para mais informações sobre como se adaptar ao rate limit e para solicitações de aumento, por favor, entre em contato através do nosso <a href=\"mailto:suporte@supplymidia.com.br\">suporte</a>.   # Códigos de resposta HTTP   Entenda os principais códigos de retorno de nossas APIs.   Sucesso   200 OK - Requisição com Sucesso     Erro na Requisição   400 Bad Request - Erro na requisição   401 Unauthorized - Cabeçalho de autenticação inválido   403 Forbidden - Token incorreto ou segurança violada   404 Not Found - O recurso solicitado não existe   405 Not Allowed - Método do recurso não suportado   406 Not Accepted - Tipo de mídia não permitido   415 Unsupported Media Type - Payload não suportado   429 Too Many Requests - Muitas solicitações    Erro no Servidor   500 Internal Server Error - Erro no gateway   503 Service Unavailable - Serviço não disponível   504 Gateway timeout - Servidor não respondeu    Caso tenha dúvidas, envie um e-mail para nossa equipe de <a href=\"mailto:desenvolvimento@supplymidia.com.br\">desenvolvimento</a>

The version of the OpenAPI document: 1.0
Generated by OpenAPI Generator (https://openapi-generator.tech)

Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations

import json
import pprint
from typing import Any, Dict, Optional, Set, Union

from pydantic import (
    BaseModel,
    ConfigDict,
    ValidationError,
    field_validator,
)
from typing_extensions import Self

from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.callback_pagamento_codigo_barras_interface import (
    CallbackPagamentoCodigoBarrasInterface,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.callback_pagamento_pix_interface import (
    CallbackPagamentoPIXInterface,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.callback_pagamento_transferencia_interface import (
    CallbackPagamentoTransferenciaInterface,
)

CALLBACKPAGAMENTOVO_ONE_OF_SCHEMAS = [
    "CallbackPagamentoCodigoBarrasInterface",
    "CallbackPagamentoPIXInterface",
    "CallbackPagamentoTransferenciaInterface",
]


class CallbackPagamentoVO(BaseModel):
    """
    CallbackPagamentoVO
    """

    # data type: CallbackPagamentoTransferenciaInterface
    oneof_schema_1_validator: Optional[CallbackPagamentoTransferenciaInterface] = None
    # data type: CallbackPagamentoCodigoBarrasInterface
    oneof_schema_2_validator: Optional[CallbackPagamentoCodigoBarrasInterface] = None
    # data type: CallbackPagamentoPIXInterface
    oneof_schema_3_validator: Optional[CallbackPagamentoPIXInterface] = None
    actual_instance: Optional[
        Union[
            CallbackPagamentoCodigoBarrasInterface,
            CallbackPagamentoPIXInterface,
            CallbackPagamentoTransferenciaInterface,
        ]
    ] = None
    one_of_schemas: Set[str] = {
        "CallbackPagamentoCodigoBarrasInterface",
        "CallbackPagamentoPIXInterface",
        "CallbackPagamentoTransferenciaInterface",
    }

    model_config = ConfigDict(
        validate_assignment=True,
        protected_namespaces=(),
    )

    def __init__(self, *args, **kwargs) -> None:
        if args:
            if len(args) > 1:
                raise ValueError(
                    "If a position argument is used, only 1 is allowed to set `actual_instance`"
                )
            if kwargs:
                raise ValueError(
                    "If a position argument is used, keyword arguments cannot be used."
                )
            super().__init__(actual_instance=args[0])
        else:
            super().__init__(**kwargs)

    @field_validator("actual_instance")
    def actual_instance_must_validate_oneof(cls, v):
        CallbackPagamentoVO.model_construct()
        error_messages = []
        match = 0
        # validate data type: CallbackPagamentoTransferenciaInterface
        if not isinstance(v, CallbackPagamentoTransferenciaInterface):
            error_messages.append(
                f"Error! Input type `{type(v)}` is not `CallbackPagamentoTransferenciaInterface`"
            )
        else:
            match += 1
        # validate data type: CallbackPagamentoCodigoBarrasInterface
        if not isinstance(v, CallbackPagamentoCodigoBarrasInterface):
            error_messages.append(
                f"Error! Input type `{type(v)}` is not `CallbackPagamentoCodigoBarrasInterface`"
            )
        else:
            match += 1
        # validate data type: CallbackPagamentoPIXInterface
        if not isinstance(v, CallbackPagamentoPIXInterface):
            error_messages.append(
                f"Error! Input type `{type(v)}` is not `CallbackPagamentoPIXInterface`"
            )
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError(
                "Multiple matches found when setting `actual_instance` in CallbackPagamentoVO with oneOf schemas: CallbackPagamentoCodigoBarrasInterface, CallbackPagamentoPIXInterface, CallbackPagamentoTransferenciaInterface. Details: "
                + ", ".join(error_messages)
            )
        elif match == 0:
            # no match
            raise ValueError(
                "No match found when setting `actual_instance` in CallbackPagamentoVO with oneOf schemas: CallbackPagamentoCodigoBarrasInterface, CallbackPagamentoPIXInterface, CallbackPagamentoTransferenciaInterface. Details: "
                + ", ".join(error_messages)
            )
        else:
            return v

    @classmethod
    def from_dict(cls, obj: Union[str, Dict[str, Any]]) -> Self:
        return cls.from_json(json.dumps(obj))

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Returns the object represented by the json string"""
        instance = cls.model_construct()
        error_messages = []
        match = 0

        # deserialize data into CallbackPagamentoTransferenciaInterface
        try:
            instance.actual_instance = (
                CallbackPagamentoTransferenciaInterface.from_json(json_str)
            )
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into CallbackPagamentoCodigoBarrasInterface
        try:
            instance.actual_instance = CallbackPagamentoCodigoBarrasInterface.from_json(
                json_str
            )
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into CallbackPagamentoPIXInterface
        try:
            instance.actual_instance = CallbackPagamentoPIXInterface.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError(
                "Multiple matches found when deserializing the JSON string into CallbackPagamentoVO with oneOf schemas: CallbackPagamentoCodigoBarrasInterface, CallbackPagamentoPIXInterface, CallbackPagamentoTransferenciaInterface. Details: "
                + ", ".join(error_messages)
            )
        elif match == 0:
            # no match
            raise ValueError(
                "No match found when deserializing the JSON string into CallbackPagamentoVO with oneOf schemas: CallbackPagamentoCodigoBarrasInterface, CallbackPagamentoPIXInterface, CallbackPagamentoTransferenciaInterface. Details: "
                + ", ".join(error_messages)
            )
        else:
            return instance

    def to_json(self) -> str:
        """Returns the JSON representation of the actual instance"""
        if self.actual_instance is None:
            return "null"

        if hasattr(self.actual_instance, "to_json") and callable(
            self.actual_instance.to_json
        ):
            return self.actual_instance.to_json()
        else:
            return json.dumps(self.actual_instance)

    def to_dict(
        self,
    ) -> Optional[
        Union[
            Dict[str, Any],
            CallbackPagamentoCodigoBarrasInterface,
            CallbackPagamentoPIXInterface,
            CallbackPagamentoTransferenciaInterface,
        ]
    ]:
        """Returns the dict representation of the actual instance"""
        if self.actual_instance is None:
            return None

        if hasattr(self.actual_instance, "to_dict") and callable(
            self.actual_instance.to_dict
        ):
            return self.actual_instance.to_dict()
        else:
            # primitive type
            return self.actual_instance

    def to_str(self) -> str:
        """Returns the string representation of the actual instance"""
        return pprint.pformat(self.model_dump())
