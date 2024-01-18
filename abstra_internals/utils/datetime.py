from datetime import datetime, timezone


def to_utc_iso_string(date: datetime) -> str:
    # datetime.isoformat does not work on python<=3.9 with Z at the end
    return date.astimezone(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.%fZ")


def from_utc_iso_string(isostring: str) -> datetime:
    return datetime.strptime(isostring, "%Y-%m-%dT%H:%M:%S.%fZ").replace(
        tzinfo=timezone.utc
    )
