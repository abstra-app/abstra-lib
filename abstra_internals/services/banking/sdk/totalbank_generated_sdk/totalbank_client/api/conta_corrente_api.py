# coding: utf-8

"""
OpenAPI Supply Midia

Plataforma de gateways do Portal TotalBank.   Os serviços expostos permitem ao usuário estabelecer integração de sua automação com os serviços de cobrança, pagamento, PIX e conta-corrente. É possível consultar, emitir relatórios e registrar movimentações para os respectivos serviços.   # Obtenção de credenciais   Para obter credenciais para consumo da API de token de acesso, é necessário:   - Criação de uma conta de acesso, habilitada para utilizar o serviço 'Gateway Supply', no portal <a href=\"https://portal.totalbank.com.br/\" target=\"_blank\">TotalBank</a>. Esta conta de acesso é criada a partir de uma solicitação ao nosso <a href=\"mailto:suporte@supplymidia.com.br\">suporte</a>.  - Criação de um usuário com perfil de 'Gestor de API' no portal <a href=\"https://portal.totalbank.com.br/\" target=\"_blank\">TotalBank</a>.   - Este usuário 'Gestor de API' deverá criar um usuário para ser utilizado na API de token de acesso, no menu: Administração - Configuração de API - Usuários gateway.   - Neste mesmo menu, na aba Documentação gateway, é possível visualizar o endereço de nosso endpoint e a documentação da API de autorização, para receber o token de acesso necessário para consumir nossas APIs.   - A partir desta etapa, você estará apto a obter tokens de acesso para consumir nossos serviços.   # Webhooks   ## Pré-requisitos para uso do webhook    Habilitar o serviço 'Gateway Supply'.   ## Cadastro e gestão de webhook   Para as contas de acesso que têm o serviço 'Gateway Supply', o usuário administrador com a permissão 'Gestor WS' terá acesso ao menu Administração->Configuração de API.   Nele, além de ser possível gerenciar os usuários gateway, há a opção 'Webhooks', na qual o usuário administrador tem a gestao dos webhooks cadastrados para sua conta de acesso.   Clicando no botão 'Adicionar configuração de web-service, o usuário administrador conseguirá cadastrar a URL do webhook e um e-mail para contato.   Este e-mail para contato é acionado quando há falha no envio da notificação.   A configuração cadastrada nesta tela engloba a conta de acesso.   ## Configuração do webhook para um convênio   Para sobrescrever a configuração do webhook para a conta de acesso e utilizar uma configuração única para o convênio, no menu Administração->Convênios, é possível criar uma configuração própria para o convênio, basta selecionar a opção 'Sobrescreve configuração de webhook?'.   ## Testes sandbox   No menu Administração->Configuração de web-service, clicando em 'Testes', é possível iniciar os testes em ambiente sandbox. Com ele será possível chamar a URL do seu Webhook com um payload exemplo de Pix, Cobrança ou Pagamento, e assim preparar o Webhook para receber os dados do banco.   Fique a vontade para testar e garantir que está tudo funcionando.   Nos testes são disponibilizados exemplos de payloads para preparar seu sistema para recebimento.   ## Notificações   Por enquanto, o portal TotalBank está adaptado para as notificações dos tipos Pix, Cobrança e Pagamento.   <a href=\"#post-/rest/documentacao-webhook/cobranca\">Webhook de cobrança</a>   <a href=\"#post-/rest/documentacao-webhook/pagamento\">Webhook de pagamentos</a>   <a href=\"#post-/rest/documentacao-webhook/pix\">Webhook de PIX</a>   # Rate Limit: Limite de requisições por minuto   Para assegurar uma experiência de alta qualidade e a estabilidade dos nossos serviços, introduzimos um limite de requisições por minuto (rate limit) nas nossas APIs. Esta nova medida visa proporcionar um acesso justo e eficiente aos nossos recursos tecnológicos, garantindo desempenho consistente e confiável para todos os usuários e parceiros.   Ao superar o limite estipulado na conta de acesso, as requisições adicionais serão bloqueadas temporariamente, gerando um erro de código HTTP 429 - Too Many Requests que indica muitas requisições em um determinado período, isto é, por minuto. Isso é parte do nosso esforço para prevenir sobrecargas no sistema, mantendo-o rápido e acessível a todos.   Para mais informações sobre como se adaptar ao rate limit e para solicitações de aumento, por favor, entre em contato através do nosso <a href=\"mailto:suporte@supplymidia.com.br\">suporte</a>.   # Códigos de resposta HTTP   Entenda os principais códigos de retorno de nossas APIs.   Sucesso   200 OK - Requisição com Sucesso     Erro na Requisição   400 Bad Request - Erro na requisição   401 Unauthorized - Cabeçalho de autenticação inválido   403 Forbidden - Token incorreto ou segurança violada   404 Not Found - O recurso solicitado não existe   405 Not Allowed - Método do recurso não suportado   406 Not Accepted - Tipo de mídia não permitido   415 Unsupported Media Type - Payload não suportado   429 Too Many Requests - Muitas solicitações    Erro no Servidor   500 Internal Server Error - Erro no gateway   503 Service Unavailable - Serviço não disponível   504 Gateway timeout - Servidor não respondeu    Caso tenha dúvidas, envie um e-mail para nossa equipe de <a href=\"mailto:desenvolvimento@supplymidia.com.br\">desenvolvimento</a>

The version of the OpenAPI document: 1.0
Generated by OpenAPI Generator (https://openapi-generator.tech)

Do not edit the class manually.
"""  # noqa: E501

