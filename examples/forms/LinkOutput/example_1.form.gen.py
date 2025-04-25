"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import LinkOutput, run

# Create a page with the widget
example_page = [
    LinkOutput("https://abstra.io", link_text="Abstra Homepage"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
