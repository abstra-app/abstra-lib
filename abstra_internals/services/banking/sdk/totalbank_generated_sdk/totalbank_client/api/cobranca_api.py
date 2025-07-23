# coding: utf-8

"""
OpenAPI Supply Midia

Plataforma de gateways do Portal TotalBank.   Os serviços expostos permitem ao usuário estabelecer integração de sua automação com os serviços de cobrança, pagamento, PIX e conta-corrente. É possível consultar, emitir relatórios e registrar movimentações para os respectivos serviços.   # Obtenção de credenciais   Para obter credenciais para consumo da API de token de acesso, é necessário:   - Criação de uma conta de acesso, habilitada para utilizar o serviço 'Gateway Supply', no portal <a href=\"https://portal.totalbank.com.br/\" target=\"_blank\">TotalBank</a>. Esta conta de acesso é criada a partir de uma solicitação ao nosso <a href=\"mailto:suporte@supplymidia.com.br\">suporte</a>.  - Criação de um usuário com perfil de 'Gestor de API' no portal <a href=\"https://portal.totalbank.com.br/\" target=\"_blank\">TotalBank</a>.   - Este usuário 'Gestor de API' deverá criar um usuário para ser utilizado na API de token de acesso, no menu: Administração - Configuração de API - Usuários gateway.   - Neste mesmo menu, na aba Documentação gateway, é possível visualizar o endereço de nosso endpoint e a documentação da API de autorização, para receber o token de acesso necessário para consumir nossas APIs.   - A partir desta etapa, você estará apto a obter tokens de acesso para consumir nossos serviços.   # Webhooks   ## Pré-requisitos para uso do webhook    Habilitar o serviço 'Gateway Supply'.   ## Cadastro e gestão de webhook   Para as contas de acesso que têm o serviço 'Gateway Supply', o usuário administrador com a permissão 'Gestor WS' terá acesso ao menu Administração->Configuração de API.   Nele, além de ser possível gerenciar os usuários gateway, há a opção 'Webhooks', na qual o usuário administrador tem a gestao dos webhooks cadastrados para sua conta de acesso.   Clicando no botão 'Adicionar configuração de web-service, o usuário administrador conseguirá cadastrar a URL do webhook e um e-mail para contato.   Este e-mail para contato é acionado quando há falha no envio da notificação.   A configuração cadastrada nesta tela engloba a conta de acesso.   ## Configuração do webhook para um convênio   Para sobrescrever a configuração do webhook para a conta de acesso e utilizar uma configuração única para o convênio, no menu Administração->Convênios, é possível criar uma configuração própria para o convênio, basta selecionar a opção 'Sobrescreve configuração de webhook?'.   ## Testes sandbox   No menu Administração->Configuração de web-service, clicando em 'Testes', é possível iniciar os testes em ambiente sandbox. Com ele será possível chamar a URL do seu Webhook com um payload exemplo de Pix, Cobrança ou Pagamento, e assim preparar o Webhook para receber os dados do banco.   Fique a vontade para testar e garantir que está tudo funcionando.   Nos testes são disponibilizados exemplos de payloads para preparar seu sistema para recebimento.   ## Notificações   Por enquanto, o portal TotalBank está adaptado para as notificações dos tipos Pix, Cobrança e Pagamento.   <a href=\"#post-/rest/documentacao-webhook/cobranca\">Webhook de cobrança</a>   <a href=\"#post-/rest/documentacao-webhook/pagamento\">Webhook de pagamentos</a>   <a href=\"#post-/rest/documentacao-webhook/pix\">Webhook de PIX</a>   # Rate Limit: Limite de requisições por minuto   Para assegurar uma experiência de alta qualidade e a estabilidade dos nossos serviços, introduzimos um limite de requisições por minuto (rate limit) nas nossas APIs. Esta nova medida visa proporcionar um acesso justo e eficiente aos nossos recursos tecnológicos, garantindo desempenho consistente e confiável para todos os usuários e parceiros.   Ao superar o limite estipulado na conta de acesso, as requisições adicionais serão bloqueadas temporariamente, gerando um erro de código HTTP 429 - Too Many Requests que indica muitas requisições em um determinado período, isto é, por minuto. Isso é parte do nosso esforço para prevenir sobrecargas no sistema, mantendo-o rápido e acessível a todos.   Para mais informações sobre como se adaptar ao rate limit e para solicitações de aumento, por favor, entre em contato através do nosso <a href=\"mailto:suporte@supplymidia.com.br\">suporte</a>.   # Códigos de resposta HTTP   Entenda os principais códigos de retorno de nossas APIs.   Sucesso   200 OK - Requisição com Sucesso     Erro na Requisição   400 Bad Request - Erro na requisição   401 Unauthorized - Cabeçalho de autenticação inválido   403 Forbidden - Token incorreto ou segurança violada   404 Not Found - O recurso solicitado não existe   405 Not Allowed - Método do recurso não suportado   406 Not Accepted - Tipo de mídia não permitido   415 Unsupported Media Type - Payload não suportado   429 Too Many Requests - Muitas solicitações    Erro no Servidor   500 Internal Server Error - Erro no gateway   503 Service Unavailable - Serviço não disponível   504 Gateway timeout - Servidor não respondeu    Caso tenha dúvidas, envie um e-mail para nossa equipe de <a href=\"mailto:desenvolvimento@supplymidia.com.br\">desenvolvimento</a>

The version of the OpenAPI document: 1.0
Generated by OpenAPI Generator (https://openapi-generator.tech)

Do not edit the class manually.
"""  # noqa: E501

from typing import Any, Dict, List, Optional, Tuple, Union

from pydantic import Field, StrictFloat, StrictInt, StrictStr, validate_call
from typing_extensions import Annotated

