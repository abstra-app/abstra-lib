import abstra.workflows as aw
from abstra.messages import send_email

### Abstra Workflows is the easiest way to store and manage data across different parts of your workflow

# Similar to the set_data function, you can use the abstra.workflows's get_data function to retrieve stored data:
best_movie = aw.get_data("best_movie")
interview_opt_in = aw.get_data("interview_opt_in")
rating = aw.get_data("rating")

reasons = []

if best_movie != "Die Hard" and best_movie != "Threat Level: Midnight":
    reasons.append("Applicant does not have good cinematic taste.")

if not interview_opt_in:
    reasons.append(
        "Applicant refused to engage in a mandatory but voluntary interview with 'Prison Mike'."
    )

if rating != 5:
    reasons.append(
        "Applicant didn't laugh at Michael's joke, making Michael question his sense of humor."
    )

print(reasons)
### Abstra Messages is a built-in notification module that makes automating your processes much easier.

# Use send_email to send emails. All emails in development mode are sent to the editor's email (that's you!).
email = "name@email.com"  # this is a placeholder

if not reasons:
    send_email(
        email,
        title="Welcome to Dunder Mifflin!",
        message="Welcome to the team! You can now join as Secretary of the Assistant to the Regional Manager. \n\n See you Monday, \n\n Michael Scott - World's Best Boss.",
    )
else:
    reasons_text = "\n".join(reasons)
    print(reasons_text)
    send_email(
        email,
        title="Nope, Sorry!",
        message=f"Your application to work at Dunder Mifflin has been rejected. Here's why:\n {reasons_text} \n\n Sincerely Not Sorry, \n\n Michael Scott - World's Best Boss.",
    )

# Store the application response for future use:
if not reasons:
    aw.set_data("approved", True)
else:
    aw.set_data("approved", False)
    aw.set_data("reasons", reasons)
