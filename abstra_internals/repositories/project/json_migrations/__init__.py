import json, os
from pathlib import Path
from datetime import datetime
from typing import List, Type

from ....utils.dot_abstra import CONFIG_FILE_BACKUPS

from .base_migration import Migration
from .migration_001 import Migration001
from .migration_002 import Migration002
from .migration_003 import Migration003
from .migration_004 import Migration004


MIGRATIONS: List[Type[Migration]] = [
    Migration001,
    Migration002,
    Migration003,
    Migration004,
]


def get_latest_version() -> str:
    return MIGRATIONS[-1].target_version()


def create_backup(data: dict, location: Path, filename: str):
    backup_path = os.path.join(location, CONFIG_FILE_BACKUPS, filename)
    Path(backup_path).parent.mkdir(parents=True, exist_ok=True)
    with open(backup_path, "w") as file:
        json.dump(data, file)
        return f"{CONFIG_FILE_BACKUPS}/{filename}"


def migrate(data: dict, path: Path):
    if "version" not in data:
        data["version"] = "0.1"

    next_migration = next(
        (m for m in MIGRATIONS if m.source_version() == data["version"]), None
    )

    if not next_migration:
        return data

    print("Your abstra.json is outdated, running migrations...")

    try:
        filename = f"abstra_{datetime.now().strftime('%Y%m%d%H%M%S')}.json.backup"
        backup_path = create_backup(data, path, filename)
        print(f"Backup file created: {backup_path}")
    except Exception as e:
        print(f"Failed to create backup file: {e}")
        raise

    while next_migration:
        current_version = data["version"]

        try:
            instance = next_migration(data)
            instance.apply()
            data = instance.data

            for warning in instance.warnings:
                print(warning)

        except Exception as e:
            print(f"An error occurred during migration from {current_version}: {e}")
            raise

        print(f"Upgrade to version {data['version']} complete.")

        next_migration = next_migration = next(
            (m for m in MIGRATIONS if m.source_version() == data["version"]), None
        )

    print("Your abstra.json is up to date ✅")

    return data
