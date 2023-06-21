from ...session import StaticSession
from uuid import uuid4 as uuid
from code import InteractiveInterpreter
import sys, io

def run_job(code: str, session: StaticSession):
    old_stdout = sys.stdout
    new_stdout = io.StringIO()
    old_stderr = sys.stderr
    new_stderr = io.StringIO()
    sys.stderr = new_stderr
    sys.stdout = new_stdout
    interpreter = InteractiveInterpreter({})
    try:
        interpreter.runcode(code)
    except Exception as e:
        print(e)
    finally:
        sys.stdout = old_stdout
        sys.stderr = old_stderr
        return {
            "stdout": new_stdout.getvalue().strip(),
            "stderr": new_stderr.getvalue().strip()
        }

