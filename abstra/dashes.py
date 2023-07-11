# This is an interface only file
# Actual functions are defined on runtime


class AuthResponse:
    email: str


def get_user() -> AuthResponse:
    raise Exception("Not implemented")


def redirect(url: str, params={}):
    raise Exception("Not implemented")


def get_query_params() -> dict:
    raise Exception("Not implemented")


def alert(message: str, severity: str = "info"):
    raise Exception("Not implemented")


def execute_js():
    raise Exception("Not implemented")
