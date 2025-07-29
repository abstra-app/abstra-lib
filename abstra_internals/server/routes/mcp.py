from abstra_internals.controllers import pysa as pysa_controller
from abstra_internals.controllers.docs import DocsController
from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.tasks import TasksController
from abstra_internals.controllers.workflows import WorkflowController
from abstra_internals.utils.mcp import requires_approval
from abstra_internals.utils.mcp_bp import mcp_bp


def get_editor_bp(main_controller: MainController):
    tasks_controller = TasksController(main_controller.repositories)
    workflow_controller = WorkflowController(main_controller.repositories)
    docs_controller = DocsController(main_controller.repositories)

    return mcp_bp(
        [
            docs_controller.read_abstra_docs,
            docs_controller.list_all_modules_in_abstra_lib,
            docs_controller.list_objects_in_abstra_module,
            docs_controller.list_class_init_params_from_abstra_lib,
            docs_controller.list_class_properties_from_abstra_lib,
            docs_controller.list_class_examples_from_abstra_lib,
            docs_controller.list_class_parents_from_abstra_lib,
            docs_controller.list_function_params_from_abstra_lib,
            docs_controller.list_function_examples_from_abstra_lib,
            docs_controller.get_function_return_type_from_abstra_lib,
            main_controller.create_form,
            main_controller.create_hook,
            main_controller.create_job,
            main_controller.create_tasklet,
            requires_approval(main_controller.delete_form),
            requires_approval(main_controller.delete_hook),
            requires_approval(main_controller.delete_job),
            requires_approval(main_controller.delete_tasklet),
            requires_approval(main_controller.update_stage),
            main_controller.get_execution_logs,
            main_controller.get_execution_tasks,
            main_controller.list_all_stages,
            main_controller.get_stage,
            main_controller.read_stage_file,
            main_controller.list_files,
            main_controller.query_files_with_glob,
            main_controller.read_file,
            requires_approval(main_controller.debug_run_job),
            requires_approval(main_controller.debug_run_tasklet),
            requires_approval(main_controller.debug_run_hook),
            requires_approval(main_controller.debug_run_form_with_ai),
            requires_approval(main_controller.write_file),
            main_controller.check_file_exists,
            main_controller.check_multiple_files_exists,
            tasks_controller.list_tasks_sent_by_stage,
            tasks_controller.list_tasks_sent_to_stage,
            tasks_controller.create_task,
            requires_approval(tasks_controller.clear_tasks),
            tasks_controller.update_task_status,
            tasks_controller.list_all_tasks,
            workflow_controller.get_workflow_settings,
            workflow_controller.add_transition,
            requires_approval(workflow_controller.fix_positions_with_autolayout),
            pysa_controller.analyze_python_syntax,
            main_controller.linter_repository.find_issues_in_codebase,
            requires_approval(main_controller.linter_repository.fix_issue_in_codebase),
        ]
    )
