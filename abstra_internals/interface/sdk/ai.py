from pathlib import Path
from typing import Dict, List, Optional, TypeVar, Union

from abstra_internals.contracts_generated import (
    CloudApiCliModelsBankStatementResponse,
    CloudApiCliModelsBoletoResponse,
    CloudApiCliModelsInvoiceResponse,
    CloudApiCliModelsNfeResponse,
    CloudApiCliModelsNfseResponse,
    CloudApiCliModelsUsDriverLicenseResponse,
    CloudApiCliModelsUsPassportResponse,
)
from abstra_internals.controllers.sdk.sdk_ai import Format, Prompt
from abstra_internals.controllers.sdk.sdk_context import SDKContextStore

T = TypeVar("T")


def to_list(value: Union[T, List[T], None]) -> List[T]:
    if value is None:
        return []
    if isinstance(value, list):
        return value
    return [value]


def normalize_format(format: Dict[str, object]) -> Dict[str, object]:
    for key, value in format.items():
        if isinstance(value, str):
            format[key] = {"type": value}
        elif isinstance(value, list):
            format[key] = {"enum": value}
        elif value is bool:
            format[key] = {"type": "boolean"}
        elif value is int:
            format[key] = {"type": "integer"}
        elif value is float:
            format[key] = {"type": "number"}
        elif value is str:
            format[key] = {"type": "string"}
        else:
            format[key] = value
    return format


def prompt(
    prompt: Union["Prompt", List["Prompt"]],
    instructions: Union[str, List[str]] = [],
    format: Optional["Format"] = None,
    temperature: float = 1.0,
):
    """
    Send a prompt to the AI and get a response.

    Args:
        prompt (Union[Prompt, List[Prompt]]): The prompt(s) to send to the AI model.
        instructions (Union[str, List[str]]): Additional instructions for the AI. Defaults to [].
        format (Optional[Format]): The expected format for the AI response. Defaults to None.
        temperature (float): Controls randomness in the AI response, from 0.0 to 2.0. Defaults to 1.0.

    Returns:
        The AI response formatted according to the specified format if provided.

    Raises:
        ValueError: If temperature is not between 0.0 and 2.0.
    """
    if temperature < 0.0 or temperature > 2.0:
        raise ValueError("Temperature must be between 0.0 and 2.0")

    instructions_list = to_list(instructions)
    normalized_format = normalize_format(format) if format else None
    prompt_list = to_list(prompt)

    return SDKContextStore.get_by_thread().ai_sdk.prompt(
        prompt_list, instructions_list, normalized_format, temperature
    )


def parse_nfse(document_path: Union["Path", str]) -> CloudApiCliModelsNfseResponse:
    """
    Parse a Nota Fiscal de Serviço Eletrônica (NFSe) document using AI-powered OCR to extract service invoice information and tax details from Brazilian electronic service invoices.

    The parser extracts service invoice details including:
    - cnpj_prestador/cnpj_tomador: CNPJ numbers of service provider/recipient
    - razao_social_prestador/razao_social_tomador: Company names
    - valor_liquido_centavos/valor_total_centavos: Net/total amounts in cents
    - numero_nota: Invoice number
    - codigo_servico: Service code number
    - data_emissao: Issue date (YYYY-MM-DD)
    - descricao: Service description
    - endereco_prestador/endereco_tomador: Full addresses
    - bairro_prestador/bairro_tomador: District/neighborhood information
    - cep_prestador/cep_tomador: ZIP codes
    - municipio_prestador: City of service provider
    - uf_prestador/uf_tomador: State abbreviations (e.g., "SP", "RJ")
    - email_prestador/email_tomador: Email addresses
    - inscricao_municipal_prestador: Municipal registration

    Args:
        document_path (Union[Path, str]): The path to the NFSe document to be parsed.

    Returns:
        dict: The parsed NFSe data.

    Raises:
        ValueError: If document path is invalid or parsing fails.
    """
    data = SDKContextStore.get_by_thread().ai_sdk.parse_document(document_path, "nfse")
    return CloudApiCliModelsNfseResponse.from_dict(data)


