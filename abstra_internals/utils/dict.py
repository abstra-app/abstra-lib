from typing import Any, Dict


def filter_non_string_values(d: Dict[str, Any]) -> Dict[str, str]:
    return {k: v for k, v in d.items() if isinstance(v, str)}
