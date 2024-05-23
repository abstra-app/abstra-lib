from pathlib import Path

from abstra.workflows import get_data, set_data

data_a = get_data("key_a")

if isinstance(data_a, str):
    data_d = f"{data_a}\nscript d set this"
    set_data("key_d", data_d)
    Path("script_d.log").write_text(data_d)
