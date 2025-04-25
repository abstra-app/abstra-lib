from abstra_internals.entities.forms.steps import (
    EndPageStep,
    TemplateFunction,
)


def end_page_step(func: "TemplateFunction") -> EndPageStep:
    """
    Add this decorator to a function to mark it as the end page of a form.
    It will remove buttons and end execution.

    Args:
        func (TemplateFunction): The function to be decorated.

    Returns:
        EndPageStep: A step object that represents the end page of a form.
    """
    return EndPageStep(func)
