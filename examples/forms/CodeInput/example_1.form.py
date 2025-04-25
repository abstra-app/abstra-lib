"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import CodeInput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    CodeInput(label="Code Input", key="my-code_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
