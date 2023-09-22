import abstra.forms as af
import abstra.workflows as aw

"""
Abstra forms are the simplest way to build user interfaces for your workflows.
"""

name = af.read("Hello there! What is your name?")
af.display(f"Hello {name}!")


# You can save and get information from the workflow context
stage = aw.get_stage()
stage["name"] = name

ans = af.read_multiple_choice("Are you familiar with Abstra?", ["Yes", "No"])

if ans == "Yes":
    af.display("Great! Have fun!")
else:
    af.display_link(
        "https://docs.abstra.io/forms/overview", link_text="Check out the docs!"
    )
