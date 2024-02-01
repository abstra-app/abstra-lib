import requests
from ..contracts_generated import (
    CloudApiCliBuildCreateResponse,
    CloudApiCliAuthInfoResponse,
    CloudApiCliUserGetResponse,
)
from ..utils.environment import CLOUD_API_ENDPOINT


def create_build(headers: dict) -> CloudApiCliBuildCreateResponse:
    url = f"{CLOUD_API_ENDPOINT}/cli/builds"
    data = requests.post(url=url, headers=headers).json()
    return CloudApiCliBuildCreateResponse.from_dict(data)


def update_build(build_id: str, headers: dict):
    url = f"{CLOUD_API_ENDPOINT}/cli/builds/{build_id}"
    requests.patch(url=url, headers=headers)


def get_auth_info(headers: dict) -> dict:
    url = f"{CLOUD_API_ENDPOINT}/cli/auth-info"
    try:
        response = requests.get(url, headers=headers)
    except:
        return {"logged": False, "reason": "CONNECTION_ERROR"}
    if response.ok:
        response_data = CloudApiCliAuthInfoResponse.from_dict(response.json())
        return {
            "logged": True,
            "author_id": response_data.author_id,
            "project_id": response_data.project_id,
        }
    else:
        return {"logged": False, "reason": "INVALID_API_TOKEN"}


def get_ai_messages(messages, stage, headers: dict):
    url = f"{CLOUD_API_ENDPOINT}/cli/ai/messages"
    body = {"messages": messages, "runtime": stage}
    return requests.post(url, headers=headers, json=body, stream=True).iter_content(
        chunk_size=None
    )


def get_project_info(headers):
    url = f"{CLOUD_API_ENDPOINT}/cli/project"
    return requests.get(url, headers=headers).json()


def get_user(headers, email: str) -> CloudApiCliUserGetResponse:
    url = f"{CLOUD_API_ENDPOINT}/cli/users/{email}"
    return CloudApiCliUserGetResponse(**requests.get(url, headers=headers).json())
