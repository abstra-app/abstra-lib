import json
from io import BytesIO
from typing import Dict, List, Tuple, Union

from abstra_internals.controllers.execution_client_hook import HookClient
from abstra_internals.utils.insensitive_dict import CaseInsensitiveDict


class HookSDKController:
    def __init__(self, client: HookClient) -> None:
        self.client = client

    def set_response(self, status: int, body: str, headers: Dict[str, str]):
        self.client.set_response(status, body, headers)

    def get_raw_request(self) -> Tuple[str, Dict[str, str], CaseInsensitiveDict]:
        request = self.client.get_request()
        return (
            request.body,
            request.query_params,
            CaseInsensitiveDict(request.headers),
        )

    def get_request(
        self,
    ) -> Tuple[Union[str, List, Dict], Dict[str, str], CaseInsensitiveDict]:
        body, query, headers = self.get_raw_request()
        try:
            if "application/json" in headers["Content-Type"]:
                return json.loads(body), query, headers
            elif "multipart/form-data" in headers["Content-Type"]:
                return self._multipart_form_parse(body, headers), query, headers
            else:
                return body, query, headers
        except Exception:
            return body, query, headers

    def _multipart_form_parse(self, body: str, headers: dict):
        from multipart import (
            MultipartParser,
            MultipartPart,
            parse_options_header,
            to_bytes,
        )

        _, options = parse_options_header(headers["Content-Type"])
        boundary = options["boundary"].encode("utf-8")
        p = MultipartParser(BytesIO(to_bytes(body)), boundary)  # TODO: direct from fs
        return [
            {"name": i.name, "value": i.value}
            for i in p
            if isinstance(i, MultipartPart)
        ]
