from abstra_internals.entities.forms.steps import (
    EndPageStep,
    TemplateFunction,
)


def end_page_step(func: TemplateFunction) -> EndPageStep:
    return EndPageStep(func)
