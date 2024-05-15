import os
import sys
from typing import Optional


def install(package: str, *, version: Optional[str] = None, upgrade: bool = False):
    ## Since windows locks the abstra.exe file
    ## we can't upgrade the package while the program is running
    assert package != "abstra"

    command = [sys.executable, "-m", "pip", "install", package]
    if version:
        command.append(f"=={version}")
    elif upgrade:
        command.append("--upgrade")

    os.system(" ".join(command))
