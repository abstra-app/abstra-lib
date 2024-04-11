import typing as t
from datetime import datetime
from uuid import uuid4

import requests
from gunicorn.arbiter import Arbiter
from gunicorn.workers.base import Worker

from ..utils.datetime import to_utc_iso_string
from ..utils.environment import (
    SIDECAR_HEADERS,
    SIDECAR_URL,
    set_SERVER_UUID,
    set_WORKER_UUID,
)


def sidecar_post(path: str, body: t.Dict = {}):
    if not SIDECAR_URL:
        return

    try:
        requests.post(
            f"http://localhost:4000/{path}", headers=SIDECAR_HEADERS, json=body
        )
    except Exception:
        pass


def ensure_uuid(obj: object) -> str:
    key = "abstra_uuid"
    if not getattr(obj, key, None):
        setattr(obj, key, uuid4().__str__())

    return getattr(obj, key)


def send_server_events(
    server_or_worker: t.Union[Worker, Arbiter], hook_name: str, payload: t.Dict = {}
):
    try:
        created = to_utc_iso_string(datetime.utcnow())
        body = dict(
            payload=payload,
            created=created,
            hook_name=hook_name,
            app_uuid=ensure_uuid(server_or_worker.app),
        )

        if isinstance(server_or_worker, Worker):
            body.update(worker_uuid=ensure_uuid(server_or_worker))

        sidecar_post("server-events", body)
    except Exception as e:
        print(f"Failed to send server event: {e}")


###### Gunicorn hooks ######


# Called just before the master process is initialized.
def on_starting(server: Arbiter):
    set_SERVER_UUID(ensure_uuid(server.app))
    send_server_events(server, "on_starting")


# Called to recycle workers during a reload via SIGHUP.
def on_reload(server: Arbiter):
    send_server_events(server, "on_reload")


# Called just after the server is started.
def when_ready(server: Arbiter):
    send_server_events(server, "when_ready")


# Called just before a worker is forked.
def pre_fork(server: Arbiter, worker: Worker):
    set_WORKER_UUID(ensure_uuid(worker))
    send_server_events(worker, "pre_fork")


# Called just after a worker has initialized the application.
def post_worker_init(worker: Worker):
    send_server_events(worker, "post_worker_init")


# Called just after a worker exited on SIGINT or SIGQUIT.
def worker_int(worker: Worker):
    send_server_events(worker, "worker_int")


# Called when a worker received the SIGABRT signal.
# This call generally happens on timeout.
def worker_abort(worker: Worker):
    send_server_events(worker, "worker_abort")


# Called just before a new master process is forked.
def pre_exec(server: Arbiter):
    send_server_events(server, "pre_exec")


# Called just after a worker has been exited, in the master process.
def child_exit(server: Arbiter, worker: Worker):
    send_server_events(worker, "child_exit")


# Called just after a worker has been exited, in the worker process.
def worker_exit(server: Arbiter, worker: Worker):
    send_server_events(worker, "worker_exit")


# Called just after num_workers has been changed.
def nworkers_changed(server: Arbiter, new_value: int, old_value: t.Optional[int]):
    payload = dict(new_value=new_value, old_value=old_value)
    send_server_events(server, "nworkers_changed", payload)


# Called just before exiting Gunicorn.
def on_exit(server: Arbiter):
    send_server_events(server, "on_exit")
    sidecar_post("shutdown")


hooks_options = {
    "on_starting": on_starting,
    "on_reload": on_reload,
    "when_ready": when_ready,
    "pre_fork": pre_fork,
    "worker_int": worker_int,
    "worker_abort": worker_abort,
    "pre_exec": pre_exec,
    "child_exit": child_exit,
    "worker_exit": worker_exit,
    "nworkers_changed": nworkers_changed,
    "on_exit": on_exit,
}
