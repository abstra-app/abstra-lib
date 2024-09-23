from typing import Optional

import requests

from abstra_internals.contracts_generated import (
    CloudApiCliApiKeyInfoResponse,
    CloudApiCliBuildCreateResponse,
)
from abstra_internals.environment import CLOUD_API_CLI_URL
from abstra_internals.logger import AbstraLogger


def create_build(headers: dict) -> CloudApiCliBuildCreateResponse:
    url = f"{CLOUD_API_CLI_URL}/builds"
    r = requests.post(url=url, headers=headers)
    if not r.ok:
        raise Exception(f"Failed to create build: {r.text}")

    data = r.json()
    return CloudApiCliBuildCreateResponse.from_dict(data)


def update_build(build_id: str, headers: dict, error: Optional[str] = None):
    url = f"{CLOUD_API_CLI_URL}/builds/{build_id}"
    requests.patch(url=url, headers=headers, json=dict(error=error)).raise_for_status()


def get_api_key_info(headers: dict) -> dict:
    url = f"{CLOUD_API_CLI_URL}/api-keys/info"
    try:
        response = requests.get(url, headers=headers)
    except Exception as e:
        AbstraLogger.capture_exception(e)
        return {"logged": False, "reason": "CONNECTION_ERROR"}

    if response.ok:
        response_data = CloudApiCliApiKeyInfoResponse.from_dict(response.json())
        return {"logged": True, "info": response_data.to_dict()}
    else:
        return {"logged": False, "reason": "INVALID_API_TOKEN"}


def get_ai_messages(messages, stage, thread_id, headers: dict):
    url = f"{CLOUD_API_CLI_URL}/ai/messages"
    body = {"messages": messages, "runtime": stage, "threadId": thread_id}
    return requests.post(url, headers=headers, json=body, stream=True).iter_content(
        chunk_size=None
    )


def generate_project(prompt: str, abstra_json_version: str, headers: dict):
    url = f"{CLOUD_API_CLI_URL}/ai/generate"
    body = {"prompt": prompt, "version": abstra_json_version}
    r = requests.post(url, headers=headers, json=body)
    r.raise_for_status()
    return r.json()


def create_thread(headers: dict):
    url = f"{CLOUD_API_CLI_URL}/ai/thread"
    r = requests.post(url, headers=headers)
    r.raise_for_status()
    return r.json()


def cancel_all(headers: dict, thread_id: str):
    url = f"{CLOUD_API_CLI_URL}/ai/cancel-all"
    r = requests.post(url, headers=headers, json={"threadId": thread_id})
    r.raise_for_status()


def get_project_info(headers):
    url = f"{CLOUD_API_CLI_URL}/project"
    r = requests.get(url, headers=headers)
    r.raise_for_status()
    return r.json()
