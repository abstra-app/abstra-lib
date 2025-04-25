"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import ChecklistInput, run

# Create a page with the widget
example_page = [
    ChecklistInput(
        label="Checklist Input",
        key="my-checklist_input",
        options=["Option A", "Option B", "Option C"],
    ),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
