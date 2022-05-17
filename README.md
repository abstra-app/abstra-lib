# abstra lib

Python package for abstra products

## Examples

### Tables

```python

from abstra import Tables

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

### Connectors

```python
from abstra import Connectors

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
