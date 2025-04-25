"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import ImageInput, run

# Create a page with the widget
example_page = [
    ImageInput(label="Image Input", key="my-image_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
