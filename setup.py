import os, re, pathlib
from setuptools import setup, find_packages

regex = "^v(\d+\.\d+\.\d+)$"
TAG = os.getenv("TAG", "v0.0.0")
if not TAG or not re.search(regex, TAG):
    raise ValueError("TAG environment variable must be in the format v1.2.3")
match = re.search(regex, TAG)
version = match.group(1) if match else "0.0.0"

# The directory containing this file
HERE = pathlib.Path(__file__).parent

# The text of the README file
README = (HERE / "README.md").read_text(encoding="utf-8")

# The list of requirements
requirements = (HERE / "requirements.txt").read_text(encoding="utf-8").split("\n")

setup(
    name="abstra",
    license="MIT",
    version=version,
    description="Abstra Lib",
    long_description=README,
    long_description_content_type="text/markdown",
    url="https://github.com/abstra-app/abstra-lib",
    entry_points={
        "console_scripts": [
            "abstra=abstra.cli:main",
        ],
    },
    package_data={
        "abstra_statics": ["dist/**/*", "dist/*"],
        "abstra_internals": ["templates/*"],
    },
    packages=find_packages(exclude=["tests"]),
    install_requires=requirements,
)
