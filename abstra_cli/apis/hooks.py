from ..apis import main as api_main
from . import utils as utils


def list_workspace_hooks():
    query = """
        query GetHooks {
            hooks {
                path
                title
                script {
                    enabled
                }
            }
        }
    """
    return api_main.hf_hasura_runner(query).get("hooks", [])


def add_workspace_hook(data):
    _, workspace_id, _ = api_main.get_auth_info()
    hook_data = {
        "title": data["name"],
        "script": {
            "data": {
                "workspace_id": workspace_id,
                "enabled": data.get("enabled", True),
                "code": data["code"],
                "name": data["name"],
            }
        },
    }

    data.pop("name", None)
    data.pop("code", None)
    data.pop("enabled", None)
    hook_data.update(data)

    query = """
        mutation InsertHook($hook_data: [hooks_insert_input!]!) {
            insert_hooks(
                objects: $hook_data
            ) {
                returning {
                    path
                    title
                }
            }
        }
    """

    return (
        api_main.hf_hasura_runner(query, {"hook_data": hook_data})
        .get("insert_hooks", {})
        .get("returning", {})[0]
    )


def update_workspace_hook(path, data):
    hook_data = data.copy()
    script_data = {}

    name = hook_data.pop("name", None)
    if name:
        hook_data["title"] = name
        script_data["name"] = name

    code = hook_data.pop("code", None)
    if code:
        script_data["code"] = code

    enabled = hook_data.pop("enabled", None)
    if enabled is not None:
        script_data["enabled"] = enabled

    request_data = {"path": path, "hook_data": hook_data, "script_data": script_data}
    update_query = """
        mutation UpdateHook($path: String!, $hook_data: hooks_set_input, $script_data: scripts_set_input = {}) {
            update_hooks(where: {path: {_eq: $path}}, _set: $hook_data) {
                returning {
                    id
                    path
                    title
                }
            }
            update_scripts(where: {hook: {path: {_eq: $path}}}, _set: $script_data) {
                returning {
                    name
                }
            }
        }
    """
    return api_main.hf_hasura_runner(update_query, request_data)


def upsert_workspace_hook(data):
    path = data["path"]

    query = """
        query FindHook($path: String!) {
            hooks(where: {path: {_eq: $path}}) {
                path
            }
        }
    """

    hooks = api_main.hf_hasura_runner(query, {"path": path}).get("hooks")
    if len(hooks):
        return update_workspace_hook(path, data)
    else:
        return add_workspace_hook(data)


def delete_workspace_hook(path):
    query = """
        mutation DeleteHook($path: String!) {
            delete_hooks(where: {path: {_eq: $path}}) {
                returning {
                    id
                    path
                    title
                }
            }
        }
    """

    return api_main.hf_hasura_runner(query, {"path": path})


def list_logs(limit, offset):
    query = """
        query GetHookLogs($limit: Int, $offset: Int) {
            hooks {
                logs(offset: $offset, limit: $limit, order_by: {created_at: desc}) {
                    id
                    hook_id
                    created_at
                    search_term
                    start_date
                    end_date
                    exit_code
                    executed_by
                    execution_id
                    request
                    response
                    trigger
                    status
                    execution {
                        status
                    }
                }
            }
        }
    """

    hooks = api_main.hf_hasura_runner(query).get("hooks", [])
    logs = utils.flat_items_logs(hooks, path_or_id="id")

    return {"logs": utils.sampling(logs, limit, offset)}


def list_logs_by_hook_id(id, limit, offset):
    query = """
        query GetHookLogs($limit: Int, $offset: Int, $id: uuid) {
            hooks(where: {id: {_eq: $id}}) {
                logs(offset: $offset, limit: $limit, order_by: {created_at: desc}) {
                    id
                    hook_id
                    created_at
                    search_term
                    start_date
                    end_date
                    exit_code
                    executed_by
                    execution_id
                    request
                    response
                    stderr_message
                    stdout_message
                    trigger
                    status
                    execution {
                        status
                    }
                }
            }
            }
    """
    hooks = api_main.hf_hasura_runner(
        query, {"id": id, "limit": limit, "offset": offset}
    ).get("hooks")
    if hooks:
        return {"logs": utils.flatten_list([hook.get("logs") for hook in hooks])}
    return {"logs": []}


def list_detailed_log_by_id(id):
    query = """
        query GetDetailedLog($id: uuid!) {
            hooks {
                logs(where: {id: {_eq: $id}}) {
                    stderr_message
                    stdout_message
                    status
                    execution {
                        id
                        status
                    }
                }
            }
        }
    """
    hooks = api_main.hf_hasura_runner(query, {"id": id}).get("hooks", None)
    if hooks:
        return {
            "detailed_log": utils.flatten_list([hook.get("logs") for hook in hooks])
        }
