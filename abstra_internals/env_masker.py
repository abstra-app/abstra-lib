import os
import re


class EnvMasker:
    patter: re.Pattern

    def __init__(self, min_value_size=3):
        env_values = set(
            filter(lambda x: len(x) >= min_value_size, os.environ.values())
        )
        replacements = [re.escape(v) for v in env_values]
        replacements.sort(key=len, reverse=True)
        self.pattern = re.compile("|".join(replacements), re.IGNORECASE | re.MULTILINE)

    def mask(self, text: str):
        return self.pattern.sub("<MASKED>", text)


GLOBAL_MASKER = EnvMasker(min_value_size=10)