from typing import Any, Dict, List, Optional, Tuple, Union

from pydantic import Field, StrictBool, StrictFloat, StrictInt, StrictStr, validate_call
from typing_extensions import Annotated

from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.api_client import (
    ApiClient,
    RequestSerialized,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.api_response import (
    ApiResponse,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_lancamento import (
    RetornoLancamento,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_saldo import (
    RetornoSaldo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.rest import (
    RESTResponseType,
)


class ContaCorrenteApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client

    @validate_call
    def lancamento_pesquisa(
        self,
        data_inicial: Annotated[
            Optional[StrictStr],
            Field(
                description="Data inicial (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês."
            ),
        ] = None,
        data_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data final (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês."
            ),
        ] = None,
        codigo_banco: Annotated[Optional[StrictStr], Field(description="Banco")] = None,
        agencia: Annotated[Optional[StrictStr], Field(description="Agência")] = None,
        conta: Annotated[Optional[StrictStr], Field(description="Conta")] = None,
        pagina: Annotated[
            Optional[StrictInt],
            Field(
                description="Página do resultado. Opcionalmente, quando não informado, será atribuído página 1."
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
    ) -> RetornoLancamento:
        """Pesquisa de lançamentos

        Pesquisa de lançamentos, limitada a 30 lançamentos, mas pode-se buscar a próxima página de acordo com o parâmetro 'pagina'. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>Importante:<br></br>Os campos com informações da origem do lançamento serão retornados na API se o banco fornecer esses dados.

        :param data_inicial: Data inicial (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês.
        :type data_inicial: str
        :param data_final: Data final (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês.
        :type data_final: str
        :param codigo_banco: Banco
        :type codigo_banco: str
        :param agencia: Agência
        :type agencia: str
        :param conta: Conta
        :type conta: str
        :param pagina: Página do resultado. Opcionalmente, quando não informado, será atribuído página 1.
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

        _param = self._lancamento_pesquisa_serialize(
            data_inicial=data_inicial,
            data_final=data_final,
            codigo_banco=codigo_banco,
            agencia=agencia,
            conta=conta,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoLancamento",
            "400": "ErroContaCorrenteVO",
            "403": "ErroContaCorrenteVO",
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
    def lancamento_pesquisa_with_http_info(
        self,
        data_inicial: Annotated[
            Optional[StrictStr],
            Field(
                description="Data inicial (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês."
            ),
        ] = None,
        data_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data final (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês."
            ),
        ] = None,
        codigo_banco: Annotated[Optional[StrictStr], Field(description="Banco")] = None,
        agencia: Annotated[Optional[StrictStr], Field(description="Agência")] = None,
        conta: Annotated[Optional[StrictStr], Field(description="Conta")] = None,
        pagina: Annotated[
            Optional[StrictInt],
            Field(
                description="Página do resultado. Opcionalmente, quando não informado, será atribuído página 1."
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
    ) -> ApiResponse[RetornoLancamento]:
        """Pesquisa de lançamentos

        Pesquisa de lançamentos, limitada a 30 lançamentos, mas pode-se buscar a próxima página de acordo com o parâmetro 'pagina'. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>Importante:<br></br>Os campos com informações da origem do lançamento serão retornados na API se o banco fornecer esses dados.

        :param data_inicial: Data inicial (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês.
        :type data_inicial: str
        :param data_final: Data final (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês.
        :type data_final: str
        :param codigo_banco: Banco
        :type codigo_banco: str
        :param agencia: Agência
        :type agencia: str
        :param conta: Conta
        :type conta: str
        :param pagina: Página do resultado. Opcionalmente, quando não informado, será atribuído página 1.
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

        _param = self._lancamento_pesquisa_serialize(
            data_inicial=data_inicial,
            data_final=data_final,
            codigo_banco=codigo_banco,
            agencia=agencia,
            conta=conta,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoLancamento",
            "400": "ErroContaCorrenteVO",
            "403": "ErroContaCorrenteVO",
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
    def lancamento_pesquisa_without_preload_content(
        self,
        data_inicial: Annotated[
            Optional[StrictStr],
            Field(
                description="Data inicial (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês."
            ),
        ] = None,
        data_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data final (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês."
            ),
        ] = None,
        codigo_banco: Annotated[Optional[StrictStr], Field(description="Banco")] = None,
        agencia: Annotated[Optional[StrictStr], Field(description="Agência")] = None,
        conta: Annotated[Optional[StrictStr], Field(description="Conta")] = None,
        pagina: Annotated[
            Optional[StrictInt],
            Field(
                description="Página do resultado. Opcionalmente, quando não informado, será atribuído página 1."
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
        """Pesquisa de lançamentos

        Pesquisa de lançamentos, limitada a 30 lançamentos, mas pode-se buscar a próxima página de acordo com o parâmetro 'pagina'. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>Importante:<br></br>Os campos com informações da origem do lançamento serão retornados na API se o banco fornecer esses dados.

        :param data_inicial: Data inicial (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês.
        :type data_inicial: str
        :param data_final: Data final (formato aaaa-mm-dd). Período máximo entre a data inicial e a data final: 1 mês.
        :type data_final: str
        :param codigo_banco: Banco
        :type codigo_banco: str
        :param agencia: Agência
        :type agencia: str
        :param conta: Conta
        :type conta: str
        :param pagina: Página do resultado. Opcionalmente, quando não informado, será atribuído página 1.
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

        _param = self._lancamento_pesquisa_serialize(
            data_inicial=data_inicial,
            data_final=data_final,
            codigo_banco=codigo_banco,
            agencia=agencia,
            conta=conta,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoLancamento",
            "400": "ErroContaCorrenteVO",
            "403": "ErroContaCorrenteVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _lancamento_pesquisa_serialize(
        self,
        data_inicial,
        data_final,
        codigo_banco,
        agencia,
        conta,
        pagina,
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
        if data_inicial is not None:
            _query_params.append(("dataInicial", data_inicial))

        if data_final is not None:
            _query_params.append(("dataFinal", data_final))

        if codigo_banco is not None:
            _query_params.append(("codigoBanco", codigo_banco))

        if agencia is not None:
            _query_params.append(("agencia", agencia))

        if conta is not None:
            _query_params.append(("conta", conta))

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
            resource_path="/rest/conta-corrente/lancamento/pesquisa",
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
    def saldo_pesquisa(
        self,
        codigo_banco: Annotated[Optional[StrictStr], Field(description="Banco")] = None,
        agencia: Annotated[Optional[StrictStr], Field(description="Agência")] = None,
        conta: Annotated[Optional[StrictStr], Field(description="Conta")] = None,
        data_saldo: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de consulta para o saldo posicional (formato aaaa-mm-dd).<br></br>Caso o valor não seja informado, leva-se em consideração o último saldo até o momento."
            ),
        ] = None,
        somente_com_movimentacao: Annotated[
            Optional[StrictBool],
            Field(description="Restringir a contas com movimentação"),
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
    ) -> RetornoSaldo:
        """Pesquisa de saldo

        Pesquisa de saldo

        :param codigo_banco: Banco
        :type codigo_banco: str
        :param agencia: Agência
        :type agencia: str
        :param conta: Conta
        :type conta: str
        :param data_saldo: Data de consulta para o saldo posicional (formato aaaa-mm-dd).<br></br>Caso o valor não seja informado, leva-se em consideração o último saldo até o momento.
        :type data_saldo: str
        :param somente_com_movimentacao: Restringir a contas com movimentação
        :type somente_com_movimentacao: bool
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

        _param = self._saldo_pesquisa_serialize(
            codigo_banco=codigo_banco,
            agencia=agencia,
            conta=conta,
            data_saldo=data_saldo,
            somente_com_movimentacao=somente_com_movimentacao,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoSaldo",
            "400": "ErroContaCorrenteVO",
            "403": "ErroContaCorrenteVO",
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
    def saldo_pesquisa_with_http_info(
        self,
        codigo_banco: Annotated[Optional[StrictStr], Field(description="Banco")] = None,
        agencia: Annotated[Optional[StrictStr], Field(description="Agência")] = None,
        conta: Annotated[Optional[StrictStr], Field(description="Conta")] = None,
        data_saldo: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de consulta para o saldo posicional (formato aaaa-mm-dd).<br></br>Caso o valor não seja informado, leva-se em consideração o último saldo até o momento."
            ),
        ] = None,
        somente_com_movimentacao: Annotated[
            Optional[StrictBool],
            Field(description="Restringir a contas com movimentação"),
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
    ) -> ApiResponse[RetornoSaldo]:
        """Pesquisa de saldo

        Pesquisa de saldo

        :param codigo_banco: Banco
        :type codigo_banco: str
        :param agencia: Agência
        :type agencia: str
        :param conta: Conta
        :type conta: str
        :param data_saldo: Data de consulta para o saldo posicional (formato aaaa-mm-dd).<br></br>Caso o valor não seja informado, leva-se em consideração o último saldo até o momento.
        :type data_saldo: str
        :param somente_com_movimentacao: Restringir a contas com movimentação
        :type somente_com_movimentacao: bool
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

        _param = self._saldo_pesquisa_serialize(
            codigo_banco=codigo_banco,
            agencia=agencia,
            conta=conta,
            data_saldo=data_saldo,
            somente_com_movimentacao=somente_com_movimentacao,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoSaldo",
            "400": "ErroContaCorrenteVO",
            "403": "ErroContaCorrenteVO",
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
    def saldo_pesquisa_without_preload_content(
        self,
        codigo_banco: Annotated[Optional[StrictStr], Field(description="Banco")] = None,
        agencia: Annotated[Optional[StrictStr], Field(description="Agência")] = None,
        conta: Annotated[Optional[StrictStr], Field(description="Conta")] = None,
        data_saldo: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de consulta para o saldo posicional (formato aaaa-mm-dd).<br></br>Caso o valor não seja informado, leva-se em consideração o último saldo até o momento."
            ),
        ] = None,
        somente_com_movimentacao: Annotated[
            Optional[StrictBool],
            Field(description="Restringir a contas com movimentação"),
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
        """Pesquisa de saldo

        Pesquisa de saldo

        :param codigo_banco: Banco
        :type codigo_banco: str
        :param agencia: Agência
        :type agencia: str
        :param conta: Conta
        :type conta: str
        :param data_saldo: Data de consulta para o saldo posicional (formato aaaa-mm-dd).<br></br>Caso o valor não seja informado, leva-se em consideração o último saldo até o momento.
        :type data_saldo: str
        :param somente_com_movimentacao: Restringir a contas com movimentação
        :type somente_com_movimentacao: bool
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

        _param = self._saldo_pesquisa_serialize(
            codigo_banco=codigo_banco,
            agencia=agencia,
            conta=conta,
            data_saldo=data_saldo,
            somente_com_movimentacao=somente_com_movimentacao,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoSaldo",
            "400": "ErroContaCorrenteVO",
            "403": "ErroContaCorrenteVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _saldo_pesquisa_serialize(
        self,
        codigo_banco,
        agencia,
        conta,
        data_saldo,
        somente_com_movimentacao,
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
        if codigo_banco is not None:
            _query_params.append(("codigoBanco", codigo_banco))

        if agencia is not None:
            _query_params.append(("agencia", agencia))

        if conta is not None:
            _query_params.append(("conta", conta))

        if data_saldo is not None:
            _query_params.append(("dataSaldo", data_saldo))

        if somente_com_movimentacao is not None:
            _query_params.append(("somenteComMovimentacao", somente_com_movimentacao))

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
            resource_path="/rest/conta-corrente/saldo/pesquisa",
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
