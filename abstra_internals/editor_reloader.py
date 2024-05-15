import os
import sys
import typing
from pathlib import Path

from werkzeug.serving import BaseWSGIServer


class EditorReloader:
    _instance: typing.Optional["EditorReloader"] = None
    _server: typing.Optional[BaseWSGIServer] = None

    def __new__(cls):
        if not cls._instance:
            cls._instance = super(EditorReloader, cls).__new__(cls)
        return cls._instance

    def set_server(self, server: BaseWSGIServer):
        EditorReloader._server = server

    def reload(self):
        if EditorReloader._server is not None:
            EditorReloader._server.shutdown()
            EditorReloader._server = None

        is_win = sys.platform.startswith("win")
        path_str = sys.argv[0]
        if is_win:
            path_str = path_str + ".exe"

        is_executable_in_args = Path(path_str).exists() and os.access(path_str, os.X_OK)

        executable, cmd = (
            (sys.argv[0], sys.argv[1:])
            if is_executable_in_args
            else (sys.executable, sys.argv)
        )

        cmd = [executable] + cmd
        if "--reloading" not in cmd:
            cmd.append("--reloading")

        if is_win:
            sts = os.spawnv(os.P_WAIT, executable, cmd)
            os._exit(sts)
        else:
            os.execv(executable, cmd)


LocalReloader = EditorReloader()
