from abstra.compat import use_legacy_threads

use_legacy_threads("scripts")

from pathlib import Path  # noqa: E402

from abstra.workflows import get_data  # noqa: E402

data_x = get_data("key_x")

if isinstance(data_x, str):
    Path("script_c.log").write_text(data_x, encoding="utf-8")
