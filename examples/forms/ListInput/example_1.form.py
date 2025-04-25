"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import ListInput, NumberInput, TextInput, run
from abstra_internals.entities.forms.widgets.widget_base import InputWidget

item_template = [
    TextInput("Item Name", key="item_name"),
    NumberInput("Item Quantity", key="item_quantity"),
]

# Create a page with the widget
example_page: List[InputWidget] = [
    ListInput(key="my-list", template=item_template, min=2)
]

# Run the form
result = run([example_page])

# Print the result
print(result)
