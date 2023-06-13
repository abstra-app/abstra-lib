import urllib.request
import urllib.response
from ..apis import main as api_main


def upload_file(filepath, file):
    response_json = api_main.hf_api_runner("POST", "put-url", {"filepath": filepath})
    req = urllib.request.Request(
        url=response_json["putURL"], method="PUT", data=file.read()
    )
    res = urllib.request.urlopen(req)
    return res.status < 400


def get_file_signed_url(filepath):
    response_json = api_main.hf_api_runner("POST", "get-url", {"filepath": filepath})
    return response_json.get("getURL")


def list_workspace_files():
    return api_main.hf_api_runner("GET", "files")


def delete_file(filepath):
    return api_main.hf_api_runner("DELETE", "file", {"filepath": filepath})


def delete_folder(path):
    return api_main.hf_api_runner("DELETE", "folder", {"path": path})
