import inspect, flask, werkzeug.exceptions as wz_ex
import abstra_statics
from pathlib import Path

dist_folder = Path(inspect.getfile(abstra_statics)).joinpath("../dist").resolve()


def send_from_dist(filename: str, fallback: str):
    try:
        return flask.send_from_directory(dist_folder, filename)
    except wz_ex.NotFound as e:
        return flask.send_from_directory(dist_folder, fallback)
