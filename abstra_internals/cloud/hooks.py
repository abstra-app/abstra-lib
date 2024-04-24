from gunicorn.arbiter import Arbiter
from gunicorn.workers.base import Worker

from ..environment import set_SERVER_UUID, set_WORKER_UUID


# Called just before the master process is initialized.
def on_starting(server: Arbiter):
    set_SERVER_UUID()


# Called just before a worker is forked.
def pre_fork(server: Arbiter, worker: Worker):
    set_WORKER_UUID()
