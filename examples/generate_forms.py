import json
import os
import shutil
import tempfile
from pathlib import Path
from typing import (
    Union,
)

import flask_sock
import libcst as cst

from abstra_internals.controllers.execution.execution import ExecutionController
from abstra_internals.controllers.execution.execution_client_form import FormClient
from abstra_internals.entities.execution_context import FormContext, Request
from abstra_internals.repositories.factory import Repositories, get_editor_repositories
from abstra_internals.repositories.project.project import (
    FormStage,
    LocalProjectRepository,
)
from abstra_internals.settings import Settings


class TypeHintRemoverCST(cst.CSTTransformer):
    """
    A LibCST Transformer that removes type hints from Python code
    while preserving comments and formatting.
    """

    def leave_FunctionDef(
        self, original_node: cst.FunctionDef, updated_node: cst.FunctionDef
    ) -> cst.FunctionDef:
        """Removes return type hints and parameter annotations."""
        new_params: list[cst.Param] = []
        param_changed = False
        # Remove parameter annotations
        for param in updated_node.params.params:
            if param.annotation:
                new_params.append(param.with_changes(annotation=None))
                param_changed = True
            else:
                new_params.append(param)

        # If parameters changed, update the params object
        final_params = updated_node.params
        if param_changed:
            final_params = updated_node.params.with_changes(params=tuple(new_params))

        # Remove return annotation if present
        if updated_node.returns:
            return updated_node.with_changes(returns=None, params=final_params)
        elif param_changed:  # Only update params if return wasn't changed
            return updated_node.with_changes(params=final_params)
        else:  # No changes needed
            return updated_node

    def leave_AnnAssign(
        self, original_node: cst.AnnAssign, updated_node: cst.AnnAssign
    ) -> Union[cst.Assign, cst.RemovalSentinel]:
        """Converts annotated assignments to regular assignments, or removes
        the node if there's no value (like 'x: int')."""
        if updated_node.value is None:
            # If it's just a type declaration like 'x: int', remove the line.
            # This matches the behavior of the original AST-based code.
            return cst.RemoveFromParent()
        else:
            # If it's like 'x: int = 5', convert to 'x = 5'
            return cst.Assign(
                targets=[cst.AssignTarget(target=updated_node.target)],
                value=updated_node.value,
            )

    def leave_Import(
        self, original_node: cst.Import, updated_node: cst.Import
    ) -> Union[cst.Import, cst.RemovalSentinel]:
        """Removes 'import typing'."""
        # Filter out 'typing' from the list of imported names
        new_names = [name for name in updated_node.names if name.name.value != "typing"]

        if not new_names:
            # If 'typing' was the only import, remove the whole import statement
            return cst.RemoveFromParent()
        elif len(new_names) != len(updated_node.names):
            # If only 'typing' was removed from a multi-import line, update the names
            return updated_node.with_changes(names=new_names)
        else:
            # No changes needed
            return updated_node

    def leave_ImportFrom(
        self, original_node: cst.ImportFrom, updated_node: cst.ImportFrom
    ) -> Union[cst.ImportFrom, cst.RemovalSentinel]:
        """Removes 'from typing import ...'."""
        # Check if the import is from the 'typing' module
        # This handles simple cases like 'from typing import List'
        # More complex module paths (e.g., a.b.typing) might need more robust checks
        if (
            isinstance(updated_node.module, cst.Name)
            and updated_node.module.value == "typing"
        ):
            return cst.RemoveFromParent()
        # Add more checks here if you need to handle things like 'import a.typing'
        # e.g., check if isinstance(updated_node.module, cst.Attribute) and walk the chain.
        else:
            return updated_node

    def run(self, code: str) -> str:
        """
        Parses Python code, removes type hints using LibCST, and returns
        the modified code with comments and formatting preserved.

        Args:
            code: The Python source code as a string.

        Returns:
            The modified Python source code without type hints.
        """
        # Parse the code into a Concrete Syntax Tree
        module: cst.Module = cst.parse_module(code)

        # Instantiate the transformer
        remover = TypeHintRemoverCST()

        # Apply the transformer to the CST
        modified_module = module.visit(remover)

        # Return the code generated from the modified CST
        return modified_module.code


class MockWS(flask_sock.Server):
    def __init__(self):
        self.sent_data = []
        self.started = False

    def receive(self, timeout=None):
        if self.started:
            raise flask_sock.ConnectionClosed()

        self.started = True
        return json.dumps(
            {
                "type": "execution:start",
            }
        )

    def send(self, data):
        self.sent_data.append(json.loads(data))

    def get_render(self):
        for msg in self.sent_data:
            if msg["type"] == "form:render":
                return msg
        return None

    def close(self, reason=None, message=None):
        raise Exception("Mock was closed")


class HeadlessRenderer:
    def render(self, form: FormStage, repositories: Repositories):
        ws = MockWS()

        request = Request(
            body="",
            headers={},
            query_params={},
            method="GET",
        )

        context = FormContext(request=request)

        client = FormClient(
            context=context,
            production_mode=True,
            ws=ws,
        )

        ExecutionController(
            repositories=repositories,
        ).run(
            stage=form,
            client=client,
            context=context,
        )

        return ws.get_render()


def create_formatted_code(path: Path) -> Path:
    code = path.read_text(encoding="utf-8")
    untyped_code = TypeHintRemoverCST().run(code)

    untyped_file_path = path.with_suffix(".gen.py")
    with open(untyped_file_path, "w", encoding="utf-8") as f:
        f.write(untyped_code)

    os.system(
        f"ruff format {untyped_file_path.as_posix()} && ruff check {untyped_file_path.as_posix()} --fix"
    )

    return untyped_file_path


def render_examples():
    root_path = Path(tempfile.gettempdir()) / "abstra_examples"
    root_path.mkdir(exist_ok=True)

    Settings.set_root_path(root_path.as_posix())

    project_repository = LocalProjectRepository()
    project_repository.initialize()
    proj = project_repository.load()

    repos = get_editor_repositories()

    files_with_output = list(Path(__file__).parent.rglob("*.form.py"))
    files_without_output = list(Path(__file__).parent.rglob("*.raw.py"))
    files = files_with_output + files_without_output

    print(f"Found {len(files)} form files")

    for path in files:
        untyped_file_path = create_formatted_code(path)
        form = FormStage.create(title="Form", file=untyped_file_path.as_posix())
        proj.add_stage(form)
        project_repository.save(proj)
        output = HeadlessRenderer().render(form, repos)

        if path.name.endswith(".form.py"):
            with open(path.with_suffix(".gen.json"), "w", encoding="utf-8") as f:
                json.dump(output, f, indent=4)

    shutil.rmtree(root_path.as_posix(), ignore_errors=True)


render_examples()
