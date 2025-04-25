"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import PhoneInput, run

# Create a page with the widget
example_page = [
    PhoneInput(label="Phone Input", key="my-phone_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
