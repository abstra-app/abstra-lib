import mimetypes
from datetime import datetime
from os.path import sep
from pathlib import Path
from typing import List, Optional, Union

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
from abstra_internals.services.fs import SKIPPED_DIRNAMES, FileSystemService


class CodebaseController:
    def __init__(self, repos: Repositories):
        self.repos = repos

    def file_node(self, child_path: Path, base_path: Path) -> CommonFileNode:
        is_dir = child_path.is_dir()
        stats = child_path.stat()

        grand_children = []
        if is_dir:
            grand_children = [
                list(c.relative_to(base_path).parts)
                for c in child_path.iterdir()
                if c.name not in SKIPPED_DIRNAMES
            ]

        return CommonFileNode(
            path_parts=list(child_path.relative_to(base_path).parts),
            size=stats.st_size,
            last_modified=datetime.fromtimestamp(stats.st_mtime),
            type="directory" if is_dir else "file",
            children=grand_children,
        )

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
                file=self.file_node(child_path, path),
                stages=[
                    AbstraLibApiEditorFilesListResponseItemStagesItem(
                        id=stage.id,
                        type=stage.type_name,  # type: ignore
                    )
                    for stage in project.get_stages_by_file_path(child_path)
                ],
            )
            for child_path in FileSystemService.list_files(path, use_ignore=False)
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
            FileSystemService.rm_tree(path)
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

    def mkdir(
        self, path: Union[str, Path, List[str]]
    ) -> AbstraLibApiEditorFilesMkdirResponse:
        if isinstance(path, str):
            path = Path(path)
        elif isinstance(path, list):
            path = Path(*path)
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")

        path.mkdir(parents=True, exist_ok=True)
        return AbstraLibApiEditorFilesMkdirResponse(ok=True)

    def settings(self) -> AbstraLibApiEditorFilesSettingsResponse:
        return AbstraLibApiEditorFilesSettingsResponse(
            separator=sep,
        )
