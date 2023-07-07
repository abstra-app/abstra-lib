import os, re
from colour import Color
import datetime

IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".svg"]
SPACE = " "
EMPTY = ""
DASH = "-"
DOT = "."

to_lower = lambda strs: list(map(lambda s: s.lower(), strs))
to_kebab = lambda strs: f"{DASH}".join(to_lower(strs))
reverse = lambda strs: strs[::-1]


def remove_prefix(text, prefix):
    if text.startswith(prefix):
        return text[len(prefix) :]
    return text


def remove_suffix(text, suffix):
    if text.endswith(suffix):
        return text[: -len(suffix)]
    return text


def digits(n):
    return len(str(n))


def format_digits(n, d):
    return " " * (d - digits(n)) + str(n)


def parse_env_var(var):
    match = re.search(r"^(\w+)=(.+)$", var.strip())
    if match:
        return match.group(1), match.group(2)
    return None, None


def parse_package(pkg):
    # https://peps.python.org/pep-0440/#version-specifiers

    match = re.search(
        r"^(([\w\.\-]+)\s*)(~=|===|>=|<=|==)(\s*([^\[\]\,\;\>\<\s]+))$", pkg
    )
    if match:
        name = match.group(2)
        version = match.group(5)
        return name, version

    if re.search(r"\>|\<|\,|\;|\[|\]", pkg):
        return None, None

    return pkg, None


def check_color(color: str) -> bool:
    try:
        color = color.replace(SPACE, EMPTY) if isinstance(color, str) else None
        Color(color)
        return True
    except ValueError:
        return False


def check_is_url(url: str) -> bool:
    return bool(re.match(r"^https?://", url))


def slugify_filename(image_path: str) -> str:
    filename = image_path.split("/")[-1]
    extension, *filenames = reverse(filename.split("."))
    return f"{DOT}".join(reverse([extension, to_kebab(filenames)]))


def check_is_image_path(image_path: str) -> bool:
    _, file_extension = os.path.splitext(image_path)
    return file_extension in IMAGE_EXTENSIONS


path_exists = lambda file_path: os.path.exists(file_path)

get_prod_form_url = (
    lambda subdomain_name, path: f"https://{subdomain_name}.abstra.run/{path}"
)

get_prod_dash_url = (
    lambda subdomain_name, path: f"https://{subdomain_name}.abstra.run/{path}"
)

get_prod_hook_url = (
    lambda subdomain_name, path: f"https://hooks.abstra.cloud/{subdomain_name}/{path}"
)


def flatten_list(list_of_lists):
    return [item for sublist in list_of_lists for item in sublist]


def parse_timestamp(timestamp):
    date = re.findall(r"\d+", timestamp)[:-2]
    return datetime.datetime(*[int(x) for x in date])


def sampling(data, limit, offset):
    return data[offset : offset + limit] if limit else data[offset:]


def flat_items_logs(items, path_or_id="path"):
    """Ungroup items from the response of the list_logs query."""
    logs = []
    for item in items:
        current_logs = item.get("logs")
        for log in current_logs:
            logs.append(log)

    logs.sort(key=lambda x: parse_timestamp(x["created_at"]), reverse=True)
    return logs
