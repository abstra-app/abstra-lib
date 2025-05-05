from abstra.forms import MarkdownOutput, TextInput, TextOutput, run
from abstra.tasks import send_task

# A page is a list of widgets
personal_details = [
    TextInput("👋 Hello there! What is your name?", key="name"),
]


# A function returning a list of widgets is a reactive page
def greeting_page(state):
    name = state["name"]
    return [
        TextOutput(f"🎉 Welcome, {name}!"),
        MarkdownOutput(
            "Check out our [docs](https://abstra.io/docs/concepts/forms/) 📚"
        ),
    ]


# Run the form with the defined pages
state = run([personal_details, greeting_page])

# You can send tasks to the next stages of your workflow
send_task("greeting", {"name": state["name"]})
