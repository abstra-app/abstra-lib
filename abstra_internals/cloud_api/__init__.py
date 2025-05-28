import json
from threading import Thread
from time import sleep
from typing import Any, Callable, Optional

import requests
import simple_websocket
from colorama import Fore
from pydantic import BaseModel

from abstra_internals.contracts_generated import (
    CloudApiCliApiKeyInfoResponse,
    CloudApiCliBuildCreateResponse,
)
from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import (
    CLOUD_API_CLI_URL,
    CLOUD_API_ENDPOINT,
    HOST,
    IS_PRODUCTION,
    PROJECT_ID,
    REQUEST_TIMEOUT,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.settings import Settings
from abstra_internals.utils import packages as pkg_utils


def create_build(headers: dict) -> CloudApiCliBuildCreateResponse:
    url = f"{CLOUD_API_CLI_URL}/builds"
    r = requests.post(url=url, headers=headers, timeout=REQUEST_TIMEOUT)
    if not r.ok:
        raise Exception(f"Failed to create build: {r.text}")

    data = r.json()
    return CloudApiCliBuildCreateResponse.from_dict(data)


def update_build(build_id: str, headers: dict, error: Optional[str] = None):
    url = f"{CLOUD_API_CLI_URL}/builds/{build_id}"
    requests.patch(
        url=url, headers=headers, json=dict(error=error), timeout=REQUEST_TIMEOUT
    ).raise_for_status()


def get_api_key_info(headers: dict) -> dict:
    url = f"{CLOUD_API_CLI_URL}/api-keys/info"
    try:
        response = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT)
    except Exception as e:
        AbstraLogger.capture_exception(e)
        return {"logged": False, "reason": "CONNECTION_ERROR"}

    if response.ok:
        response_data = CloudApiCliApiKeyInfoResponse.from_dict(response.json())
        return {"logged": True, "info": response_data.to_dict()}
    else:
        return {"logged": False, "reason": "INVALID_API_TOKEN"}


def get_ai_messages(
    messages,
    stage,
    langgraph_thread_id,
    code,
    imported_code,
    execution_error,
    headers: dict,
    env_vars_keys,
    current_abstra_json,
    allowed_actions_schema,
):
    url = f"{CLOUD_API_CLI_URL}/ai/messages"
    current_abstra_version = pkg_utils.get_local_package_version().base_version
    body = {
        "messages": messages,
        "runtime": stage,
        "langGraphThreadId": langgraph_thread_id,
        "code": code,
        "importedCode": imported_code,
        "executionError": execution_error,
        "version": current_abstra_version,
        "envVars": env_vars_keys,
        "actionsVersion": "v1",
        "abstraJson": current_abstra_json,
        "allowedActionsSchema": allowed_actions_schema,
    }
    return requests.post(url, headers=headers, json=body, stream=True).iter_content(
        chunk_size=None
    )


def generate_project(prompt: str, abstra_json_version: str, headers: dict):
    url = f"{CLOUD_API_CLI_URL}/ai/generate"
    body = {"prompt": prompt, "version": abstra_json_version}
    r = requests.post(url, headers=headers, json=body, timeout=REQUEST_TIMEOUT)
    r.raise_for_status()
    return r.json()


def get_history(headers: dict, limit: int, offset: int):
    url = f"{CLOUD_API_CLI_URL}/ai/history"
    r = requests.get(
        url,
        headers=headers,
        params={"limit": limit, "offset": offset},
        timeout=REQUEST_TIMEOUT,
    )
    r.raise_for_status()
    return r.json()


def create_thread(headers: dict):
    url = f"{CLOUD_API_CLI_URL}/ai/thread"
    r = requests.post(url, headers=headers, timeout=REQUEST_TIMEOUT)
    r.raise_for_status()
    return r.json()


