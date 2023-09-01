_strings = {
    "en_us": {
        "error_required_field": "This field is required.",
        "error_invalid_email": "This email is invalid.",
        "error_invalid_cnpj": "This CNPJ is invalid.",
        "error_invalid_cpf": "This CPF is invalid.",
        "error_invalid_phone_number": "This phone number is invalid.",
        "error_min_list": "The minimum number of items is {min}.",
        "error_max_list": "The maximum number of items is {max}.",
        "error_min_number": "The minimum value is {min}.",
        "error_max_number": "The maximum value is {max}.",
    },
    "pt_br": {
        "error_required_field": "Este campo é obrigatório.",
        "error_invalid_email": "Este email é inválido.",
        "error_invalid_cnpj": "Este CNPJ é inválido.",
        "error_invalid_cpf": "Este CPF é inválido.",
        "error_invalid_phone_number": "Este número de telefone é inválido.",
        "error_min_list": "O número mínimo de itens é {min}.",
        "error_max_list": "O número máximo de itens é {max}.",
        "error_min_number": "O valor mínimo é {min}.",
        "error_max_number": "O valor máximo é {max}.",
    },
}


class Provider:
    def __init__(self, lang="en_us"):
        if lang not in _strings:
            raise Exception("Invalid language")

        self.lang = lang

    def get(self, key):
        return _strings[self.lang][key] if key in _strings[self.lang] else key
