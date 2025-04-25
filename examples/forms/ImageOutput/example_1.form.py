"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import ImageOutput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    ImageOutput("https://http.cat/status/200.jpg", subtitle="This is a cat"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
