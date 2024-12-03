from typing import Optional

import flask

from abstra_internals.repositories.jwt_signer import EditorJWTRepository


class WebEditorController:
    def __init__(
        self,
        editor_jwt: EditorJWTRepository,
    ) -> None:
        self.jwt = editor_jwt

    def welcome(self, token: Optional[str]):
        if not token:
            return flask.make_response({"ok": False, "error": "No token provided"}, 401)

        if not self.jwt.verify(token):
            return flask.make_response({"ok": False, "error": "Invalid token"}, 401)

        response = flask.make_response({"ok": True})
        response.set_cookie(
            "editor_auth",
            token,
            max_age=60 * 60 * 24 * 7,  # Expires in 7 day (in seconds)
            httponly=True,  # Makes it inaccessible to JavaScript
            secure=True,  # Ensures it's sent over HTTPS
            samesite="Lax",  # Protects against CSRF
        )
        return response

    def guard(self):
        token = flask.request.cookies.get("editor_auth")
        if not self.jwt.verify(token):
            return flask.make_response({"ok": False, "error": "Invalid token"}, 403)
        return None
