from typing import List, Sequence


class LinterFix:
    label: str

    def fix(self):
        raise NotImplementedError

    @property
    def name(self):
        return self.__class__.__name__

    def make_label(self):
        return self.label

    def to_dict(self):
        return dict(name=self.name, label=self.make_label())

    def __eq__(self, __value: object) -> bool:
        if not isinstance(__value, LinterFix):
            return False
        return self.name == __value.name


class LinterIssue:
    label: str
    fixes: List[LinterFix]

    def make_label(self):
        return self.label

    def to_dict(self):
        return dict(
            label=self.make_label(), fixes=[fix.to_dict() for fix in self.fixes]
        )


class LinterCheck:
    name: str
    label: str
    type: str
    issues: List[LinterIssue]

    def __init__(self, name: str, label: str, type: str, issues: List[LinterIssue]):
        self.name = name
        self.label = label
        self.type = type
        self.issues = issues

    def to_dict(self):
        return dict(
            name=self.name,
            label=self.label,
            type=self.type,
            issues=[issue.to_dict() for issue in self.issues],
        )


class LinterRule:
    label: str
    type: str

    def find_issues(self) -> Sequence[LinterIssue]:
        raise NotImplementedError

    @property
    def name(self):
        return self.__class__.__name__

    def check(self) -> LinterCheck:
        return LinterCheck(
            name=self.name,
            label=self.label,
            type=self.type,
            issues=list(self.find_issues()),
        )


rules = []
