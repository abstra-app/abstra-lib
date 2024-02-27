import abstra.hooks as ah
import abstra.workflows as aw

# Use Abstra Hooks to create Python endpoints
body, query, headers = ah.get_request()

print("⚙️ Hook is running... received body:", body)

# You can store data in the current thread,
# so it will be available in the next stages
aw.set_data("hook_data", body)

# You can send a response back to the client after doing some processing
ah.send_json({"message": "A message from the hook!"})
