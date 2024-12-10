import abstra.hooks as ah
from abstra.tasks import send_task

# Use Abstra Hooks to create Python endpoints
body, query, headers = ah.get_request()

print("⚙️ Hook is running... received body:", body)

# Also send tasks to the next stages of your workflow
send_task("received-request", {"body": body})

# You can send a response back to the client after doing some processing
ah.send_json({"message": "A message from the hook!"})
