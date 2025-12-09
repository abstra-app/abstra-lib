"""
name: Financial Automation Onboarding
description: Demonstrates a simple onboarding form for financial automation, using Row to organize user input and feedback.
"""

from abstra.forms import (
    EmailInput,
    ImageOutput,
    RatingInput,
    Row,
    TextInput,
    TextOutput,
    run,
)

# Assuming 'abstra-logo.png' exists in the project's root or a public directory
# For a real scenario, you might get this from ac.get_public_url("abstra-logo.png")
# For this example, we'll use a placeholder URL if no local image is available,
# or assume the user will replace with a relevant image path.
logo_url = "https://www.abstra.io/favicon-32x32.png"  # Placeholder if local file isn't guaranteed


def financial_onboarding_form(state):
    # First row for contact information
    contact_info = Row(
        [
            TextInput("Your Name", key="user_name", placeholder="John Doe"),
            EmailInput(
                "Your Email", key="user_email", placeholder="john.doe@example.com"
            ),
        ]
    )

    # Second row for initial feedback/interest
    feedback_row = Row(
        [
            RatingInput(
                "How would you rate your interest in AI-powered financial automation?",
                key="ai_interest_rating",
            ),
            TextInput(
                "Any specific area you'd like to automate?",
                key="automation_area",
                placeholder="e.g., invoice processing, expense tracking",
            ),
        ]
    )

    return [
        ImageOutput(logo_url),
        TextOutput("# Welcome to Abstra Financial Automation!"),
        TextOutput("Please provide some details to help us tailor your experience."),
        contact_info,
        TextOutput(""),  # Add some spacing
        feedback_row,
        TextOutput(f"Current Form State: {repr(state)}"),
    ]


print(run([financial_onboarding_form]))
