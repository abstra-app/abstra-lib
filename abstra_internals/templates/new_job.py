import abstra.workflows as aw
from datetime import datetime

"""
Abstra jobs are the simplest way to build repetitive tasks for your workflows. Just schedule a job and let Abstra do the rest.
"""

print("Hello world!")

# You can save and get information from the workflow context
stage = aw.get_stage()
stage["time"] = datetime.now()
