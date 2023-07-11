import json, requests, urllib.request, urllib.response, io


def upload_file(file: io.IOBase):
    name = file.name if hasattr(file, "name") else "file"
    response = requests.post(
        "https://upload.abstra.cloud/hackerforms/upload",
        data=json.dumps({"filepath": name}),
        headers={"content-type": "application/json"},
    )
    response_json = json.loads(response.text)

    file.seek(0)
    content = file.read()
    content = str.encode(content) if not isinstance(content, bytes) else content

    req = urllib.request.Request(
        url=response_json["putURL"], method="PUT", data=content
    )
    urllib.request.urlopen(req)

    return response_json["getURL"]
