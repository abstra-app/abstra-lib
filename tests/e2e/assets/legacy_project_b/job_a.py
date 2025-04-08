from abstra.compat import use_legacy_threads

use_legacy_threads("jobs")

from pathlib import Path  # noqa: E402

Path("job_a.log").write_text("job a ran successfully", encoding="utf-8")
