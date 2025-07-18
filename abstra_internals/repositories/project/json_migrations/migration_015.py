import re
import unicodedata

from abstra_internals.settings import Settings

from .base_migration import Migration


class Migration015(Migration):
    @staticmethod
    def target_version() -> str:
        return "15.0"

    @staticmethod
    def source_version() -> str:
        return "14.0"

    def get_all_stages(self):
        forms = [{"type": "form", **x} for x in self.data.get("forms", [])]
        scripts = [{"type": "script", **x} for x in self.data.get("scripts", [])]
        jobs = [{"type": "job", **x} for x in self.data.get("jobs", [])]
        hooks = [{"type": "hook", **x} for x in self.data.get("hooks", [])]
        return forms + scripts + jobs + hooks

    def to_snake_case(self, text: str) -> str:
        lower = text.lower()
        unaccented = (
            unicodedata.normalize("NFD", lower)
            .encode("ascii", "ignore")
            .decode("ascii")
        )
        underscored = re.sub(r"[^a-zA-Z0-9]", "_", unaccented)
        aggregated = re.sub(r"_+", "_", underscored)
        return aggregated.lstrip("_").rstrip("_")

    def _migrate(self) -> None:
        file_to_stages = {}
        for stage in self.get_all_stages():
            file = stage.get("file")
            if file:
                file_to_stages.setdefault(file, []).append(stage)

        new_file_map = {}
        for shared_file, stages in file_to_stages.items():
            if len(stages) <= 1:
                continue

            type_title_to_stages = {}
            for stage in stages:
                key = (stage["type"], self.to_snake_case(stage["title"]))
                type_title_to_stages.setdefault(key, []).append(stage)

            for (stage_type, snake_title), group in type_title_to_stages.items():
                for idx, stage in enumerate(group):
                    serial_suffix = f"_{idx + 1}" if idx > 0 else ""
                    new_filename = f"{stage_type}_{snake_title}{serial_suffix}.py"
                    new_filepath = Settings.root_path / new_filename

                    import_statement = f"import {shared_file[:-3]}"
                    new_filepath.write_text(import_statement, encoding="utf-8")
                    new_file_map[(stage["type"], stage["id"])] = new_filename

        for stage_type, data_key in [
            ("form", "forms"),
            ("script", "scripts"),
            ("job", "jobs"),
            ("hook", "hooks"),
        ]:
            for stage_data in self.data.get(data_key, []):
                key = (stage_type, stage_data["id"])
                if key in new_file_map:
                    stage_data["file"] = new_file_map[key]
