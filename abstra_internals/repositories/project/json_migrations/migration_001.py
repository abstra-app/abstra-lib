import uuid

from .base_migration import Migration


class Migration001(Migration):
    @staticmethod
    def target_version() -> str:
        return "1.0"

    @staticmethod
    def source_version() -> str:
        return "0.1"

    def _add_visualization_settings(self) -> None:
        if "visualization" not in self.data:
            self.data["visualization"] = []

    def _remove_dashes(self) -> None:
        if "dashes" in self.data:
            if len(self.data["dashes"]):
                self.warnings.append(
                    "Dashes are no longer supported, from v1.18 onwards. Your Dashes were removed from the abstra.json file. Retrieve them from the backup file."
                )
            del self.data["dashes"]

    def _missing_entities(self) -> None:
        if "hooks" not in self.data:
            self.data["hooks"] = []

        if "jobs" not in self.data:
            self.data["jobs"] = []

        if "forms" not in self.data:
            self.data["forms"] = []

        if "scripts" not in self.data:
            self.data["scripts"] = []

        if "workspace" not in self.data:
            self.data["workspace"] = {
                "name": "Untitled Workspace",
                "sidebar": [],
            }

        if "workflow_transitions" not in self.data:
            self.data["workflow_transitions"] = []

    def _add_workflow_positions(self) -> None:
        size = 110
        forms = self.data["forms"]
        for idx, form in enumerate(forms):
            if "workflow_position" not in form:
                form["workflow_position"] = [0, idx * size]

        for idx, job in enumerate(self.data["jobs"]):
            if "workflow_position" not in job:
                job["workflow_position"] = [size, idx * size]

        for idx, hook in enumerate(self.data["hooks"]):
            if "workflow_position" not in hook:
                hook["workflow_position"] = [2 * size, idx * size]

    def _remove_is_initial(self) -> None:
        for form in self.data["forms"]:
            if "is_initial" in form:
                del form["is_initial"]

        for job in self.data["jobs"]:
            if "is_initial" in job:
                del job["is_initial"]

        for hook in self.data["hooks"]:
            if "is_initial" in hook:
                del hook["is_initial"]

        for script in self.data["scripts"]:
            if "is_initial" in script:
                del script["is_initial"]

    def _add_workflow_transitions(self) -> None:
        for form in self.data["forms"]:
            if "transitions" not in form:
                form["transitions"] = []

        for job in self.data["jobs"]:
            if "transitions" not in job:
                job["transitions"] = []

        for hook in self.data["hooks"]:
            if "transitions" not in hook:
                hook["transitions"] = []

        for script in self.data["scripts"]:
            if "transitions" not in script:
                script["transitions"] = []

    def _add_ids(self) -> None:
        for form in self.data["forms"]:
            if "id" not in form:
                form["id"] = str(uuid.uuid4())

        for job in self.data["jobs"]:
            job["id"] = job["identifier"]
            del job["identifier"]

        for hook in self.data["hooks"]:
            if "id" not in hook:
                hook["id"] = str(uuid.uuid4())

        for script in self.data["scripts"]:
            if "id" not in script:
                script["id"] = str(uuid.uuid4())

    def _get_id_by_path(self, path: str) -> dict:
        for form in self.data["forms"]:
            if form["path"] == path:
                return form["id"]

        for hook in self.data["hooks"]:
            if hook["path"] == path:
                return hook["id"]

        for script in self.data["scripts"]:
            if script["path"] == path:
                return script["id"]

        raise Exception(f"Could not find entity with path {path}")

    def _transition_paths_to_ids(self) -> None:
        for form in self.data["forms"]:
            for transition in form["transitions"]:
                if "target_id" not in transition:
                    transition["target_id"] = self._get_id_by_path(
                        transition["target_path"]
                    )
                    del transition["target_path"]

        for job in self.data["jobs"]:
            for transition in job["transitions"]:
                if "target_id" not in transition:
                    transition["target_id"] = self._get_id_by_path(
                        transition["target_path"]
                    )
                    del transition["target_path"]

        for hook in self.data["hooks"]:
            for transition in hook["transitions"]:
                if "target_id" not in transition:
                    transition["target_id"] = self._get_id_by_path(
                        transition["target_path"]
                    )
                    del transition["target_path"]

        for script in self.data["scripts"]:
            for transition in script["transitions"]:
                if "target_id" not in transition:
                    transition["target_id"] = self._get_id_by_path(
                        transition["target_path"]
                    )
                    del transition["target_path"]

    def _migrate(self) -> None:
        self._missing_entities()
        self._add_workflow_positions()
        self._remove_is_initial()
        self._add_workflow_transitions()
        self._add_visualization_settings()
        self._remove_dashes()
        self._add_ids()
        self._transition_paths_to_ids()
        self._bump_version()
