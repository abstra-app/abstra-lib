from unittest import TestCase

from abstra_internals.contracts_generated import AbstraLibApiEditorEnvVarsModel
from abstra_internals.repositories.env_vars import EnvVarsRepository
from abstra_internals.repositories.project.project import ProjectRepository, ScriptStage
from tests.fixtures import clear_dir, init_dir


class TestEnvVarsRepository(TestCase):
    def setUp(self):
        self.dir = init_dir()
        self.env_var_repo = EnvVarsRepository()

    def tearDown(self):
        clear_dir(self.dir)

    def test_load_default_empty(self):
        self.assertEqual(self.env_var_repo.list(), [])

    def test_load(self):
        var = AbstraLibApiEditorEnvVarsModel(name="key", value="value")
        self.env_var_repo.set(name=var.name, value=var.value)
        self.assertEqual(self.env_var_repo.list(), [var])

    def test_set(self):
        var = AbstraLibApiEditorEnvVarsModel(name="key", value="value")
        self.env_var_repo.set(name=var.name, value=var.value)
        self.assertEqual(self.env_var_repo.list(), [var])

    def test_unset(self):
        var = AbstraLibApiEditorEnvVarsModel(name="key", value="value")
        self.env_var_repo.set(name=var.name, value=var.value)
        self.env_var_repo.unset(name=var.name)
        self.assertEqual(self.env_var_repo.list(), [])

    def test_check_no_file_is_valid(self):
        self.assertTrue(self.env_var_repo.check())

    def test_check_empty_file_is_valid(self):
        open(".env", "w").close()
        self.assertTrue(self.env_var_repo.check())

    def test_check_multiple_lines_is_valid(self):
        with open(".env", "w") as f:
            f.write("key=value\nkey2=value2")
        self.assertTrue(self.env_var_repo.check())

    def test_check_no_value_is_valid(self):
        with open(".env", "w") as f:
            f.write("key=value\nkey2")
        self.assertTrue(self.env_var_repo.check())

    def test_check_invalid_returns_false(self):
        with open(".env", "w") as f:
            f.write("===")
        self.assertFalse(self.env_var_repo.check())

    def test_env_vars_in_code(self):
        project = ProjectRepository.load()
        code_path = self.dir / "code.py"
        code_content = "\n".join(["import os", "os.getenv('FOO')", "os.environ['BAR']"])
        code_path.write_text(code_content)
        script = ScriptStage(
            file=str(code_path),
            id="script",
            is_initial=False,
            title="foo bar",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(script)
        ProjectRepository.save(project)
        env_vars_in_code = self.env_var_repo.get_env_vars_in_code()
        self.assertEqual(env_vars_in_code.keys(), {"FOO", "BAR"})

    def test_env_vars_in_code_only_consider_first_arg(self):
        project = ProjectRepository.load()
        code_path = self.dir / "code.py"
        code_content = "\n".join(["import os", "os.getenv('FOO', 'default')"])
        code_path.write_text(code_content)
        script = ScriptStage(
            file=str(code_path),
            id="script",
            is_initial=False,
            title="foo bar",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(script)
        ProjectRepository.save(project)
        env_vars_in_code = self.env_var_repo.get_env_vars_in_code()
        self.assertEqual(env_vars_in_code.keys(), {"FOO"})
