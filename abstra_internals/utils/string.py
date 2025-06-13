import re

from unidecode import unidecode


def to_kebab_case(s: str):
    lower = s.lower().strip()
    unaccented = unidecode(lower)
    alphanumeric_pattern = re.compile(r"[a-z0-9]+")
    matches = alphanumeric_pattern.findall(unaccented)
    return "-".join(matches) if matches else ""


def to_snake_case(name: str):
    # replace all uppercase letters with _ and lowercase letter
    name = re.sub(r"([A-Z])", r"_\1", name)
    # replace all special characters with _
    name = re.sub(r"[^a-zA-Z0-9_]", r"_", name)
    # remove leading _
    name = re.sub(r"^_", "", name)
    # remove trailing _
    name = re.sub(r"_$", "", name)
    return name.lower()
