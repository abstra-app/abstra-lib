from typing import List


class LinterFix:
    label: str
    description: str

    def fix(self):
        raise NotImplementedError

    @property
    def name(self):
        return self.__class__.__name__

    def to_dict(self):
        return dict(name=self.name, label=self.label, description=self.description)


class LinterRule:
    label: str
    description: str
    type: str
    fixes: List[LinterFix]

    def is_valid(self) -> bool:
        raise NotImplementedError

    @property
    def name(self):
        return self.__class__.__name__

    def make_description(self):
        return self.description

    def to_dict(self):
        return dict(
            name=self.name,
            label=self.label,
            description=self.make_description(),
            type=self.type,
            fixes=[fix.to_dict() for fix in self.fixes],
            valid=self.is_valid(),
        )


rules = []
