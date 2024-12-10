import abstra.forms as af
from abstra.tasks import send_task

# With Abstra Forms, it's easy to build user interfaces
name = af.read("👋 Hello there! What is your name?")

# You can send tasks to the next stages of your workflow
send_task("greeting", {"name": name})

# Different kinds of input and output widgets are available
af.display(f"🎉 Welcome, {name}!")

af.display_markdown("Check out our [docs](https://docs.abstra.io/concepts/forms/) 📚")
