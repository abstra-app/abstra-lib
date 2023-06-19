class AuthResponse:
    """The response from the authentication process

    Attributes:
      email (str): The email address of the user
    """

    def __init__(self, email: str):
        self.email = email


def get_user() -> "AuthResponse":
    raise NotImplementedError("Must run inside server")
