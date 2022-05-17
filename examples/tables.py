from abstra import Tables

# instantiate a Tables object
tables = Tables()

# you can also authenticate with API key
tables = Tables(api_key="YOUR_API_KEY")

# get the statement
statement = tables.statement(id="123123123")

# and run it
result = statement.run(params={"a": 1, "b": 2})

# or run without instantiating the statement
result = tables.run_statement(id="123123123", params={"a": 1, "b": 2})
