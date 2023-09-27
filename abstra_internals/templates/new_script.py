import abstra.workflows as aw

"""
Abstra scripts are the simplest way to run code in your workflows.
"""


def sum(a, b):
    return a, b


# You can save and get information from the workflow context
stage = aw.get_stage()

stage["result"] = sum(2, 3)

print(f"Script ran!")
