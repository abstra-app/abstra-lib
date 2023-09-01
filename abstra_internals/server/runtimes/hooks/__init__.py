import traceback, flask

from ...api.classes import HookJSON
from ....session import StaticSession


def run_hook(request: flask.Request, hook: HookJSON, code: str):
    session = StaticSession("hooks", hook.path)
    session.context["request"] = (
        request.get_data(as_text=True),
        request.args,
        request.headers,
    )

    try:
        namespace: dict = {}
        exec(code, namespace, namespace)
        return session.context.get("response", ({}, 200, {}))
    except:
        traceback.print_exc()
        return session.context.get("response", ({}, 500, {}))
