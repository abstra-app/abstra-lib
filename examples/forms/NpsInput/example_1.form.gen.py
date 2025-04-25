"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import NpsInput, run

# Create a page with the widget
example_page = [
    NpsInput(label="Nps Input", key="my-nps_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
