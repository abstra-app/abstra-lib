"""
name: Automatic Next Button
description: NextButton is automatically added to forms for navigation. This example shows a multi-step form where NextButton handles progression automatically
"""

from abstra.forms import EmailInput, TextInput, run


def step_1(state):
    return [
        TextInput("Enter your first name:", key="first_name"),
        TextInput("Enter your last name:", key="last_name"),
    ]


def step_2(state):
    return [
        EmailInput("Enter your email:", key="email"),
        TextInput("Enter your phone number:", key="phone"),
    ]


def step_3(state):
    return [
        TextInput(
            f"Thank you {state.get('first_name', '')}! Any additional comments?",
            key="comments",
        )
    ]


# Run multi-step form - NextButton appears automatically on each step
result = run([step_1, step_2, step_3])

# Print the result
print(result)
