import os, requests, urllib.request, pathlib

from .path_resolver import resolve_cwd
from .credentials import resolve_headers

CLOUD_API_ENDPOINT = (
    os.environ.get("CLOUD_API_ENDPOINT") or "https://cloud-api.abstra.cloud"
)


def upload(db_path: pathlib.Path):
    db_path = resolve_cwd(db_path)
    if db_path.suffix != ".sqlite" and db_path.suffix != ".db":
        print("Your file must be a sqlite database")
        return

    if not db_path.exists():
        print("File not found.")
        return

    headers = resolve_headers()
    if not headers:
        print("No API token found.")
        return

    user_confirmation = input("Are you sure ? [y/n]: ")
    if user_confirmation.lower() != "y" and user_confirmation.lower() != "yes":
        print("Aborting...")
        return

    with db_path.open("rb") as f:
        url = f"{CLOUD_API_ENDPOINT}/cli/tables/file"
        req = urllib.request.Request(
            url=url, method="PUT", headers=headers, data=f.read()
        )
        urllib.request.urlopen(req)

    print("Your database has been uploaded successfully !\n")


def download():
    headers = resolve_headers()
    if not headers:
        print("No API token found.")
        return

    endpoint = f"{CLOUD_API_ENDPOINT}/cli/tables/file"
    response = requests.get(endpoint, headers=headers)
    response.raise_for_status()

    with open("downloaded.sqlite", "wb") as file:
        file.write(response.content)

    return {"error": None}


def list_backups():
    headers = resolve_headers()
    if not headers:
        print("No API token found.")
        return

    endpoint = f"{CLOUD_API_ENDPOINT}/cli/tables/backups"
    response = requests.get(endpoint, headers=headers)
    response.raise_for_status()

    for bkp in response.json():
        print(f"{bkp['name']} - {bkp['date']} - {bkp['size']}")
