import abstra.hooks as ah

"""
Abstra hooks are the simplest way to build endpoints for your workflows.
"""

body, query, headers = ah.get_request()

print("Hook ran!")
print("Received request body:", body)

ah.send_json({"message": "Hello world!"})
