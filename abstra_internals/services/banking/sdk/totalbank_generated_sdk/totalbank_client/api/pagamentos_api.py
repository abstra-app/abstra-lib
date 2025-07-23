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
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_exclusao_pagamento_vo import (
    RequisicaoExclusaoPagamentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pagamento_cod_barras_vo import (
    RequisicaoPagamentoCodBarrasVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pagamento_darfvo import (
    RequisicaoPagamentoDARFVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pagamento_gpsvo import (
    RequisicaoPagamentoGPSVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pagamento_pix_vo import (
    RequisicaoPagamentoPixVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_transferencia_vo import (
    RequisicaoTransferenciaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_exclusao_pagamento_vo import (
    RetornoExclusaoPagamentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pesquisa_comprovantes_vo import (
    RetornoPesquisaComprovantesVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pesquisa_ddavo import (
    RetornoPesquisaDDAVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pesquisa_movimentacao_vo import (
    RetornoPesquisaMovimentacaoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_transferencia_vo import (
    RetornoTransferenciaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.rest import (
    RESTResponseType,
)


class PagamentosApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client

    @validate_call
    def dda_pesquisa(
        self,
        data_ultima_alteracao: Annotated[
            Optional[StrictStr],
            Field(description="Data da última alteração (formato aaaa-mm-dd)"),
        ] = None,
        cpf_cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do pagador")
        ] = None,
        data_vencimento_inicial: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento inicial (formato aaaa-mm-dd)"),
        ] = None,
        data_vencimento_final: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento final (formato aaaa-mm-dd)"),
        ] = None,
        valor_documento_inicial: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento inicial"),
        ] = None,
        valor_documento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento final"),
        ] = None,
        status: Annotated[
            Optional[List[StrictStr]], Field(description="Status do DDA")
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
    ) -> RetornoPesquisaDDAVO:
        """Pesquisa de obrigações DDA

        Pesquisa de obrigações DDA, limitada a 10 obrigações. Pode-se buscar a próxima página de acordo com o parametro pagina.

        :param data_ultima_alteracao: Data da última alteração (formato aaaa-mm-dd)
        :type data_ultima_alteracao: str
        :param cpf_cnpj_beneficiario: CPF/CNPJ do beneficiário
        :type cpf_cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador
        :type cpf_cnpj_pagador: str
        :param data_vencimento_inicial: Data de vencimento inicial (formato aaaa-mm-dd)
        :type data_vencimento_inicial: str
        :param data_vencimento_final: Data de vencimento final (formato aaaa-mm-dd)
        :type data_vencimento_final: str
        :param valor_documento_inicial: Valor de documento inicial
        :type valor_documento_inicial: float
        :param valor_documento_final: Valor de documento final
        :type valor_documento_final: float
        :param status: Status do DDA
        :type status: List[str]
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

        _param = self._dda_pesquisa_serialize(
            data_ultima_alteracao=data_ultima_alteracao,
            cpf_cnpj_beneficiario=cpf_cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            data_vencimento_inicial=data_vencimento_inicial,
            data_vencimento_final=data_vencimento_final,
            valor_documento_inicial=valor_documento_inicial,
            valor_documento_final=valor_documento_final,
            status=status,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaDDAVO",
            "400": "ErroVO",
            "403": "ErroVO",
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
    def dda_pesquisa_with_http_info(
        self,
        data_ultima_alteracao: Annotated[
            Optional[StrictStr],
            Field(description="Data da última alteração (formato aaaa-mm-dd)"),
        ] = None,
        cpf_cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do pagador")
        ] = None,
        data_vencimento_inicial: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento inicial (formato aaaa-mm-dd)"),
        ] = None,
        data_vencimento_final: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento final (formato aaaa-mm-dd)"),
        ] = None,
        valor_documento_inicial: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento inicial"),
        ] = None,
        valor_documento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento final"),
        ] = None,
        status: Annotated[
            Optional[List[StrictStr]], Field(description="Status do DDA")
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
    ) -> ApiResponse[RetornoPesquisaDDAVO]:
        """Pesquisa de obrigações DDA

        Pesquisa de obrigações DDA, limitada a 10 obrigações. Pode-se buscar a próxima página de acordo com o parametro pagina.

        :param data_ultima_alteracao: Data da última alteração (formato aaaa-mm-dd)
        :type data_ultima_alteracao: str
        :param cpf_cnpj_beneficiario: CPF/CNPJ do beneficiário
        :type cpf_cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador
        :type cpf_cnpj_pagador: str
        :param data_vencimento_inicial: Data de vencimento inicial (formato aaaa-mm-dd)
        :type data_vencimento_inicial: str
        :param data_vencimento_final: Data de vencimento final (formato aaaa-mm-dd)
        :type data_vencimento_final: str
        :param valor_documento_inicial: Valor de documento inicial
        :type valor_documento_inicial: float
        :param valor_documento_final: Valor de documento final
        :type valor_documento_final: float
        :param status: Status do DDA
        :type status: List[str]
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

        _param = self._dda_pesquisa_serialize(
            data_ultima_alteracao=data_ultima_alteracao,
            cpf_cnpj_beneficiario=cpf_cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            data_vencimento_inicial=data_vencimento_inicial,
            data_vencimento_final=data_vencimento_final,
            valor_documento_inicial=valor_documento_inicial,
            valor_documento_final=valor_documento_final,
            status=status,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaDDAVO",
            "400": "ErroVO",
            "403": "ErroVO",
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
    def dda_pesquisa_without_preload_content(
        self,
        data_ultima_alteracao: Annotated[
            Optional[StrictStr],
            Field(description="Data da última alteração (formato aaaa-mm-dd)"),
        ] = None,
        cpf_cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do pagador")
        ] = None,
        data_vencimento_inicial: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento inicial (formato aaaa-mm-dd)"),
        ] = None,
        data_vencimento_final: Annotated[
            Optional[StrictStr],
            Field(description="Data de vencimento final (formato aaaa-mm-dd)"),
        ] = None,
        valor_documento_inicial: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento inicial"),
        ] = None,
        valor_documento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento final"),
        ] = None,
        status: Annotated[
            Optional[List[StrictStr]], Field(description="Status do DDA")
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
        """Pesquisa de obrigações DDA

        Pesquisa de obrigações DDA, limitada a 10 obrigações. Pode-se buscar a próxima página de acordo com o parametro pagina.

        :param data_ultima_alteracao: Data da última alteração (formato aaaa-mm-dd)
        :type data_ultima_alteracao: str
        :param cpf_cnpj_beneficiario: CPF/CNPJ do beneficiário
        :type cpf_cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do pagador
        :type cpf_cnpj_pagador: str
        :param data_vencimento_inicial: Data de vencimento inicial (formato aaaa-mm-dd)
        :type data_vencimento_inicial: str
        :param data_vencimento_final: Data de vencimento final (formato aaaa-mm-dd)
        :type data_vencimento_final: str
        :param valor_documento_inicial: Valor de documento inicial
        :type valor_documento_inicial: float
        :param valor_documento_final: Valor de documento final
        :type valor_documento_final: float
        :param status: Status do DDA
        :type status: List[str]
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

        _param = self._dda_pesquisa_serialize(
            data_ultima_alteracao=data_ultima_alteracao,
            cpf_cnpj_beneficiario=cpf_cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            data_vencimento_inicial=data_vencimento_inicial,
            data_vencimento_final=data_vencimento_final,
            valor_documento_inicial=valor_documento_inicial,
            valor_documento_final=valor_documento_final,
            status=status,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaDDAVO",
            "400": "ErroVO",
            "403": "ErroVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _dda_pesquisa_serialize(
        self,
        data_ultima_alteracao,
        cpf_cnpj_beneficiario,
        cpf_cnpj_pagador,
        data_vencimento_inicial,
        data_vencimento_final,
        valor_documento_inicial,
        valor_documento_final,
        status,
        pagina,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {
            "status": "multi",
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
        if data_ultima_alteracao is not None:
            _query_params.append(("dataUltimaAlteracao", data_ultima_alteracao))

        if cpf_cnpj_beneficiario is not None:
            _query_params.append(("cpfCnpjBeneficiario", cpf_cnpj_beneficiario))

        if cpf_cnpj_pagador is not None:
            _query_params.append(("cpfCnpjPagador", cpf_cnpj_pagador))

        if data_vencimento_inicial is not None:
            _query_params.append(("dataVencimentoInicial", data_vencimento_inicial))

        if data_vencimento_final is not None:
            _query_params.append(("dataVencimentoFinal", data_vencimento_final))

        if valor_documento_inicial is not None:
            _query_params.append(("valorDocumentoInicial", valor_documento_inicial))

        if valor_documento_final is not None:
            _query_params.append(("valorDocumentoFinal", valor_documento_final))

        if status is not None:
            _query_params.append(("status", status))

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
            resource_path="/rest/pagamento/dda/pesquisa",
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
    def get_comprovantes(
        self,
        cpf_cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(description="CPF/CNPJ do titular do convênio pagador"),
        ] = None,
        documento_empresa: Annotated[
            Optional[StrictStr], Field(description="Documento empresa")
        ] = None,
        documento_banco: Annotated[
            Optional[StrictStr], Field(description="Documento banco")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_vencimento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        valor_documento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento inicial"),
        ] = None,
        valor_documento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento final"),
        ] = None,
        valor_pagamento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento inicial"),
        ] = None,
        valor_pagamento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento final"),
        ] = None,
        status: Annotated[
            Optional[List[StrictStr]], Field(description="Status do pagamento")
        ] = None,
        informacao_complementar: Annotated[
            Optional[StrictStr], Field(description="Informação complementar")
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
    ) -> RetornoPesquisaComprovantesVO:
        """Pesquisa de comprovantes

        Pesquisa de comprovantes, limitada a 100 comprovantes, mas pode-se buscar a próxima página, de acordo com o parametro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>Importante: esta consulta tem obrigatoriedade do CPF/CNPJ do titular do convênio pagador (cpfCnpjPagador) e de pelo menos uma das datas de agendamento ou vencimento (dataAgendamento, dataAgendamentoFinal, dataVencimento ou dataVencimentoFinal).

        :param cpf_cnpj_beneficiario: CPF/CNPJ do beneficiário
        :type cpf_cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do titular do convênio pagador
        :type cpf_cnpj_pagador: str
        :param documento_empresa: Documento empresa
        :type documento_empresa: str
        :param documento_banco: Documento banco
        :type documento_banco: str
        :param data_vencimento: Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento: str
        :param data_vencimento_final: Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento_final: str
        :param data_agendamento: Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento: str
        :param data_agendamento_final: Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento_final: str
        :param valor_documento: Valor de documento inicial
        :type valor_documento: float
        :param valor_documento_final: Valor de documento final
        :type valor_documento_final: float
        :param valor_pagamento: Valor de pagamento inicial
        :type valor_pagamento: float
        :param valor_pagamento_final: Valor de pagamento final
        :type valor_pagamento_final: float
        :param status: Status do pagamento
        :type status: List[str]
        :param informacao_complementar: Informação complementar
        :type informacao_complementar: str
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

        _param = self._get_comprovantes_serialize(
            cpf_cnpj_beneficiario=cpf_cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            documento_empresa=documento_empresa,
            documento_banco=documento_banco,
            data_vencimento=data_vencimento,
            data_vencimento_final=data_vencimento_final,
            data_agendamento=data_agendamento,
            data_agendamento_final=data_agendamento_final,
            valor_documento=valor_documento,
            valor_documento_final=valor_documento_final,
            valor_pagamento=valor_pagamento,
            valor_pagamento_final=valor_pagamento_final,
            status=status,
            informacao_complementar=informacao_complementar,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaComprovantesVO",
            "400": "ErroVO",
            "403": "ErroVO",
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
    def get_comprovantes_with_http_info(
        self,
        cpf_cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(description="CPF/CNPJ do titular do convênio pagador"),
        ] = None,
        documento_empresa: Annotated[
            Optional[StrictStr], Field(description="Documento empresa")
        ] = None,
        documento_banco: Annotated[
            Optional[StrictStr], Field(description="Documento banco")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_vencimento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        valor_documento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento inicial"),
        ] = None,
        valor_documento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento final"),
        ] = None,
        valor_pagamento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento inicial"),
        ] = None,
        valor_pagamento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento final"),
        ] = None,
        status: Annotated[
            Optional[List[StrictStr]], Field(description="Status do pagamento")
        ] = None,
        informacao_complementar: Annotated[
            Optional[StrictStr], Field(description="Informação complementar")
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
    ) -> ApiResponse[RetornoPesquisaComprovantesVO]:
        """Pesquisa de comprovantes

        Pesquisa de comprovantes, limitada a 100 comprovantes, mas pode-se buscar a próxima página, de acordo com o parametro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>Importante: esta consulta tem obrigatoriedade do CPF/CNPJ do titular do convênio pagador (cpfCnpjPagador) e de pelo menos uma das datas de agendamento ou vencimento (dataAgendamento, dataAgendamentoFinal, dataVencimento ou dataVencimentoFinal).

        :param cpf_cnpj_beneficiario: CPF/CNPJ do beneficiário
        :type cpf_cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do titular do convênio pagador
        :type cpf_cnpj_pagador: str
        :param documento_empresa: Documento empresa
        :type documento_empresa: str
        :param documento_banco: Documento banco
        :type documento_banco: str
        :param data_vencimento: Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento: str
        :param data_vencimento_final: Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento_final: str
        :param data_agendamento: Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento: str
        :param data_agendamento_final: Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento_final: str
        :param valor_documento: Valor de documento inicial
        :type valor_documento: float
        :param valor_documento_final: Valor de documento final
        :type valor_documento_final: float
        :param valor_pagamento: Valor de pagamento inicial
        :type valor_pagamento: float
        :param valor_pagamento_final: Valor de pagamento final
        :type valor_pagamento_final: float
        :param status: Status do pagamento
        :type status: List[str]
        :param informacao_complementar: Informação complementar
        :type informacao_complementar: str
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

        _param = self._get_comprovantes_serialize(
            cpf_cnpj_beneficiario=cpf_cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            documento_empresa=documento_empresa,
            documento_banco=documento_banco,
            data_vencimento=data_vencimento,
            data_vencimento_final=data_vencimento_final,
            data_agendamento=data_agendamento,
            data_agendamento_final=data_agendamento_final,
            valor_documento=valor_documento,
            valor_documento_final=valor_documento_final,
            valor_pagamento=valor_pagamento,
            valor_pagamento_final=valor_pagamento_final,
            status=status,
            informacao_complementar=informacao_complementar,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaComprovantesVO",
            "400": "ErroVO",
            "403": "ErroVO",
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
    def get_comprovantes_without_preload_content(
        self,
        cpf_cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(description="CPF/CNPJ do titular do convênio pagador"),
        ] = None,
        documento_empresa: Annotated[
            Optional[StrictStr], Field(description="Documento empresa")
        ] = None,
        documento_banco: Annotated[
            Optional[StrictStr], Field(description="Documento banco")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_vencimento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        valor_documento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento inicial"),
        ] = None,
        valor_documento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento final"),
        ] = None,
        valor_pagamento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento inicial"),
        ] = None,
        valor_pagamento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento final"),
        ] = None,
        status: Annotated[
            Optional[List[StrictStr]], Field(description="Status do pagamento")
        ] = None,
        informacao_complementar: Annotated[
            Optional[StrictStr], Field(description="Informação complementar")
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
        """Pesquisa de comprovantes

        Pesquisa de comprovantes, limitada a 100 comprovantes, mas pode-se buscar a próxima página, de acordo com o parametro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>Importante: esta consulta tem obrigatoriedade do CPF/CNPJ do titular do convênio pagador (cpfCnpjPagador) e de pelo menos uma das datas de agendamento ou vencimento (dataAgendamento, dataAgendamentoFinal, dataVencimento ou dataVencimentoFinal).

        :param cpf_cnpj_beneficiario: CPF/CNPJ do beneficiário
        :type cpf_cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do titular do convênio pagador
        :type cpf_cnpj_pagador: str
        :param documento_empresa: Documento empresa
        :type documento_empresa: str
        :param documento_banco: Documento banco
        :type documento_banco: str
        :param data_vencimento: Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento: str
        :param data_vencimento_final: Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento_final: str
        :param data_agendamento: Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento: str
        :param data_agendamento_final: Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento_final: str
        :param valor_documento: Valor de documento inicial
        :type valor_documento: float
        :param valor_documento_final: Valor de documento final
        :type valor_documento_final: float
        :param valor_pagamento: Valor de pagamento inicial
        :type valor_pagamento: float
        :param valor_pagamento_final: Valor de pagamento final
        :type valor_pagamento_final: float
        :param status: Status do pagamento
        :type status: List[str]
        :param informacao_complementar: Informação complementar
        :type informacao_complementar: str
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

        _param = self._get_comprovantes_serialize(
            cpf_cnpj_beneficiario=cpf_cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            documento_empresa=documento_empresa,
            documento_banco=documento_banco,
            data_vencimento=data_vencimento,
            data_vencimento_final=data_vencimento_final,
            data_agendamento=data_agendamento,
            data_agendamento_final=data_agendamento_final,
            valor_documento=valor_documento,
            valor_documento_final=valor_documento_final,
            valor_pagamento=valor_pagamento,
            valor_pagamento_final=valor_pagamento_final,
            status=status,
            informacao_complementar=informacao_complementar,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaComprovantesVO",
            "400": "ErroVO",
            "403": "ErroVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _get_comprovantes_serialize(
        self,
        cpf_cnpj_beneficiario,
        cpf_cnpj_pagador,
        documento_empresa,
        documento_banco,
        data_vencimento,
        data_vencimento_final,
        data_agendamento,
        data_agendamento_final,
        valor_documento,
        valor_documento_final,
        valor_pagamento,
        valor_pagamento_final,
        status,
        informacao_complementar,
        pagina,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {
            "status": "multi",
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
        if cpf_cnpj_beneficiario is not None:
            _query_params.append(("cpfCnpjBeneficiario", cpf_cnpj_beneficiario))

        if cpf_cnpj_pagador is not None:
            _query_params.append(("cpfCnpjPagador", cpf_cnpj_pagador))

        if documento_empresa is not None:
            _query_params.append(("documentoEmpresa", documento_empresa))

        if documento_banco is not None:
            _query_params.append(("documentoBanco", documento_banco))

        if data_vencimento is not None:
            _query_params.append(("dataVencimento", data_vencimento))

        if data_vencimento_final is not None:
            _query_params.append(("dataVencimentoFinal", data_vencimento_final))

        if data_agendamento is not None:
            _query_params.append(("dataAgendamento", data_agendamento))

        if data_agendamento_final is not None:
            _query_params.append(("dataAgendamentoFinal", data_agendamento_final))

        if valor_documento is not None:
            _query_params.append(("valorDocumento", valor_documento))

        if valor_documento_final is not None:
            _query_params.append(("valorDocumentoFinal", valor_documento_final))

        if valor_pagamento is not None:
            _query_params.append(("valorPagamento", valor_pagamento))

        if valor_pagamento_final is not None:
            _query_params.append(("valorPagamentoFinal", valor_pagamento_final))

        if status is not None:
            _query_params.append(("status", status))

        if informacao_complementar is not None:
            _query_params.append(("informacaoComplementar", informacao_complementar))

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
            resource_path="/rest/pagamento/comprovantes",
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
    def get_pagamentos(
        self,
        cpf_cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(description="CPF/CNPJ do titular do convênio pagador"),
        ] = None,
        documento_empresa: Annotated[
            Optional[StrictStr], Field(description="Documento empresa")
        ] = None,
        documento_banco: Annotated[
            Optional[StrictStr], Field(description="Documento banco")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_vencimento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        valor_documento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento inicial"),
        ] = None,
        valor_documento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento final"),
        ] = None,
        valor_pagamento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento inicial"),
        ] = None,
        valor_pagamento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento final"),
        ] = None,
        status: Annotated[
            Optional[List[StrictStr]], Field(description="Status do pagamento")
        ] = None,
        informacao_complementar: Annotated[
            Optional[StrictStr], Field(description="Informação complementar")
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
    ) -> RetornoPesquisaMovimentacaoVO:
        """Pesquisa de pagamentos.

        Pesquisa de pagamentos, limitada a 100 movimentações, mas pode-se buscar a próxima página de acordo com o parametro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>Importante: esta consulta tem obrigatoriedade do CPF/CNPJ do titular do convênio pagador (cpfCnpjPagador) e de pelo menos uma das datas de agendamento ou vencimento (dataAgendamento, dataAgendamentoFinal, dataVencimento ou dataVencimentoFinal).

        :param cpf_cnpj_beneficiario: CPF/CNPJ do beneficiário
        :type cpf_cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do titular do convênio pagador
        :type cpf_cnpj_pagador: str
        :param documento_empresa: Documento empresa
        :type documento_empresa: str
        :param documento_banco: Documento banco
        :type documento_banco: str
        :param data_vencimento: Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento: str
        :param data_vencimento_final: Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento_final: str
        :param data_agendamento: Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento: str
        :param data_agendamento_final: Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento_final: str
        :param valor_documento: Valor de documento inicial
        :type valor_documento: float
        :param valor_documento_final: Valor de documento final
        :type valor_documento_final: float
        :param valor_pagamento: Valor de pagamento inicial
        :type valor_pagamento: float
        :param valor_pagamento_final: Valor de pagamento final
        :type valor_pagamento_final: float
        :param status: Status do pagamento
        :type status: List[str]
        :param informacao_complementar: Informação complementar
        :type informacao_complementar: str
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

        _param = self._get_pagamentos_serialize(
            cpf_cnpj_beneficiario=cpf_cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            documento_empresa=documento_empresa,
            documento_banco=documento_banco,
            data_vencimento=data_vencimento,
            data_vencimento_final=data_vencimento_final,
            data_agendamento=data_agendamento,
            data_agendamento_final=data_agendamento_final,
            valor_documento=valor_documento,
            valor_documento_final=valor_documento_final,
            valor_pagamento=valor_pagamento,
            valor_pagamento_final=valor_pagamento_final,
            status=status,
            informacao_complementar=informacao_complementar,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaMovimentacaoVO",
            "400": "ErroVO",
            "403": "ErroVO",
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
    def get_pagamentos_with_http_info(
        self,
        cpf_cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(description="CPF/CNPJ do titular do convênio pagador"),
        ] = None,
        documento_empresa: Annotated[
            Optional[StrictStr], Field(description="Documento empresa")
        ] = None,
        documento_banco: Annotated[
            Optional[StrictStr], Field(description="Documento banco")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_vencimento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        valor_documento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento inicial"),
        ] = None,
        valor_documento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento final"),
        ] = None,
        valor_pagamento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento inicial"),
        ] = None,
        valor_pagamento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento final"),
        ] = None,
        status: Annotated[
            Optional[List[StrictStr]], Field(description="Status do pagamento")
        ] = None,
        informacao_complementar: Annotated[
            Optional[StrictStr], Field(description="Informação complementar")
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
    ) -> ApiResponse[RetornoPesquisaMovimentacaoVO]:
        """Pesquisa de pagamentos.

        Pesquisa de pagamentos, limitada a 100 movimentações, mas pode-se buscar a próxima página de acordo com o parametro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>Importante: esta consulta tem obrigatoriedade do CPF/CNPJ do titular do convênio pagador (cpfCnpjPagador) e de pelo menos uma das datas de agendamento ou vencimento (dataAgendamento, dataAgendamentoFinal, dataVencimento ou dataVencimentoFinal).

        :param cpf_cnpj_beneficiario: CPF/CNPJ do beneficiário
        :type cpf_cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do titular do convênio pagador
        :type cpf_cnpj_pagador: str
        :param documento_empresa: Documento empresa
        :type documento_empresa: str
        :param documento_banco: Documento banco
        :type documento_banco: str
        :param data_vencimento: Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento: str
        :param data_vencimento_final: Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento_final: str
        :param data_agendamento: Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento: str
        :param data_agendamento_final: Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento_final: str
        :param valor_documento: Valor de documento inicial
        :type valor_documento: float
        :param valor_documento_final: Valor de documento final
        :type valor_documento_final: float
        :param valor_pagamento: Valor de pagamento inicial
        :type valor_pagamento: float
        :param valor_pagamento_final: Valor de pagamento final
        :type valor_pagamento_final: float
        :param status: Status do pagamento
        :type status: List[str]
        :param informacao_complementar: Informação complementar
        :type informacao_complementar: str
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

        _param = self._get_pagamentos_serialize(
            cpf_cnpj_beneficiario=cpf_cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            documento_empresa=documento_empresa,
            documento_banco=documento_banco,
            data_vencimento=data_vencimento,
            data_vencimento_final=data_vencimento_final,
            data_agendamento=data_agendamento,
            data_agendamento_final=data_agendamento_final,
            valor_documento=valor_documento,
            valor_documento_final=valor_documento_final,
            valor_pagamento=valor_pagamento,
            valor_pagamento_final=valor_pagamento_final,
            status=status,
            informacao_complementar=informacao_complementar,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaMovimentacaoVO",
            "400": "ErroVO",
            "403": "ErroVO",
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
    def get_pagamentos_without_preload_content(
        self,
        cpf_cnpj_beneficiario: Annotated[
            Optional[StrictStr], Field(description="CPF/CNPJ do beneficiário")
        ] = None,
        cpf_cnpj_pagador: Annotated[
            Optional[StrictStr],
            Field(description="CPF/CNPJ do titular do convênio pagador"),
        ] = None,
        documento_empresa: Annotated[
            Optional[StrictStr], Field(description="Documento empresa")
        ] = None,
        documento_banco: Annotated[
            Optional[StrictStr], Field(description="Documento banco")
        ] = None,
        data_vencimento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_vencimento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        data_agendamento_final: Annotated[
            Optional[StrictStr],
            Field(
                description="Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida."
            ),
        ] = None,
        valor_documento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento inicial"),
        ] = None,
        valor_documento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de documento final"),
        ] = None,
        valor_pagamento: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento inicial"),
        ] = None,
        valor_pagamento_final: Annotated[
            Optional[Union[StrictFloat, StrictInt]],
            Field(description="Valor de pagamento final"),
        ] = None,
        status: Annotated[
            Optional[List[StrictStr]], Field(description="Status do pagamento")
        ] = None,
        informacao_complementar: Annotated[
            Optional[StrictStr], Field(description="Informação complementar")
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
        """Pesquisa de pagamentos.

        Pesquisa de pagamentos, limitada a 100 movimentações, mas pode-se buscar a próxima página de acordo com o parametro pagina. O resultado da consulta retorna as informações da paginação (quantidade de registros e páginas).<br></br>Importante: esta consulta tem obrigatoriedade do CPF/CNPJ do titular do convênio pagador (cpfCnpjPagador) e de pelo menos uma das datas de agendamento ou vencimento (dataAgendamento, dataAgendamentoFinal, dataVencimento ou dataVencimentoFinal).

        :param cpf_cnpj_beneficiario: CPF/CNPJ do beneficiário
        :type cpf_cnpj_beneficiario: str
        :param cpf_cnpj_pagador: CPF/CNPJ do titular do convênio pagador
        :type cpf_cnpj_pagador: str
        :param documento_empresa: Documento empresa
        :type documento_empresa: str
        :param documento_banco: Documento banco
        :type documento_banco: str
        :param data_vencimento: Data de vencimento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento: str
        :param data_vencimento_final: Data de vencimento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_vencimento_final: str
        :param data_agendamento: Data de agendamento inicial (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento: str
        :param data_agendamento_final: Data de agendamento final (formato aaaa-mm-dd). Obrigatória caso nenhuma outra data esteja preenchida.
        :type data_agendamento_final: str
        :param valor_documento: Valor de documento inicial
        :type valor_documento: float
        :param valor_documento_final: Valor de documento final
        :type valor_documento_final: float
        :param valor_pagamento: Valor de pagamento inicial
        :type valor_pagamento: float
        :param valor_pagamento_final: Valor de pagamento final
        :type valor_pagamento_final: float
        :param status: Status do pagamento
        :type status: List[str]
        :param informacao_complementar: Informação complementar
        :type informacao_complementar: str
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

        _param = self._get_pagamentos_serialize(
            cpf_cnpj_beneficiario=cpf_cnpj_beneficiario,
            cpf_cnpj_pagador=cpf_cnpj_pagador,
            documento_empresa=documento_empresa,
            documento_banco=documento_banco,
            data_vencimento=data_vencimento,
            data_vencimento_final=data_vencimento_final,
            data_agendamento=data_agendamento,
            data_agendamento_final=data_agendamento_final,
            valor_documento=valor_documento,
            valor_documento_final=valor_documento_final,
            valor_pagamento=valor_pagamento,
            valor_pagamento_final=valor_pagamento_final,
            status=status,
            informacao_complementar=informacao_complementar,
            pagina=pagina,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoPesquisaMovimentacaoVO",
            "400": "ErroVO",
            "403": "ErroVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _get_pagamentos_serialize(
        self,
        cpf_cnpj_beneficiario,
        cpf_cnpj_pagador,
        documento_empresa,
        documento_banco,
        data_vencimento,
        data_vencimento_final,
        data_agendamento,
        data_agendamento_final,
        valor_documento,
        valor_documento_final,
        valor_pagamento,
        valor_pagamento_final,
        status,
        informacao_complementar,
        pagina,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:
        _host = None

        _collection_formats: Dict[str, str] = {
            "status": "multi",
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
        if cpf_cnpj_beneficiario is not None:
            _query_params.append(("cpfCnpjBeneficiario", cpf_cnpj_beneficiario))

        if cpf_cnpj_pagador is not None:
            _query_params.append(("cpfCnpjPagador", cpf_cnpj_pagador))

        if documento_empresa is not None:
            _query_params.append(("documentoEmpresa", documento_empresa))

        if documento_banco is not None:
            _query_params.append(("documentoBanco", documento_banco))

        if data_vencimento is not None:
            _query_params.append(("dataVencimento", data_vencimento))

        if data_vencimento_final is not None:
            _query_params.append(("dataVencimentoFinal", data_vencimento_final))

        if data_agendamento is not None:
            _query_params.append(("dataAgendamento", data_agendamento))

        if data_agendamento_final is not None:
            _query_params.append(("dataAgendamentoFinal", data_agendamento_final))

        if valor_documento is not None:
            _query_params.append(("valorDocumento", valor_documento))

        if valor_documento_final is not None:
            _query_params.append(("valorDocumentoFinal", valor_documento_final))

        if valor_pagamento is not None:
            _query_params.append(("valorPagamento", valor_pagamento))

        if valor_pagamento_final is not None:
            _query_params.append(("valorPagamentoFinal", valor_pagamento_final))

        if status is not None:
            _query_params.append(("status", status))

        if informacao_complementar is not None:
            _query_params.append(("informacaoComplementar", informacao_complementar))

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
            resource_path="/rest/pagamento/pesquisa",
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
    def post_codigo_barras(
        self,
        requisicao_pagamento_cod_barras_vo: Optional[
            RequisicaoPagamentoCodBarrasVO
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
    ) -> RetornoTransferenciaVO:
        """Inclusão de pagamento por código de barras

        Pedido de inclusão de pagamentos através de código de barras.<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_cod_barras_vo:
        :type requisicao_pagamento_cod_barras_vo: RequisicaoPagamentoCodBarrasVO
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

        _param = self._post_codigo_barras_serialize(
            requisicao_pagamento_cod_barras_vo=requisicao_pagamento_cod_barras_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoCodigoBarrasVO",
            "403": "RetornoErroVO",
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
    def post_codigo_barras_with_http_info(
        self,
        requisicao_pagamento_cod_barras_vo: Optional[
            RequisicaoPagamentoCodBarrasVO
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
    ) -> ApiResponse[RetornoTransferenciaVO]:
        """Inclusão de pagamento por código de barras

        Pedido de inclusão de pagamentos através de código de barras.<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_cod_barras_vo:
        :type requisicao_pagamento_cod_barras_vo: RequisicaoPagamentoCodBarrasVO
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

        _param = self._post_codigo_barras_serialize(
            requisicao_pagamento_cod_barras_vo=requisicao_pagamento_cod_barras_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoCodigoBarrasVO",
            "403": "RetornoErroVO",
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
    def post_codigo_barras_without_preload_content(
        self,
        requisicao_pagamento_cod_barras_vo: Optional[
            RequisicaoPagamentoCodBarrasVO
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
        """Inclusão de pagamento por código de barras

        Pedido de inclusão de pagamentos através de código de barras.<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_cod_barras_vo:
        :type requisicao_pagamento_cod_barras_vo: RequisicaoPagamentoCodBarrasVO
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

        _param = self._post_codigo_barras_serialize(
            requisicao_pagamento_cod_barras_vo=requisicao_pagamento_cod_barras_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoCodigoBarrasVO",
            "403": "RetornoErroVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _post_codigo_barras_serialize(
        self,
        requisicao_pagamento_cod_barras_vo,
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
        if requisicao_pagamento_cod_barras_vo is not None:
            _body_params = requisicao_pagamento_cod_barras_vo

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
            resource_path="/rest/pagamento/codigoBarras",
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
    def post_darf(
        self,
        requisicao_pagamento_darfvo: Optional[RequisicaoPagamentoDARFVO] = None,
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
    ) -> RetornoTransferenciaVO:
        """Inclusão de pagamento de DARF

        Pedido de inclusão de pagamentos de Documento de Arrecadação de Receitas Federais (DARF).<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_darfvo:
        :type requisicao_pagamento_darfvo: RequisicaoPagamentoDARFVO
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

        _param = self._post_darf_serialize(
            requisicao_pagamento_darfvo=requisicao_pagamento_darfvo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoGPSVO",
            "403": "RetornoErroVO",
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
    def post_darf_with_http_info(
        self,
        requisicao_pagamento_darfvo: Optional[RequisicaoPagamentoDARFVO] = None,
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
    ) -> ApiResponse[RetornoTransferenciaVO]:
        """Inclusão de pagamento de DARF

        Pedido de inclusão de pagamentos de Documento de Arrecadação de Receitas Federais (DARF).<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_darfvo:
        :type requisicao_pagamento_darfvo: RequisicaoPagamentoDARFVO
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

        _param = self._post_darf_serialize(
            requisicao_pagamento_darfvo=requisicao_pagamento_darfvo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoGPSVO",
            "403": "RetornoErroVO",
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
    def post_darf_without_preload_content(
        self,
        requisicao_pagamento_darfvo: Optional[RequisicaoPagamentoDARFVO] = None,
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
        """Inclusão de pagamento de DARF

        Pedido de inclusão de pagamentos de Documento de Arrecadação de Receitas Federais (DARF).<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_darfvo:
        :type requisicao_pagamento_darfvo: RequisicaoPagamentoDARFVO
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

        _param = self._post_darf_serialize(
            requisicao_pagamento_darfvo=requisicao_pagamento_darfvo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoGPSVO",
            "403": "RetornoErroVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _post_darf_serialize(
        self,
        requisicao_pagamento_darfvo,
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
        if requisicao_pagamento_darfvo is not None:
            _body_params = requisicao_pagamento_darfvo

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
            resource_path="/rest/pagamento/darf",
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
    def post_gps(
        self,
        requisicao_pagamento_gpsvo: Optional[RequisicaoPagamentoGPSVO] = None,
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
    ) -> RetornoTransferenciaVO:
        """Inclusão de pagamento de GPS

        Pedido de inclusão de pagamentos de Guias da Previdência Social (GPS).<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_gpsvo:
        :type requisicao_pagamento_gpsvo: RequisicaoPagamentoGPSVO
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

        _param = self._post_gps_serialize(
            requisicao_pagamento_gpsvo=requisicao_pagamento_gpsvo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoGPSVO",
            "403": "RetornoErroVO",
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
    def post_gps_with_http_info(
        self,
        requisicao_pagamento_gpsvo: Optional[RequisicaoPagamentoGPSVO] = None,
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
    ) -> ApiResponse[RetornoTransferenciaVO]:
        """Inclusão de pagamento de GPS

        Pedido de inclusão de pagamentos de Guias da Previdência Social (GPS).<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_gpsvo:
        :type requisicao_pagamento_gpsvo: RequisicaoPagamentoGPSVO
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

        _param = self._post_gps_serialize(
            requisicao_pagamento_gpsvo=requisicao_pagamento_gpsvo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoGPSVO",
            "403": "RetornoErroVO",
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
    def post_gps_without_preload_content(
        self,
        requisicao_pagamento_gpsvo: Optional[RequisicaoPagamentoGPSVO] = None,
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
        """Inclusão de pagamento de GPS

        Pedido de inclusão de pagamentos de Guias da Previdência Social (GPS).<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_gpsvo:
        :type requisicao_pagamento_gpsvo: RequisicaoPagamentoGPSVO
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

        _param = self._post_gps_serialize(
            requisicao_pagamento_gpsvo=requisicao_pagamento_gpsvo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoGPSVO",
            "403": "RetornoErroVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _post_gps_serialize(
        self,
        requisicao_pagamento_gpsvo,
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
        if requisicao_pagamento_gpsvo is not None:
            _body_params = requisicao_pagamento_gpsvo

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
            resource_path="/rest/pagamento/gps",
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
    def post_pix(
        self,
        requisicao_pagamento_pix_vo: Optional[RequisicaoPagamentoPixVO] = None,
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
    ) -> RetornoTransferenciaVO:
        """Inclusão de pagamento por PIX

        Pedido de inclusão de pagamentos através de PIX.<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_pix_vo:
        :type requisicao_pagamento_pix_vo: RequisicaoPagamentoPixVO
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

        _param = self._post_pix_serialize(
            requisicao_pagamento_pix_vo=requisicao_pagamento_pix_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoPixVO",
            "403": "RetornoErroVO",
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
    def post_pix_with_http_info(
        self,
        requisicao_pagamento_pix_vo: Optional[RequisicaoPagamentoPixVO] = None,
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
    ) -> ApiResponse[RetornoTransferenciaVO]:
        """Inclusão de pagamento por PIX

        Pedido de inclusão de pagamentos através de PIX.<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_pix_vo:
        :type requisicao_pagamento_pix_vo: RequisicaoPagamentoPixVO
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

        _param = self._post_pix_serialize(
            requisicao_pagamento_pix_vo=requisicao_pagamento_pix_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoPixVO",
            "403": "RetornoErroVO",
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
    def post_pix_without_preload_content(
        self,
        requisicao_pagamento_pix_vo: Optional[RequisicaoPagamentoPixVO] = None,
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
        """Inclusão de pagamento por PIX

        Pedido de inclusão de pagamentos através de PIX.<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_pagamento_pix_vo:
        :type requisicao_pagamento_pix_vo: RequisicaoPagamentoPixVO
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

        _param = self._post_pix_serialize(
            requisicao_pagamento_pix_vo=requisicao_pagamento_pix_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroPagamentoPixVO",
            "403": "RetornoErroVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _post_pix_serialize(
        self,
        requisicao_pagamento_pix_vo,
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
        if requisicao_pagamento_pix_vo is not None:
            _body_params = requisicao_pagamento_pix_vo

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
            resource_path="/rest/pagamento/pix",
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
    def post_transferencia(
        self,
        requisicao_transferencia_vo: Optional[RequisicaoTransferenciaVO] = None,
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
    ) -> RetornoTransferenciaVO:
        """Inclusão de transferências em lote

        Pedido de inclusão de transferências em lote de pagamento de qualquer tipo (fornecedores, salário ou diversos), por transferência bancária.<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_transferencia_vo:
        :type requisicao_transferencia_vo: RequisicaoTransferenciaVO
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

        _param = self._post_transferencia_serialize(
            requisicao_transferencia_vo=requisicao_transferencia_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroTransferenciaVO",
            "403": "RetornoErroVO",
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
    def post_transferencia_with_http_info(
        self,
        requisicao_transferencia_vo: Optional[RequisicaoTransferenciaVO] = None,
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
    ) -> ApiResponse[RetornoTransferenciaVO]:
        """Inclusão de transferências em lote

        Pedido de inclusão de transferências em lote de pagamento de qualquer tipo (fornecedores, salário ou diversos), por transferência bancária.<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_transferencia_vo:
        :type requisicao_transferencia_vo: RequisicaoTransferenciaVO
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

        _param = self._post_transferencia_serialize(
            requisicao_transferencia_vo=requisicao_transferencia_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroTransferenciaVO",
            "403": "RetornoErroVO",
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
    def post_transferencia_without_preload_content(
        self,
        requisicao_transferencia_vo: Optional[RequisicaoTransferenciaVO] = None,
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
        """Inclusão de transferências em lote

        Pedido de inclusão de transferências em lote de pagamento de qualquer tipo (fornecedores, salário ou diversos), por transferência bancária.<br></br>Importante: caso encontremos erro de validação em algum pagamento do lote, o erro é impeditivo. Nenhum pagamento será acatado e o erro será retornado em cada pagamento do lote, no campo msgValidacao. Se houver erro, este campo estará preenchido.

        :param requisicao_transferencia_vo:
        :type requisicao_transferencia_vo: RequisicaoTransferenciaVO
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

        _param = self._post_transferencia_serialize(
            requisicao_transferencia_vo=requisicao_transferencia_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoTransferenciaVO",
            "400": "RetornoErroTransferenciaVO",
            "403": "RetornoErroVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _post_transferencia_serialize(
        self,
        requisicao_transferencia_vo,
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
        if requisicao_transferencia_vo is not None:
            _body_params = requisicao_transferencia_vo

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
            resource_path="/rest/pagamento/transferencia",
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
    def remove_pagamentos(
        self,
        requisicao_exclusao_pagamento_vo: Optional[
            RequisicaoExclusaoPagamentoVO
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
    ) -> RetornoExclusaoPagamentoVO:
        """Exclusão de pagamento em lote

        Pedido de exclusão em lote de pagamentos.<br></br>Importante:<br></br>O pagamento precisa existir para que a exclusão seja realizada.<br></br>Caso o pagamento já tenha sido autorizado, não seja registro por API, e esteja nos status agendado ou enviado, será gerada uma remessa de exclusão.<br></br>Caso o pagamento ainda não tenha sido autorizado, o pagamento será cancelado.

        :param requisicao_exclusao_pagamento_vo:
        :type requisicao_exclusao_pagamento_vo: RequisicaoExclusaoPagamentoVO
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

        _param = self._remove_pagamentos_serialize(
            requisicao_exclusao_pagamento_vo=requisicao_exclusao_pagamento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoExclusaoPagamentoVO",
            "400": "RetornoErroVO",
            "403": "RetornoErroVO",
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
    def remove_pagamentos_with_http_info(
        self,
        requisicao_exclusao_pagamento_vo: Optional[
            RequisicaoExclusaoPagamentoVO
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
    ) -> ApiResponse[RetornoExclusaoPagamentoVO]:
        """Exclusão de pagamento em lote

        Pedido de exclusão em lote de pagamentos.<br></br>Importante:<br></br>O pagamento precisa existir para que a exclusão seja realizada.<br></br>Caso o pagamento já tenha sido autorizado, não seja registro por API, e esteja nos status agendado ou enviado, será gerada uma remessa de exclusão.<br></br>Caso o pagamento ainda não tenha sido autorizado, o pagamento será cancelado.

        :param requisicao_exclusao_pagamento_vo:
        :type requisicao_exclusao_pagamento_vo: RequisicaoExclusaoPagamentoVO
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

        _param = self._remove_pagamentos_serialize(
            requisicao_exclusao_pagamento_vo=requisicao_exclusao_pagamento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoExclusaoPagamentoVO",
            "400": "RetornoErroVO",
            "403": "RetornoErroVO",
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
    def remove_pagamentos_without_preload_content(
        self,
        requisicao_exclusao_pagamento_vo: Optional[
            RequisicaoExclusaoPagamentoVO
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
        """Exclusão de pagamento em lote

        Pedido de exclusão em lote de pagamentos.<br></br>Importante:<br></br>O pagamento precisa existir para que a exclusão seja realizada.<br></br>Caso o pagamento já tenha sido autorizado, não seja registro por API, e esteja nos status agendado ou enviado, será gerada uma remessa de exclusão.<br></br>Caso o pagamento ainda não tenha sido autorizado, o pagamento será cancelado.

        :param requisicao_exclusao_pagamento_vo:
        :type requisicao_exclusao_pagamento_vo: RequisicaoExclusaoPagamentoVO
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

        _param = self._remove_pagamentos_serialize(
            requisicao_exclusao_pagamento_vo=requisicao_exclusao_pagamento_vo,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index,
        )

        _response_types_map: Dict[str, Optional[str]] = {
            "200": "RetornoExclusaoPagamentoVO",
            "400": "RetornoErroVO",
            "403": "RetornoErroVO",
            "500": None,
        }
        response_data = self.api_client.call_api(
            *_param, _request_timeout=_request_timeout
        )
        return response_data.response

    def _remove_pagamentos_serialize(
        self,
        requisicao_exclusao_pagamento_vo,
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
        if requisicao_exclusao_pagamento_vo is not None:
            _body_params = requisicao_exclusao_pagamento_vo

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
            resource_path="/rest/pagamento/exclusao",
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
