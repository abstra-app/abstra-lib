import traceback
from ...session import StaticSession


def run_hook(code, session: StaticSession):
    try:
        namespace: dict = {}
        exec(code, namespace, namespace)
    except:
        traceback.print_exc()
