"""
name: Custom Decision Buttons
description: Use custom buttons to create approval workflows with conditional logic based on user decisions
"""

from abstra.forms import Button, TextInput, run


def approval_workflow(state):
    # Check which button was pressed
    if state.get("approve"):
        return [
            TextInput("Approved! Add your approval comments:", key="approval_comments")
        ]
    elif state.get("reject"):
        return [
            TextInput(
                "Rejected. Please provide rejection reason:", key="rejection_reason"
            )
        ]
    else:
        # Initial form with decision buttons
        return [TextInput("Enter request details:", key="request_details")], [
            Button("Approve", key="approve"),
            Button("Reject", key="reject"),
        ]


# Run the workflow
result = run([approval_workflow])

# Print the result
print(result)
