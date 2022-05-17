from abstra import Connectors

# instantiate a Connectors object
connectors = Connectors()

# you can also authenticate with API key
connectors = Connectors(api_key="YOUR_API_KEY")

# get the statement
method = connectors.method(id="123123123")

# and run it
result = method.run(params={"a": 1, "b": 2})

# or run without instantiating the method
result = connectors.run_method(id="123123123", params={"a": 1, "b": 2})
