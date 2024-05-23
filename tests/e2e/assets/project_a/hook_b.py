from pathlib import Path

from abstra.workflows import get_data, set_data

set_data("key_b", "hook b set this")

data_x = get_data("key_x")

if isinstance(data_x, str):
    Path("hook_b.log").write_text(data_x)
