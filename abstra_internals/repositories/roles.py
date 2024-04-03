import requests
from typing import List

from ..contracts_generated import (
    CommonRole,
    CloudApiCliRoleCreateRequest,
    CloudApiCliRoleUpdateRequest,
)
from ..utils.environment import CLOUD_API_ENDPOINT

from ..credentials import (
    resolve_headers,
)


class RolesRepository:
    @property
    def headers(self):
        return resolve_headers()

    def get_roles(self) -> List[CommonRole]:
        url = f"{CLOUD_API_ENDPOINT}/cli/roles"
        response = requests.get(url, headers=self.headers)
        return [CommonRole.from_dict(role) for role in response.json()]

    def create_role(self, data: CloudApiCliRoleCreateRequest):
        url = f"{CLOUD_API_ENDPOINT}/cli/roles"
        requests.post(url, headers=self.headers, json=data.to_dict())

    def update_role(self, role_id: str, data: CloudApiCliRoleUpdateRequest):
        url = f"{CLOUD_API_ENDPOINT}/cli/roles/{role_id}"
        requests.patch(url, headers=self.headers, json=data.to_dict())


def roles_repository_factory() -> RolesRepository:
    return RolesRepository()