def parse_nfe(document_path: Union["Path", str]) -> CloudApiCliModelsNfeResponse:
    """
    Parse a Nota Fiscal Eletrônica (NFe) document using AI-powered OCR to extract comprehensive fiscal information from Brazilian electronic invoices including company data, product details, tax calculations, and transportation info.

    The parser extracts 70+ fields including:

    **Company Information:**
    - chave_acesso: Access key for verification (44 characters)
    - numero_nota: Invoice number (string)
    - serie: Series number
    - cnpj_emitente/razao_social_emitente: Issuer company CNPJ and name
    - cpf_cnpj_destinatario/nome_destinatario/razao_social_destinatario: Recipient tax ID and names
    - endereco_emitente/endereco_destinatario: Full addresses
    - bairro_emitente/bairro_distrito_destinatario: Districts/neighborhoods
    - cep_emitente/cep_destinatario: ZIP codes
    - municipio_emitente/municipio_destinatario: Cities
    - uf_emitente/uf_destinatario: States
    - telefone_emitente/telefone_destinatario: Phone numbers
    - inscricao_estadual_emitente/inscricao_estadual_destinatario: State registrations
    - inscricao_municipal: Municipal registration

    **Financial Information:**
    - data_emissao/data_entrada_saida: Issue and entry/exit timestamps
    - data_protocolo_autorizacao/protocolo_autorizacao: Authorization data
    - valor_produtos/valor_total: Product and total amounts
    - valor_icms/valor_ipi/valor_issqn: Tax amounts (ICMS, IPI, ISSQN)
    - valor_frete/valor_seguro/outras_despesas: Additional costs
    - valor_fcp_st/valor_tributos: Additional tax values
    - desconto: Discount amount

    **Product Information:**
    - descricao_produto/codigo_produto: Product description and code
    - quantidade/unidade/valor_unitario: Product quantity, unit, unit value
    - ncm_sh: NCM/SH classification code
    - cfop: Fiscal operation code
    - cst: Tax situation code
    - aliquota_icms/base_calculo_icms: ICMS tax rate and calculation base
    - aliquota_ipi/base_calculo_icms_st: IPI rate and ICMS-ST base

    **Transportation Information:**
    - natureza_operacao: Nature of operation
    - razao_social_transportadora/cnpj_transportadora: Carrier info
    - endereco_transportadora/municipio_transportadora/uf_transportadora: Carrier location
    - inscricao_estadual_transportadora: Carrier state registration
    - placa_veiculo/uf_veiculo: Vehicle plate and state
    - codigo_antt: ANTT code
    - frete_por_conta: Freight responsibility
    - peso_bruto_kg/peso_liquido_kg: Gross/net weight in kg
    - numero_volumes/quantidade_volumes: Volume count
    - marca_volumes/especie: Volume marking and type
    - hora_saida: Departure time
    - informacoes_adicionais: Additional information text

    Args:
        document_path (Union[Path, str]): The path to the NFe document to be parsed.

    Returns:
        dict: The parsed NFe data.

    Raises:
        ValueError: If document path is invalid or parsing fails.
    """
    data = SDKContextStore.get_by_thread().ai_sdk.parse_document(document_path, "nfe")
    return CloudApiCliModelsNfeResponse.from_dict(data)


def parse_invoice(
    document_path: Union["Path", str],
) -> CloudApiCliModelsInvoiceResponse:
    """
    Parse an invoice document using AI-powered OCR to extract comprehensive invoice information including supplier and receiver details, financial data, shipping information, and line items.

    The parser extracts 35+ fields including:

    **Supplier Information:**
    - supplier_name: Name of the supplier/vendor
    - supplier_address: Supplier's full address
    - supplier_email: Supplier's email address
    - supplier_phone: Supplier's phone number
    - supplier_tax_id: Supplier's tax identification number
    - supplier_registration: Supplier's registration number
    - supplier_iban: Supplier's IBAN for payments
    - supplier_payment_ref: Payment reference number
    - supplier_website: Supplier's website URL

    **Receiver Information:**
    - receiver_name: Name of the receiver/customer
    - receiver_address: Receiver's full address
    - receiver_email: Receiver's email address
    - receiver_phone: Receiver's phone number
    - receiver_tax_id: Receiver's tax identification number
    - receiver_website: Receiver's website URL

    **Financial Information:**
    - invoice_id: Invoice number/identifier
    - invoice_date: Date the invoice was issued
    - due_date: Payment due date
    - total_amount: Total invoice amount
    - net_amount: Net amount (after tax/discount)
    - total_tax_amount: Total tax amount
    - freight_amount: Freight/shipping cost
    - amount_paid_since_last_invoice: Amount paid since last invoice
    - currency: Currency code (e.g., USD, EUR, BRL)
    - currency_exchange_rate: Exchange rate if applicable
    - payment_terms: Payment terms and conditions

    **Shipping Information:**
    - ship_from_name: Ship-from party name
    - ship_from_address: Ship-from address
    - ship_to_name: Ship-to party name
    - ship_to_address: Ship-to destination address
    - remit_to_name: Remit-to party name
    - remit_to_address: Remit-to address for payment
    - carrier: Shipping carrier name
    - delivery_date: Expected or actual delivery date

    **Other Information:**
    - purchase_order: Purchase order number reference

    Args:
        document_path (Union[Path, str]): The path to the invoice document to be parsed.

    Returns:
        dict: The parsed invoice data.

    Raises:
        ValueError: If document path is invalid or parsing fails.
    """
    data = SDKContextStore.get_by_thread().ai_sdk.parse_document(
        document_path, "invoice"
    )
    return CloudApiCliModelsInvoiceResponse.from_dict(data)


