import json, os
from pathlib import Path
from datetime import datetime
from typing import List, Type

from .base_migration import Migration
from .migration_001 import Migration001


MIGRATIONS: List[Type[Migration]] = [
    Migration001,
]


def get_latest_version() -> str:
    return MIGRATIONS[-1].target_version()


def create_backup(data: dict, location: Path, filename: str):
    backup_path = os.path.join(location, filename)
    with open(backup_path, "w") as file:
        json.dump(data, file)


def migrate(data: dict, path: Path):
    if "version" not in data:
        raise KeyError("Missing 'version' key in data")

    next_migration = next(
        (m for m in MIGRATIONS if m.source_version() == data["version"]), None
    )

    if not next_migration:
        return data

    print("Your abstra.json is outdated, running migrations...")

    try:
        filename = f"abstra_{datetime.now().strftime('%Y%m%d%H%M%S')}.json.backup"
        create_backup(data, path, filename)
        print(f"Backup file created: {filename}")
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
