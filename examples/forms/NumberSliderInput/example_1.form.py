"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import NumberSliderInput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    NumberSliderInput(label="Number Slider Input", key="my-number_slider_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
