# This is an interface only file
# Actual functions are defined on runtime


class AuthResponse:
    email: str


def get_user() -> AuthResponse:
    pass


def redirect(url: str, params={}):
    pass


def get_query_params() -> dict:
    pass


def alert(message: str, severity: str = "info"):
    pass


def execute_js():
    pass
