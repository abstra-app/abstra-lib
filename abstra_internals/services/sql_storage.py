import json
import shutil
from pathlib import Path
from typing import Generic, List, Optional, Type, TypeVar

from abstra_json_sql.eval import eval_sql
from abstra_json_sql.persistence import FileSystemJsonTables
from abstra_json_sql.tables import Column, ColumnType, Table

from abstra_internals.interface.sdk.tables.utils import serialize
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.multiprocessing import MPContext
from abstra_internals.settings import Settings
from abstra_internals.utils.serializable import Serializable

T = TypeVar("T", bound=Serializable)


class SqlStorage(Generic[T]):
    def __init__(self, mp_context: MPContext, directory: str, model: Type[T]):
        self.lock = mp_context.RLock()
        self.directory = directory
        self.model = model
        self.table_name = "data"
        self._tables_instance: Optional[FileSystemJsonTables] = None

    @property
    def directory_path(self) -> Path:
        return Settings.root_path / self.directory

    @property
    def tables(self) -> FileSystemJsonTables:
        """Get or create a FileSystemJsonTables instance."""
        if self._tables_instance is None:
            self.directory_path.mkdir(parents=True, exist_ok=True)
            self._tables_instance = FileSystemJsonTables(workdir=self.directory_path)
        return self._tables_instance

    def _ensure_table_exists(self) -> None:
        """Ensure the table exists in the database."""
        try:
            # Try to get the table to see if it exists
            self.tables.get_table(self.table_name)
        except (FileNotFoundError, Exception):
            # If the table doesn't exist, create it
            # Always start with an id column
            columns = [Column(name="id", schema=ColumnType.string, is_primary_key=True)]

            if hasattr(self.model, "model_fields"):
                # Pydantic v2
                for field_name in self.model.model_fields.keys():
                    if field_name != "id":  # Skip if model already has id
                        columns.append(
                            Column(name=field_name, schema=ColumnType.string)
                        )

            table = Table(
                name=self.table_name,
                columns=columns,
                data=[],
            )
            self.tables.add_table(table)

    def _serialize_value(self, value) -> str:
        """Serialize a value to a string for SQL storage."""
        serialized = serialize(value)
        if serialized is None:
            return ""
        if isinstance(serialized, str):
            return serialized
        return json.dumps(serialized)

    def _escape_sql_string(self, value: str) -> str:
        """Escape single quotes in SQL string literals."""
        return value.replace("'", "''")

    def save(self, id: str, data: T) -> None:
        with self.lock:
            self._ensure_table_exists()

            # Convert the model to dict and serialize values
            data_dict = data.dump()

            # Add the id to the data dict if it's not already there
            if "id" not in data_dict:
                data_dict["id"] = id

            # Serialize values
            serialized_dict = {}
            for key, value in data_dict.items():
                serialized_dict[key] = self._serialize_value(value)

            # Check if record exists
            try:
                result = eval_sql(
                    code=f'SELECT "id" FROM {self.table_name} WHERE "id" = \'{self._escape_sql_string(id)}\'',
                    tables=self.tables,
                    ctx={},
                )
            except Exception as e:
                AbstraLogger.capture_exception(e)
                result = []

            if result and len(result) > 0:
                # Update existing record
                # Use double quotes for column names to handle SQL keywords
                set_parts = []
                for key, value in serialized_dict.items():
                    if key != "id":
                        escaped_value = self._escape_sql_string(value)
                        set_parts.append(f"\"{key}\" = '{escaped_value}'")

                if set_parts:
                    set_clause = ", ".join(set_parts)
                    try:
                        eval_sql(
                            code=f"UPDATE {self.table_name} SET {set_clause} WHERE \"id\" = '{self._escape_sql_string(id)}'",
                            tables=self.tables,
                            ctx={},
                        )
                    except Exception as e:
                        AbstraLogger.capture_exception(e)
                        raise
            else:
                # Insert new record
                # Use double quotes for column names to handle SQL keywords
                columns = ", ".join([f'"{key}"' for key in serialized_dict.keys()])
                values = ", ".join(
                    [
                        f"'{self._escape_sql_string(value)}'"
                        for value in serialized_dict.values()
                    ]
                )
                try:
                    sql_command = (
                        f"INSERT INTO {self.table_name} ({columns}) VALUES ({values})"
                    )
                    eval_sql(
                        code=sql_command,
                        tables=self.tables,
                        ctx={},
                    )
                except Exception as e:
                    AbstraLogger.capture_exception(e)
                    raise

    def load_all(self) -> List[T]:
        with self.lock:
            try:
                self._ensure_table_exists()

                result = eval_sql(
                    code=f"SELECT * FROM {self.table_name}",
                    tables=self.tables,
                    ctx={},
                )

                data_list = []
                if result is not None:
                    for row in result:
                        try:
                            # Deserialize JSON strings back to objects
                            deserialized_row = self._deserialize_row(row)
                            data_list.append(self.model(**deserialized_row))
                        except Exception as e:
                            AbstraLogger.capture_exception(e)
                            continue

                return data_list
            except Exception as e:
                AbstraLogger.capture_exception(e)
                return []

    def load(self, id: str) -> Optional[T]:
        with self.lock:
            return self._load(id)

    def delete(self, id: str) -> None:
        with self.lock:
            try:
                self._ensure_table_exists()
                eval_sql(
                    code=f"DELETE FROM {self.table_name} WHERE \"id\" = '{self._escape_sql_string(id)}'",
                    tables=self.tables,
                    ctx={},
                )
            except Exception as e:
                AbstraLogger.capture_exception(e)

    def clear(self) -> None:
        with self.lock:
            try:
                self._ensure_table_exists()
                eval_sql(
                    code=f"DELETE FROM {self.table_name}",
                    tables=self.tables,
                    ctx={},
                )
            except Exception as e:
                shutil.rmtree(self.directory_path, ignore_errors=True)
                self._tables_instance = None
                AbstraLogger.capture_exception(e)

    def _deserialize_row(self, row: dict) -> dict:
        """Deserialize row data, converting JSON strings back to objects."""
        deserialized = {}
        for key, value in row.items():
            if isinstance(value, str) and value.strip():
                # Try to parse as JSON
                try:
                    deserialized[key] = json.loads(value)
                except (json.JSONDecodeError, ValueError):
                    # If it's not valid JSON, keep as string
                    deserialized[key] = value
            elif value == "":
                # Empty strings might represent None
                deserialized[key] = None
            else:
                deserialized[key] = value
        return deserialized

    def _load(self, id: str) -> Optional[T]:
        try:
            self._ensure_table_exists()

            result = eval_sql(
                code=f"SELECT * FROM {self.table_name} WHERE \"id\" = '{self._escape_sql_string(id)}'",
                tables=self.tables,
                ctx={},
            )

            if result and len(result) > 0:
                deserialized_row = self._deserialize_row(result[0])
                return self.model(**deserialized_row)

            return None
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return None
