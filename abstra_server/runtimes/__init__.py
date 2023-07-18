from .forms import run_form
from .dashes import run_dash
from .hooks import run_hook
from .jobs import run_job
import os


def normalize_run(rootdir: str):
    os.chdir(rootdir)
