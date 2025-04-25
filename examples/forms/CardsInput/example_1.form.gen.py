"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import CardsInput, run

# Create a page with the widget
example_page = [
    CardsInput(
        "Choose your favorite dessert",
        [
            {
                "title": "Crepe",
                "subtitle": "French",
                "image": "https://cdn.pixabay.com/photo/2017/01/30/13/56/pancakes-2020870_1280.jpg",
                "description": "A crêpe or crepe is a type of very thin pancake.",
            },
            {
                "title": "Pancake",
                "subtitle": "American",
                "image": "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg",
                "description": "A pancake is a flat cake, often thin and round.",
            },
            {
                "title": "Waffle",
                "subtitle": "Belgian",
                "image": "https://cdn.pixabay.com/photo/2020/05/19/20/54/waffles-5192625_1280.jpg",
                "description": "A waffle is a patterned dish made from leavened batter or dough.",
            },
        ],
    )
]

# Run the form
result = run([example_page])

# Print the result
print(result)
