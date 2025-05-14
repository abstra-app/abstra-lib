"""
name: Using the output of a FileInput
description: This example runs a form with two pages. The first page requests a file and a filename from the user. The second page saves the file in the persistent directory with the given filename and sends a task with the file path.
"""

import os

from abstra.common import get_persistent_dir
from abstra.forms import FileInput, TextInput, run
from abstra.tasks import send_task

# Create a page to input a file and choose its filename
example_page = [
    TextInput(label="Choose a filename", key="filename"),
    FileInput(label="File input", key="my-file"),
]


# Save the inputted file in the persistent dir and send its path
def save_inputed_file(state):
    # Get information from the previous page
    inputted_file = state.get("my-file")
    custom_filename = state.get("filename")

    # Compute the inputted file's extension
    file_name = inputted_file.name
    _, file_extension = os.path.splitext(file_name)

    # Save in persistent dir
    pdir_path = get_persistent_dir()
    file_path = f"{pdir_path}/{custom_filename}{file_extension}"
    with open(file_path, "wb") as f:
        file_object = inputted_file.file
        f.write(file_object.read())

    # Send task with the persistent file path
    send_task("file", {"file_path": file_path})


# Run the form
result = run([example_page, save_inputed_file])
