import sys
from ..apis import main as api_main


def get_subdomain():
    query = """
        query Subdomains {
            subdomains {
                name
            }
        }
    """

    subdomains = api_main.hf_hasura_runner(query, {}).get("subdomains", [])
    if not len(subdomains):
        print("Could not find subdomain.")
        sys.exit(1)

    return subdomains[0]["name"]


def update_subdomain(old_name, new_name):
    query = """
        mutation UpdateSubdomain($old_name: String!, $new_name: String!) {
            update_subdomains(where: {name: {_eq: $old_name}}, _set: {name: $new_name}) {
                returning {
                    name
                }
            }
        }
    """
    return (
        api_main.hf_hasura_runner(query, {"old_name": old_name, "new_name": new_name})
        .get("update_subdomains", {})
        .get("returning", [])
    )
