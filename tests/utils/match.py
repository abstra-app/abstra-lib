import typing


def any_of(cls: typing.Type):
    class AnyOf:
        def __eq__(self, other):
            return isinstance(other, cls)

        def __ne__(self, other):
            return not isinstance(other, cls)

        def __repr__(self) -> str:
            return f"AnyOf({cls.__name__})"

    return AnyOf()
