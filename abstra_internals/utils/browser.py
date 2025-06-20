import threading
import webbrowser

from abstra_internals.environment import HOST
from abstra_internals.settings import Settings


def open_editor():
    webbrowser.open(f"http://{HOST}:{Settings.server_port}/_editor")


def background_open_editor():
    t = threading.Timer(
        interval=1,
        function=open_editor,
    )
    t.name = "BrowserOpenEditor"
    t.start()
