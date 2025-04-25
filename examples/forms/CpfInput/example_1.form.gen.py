"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import CpfInput, run

# Create a page with the widget
example_page = [
    CpfInput(label="Cpf Input", key="my-cpf_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
