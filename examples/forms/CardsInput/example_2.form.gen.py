"""
name: Searchable
description: You may also add a search bar to the cards input widget.
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
                "image": "https://assets.abstra.cloud/docs/images/widgets/pancakes-2020870_1280.jpg",
                "description": "A crêpe or crepe is a type of very thin pancake.",
            },
            {
                "title": "Pancake",
                "subtitle": "American",
                "image": "https://assets.abstra.cloud/docs/images/widgets/pancake-3529653_1280.jpg",
                "description": "A pancake is a flat cake, often thin and round.",
            },
            {
                "title": "Waffle",
                "subtitle": "Belgian",
                "image": "https://assets.abstra.cloud/docs/images/widgets/waffles-5192625_1280.jpg",
                "description": "A waffle is a patterned dish made from leavened batter or dough.",
            },
        ],
        multiple=True,
        searchable=True,
    )
]

# Run the form
result = run([example_page])

# Print the result
print(result)
