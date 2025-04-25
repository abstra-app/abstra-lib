"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import HtmlOutput, run

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
example_page = [
    HtmlOutput(my_html),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
