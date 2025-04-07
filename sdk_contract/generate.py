#!/usr/bin/env python3
import importlib
import inspect
import json
import os
import pkgutil
import re
from typing import Any, Callable, List, Type

from abstra_internals.interface.sdk.user_exceptions import DeprecatedModule

OUTPUT_FILE = "./sdk_contract/contract.json"

DEPRECATED_PATHS = [
    "abstra/workflows.py",
    "abstra/cli",
    "abstra_internals/widgets/",
    "abstra_internals/interface/sdk/forms/deprecated",
    "abstra_internals/interface/sdk/forms/generated",
]

RED = "\033[91m"
YELLOW = "\033[93m"
GREEN = "\033[92m"
RESET = "\033[0m"


class Logger:
    def __init__(self, locations: List[str] = []):
        self.locations = locations

    def location(self) -> str:
        if len(self.locations) == 0:
            return ""
        if len(self.locations) == 1:
            return self.locations[0]

        return f"{self.locations[0]} @ {self.locations[-1]}:\n"

    def info(self, message: str) -> None:
        """Print info message in green."""
        print(f"{self.location()} {message}\n")

    def success(self, message: str) -> None:
        """Print success message in green."""
        print(f"✅{GREEN}{self.location()} {message}{RESET}\n")

    def warning(self, message: str) -> None:
        print(f"{YELLOW}{self.location()} {message}{RESET}\n")

    def error(self, message: str) -> None:
        """Format error message in red."""
        print(f"{RED}{self.location()} {message}{RESET}\n")


