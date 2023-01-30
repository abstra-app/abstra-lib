[![pypi](https://img.shields.io/pypi/v/abstra.svg)](https://pypi.python.org/pypi/abstra)
[![PyPI Downloads](https://img.shields.io/pypi/dm/abstra.svg)](https://pypi.org/project/abstra/)
[![Code check](https://github.com/abstra-app/abstra-lib/actions/workflows/code_check.yml/badge.svg)](https://github.com/abstra-app/abstra-lib/actions/workflows/code_check.yml)

# abstra lib

Python package for abstra products

## Hooks

```python
from abstra.hooks import get_request, send_response, send_json

# helper to get request
body, query, headers = get_request()

# helper to send response
send_response(body='DONE', status_code=207, headers={"Session": 123})

# helper to send json response
send_json(data={"ok": True})
```

### Testing locally

If you are testing the script locally you can pass an optional argument to read/write from a specified file.  
Defaults to `request.json` and `response.json`

```python
from abstra.hooks import get_request, send_response

# helper to get request
body, query, headers = get_request(local_file="request.json")

# helper to send response
send_response(body='DONE', local_file="response.json")
```

- the request local_file should be a json file with fields: `body (raw text)`, `headers (key-value map)` and `query (key-value map)`
- the response local_file should output to a json file with fields: `body (raw text)`, `headers (key-value map)` and `status_code (number)`

## Tables

```python
from abstra.tables import Tables

# instantiate a Tables object
tables = Tables()

# you can also authenticate with API key
tables = Tables(api_key="YOUR_API_KEY")

# get the statement
statement = tables.statement(id="STATEMENT_ID")

# and run it
result = statement.run(params={"a": 1, "b": 2})

# or run without instantiating the statement
result = tables.run_statement(id="STATEMENT_ID", params={"a": 1, "b": 2})
```

## Connectors

```python
from abstra.connectors import Connectors

# instantiate a Connectors object
connectors = Connectors()

# you can also authenticate with API key
connectors = Connectors(api_key="YOUR_API_KEY")

# get the statement
method = connectors.method(id="METHOD_ID")

# and run it
result = method.run(params={"a": 1, "b": 2})

# or run without instantiating the method
result = connectors.run_method(id="METHOD_ID", params={"a": 1, "b": 2})
```
