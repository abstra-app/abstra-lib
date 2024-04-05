import inspect
import mimetypes
import typing
from pathlib import Path

import flask
import werkzeug.exceptions as wz_ex

import abstra_statics

dist_folder = Path(inspect.getfile(abstra_statics)).joinpath("../dist").resolve()


def send_from_dist(
    filename: str,
    fallback: typing.Optional[str] = None,
    dist_folder: Path = dist_folder,
):
    mimetypes.add_type("application/javascript", ".js")
    mimetypes.add_type("text/css", ".css")
    mimetypes.add_type("text/html", ".html")
    try:
        return flask.send_from_directory(dist_folder, filename)
    except wz_ex.NotFound:
        if fallback is None:
            return flask.Response(status=404)
        return flask.send_from_directory(dist_folder, fallback)
