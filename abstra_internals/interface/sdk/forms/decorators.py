from abstra_internals.entities.forms.steps import (
    EndPageStep,
    TemplateFunc,
)


def end_page_step(func: TemplateFunc) -> EndPageStep:
    return EndPageStep(func)
