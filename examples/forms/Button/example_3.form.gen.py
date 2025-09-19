"""
name: Data Reload with Button
description: Use custom buttons to refresh page content with updated data from external sources or calculations
"""

import random

from abstra.forms import Button, TextOutput, run

number = random.randint(1, 100)


def data_reload_page(state):
    global number
    # Generate new random number when refresh button is pressed
    # This simulates fetching fresh data from an API or database
    if state.get("refresh"):
        # Button was pressed, generate new number
        number = random.randint(1, 100)

    return [
        TextOutput(f"Random Number: {number}"),
        TextOutput("Click the button below to generate a new random number:"),
    ], [Button("Generate New Number", key="refresh")]


# Run the form
result = run([data_reload_page])

# Print the result
print(result)
