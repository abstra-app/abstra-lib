from ..resources.resources import Resource
from .. import messages
from .. import utils
from .. import apis


class Packages(Resource):
    @staticmethod
    def list():
        packages = apis.list_workspace_packages()
        messages.print_packages(packages)

    @staticmethod
    def add(*args, **kwargs):
        packages = list(args)
        file = (
            kwargs.get("f")
            or kwargs.get("file")
            or kwargs.get("r")
            or kwargs.get("requirement")
        )
        if file:
            try:
                with open(file, "r") as f:
                    packages.extend([p for p in f.read().split("\n") if p])
            except:
                print(f"Unable to read file: {file}")

        if len(packages) == 0:
            messages.no_packages()
            return

        processed_packages = []
        processed_names = []
        for pkg in packages:
            name, version = utils.parse_package(pkg)
            if not name:
                print(f"Invalid package: {pkg}")
                return False
            if name in processed_names:
                print(f"Duplicate package: {pkg}")
                return False
            processed_packages.append({"name": name, "version": version})

        added_packages = apis.add_workspace_packages(processed_packages)
        messages.print_packages(added_packages)
        print(f"\nAdded {len(added_packages)} packages")

    @staticmethod
    def remove(*args, **kwargs):
        deleted_packages = apis.delete_workspace_packages(args)
        messages.print_packages(deleted_packages)
        print(f"\nDeleted {len(deleted_packages)} packages")
