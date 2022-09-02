import os, json


def get_request(local_file="request.json"):
    path = os.getenv("REQUEST_FILE", local_file)
    try:
        with open(path) as f:
            content = f.read()
            request = json.loads(content)
            return request["body"], request["query"], request["headers"]
    except Exception:
        return None, None, None


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
