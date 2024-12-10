from abstra.compat import use_legacy_threads

use_legacy_threads("scripts")

from pathlib import Path  # noqa: E402

Path("script_b.log").write_text("script b ran successfully")
