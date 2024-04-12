import abstra.forms as af
import abstra.workflows as aw

# With Abstra Forms, it's easy to build user interfaces
name = af.read("👋 Hello there! What is your name?")

# You can store data in the current thread,
# so it will be available in the next stages
aw.set_data("name", name)

# Different kinds of input and output widgets are available
af.display(f"🎉 Welcome, {name}!")

af.display_markdown("Check out our [docs](https://docs.abstra.io/concepts/forms/) 📚")
