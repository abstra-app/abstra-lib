from typing import List, Optional, Tuple, Union

from abstra_internals.entities.forms.form_state import Button, State
from abstra_internals.entities.forms.template import (
    GeneratorFunc,
    Template,
    TemplateFunc,
)
from abstra_internals.utils.code import has_none_return


class PageStep:
    def __init__(self, func: TemplateFunc):
        self.call = func
        self.computation_step = has_none_return(func)


class GeneratorPageStep:
    def __init__(self, func: GeneratorFunc):
        self.func = func
        self.generator = None
        self.computation_step = False

    def initialize_generator(self, state: State):
        if self.generator is None:
            self.generator = self.func(state)
        return self.generator

    def call(
        self, state: State
    ) -> Union[Template, Tuple[Template, Optional[List[Button]]]]:
        generator = self.initialize_generator(state)

        try:
            return next(generator)
        except StopIteration:
            return []


class EndPageStep(PageStep):
    def __init__(self, func: TemplateFunc):
        super().__init__(func)


Step = Union[PageStep, EndPageStep, GeneratorPageStep]
