# Publish

## Requirements

Requires `twine`

```sh
pip install twine
```

## Build

Bump the version number in `setup.py`

Build the package:

```sh
python setup.py sdist bdist_wheel
```

Check the contents of the distribution:

```sh
twine check dist/*
```

## Upload

Upload the package to PyPI (credentials are required):

```sh
twine upload dist/*
```

Or upload to a test PyPI server:

```sh
twine upload --repository-url https://test.pypi.org/legacy/ dist/*
```
