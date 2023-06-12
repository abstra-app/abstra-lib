from io import BytesIO
import os, json


def _app_json_parse(body: str):
    return json.loads(body)


def _multipart_form_parse(body: str, headers: dict):
    from multipart import MultipartParser, to_bytes, parse_options_header

    _, options = parse_options_header(headers["Content-Type"])
    boundary = options["boundary"].encode("utf-8")
    p = MultipartParser(BytesIO(to_bytes(body)), boundary)  # TODO: direct from fs
    return [{"name": i.name, "value": i.value} for i in p]


def get_raw_request(local_file="request.json"):
    try:
        with open(os.getenv("REQUEST_FILE", local_file)) as f:
            request = json.loads(f.read())
            body = request["body"]
            query = request["query"]
            headers = request["headers"]
        return body, query, headers

    except Exception:
        return None, None, None


def get_request(local_file="request.json"):
    body, query, headers = get_raw_request(local_file)
    try:
        if "application/json" in headers["Content-Type"]:
            return _app_json_parse(body), query, headers
        elif "multipart/form-data" in headers["Content-Type"]:
            return _multipart_form_parse(body, headers), query, headers
        else:
            return body, query, headers
    except Exception:
        return body, query, headers


def send_response(body="", status_code=200, headers={}, local_file="response.json"):
    response = {"status_code": status_code, "body": body, "headers": headers}
    path = os.getenv("RESPONSE_FILE", local_file)
    content = json.dumps(response)
    with open(path, "w") as f:
        f.write(content)


def send_json(data={}, status_code=200, headers={}, local_file="response.json"):
    send_response(
        body=json.dumps(data, allow_nan=False),
        headers={**headers, "content-type": "application/json"},
        status_code=status_code,
        local_file=local_file,
    )
