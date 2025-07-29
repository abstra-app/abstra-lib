import json
import uuid
from threading import Thread
from time import sleep
from typing import Any, Optional

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
    REQUEST_TIMEOUT,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.settings import Settings


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


def get_project_info(headers: dict, project_id: Optional[str] = None):
    if project_id:
        url = f"{CLOUD_API_CLI_URL}/project/{project_id}"
    else:
        url = f"{CLOUD_API_CLI_URL}/project"
    r = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT)
    r.raise_for_status()
    return r.json()


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


def connect_tunnel():
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
                    ws = simple_websocket.Client(
                        url,
                        headers=headers,
                    )
                    ws.thread.name = "TunnelWebSocket"
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
                    if (
                        not request.path.startswith("/_hooks/")
                        and not request.path.startswith("/_tasks")
                        and not request.path.startswith("/_editor/api/mcp")
                    ):
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
                    set_session_path(session.sessionPath)
                    public_url = (
                        f"{CLOUD_API_ENDPOINT}/tunnel/forward/{session.sessionPath}"
                    )
                    Settings.set_public_url(public_url)

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

    Thread(target=loop, daemon=True, name="TunnelLoop").start()


def get_session_path() -> str:
    path = Settings.root_path / ".abstra" / "session_path"
    assert path.exists(), f"Session path file does not exist: {path}"
    return path.read_text(encoding="utf-8").strip()


def set_session_path(session_path: str):
    path = Settings.root_path / ".abstra" / "session_path"
    path.write_text(session_path, encoding="utf-8")
    refresh_tunnel_secret_key()


def refresh_tunnel_secret_key():
    secret_key = uuid.uuid4().hex
    path = Settings.root_path / ".abstra" / "secret_key"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(secret_key, encoding="utf-8")


def get_tunnel_secret_key() -> str:
    path = Settings.root_path / ".abstra" / "secret_key"
    if not path.exists():
        refresh_tunnel_secret_key()
    return path.read_text(encoding="utf-8").strip()
