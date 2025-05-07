import json
from pathlib import Path

import requests

from abstra_internals.contracts_generated import CommonTablesSnapshot
from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import CLOUD_API_CLI_URL, REQUEST_TIMEOUT
from abstra_internals.interface.cli.tables.format import tables_snapshot_from_csv
from abstra_internals.interface.cli.tables_messages import (
    bad_json_error_message,
    dump_message,
    file_not_found_error_message,
    generic_error,
    restore_message,
    zod_error_message,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.settings import Settings
from abstra_internals.utils.file import ABSTRA_TABLES_FILE


def dump():
    headers = resolve_headers()
    url = f"{CLOUD_API_CLI_URL}/tables/dump"
    try:
        res = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT)
        res.raise_for_status()
        res_json = res.json()
        json_str = json.dumps(res_json, indent=2)
        file_path = Settings.root_path.joinpath(ABSTRA_TABLES_FILE)
        file_path.write_text(json_str, encoding="utf-8")
        num_tables = len(res_json["tables"])
        dump_message(num_tables, file_path)
    except Exception as e:
        AbstraLogger.capture_exception(e)
        generic_error()


def restore(dry_run: bool = False, file=ABSTRA_TABLES_FILE):
    headers = resolve_headers()
    url = f"{CLOUD_API_CLI_URL}/tables/restore"
    # /path/to/file
    if Path(file).is_absolute():
        file_path = Path(file).resolve()
    # ~/path/file
    elif file.startswith("~"):
        file_path = Path(file).expanduser().resolve()
    # path/file
    else:
        file_path = Settings.root_path.joinpath(file).resolve()
    try:
        if not file_path.exists():
            raise FileNotFoundError(f"File '{file}' not found.")
        if not file_path.is_file():
            raise FileNotFoundError(f"'{file}' is not a file.")
        if file_path.suffix == ".json":
            json_content = file_path.read_text(encoding="utf-8")
            tables_to_restore = json.loads(json_content)
            parsed_data = CommonTablesSnapshot.from_dict(tables_to_restore)
        elif file_path.suffix == ".csv":
            parsed_data = tables_snapshot_from_csv(file_path)
        else:
            raise ValueError(f"Unsupported file format: {file_path.suffix}")
        if dry_run:
            for table in parsed_data.tables:
                print(f"Table: {table.name}")
                for column in table.columns:
                    print(f"  Column: {column.name}")
                    print(f"    Type: {column.type}")
                    print(f"    Nullable: {column.nullable}")
                    print(f"    Default: {column.default}")
                    print(f"    Foreign Key: {column.foreign_key}")
        else:
            print(parsed_data.to_dict())
            res = requests.post(
                url,
                json=parsed_data.to_dict(),
                headers=headers,
                timeout=REQUEST_TIMEOUT,
            )
            if res.status_code == 400:
                print(res.text)
                zod_error_message(file_path)
                return
            res.raise_for_status()
            num_tables = len(parsed_data.tables)
            restore_message(num_tables)
    except FileNotFoundError:
        file_not_found_error_message(file_path)
    except json.JSONDecodeError:
        bad_json_error_message(file_path)
    except Exception as e:
        AbstraLogger.capture_exception(e)
        generic_error()
