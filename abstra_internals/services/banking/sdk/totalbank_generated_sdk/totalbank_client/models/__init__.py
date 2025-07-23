# coding: utf-8

# flake8: noqa
"""
OpenAPI Supply Midia

Plataforma de gateways do Portal TotalBank.   Os serviços expostos permitem ao usuário estabelecer integração de sua automação com os serviços de cobrança, pagamento, PIX e conta-corrente. É possível consultar, emitir relatórios e registrar movimentações para os respectivos serviços.   # Obtenção de credenciais   Para obter credenciais para consumo da API de token de acesso, é necessário:   - Criação de uma conta de acesso, habilitada para utilizar o serviço 'Gateway Supply', no portal <a href=\"https://portal.totalbank.com.br/\" target=\"_blank\">TotalBank</a>. Esta conta de acesso é criada a partir de uma solicitação ao nosso <a href=\"mailto:suporte@supplymidia.com.br\">suporte</a>.  - Criação de um usuário com perfil de 'Gestor de API' no portal <a href=\"https://portal.totalbank.com.br/\" target=\"_blank\">TotalBank</a>.   - Este usuário 'Gestor de API' deverá criar um usuário para ser utilizado na API de token de acesso, no menu: Administração - Configuração de API - Usuários gateway.   - Neste mesmo menu, na aba Documentação gateway, é possível visualizar o endereço de nosso endpoint e a documentação da API de autorização, para receber o token de acesso necessário para consumir nossas APIs.   - A partir desta etapa, você estará apto a obter tokens de acesso para consumir nossos serviços.   # Webhooks   ## Pré-requisitos para uso do webhook    Habilitar o serviço 'Gateway Supply'.   ## Cadastro e gestão de webhook   Para as contas de acesso que têm o serviço 'Gateway Supply', o usuário administrador com a permissão 'Gestor WS' terá acesso ao menu Administração->Configuração de API.   Nele, além de ser possível gerenciar os usuários gateway, há a opção 'Webhooks', na qual o usuário administrador tem a gestao dos webhooks cadastrados para sua conta de acesso.   Clicando no botão 'Adicionar configuração de web-service, o usuário administrador conseguirá cadastrar a URL do webhook e um e-mail para contato.   Este e-mail para contato é acionado quando há falha no envio da notificação.   A configuração cadastrada nesta tela engloba a conta de acesso.   ## Configuração do webhook para um convênio   Para sobrescrever a configuração do webhook para a conta de acesso e utilizar uma configuração única para o convênio, no menu Administração->Convênios, é possível criar uma configuração própria para o convênio, basta selecionar a opção 'Sobrescreve configuração de webhook?'.   ## Testes sandbox   No menu Administração->Configuração de web-service, clicando em 'Testes', é possível iniciar os testes em ambiente sandbox. Com ele será possível chamar a URL do seu Webhook com um payload exemplo de Pix, Cobrança ou Pagamento, e assim preparar o Webhook para receber os dados do banco.   Fique a vontade para testar e garantir que está tudo funcionando.   Nos testes são disponibilizados exemplos de payloads para preparar seu sistema para recebimento.   ## Notificações   Por enquanto, o portal TotalBank está adaptado para as notificações dos tipos Pix, Cobrança e Pagamento.   <a href=\"#post-/rest/documentacao-webhook/cobranca\">Webhook de cobrança</a>   <a href=\"#post-/rest/documentacao-webhook/pagamento\">Webhook de pagamentos</a>   <a href=\"#post-/rest/documentacao-webhook/pix\">Webhook de PIX</a>   # Rate Limit: Limite de requisições por minuto   Para assegurar uma experiência de alta qualidade e a estabilidade dos nossos serviços, introduzimos um limite de requisições por minuto (rate limit) nas nossas APIs. Esta nova medida visa proporcionar um acesso justo e eficiente aos nossos recursos tecnológicos, garantindo desempenho consistente e confiável para todos os usuários e parceiros.   Ao superar o limite estipulado na conta de acesso, as requisições adicionais serão bloqueadas temporariamente, gerando um erro de código HTTP 429 - Too Many Requests que indica muitas requisições em um determinado período, isto é, por minuto. Isso é parte do nosso esforço para prevenir sobrecargas no sistema, mantendo-o rápido e acessível a todos.   Para mais informações sobre como se adaptar ao rate limit e para solicitações de aumento, por favor, entre em contato através do nosso <a href=\"mailto:suporte@supplymidia.com.br\">suporte</a>.   # Códigos de resposta HTTP   Entenda os principais códigos de retorno de nossas APIs.   Sucesso   200 OK - Requisição com Sucesso     Erro na Requisição   400 Bad Request - Erro na requisição   401 Unauthorized - Cabeçalho de autenticação inválido   403 Forbidden - Token incorreto ou segurança violada   404 Not Found - O recurso solicitado não existe   405 Not Allowed - Método do recurso não suportado   406 Not Accepted - Tipo de mídia não permitido   415 Unsupported Media Type - Payload não suportado   429 Too Many Requests - Muitas solicitações    Erro no Servidor   500 Internal Server Error - Erro no gateway   503 Service Unavailable - Serviço não disponível   504 Gateway timeout - Servidor não respondeu    Caso tenha dúvidas, envie um e-mail para nossa equipe de <a href=\"mailto:desenvolvimento@supplymidia.com.br\">desenvolvimento</a>

The version of the OpenAPI document: 1.0
Generated by OpenAPI Generator (https://openapi-generator.tech)

Do not edit the class manually.
"""  # noqa: E501

