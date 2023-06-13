import sys
from ..resources.resources import Resource
from .. import messages
from .. import utils
from .. import apis


class Vars(Resource):
    @staticmethod
    def list():
        vars = apis.list_workspace_vars()
        messages.print_vars(vars)

    @staticmethod
    def add(*args, **kwargs):
        vars = list(args)
        file = kwargs.get("f") or kwargs.get("file")
        if file:
            with open(file, "r") as f:
                vars.extend([v for v in f.read().split("\n") if v])

        if len(vars) == 0:
            messages.no_variables()
            return

        processed_vars = []
        processed_names = []
        for var in vars:
            name, value = utils.parse_env_var(var)
            if not name or not value:
                messages.invalid_variable(var)
                sys.exit(1)
            if name in processed_names:
                messages.duplicate_variable(var)
                sys.exit(1)
            processed_vars.append({"name": name, "value": value})

        added_vars = apis.add_workspace_vars(processed_vars)
        messages.print_vars(added_vars)
        print(f"\nAdded {len(added_vars)} environment variables")

    @staticmethod
    def remove(*args, **kwargs):
        deleted_vars = apis.delete_workspace_vars(args)
        messages.print_vars(deleted_vars)
        print(f"\nDeleted {len(deleted_vars)} vars")
