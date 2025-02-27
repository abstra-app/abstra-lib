class InvalidRunInputError(Exception):
    def __init__(self, input_type: str):
        super().__init__(
            f"Form run input must be: a list of widgets, a computation step or a template function. Got: {input_type}"
        )
