import re

from unidecode import unidecode


def normalize_path(path: str):
    paths = filter(_remove_empty_string_filter, path.split("/"))
    return "/".join(map(_normalize_string, paths))


def _remove_empty_string_filter(string: str):
    return string != ""


def _normalize_string(string: str):
    lowercase = string.lower().strip()
    unaccented = unidecode(lowercase)

    alphanumeric_pattern = r"[a-z0-9]+"

    matches = re.findall(alphanumeric_pattern, unaccented)

    return "-".join(matches)
