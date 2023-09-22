import json
from io import BytesIO
from abstra_internals.execution.static_execution import get_static_execution_throwable


def _app_json_parse(body: str):
    return json.loads(body)


def _multipart_form_parse(body: str, headers: dict):
    from multipart import MultipartParser, to_bytes, parse_options_header

    _, options = parse_options_header(headers["Content-Type"])
    boundary = options["boundary"].encode("utf-8")
    p = MultipartParser(BytesIO(to_bytes(body)), boundary)  # TODO: direct from fs
    return [{"name": i.name, "value": i.value} for i in p]


def get_raw_request():
    execution = get_static_execution_throwable()
    raw, args, headers = execution.context.get("request", (None, None, None))
    return raw, args, headers


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
    execution = get_static_execution_throwable()
    execution.context["response"] = (body, status_code, headers)


def send_json(data={}, status_code=200, headers={}):
    send_response(
        body=json.dumps(data, allow_nan=False),
        headers={**headers, "content-type": "application/json"},
        status_code=status_code,
    )