class Parser:
    def process_module(self, module):
        module_info = {}
        exported_names = getattr(
            module,
            "__all__",
            [name for name in dir(module) if not name.startswith("_")],
        )
        for name in exported_names:
            obj = getattr(module, name)
            module_info[name] = self._process_object(name, obj)
        return module_info

    def _process_function_or_callable(self, obj: Callable, filepath: str):
        """
        Process a function or a callable object.
        Extracts the signature (parameters and return annotation) and type hints.
        """
        logger = Logger([filepath, obj.__name__])
        try:
            sig = inspect.signature(obj)
            parameters, return_annotation = self._get_signature_details(sig)
        except Exception:
            parameters, return_annotation = [], None

        raw_docstring = inspect.getdoc(obj)

        if raw_docstring is None:
            logger.error("No docstring found")
            return {}

        docstring = self.parse_docstring(raw_docstring)
        self.validate_parameters(parameters, docstring, logger)

        return {
            "description": docstring["description"],
            "signature": {
                "parameters": docstring["params"],
                "return_annotation": return_annotation,
            },
        }

    def _get_signature_details(self, sig):
        """
        Extract details from an inspect.Signature object.
        Returns a list of parameters and the return annotation.
        """
        parameters = []
        for name, param in sig.parameters.items():
            # Convert all default values to string representation
            if param.default is inspect.Parameter.empty:
                default_value = "None"
                # Parameter is required if it has no default and is not a var arg
                is_required = param.kind not in (
                    inspect.Parameter.VAR_POSITIONAL,
                    inspect.Parameter.VAR_KEYWORD,
                )
            else:
                # Use str() for None and repr() for everything else to get proper Python strings
                default_value = "None" if param.default is None else repr(param.default)
                is_required = False

            parameters.append(
                {
                    "name": name,
                    "default": default_value,
                    "required": is_required,
                    "annotation": None
                    if param.annotation is inspect.Parameter.empty
                    else repr(param.annotation),
                    "kind": str(param.kind),
                }
            )
        return (
            parameters,
            None
            if sig.return_annotation is inspect.Signature.empty
            else repr(sig.return_annotation),
        )

    def validate_parameters(self, parameters: list, docstring: dict, logger: Logger):
        """
        Validate types, descriptions, and names of parameters.
        """

        for param in parameters:
            docstring_param = next(
                (p for p in docstring["params"] if p["name"] == param["name"]), None
            )

            if docstring_param is None:
                print(docstring["params"])

                logger.error(f"Param '{param['name']}': missing from docstring")
                continue

            if param["annotation"] is None:
                logger.error(f"Param '{param['name']}': missing type annotation")
                continue

            if docstring_param.get("description") is None:
                logger.error(
                    f"Param '{param['name']}': missing description from docstring"
                )

            # Add default value and required flag to the docstring parameter data
            # Ensure default is always a string
            docstring_param["default"] = param["default"]
            docstring_param["required"] = param["required"]

            norm_annotation = param["annotation"].replace("typing.", "")
            norm_annotation = re.sub(r"ForwardRef\('([^']+)'\)", "\\1", norm_annotation)
            norm_annotation = norm_annotation.replace("'", '"')
            norm_annotation = re.sub(
                r"Union\[(.*), NoneType\]", "Optional[Union[\\1]]", norm_annotation
            )

            if docstring_param["type"] not in norm_annotation:
                logger.error(
                    f"Param '{param['name']}': expected type '{docstring_param['type']}', but got '{norm_annotation}'"
                )

        for param in docstring["params"]:
            if (
                next((p for p in parameters if p["name"] == param["name"]), None)
                is None
            ):
                logger.error(f"Param '{param['name']}': extra parameter in docstring")
                # Ensure extra parameters in docstring have a default field (set to None)
                if "default" not in param:
                    param["default"] = "None"
                # Assume extra params without default in docstring are required
                if "required" not in param:
                    param["required"] = True

    def parse_docstring(self, docstring: str):
        docstring = docstring.strip()

        # Identify where the parameters section starts ("Args:" or "Attributes:")
        section_regex = re.compile(r"\n\s*(Args|Attributes):\s*\n", flags=re.IGNORECASE)
        split_parts = section_regex.split(docstring, maxsplit=1)

        if len(split_parts) > 1:
            description_part = split_parts[0].strip()
            # The params part begins after the header line.
            # We find the header's index and slice the docstring from there.
            header = split_parts[1]
            header_index = docstring.find(header)
            params_part = docstring[header_index + len(header) :].strip()
        else:
            description_part = docstring
            params_part = ""

        # Clean up the description (join multiple lines)
        description = " ".join(description_part.split())

        params = []
        if params_part:
            # Split the parameter section into lines
            lines = params_part.splitlines()
            current_param = None

            for line in lines:
                # Remove leading/trailing spaces
                stripped_line = line.strip()
                if not stripped_line:
                    continue

                # Check if the line starts a new parameter definition.
                # Pattern: name (type): description...
                match = re.match(r"^(\w+)\s*\(([^)]+)\):\s*(.*)$", stripped_line)

                if match:
                    # If there was a previous parameter being built, add it.
                    if current_param:
                        params.append(current_param)
                    current_param = {
                        "name": match.group(1),
                        "type": match.group(2),
                        "description": match.group(3).strip(),
                    }
                else:
                    # If the line is indented (a continuation of the previous param description)
                    if current_param and line.startswith(" "):
                        # Append the additional text to the current parameter's description.
                        current_param["description"] += " " + stripped_line
            # Append the last parameter if exists.
            if current_param:
                params.append(current_param)

        return {"description": description, "params": params}

    def _all_ancestors(self, cls):
        """
        Return all ancestors of a class.
        """
        filtered_base_names = ["object", "ABC", "Generic"]
        current = [
            base.__name__
            for base in cls.__bases__
            if base.__name__ not in filtered_base_names
        ]

        for base in cls.__bases__:
            current.extend(self._all_ancestors(base))

        return list(set(filter(lambda x: x not in filtered_base_names, current)))

    def _process_class(self, cls: Type[Any], filepath: str):
        """
        Process a class by extracting its docstring and the signature details
        of its constructor (__init__). The signature excludes the first parameter (typically 'self').
        """
        hidden_parameters = ["self", "cls"]
        init_method = getattr(cls, "__init__", None)

        raw_docstring = inspect.getdoc(cls)
        raw_init_docstring = inspect.getdoc(init_method)
        logger = Logger([filepath, cls.__name__])

        if raw_docstring is None:
            logger.error("No docstring found")
            return {}

        if raw_init_docstring is None:
            logger.error("No docstring found for __init__")
            return {}

        docstring = self.parse_docstring(raw_docstring)
        init_docstring = self.parse_docstring(raw_init_docstring)

        # Process the init method if it exists and is callable
        if init_method and callable(init_method):
            try:
                sig = inspect.signature(init_method)
                all_parameters, _ = self._get_signature_details(sig)
                parameters = list(
                    filter(lambda p: p["name"] not in hidden_parameters, all_parameters)
                )

                # Add default values and required flag to init_docstring parameters
                for param in parameters:
                    docstring_param = next(
                        (
                            p
                            for p in init_docstring["params"]
                            if p["name"] == param["name"]
                        ),
                        None,
                    )
                    if docstring_param:
                        # Use Python string representation for default values
                        docstring_param["default"] = param["default"]
                        docstring_param["required"] = param["required"]

                self.validate_parameters(parameters, init_docstring, logger)
            except Exception:
                raise Exception(f"Error validating parameters for class {cls.__name__}")

        # Ensure all parameters have a default field (set to "None" if not specified)
        # and a required field (default to True if not specified)
        for param in init_docstring["params"]:
            if "default" not in param:
                param["default"] = "None"
            if "required" not in param:
                param["required"] = True

        return {
            "description": docstring["description"],
            "parent_classes": self._all_ancestors(cls),
            "init": {
                "parameters": init_docstring["params"],
            },
        }

    def _process_object(self, name, obj):
        logger = Logger([name])
        try:
            filepath = inspect.getfile(obj)
            logger.locations.append(filepath)
        except Exception:
            logger.warning(f"Skipping {name} because it's not in a module")
            return {}

        if filepath and any(skip_path in filepath for skip_path in DEPRECATED_PATHS):
            logger.warning(f"Skipping {name} because it's in a deprecated path")
            return {
                "object_type": "deprecated",
            }

        if inspect.isclass(obj):
            return {
                "object_type": "class",
                **self._process_class(obj, filepath),
            }
        elif callable(obj):
            return {
                "object_type": "function",
                **self._process_function_or_callable(obj, filepath),
            }

        raise ValueError(f"Object {name} is not a class or a function")


def main():
    abstra = importlib.import_module("abstra")
    documentation = {}
    logger = Logger()
    parser = Parser()
    documentation["abstra"] = parser.process_module(abstra)

    if not hasattr(abstra, "__path__"):
        raise ValueError("abstra is not a package")

    for _, modname, _ in pkgutil.iter_modules(
        abstra.__path__, prefix=abstra.__name__ + "."
    ):
        try:
            logger.info(f"Processing {modname}...")
            submodule = importlib.import_module(modname)
            documentation[modname] = parser.process_module(submodule)
        except DeprecatedModule:
            logger.warning(f"Skipping {modname} because it's deprecated")

    # create the directory if it doesn't exist

    if not os.path.exists("./generated"):
        os.makedirs("./generated")

    with open(OUTPUT_FILE, "w") as f:
        # Use ensure_ascii=False to make sure all characters are properly represented
        json.dump(documentation, f, indent=2, ensure_ascii=False)

    logger.success("Successfully generated sdk_contract.json")
    logger.success(
        f"Generated {len(documentation)} modules and {sum(len(module) for module in documentation.values())} objects"
    )


if __name__ == "__main__":
    main()