# import models into model package
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.avalista import (
    Avalista,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.avalista_pagador import (
    AvalistaPagador,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.beneficiario import (
    Beneficiario,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.beneficiario_titulo import (
    BeneficiarioTitulo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.callback_cobranca_vo import (
    CallbackCobrancaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.callback_convenio_vo import (
    CallbackConvenioVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.callback_pixvo import (
    CallbackPIXVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.callback_pagamento_codigo_barras_interface import (
    CallbackPagamentoCodigoBarrasInterface,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.callback_pagamento_ocorrencia_vo import (
    CallbackPagamentoOcorrenciaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.callback_pagamento_pix_interface import (
    CallbackPagamentoPIXInterface,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.callback_pagamento_transferencia_interface import (
    CallbackPagamentoTransferenciaInterface,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.callback_pagamento_vo import (
    CallbackPagamentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.chave_aleatoria import (
    ChaveAleatoria,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.chave_cpf_cnpj import (
    ChaveCpfCnpj,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.chave_dados_bancarios import (
    ChaveDadosBancarios,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.chave_email import (
    ChaveEmail,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.chave_pix import (
    ChavePix,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.chave_telefone import (
    ChaveTelefone,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.conta_beneficiario_vo import (
    ContaBeneficiarioVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.conta_credito_vo import (
    ContaCreditoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.conta_debito_vo import (
    ContaDebitoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.conta_vo import (
    ContaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.contato_pagador import (
    ContatoPagador,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.conteudo_boleto import (
    ConteudoBoleto,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.convenio_bradesco_vo import (
    ConvenioBradescoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.convenio_completo_vo import (
    ConvenioCompletoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.convenio_simples_vo import (
    ConvenioSimplesVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.convenio_vo import (
    ConvenioVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.dados_bancarios_excluir_vo import (
    DadosBancariosExcluirVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.dados_bancarios_vo import (
    DadosBancariosVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.debito_detran_vo import (
    DebitoDetranVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.desconto import (
    Desconto,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.detran_vo import (
    DetranVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.endereco import (
    Endereco,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.endereco_vo import (
    EnderecoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.erro_cobranca_vo import (
    ErroCobrancaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.erro_conta_corrente_vo import (
    ErroContaCorrenteVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.erro_pagamento_codigo_barras_vo import (
    ErroPagamentoCodigoBarrasVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.erro_pagamento_detran_vo import (
    ErroPagamentoDetranVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.erro_pagamento_gpsvo import (
    ErroPagamentoGPSVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.erro_pagamento_pix_vo import (
    ErroPagamentoPixVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.erro_pix_vo import (
    ErroPixVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.erro_transferencia_vo import (
    ErroTransferenciaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.erro_vo import (
    ErroVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.exclusao_pagamento_vo import (
    ExclusaoPagamentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.favorecido_transferencia_vo import (
    FavorecidoTransferenciaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.favorecido_vo import (
    FavorecidoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.filtro_movimentacao_titulo import (
    FiltroMovimentacaoTitulo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.filtro_pagamento_movimentacao_vo import (
    FiltroPagamentoMovimentacaoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.filtro_titulo import (
    FiltroTitulo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.funcionario_favorecido_excluir_vo import (
    FuncionarioFavorecidoExcluirVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.funcionario_vo import (
    FuncionarioVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.juros_mora import (
    JurosMora,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.lancamento_vo import (
    LancamentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.lista_erro_codigo_barras_vo import (
    ListaErroCodigoBarrasVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.lista_erro_pagamento_detran_vo import (
    ListaErroPagamentoDetranVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.lista_erro_pagamento_gpsvo import (
    ListaErroPagamentoGPSVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.lista_erro_pagamento_pix_vo import (
    ListaErroPagamentoPixVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.lista_erro_transferencia_vo import (
    ListaErroTransferenciaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.mensagens import (
    Mensagens,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.multa import (
    Multa,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.ocorrencia_historico import (
    OcorrenciaHistorico,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pagador import (
    Pagador,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pagador_completo import (
    PagadorCompleto,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pagamento_codigo_barras_vo import (
    PagamentoCodigoBarrasVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pagamento_darfvo import (
    PagamentoDARFVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pagamento_detran_vo import (
    PagamentoDetranVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pagamento_gpsvo import (
    PagamentoGPSVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pagamento_movimentacao_vo import (
    PagamentoMovimentacaoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pagamento_pix_vo import (
    PagamentoPixVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.parametro_pagamento_vo import (
    ParametroPagamentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pessoa import (
    Pessoa,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_concluido import (
    PixConcluido,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_devedor import (
    PixDevedor,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_imediato_calendario import (
    PixImediatoCalendario,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_imediato_devedor import (
    PixImediatoDevedor,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_imediato_valor import (
    PixImediatoValor,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_info_adicional import (
    PixInfoAdicional,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_valor import (
    PixValor,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_vencimento_calendario import (
    PixVencimentoCalendario,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_vencimento_desconto import (
    PixVencimentoDesconto,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_vencimento_desconto_data_fixa import (
    PixVencimentoDescontoDataFixa,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_vencimento_desconto_lista_data_fixa import (
    PixVencimentoDescontoListaDataFixa,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_vencimento_desconto_valor_perc import (
    PixVencimentoDescontoValorPerc,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_vencimento_devedor import (
    PixVencimentoDevedor,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_vencimento_tipo_valor import (
    PixVencimentoTipoValor,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pix_vencimento_valor import (
    PixVencimentoValor,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.pos_vencimento import (
    PosVencimento,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.rateio_beneficiario_vo import (
    RateioBeneficiarioVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.rateio_vo import (
    RateioVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_anexo_titulo_vo import (
    RequisicaoAnexoTituloVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_exclusao_pagamento_vo import (
    RequisicaoExclusaoPagamentoVO,
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
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pagamento_cod_barras_vo import (
    RequisicaoPagamentoCodBarrasVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pagamento_darfvo import (
    RequisicaoPagamentoDARFVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pagamento_detran_spvo import (
    RequisicaoPagamentoDetranSPVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pagamento_gpsvo import (
    RequisicaoPagamentoGPSVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pagamento_pix_vo import (
    RequisicaoPagamentoPixVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pix_devolucao_vo import (
    RequisicaoPixDevolucaoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pix_imediato_vo import (
    RequisicaoPixImediatoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_pix_vencimento_vo import (
    RequisicaoPixVencimentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_registra_titulo_vo import (
    RequisicaoRegistraTituloVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.requisicao_transferencia_vo import (
    RequisicaoTransferenciaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_anexo import (
    RetornoAnexo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_convenio import (
    RetornoConvenio,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_erro_pagamento_codigo_barras_vo import (
    RetornoErroPagamentoCodigoBarrasVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_erro_pagamento_detran_vo import (
    RetornoErroPagamentoDetranVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_erro_pagamento_gpsvo import (
    RetornoErroPagamentoGPSVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_erro_pagamento_pix_vo import (
    RetornoErroPagamentoPixVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_erro_transferencia_vo import (
    RetornoErroTransferenciaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_erro_vo import (
    RetornoErroVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_exclusao_pagamento_vo import (
    RetornoExclusaoPagamentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_impressao_boleto import (
    RetornoImpressaoBoleto,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_lancamento import (
    RetornoLancamento,
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
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pagamento_detran_vo import (
    RetornoPagamentoDetranVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_paginacao import (
    RetornoPaginacao,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_paginacao_limite200 import (
    RetornoPaginacaoLimite200,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pesquisa import (
    RetornoPesquisa,
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
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pesquisa_ocorrencia_paginada import (
    RetornoPesquisaOcorrenciaPaginada,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pesquisa_paginada import (
    RetornoPesquisaPaginada,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pix_devolucao_vo import (
    RetornoPixDevolucaoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pix_imediato_calendario import (
    RetornoPixImediatoCalendario,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pix_imediato_vo import (
    RetornoPixImediatoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pix_vencimento_calendario import (
    RetornoPixVencimentoCalendario,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_pix_vencimento_vo import (
    RetornoPixVencimentoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_saldo import (
    RetornoSaldo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_titulo import (
    RetornoTitulo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.retorno_transferencia_vo import (
    RetornoTransferenciaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.saldo_vo import (
    SaldoVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.simple_dda import (
    SimpleDDA,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.simple_titulo import (
    SimpleTitulo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.tipo_pagamento import (
    TipoPagamento,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.titular_vo import (
    TitularVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.titulo import (
    Titulo,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.transferencia_vo import (
    TransferenciaVO,
)
from abstra_internals.services.banking.sdk.totalbank_generated_sdk.totalbank_client.models.ws_anexo import (
    WSAnexo,
)
