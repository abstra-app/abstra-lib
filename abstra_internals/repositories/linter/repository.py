import threading
from abc import ABC, abstractmethod
from typing import List

from abstra_internals.repositories.linter.models import LinterCheck
from abstra_internals.repositories.linter.rules import rules


class LinterRepository(ABC):
    @abstractmethod
    def get_checks(self) -> List[LinterCheck]:
        pass

    @abstractmethod
    def update_checks(self):
        pass

    @abstractmethod
    def fix_linter(self, rule_name: str, fix_name: str) -> bool:
        pass

    @abstractmethod
    def fix_all_linters(self):
        pass

    @abstractmethod
    def get_blocking_checks(self) -> List[LinterCheck]:
        pass


def check_rule(rule, checks_list):
    check = rule.check()
    checks_list.append(check)


class LocalLinterRepository(LinterRepository):
    def __init__(self):
        self.checks: List[LinterCheck] = []

    def get_checks(self) -> List[LinterCheck]:
        return self.checks

    def update_checks(self):
        new_checks = []
        threads = []

        for rule in rules:
            thread = threading.Thread(target=check_rule, args=(rule, new_checks))
            thread.start()
            threads.append(thread)

        for thread in threads:
            thread.join()

        self.checks = new_checks

    def fix_linter(self, rule_name: str, fix_name: str):
        for check in self.checks:
            if check.name == rule_name:
                for issue in check.issues:
                    for fix in issue.fixes:
                        if fix.name == fix_name:
                            fix.fix()
                            return True
        return False

    def fix_all_linters(self):
        for check in self.checks:
            if check.type != "info":
                for issue in check.issues:
                    for fix in issue.fixes:
                        fix.fix()

    def get_blocking_checks(self) -> List[LinterCheck]:
        return [
            check
            for check in self.checks
            if check.type in ["error", "security", "bug"] and check.issues
        ]


class ProductionLinterRepository(LinterRepository):
    """
    This is a dummy repository. Linters are not available in production.
    """

    def get_checks(self) -> List[LinterCheck]:
        return []

    def update_checks(self):
        pass

    def fix_linter(self, rule_name: str, fix_name: str) -> bool:
        return False

    def fix_all_linters(self):
        pass

    def get_blocking_checks(self) -> List[LinterCheck]:
        return []
