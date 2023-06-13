import sys
from .apis import get_auth_info, usage, extension


def credentials_check(fname, *args, **kwargs):
    api_token, workspace_id, author_id = get_auth_info()

    if not api_token:
        print("No API token configured")
        sys.exit(1)

    if not workspace_id:
        print("Bad token: no workspace found")
        sys.exit(1)

    usage(fname, args, kwargs, author_id, workspace_id)


def configuration_check(fname, *args, **kwargs):
    _, workspace_id, author_id = get_auth_info()
    usage(fname, args, kwargs, author_id, workspace_id)


def is_logged():
    api_token, workspace_id, _ = get_auth_info()
    return api_token and workspace_id


def extension_check(**kwargs):
    ext_session_id = kwargs.get("ext_session_id")
    api_token, _, _ = get_auth_info()
    if not ext_session_id or not api_token:
        return

    extension(ext_session_id, api_token)
