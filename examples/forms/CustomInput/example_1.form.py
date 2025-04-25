"""
name: Basic Usage
description: This example runs a CustomInput that gets the current date from the user's browser
"""

from typing import List

from abstra.forms import CustomInput, Widget, run

html = """
<button id='date-btn'>Get current date</button>
"""

js = """
document.getElementById('date-btn').addEventListener('click',function() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        changeEvent(day + '/' + month + '/' + year);
    });
"""

css = """
body {
        margin: 0;
        padding: 0;
    }

    #date-btn {
        cursor: pointer;
        background-color: #343b46;
        border: none;
        border-radius: 4px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    #date-btn:hover {
        background-color: #3e4756;
    }
"""


# Create a page with the widget
example_page: List[Widget] = [
    CustomInput(
        html_body=html,
        js=js,
        css=css,
        key="my-custom-input",
    ),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
