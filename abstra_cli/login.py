import webbrowser, uuid, sys
from . import messages as messages
from . import credentials as credentials
from .apis import public as public_apis


def configure(api_token=None):
    api_token = api_token or messages.read_credentials()
    workspace_id, _ = public_apis.get_info_from_token(api_token)
    if not workspace_id:
        messages.invalid_credentials()
        sys.exit(1)

    credentials.save_credentials(api_token)
    print("Done!")


def login():
    cli_uuid = str(uuid.uuid4())
    url = f"https://forms.abstra.run/cli-login?uuid={cli_uuid}"

    opened = webbrowser.open(url)
    if not opened:
        messages.error_opening_browser(url)

    messages.waiting_for_api_token()
    api_token = public_apis.wait_for_api_token(cli_uuid)
    if not api_token:
        messages.failed_to_get_api_token()
        sys.exit(1)

    configure(api_token)
