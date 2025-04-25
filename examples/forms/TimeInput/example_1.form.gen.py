"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import TimeInput, run

# Create a page with the widget
example_page = [
    TimeInput(label="Time Input", key="my-time_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
