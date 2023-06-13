import json
import requests
import urllib.request
import urllib.response

from .. import credentials as credentials


HACKERFORMS_API_URL = "https://hackerforms-api.abstra.cloud"
HACKERFORMS_HASURA_URL = "https://hackerforms-hasura.abstra.cloud/v1/graphql"
ABSTRA_ASSETS_UPLOAD_URL = "https://upload.abstra.cloud"


def get_auth_info():
    api_token = credentials.get_credentials()
    headers = credentials.get_auth_headers(api_token)

    if headers is None:
        return None, None, None

    response = requests.get(f"https://auth.abstra.cloud/abstra-cloud", headers=headers)
    response_json = response.json()
    if response_json is None:
        return api_token, None, None

    author_id = response_json.get("author_id")
    workspaces = response_json.get("workspaces", [{}])

    workspace_id = None
    if len(workspaces) != 0:
        workspace_id = workspaces[0].get("id")

    return api_token, workspace_id, author_id


def asset_upload(filepath, file):
    response = requests.request(
        "POST",
        f"{ABSTRA_ASSETS_UPLOAD_URL}/asset/",
        headers={
            "cache-control": "no-cache",
            "Pragma": "no-cache",
            "content-type": "application/json",
        },
        data=json.dumps({"filepath": filepath}),
    )

    response_json = response.json()
    try:
        req = urllib.request.Request(
            url=response_json["putURL"], method="PUT", data=file
        )
        res = urllib.request.urlopen(req)
        if res.status < 400:
            return response_json["getURL"]
    except Exception as e:
        print(e)

    raise Exception("Some error ocurred in asset upload")


def hf_api_runner(method, path, data=None):
    _, workspace_id, _ = get_auth_info()
    headers = credentials.get_auth_headers()
    response = requests.request(
        method,
        f"{HACKERFORMS_API_URL}/workspaces/{workspace_id}/{path}",
        data=json.dumps(data) if data else None,
        headers=headers,
    )
    return response.json()


def hf_hasura_runner(query, variables={}):
    headers = credentials.get_auth_headers()
    response = requests.post(
        HACKERFORMS_HASURA_URL,
        data=json.dumps({"query": query, "variables": variables}),
        headers=headers,
    )
    if response.status_code >= 300:
        raise Exception(f"Request error: {response.text}")
    jsond = response.json()
    if "data" in jsond:
        return jsond["data"]

    raise Exception(jsond["errors"])
