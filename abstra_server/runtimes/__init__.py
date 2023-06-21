from .forms import run_form
from .dashes import run_dash
from .hooks import run_hook
from .jobs import run_job

runners = {"dash": run_dash, "form": run_form, "hook": run_hook, "job": run_job}
