"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import VideoInput, run

# Create a page with the widget
example_page = [
    VideoInput(label="Video Input", key="my-video_input"),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
