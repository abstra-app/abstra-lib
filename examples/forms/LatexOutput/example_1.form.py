"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import LatexOutput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    LatexOutput(r"\(ax^2 + bx + c = 0\)"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
