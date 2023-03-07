import json
import requests
import urllib.request
import urllib.response


def upload_file(file):
    response = requests.post(
        "https://upload.abstra.cloud/hackerforms/upload",
        data=json.dumps({"filepath": file.name}),
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
