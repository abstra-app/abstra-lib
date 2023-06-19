import os
import json

abstra_json = {"version": "0.2"}


def init_dir(path: str):
    abstra_json_path = os.path.join(path, "abstra.json")
    if not os.path.exists(path):
        os.makedirs(path)
    if not os.path.exists(abstra_json_path):
        with open(abstra_json_path, "w") as f:
            f.write(json.dumps(abstra_json))
