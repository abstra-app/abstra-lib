import pathlib
from setuptools import setup

# The directory containing this file
HERE = pathlib.Path(__file__).parent

# The text of the README file
README = (HERE / "README.md").read_text()

setup(
    name='abstra',
    version='0.1.0',
    description='Abstra Lib',
    long_description=README,
    long_description_content_type="text/markdown",
    url="https://github.com/abstra-app/abstra-lib",
    license='MIT',
    packages=['abstra'],
    install_requires=['setuptools', 'requests']
)
