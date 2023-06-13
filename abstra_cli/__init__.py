from .checkers import credentials_check
from .apis import get_file_signed_url


def get_file_url(filepath):
    credentials_check("get_file_url", filepath)
    return get_file_signed_url(filepath)
