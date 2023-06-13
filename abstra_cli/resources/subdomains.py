import sys
from ..apis import get_subdomain, update_subdomain
from ..resources.resources import Resource
from .. import messages


class Subdomains(Resource):
    @staticmethod
    def list():
        subdomain = get_subdomain()
        messages.print_subdomains(subdomain)

    @staticmethod
    def update(*args, **kwargs):
        if not len(args):
            messages.missing_parameters_to_update("name", "subdomain")
            sys.exit(1)

        new_subdomain = args[0]
        old_subdomain = get_subdomain()
        try:
            updated_subdomain = update_subdomain(old_subdomain, new_subdomain)
            messages.print_subdomains(updated_subdomain[0]["name"])
        except Exception as error:
            if (
                len(error.args) > 0
                and len(error.args[0]) > 0
                and error.args[0][0]["extensions"]["code"] == "constraint-violation"
            ):
                messages.conflict_name("name", "subdomain")
            else:
                messages.update_failed("subdomain")
            sys.exit(1)
