import os
from pathlib import Path

from ..resources.resources import Resource
from .. import messages as messages
from .. import utils as utils
from .. import apis as apis


class Files(Resource):
    @staticmethod
    def list():
        files = apis.list_workspace_files()
        messages.print_files(files)

    @staticmethod
    def add(*args, **kwargs):
        files: list[Path] = []
        for path in args:
            if os.path.isfile(path):
                files.append(Path(path))
            elif os.path.isdir(path):
                files.extend(utils.files_from_directory(path))

        if len(files) == 0:
            messages.no_files()
            return

        bar = messages.show_progress("Uploading files", len(files))
        for path in files:
            filename = path.as_posix()
            ok = apis.upload_file(filename, path.open("rb"))
            if not ok:
                print(f"Error uploading file {filename}")
                return False
            else:
                bar.next()
        bar.finish()
        print(f"\nUploaded {len(files)} files successfully")

    @staticmethod
    def remove(*args, **kwargs):
        # TODO: list first then delete
        bar = messages.show_progress("Deleting files", len(args))
        for f in args:
            ok = apis.delete_file(f)
            if not ok:
                print(f"Error deleting file {f}")
                return False
            else:
                bar.next()
        bar.finish()
        print(f"\nDeleted {len(args)} files successfully")

    @staticmethod
    def list_dashes_files(dashes_root_path):
        files = apis.list_workspace_files()
        return [
            f["Key"]
            for f in files
            if f["Key"].startswith(f"{dashes_root_path}/")
            and f["Key"].endswith(".abstradash.json")
        ]