def parse_boleto(document_path: Union["Path", str]) -> CloudApiCliModelsBoletoResponse:
    """
    Parse a Brazilian Boleto (bank slip) document using AI-powered OCR for automated payment processing.

    Extracts payment information and banking details including:
    - codigo_de_barras: Barcode number for payment processing
    - valor: Payment amount in centavos (cents)
    - vencimento: Due date (YYYY-MM-DD)
    - beneficiario/pagador: Beneficiary and payer names
    - cpf_cnpj_beneficiario/cpf_cnpj_pagador: Tax IDs
    - agencia_cod_beneficiario: Bank agency and beneficiary code
    - carteira: Bank wallet/portfolio number
    - data_emissao/data_processamento: Issue and processing dates
    - endereco_beneficiario/endereco_pagador: Addresses
    - nosso_numero: Bank's internal reference number
    - numero_documento: Document number

    Args:
        document_path (Union[Path, str]): The path to the Boleto document to be parsed.

    Returns:
        dict: The parsed Boleto data.

    Raises:
        ValueError: If document path is invalid or parsing fails.
    """
    data = SDKContextStore.get_by_thread().ai_sdk.parse_document(
        document_path, "boleto"
    )
    return CloudApiCliModelsBoletoResponse.from_dict(data)


def parse_us_driver_license(
    document_path: Union["Path", str],
) -> CloudApiCliModelsUsDriverLicenseResponse:
    """
    Parse a US Driver License document using AI-powered OCR to extract personal information and license details.

    The parser extracts key information including:
    - Personal details (name, date of birth, address)
    - License information (license number, class, expiration date)
    - Physical characteristics (height, weight, eye color)
    - Address information (street, city, state, zip code)
    - Endorsements and restrictions

    Args:
        document_path (Union[Path, str]): Path to the US Driver License document (PDF, JPEG, or PNG).

    Returns:
        dict: The parsed Driver License data.

    Raises:
        ValueError: If document path is invalid or parsing fails.
    """

    data = SDKContextStore.get_by_thread().ai_sdk.parse_document(
        document_path, "us-driver-license"
    )
    return CloudApiCliModelsUsDriverLicenseResponse.from_dict(data)


def parse_bank_statement(
    document_path: Union["Path", str],
) -> CloudApiCliModelsBankStatementResponse:
    """
    Parse a Bank Statement document using AI-powered OCR to extract account information and transaction details.

    The parser extracts banking information including:
    - Account information (account number, account holder name, bank details)
    - Balance information (opening balance, closing balance, available balance)
    - Transaction history (date, description, amount, balance)
    - Statement period (from date, to date)
    - Bank and branch information
    - Customer contact information

    Args:
        document_path (Union[Path, str]): Path to the Bank Statement document (PDF, JPEG, or PNG).

    Returns:
        dict: The parsed Bank Statement data.

    Raises:
        ValueError: If document path is invalid or parsing fails.
    """

    data = SDKContextStore.get_by_thread().ai_sdk.parse_document(
        document_path, "bank-statement"
    )
    return CloudApiCliModelsBankStatementResponse.from_dict(data)


def parse_us_passport(document_path: Path) -> CloudApiCliModelsUsPassportResponse:
    """
    Parse a US Passport document using AI-powered OCR to extract personal information and document details from US passports, including MRZ (Machine Readable Zone) processing.

    The parser extracts the following key information:
    - family_name: Last name/surname of passport holder
    - given_names: First and middle names
    - document_id: Passport document number (e.g., "E00007730")
    - date_of_birth: Birth date in YYYY-MM-DD format
    - issue_date: Passport issuance date in YYYY-MM-DD format
    - expiration_date: Passport expiration date in YYYY-MM-DD format
    - mrz_code: Machine Readable Zone code from passport bottom
    - portrait: Reference to passport photo if available

    Args:
        document_path (Path): Path to the US Passport document (PDF, JPEG, or PNG).

    Returns:
        dict: The parsed US Passport data.

    Raises:
        ValueError: If document path is invalid or parsing fails.
    """
    data = SDKContextStore.get_by_thread().ai_sdk.parse_document(
        document_path, "us-passport"
    )
    return CloudApiCliModelsUsPassportResponse.from_dict(data)
