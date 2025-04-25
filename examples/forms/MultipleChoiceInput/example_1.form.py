"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import MultipleChoiceInput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    MultipleChoiceInput(
        label="Multiple Choice Input",
        key="my-multiple_choice_input",
        options=["Option A", "Option B", "Option C"],
    ),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
