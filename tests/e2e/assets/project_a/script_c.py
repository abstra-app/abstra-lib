from pathlib import Path

from abstra.workflows import get_data, set_data

data_a = get_data("key_a")

if isinstance(data_a, str):
    set_data("key_c", f"{data_a}\nscript c set this")

data_x = get_data("key_x")

if isinstance(data_x, str):
    Path("script_c.log").write_text(data_x)
