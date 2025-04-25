"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import VideoInput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    VideoInput(label="Video Input", key="my-video_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
