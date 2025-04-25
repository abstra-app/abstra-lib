"""
name: With Text
description: LatexOutput can be used to display LaTeX math equations and text.
"""

from typing import List

from abstra.forms import LatexOutput, Widget, run

# Create a page with the widget
example_page: List[Widget] = [
    LatexOutput(
        r"""When \(a \\ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$"""
    ),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
