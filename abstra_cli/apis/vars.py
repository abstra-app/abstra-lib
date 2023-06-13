from ..apis import main as api_main


def list_workspace_vars():
    query = """
        query GetVars {
            environment_variables {
                name
                value
            }
        }
    """
    return api_main.hf_hasura_runner(query).get("environment_variables", [])


def add_workspace_vars(raw_vars):
    _, workspace_id, _ = api_main.get_auth_info()
    vars = [
        {"name": v["name"], "value": v["value"], "workspace_id": workspace_id}
        for v in raw_vars
    ]
    query = """
        mutation InsertVars($vars: [environment_variables_insert_input!]!) {
            insert_environment_variables(
                objects: $vars
                on_conflict: {
                    constraint: environment_variables_name_workspace_id_key
                    update_columns: [value, name]
                }
            ) {
                returning {
                    name
                    value
                }
            }
        }
    """
    return (
        api_main.hf_hasura_runner(query, {"vars": vars})
        .get("insert_environment_variables", {})
        .get("returning", [])
    )


def delete_workspace_vars(vars):
    query = """
        mutation DeleteVars($vars: [String!]) {
            delete_environment_variables(where: {name: {_in: $vars}}) {
                returning {
                    name
                    value
                }
            }
        }
    """
    return (
        api_main.hf_hasura_runner(query, {"vars": vars})
        .get("delete_environment_variables", {})
        .get("returning", [])
    )
