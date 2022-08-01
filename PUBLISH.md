# Publish

## Publish with github actions

The workflow in .github/workflows/upload_pip.yml publishes the package to the PyPI.
Create a release in Github with the tag to published in PyPI and the action will be triggered.

## Publish Local

### Requirements

Requires `twine`

```sh
pip install twine
```

### Build

Delete the `dist` and `build` directories, if present

Build the package:

```sh
TAG=v1.2.3 python setup.py sdist bdist_wheel
```

Check the contents of the distribution:

```sh
twine check dist/*
```

### Upload

Upload the package to PyPI (credentials are required):

```sh
twine upload dist/*
```

Or upload to a test PyPI server:

```sh
twine upload --repository-url https://test.pypi.org/legacy/ dist/*
```
