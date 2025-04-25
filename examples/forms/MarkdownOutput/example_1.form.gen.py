"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import MarkdownOutput, run

text = """
## Markdown Output

* 1^th^ H~2~0

- [ ] Task

* ==Mark==

`code`

* [Link](https://www.abstracloud.com/)
"""

# Create a page with the widget
example_page = [MarkdownOutput(text)]

# Run the form
result = run([example_page])

# Print the result
print(result)
