import io
import pathlib
import shutil
from typing import TYPE_CHECKING, Union

import requests

if TYPE_CHECKING:
    from PIL.Image import Image

from abstra_internals.constants import get_uploads_dir
from abstra_internals.controllers.execution_store import ExecutionStore
from abstra_internals.utils.file import (
    get_random_filepath,
    get_tmp_upload_dir,
)
from abstra_internals.widgets.apis import upload_file

FILE_TYPES = {
    "txt": {
        "mime": "text/plain",
        "extensions": ["txt"],
    },
    "md": {
        "mime": "text/markdown",
        "extensions": ["md"],
    },
    "csv": {
        "mime": "text/csv",
        "extensions": ["csv"],
    },
    "html": {
        "mime": "text/html",
        "extensions": ["html"],
    },
    "css": {
        "mime": "text/css",
        "extensions": ["css"],
    },
    "py": {
        "mime": "text/x-python-script",
        "extensions": ["py"],
    },
    "png": {
        "mime": "image/png",
        "extensions": ["png"],
    },
    "jpg": {
        "mime": "image/jpeg",
        "extensions": ["jpg", "jpeg"],
    },
    "jpeg": {
        "mime": "image/jpeg",
        "extensions": ["jpg", "jpeg"],
    },
    "mp3": {
        "mime": "audio/mp3",
        "extensions": ["mp3"],
    },
    "wav": {
        "mime": "audio/wav",
        "extensions": ["wav"],
    },
    "flac": {
        "mime": "audio/flac",
        "extensions": ["flac"],
    },
    "aac": {
        "mime": "audio/aac",
        "extensions": ["aac"],
    },
    "ogg": {
        "mime": "audio/ogg",
        "extensions": ["ogg"],
    },
    "wma": {
        "mime": "audio/x-ms-wma",
        "extensions": ["wma"],
    },
    "avi": {
        "mime": "video/avi",
        "extensions": ["avi"],
    },
    "mp4": {
        "mime": "video/mp4",
        "extensions": ["mp4"],
    },
    "mkv": {
        "mime": "video/x-matroska",
        "extensions": ["mkv"],
    },
    "mov": {
        "mime": "video/quicktime",
        "extensions": ["mov"],
    },
    "webm": {
        "mime": "video/webm",
        "extensions": ["webm"],
    },
    "flv": {
        "mime": "video/x-flv",
        "extensions": ["flv"],
    },
    "wmv": {
        "mime": "video/x-ms-wmv",
        "extensions": ["wmv"],
    },
    "m4v": {
        "mime": "video/x-m4v",
        "extensions": ["m4v"],
    },
    "zip": {
        "mime": "application/zip",
        "extensions": ["zip"],
    },
    "rar": {
        "mime": "application/vnd.rar",
        "extensions": ["rar"],
    },
    "7z": {
        "mime": "application/x-7z-compressed",
        "extensions": ["7z"],
    },
    "tar": {
        "mime": "application/x-tar",
        "extensions": ["tar"],
    },
    "gzip": {
        "mime": "application/gzip",
        "extensions": ["gzip"],
    },
    "js": {
        "mime": "application/javascript",
        "extensions": ["js"],
    },
    "ts": {
        "mime": "application/typescript",
        "extensions": ["ts"],
    },
    "json": {
        "mime": "application/json",
        "extensions": ["json"],
    },
    "xml": {
        "mime": "application/xml",
        "extensions": ["xml"],
    },
    "yaml": {
        "mime": "application/x-yaml",
        "extensions": ["yaml"],
    },
    "toml": {
        "mime": "application/toml",
        "extensions": ["toml"],
    },
    "pdf": {
        "mime": "application/pdf",
        "extensions": ["pdf"],
    },
    "xls": {
        "mime": "application/vnd.ms-excel",
        "extensions": ["xls"],
    },
    "doc": {
        "mime": "application/msword",
        "extensions": ["doc"],
    },
    "ppt": {
        "mime": "application/vnd.ms-powerpoint",
        "extensions": ["ppt"],
    },
    "docx": {
        "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "extensions": ["docx"],
    },
    "pptx": {
        "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "extensions": ["pptx"],
    },
    "image": {
        "mime": "image/*",
        "extensions": ["png", "jpg", "jpeg"],
    },
    "video": {
        "mime": "video/*",
        "extensions": ["avi", "mp4", "mkv", "mov", "webm", "flv", "wmv", "m4v"],
    },
    "audio": {
        "mime": "audio/*",
        "extensions": ["mp3", "wav", "flac", "aac", "ogg", "wma"],
    },
    "text": {
        "mime": "text/*",
        "extensions": ["txt", "md", "csv", "html", "css", "py"],
    },
    "application": {
        "mime": "application/*",
        "extensions": [
            "zip",
            "rar",
            "7z",
            "tar",
            "gzip",
            "js",
            "ts",
            "json",
            "xml",
            "yaml",
            "toml",
            "pdf",
            "xls",
            "doc",
            "ppt",
            "docx",
            "pptx",
        ],
    },
    "unknown": {
        "mime": "*",
        "extensions": [
            "txt",
            "md",
            "csv",
            "html",
            "css",
            "py",
            "png",
            "jpg",
            "jpeg",
            "mp3",
            "wav",
            "flac",
            "aac",
            "ogg",
            "wma",
            "avi",
            "mp4",
            "mkv",
            "mov",
            "webm",
            "flv",
            "wmv",
            "m4v",
            "zip",
            "rar",
            "7z",
            "tar",
            "gzip",
            "js",
            "ts",
            "json",
            "xml",
            "yaml",
            "toml",
            "pdf",
            "xls",
            "doc",
            "ppt",
            "docx",
            "pptx",
            "image",
            "video",
            "audio",
            "text",
            "application",
            "unknown",
            "zip",
            "rar",
            "7z",
            "tar",
            "gzip",
            "js",
            "ts",
            "json",
            "xml",
            "yaml",
            "toml",
            "pdf",
            "xls",
            "doc",
            "ppt",
            "docx",
            "pptx",
        ],
    },
}


