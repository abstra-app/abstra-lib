_strings = {
    "en_us": {
        "error_required_field": "This field is required.",
        "error_invalid_email": "This email is invalid.",
        "error_invalid_cnpj": "This CNPJ is invalid.",
        "error_invalid_cpf": "This CPF is invalid.",
        "error_invalid_phone_number": "This phone number is invalid.",
    },
    "pt_br": {
        "error_required_field": "Este campo é obrigatório.",
        "error_invalid_email": "Este email é inválido.",
        "error_invalid_cnpj": "Este CNPJ é inválido.",
        "error_invalid_cpf": "Este CPF é inválido.",
        "error_invalid_phone_number": "Este número de telefone é inválido.",
    },
}


class Provider:
    def __init__(self, lang="en_us"):
        if lang not in _strings:
            raise Exception("Invalid language")

        self.lang = lang

    def get(self, key):
        return _strings[self.lang][key] if key in _strings[self.lang] else key
