from typing import List

import requests

from abstra_internals.contracts_generated import (
    CommonRole,
)
from abstra_internals.credentials import (
    resolve_headers,
)
from abstra_internals.environment import CLOUD_API_ENDPOINT


class RolesRepository:
    @property
    def headers(self):
        return resolve_headers()

    def get_roles(self) -> List[CommonRole]:
        url = f"{CLOUD_API_ENDPOINT}/cli/roles"
        if not self.headers:
            return []
        response = requests.get(url, headers=self.headers)
        return [CommonRole.from_dict(role) for role in response.json()]


def roles_repository_factory() -> RolesRepository:
    return RolesRepository()
