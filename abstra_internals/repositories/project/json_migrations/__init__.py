import json
import os
from datetime import datetime
from pathlib import Path
from typing import List, Type

from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.project.json_migrations.base_migration import (
    Migration,
)
from abstra_internals.repositories.project.json_migrations.migration_001 import (
    Migration001,
)
from abstra_internals.repositories.project.json_migrations.migration_002 import (
    Migration002,
)
from abstra_internals.repositories.project.json_migrations.migration_003 import (
    Migration003,
)
from abstra_internals.repositories.project.json_migrations.migration_004 import (
    Migration004,
)
from abstra_internals.repositories.project.json_migrations.migration_005 import (
    Migration005,
)
from abstra_internals.repositories.project.json_migrations.migration_006 import (
    Migration006,
)
from abstra_internals.repositories.project.json_migrations.migration_007 import (
    Migration007,
)
from abstra_internals.repositories.project.json_migrations.migration_008 import (
    Migration008,
)
from abstra_internals.repositories.project.json_migrations.migration_009 import (
    Migration009,
)
from abstra_internals.repositories.project.json_migrations.migration_010 import (
    Migration010,
)
from abstra_internals.repositories.project.json_migrations.migration_011 import (
    Migration011,
)
from abstra_internals.utils.dot_abstra import CONFIG_FILE_BACKUPS

MIGRATIONS: List[Type[Migration]] = [
    Migration001,
    Migration002,
    Migration003,
    Migration004,
    Migration005,
    Migration006,
    Migration007,
    Migration008,
    Migration009,
    Migration010,
    Migration011,
]


def get_latest_version() -> str:
    return MIGRATIONS[-1].target_version()


def create_backup(data: dict, location: Path, filename: str):
    backup_path = os.path.join(location, CONFIG_FILE_BACKUPS, filename)
    Path(backup_path).parent.mkdir(parents=True, exist_ok=True)
    with open(backup_path, "w") as file:
        json.dump(data, file)
        return f"{CONFIG_FILE_BACKUPS}/{filename}"


def migrate(data: dict, path: Path, verbose=True):
    if "version" not in data:
        data["version"] = "0.1"

    next_migration = next(
        (m for m in MIGRATIONS if m.source_version() == data["version"]), None
    )

    if not next_migration:
        return data

    if verbose:
        print("Your abstra.json is outdated, running migrations...")

    try:
        filename = f"abstra_{datetime.now().strftime('%Y%m%d%H%M%S')}.json.backup"
        backup_path = create_backup(data, path, filename)
        if verbose:
            print(f"Backup file created: {backup_path}")
    except Exception as e:
        if verbose:
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
            AbstraLogger.capture_exception(e)
            if verbose:
                print(f"An error occurred during migration from {current_version}: {e}")
            raise

        if verbose:
            print(f"Upgrade to version {data['version']} complete.")

        next_migration = next_migration = next(
            (m for m in MIGRATIONS if m.source_version() == data["version"]), None
        )

    if verbose:
        print("Your abstra.json is up to date ✅")

    return data
