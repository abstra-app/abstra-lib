import platform
import subprocess

from abstra_internals.logger import AbstraLogger


def is_port_in_use_windows(port: int) -> bool:
    command = f"Get-NetTCPConnection -LocalPort {port}"
    try:
        result = subprocess.run(
            ["powershell", "-Command", command], capture_output=True, text=True
        )
        return result.returncode == 0 and len(result.stdout) > 0
    except subprocess.SubprocessError as e:
        AbstraLogger.capture_exception(e)
        return False


def is_port_listed_by_lsof(port: int) -> bool:
    try:
        result = subprocess.run(
            ["lsof", "-i", f":{port}"], capture_output=True, text=True
        )
        return result.returncode == 0 and len(result.stdout) > 0
    except subprocess.SubprocessError as e:
        AbstraLogger.capture_exception(e)
        return False


def get_free_port(default_port: int) -> int:
    range_start = default_port
    range_end = default_port + 100

    for port in range(range_start, range_end):
        if platform.system() == "Windows":
            if not is_port_in_use_windows(port):
                return port
        else:
            if not is_port_listed_by_lsof(port):
                return port

    raise Exception(
        f"Could not find a free port in the range {range_start}-{range_end}"
    )
