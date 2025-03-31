import csv
from io import StringIO
from pathlib import Path
from typing import Tuple
from uuid import uuid4

from abstra_internals.contracts_generated import CommonTablesSnapshot


def tables_snapshot_from_csv(csv_path: Path) -> CommonTablesSnapshot:
    """
    Parses CSV content and returns a CommonTablesSnapshot object.
    Automatically detects the delimiter.
    """
    # Read the CSV file and detect the delimiter
    with csv_path.open(encoding="utf-8") as csv_file:
        sample = csv_file.read(1024)  # Read a sample of the file for Sniffer
        csv_file.seek(0)  # Reset file pointer to the beginning
        dialect = csv.Sniffer().sniff(sample)
        reader = csv.DictReader(csv_file, dialect=dialect)
        rows = list(reader)
        headers = reader.fieldnames

        if not headers:
            raise ValueError("The CSV file does not contain headers.")

    # Create a CommonTablesSnapshot object
    restore_request = CommonTablesSnapshot.from_dict(
        dict(
            tables=[
                dict(
                    id=str(uuid4()),
                    name=csv_path.stem,
                    data=rows,
                    columns=[
                        dict(
                            id=str(uuid4()),
                            primaryKey=False,
                            name=header,
                            type="text",
                            unique=False,
                            nullable=False,
                            default=None,
                            foreignKey=None,
                        )
                        for header in headers
                    ],
                )
            ]
        )
    )

    return restore_request


def tables_snapshot_to_csv(snapshot: CommonTablesSnapshot) -> Tuple[str, str]:
    """
    Converts a CommonTablesSnapshot object to a CSV string.
    """
    # Extract the table name and data
    table_name = snapshot.tables[0].name
    data = snapshot.tables[0].data

    # Extract the headers from the first row
    headers = data[0].keys()

    # Create a CSV string using the built-in csv module
    output = StringIO()
    writer = csv.DictWriter(output, fieldnames=headers)
    writer.writeheader()
    writer.writerows(data)

    csv_content = output.getvalue()

    return table_name, csv_content
