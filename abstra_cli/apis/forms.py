from ..apis import main as api_main
from . import utils as utils


def list_workspace_forms():
    query = """
        query GetForms {
            forms {
                path
                title
                script {
                    enabled
                }
            }
        }
    """
    return api_main.hf_hasura_runner(query).get("forms", [])


def add_workspace_form(data):
    _, workspace_id, _ = api_main.get_auth_info()
    form_data = {
        "title": data["name"],
        "workspace_id": workspace_id,
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
    form_data.update(data)

    query = """
        mutation InsertForm($form_data: [forms_insert_input!]!) {
            insert_forms(
                objects: $form_data
            ) {
                returning {
                    path
                    title
                }
            }
        }
    """

    return (
        api_main.hf_hasura_runner(query, {"form_data": form_data})
        .get("insert_forms", {})
        .get("returning", {})[0]
    )


def update_workspace_form(path, data):
    form_data = data.copy()
    script_data = {}

    name = form_data.pop("name", None)
    if name:
        form_data["title"] = name
        script_data["name"] = name

    code = form_data.pop("code", None)
    if code:
        script_data["code"] = code

    enabled = form_data.pop("enabled", None)
    if enabled is not None:
        script_data["enabled"] = enabled

    request_data = {"path": path, "form_data": form_data, "script_data": script_data}
    update_query = """
        mutation UpdateForm($path: String!, $form_data: forms_set_input, $script_data: scripts_set_input = {}) {
            update_forms(where: {path: {_eq: $path}}, _set: $form_data) {
                returning {
                    id
                    path
                    title
                }
            }
            update_scripts(where: {form: {path: {_eq: $path}}}, _set: $script_data) {
                returning {
                    name
                }
            }
        }
    """
    return api_main.hf_hasura_runner(update_query, request_data)


def upsert_workspace_form(data):
    path = data["path"]

    query = """
        query FindForm($path: String!) {
            forms(where: {path: {_eq: $path}}) {
                path
            }
        }
    """

    forms = api_main.hf_hasura_runner(query, {"path": path}).get("forms")
    if len(forms):
        return update_workspace_form(path, data)
    else:
        return add_workspace_form(data)


def delete_workspace_form(path):
    query = """
        mutation DeleteForm($path: String!) {
            delete_forms(where: {path: {_eq: $path}}) {
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
        query GetFormLogs($limit: Int, $offset: Int) {
            forms {
                id
                logs(offset: $offset, limit: $limit, order_by: {created_at: desc}) {
                    id
                    form_id
                    created_at
                    search_term
                    execution_type
                    messages
                }
            }
        }
    """

    forms = api_main.hf_hasura_runner(query).get("forms", [])
    logs = utils.flat_items_logs(forms, path_or_id="id")

    return {"logs": utils.sampling(logs, limit, offset)}


def list_logs_by_id(id, limit, offset):
    query = """
        query GetFormsLogs($limit: Int, $offset: Int, $id: uuid) {
            forms(where: {id: {_eq: $id}}) {
                id
                logs(offset: $offset, limit: $limit, order_by: {created_at: desc}) {
                    id
                    created_at
                    form_id
                    search_term
                    execution_type
                    messages
                }
            }
        }
    """
    forms = api_main.hf_hasura_runner(
        query, {"id": id, "limit": limit, "offset": offset}
    ).get("forms")
    if forms:
        return {"logs": utils.flatten_list([form.get("logs") for form in forms])}
    return {"logs": []}
