import requests

from abstra_internals.environment import DOCS_URL
from abstra_internals.repositories.factory import Repositories
from abstra_internals.utils.sdk import SDKContractParser


class DocsController:
    repos: Repositories
    sdk: dict

    def __init__(self, repos: Repositories):
        self.repos = repos
        self.sdk = SDKContractParser("abstra", silent=True).run()

    def read_abstra_docs(self, path: str = "/llms.txt"):
        """
        Fetches the documentation menu from the abstra documentation URL.

        It should always be the first step before generating any code.

        This should be used to understand how Abstra works and what functionalities are available.

        Args:
            path (str): The path to the documentation file. Defaults to "/llms.txt" which is the main menu. Example: "/docs/md/workflow/forms/examples/external-data.md
        Returns:
            str: The content of the documentation file.
        Copywritings:
            Read the abstra documentation
            Reading the abstra documentation...

        """

        if not path:
            path = "/llms.txt"
        if not path.startswith("/"):
            path = "/" + path
        if path.startswith("/docs/"):
            path = path.replace("/docs/", "/")

        url = DOCS_URL + (path or "/llms.txt")
        menu_content = requests.get(url).text
        return menu_content

    def list_all_modules_in_abstra_lib(self):
        """
        Reads the documentation of the abstra package.

        It should be followed by listing objects in a specific module.

        Returns:
            list: A list of module names.

        Copywritings:
            List all modules in the abstra package
            Listing all modules in the abstra package...
        """
        return list(self.sdk.keys())

    def list_objects_in_abstra_module(self, module_name: str):
        """
        Get the documentation for a specific module.

        It helps to understand what functions, classes, and variables are available in the module.

        Args:
            module_name (str): The name of the module.

        Returns:
            list: A list of function names in the module.

        Copywritings:
            List all objects in a specific module
            Listing all objects in a specific module...
        """

        return [
            {
                "type": value["object_type"],
                "name": key,
                "description": value.get("description", ""),
            }
            for key, value in self.sdk[module_name].items()
        ]

    def list_class_init_params_from_abstra_lib(self, module_name: str, class_name: str):
        """
        Get the parameters of a class in a module.

        Args:
            module_name (str): The name of the module.
            class_name (str): The name of the class.

        Returns:
            list: A list of class parameters.

        Copywritings:
            List all parameters of a class in a module
            Listing all parameters of a class in a module
        """
        return self.sdk[module_name][class_name]["init"]["params"]

    def list_class_properties_from_abstra_lib(self, module_name: str, class_name: str):
        """
        Get the properties of a class in a module.

        Args:
            module_name (str): The name of the module.
            class_name (str): The name of the class.

        Returns:
            list: A list of class properties.

        Copywritings:
            List all properties of a class in a module
            Listing all properties of a class in a module
        """
        return self.sdk[module_name][class_name]["properties"]

    def list_class_parents_from_abstra_lib(self, module_name: str, class_name: str):
        """
        Get the parent classes of a class in a module.

        Args:
            module_name (str): The name of the module.
            class_name (str): The name of the class.

        Returns:
            list: A list of parent classes.

        Copywritings:
            List all parent classes of a class in a module
            Listing all parent classes of a class in a module
        """
        return self.sdk[module_name][class_name]["parent_classes"]

    def list_class_examples_from_abstra_lib(self, module_name: str, class_name: str):
        """
        Get examples of a class in a module.

        Args:
            module_name (str): The name of the module.
            class_name (str): The name of the class.

        Returns:
            list: A list of examples.

        Copywritings:
            List all examples of a class in a module
            Listing all examples of a class in a module
        """
        return self.sdk[module_name][class_name]["examples"]

    def list_function_params_from_abstra_lib(
        self, module_name: str, function_name: str
    ):
        """
        Get the parameters of a function in a module.

        Args:
            module_name (str): The name of the module.
            function_name (str): The name of the function.

        Returns:
            list: A list of function parameters.

        Copywritings:
            List all parameters of a function in a module
            Listing all parameters of a function in a module
        """
        return self.sdk[module_name][function_name]["params"]

    def list_function_examples_from_abstra_lib(
        self, module_name: str, function_name: str
    ):
        """
        Get examples of a function in a module.

        Args:
            module_name (str): The name of the module.
            function_name (str): The name of the function.

        Returns:
            list: A list of examples.

        Copywritings:
            List all examples of a function in a module
            Listing all examples of a function in a module
        """
        return self.sdk[module_name][function_name]["examples"]

    def get_function_return_type_from_abstra_lib(
        self, module_name: str, function_name: str
    ):
        """
        Get the return type of a function in a module.

        Args:
            module_name (str): The name of the module.
            function_name (str): The name of the function.

        Returns:
            str: The return type of the function.


        Copywritings:
            Get the return type of a function in a module
            Getting the return type of a function in a module...
        """
        return self.sdk[module_name][function_name]["return_type"]
