from ..apis import main as api_main
from . import utils as utils


def list_workspace_dashes():
    query = """
        query GetDashes {
            dashes {
                path
                title
                script {
                    enabled
                }
            }
        }
    """
    return api_main.hf_hasura_runner(query).get("dashes", [])


def dash_upsert_data(deploy_data):
    return {
        "title": deploy_data["title"],
        "layout": deploy_data["layout"],
        "draft_layout": None,
        "theme": deploy_data.get("theme", None),
        "font_family": deploy_data.get("font_family", None),
        "main_color": deploy_data.get("main_color", None),
        "logo_url": deploy_data.get("logo_url", None),
        "brand_name": deploy_data.get("brand_name", None),
    }


def dash_script_upsert_data(deploy_data):
    return {
        "enabled": deploy_data.get("enabled", True),
        "file_path": deploy_data["code_file_path"],
        "code": "# using CODE_FILE_PATH",
        "draft": None,
        "name": deploy_data["title"],
    }


def add_workspace_dash(data):
    _, workspace_id, _ = api_main.get_auth_info()
    dash_data = {
        "path": data["path"],
        "workspace_id": workspace_id,
        **dash_upsert_data(data),
        "script": {
            "data": {
                "workspace_id": workspace_id,
                **dash_script_upsert_data(data),
            }
        },
    }

    query = """
        mutation InsertDash($dash_data: [dashes_insert_input!]!) {
            insert_dashes(
                objects: $dash_data
            ) {
                returning {
                    path
                    title
                }
            }
        }
    """

    return (
        api_main.hf_hasura_runner(query, {"dash_data": dash_data})
        .get("insert_dashes", {})
        .get("returning", {})[0]
    )


def update_workspace_dash(path, data):
    dash_data = dash_upsert_data(data)
    script_data = dash_script_upsert_data(data)

    request_data = {"path": path, "dash_data": dash_data, "script_data": script_data}
    update_query = """
        mutation UpdateDash($path: String!, $dash_data: dashes_set_input, $script_data: scripts_set_input = {}) {
            update_dashes(where: {path: {_eq: $path}}, _set: $dash_data) {
                returning {
                    id
                    path
                    title
                }
            }
            update_scripts(where: {dash: {path: {_eq: $path}}}, _set: $script_data) {
                returning {
                    name
                }
            }
        }
    """
    return (
        api_main.hf_hasura_runner(update_query, request_data)
        .get("update_dashes", {})
        .get("returning", {})[0]
    )


def upsert_workspace_dash(data):
    path = data["path"]

    query = """
        query FindDash($path: String!) {
            dashes(where: {path: {_eq: $path}}) {
                path
            }
        }
    """

    dashes = api_main.hf_hasura_runner(query, {"path": path}).get("dashes")
    if len(dashes):
        return update_workspace_dash(path, data)
    else:
        return add_workspace_dash(data)


def delete_workspace_dash(path):
    query = """
        mutation DeleteDash($path: String!) {
            delete_dashes(where: {path: {_eq: $path}}) {
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
        query GetDashLogs($limit: Int, $offset: Int) {
            dashes {
                id
                path
                logs(offset: $offset, limit: $limit, order_by: {created_at: desc})) {
                    id
                    created_at
                    execution_id
                    search_term
                    execution_type
                    messages
                }
            }
        }
    """
    dashes = api_main.hf_hasura_runner(query).get("dashes")
    logs = utils.flat_items_logs(dashes, path_or_id="path")

    return {"logs": utils.sampling(logs, limit, offset)}


def list_logs_by_path(path, limit, offset):
    query = """
        query GetDashLogs($limit: Int, $offset: Int, $path: String = "") {
            dashes(where: {path: {_eq: $path}}) {
                path
                logs(offset: $offset, limit: $limit, order_by: {created_at: desc}) {
                    id
                    created_at
                    dash_id
                    execution_id
                    search_term
                    execution_type
                    messages
                }
            }
        }
    """
    dashes = api_main.hf_hasura_runner(
        query, {"path": path, "limit": limit, "offset": offset}
    ).get("dashes")
    if dashes:
        return {"logs": utils.flatten_list([dash.get("logs") for dash in dashes])}
    return {"logs": []}
