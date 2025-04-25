"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import PasswordInput, run

# Create a page with the widget
example_page = [
    PasswordInput(label="Password Input", key="my-password_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
