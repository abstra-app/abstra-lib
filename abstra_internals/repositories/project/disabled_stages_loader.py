import pathlib
from time import time

import requests

from abstra_internals.environment import DISABLED_STAGES_FOLDER, SIDECAR_HEADERS

GET_DISABLED_STAGES_TIMEOUT = 5
GET_DISABLED_STAGES_CACHE_EXPIRATION = 60 * 5


class DisabledStagesLoader:
    def __init__(self, base_url: str):
        self._cached_disabled_stages = None
        self._cache_expiry = 0
        self.url = f"{base_url}/disabled-stages"

    def get_headers(self):
        raise NotImplementedError

    def _get_disabled_stages_folder(self):
        raise NotImplementedError

    def _fetch_disabled_stages_with_cache(self):
        if not self.url:
            self._cached_disabled_stages = []
            return

        current_time = time()

        if self._cached_disabled_stages and current_time < self._cache_expiry:
            return

        response = requests.get(
            self.url, headers=self.get_headers(), timeout=GET_DISABLED_STAGES_TIMEOUT
        )
        if response.ok:
            data = response.json()
            if not isinstance(data, list):
                data = []
            self._cached_disabled_stages = data
            self._cache_expiry = current_time + GET_DISABLED_STAGES_CACHE_EXPIRATION
        else:
            self._cached_disabled_stages = []

    def _get_disabled_stages_from_efs(self):
        folder = self._get_disabled_stages_folder()

        files = [f.name for f in folder.iterdir() if f.is_file()]
        return files

    def get_disabled_stages_ids(self):
        return self._get_disabled_stages_from_efs()

    def get_disabled_stages_ids_with_fetch(self):
        try:
            self._fetch_disabled_stages_with_cache()

            return self._cached_disabled_stages
        except Exception:
            return []


class ProductionDisabledStagesLoader(DisabledStagesLoader):
    def get_headers(self):
        return SIDECAR_HEADERS

    def _get_disabled_stages_folder(self):
        if not DISABLED_STAGES_FOLDER:
            raise Exception("DISABLED_STAGES_FOLDER is not set")

        return pathlib.Path(DISABLED_STAGES_FOLDER)


class LocalDisabledStagesLoader(DisabledStagesLoader):
    def get_headers(self):
        # This should not be used in Editor
        raise NotImplementedError

    def _get_disabled_stages_folder(self):
        # This should not be used in Editor
        raise NotImplementedError
