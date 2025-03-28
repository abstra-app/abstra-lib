from abstra_internals.entities.forms.steps import (
    EndPageStep,
    TemplateFunction,
)


def end_page_step(func: TemplateFunction) -> EndPageStep:
    """
    Decorator that converts a function into an EndPageStep.

    Args:
        func (TemplateFunction): The function to be decorated.

    Returns:
        EndPageStep: A step object that represents the end page of a form.
    """
    return EndPageStep(func)
