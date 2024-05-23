from pathlib import Path

from abstra.workflows import set_data

set_data("key_a", "job a set this")
set_data("key_x", "job a set this")

Path("job_a.log").write_text("job ran successfully")
