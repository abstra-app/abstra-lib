"""
name: Automatic Back Navigation
description: BackButton automatically appears on step 2+ of multi-step forms, allowing users to navigate backwards while preserving their input
"""

from abstra.forms import DropdownInput, NumberInput, TextInput, run


def personal_info(state):
    return [
        TextInput("Enter your full name:", key="name"),
        NumberInput("Enter your age:", key="age"),
    ]


def preferences(state):
    return [
        DropdownInput(
            "Select your favorite color:",
            ["Red", "Blue", "Green", "Yellow"],
            key="color",
        ),
        TextInput("What's your hobby?", key="hobby"),
    ]


def confirmation(state):
    name = state.get("name", "Unknown")
    age = state.get("age", "Unknown")
    color = state.get("color", "Unknown")
    hobby = state.get("hobby", "Unknown")

    return [
        TextInput(
            f"Confirm your details:\nName: {name}\nAge: {age}\nFavorite Color: {color}\nHobby: {hobby}\n\nUse the Back button to make changes, or Next to submit:",
            key="confirmation",
        )
    ]


# Run multi-step form - BackButton appears automatically from step 2 onwards
result = run([personal_info, preferences, confirmation])

# Print the result
print(result)
