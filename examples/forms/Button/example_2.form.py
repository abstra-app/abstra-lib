"""
name: Multi-Step Form Navigation
description: Use custom buttons to create branching form paths where different buttons lead to different form sections
"""

from abstra.forms import Button, DropdownInput, TextInput, run


def multi_path_form(state):
    # Check which path the user chose
    if state.get("personal_info"):
        return [
            TextInput("Full Name:", key="name"),
            TextInput("Email:", key="email"),
            TextInput("Phone:", key="phone"),
        ]
    elif state.get("company_info"):
        return [
            TextInput("Company Name:", key="company"),
            TextInput("Job Title:", key="title"),
            DropdownInput(
                "Industry:", ["Tech", "Finance", "Healthcare", "Other"], key="industry"
            ),
        ]
    else:
        # Initial choice form
        return [
            TextInput(
                "Welcome! Please choose what information to provide:", key="welcome"
            )
        ], [
            Button("Personal Info", key="personal_info"),
            Button("Company Info", key="company_info"),
        ]


# Run the form
result = run([multi_path_form])

# Print the result
print(result)
