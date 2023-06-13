import inspect, os, flask, werkzeug.exceptions as wz_ex
import abstra_statics

dist_folder = os.path.join(os.path.dirname(inspect.getfile(abstra_statics)), "dist")


def send_from_dist(filename: str, fallback: str):
    try:
        return flask.send_from_directory(dist_folder, filename)
    except wz_ex.NotFound as e:
        return flask.send_from_directory(dist_folder, fallback)
