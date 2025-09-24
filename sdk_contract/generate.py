import json
import os
import pathlib
import sys

# Add the local development directory to Python path FIRST to ensure local modules are used
ABSTRA_LIB_ROOT = pathlib.Path(__file__).parent.parent
sys.path.insert(0, str(ABSTRA_LIB_ROOT))

import abstra_internals.utils.sdk  # noqa: E402
from abstra_internals.utils.sdk import Logger, SDKContractParser  # noqa: E402

abstra_internals.utils.sdk.ABSTRA_LIB_ROOT = ABSTRA_LIB_ROOT

OUTPUT_FILE = "contract.gen.json"

DEPRECATED_PATHS = [
    "abstra/workflows.py",
    "abstra/cli.py",
    "abstra/logger.py",
    "abstra_internals/widgets/",
    "abstra_internals/interface/sdk/forms/deprecated",
    "abstra_internals/interface/sdk/forms/generated",
]


def main():
    parser = SDKContractParser("abstra")
    documentation = parser.run()

    if not os.path.exists("./generated"):
        os.makedirs("./generated")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        # Use ensure_ascii=False to make sure all characters are properly represented
        json.dump(documentation, f, indent=2, ensure_ascii=False)

    if parser.logger.has_errors():
        print(
            f"{Logger.RED}There were errors during the generation process. Please check the logs.{Logger.RESET}"
        )
        exit(1)


if __name__ == "__main__":
    main()
