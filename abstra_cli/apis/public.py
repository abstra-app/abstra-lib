import os, json, requests, websocket as ws
from functools import lru_cache
from ..credentials import get_auth_headers


@lru_cache(maxsize=None)
def get_info_from_token(api_token):
    headers = get_auth_headers(api_token)
    response = requests.get(f"https://auth.abstra.cloud/abstra-cloud", headers=headers)
    response_json = response.json()
    if response_json is None:
        return None, None

    author_id = response_json.get("author_id")
    workspaces = response_json.get("workspaces", [{}])

    workspace_id = None
    if len(workspaces) != 0:
        workspace_id = workspaces[0].get("id")

    return workspace_id, author_id


def usage(fname, args, kwargs, author_id, workspace_id):
    if os.getenv("DISABLE_USAGE_STATISTICS"):
        return

    try:
        requests.post(
            "https://usage-api.abstra.cloud/api/rest/cli-usage",
            data=json.dumps(
                {
                    "author_id": author_id,
                    "workspace_id": workspace_id,
                    "method": fname,
                    "arguments": {"args": args[1:], "kwargs": list(kwargs.keys())},
                }
            ),
            headers={"content-type": "application/json"},
        )
    except Exception as e:
        pass


def extension(ext_session_id, api_token):
    if os.getenv("DISABLE_USAGE_STATISTICS"):
        return

    try:
        requests.post(
            "https://usage-api.abstra.cloud/api/rest/cli-extension",
            data=json.dumps(
                {
                    "extension_session_id": ext_session_id,
                    "api_token": api_token,
                }
            ),
            headers={"content-type": "application/json"},
        )
    except Exception as e:
        pass


def wait_for_api_token(cli_uuid):
    ws_url = f"wss://pubsub.abstra.cloud/external/sub/cli-login-{cli_uuid}"
    ws_client = None
    try:
        ws_client = ws.create_connection(ws_url)
        result = ws_client.recv()
        if result is None:
            return None
        return json.loads(result).get("api_token")
    except Exception as e:
        return None
    finally:
        ws_client and ws_client.close()
