"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import CheckboxInput, run

# Create a page with the widget
example_page = [
    CheckboxInput(label="Checkbox Input", key="my-checkbox_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
