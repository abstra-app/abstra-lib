import sys
from pathlib import Path


def _is_headless():
    return not sys.stdin.isatty()


def _there_is_abstra_json():
    return (Path.cwd() / "abstra.json").exists()


def _askdirectory():
    ans = input(
        f"The project will be created in the current directory ({Path.cwd()}). Continue? (y/n): "
    )

    if ans.lower() != "y":
        print("\nTry using: 'abstra editor <PATH>' to specify a directory.")
        exit(0)

    return "."


def select_dir() -> str:
    if _there_is_abstra_json() or _is_headless():
        return "."

    asked_dir = _askdirectory()
    if asked_dir != "":
        return asked_dir

    print("No directory selected. Please, select a directory.")
    sys.exit(0)
