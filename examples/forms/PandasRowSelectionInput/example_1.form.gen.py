"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

import pandas as pd

from abstra.forms import PandasRowSelectionInput, run

data = [
    {"Country": "USA", "Population": "32,700,000"},
    {"Country": "China", "Population": "1,300,000,000"},
    {"Country": "Japan", "Population": "126,000,000"},
]
df = pd.DataFrame(data)

# Create a page with the widget
example_page = [
    PandasRowSelectionInput(df=df, key="my-selection", label="Select country")
]

# Run the form
result = run([example_page])

# Print the result
print(result)
