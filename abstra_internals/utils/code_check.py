import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path


@dataclass
class CodeCheckResult:
    success: bool
    stdout: str
    stderr: str
    return_code: int


def run_python_module(module_name, args=None) -> CodeCheckResult:
    """
    Executes a Python module as if it were run from the command line.

    Args:
        module_name (str): The name of the module to run (e.g., 'my_package.my_module').
        args (list, optional): A list of strings representing command-line arguments
                               to pass to the module. Defaults to None.
    """

    cmd = [sys.executable, "-m", module_name]
    if args:
        cmd.extend(args)

    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=30,  # 30 second timeout to prevent hanging
        )
        return CodeCheckResult(
            success=result.returncode == 0,
            stdout=result.stdout,
            stderr=result.stderr,
            return_code=result.returncode,
        )
    except subprocess.TimeoutExpired as e:
        return CodeCheckResult(
            success=False,
            stdout=e.stdout.decode() if e.stdout else "",
            stderr=e.stderr.decode()
            if e.stderr
            else "Process timed out after 30 seconds",
            return_code=1,
        )
    except Exception as e:
        return CodeCheckResult(
            success=False,
            stdout="",
            stderr=f"Failed to run module: {str(e)}",
            return_code=1,
        )


def code_check_all() -> CodeCheckResult:
    return run_python_module("ty", ["check", "--python", sys.executable])


def code_check(file_path: Path) -> CodeCheckResult:
    if not file_path.is_file():
        return CodeCheckResult(
            success=False,
            stdout="",
            stderr=f"File {file_path} does not exist",
            return_code=1,
        )

    return run_python_module(
        "ty", ["check", str(file_path), "--python", sys.executable]
    )
