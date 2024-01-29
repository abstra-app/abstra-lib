import json
from io import BytesIO

from ...execution import HookExecution


def _app_json_parse(body: str):
    return json.loads(body)


def _multipart_form_parse(body: str, headers: dict):
    from multipart import MultipartParser, parse_options_header, to_bytes

    _, options = parse_options_header(headers["Content-Type"])
    boundary = options["boundary"].encode("utf-8")
    p = MultipartParser(BytesIO(to_bytes(body)), boundary)  # TODO: direct from fs
    return [{"name": i.name, "value": i.value} for i in p]


def get_raw_request():
    execution = HookExecution.get_current_hook_execution()
    request = execution.context.request
    return request.body, request.query_params, request.headers


def get_request():
    body, query, headers = get_raw_request()
    try:
        if "application/json" in headers["Content-Type"]:
            return _app_json_parse(body), query, headers
        elif "multipart/form-data" in headers["Content-Type"]:
            return _multipart_form_parse(body, headers), query, headers
        else:
            return body, query, headers
    except Exception:
        return body, query, headers


def send_response(body="", status_code=200, headers={}):
    execution = HookExecution.get_current_hook_execution()
    execution.context.response = (body, status_code, headers)


def send_json(data={}, status_code=200, headers={}):
    send_response(
        body=json.dumps(data, allow_nan=False),
        headers={**headers, "content-type": "application/json"},
        status_code=status_code,
    )