from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.api_client import (
    ApiClient,
    RequestSerialized,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.api_response import (
    ApiResponse,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pagador import (
    Pagador,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_anexo_titulo_vo import (
    RequisicaoAnexoTituloVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_imprime_titulo_vo import (
    RequisicaoImprimeTituloVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_movimenta_cancela_desconto_titulo_vo import (
    RequisicaoMovimentaCancelaDescontoTituloVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_movimenta_desconto_titulo_vo import (
    RequisicaoMovimentaDescontoTituloVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_movimenta_titulo_abatimento_vo import (
    RequisicaoMovimentaTituloAbatimentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_movimenta_titulo_baixa_vo import (
    RequisicaoMovimentaTituloBaixaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_movimenta_titulo_cancela_abatimento_vo import (
    RequisicaoMovimentaTituloCancelaAbatimentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_movimenta_titulo_negativar_vo import (
    RequisicaoMovimentaTituloNegativarVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_movimenta_titulo_protesto_vo import (
    RequisicaoMovimentaTituloProtestoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_movimenta_titulo_valor_nominal_vo import (
    RequisicaoMovimentaTituloValorNominalVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_movimenta_titulo_vencimento_vo import (
    RequisicaoMovimentaTituloVencimentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_registra_titulo_vo import (
    RequisicaoRegistraTituloVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_anexo import (
    RetornoAnexo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_impressao_boleto import (
    RetornoImpressaoBoleto,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_lista_pagador_vo import (
    RetornoListaPagadorVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_lista_titulo_vo import (
    RetornoListaTituloVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pagador import (
    RetornoPagador,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pesquisa import (
    RetornoPesquisa,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pesquisa_ocorrencia_paginada import (
    RetornoPesquisaOcorrenciaPaginada,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pesquisa_paginada import (
    RetornoPesquisaPaginada,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_titulo import (
    RetornoTitulo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.rest import (
    RESTResponseType,
)


class CobrancaApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client

    @validate_call
    def anexo_adiciona(
        self,
        requisicao_anexo_titulo_vo: Optional[RequisicaoAnexoTituloVO] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoPesquisa:
        """Adiciona anexos a títulos

        Adiciona anexos a títulos.<br></br><br></br>Para adicionar anexos de uso futuro...

        :param requisicao_anexo_titulo_vo:
        :type requisicao_anexo_titulo_vo: RequisicaoAnexoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._anexo_adiciona_serialize(
            requisicao_anexo_titulo_vo=requisicao_anexo_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisa",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def anexo_adiciona_with_http_info(
        self,
        requisicao_anexo_titulo_vo: Optional[RequisicaoAnexoTituloVO] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoPesquisa]:
        """Adiciona anexos a títulos

        Adiciona anexos a títulos.<br></br><br></br>Para adicionar anexos de uso futuro...

        :param requisicao_anexo_titulo_vo:
        :type requisicao_anexo_titulo_vo: RequisicaoAnexoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._anexo_adiciona_serialize(
            requisicao_anexo_titulo_vo=requisicao_anexo_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisa",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def anexo_adiciona_without_preload_content(
        self,
        requisicao_anexo_titulo_vo: Optional[RequisicaoAnexoTituloVO] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Adiciona anexos a títulos

        Adiciona anexos a títulos.<br></br><br></br>Para adicionar anexos de uso futuro...

        :param requisicao_anexo_titulo_vo:
        :type requisicao_anexo_titulo_vo: RequisicaoAnexoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._anexo_adiciona_serialize(
            requisicao_anexo_titulo_vo=requisicao_anexo_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisa",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _anexo_adiciona_serialize(
        self,
        requisicao_anexo_titulo_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_anexo_titulo_vo is not None:
            _body_params = requisicao_anexo_titulo_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/anexo/adiciona",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def anexo_pesquisa(
        self,
        codigo_banco_beneficiario: Annotated[
            Optional[StrictStr], Field(description="Banco do beneficiário")
        ] = None,
        codigo_beneficiario: Annotated[
            Optional[StrictStr], Field(description="Código do convênio do beneficiário")
        ] = None,
        cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do pagador do título")
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr], Field(description="Nosso número do título")
        ] = None,
        seu_numero: Annotated[
            Optional[StrictStr], Field(description="Seu número do título")
        ] = None,
        uso_empresa: Annotated[
            Optional[StrictStr], Field(description="Uso empresa")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        valor_nominal: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor nominal do título (formato 0.00)"),
        ] = None,
        situacao_titulo: Annotated[
            Optional[List[StrictStr]], Field(description="Situação do título")
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoAnexo:
        """Pesquisa de anexos

        Pesquisa de anexos.

        :param codigo_banco_beneficiario: Banco do beneficiário
        :type codigo_banco_beneficiario: str
        :param codigo_beneficiario: Código do convênio do beneficiário
        :type codigo_beneficiario: str
        :param cnpj_beneficiario: CNPJ do beneficiário
        :type cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título
        :type cpf_cnpj_pagador: str
        :param nosso_numero: Nosso número do título
        :type nosso_numero: str
        :param seu_numero: Seu número do título
        :type seu_numero: str
        :param uso_empresa: Uso empresa
        :type uso_empresa: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param valor_nominal: Valor nominal do título (formato 0.00)
        :type valor_nominal: float
        :param situacao_titulo: Situação do título
        :type situacao_titulo: List[str]
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._anexo_pesquisa_serialize(
            codigo_banco_beneficiario=codigo_banco_beneficiario,
            codigo_beneficiario=codigo_beneficiario,
            cnpj_beneficiario=cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nosso_numero=nosso_numero,
            seu_numero=seu_numero,
            uso_empresa=uso_empresa,
            data_vencimento=data_vencimento,
            valor_nominal=valor_nominal,
            situacao_titulo=situacao_titulo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoAnexo",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def anexo_pesquisa_with_http_info(
        self,
        codigo_banco_beneficiario: Annotated[
            Optional[StrictStr], Field(description="Banco do beneficiário")
        ] = None,
        codigo_beneficiario: Annotated[
            Optional[StrictStr], Field(description="Código do convênio do beneficiário")
        ] = None,
        cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do pagador do título")
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr], Field(description="Nosso número do título")
        ] = None,
        seu_numero: Annotated[
            Optional[StrictStr], Field(description="Seu número do título")
        ] = None,
        uso_empresa: Annotated[
            Optional[StrictStr], Field(description="Uso empresa")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        valor_nominal: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor nominal do título (formato 0.00)"),
        ] = None,
        situacao_titulo: Annotated[
            Optional[List[StrictStr]], Field(description="Situação do título")
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoAnexo]:
        """Pesquisa de anexos

        Pesquisa de anexos.

        :param codigo_banco_beneficiario: Banco do beneficiário
        :type codigo_banco_beneficiario: str
        :param codigo_beneficiario: Código do convênio do beneficiário
        :type codigo_beneficiario: str
        :param cnpj_beneficiario: CNPJ do beneficiário
        :type cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título
        :type cpf_cnpj_pagador: str
        :param nosso_numero: Nosso número do título
        :type nosso_numero: str
        :param seu_numero: Seu número do título
        :type seu_numero: str
        :param uso_empresa: Uso empresa
        :type uso_empresa: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param valor_nominal: Valor nominal do título (formato 0.00)
        :type valor_nominal: float
        :param situacao_titulo: Situação do título
        :type situacao_titulo: List[str]
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._anexo_pesquisa_serialize(
            codigo_banco_beneficiario=codigo_banco_beneficiario,
            codigo_beneficiario=codigo_beneficiario,
            cnpj_beneficiario=cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nosso_numero=nosso_numero,
            seu_numero=seu_numero,
            uso_empresa=uso_empresa,
            data_vencimento=data_vencimento,
            valor_nominal=valor_nominal,
            situacao_titulo=situacao_titulo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoAnexo",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def anexo_pesquisa_without_preload_content(
        self,
        codigo_banco_beneficiario: Annotated[
            Optional[StrictStr], Field(description="Banco do beneficiário")
        ] = None,
        codigo_beneficiario: Annotated[
            Optional[StrictStr], Field(description="Código do convênio do beneficiário")
        ] = None,
        cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do pagador do título")
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr], Field(description="Nosso número do título")
        ] = None,
        seu_numero: Annotated[
            Optional[StrictStr], Field(description="Seu número do título")
        ] = None,
        uso_empresa: Annotated[
            Optional[StrictStr], Field(description="Uso empresa")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        valor_nominal: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor nominal do título (formato 0.00)"),
        ] = None,
        situacao_titulo: Annotated[
            Optional[List[StrictStr]], Field(description="Situação do título")
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Pesquisa de anexos

        Pesquisa de anexos.

        :param codigo_banco_beneficiario: Banco do beneficiário
        :type codigo_banco_beneficiario: str
        :param codigo_beneficiario: Código do convênio do beneficiário
        :type codigo_beneficiario: str
        :param cnpj_beneficiario: CNPJ do beneficiário
        :type cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título
        :type cpf_cnpj_pagador: str
        :param nosso_numero: Nosso número do título
        :type nosso_numero: str
        :param seu_numero: Seu número do título
        :type seu_numero: str
        :param uso_empresa: Uso empresa
        :type uso_empresa: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param valor_nominal: Valor nominal do título (formato 0.00)
        :type valor_nominal: float
        :param situacao_titulo: Situação do título
        :type situacao_titulo: List[str]
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._anexo_pesquisa_serialize(
            codigo_banco_beneficiario=codigo_banco_beneficiario,
            codigo_beneficiario=codigo_beneficiario,
            cnpj_beneficiario=cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nosso_numero=nosso_numero,
            seu_numero=seu_numero,
            uso_empresa=uso_empresa,
            data_vencimento=data_vencimento,
            valor_nominal=valor_nominal,
            situacao_titulo=situacao_titulo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoAnexo",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _anexo_pesquisa_serialize(
        self,
        codigo_banco_beneficiario,
        codigo_beneficiario,
        cnpj_beneficiario,
        cpf_cnpj_pagador,
        nosso_numero,
        seu_numero,
        uso_empresa,
        data_vencimento,
        valor_nominal,
        situacao_titulo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {
            "situacaoTitulo": "multi",
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        if codigo_banco_beneficiario is not None:
            _query_params.append(("codigoBancoBeneficiario", codigo_banco_beneficiario))

        if codigo_beneficiario is not None:
            _query_params.append(("codigoBeneficiario", codigo_beneficiario))

        if cnpj_beneficiario is not None:
            _query_params.append(("cnpjBeneficiario", cnpj_beneficiario))

        if cpf_cnpj_pagador is not None:
            _query_params.append(("cpfCnpjPagador", cpf_cnpj_pagador))

        if nosso_numero is not None:
            _query_params.append(("nossoNumero", nosso_numero))

        if seu_numero is not None:
            _query_params.append(("seuNumero", seu_numero))

        if uso_empresa is not None:
            _query_params.append(("usoEmpresa", uso_empresa))

        if data_vencimento is not None:
            _query_params.append(("dataVencimento", data_vencimento))

        if valor_nominal is not None:
            _query_params.append(("valorNominal", valor_nominal))

        if situacao_titulo is not None:
            _query_params.append(("situacaoTitulo", situacao_titulo))

        # process the header parameters
        # process the form parameters
        # process the body parameter

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="GET",
            resource_path="/rest/cobranca/anexo/pesquisa",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def imprime_boleto_multiplo(
        self,
        requisicao_imprime_titulo_vo: Optional[RequisicaoImprimeTituloVO] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoImpressaoBoleto:
        """Impressão de boleto

        Impressão de boleto, limitada a 20 títulos.

        :param requisicao_imprime_titulo_vo:
        :type requisicao_imprime_titulo_vo: RequisicaoImprimeTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._imprime_boleto_multiplo_serialize(
            requisicao_imprime_titulo_vo=requisicao_imprime_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoImpressaoBoleto",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def imprime_boleto_multiplo_with_http_info(
        self,
        requisicao_imprime_titulo_vo: Optional[RequisicaoImprimeTituloVO] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoImpressaoBoleto]:
        """Impressão de boleto

        Impressão de boleto, limitada a 20 títulos.

        :param requisicao_imprime_titulo_vo:
        :type requisicao_imprime_titulo_vo: RequisicaoImprimeTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._imprime_boleto_multiplo_serialize(
            requisicao_imprime_titulo_vo=requisicao_imprime_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoImpressaoBoleto",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def imprime_boleto_multiplo_without_preload_content(
        self,
        requisicao_imprime_titulo_vo: Optional[RequisicaoImprimeTituloVO] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Impressão de boleto

        Impressão de boleto, limitada a 20 títulos.

        :param requisicao_imprime_titulo_vo:
        :type requisicao_imprime_titulo_vo: RequisicaoImprimeTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._imprime_boleto_multiplo_serialize(
            requisicao_imprime_titulo_vo=requisicao_imprime_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoImpressaoBoleto",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _imprime_boleto_multiplo_serialize(
        self,
        requisicao_imprime_titulo_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_imprime_titulo_vo is not None:
            _body_params = requisicao_imprime_titulo_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/imprime-boleto",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def imprime_carne(
        self,
        codigo_beneficiario: Annotated[
            Optional[StrictStr], Field(description="Código do convênio do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do pagador do título")
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr], Field(description="Nosso número do título")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoImpressaoBoleto:
        """Impressão de carnê

        Impressão de carnê, limitada a 1 carnê com suas respectivas parcelas.

        :param codigo_beneficiario: Código do convênio do beneficiário
        :type codigo_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título
        :type cpf_cnpj_pagador: str
        :param nosso_numero: Nosso número do título
        :type nosso_numero: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._imprime_carne_serialize(
            codigo_beneficiario=codigo_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nosso_numero=nosso_numero,
            data_vencimento=data_vencimento,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoImpressaoBoleto",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def imprime_carne_with_http_info(
        self,
        codigo_beneficiario: Annotated[
            Optional[StrictStr], Field(description="Código do convênio do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do pagador do título")
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr], Field(description="Nosso número do título")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoImpressaoBoleto]:
        """Impressão de carnê

        Impressão de carnê, limitada a 1 carnê com suas respectivas parcelas.

        :param codigo_beneficiario: Código do convênio do beneficiário
        :type codigo_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título
        :type cpf_cnpj_pagador: str
        :param nosso_numero: Nosso número do título
        :type nosso_numero: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._imprime_carne_serialize(
            codigo_beneficiario=codigo_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nosso_numero=nosso_numero,
            data_vencimento=data_vencimento,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoImpressaoBoleto",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def imprime_carne_without_preload_content(
        self,
        codigo_beneficiario: Annotated[
            Optional[StrictStr], Field(description="Código do convênio do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do pagador do título")
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr], Field(description="Nosso número do título")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Impressão de carnê

        Impressão de carnê, limitada a 1 carnê com suas respectivas parcelas.

        :param codigo_beneficiario: Código do convênio do beneficiário
        :type codigo_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título
        :type cpf_cnpj_pagador: str
        :param nosso_numero: Nosso número do título
        :type nosso_numero: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._imprime_carne_serialize(
            codigo_beneficiario=codigo_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nosso_numero=nosso_numero,
            data_vencimento=data_vencimento,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoImpressaoBoleto",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _imprime_carne_serialize(
        self,
        codigo_beneficiario,
        cpf_cnpj_pagador,
        nosso_numero,
        data_vencimento,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        if codigo_beneficiario is not None:
            _query_params.append(("codigoBeneficiario", codigo_beneficiario))

        if cpf_cnpj_pagador is not None:
            _query_params.append(("cpfCnpjPagador", cpf_cnpj_pagador))

        if nosso_numero is not None:
            _query_params.append(("nossoNumero", nosso_numero))

        if data_vencimento is not None:
            _query_params.append(("dataVencimento", data_vencimento))

        # process the header parameters
        # process the form parameters
        # process the body parameter

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="GET",
            resource_path="/rest/cobranca/imprimeCarne",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def pagador_get_consulta(
        self,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="CPF/CNPJ do pagador do título, obrigatório caso o nome do pagador não seja preenchido."
            ),
        ] = None,
        nome_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="Nome do pagador do título, obrigatório caso o CPF/CNPJ do pagador não seja preenchido."
            ),
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaPagadorVO:
        """Consulta cadastro do pagador

        Consulta cadastro do pagador. Necessário informar o CPF/CNPJ ou o nome do pagador

        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título, obrigatório caso o nome do pagador não seja preenchido.
        :type cpf_cnpj_pagador: str
        :param nome_pagador: Nome do pagador do título, obrigatório caso o CPF/CNPJ do pagador não seja preenchido.
        :type nome_pagador: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._pagador_get_consulta_serialize(
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nome_pagador=nome_pagador,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaPagadorVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def pagador_get_consulta_with_http_info(
        self,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="CPF/CNPJ do pagador do título, obrigatório caso o nome do pagador não seja preenchido."
            ),
        ] = None,
        nome_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="Nome do pagador do título, obrigatório caso o CPF/CNPJ do pagador não seja preenchido."
            ),
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaPagadorVO]:
        """Consulta cadastro do pagador

        Consulta cadastro do pagador. Necessário informar o CPF/CNPJ ou o nome do pagador

        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título, obrigatório caso o nome do pagador não seja preenchido.
        :type cpf_cnpj_pagador: str
        :param nome_pagador: Nome do pagador do título, obrigatório caso o CPF/CNPJ do pagador não seja preenchido.
        :type nome_pagador: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._pagador_get_consulta_serialize(
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nome_pagador=nome_pagador,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaPagadorVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def pagador_get_consulta_without_preload_content(
        self,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="CPF/CNPJ do pagador do título, obrigatório caso o nome do pagador não seja preenchido."
            ),
        ] = None,
        nome_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="Nome do pagador do título, obrigatório caso o CPF/CNPJ do pagador não seja preenchido."
            ),
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Consulta cadastro do pagador

        Consulta cadastro do pagador. Necessário informar o CPF/CNPJ ou o nome do pagador

        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título, obrigatório caso o nome do pagador não seja preenchido.
        :type cpf_cnpj_pagador: str
        :param nome_pagador: Nome do pagador do título, obrigatório caso o CPF/CNPJ do pagador não seja preenchido.
        :type nome_pagador: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._pagador_get_consulta_serialize(
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nome_pagador=nome_pagador,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaPagadorVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _pagador_get_consulta_serialize(
        self,
        cpf_cnpj_pagador,
        nome_pagador,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        if cpf_cnpj_pagador is not None:
            _query_params.append(("cpfCnpjPagador", cpf_cnpj_pagador))

        if nome_pagador is not None:
            _query_params.append(("nomePagador", nome_pagador))

        # process the header parameters
        # process the form parameters
        # process the body parameter

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="GET",
            resource_path="/rest/cobranca/pagador/consulta",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def pagador_put_atualiza(
        self,
        pagador: Optional[Pagador] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoPagador:
        """Atualiza cadastro do pagador

        Atualiza cadastro do pagador.

        :param pagador:
        :type pagador: Pagador
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._pagador_put_atualiza_serialize(
            pagador=pagador,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPagador",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def pagador_put_atualiza_with_http_info(
        self,
        pagador: Optional[Pagador] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoPagador]:
        """Atualiza cadastro do pagador

        Atualiza cadastro do pagador.

        :param pagador:
        :type pagador: Pagador
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._pagador_put_atualiza_serialize(
            pagador=pagador,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPagador",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def pagador_put_atualiza_without_preload_content(
        self,
        pagador: Optional[Pagador] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Atualiza cadastro do pagador

        Atualiza cadastro do pagador.

        :param pagador:
        :type pagador: Pagador
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._pagador_put_atualiza_serialize(
            pagador=pagador,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPagador",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _pagador_put_atualiza_serialize(
        self,
        pagador,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if pagador is not None:
            _body_params = pagador

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="PUT",
            resource_path="/rest/cobranca/pagador/atualiza",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_movimenta_abatimento_alterar(
        self,
        requisicao_movimenta_titulo_abatimento_vo: Optional[
            RequisicaoMovimentaTituloAbatimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaTituloVO:
        """Movimento de alteração de abatimento de títulos

        Movimento de alteração de abatimento de títulos

        :param requisicao_movimenta_titulo_abatimento_vo:
        :type requisicao_movimenta_titulo_abatimento_vo: RequisicaoMovimentaTituloAbatimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_abatimento_alterar_serialize(
            requisicao_movimenta_titulo_abatimento_vo=requisicao_movimenta_titulo_abatimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_movimenta_abatimento_alterar_with_http_info(
        self,
        requisicao_movimenta_titulo_abatimento_vo: Optional[
            RequisicaoMovimentaTituloAbatimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaTituloVO]:
        """Movimento de alteração de abatimento de títulos

        Movimento de alteração de abatimento de títulos

        :param requisicao_movimenta_titulo_abatimento_vo:
        :type requisicao_movimenta_titulo_abatimento_vo: RequisicaoMovimentaTituloAbatimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_abatimento_alterar_serialize(
            requisicao_movimenta_titulo_abatimento_vo=requisicao_movimenta_titulo_abatimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_movimenta_abatimento_alterar_without_preload_content(
        self,
        requisicao_movimenta_titulo_abatimento_vo: Optional[
            RequisicaoMovimentaTituloAbatimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Movimento de alteração de abatimento de títulos

        Movimento de alteração de abatimento de títulos

        :param requisicao_movimenta_titulo_abatimento_vo:
        :type requisicao_movimenta_titulo_abatimento_vo: RequisicaoMovimentaTituloAbatimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_abatimento_alterar_serialize(
            requisicao_movimenta_titulo_abatimento_vo=requisicao_movimenta_titulo_abatimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_movimenta_abatimento_alterar_serialize(
        self,
        requisicao_movimenta_titulo_abatimento_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_movimenta_titulo_abatimento_vo is not None:
            _body_params = requisicao_movimenta_titulo_abatimento_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/movimento/abatimento-alterar",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_movimenta_abatimento_cancelar(
        self,
        requisicao_movimenta_titulo_cancela_abatimento_vo: Optional[
            RequisicaoMovimentaTituloCancelaAbatimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaTituloVO:
        """Movimento de cancelamento de abatimento de títulos

        Movimento de cancelamento de abatimento de títulos

        :param requisicao_movimenta_titulo_cancela_abatimento_vo:
        :type requisicao_movimenta_titulo_cancela_abatimento_vo: RequisicaoMovimentaTituloCancelaAbatimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_abatimento_cancelar_serialize(
            requisicao_movimenta_titulo_cancela_abatimento_vo=requisicao_movimenta_titulo_cancela_abatimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_movimenta_abatimento_cancelar_with_http_info(
        self,
        requisicao_movimenta_titulo_cancela_abatimento_vo: Optional[
            RequisicaoMovimentaTituloCancelaAbatimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaTituloVO]:
        """Movimento de cancelamento de abatimento de títulos

        Movimento de cancelamento de abatimento de títulos

        :param requisicao_movimenta_titulo_cancela_abatimento_vo:
        :type requisicao_movimenta_titulo_cancela_abatimento_vo: RequisicaoMovimentaTituloCancelaAbatimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_abatimento_cancelar_serialize(
            requisicao_movimenta_titulo_cancela_abatimento_vo=requisicao_movimenta_titulo_cancela_abatimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_movimenta_abatimento_cancelar_without_preload_content(
        self,
        requisicao_movimenta_titulo_cancela_abatimento_vo: Optional[
            RequisicaoMovimentaTituloCancelaAbatimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Movimento de cancelamento de abatimento de títulos

        Movimento de cancelamento de abatimento de títulos

        :param requisicao_movimenta_titulo_cancela_abatimento_vo:
        :type requisicao_movimenta_titulo_cancela_abatimento_vo: RequisicaoMovimentaTituloCancelaAbatimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_abatimento_cancelar_serialize(
            requisicao_movimenta_titulo_cancela_abatimento_vo=requisicao_movimenta_titulo_cancela_abatimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_movimenta_abatimento_cancelar_serialize(
        self,
        requisicao_movimenta_titulo_cancela_abatimento_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_movimenta_titulo_cancela_abatimento_vo is not None:
            _body_params = requisicao_movimenta_titulo_cancela_abatimento_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/movimento/abatimento-cancelar",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_movimenta_abatimento_conceder(
        self,
        requisicao_movimenta_titulo_abatimento_vo: Optional[
            RequisicaoMovimentaTituloAbatimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaTituloVO:
        """Movimento de concessão de abatimento de títulos

        Movimento de concessão de abatimento de títulos

        :param requisicao_movimenta_titulo_abatimento_vo:
        :type requisicao_movimenta_titulo_abatimento_vo: RequisicaoMovimentaTituloAbatimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_abatimento_conceder_serialize(
            requisicao_movimenta_titulo_abatimento_vo=requisicao_movimenta_titulo_abatimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_movimenta_abatimento_conceder_with_http_info(
        self,
        requisicao_movimenta_titulo_abatimento_vo: Optional[
            RequisicaoMovimentaTituloAbatimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaTituloVO]:
        """Movimento de concessão de abatimento de títulos

        Movimento de concessão de abatimento de títulos

        :param requisicao_movimenta_titulo_abatimento_vo:
        :type requisicao_movimenta_titulo_abatimento_vo: RequisicaoMovimentaTituloAbatimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_abatimento_conceder_serialize(
            requisicao_movimenta_titulo_abatimento_vo=requisicao_movimenta_titulo_abatimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_movimenta_abatimento_conceder_without_preload_content(
        self,
        requisicao_movimenta_titulo_abatimento_vo: Optional[
            RequisicaoMovimentaTituloAbatimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Movimento de concessão de abatimento de títulos

        Movimento de concessão de abatimento de títulos

        :param requisicao_movimenta_titulo_abatimento_vo:
        :type requisicao_movimenta_titulo_abatimento_vo: RequisicaoMovimentaTituloAbatimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_abatimento_conceder_serialize(
            requisicao_movimenta_titulo_abatimento_vo=requisicao_movimenta_titulo_abatimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_movimenta_abatimento_conceder_serialize(
        self,
        requisicao_movimenta_titulo_abatimento_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_movimenta_titulo_abatimento_vo is not None:
            _body_params = requisicao_movimenta_titulo_abatimento_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/movimento/abatimento-conceder",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_movimenta_baixa(
        self,
        requisicao_movimenta_titulo_baixa_vo: Optional[
            RequisicaoMovimentaTituloBaixaVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaTituloVO:
        """Movimento de baixa de títulos

        Movimenta pedido de baixa títulos.

        :param requisicao_movimenta_titulo_baixa_vo:
        :type requisicao_movimenta_titulo_baixa_vo: RequisicaoMovimentaTituloBaixaVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_baixa_serialize(
            requisicao_movimenta_titulo_baixa_vo=requisicao_movimenta_titulo_baixa_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_movimenta_baixa_with_http_info(
        self,
        requisicao_movimenta_titulo_baixa_vo: Optional[
            RequisicaoMovimentaTituloBaixaVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaTituloVO]:
        """Movimento de baixa de títulos

        Movimenta pedido de baixa títulos.

        :param requisicao_movimenta_titulo_baixa_vo:
        :type requisicao_movimenta_titulo_baixa_vo: RequisicaoMovimentaTituloBaixaVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_baixa_serialize(
            requisicao_movimenta_titulo_baixa_vo=requisicao_movimenta_titulo_baixa_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_movimenta_baixa_without_preload_content(
        self,
        requisicao_movimenta_titulo_baixa_vo: Optional[
            RequisicaoMovimentaTituloBaixaVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Movimento de baixa de títulos

        Movimenta pedido de baixa títulos.

        :param requisicao_movimenta_titulo_baixa_vo:
        :type requisicao_movimenta_titulo_baixa_vo: RequisicaoMovimentaTituloBaixaVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_baixa_serialize(
            requisicao_movimenta_titulo_baixa_vo=requisicao_movimenta_titulo_baixa_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_movimenta_baixa_serialize(
        self,
        requisicao_movimenta_titulo_baixa_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_movimenta_titulo_baixa_vo is not None:
            _body_params = requisicao_movimenta_titulo_baixa_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/movimento/baixa",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_movimenta_desconto_alterar(
        self,
        requisicao_movimenta_desconto_titulo_vo: Optional[
            RequisicaoMovimentaDescontoTituloVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaTituloVO:
        """Movimento de desconto do título

        Movimento de desconto do título.

        :param requisicao_movimenta_desconto_titulo_vo:
        :type requisicao_movimenta_desconto_titulo_vo: RequisicaoMovimentaDescontoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_desconto_alterar_serialize(
            requisicao_movimenta_desconto_titulo_vo=requisicao_movimenta_desconto_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_movimenta_desconto_alterar_with_http_info(
        self,
        requisicao_movimenta_desconto_titulo_vo: Optional[
            RequisicaoMovimentaDescontoTituloVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaTituloVO]:
        """Movimento de desconto do título

        Movimento de desconto do título.

        :param requisicao_movimenta_desconto_titulo_vo:
        :type requisicao_movimenta_desconto_titulo_vo: RequisicaoMovimentaDescontoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_desconto_alterar_serialize(
            requisicao_movimenta_desconto_titulo_vo=requisicao_movimenta_desconto_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_movimenta_desconto_alterar_without_preload_content(
        self,
        requisicao_movimenta_desconto_titulo_vo: Optional[
            RequisicaoMovimentaDescontoTituloVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Movimento de desconto do título

        Movimento de desconto do título.

        :param requisicao_movimenta_desconto_titulo_vo:
        :type requisicao_movimenta_desconto_titulo_vo: RequisicaoMovimentaDescontoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_desconto_alterar_serialize(
            requisicao_movimenta_desconto_titulo_vo=requisicao_movimenta_desconto_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_movimenta_desconto_alterar_serialize(
        self,
        requisicao_movimenta_desconto_titulo_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_movimenta_desconto_titulo_vo is not None:
            _body_params = requisicao_movimenta_desconto_titulo_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/movimento/desconto-alterar",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_movimenta_desconto_cancelar(
        self,
        requisicao_movimenta_cancela_desconto_titulo_vo: Optional[
            RequisicaoMovimentaCancelaDescontoTituloVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaTituloVO:
        """Movimento de cancelar desconto do título

        Movimento de cancelar desconto do título.

        :param requisicao_movimenta_cancela_desconto_titulo_vo:
        :type requisicao_movimenta_cancela_desconto_titulo_vo: RequisicaoMovimentaCancelaDescontoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_desconto_cancelar_serialize(
            requisicao_movimenta_cancela_desconto_titulo_vo=requisicao_movimenta_cancela_desconto_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_movimenta_desconto_cancelar_with_http_info(
        self,
        requisicao_movimenta_cancela_desconto_titulo_vo: Optional[
            RequisicaoMovimentaCancelaDescontoTituloVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaTituloVO]:
        """Movimento de cancelar desconto do título

        Movimento de cancelar desconto do título.

        :param requisicao_movimenta_cancela_desconto_titulo_vo:
        :type requisicao_movimenta_cancela_desconto_titulo_vo: RequisicaoMovimentaCancelaDescontoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_desconto_cancelar_serialize(
            requisicao_movimenta_cancela_desconto_titulo_vo=requisicao_movimenta_cancela_desconto_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_movimenta_desconto_cancelar_without_preload_content(
        self,
        requisicao_movimenta_cancela_desconto_titulo_vo: Optional[
            RequisicaoMovimentaCancelaDescontoTituloVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Movimento de cancelar desconto do título

        Movimento de cancelar desconto do título.

        :param requisicao_movimenta_cancela_desconto_titulo_vo:
        :type requisicao_movimenta_cancela_desconto_titulo_vo: RequisicaoMovimentaCancelaDescontoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_desconto_cancelar_serialize(
            requisicao_movimenta_cancela_desconto_titulo_vo=requisicao_movimenta_cancela_desconto_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_movimenta_desconto_cancelar_serialize(
        self,
        requisicao_movimenta_cancela_desconto_titulo_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_movimenta_cancela_desconto_titulo_vo is not None:
            _body_params = requisicao_movimenta_cancela_desconto_titulo_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/movimento/desconto-cancelar",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_movimenta_desconto_conceder(
        self,
        requisicao_movimenta_desconto_titulo_vo: Optional[
            RequisicaoMovimentaDescontoTituloVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaTituloVO:
        """Movimento de desconto do título

        Movimento de desconto do título.

        :param requisicao_movimenta_desconto_titulo_vo:
        :type requisicao_movimenta_desconto_titulo_vo: RequisicaoMovimentaDescontoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_desconto_conceder_serialize(
            requisicao_movimenta_desconto_titulo_vo=requisicao_movimenta_desconto_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_movimenta_desconto_conceder_with_http_info(
        self,
        requisicao_movimenta_desconto_titulo_vo: Optional[
            RequisicaoMovimentaDescontoTituloVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaTituloVO]:
        """Movimento de desconto do título

        Movimento de desconto do título.

        :param requisicao_movimenta_desconto_titulo_vo:
        :type requisicao_movimenta_desconto_titulo_vo: RequisicaoMovimentaDescontoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_desconto_conceder_serialize(
            requisicao_movimenta_desconto_titulo_vo=requisicao_movimenta_desconto_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_movimenta_desconto_conceder_without_preload_content(
        self,
        requisicao_movimenta_desconto_titulo_vo: Optional[
            RequisicaoMovimentaDescontoTituloVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Movimento de desconto do título

        Movimento de desconto do título.

        :param requisicao_movimenta_desconto_titulo_vo:
        :type requisicao_movimenta_desconto_titulo_vo: RequisicaoMovimentaDescontoTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_desconto_conceder_serialize(
            requisicao_movimenta_desconto_titulo_vo=requisicao_movimenta_desconto_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_movimenta_desconto_conceder_serialize(
        self,
        requisicao_movimenta_desconto_titulo_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_movimenta_desconto_titulo_vo is not None:
            _body_params = requisicao_movimenta_desconto_titulo_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/movimento/desconto-conceder",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_movimenta_negativacao_nominal(
        self,
        requisicao_movimenta_titulo_negativar_vo: Optional[
            RequisicaoMovimentaTituloNegativarVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaTituloVO:
        """Movimento de negativação de títulos

        Movimenta a negativação de títulos.

        :param requisicao_movimenta_titulo_negativar_vo:
        :type requisicao_movimenta_titulo_negativar_vo: RequisicaoMovimentaTituloNegativarVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_negativacao_nominal_serialize(
            requisicao_movimenta_titulo_negativar_vo=requisicao_movimenta_titulo_negativar_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_movimenta_negativacao_nominal_with_http_info(
        self,
        requisicao_movimenta_titulo_negativar_vo: Optional[
            RequisicaoMovimentaTituloNegativarVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaTituloVO]:
        """Movimento de negativação de títulos

        Movimenta a negativação de títulos.

        :param requisicao_movimenta_titulo_negativar_vo:
        :type requisicao_movimenta_titulo_negativar_vo: RequisicaoMovimentaTituloNegativarVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_negativacao_nominal_serialize(
            requisicao_movimenta_titulo_negativar_vo=requisicao_movimenta_titulo_negativar_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_movimenta_negativacao_nominal_without_preload_content(
        self,
        requisicao_movimenta_titulo_negativar_vo: Optional[
            RequisicaoMovimentaTituloNegativarVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Movimento de negativação de títulos

        Movimenta a negativação de títulos.

        :param requisicao_movimenta_titulo_negativar_vo:
        :type requisicao_movimenta_titulo_negativar_vo: RequisicaoMovimentaTituloNegativarVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_negativacao_nominal_serialize(
            requisicao_movimenta_titulo_negativar_vo=requisicao_movimenta_titulo_negativar_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_movimenta_negativacao_nominal_serialize(
        self,
        requisicao_movimenta_titulo_negativar_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_movimenta_titulo_negativar_vo is not None:
            _body_params = requisicao_movimenta_titulo_negativar_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/movimento/negativar",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_movimenta_protesto(
        self,
        requisicao_movimenta_titulo_protesto_vo: Optional[
            RequisicaoMovimentaTituloProtestoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaTituloVO:
        """Movimento de protesto de títulos

        Movimenta protesta de títulos.

        :param requisicao_movimenta_titulo_protesto_vo:
        :type requisicao_movimenta_titulo_protesto_vo: RequisicaoMovimentaTituloProtestoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_protesto_serialize(
            requisicao_movimenta_titulo_protesto_vo=requisicao_movimenta_titulo_protesto_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_movimenta_protesto_with_http_info(
        self,
        requisicao_movimenta_titulo_protesto_vo: Optional[
            RequisicaoMovimentaTituloProtestoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaTituloVO]:
        """Movimento de protesto de títulos

        Movimenta protesta de títulos.

        :param requisicao_movimenta_titulo_protesto_vo:
        :type requisicao_movimenta_titulo_protesto_vo: RequisicaoMovimentaTituloProtestoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_protesto_serialize(
            requisicao_movimenta_titulo_protesto_vo=requisicao_movimenta_titulo_protesto_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_movimenta_protesto_without_preload_content(
        self,
        requisicao_movimenta_titulo_protesto_vo: Optional[
            RequisicaoMovimentaTituloProtestoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Movimento de protesto de títulos

        Movimenta protesta de títulos.

        :param requisicao_movimenta_titulo_protesto_vo:
        :type requisicao_movimenta_titulo_protesto_vo: RequisicaoMovimentaTituloProtestoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_protesto_serialize(
            requisicao_movimenta_titulo_protesto_vo=requisicao_movimenta_titulo_protesto_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_movimenta_protesto_serialize(
        self,
        requisicao_movimenta_titulo_protesto_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_movimenta_titulo_protesto_vo is not None:
            _body_params = requisicao_movimenta_titulo_protesto_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/movimento/protestar",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_movimenta_valor_nominal(
        self,
        requisicao_movimenta_titulo_valor_nominal_vo: Optional[
            RequisicaoMovimentaTituloValorNominalVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaTituloVO:
        """Movimento de alterar o valor nominal do títulos

        Movimenta alteração do valor nominal de títulos.

        :param requisicao_movimenta_titulo_valor_nominal_vo:
        :type requisicao_movimenta_titulo_valor_nominal_vo: RequisicaoMovimentaTituloValorNominalVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_valor_nominal_serialize(
            requisicao_movimenta_titulo_valor_nominal_vo=requisicao_movimenta_titulo_valor_nominal_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_movimenta_valor_nominal_with_http_info(
        self,
        requisicao_movimenta_titulo_valor_nominal_vo: Optional[
            RequisicaoMovimentaTituloValorNominalVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaTituloVO]:
        """Movimento de alterar o valor nominal do títulos

        Movimenta alteração do valor nominal de títulos.

        :param requisicao_movimenta_titulo_valor_nominal_vo:
        :type requisicao_movimenta_titulo_valor_nominal_vo: RequisicaoMovimentaTituloValorNominalVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_valor_nominal_serialize(
            requisicao_movimenta_titulo_valor_nominal_vo=requisicao_movimenta_titulo_valor_nominal_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_movimenta_valor_nominal_without_preload_content(
        self,
        requisicao_movimenta_titulo_valor_nominal_vo: Optional[
            RequisicaoMovimentaTituloValorNominalVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Movimento de alterar o valor nominal do títulos

        Movimenta alteração do valor nominal de títulos.

        :param requisicao_movimenta_titulo_valor_nominal_vo:
        :type requisicao_movimenta_titulo_valor_nominal_vo: RequisicaoMovimentaTituloValorNominalVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_valor_nominal_serialize(
            requisicao_movimenta_titulo_valor_nominal_vo=requisicao_movimenta_titulo_valor_nominal_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_movimenta_valor_nominal_serialize(
        self,
        requisicao_movimenta_titulo_valor_nominal_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_movimenta_titulo_valor_nominal_vo is not None:
            _body_params = requisicao_movimenta_titulo_valor_nominal_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/movimento/valor-nominal",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_movimenta_vencimento(
        self,
        requisicao_movimenta_titulo_vencimento_vo: Optional[
            RequisicaoMovimentaTituloVencimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoListaTituloVO:
        """Movimento de alteração de vencimento dos títulos

        Movimenta a alteração do vencimento dos títulos.

        :param requisicao_movimenta_titulo_vencimento_vo:
        :type requisicao_movimenta_titulo_vencimento_vo: RequisicaoMovimentaTituloVencimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_vencimento_serialize(
            requisicao_movimenta_titulo_vencimento_vo=requisicao_movimenta_titulo_vencimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_movimenta_vencimento_with_http_info(
        self,
        requisicao_movimenta_titulo_vencimento_vo: Optional[
            RequisicaoMovimentaTituloVencimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoListaTituloVO]:
        """Movimento de alteração de vencimento dos títulos

        Movimenta a alteração do vencimento dos títulos.

        :param requisicao_movimenta_titulo_vencimento_vo:
        :type requisicao_movimenta_titulo_vencimento_vo: RequisicaoMovimentaTituloVencimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_vencimento_serialize(
            requisicao_movimenta_titulo_vencimento_vo=requisicao_movimenta_titulo_vencimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_movimenta_vencimento_without_preload_content(
        self,
        requisicao_movimenta_titulo_vencimento_vo: Optional[
            RequisicaoMovimentaTituloVencimentoVO
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Movimento de alteração de vencimento dos títulos

        Movimenta a alteração do vencimento dos títulos.

        :param requisicao_movimenta_titulo_vencimento_vo:
        :type requisicao_movimenta_titulo_vencimento_vo: RequisicaoMovimentaTituloVencimentoVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_movimenta_vencimento_serialize(
            requisicao_movimenta_titulo_vencimento_vo=requisicao_movimenta_titulo_vencimento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoListaTituloVO",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_movimenta_vencimento_serialize(
        self,
        requisicao_movimenta_titulo_vencimento_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_movimenta_titulo_vencimento_vo is not None:
            _body_params = requisicao_movimenta_titulo_vencimento_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/movimento/vencimento",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_pesquisa(
        self,
        codigo_banco_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        codigo_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cnpj_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário."
            ),
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr], Field(description="Nosso número do título")
        ] = None,
        seu_numero: Annotated[
            Optional[StrictStr], Field(description="Seu número do título")
        ] = None,
        uso_empresa: Annotated[
            Optional[StrictStr], Field(description="Uso empresa")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        valor_nominal: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor nominal do título (formato 0.00)"),
        ] = None,
        situacao_titulo: Annotated[
            Optional[List[StrictStr]], Field(description="Situação do título")
        ] = None,
        pagina: Annotated[
            Optional[StrictInt], Field(description="Página do resultado")
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoPesquisaPaginada:
        """Pesquisa de títulos

        Pesquisa de títulos, limitada a 100 títulos, mas pode-se buscar a próxima página de acordo com o parâmetro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>É obrigatório filtrar pelos dados do beneficiário (codigoBancoBeneficiario, cnpjBeneficiario e codigoBeneficiario preenchidos) ou pelo CPF/CNPJ do pagador (cpfCnpjPagador).

        :param codigo_banco_beneficiario: Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_banco_beneficiario: str
        :param codigo_beneficiario: Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_beneficiario: str
        :param cnpj_beneficiario: CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário.
        :type cpf_cnpj_pagador: str
        :param nosso_numero: Nosso número do título
        :type nosso_numero: str
        :param seu_numero: Seu número do título
        :type seu_numero: str
        :param uso_empresa: Uso empresa
        :type uso_empresa: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param valor_nominal: Valor nominal do título (formato 0.00)
        :type valor_nominal: float
        :param situacao_titulo: Situação do título
        :type situacao_titulo: List[str]
        :param pagina: Página do resultado
        :type pagina: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_pesquisa_serialize(
            codigo_banco_beneficiario=codigo_banco_beneficiario,
            codigo_beneficiario=codigo_beneficiario,
            cnpj_beneficiario=cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nosso_numero=nosso_numero,
            seu_numero=seu_numero,
            uso_empresa=uso_empresa,
            data_vencimento=data_vencimento,
            valor_nominal=valor_nominal,
            situacao_titulo=situacao_titulo,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaPaginada",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_pesquisa_with_http_info(
        self,
        codigo_banco_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        codigo_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cnpj_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário."
            ),
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr], Field(description="Nosso número do título")
        ] = None,
        seu_numero: Annotated[
            Optional[StrictStr], Field(description="Seu número do título")
        ] = None,
        uso_empresa: Annotated[
            Optional[StrictStr], Field(description="Uso empresa")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        valor_nominal: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor nominal do título (formato 0.00)"),
        ] = None,
        situacao_titulo: Annotated[
            Optional[List[StrictStr]], Field(description="Situação do título")
        ] = None,
        pagina: Annotated[
            Optional[StrictInt], Field(description="Página do resultado")
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoPesquisaPaginada]:
        """Pesquisa de títulos

        Pesquisa de títulos, limitada a 100 títulos, mas pode-se buscar a próxima página de acordo com o parâmetro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>É obrigatório filtrar pelos dados do beneficiário (codigoBancoBeneficiario, cnpjBeneficiario e codigoBeneficiario preenchidos) ou pelo CPF/CNPJ do pagador (cpfCnpjPagador).

        :param codigo_banco_beneficiario: Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_banco_beneficiario: str
        :param codigo_beneficiario: Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_beneficiario: str
        :param cnpj_beneficiario: CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário.
        :type cpf_cnpj_pagador: str
        :param nosso_numero: Nosso número do título
        :type nosso_numero: str
        :param seu_numero: Seu número do título
        :type seu_numero: str
        :param uso_empresa: Uso empresa
        :type uso_empresa: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param valor_nominal: Valor nominal do título (formato 0.00)
        :type valor_nominal: float
        :param situacao_titulo: Situação do título
        :type situacao_titulo: List[str]
        :param pagina: Página do resultado
        :type pagina: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_pesquisa_serialize(
            codigo_banco_beneficiario=codigo_banco_beneficiario,
            codigo_beneficiario=codigo_beneficiario,
            cnpj_beneficiario=cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nosso_numero=nosso_numero,
            seu_numero=seu_numero,
            uso_empresa=uso_empresa,
            data_vencimento=data_vencimento,
            valor_nominal=valor_nominal,
            situacao_titulo=situacao_titulo,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaPaginada",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_pesquisa_without_preload_content(
        self,
        codigo_banco_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        codigo_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cnpj_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário."
            ),
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr], Field(description="Nosso número do título")
        ] = None,
        seu_numero: Annotated[
            Optional[StrictStr], Field(description="Seu número do título")
        ] = None,
        uso_empresa: Annotated[
            Optional[StrictStr], Field(description="Uso empresa")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        valor_nominal: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor nominal do título (formato 0.00)"),
        ] = None,
        situacao_titulo: Annotated[
            Optional[List[StrictStr]], Field(description="Situação do título")
        ] = None,
        pagina: Annotated[
            Optional[StrictInt], Field(description="Página do resultado")
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Pesquisa de títulos

        Pesquisa de títulos, limitada a 100 títulos, mas pode-se buscar a próxima página de acordo com o parâmetro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>É obrigatório filtrar pelos dados do beneficiário (codigoBancoBeneficiario, cnpjBeneficiario e codigoBeneficiario preenchidos) ou pelo CPF/CNPJ do pagador (cpfCnpjPagador).

        :param codigo_banco_beneficiario: Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_banco_beneficiario: str
        :param codigo_beneficiario: Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_beneficiario: str
        :param cnpj_beneficiario: CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário.
        :type cpf_cnpj_pagador: str
        :param nosso_numero: Nosso número do título
        :type nosso_numero: str
        :param seu_numero: Seu número do título
        :type seu_numero: str
        :param uso_empresa: Uso empresa
        :type uso_empresa: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param valor_nominal: Valor nominal do título (formato 0.00)
        :type valor_nominal: float
        :param situacao_titulo: Situação do título
        :type situacao_titulo: List[str]
        :param pagina: Página do resultado
        :type pagina: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_pesquisa_serialize(
            codigo_banco_beneficiario=codigo_banco_beneficiario,
            codigo_beneficiario=codigo_beneficiario,
            cnpj_beneficiario=cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            nosso_numero=nosso_numero,
            seu_numero=seu_numero,
            uso_empresa=uso_empresa,
            data_vencimento=data_vencimento,
            valor_nominal=valor_nominal,
            situacao_titulo=situacao_titulo,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaPaginada",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_pesquisa_serialize(
        self,
        codigo_banco_beneficiario,
        codigo_beneficiario,
        cnpj_beneficiario,
        cpf_cnpj_pagador,
        nosso_numero,
        seu_numero,
        uso_empresa,
        data_vencimento,
        valor_nominal,
        situacao_titulo,
        pagina,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {
            "situacaoTitulo": "multi",
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        if codigo_banco_beneficiario is not None:
            _query_params.append(("codigoBancoBeneficiario", codigo_banco_beneficiario))

        if codigo_beneficiario is not None:
            _query_params.append(("codigoBeneficiario", codigo_beneficiario))

        if cnpj_beneficiario is not None:
            _query_params.append(("cnpjBeneficiario", cnpj_beneficiario))

        if cpf_cnpj_pagador is not None:
            _query_params.append(("cpfCnpjPagador", cpf_cnpj_pagador))

        if nosso_numero is not None:
            _query_params.append(("nossoNumero", nosso_numero))

        if seu_numero is not None:
            _query_params.append(("seuNumero", seu_numero))

        if uso_empresa is not None:
            _query_params.append(("usoEmpresa", uso_empresa))

        if data_vencimento is not None:
            _query_params.append(("dataVencimento", data_vencimento))

        if valor_nominal is not None:
            _query_params.append(("valorNominal", valor_nominal))

        if situacao_titulo is not None:
            _query_params.append(("situacaoTitulo", situacao_titulo))

        if pagina is not None:
            _query_params.append(("pagina", pagina))

        # process the header parameters
        # process the form parameters
        # process the body parameter

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="GET",
            resource_path="/rest/cobranca/titulo/pesquisa",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_pesquisa_ocorrencia(
        self,
        codigo_banco_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        codigo_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cnpj_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário."
            ),
        ] = None,
        tipo_ocorrencia: Annotated[
            Optional[StrictStr], Field(description="Tipo de ocorrência")
        ] = None,
        data_ocorrencia_inicial: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de ocorrência inicial (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias."
            ),
        ] = None,
        data_ocorrencia_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de ocorrência final (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias."
            ),
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr],
            Field(
                description="Nosso número do título. Obrigatório caso a busca seja para determinado título."
            ),
        ] = None,
        seu_numero: Annotated[
            Optional[StrictStr],
            Field(
                description="Seu número do título. Obrigatório caso a busca seja para determinado título."
            ),
        ] = None,
        uso_empresa: Annotated[
            Optional[StrictStr],
            Field(
                description="Uso empresa. Obrigatório caso a busca seja para determinado título."
            ),
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        valor_nominal: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor nominal do título (formato 0.00)"),
        ] = None,
        situacao_titulo: Annotated[
            Optional[List[StrictStr]], Field(description="Situação do título")
        ] = None,
        pagina: Annotated[
            Optional[StrictInt], Field(description="Página do resultado")
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoPesquisaOcorrenciaPaginada:
        """Pesquisa de ocorrências

        Pesquisa de ocorrências dos títulos, limitada a 100 ocorrências, mas pode-se buscar a próxima página de acordo com o parâmetro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>É obrigatório filtrar pelos dados do beneficiário (codigoBancoBeneficiario, cnpjBeneficiario e codigoBeneficiario preenchidos) ou pelo CPF/CNPJ do pagador (cpfCnpjPagador).<br></br>É obrigatório filtrar por um título (nossoNumero, seuNumero, usoEmpresa preenchidos) ou por um período de ocorrências (dataOcorrenciaInicial e dataOcorrenciaFinal preenchidos), não maior que 2 dias.<br></br>Os movimentos (tipoOcorrencia) disponíveis para pesquisa são REGISTRO, BAIXA e LIQUIDACAO.

        :param codigo_banco_beneficiario: Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_banco_beneficiario: str
        :param codigo_beneficiario: Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_beneficiario: str
        :param cnpj_beneficiario: CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário.
        :type cpf_cnpj_pagador: str
        :param tipo_ocorrencia: Tipo de ocorrência
        :type tipo_ocorrencia: str
        :param data_ocorrencia_inicial: Data de ocorrência inicial (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias.
        :type data_ocorrencia_inicial: str
        :param data_ocorrencia_final: Data de ocorrência final (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias.
        :type data_ocorrencia_final: str
        :param nosso_numero: Nosso número do título. Obrigatório caso a busca seja para determinado título.
        :type nosso_numero: str
        :param seu_numero: Seu número do título. Obrigatório caso a busca seja para determinado título.
        :type seu_numero: str
        :param uso_empresa: Uso empresa. Obrigatório caso a busca seja para determinado título.
        :type uso_empresa: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param valor_nominal: Valor nominal do título (formato 0.00)
        :type valor_nominal: float
        :param situacao_titulo: Situação do título
        :type situacao_titulo: List[str]
        :param pagina: Página do resultado
        :type pagina: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_pesquisa_ocorrencia_serialize(
            codigo_banco_beneficiario=codigo_banco_beneficiario,
            codigo_beneficiario=codigo_beneficiario,
            cnpj_beneficiario=cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            tipo_ocorrencia=tipo_ocorrencia,
            data_ocorrencia_inicial=data_ocorrencia_inicial,
            data_ocorrencia_final=data_ocorrencia_final,
            nosso_numero=nosso_numero,
            seu_numero=seu_numero,
            uso_empresa=uso_empresa,
            data_vencimento=data_vencimento,
            valor_nominal=valor_nominal,
            situacao_titulo=situacao_titulo,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaOcorrenciaPaginada",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_pesquisa_ocorrencia_with_http_info(
        self,
        codigo_banco_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        codigo_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cnpj_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário."
            ),
        ] = None,
        tipo_ocorrencia: Annotated[
            Optional[StrictStr], Field(description="Tipo de ocorrência")
        ] = None,
        data_ocorrencia_inicial: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de ocorrência inicial (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias."
            ),
        ] = None,
        data_ocorrencia_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de ocorrência final (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias."
            ),
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr],
            Field(
                description="Nosso número do título. Obrigatório caso a busca seja para determinado título."
            ),
        ] = None,
        seu_numero: Annotated[
            Optional[StrictStr],
            Field(
                description="Seu número do título. Obrigatório caso a busca seja para determinado título."
            ),
        ] = None,
        uso_empresa: Annotated[
            Optional[StrictStr],
            Field(
                description="Uso empresa. Obrigatório caso a busca seja para determinado título."
            ),
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        valor_nominal: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor nominal do título (formato 0.00)"),
        ] = None,
        situacao_titulo: Annotated[
            Optional[List[StrictStr]], Field(description="Situação do título")
        ] = None,
        pagina: Annotated[
            Optional[StrictInt], Field(description="Página do resultado")
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoPesquisaOcorrenciaPaginada]:
        """Pesquisa de ocorrências

        Pesquisa de ocorrências dos títulos, limitada a 100 ocorrências, mas pode-se buscar a próxima página de acordo com o parâmetro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>É obrigatório filtrar pelos dados do beneficiário (codigoBancoBeneficiario, cnpjBeneficiario e codigoBeneficiario preenchidos) ou pelo CPF/CNPJ do pagador (cpfCnpjPagador).<br></br>É obrigatório filtrar por um título (nossoNumero, seuNumero, usoEmpresa preenchidos) ou por um período de ocorrências (dataOcorrenciaInicial e dataOcorrenciaFinal preenchidos), não maior que 2 dias.<br></br>Os movimentos (tipoOcorrencia) disponíveis para pesquisa são REGISTRO, BAIXA e LIQUIDACAO.

        :param codigo_banco_beneficiario: Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_banco_beneficiario: str
        :param codigo_beneficiario: Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_beneficiario: str
        :param cnpj_beneficiario: CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário.
        :type cpf_cnpj_pagador: str
        :param tipo_ocorrencia: Tipo de ocorrência
        :type tipo_ocorrencia: str
        :param data_ocorrencia_inicial: Data de ocorrência inicial (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias.
        :type data_ocorrencia_inicial: str
        :param data_ocorrencia_final: Data de ocorrência final (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias.
        :type data_ocorrencia_final: str
        :param nosso_numero: Nosso número do título. Obrigatório caso a busca seja para determinado título.
        :type nosso_numero: str
        :param seu_numero: Seu número do título. Obrigatório caso a busca seja para determinado título.
        :type seu_numero: str
        :param uso_empresa: Uso empresa. Obrigatório caso a busca seja para determinado título.
        :type uso_empresa: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param valor_nominal: Valor nominal do título (formato 0.00)
        :type valor_nominal: float
        :param situacao_titulo: Situação do título
        :type situacao_titulo: List[str]
        :param pagina: Página do resultado
        :type pagina: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_pesquisa_ocorrencia_serialize(
            codigo_banco_beneficiario=codigo_banco_beneficiario,
            codigo_beneficiario=codigo_beneficiario,
            cnpj_beneficiario=cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            tipo_ocorrencia=tipo_ocorrencia,
            data_ocorrencia_inicial=data_ocorrencia_inicial,
            data_ocorrencia_final=data_ocorrencia_final,
            nosso_numero=nosso_numero,
            seu_numero=seu_numero,
            uso_empresa=uso_empresa,
            data_vencimento=data_vencimento,
            valor_nominal=valor_nominal,
            situacao_titulo=situacao_titulo,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaOcorrenciaPaginada",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_pesquisa_ocorrencia_without_preload_content(
        self,
        codigo_banco_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        codigo_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cnpj_beneficiario: Annotated[
            Optional[StrictStr],
            Field(
                description="CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador."
            ),
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(
                description="CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário."
            ),
        ] = None,
        tipo_ocorrencia: Annotated[
            Optional[StrictStr], Field(description="Tipo de ocorrência")
        ] = None,
        data_ocorrencia_inicial: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de ocorrência inicial (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias."
            ),
        ] = None,
        data_ocorrencia_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de ocorrência final (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias."
            ),
        ] = None,
        nosso_numero: Annotated[
            Optional[StrictStr],
            Field(
                description="Nosso número do título. Obrigatório caso a busca seja para determinado título."
            ),
        ] = None,
        seu_numero: Annotated[
            Optional[StrictStr],
            Field(
                description="Seu número do título. Obrigatório caso a busca seja para determinado título."
            ),
        ] = None,
        uso_empresa: Annotated[
            Optional[StrictStr],
            Field(
                description="Uso empresa. Obrigatório caso a busca seja para determinado título."
            ),
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento (formato aaaa-mm-dd)"),
        ] = None,
        valor_nominal: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor nominal do título (formato 0.00)"),
        ] = None,
        situacao_titulo: Annotated[
            Optional[List[StrictStr]], Field(description="Situação do título")
        ] = None,
        pagina: Annotated[
            Optional[StrictInt], Field(description="Página do resultado")
        ] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Pesquisa de ocorrências

        Pesquisa de ocorrências dos títulos, limitada a 100 ocorrências, mas pode-se buscar a próxima página de acordo com o parâmetro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>É obrigatório filtrar pelos dados do beneficiário (codigoBancoBeneficiario, cnpjBeneficiario e codigoBeneficiario preenchidos) ou pelo CPF/CNPJ do pagador (cpfCnpjPagador).<br></br>É obrigatório filtrar por um título (nossoNumero, seuNumero, usoEmpresa preenchidos) ou por um período de ocorrências (dataOcorrenciaInicial e dataOcorrenciaFinal preenchidos), não maior que 2 dias.<br></br>Os movimentos (tipoOcorrencia) disponíveis para pesquisa são REGISTRO, BAIXA e LIQUIDACAO.

        :param codigo_banco_beneficiario: Banco do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_banco_beneficiario: str
        :param codigo_beneficiario: Código do convênio do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type codigo_beneficiario: str
        :param cnpj_beneficiario: CNPJ do beneficiário. Obrigatório caso a busca não seja filtrada por CPF/CNPJ do pagador.
        :type cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador do título. Obrigatório caso a busca não seja filtrada pelos dados do beneficiário.
        :type cpf_cnpj_pagador: str
        :param tipo_ocorrencia: Tipo de ocorrência
        :type tipo_ocorrencia: str
        :param data_ocorrencia_inicial: Data de ocorrência inicial (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias.
        :type data_ocorrencia_inicial: str
        :param data_ocorrencia_final: Data de ocorrência final (formato aaaa-mm-dd). Obrigatório caso a busca não seja para determinado título. Datas de ocorrência estão limitadas em um período máximo de 2 dias.
        :type data_ocorrencia_final: str
        :param nosso_numero: Nosso número do título. Obrigatório caso a busca seja para determinado título.
        :type nosso_numero: str
        :param seu_numero: Seu número do título. Obrigatório caso a busca seja para determinado título.
        :type seu_numero: str
        :param uso_empresa: Uso empresa. Obrigatório caso a busca seja para determinado título.
        :type uso_empresa: str
        :param data_vencimento: Data de vencimento (formato aaaa-mm-dd)
        :type data_vencimento: str
        :param valor_nominal: Valor nominal do título (formato 0.00)
        :type valor_nominal: float
        :param situacao_titulo: Situação do título
        :type situacao_titulo: List[str]
        :param pagina: Página do resultado
        :type pagina: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_pesquisa_ocorrencia_serialize(
            codigo_banco_beneficiario=codigo_banco_beneficiario,
            codigo_beneficiario=codigo_beneficiario,
            cnpj_beneficiario=cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            tipo_ocorrencia=tipo_ocorrencia,
            data_ocorrencia_inicial=data_ocorrencia_inicial,
            data_ocorrencia_final=data_ocorrencia_final,
            nosso_numero=nosso_numero,
            seu_numero=seu_numero,
            uso_empresa=uso_empresa,
            data_vencimento=data_vencimento,
            valor_nominal=valor_nominal,
            situacao_titulo=situacao_titulo,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaOcorrenciaPaginada",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_pesquisa_ocorrencia_serialize(
        self,
        codigo_banco_beneficiario,
        codigo_beneficiario,
        cnpj_beneficiario,
        cpf_cnpj_pagador,
        tipo_ocorrencia,
        data_ocorrencia_inicial,
        data_ocorrencia_final,
        nosso_numero,
        seu_numero,
        uso_empresa,
        data_vencimento,
        valor_nominal,
        situacao_titulo,
        pagina,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {
            "situacaoTitulo": "multi",
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        if codigo_banco_beneficiario is not None:
            _query_params.append(("codigoBancoBeneficiario", codigo_banco_beneficiario))

        if codigo_beneficiario is not None:
            _query_params.append(("codigoBeneficiario", codigo_beneficiario))

        if cnpj_beneficiario is not None:
            _query_params.append(("cnpjBeneficiario", cnpj_beneficiario))

        if cpf_cnpj_pagador is not None:
            _query_params.append(("cpfCnpjPagador", cpf_cnpj_pagador))

        if tipo_ocorrencia is not None:
            _query_params.append(("tipoOcorrencia", tipo_ocorrencia))

        if data_ocorrencia_inicial is not None:
            _query_params.append(("dataOcorrenciaInicial", data_ocorrencia_inicial))

        if data_ocorrencia_final is not None:
            _query_params.append(("dataOcorrenciaFinal", data_ocorrencia_final))

        if nosso_numero is not None:
            _query_params.append(("nossoNumero", nosso_numero))

        if seu_numero is not None:
            _query_params.append(("seuNumero", seu_numero))

        if uso_empresa is not None:
            _query_params.append(("usoEmpresa", uso_empresa))

        if data_vencimento is not None:
            _query_params.append(("dataVencimento", data_vencimento))

        if valor_nominal is not None:
            _query_params.append(("valorNominal", valor_nominal))

        if situacao_titulo is not None:
            _query_params.append(("situacaoTitulo", situacao_titulo))

        if pagina is not None:
            _query_params.append(("pagina", pagina))

        # process the header parameters
        # process the form parameters
        # process the body parameter

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="GET",
            resource_path="/rest/cobranca/titulo/pesquisa-ocorrencia",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )

    @validate_call
    def titulo_registro(
        self,
        requisicao_registra_titulo_vo: Optional[RequisicaoRegistraTituloVO] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RetornoTitulo:
        """Registro de título

        Registro de título.

        :param requisicao_registra_titulo_vo:
        :type requisicao_registra_titulo_vo: RequisicaoRegistraTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_registro_serialize(
            requisicao_registra_titulo_vo=requisicao_registra_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTitulo",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data

    @validate_call
    def titulo_registro_with_http_info(
        self,
        requisicao_registra_titulo_vo: Optional[RequisicaoRegistraTituloVO] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[RetornoTitulo]:
        """Registro de título

        Registro de título.

        :param requisicao_registra_titulo_vo:
        :type requisicao_registra_titulo_vo: RequisicaoRegistraTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_registro_serialize(
            requisicao_registra_titulo_vo=requisicao_registra_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTitulo",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )

    @validate_call
    def titulo_registro_without_preload_content(
        self,
        requisicao_registra_titulo_vo: Optional[RequisicaoRegistraTituloVO] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)], Annotated[StrictFloat, Field(gt=0)]
            ],
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Registro de título

        Registro de título.

        :param requisicao_registra_titulo_vo:
        :type requisicao_registra_titulo_vo: RequisicaoRegistraTituloVO
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """  # noqa: E501

        _param = self._titulo_registro_serialize(
            requisicao_registra_titulo_vo=requisicao_registra_titulo_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTitulo",
            "400": "ErroCobrancaVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _titulo_registro_serialize(
        self,
        requisicao_registra_titulo_vo,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {}

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if requisicao_registra_titulo_vo is not None:
            _body_params = requisicao_registra_titulo_vo

        # set the HTTP header `Accept`
        if "Accept" not in _header_params:
            _header_params["Accept"] = self.api_client.select_header_accept(
                ["application/json"]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params["Content-Type"] = _content_type
        else:
            _default_content_type = self.api_client.select_header_content_type(
                ["application/json"]
            )
            if _default_content_type is not None:
                _header_params["Content-Type"] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = ["BearerAuthentication"]

        return self.api_client.param_serialize(
            method="POST",
            resource_path="/rest/cobranca/titulo/registro",
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth,
        )
