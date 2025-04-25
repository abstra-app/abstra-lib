"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import TimeInput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    TimeInput(label="Time Input", key="my-time_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
