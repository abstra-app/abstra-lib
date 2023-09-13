import traceback

from ...api.classes import JobJSON
from ....session import StaticSession


def run_job(job: JobJSON):
    code = job.file_path.read_text()
    session = StaticSession("jobs", job.identifier)

    try:
        namespace: dict = {}
        exec(code, namespace, namespace)
    except:
        traceback.print_exc()
