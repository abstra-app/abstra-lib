"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import LatexOutput, run

# Create a page with the widget
example_page = [
    LatexOutput(r"\(ax^2 + bx + c = 0\)"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
