from .socket import send, receive


def execute_action(type, payload):
    send(
        {
            "type": "action",
            "action": {
                "type": type,
                **payload,
            },
        }
    )

    response = receive()

    if "errorMessage" in response:
        raise Exception(response["errorMessage"])

    return response.get("value", None)


def redirect(url):
    return execute_action("redirect", {"url": url})


def execute_js(code, context={}):
    return execute_action("execute-js", {"code": code, "context": context})
