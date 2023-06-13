import flask
from ...session import StaticSession


def run_hook(code, session: StaticSession):
    try:
        exec(code, {}, {})
        body, status_code, headers = session.context.get("response", {})
        response = flask.Response(status=status_code, headers=headers, response=body)
    except Exception as e:
        print(e)
        response = flask.Response("Internal Server Error", 500)

    return response
