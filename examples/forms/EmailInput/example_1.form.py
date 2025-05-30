"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import EmailInput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    EmailInput(label="Email Input", key="my-email_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
