from ..apis import main as api_main


def update_workspace_data(data: dict) -> dict:
    return {
        "sidebar": data["sidebar"],
    }


def get_workspace_id():
    query = """
        query GetWorkspaceId {
            workspaces {
                id
            }
        }
    """
    return (
        api_main.hf_hasura_runner(query, {}).get("workspaces", [{}])[0].get("id", None)
    )


def get_workspace_subdomain(wid):
    query = """
        query GetWorkspaceSubdomain($wid: uuid!) {
            workspaces(where: {id: {_eq: $wid}}) {
                subdomain {
                    name
                }
            }
        }
    """
    return (
        api_main.hf_hasura_runner(query, {"wid": wid})
        .get("workspaces", [{"subdomain": {"name": None}}])[0]
        .get("subdomain", {"name": None})
        .get("name", None)
    )


def update_workspace(wid, data):
    workspace_data = update_workspace_data(data)

    request_data = {"wid": wid, "workspace_data": workspace_data}
    update_query = """
        mutation UpdateWorkspace($wid: uuid!, $workspace_data: workspaces_set_input) {
            update_workspaces(where: {id: {_eq: $wid}}, _set: $workspace_data) {
                returning {
                    id
                    sidebar
                }
            }
        }
    """
    return (
        api_main.hf_hasura_runner(update_query, request_data)
        .get("update_workspaces", {})
        .get("returning", {})[0]
    )