def convert_file(file: Union[str, io.IOBase, pathlib.Path, "Image"]) -> str:
    if not file:
        return ""

    if isinstance(file, (io.IOBase, pathlib.Path)):
        return upload_file(file)

    if isinstance(file, str):
        # URL or base64 encoded string
        if file.startswith("http") or file.startswith("data:"):
            return file

        # path to file
        return upload_file(open(file, "rb"))

    from PIL.Image import Image

    if isinstance(file, Image):
        _, file_path = get_random_filepath()
        file.save(str(file_path))
        return upload_file(open(file_path, "rb"))

    # FileResponse. TODO: check with isinstance without circular import
    if hasattr(file, "file"):
        return upload_file(file.file)

    raise ValueError(f"Cannot convert {type(file)}")


def download_to_path(url: str) -> pathlib.Path:
    execution_id = ExecutionStore.get_by_thread().execution.id
    save_dir = get_uploads_dir() / execution_id
    save_dir.mkdir(parents=True, exist_ok=True)
    save_path = save_dir / url.split("/")[-1]

    if url.startswith("http://") or url.startswith("https://"):
        with save_path.open("wb") as f, requests.get(url, stream=True) as r:
            r.raise_for_status()
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)

        return save_path

    elif url.startswith("/_files/"):
        tmp_name = url[len("/_files/") :]
        path = get_tmp_upload_dir() / tmp_name
        shutil.copy(path, save_path)

        return save_path

    raise ValueError(f"Cannot download {url}")


def extension_to_mime(extension: str) -> str:
    extension_without_dot = extension.replace(".", "")
    if extension_without_dot in FILE_TYPES:
        return FILE_TYPES[extension_without_dot]["mime"]
    return FILE_TYPES["unknown"]["mime"]
