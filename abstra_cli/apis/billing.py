from .. import credentials as credentials
from ..apis import main as api_main
import requests

billing_url = "https://billing.abstra.cloud"


def get_account_info():
    headers = credentials.get_auth_headers()
    _, workspace_id, _ = api_main.get_auth_info()
    response = requests.get(
        f"{billing_url}/workspaces/{workspace_id}/account", headers=headers
    )
    response_json = response.json()
    if response_json is None:
        return None
    return response_json
