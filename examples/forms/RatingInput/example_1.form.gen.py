"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import RatingInput, run

# Create a page with the widget
example_page = [
    RatingInput(label="Rating Input", key="my-rating_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
