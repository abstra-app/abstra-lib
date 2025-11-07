import mimetypes
from datetime import datetime
from os.path import sep
from pathlib import Path
from typing import List, Optional, Union

import flask

from abstra_internals.contracts_generated import (
    AbstraLibApiEditorFilesDeleteResponse,
    AbstraLibApiEditorFilesListResponse,
    AbstraLibApiEditorFilesListResponseItem,
    AbstraLibApiEditorFilesListResponseItemStagesItem,
    AbstraLibApiEditorFilesMkdirResponse,
    AbstraLibApiEditorFilesRenameResponse,
    AbstraLibApiEditorFilesSafeEditRequest,
    AbstraLibApiEditorFilesSafeEditResponse,
    AbstraLibApiEditorFilesSettingsResponse,
    CommonFileNode,
)
from abstra_internals.repositories.factory import Repositories
from abstra_internals.services.file_watcher import crdt_managers
from abstra_internals.services.fs import FileSystemService
from abstra_internals.utils.crdt import CRDTManager


class CodebaseController:
    def __init__(self, repos: Repositories):
        self.repos = repos

    def file_node(self, path: Path) -> CommonFileNode:
        is_dir = path.is_dir()
        stats = path.stat()

        return CommonFileNode(
            path_parts=list(path.parts),
            size=stats.st_size,
            last_modified=datetime.fromtimestamp(stats.st_mtime),
            type="directory" if is_dir else "file",
        )

    def list_files(self, path) -> AbstraLibApiEditorFilesListResponse:
        if path is None:
            path = Path()
        elif isinstance(path, str):
            path = Path(path)
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")

        project = self.repos.project.load(include_disabled_stages=True)

        return [
            AbstraLibApiEditorFilesListResponseItem(
                file=self.file_node(child_path),
                stages=[
                    AbstraLibApiEditorFilesListResponseItemStagesItem(
                        id=stage.id,
                        type=stage.type_name,
                    )
                    for stage in project.get_stages_by_file_path(child_path)
                    if stage.type_name != "component"
                ],
            )
            for child_path in FileSystemService.list_files(
                path, include_dirs=True, use_ignore=False, recursive=False
            )
        ]

    def create_file(
        self, path, content: Optional[bytes] = None, overwrite: bool = False
    ) -> CommonFileNode:
        from abstra_internals.settings import Settings

        if isinstance(path, str):
            path = Path(path)
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")

        relative_path = path

        if not path.is_absolute():
            path = Settings.root_path / path

        if path.exists() and not overwrite:
            raise FileExistsError(f"File already exists: {path}")

        if path.exists() and overwrite:
            path.unlink()

        path.parent.mkdir(parents=True, exist_ok=True)

        if content is not None:
            path.write_bytes(content)
        else:
            path.touch()
        return CommonFileNode(
            path_parts=list(relative_path.parts),
            size=path.stat().st_size,
            last_modified=datetime.fromtimestamp(path.stat().st_mtime),
            type="directory" if path.is_dir() else "file",
        )

    def delete_file(
        self, path_parts: List[str]
    ) -> AbstraLibApiEditorFilesDeleteResponse:
        from abstra_internals.settings import Settings

        path = Path(*path_parts)
        if not path.is_absolute():
            path = Settings.root_path / path

        if path.is_dir():
            FileSystemService.rm_tree(path)
        else:
            path.unlink()
        return AbstraLibApiEditorFilesDeleteResponse(ok=True)

    def rename_file(self, path, new_name) -> AbstraLibApiEditorFilesRenameResponse:
        from abstra_internals.settings import Settings

        if isinstance(path, str):
            path = Path(path)
        elif isinstance(path, List):
            path = Path(*path)
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")

        if not path.is_absolute():
            path = Settings.root_path / path

        if isinstance(new_name, str):
            new_path = path.parent / new_name
        elif isinstance(new_name, List):
            new_path = path.parent / Path(*new_name)
        else:
            raise ValueError(f"Invalid new name: {new_name}")

        # Check if the renamed file is a workflow stage
        project = self.repos.project.load(include_disabled_stages=True)
        stages = project.get_stages_by_file_path(path)

        path.rename(new_path)

        if stages:
            from abstra_internals.settings import Settings

            relative_new_path = new_path.relative_to(Settings.root_path)
            stages[0].update({"file": str(relative_new_path)})
            self.repos.project.save(project)

        return AbstraLibApiEditorFilesRenameResponse(ok=True)

    def edit_file(
        self, path, ops: AbstraLibApiEditorFilesSafeEditRequest
    ) -> AbstraLibApiEditorFilesSafeEditResponse:
        if isinstance(path, str):
            path = Path(path).absolute()
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")

        if str(path) not in crdt_managers or crdt_managers[str(path)] is None:
            crdt_managers[str(path)] = CRDTManager(file_path=path)

        for op in ops:
            crdt_managers[str(path)].apply_operation(op)

        with open(path, "w", encoding="utf-8") as f:
            f.write(crdt_managers[str(path)].get_content())

        return AbstraLibApiEditorFilesSafeEditResponse(ok=True)

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
        from abstra_internals.settings import Settings

        if isinstance(path, str):
            path = Path(path)
        elif isinstance(path, list):
            path = Path(*path)
        elif not isinstance(path, Path):
            raise ValueError(f"Invalid path: {path}")

        if not path.is_absolute():
            path = Settings.root_path / path

        path.mkdir(parents=True, exist_ok=True)
        return AbstraLibApiEditorFilesMkdirResponse(ok=True)

    def settings(self) -> AbstraLibApiEditorFilesSettingsResponse:
        return AbstraLibApiEditorFilesSettingsResponse(
            separator=sep,
        )
