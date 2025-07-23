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
import re  # noqa: F401
from datetime import date
from typing import Any, ClassVar, Dict, List, Optional, Set, Union

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr
from typing_extensions import Annotated, Self

from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.avalista import (
    Avalista,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.beneficiario_titulo import (
    BeneficiarioTitulo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.desconto import (
    Desconto,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.juros_mora import (
    JurosMora,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.mensagens import (
    Mensagens,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.multa import (
    Multa,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pagador import (
    Pagador,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pos_vencimento import (
    PosVencimento,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.rateio_vo import (
    RateioVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.tipo_pagamento import (
    TipoPagamento,
)


class Titulo(BaseModel):
    """
    Título
    """  # noqa: E501

    nosso_numero: Optional[StrictStr] = Field(
        default=None, description="Nosso número", alias="nossoNumero"
    )
    seu_numero: Optional[StrictStr] = Field(
        default=None, description="Seu número", alias="seuNumero"
    )
    codigo_carteira: Optional[StrictStr] = Field(
        default=None, description="Código da carteira", alias="codigoCarteira"
    )
    dt_vencimento: Optional[date] = Field(
        default=None,
        description="Data de vencimento (formato aaaa-mm-dd)",
        alias="dtVencimento",
    )
    dt_emissao: Optional[date] = Field(
        default=None,
        description="Data de emissão (formato aaaa-mm-dd)",
        alias="dtEmissao",
    )
    valor: Optional[
        Union[
            Annotated[float, Field(strict=True, ge=0)],
            Annotated[int, Field(strict=True, ge=0)],
        ]
    ] = Field(default=None, description="Valor (formato 0.00)")
    valor_abatimento: Optional[
        Union[
            Annotated[float, Field(strict=True, ge=0)],
            Annotated[int, Field(strict=True, ge=0)],
        ]
    ] = Field(
        default=None,
        description="Valor de abatimento (formato 0.00)",
        alias="valorAbatimento",
    )
    valor_iof: Optional[
        Union[
            Annotated[float, Field(strict=True, ge=0)],
            Annotated[int, Field(strict=True, ge=0)],
        ]
    ] = Field(default=None, description="Valor IOF (formato 0.00)", alias="valorIOF")
    aceite: Optional[StrictBool] = Field(default=None, description="Aceite")
    identificacao_empresa: Optional[StrictStr] = Field(
        default=None, description="Identificação empresa", alias="identificacaoEmpresa"
    )
    moeda: Optional[StrictStr] = Field(default=None, description="Moeda")
    especie_titulo: Optional[StrictStr] = Field(
        default=None, description="Espécie do título", alias="especieTitulo"
    )
    numero_parcela: Optional[StrictInt] = Field(
        default=1, description="Número da parcela", alias="numeroParcela"
    )
    pagador: Optional[Pagador] = None
    sacador_avalista: Optional[Avalista] = Field(default=None, alias="sacadorAvalista")
    juros_mora: Optional[JurosMora] = Field(default=None, alias="jurosMora")
    multa: Optional[Multa] = None
    desconto1: Optional[Desconto] = None
    desconto2: Optional[Desconto] = None
    desconto3: Optional[Desconto] = None
    pos_vencimento: Optional[PosVencimento] = Field(default=None, alias="posVencimento")
    tipo_pagamento: Optional[TipoPagamento] = Field(default=None, alias="tipoPagamento")
    mensagens: Optional[Mensagens] = None
    layout_boleto: Optional[StrictStr] = Field(
        default=None, description="Layout do boleto", alias="layoutBoleto"
    )
    beneficiario_titulo: Optional[BeneficiarioTitulo] = Field(
        default=None, alias="beneficiarioTitulo"
    )
    rateio: Optional[RateioVO] = None
    __properties: ClassVar[List[str]] = [
        "nossoNumero",
        "seuNumero",
        "codigoCarteira",
        "dtVencimento",
        "dtEmissao",
        "valor",
        "valorAbatimento",
        "valorIOF",
        "aceite",
        "identificacaoEmpresa",
        "moeda",
        "especieTitulo",
        "numeroParcela",
        "pagador",
        "sacadorAvalista",
        "jurosMora",
        "multa",
        "desconto1",
        "desconto2",
        "desconto3",
        "posVencimento",
        "tipoPagamento",
        "mensagens",
        "layoutBoleto",
        "beneficiarioTitulo",
        "rateio",
    ]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of Titulo from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of pagador
        if self.pagador:
            _dict["pagador"] = self.pagador.to_dict()
        # override the default output from pydantic by calling `to_dict()` of sacador_avalista
        if self.sacador_avalista:
            _dict["sacadorAvalista"] = self.sacador_avalista.to_dict()
        # override the default output from pydantic by calling `to_dict()` of juros_mora
        if self.juros_mora:
            _dict["jurosMora"] = self.juros_mora.to_dict()
        # override the default output from pydantic by calling `to_dict()` of multa
        if self.multa:
            _dict["multa"] = self.multa.to_dict()
        # override the default output from pydantic by calling `to_dict()` of desconto1
        if self.desconto1:
            _dict["desconto1"] = self.desconto1.to_dict()
        # override the default output from pydantic by calling `to_dict()` of desconto2
        if self.desconto2:
            _dict["desconto2"] = self.desconto2.to_dict()
        # override the default output from pydantic by calling `to_dict()` of desconto3
        if self.desconto3:
            _dict["desconto3"] = self.desconto3.to_dict()
        # override the default output from pydantic by calling `to_dict()` of pos_vencimento
        if self.pos_vencimento:
            _dict["posVencimento"] = self.pos_vencimento.to_dict()
        # override the default output from pydantic by calling `to_dict()` of tipo_pagamento
        if self.tipo_pagamento:
            _dict["tipoPagamento"] = self.tipo_pagamento.to_dict()
        # override the default output from pydantic by calling `to_dict()` of mensagens
        if self.mensagens:
            _dict["mensagens"] = self.mensagens.to_dict()
        # override the default output from pydantic by calling `to_dict()` of beneficiario_titulo
        if self.beneficiario_titulo:
            _dict["beneficiarioTitulo"] = self.beneficiario_titulo.to_dict()
        # override the default output from pydantic by calling `to_dict()` of rateio
        if self.rateio:
            _dict["rateio"] = self.rateio.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Titulo from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "nossoNumero": obj.get("nossoNumero"),
                "seuNumero": obj.get("seuNumero"),
                "codigoCarteira": obj.get("codigoCarteira"),
                "dtVencimento": obj.get("dtVencimento"),
                "dtEmissao": obj.get("dtEmissao"),
                "valor": obj.get("valor"),
                "valorAbatimento": obj.get("valorAbatimento"),
                "valorIOF": obj.get("valorIOF"),
                "aceite": obj.get("aceite"),
                "identificacaoEmpresa": obj.get("identificacaoEmpresa"),
                "moeda": obj.get("moeda"),
                "especieTitulo": obj.get("especieTitulo"),
                "numeroParcela": obj.get("numeroParcela")
                if obj.get("numeroParcela") is not None
                else 1,
                "pagador": Pagador.from_dict(obj["pagador"])
                if obj.get("pagador") is not None
                else None,
                "sacadorAvalista": Avalista.from_dict(obj["sacadorAvalista"])
                if obj.get("sacadorAvalista") is not None
                else None,
                "jurosMora": JurosMora.from_dict(obj["jurosMora"])
                if obj.get("jurosMora") is not None
                else None,
                "multa": Multa.from_dict(obj["multa"])
                if obj.get("multa") is not None
                else None,
                "desconto1": Desconto.from_dict(obj["desconto1"])
                if obj.get("desconto1") is not None
                else None,
                "desconto2": Desconto.from_dict(obj["desconto2"])
                if obj.get("desconto2") is not None
                else None,
                "desconto3": Desconto.from_dict(obj["desconto3"])
                if obj.get("desconto3") is not None
                else None,
                "posVencimento": PosVencimento.from_dict(obj["posVencimento"])
                if obj.get("posVencimento") is not None
                else None,
                "tipoPagamento": TipoPagamento.from_dict(obj["tipoPagamento"])
                if obj.get("tipoPagamento") is not None
                else None,
                "mensagens": Mensagens.from_dict(obj["mensagens"])
                if obj.get("mensagens") is not None
                else None,
                "layoutBoleto": obj.get("layoutBoleto"),
                "beneficiarioTitulo": BeneficiarioTitulo.from_dict(
                    obj["beneficiarioTitulo"]
                )
                if obj.get("beneficiarioTitulo") is not None
                else None,
                "rateio": RateioVO.from_dict(obj["rateio"])
                if obj.get("rateio") is not None
                else None,
            }
        )
        return _obj
