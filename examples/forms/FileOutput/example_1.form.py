"""
name: Basic Usage
description: This example runs a form with a single page containing the widget for selecting .xlsx files
"""

from typing import List

from abstra.forms import FileOutput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    FileOutput(
        "https://http.cat/status/200.jpg",
        download_text="Click here to download the image",
    )
]

# Run the form
result = run([example_page])

# Print the result
print(result)
