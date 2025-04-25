"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import DateInput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    DateInput(label="Date Input", key="my-date_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
