from typing import Callable, Optional, Union

from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.template import (
    Template,
    TemplateFunction,
    TemplateGenerator,
    TemplateGeneratorFunction,
    TemplateWithButtons,
)

ComputationFunction = Callable[[State], None]


class Step:
    def run(self, state: State) -> Optional[TemplateWithButtons]:
        raise NotImplementedError()

    def normalize_result(
        self, result: Optional[Union[Template, TemplateWithButtons]]
    ) -> Optional[TemplateWithButtons]:
        if result is None:
            return None
        if isinstance(result, tuple):
            return result
        if isinstance(result, list):
            return result, None
        raise ValueError(f"Invalid result type: {type(result)}")


class PageStep(Step):
    def __init__(self, func: TemplateFunction):
        self.func = func

    def run(self, state: State) -> Optional[TemplateWithButtons]:
        return self.normalize_result(self.func(state))


class ComputationStep(Step):
    def __init__(self, func: ComputationFunction):
        self.func = func

    def run(self, state: State) -> Optional[TemplateWithButtons]:
        self.func(state)
        return None


class GeneratorStep(ComputationStep):
    generator: Optional[TemplateGenerator]

    def __init__(self, func: TemplateGeneratorFunction):
        self.func = func
        self.generator = None

    def get_generator(self, state: State):
        if self.generator is None:
            self.generator = self.func(state)
        return self.generator

    def run(self, state: State) -> Optional[TemplateWithButtons]:
        generator = self.get_generator(state)

        try:
            return self.normalize_result(next(generator))
        except StopIteration:
            self.generator = None
            return None


class EndPageStep(PageStep):
    def __init__(self, func: TemplateFunction):
        super().__init__(func)
