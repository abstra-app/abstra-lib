import traceback
from ...session import StaticSession


def run_job(code: str, session: StaticSession):
    try:
        namespace = {}
        exec(code, namespace, namespace)
    except:
        traceback.print_exc()
