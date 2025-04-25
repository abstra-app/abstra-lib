"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import TextareaInput, run

# Create a page with the widget
example_page = [
    TextareaInput(label="Textarea Input", key="my-textarea_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
