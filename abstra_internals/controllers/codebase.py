import mimetypes
from datetime import datetime
from os.path import sep
from pathlib import Path
from typing import List, Optional

import flask

from abstra_internals.contracts_generated import (
    AbstraLibApiEditorFilesDeleteResponse,
    AbstraLibApiEditorFilesEditResponse,
    AbstraLibApiEditorFilesListResponse,
    AbstraLibApiEditorFilesListResponseItem,
    AbstraLibApiEditorFilesListResponseItemStagesItem,
    AbstraLibApiEditorFilesMkdirResponse,
    AbstraLibApiEditorFilesRenameResponse,
    AbstraLibApiEditorFilesSettingsResponse,
    CommonFileNode,
)
from abstra_internals.repositories.factory import Repositories


def rm_tree(pth: Path):
    pth = Path(pth)
    if not pth.exists():
        return
    for child in pth.glob("*"):
        if child.is_file():
            child.unlink()
        else:
            rm_tree(child)
    pth.rmdir()


class CodebaseController:
    def __init__(self, repos: Repositories):
        self.repos = repos

    def list_files(self, path) -> AbstraLibApiEditorFilesListResponse:
        if path is None:
            path = Path.cwd()
        elif isinstance(path, str):
            path = Path(path)
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")

        project = self.repos.project.load(include_disabled_stages=True)

        return [
            AbstraLibApiEditorFilesListResponseItem(
                file=CommonFileNode(
                    path_parts=list(child_path.relative_to(path).parts),
                    size=child_path.stat().st_size,
                    last_modified=datetime.fromtimestamp(path.stat().st_mtime),
                    type="directory" if child_path.is_dir() else "file",
                    children=(
                        [list(c.relative_to(path).parts) for c in child_path.iterdir()]
                        if child_path.is_dir()
                        else []
                    ),
                ),
                stages=[
                    AbstraLibApiEditorFilesListResponseItemStagesItem(
                        id=stage.id,
                        type=stage.type_name,  # type: ignore
                    )
                    for stage in project.get_stages_by_file_path(child_path)
                ],
            )
            for child_path in path.glob("**/*")
        ]

    def create_file(self, path, content: Optional[bytes] = None) -> CommonFileNode:
        if isinstance(path, str):
            path = Path(path)
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")

        if content is not None:
            path.write_bytes(content)
        else:
            path.touch()
        return CommonFileNode(
            path_parts=list(path.parts),
            size=path.stat().st_size,
            last_modified=datetime.fromtimestamp(path.stat().st_mtime),
            type="directory" if path.is_dir() else "file",
        )

    def delete_file(
        self, path_parts: List[str]
    ) -> AbstraLibApiEditorFilesDeleteResponse:
        path = Path(*path_parts)
        if path.is_dir():
            rm_tree(path)
        else:
            path.unlink()
        return AbstraLibApiEditorFilesDeleteResponse(ok=True)

    def rename_file(self, path, new_name) -> AbstraLibApiEditorFilesRenameResponse:
        if isinstance(path, str):
            path = Path(path)
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")

        new_path = path.parent / new_name
        path.rename(new_path)
        return AbstraLibApiEditorFilesRenameResponse(ok=True)

    def edit_file(self, path, content: bytes) -> AbstraLibApiEditorFilesEditResponse:
        if isinstance(path, str):
            path = Path(path)
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")

        path.write_bytes(content)
        return AbstraLibApiEditorFilesEditResponse(ok=True)

    def get_file(self, path):
        if isinstance(path, str):
            path = Path(path).absolute()
        elif isinstance(path, Path):
            path = path.absolute()
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")
        mtype, _ = mimetypes.guess_type(path)
        return flask.send_file(path, mimetype=mtype)

    def mkdir(self, path) -> AbstraLibApiEditorFilesMkdirResponse:
        if isinstance(path, str):
            path = Path(path)
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")

        path.mkdir(parents=True, exist_ok=True)
        return AbstraLibApiEditorFilesMkdirResponse(ok=True)

    def settings(self) -> AbstraLibApiEditorFilesSettingsResponse:
        return AbstraLibApiEditorFilesSettingsResponse(
            separator=sep,
        )
