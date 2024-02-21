import re
from unidecode import unidecode


def to_kebab_case(s: str):
    lower = s.lower().strip()
    unaccented = unidecode(lower)
    alphanumeric_pattern = re.compile(r"[a-z0-9]+")
    matches = alphanumeric_pattern.findall(unaccented)
    return "-".join(matches) if matches else ""
