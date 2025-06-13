import pathlib

from abstra_internals.environment import DISABLED_STAGES_FOLDER


class DisabledStagesLoader:
    def _get_disabled_stages_folder(self):
        raise NotImplementedError

    def _get_disabled_stages_from_efs(self):
        folder = self._get_disabled_stages_folder()

        files = [f.name for f in folder.iterdir() if f.is_file()]
        return files

    def get_disabled_stages_ids(self):
        return self._get_disabled_stages_from_efs()


class ProductionDisabledStagesLoader(DisabledStagesLoader):
    def _get_disabled_stages_folder(self):
        if not DISABLED_STAGES_FOLDER:
            raise Exception("DISABLED_STAGES_FOLDER is not set")

        return pathlib.Path(DISABLED_STAGES_FOLDER)
