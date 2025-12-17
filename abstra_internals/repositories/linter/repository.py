import threading
from abc import ABC, abstractmethod
from typing import List

from abstra_internals.repositories.linter.models import LinterCheck
from abstra_internals.repositories.linter.rules import rules


class LinterRepository(ABC):
    @abstractmethod
    def find_issues_in_codebase(self) -> List[LinterCheck]:
        pass

    @abstractmethod
    def update_checks(self) -> List[LinterCheck]:
        pass

    @abstractmethod
    def fix_issue_in_codebase(self, rule_name: str, fix_name: str) -> bool:
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

    def find_issues_in_codebase(self) -> List[LinterCheck]:
        """
        Retrieve all linter checks that have been performed on the project.

        This method returns the cached list of all linter checks from the most recent
        analysis run. Each check represents a specific rule that was evaluated against
        the project code, including any issues found and available fixes.

        Returns:
            List[LinterCheck]: List of linter check objects, each containing:
                - name: Unique identifier for the linter rule
                - type: Severity level ('info', 'warning', 'error', 'security', 'bug')
                - description: Human-readable description of what the rule checks
                - issues: List of specific issues found by this rule
                - fixes: Available automatic fixes for the issues
            ```

        Note:
            - Returns cached results from the last update_checks() call
            - Empty list if update_checks() has never been called
            - Issues include file location and line number information
            - Fixes can be applied automatically using fix_linter() method
            - Check types determine severity and whether they block deployment

        Copywritings:
            Retrieve all linter checks
            Retrieving all linter checks...
        """
        if len(self.checks) == 0:
            self.update_checks()
        return self.checks

    def update_checks(self):
        new_checks = []
        threads = []

        for rule in rules:
            thread = threading.Thread(
                target=check_rule,
                args=(rule, new_checks),
                name=f"LinterCheck[{rule.name}]",
            )
            thread.start()
            threads.append(thread)

        for thread in threads:
            thread.join()

        self.checks = new_checks

        return self.checks

    def fix_issue_in_codebase(self, rule_name: str, fix_name: str):
        """
        Apply a specific automatic fix for a linter issue.

        This method searches for a specific linter rule and fix combination,
        then applies the fix automatically. It's used to resolve individual
        linter issues without affecting other parts of the code.

        Args:
            rule_name (str): Name of the linter rule that found the issue.
                Must match exactly with the rule name from get_checks().
            fix_name (str): Name of the specific fix to apply.
                Must match exactly with a fix name available for the rule's issues.

        Returns:
            bool: True if the fix was found and applied successfully, False otherwise.

        Example:
            ```python
            linter_repo = LocalLinterRepository()
            linter_repo.update_checks()

            checks = linter_repo.get_checks()

            # Find issues that can be fixed
            for check in checks:
                if check.issues:
                    print(f"Rule: {check.name}")
                    for issue in check.issues:
                        for fix in issue.fixes:
                            print(f"Available fix: {fix.name}")

                            # Apply a specific fix
                            success = linter_repo.fix_linter(check.name, fix.name)
                            if success:
                                print(f"✓ Applied fix: {fix.name}")
                            else:
                                print(f"✗ Failed to apply fix: {fix.name}")

            # Example: Fix a specific formatting issue
            success = linter_repo.fix_linter("code_formatting", "add_missing_imports")
            if success:
                print("Import formatting fixed!")

            # Example: Fix security vulnerability
            success = linter_repo.fix_linter("security_check", "sanitize_input")
            if success:
                print("Security issue resolved!")
            else:
                print("Fix not found or failed to apply")

            # Re-run checks to see if issues were resolved
            linter_repo.update_checks()
            updated_checks = linter_repo.get_checks()
            ```

        Note:
            - Rule and fix names are case-sensitive and must match exactly
            - Returns False if rule_name or fix_name is not found
            - Applies the fix immediately to the project files
            - Some fixes may modify multiple files or lines of code
            - Re-run update_checks() after fixing to see updated results
            - Use get_checks() first to see available rules and fixes

        Copywritings:
            Apply a specific automatic fix for a linter issue
            Applying a specific automatic fix for a linter issue...
        """
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

    def find_issues_in_codebase(self) -> List[LinterCheck]:
        raise NotImplementedError("Linters are not available in production.")

    def update_checks(self) -> List[LinterCheck]:
        raise NotImplementedError("Linters are not available in production.")

    def fix_issue_in_codebase(self, rule_name: str, fix_name: str) -> bool:
        raise NotImplementedError("Linters are not available in production.")

    def fix_all_linters(self):
        raise NotImplementedError("Linters are not available in production.")

    def get_blocking_checks(self) -> List[LinterCheck]:
        raise NotImplementedError("Linters are not available in production.")
