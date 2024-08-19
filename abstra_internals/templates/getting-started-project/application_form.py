import abstra.ai as ai
import abstra.forms as af
import abstra.workflows as aw

### 📌 Abstra Forms is the easiest way to create dynamic forms that allow users to interact with your Python script.

# 💡 Use read functions to receive input types, like multiple choice, text, boolean, and more (check the docs for the full list):
best_movie = af.read_multiple_choice(
    "What is the best movie ever made?",
    options=[
        "Die Hard",
        "Devil Wears Prada",
        "Weekend at Bernie's",
        "American Psycho",
        "Legally Blond",
        "Wall-E",
        "Threat Level: Midnight",
    ],
)

# 💡 Use Python to control logic and the user interactions:
if best_movie == "Threat Level: Midnight":
    af.display("*Michael Scarn theme song plays* Congratulations! You're a genius.")
elif best_movie == "Die Hard":
    af.display("Yep, that's the one. Passed the vibe check.")
else:
    af.display(
        "Nope. The correct answer was 'Die Hard'. Not off to a great start here."
    )

# 💡 Explore more input widgets like read_toggle to get a True/False response:
interview_opt_in = af.read_checkbox(
    "Do you agree to participate in a interview with Prison Mike?", required=False
)

# 💡 Or even read_camera function to prompt the user to submit a photo:
object_photo = af.read_camera(
    "Quick, take a photo of the object on your left. Do it now! 📸"
)

### 📌 Abstra AI is a powerful tool that allows you to prompt an AI model to extract data from images, generate text and more

# 💡 Use the prompt function to send your prompt, attach files, add instructions and specify the response format:
generated_joke = ai.prompt(
    [
        "Write the punchline that Michael Scott from Dunder Mifflin would say if he saw this object on someone's desk in their office. Make sure the joke includes a quirky, slightly deprecating derogatory observation.",
        object_photo,
    ],
    instructions="Only the punchline, and keep it office-friendly!",
)

rating = af.read_rating(f"Rate this joke's funniness: {generated_joke}", char="🤡")

### 📌 Abstra Workflows is a powerful tool that allows you to store and share data between different stages of your workflow

# 💡 Use the set_data function to store data that you want to use later on:
aw.set_data("best_movie", best_movie)
aw.set_data("interview_opt_in", interview_opt_in)
aw.set_data("rating", rating)
