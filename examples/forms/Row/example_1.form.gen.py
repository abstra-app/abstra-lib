import abstra.forms as af

# Create a row with two text inputs side-by-side
af.display(
    af.Row(
        [
            af.TextInput(label="First Name", key="first_name"),
            af.TextInput(label="Last Name", key="last_name"),
        ]
    )
)