def cancel_all(headers: dict, thread_id: str):
    url = f"{CLOUD_API_CLI_URL}/ai/cancel-all"
    r = requests.post(
        url, headers=headers, json={"threadId": thread_id}, timeout=REQUEST_TIMEOUT
    )
    r.raise_for_status()


def abort_thread(headers: dict, thread_id: str):
    url = f"{CLOUD_API_CLI_URL}/ai/abort"
    r = requests.post(
        url,
        headers=headers,
        json={"langGraphThreadId": thread_id},
        timeout=REQUEST_TIMEOUT,
    )
    r.raise_for_status()


def get_project_info(headers: dict, project_id: Optional[str] = None):
    if project_id:
        url = f"{CLOUD_API_CLI_URL}/project/{project_id}"
    else:
        url = f"{CLOUD_API_CLI_URL}/project"
    r = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT)
    r.raise_for_status()
    return r.json()


def get_project_id():
    if IS_PRODUCTION:
        return PROJECT_ID

    else:
        headers = resolve_headers()
        if headers is None:
            return None
        return get_project_info(headers)["id"]


class TunnelRequest(BaseModel):
    method: str
    path: str
    headers: dict
    body: Optional[str]
    query: dict
    sessionPath: str
    requestId: str


class TunnelResponse(BaseModel):
    status: int
    headers: dict
    text: str
    sessionPath: str
    requestId: str


class SessionPathMessage(BaseModel):
    sessionPath: str


def connect_tunnel(on_public_url_update: Optional[Callable[[], None]]):
    url = f"{CLOUD_API_ENDPOINT}/tunnel/connect".replace("https://", "wss://").replace(
        "http://", "ws://"
    )

    def loop():
        ws = None
        while True:
            if ws is None:
                headers = resolve_headers()
                if headers is None:
                    sleep(5)
                    continue
                try:
                    ws = simple_websocket.Client(url, headers=headers)
                except Exception:
                    sleep(1)
                    continue
            try:
                message = ws.receive()
                assert isinstance(message, str)
                message_dict = json.loads(message)
                if "method" in message_dict:
                    request = TunnelRequest.model_validate_json(message)
                    kwargs: Any = dict(
                        headers=request.headers,
                        params=request.query,
                        **dict(data=request.body if request.body else {}),
                    )
                    if not request.path.startswith(
                        "/_hooks/"
                    ) and not request.path.startswith("/_tasks"):
                        response = TunnelResponse(
                            status=403,
                            headers={},
                            text=f"Forbidden path: {request.path}",
                            sessionPath=request.sessionPath,
                            requestId=request.requestId,
                        )
                        ws.send(response.model_dump_json())
                    else:
                        response = requests.request(
                            request.method,
                            f"http://{HOST}:{Settings.server_port}{request.path}",
                            timeout=REQUEST_TIMEOUT,
                            **kwargs,
                        )
                        response_json = TunnelResponse(
                            status=response.status_code,
                            headers=dict(response.headers),
                            text=response.text,
                            sessionPath=request.sessionPath,
                            requestId=request.requestId,
                        ).model_dump_json()
                        ws.send(response_json)

                else:
                    global session
                    session = SessionPathMessage.model_validate_json(message)
                    public_url = (
                        f"{CLOUD_API_ENDPOINT}/tunnel/forward/{session.sessionPath}"
                    )
                    Settings.set_public_url(public_url)

                    if on_public_url_update:
                        on_public_url_update()

                    if not hasattr(loop, "_printed"):
                        setattr(loop, "_printed", True)
                        print(
                            f"You can test your hooks locally by sending requests to: {Fore.GREEN}{public_url}/_hooks/:hook-path{Fore.RESET}"
                        )
            except simple_websocket.ConnectionClosed:
                ws = None
            except simple_websocket.ConnectionError as e:
                print(f"Connection error: {e}")
                ws = None
            except KeyboardInterrupt:
                ws.close()
                break
            except Exception as e:
                print(f"Error: {e}")
                ws.close()
                ws = None

    Thread(target=loop, daemon=True).start()
