"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from typing import List

from abstra.forms import HtmlOutput, Widget, run

my_html = """
<div>
    <h1>HTML Output</h1>
    <p>This is a simple HTML output example.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>
"""

# Create a page with the widget
example_page: List[Widget] = [
    HtmlOutput(my_html),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
