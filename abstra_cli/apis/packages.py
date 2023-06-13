from ..apis import main as api_main


def list_workspace_packages():
    query = """
        query GetPackages {
            packages {
                name
                version
            }
        }
    """
    return api_main.hf_hasura_runner(query).get("packages", [])


def add_workspace_packages(raw_packages):
    _, workspace_id, _ = api_main.get_auth_info()
    packages = [
        {"name": p["name"], "version": p["version"], "workspace_id": workspace_id}
        for p in raw_packages
    ]
    query = """
        mutation InsertPackages($packages: [packages_insert_input!]!) {
            insert_packages(
                objects: $packages
                on_conflict: {
                    constraint: packages_workspace_id_name_key  
                    update_columns: [version]
                }
            ) {
                returning {
                    name
                    version
                }
            }
        }
    """
    return (
        api_main.hf_hasura_runner(query, {"packages": packages})
        .get("insert_packages", {})
        .get("returning", [])
    )


def delete_workspace_packages(packages):
    query = """
        mutation DeletePackages($packages: [String!]) {
            delete_packages(where: {name: {_in: $packages}}) {
                returning {
                    name
                    version
                }
            }
        }
    """
    return (
        api_main.hf_hasura_runner(query, {"packages": packages})
        .get("delete_packages", {})
        .get("returning", [])
    )
