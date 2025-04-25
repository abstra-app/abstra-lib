"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import CameraInput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    CameraInput(label="Camera Input", key="my-camera_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
