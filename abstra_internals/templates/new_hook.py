import abstra.hooks as ah
import abstra.workflows as aw

"""
Abstra hooks are the simplest way to build endpoints for your workflows.
"""

body, query, headers = ah.get_request()

# You can save and get information from the workflow context
stage = aw.get_stage()
stage["body"] = body

print(body)

ah.send_response(str(body))
