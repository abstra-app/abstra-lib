import importlib
import inspect
import json
import pathlib
import pkgutil
import re
from types import ModuleType
from typing import Any, Callable, Dict, List, Literal, Optional, Type, TypedDict, Union

from abstra_internals.interface.sdk.user_exceptions import DeprecatedModule

ABSTRA_LIB_ROOT = pathlib.Path(__file__).parent.parent.parent

DEPRECATED_PATHS = [
    "abstra/workflows.py",
    "abstra/cli.py",
    "abstra/logger.py",
    "abstra_internals/widgets/",
    "abstra_internals/interface/sdk/forms/deprecated",
    "abstra_internals/interface/sdk/forms/generated",
]


class Example(TypedDict):
    name: str
    description: str
    code: str


class ExampleWithOutput(Example):
    output: str


class BaseParameter(TypedDict):
    name: str
    type: str
    description: str


class Parameter(BaseParameter):
    default: Optional[str]
    required: bool


class ObjectDoc(TypedDict):
    object_type: Literal["class", "function"]
    description: str
    examples: List[Example]


class FunctionDoc(ObjectDoc):
    params: List[Parameter]
    return_type: Optional[str]


class ClassDoc(ObjectDoc):
    parent_classes: List[str]
    init: Dict[str, List[Parameter]]
    properties: Dict[str, BaseParameter]


class Logger:
    RED = "\033[91m"
    BLUE = "\033[94m"
    YELLOW = "\033[93m"
    GREEN = "\033[92m"
    RESET = "\033[0m"

    def __init__(self):
        self.skips = []
        self.errors = []
        self.read = []

    def skipped(self, filepath: str, object_name: str, message: str) -> None:
        self.skips.append(
            {"filepath": filepath, "object_name": object_name, "message": message}
        )
        print(
            f"{self.YELLOW}SKIPPED\t{filepath}::{object_name} >> {message}{self.RESET}"
        )

    def error(self, filepath: str, object_name: str, message: str) -> None:
        self.errors.append(
            {"filepath": filepath, "object_name": object_name, "message": message}
        )
        print(f"{self.RED}ERROR\t{filepath}::{object_name} >> {message}{self.RESET}")

    def start(self, filepath: str, object_name: str) -> None:
        self.read.append({"filepath": filepath, "object_name": object_name})

    def print_summary(self) -> None:
        print("" + "-" * 50)
        print(f"📊{self.BLUE}Total: {len(self.read)}{self.RESET}")
        print(f"👀{self.YELLOW}Skipped: {len(self.skips)}{self.RESET}")
        print(f"🔥{self.RED}Errors: {len(self.errors)}{self.RESET}")

    def has_errors(self) -> bool:
        return len(self.errors) > 0


class SilentLogger:
    def skipped(self, filepath: str, object_name: str, message: str) -> None:
        pass

    def error(self, filepath: str, object_name: str, message: str) -> None:
        pass

    def start(self, filepath: str, object_name: str) -> None:
        pass

    def print_summary(self) -> None:
        pass

    def has_errors(self) -> bool:
        return False


class SDKContractParser:
    def __init__(self, main_module_name: str, silent=False):
        self.logger = SilentLogger() if silent else Logger()
        self.module_name = main_module_name

    def list_submodules(self):
        main_module = importlib.import_module(self.module_name)
        submodules = []
        for _, modname, _ in pkgutil.iter_modules(
            main_module.__path__, prefix=main_module.__name__ + "."
        ):
            submodules.append(modname)
        return submodules

    def run(self):
        result = {}

        for submodule_name in self.list_submodules():
            try:
                submodule = importlib.import_module(submodule_name)
                processed_submodule = self._process_module(submodule)
                if processed_submodule is not None:
                    result[submodule_name] = processed_submodule
            except DeprecatedModule:
                self.logger.skipped(submodule_name, "Module", "DeprecatedModule raised")

        self.logger.print_summary()
        return result

    def _process_module(self, module: ModuleType) -> Dict[str, Union[ObjectDoc, None]]:
        result = {}

        names = getattr(
            module, "__all__", [n for n in dir(module) if not n.startswith("_")]
        )
        for name in names:
            obj = getattr(module, name, None)
            if obj is None:
                continue
            processed_object = self._process_object(name, obj, module)
            if processed_object is not None:
                result[name] = processed_object

        return result

    def _process_object(
        self, obj_name: str, obj: Any, module: ModuleType
    ) -> Union[ObjectDoc, None]:
        self.logger.start(obj_name, obj)
        filepath = None

        try:
            filepath = inspect.getfile(obj)
        except TypeError as e:
            self.logger.skipped(
                obj.__module__,
                obj_name,
                "Unsupported type: " + str(e),
            )

        if filepath is None:
            return None

        if filepath and any(skip_path in filepath for skip_path in DEPRECATED_PATHS):
            self.logger.skipped(filepath, obj_name, "Path set in DEPRECATED_PATHS")
            return None

        if inspect.isclass(obj):
            return self._process_class(obj, filepath, module)
        elif callable(obj):
            return self._process_function(obj, filepath, module)

        raise ValueError(f"Object {obj_name} is not a class or a function")

    def _process_examples(self, obj: Callable, module: ModuleType) -> List[Example]:
        submodule_path = "/".join(module.__name__.split(".")[-1:])
        examples_dir_path = ABSTRA_LIB_ROOT / "examples" / submodule_path / obj.__name__

        examples = []

        if not examples_dir_path.exists():
            return examples

        for example_file in sorted(list(examples_dir_path.glob("*.gen.py"))):
            with open(example_file, "r", encoding="utf-8") as f:
                raw = f.read()

            docstring_match = re.search(r'"""(.*?)"""', raw, re.DOTALL)
            if not docstring_match:
                self.logger.error(
                    example_file.absolute().as_posix(),
                    example_file.stem,
                    "No docstring found in example file",
                )
                continue
            docstring = docstring_match.group(1).strip()

            # remove docstring from the code
            code = raw.replace(docstring_match.group(0), "").strip()

            # Extract the description from the docstring
            description_match = re.search(
                r"^description:\s*(.*)", docstring, re.MULTILINE
            )
            title_match = re.search(r"^name:\s*(.*)", docstring, re.MULTILINE)
            if not title_match:
                self.logger.error(
                    example_file.absolute().as_posix(),
                    example_file.stem,
                    "No name found in docstring",
                )
                continue
            if not description_match:
                self.logger.error(
                    example_file.absolute().as_posix(),
                    example_file.stem,
                    "No description found in docstring",
                )
                continue

            example_description = description_match.group(1).strip()
            example_name = title_match.group(1).strip()

            example_output = example_file.with_suffix("").with_suffix(".gen.json")

            if example_output.exists():
                with open(example_output, "r", encoding="utf-8") as f:
                    example_output = json.load(f)
            else:
                examples.append(
                    Example(
                        name=example_name,
                        description=example_description,
                        code=code,
                    )
                )
                continue

            if example_output is None:
                self.logger.error(
                    example_file.absolute().as_posix(),
                    example_file.stem,
                    "Output file is corrupted",
                )
                continue

            examples.append(
                ExampleWithOutput(
                    name=example_name,
                    description=example_description,
                    code=code,
                    output=example_output,
                )
            )

        return examples

    def _process_function(
        self, obj: Callable, filepath: str, module: ModuleType
    ) -> Optional[FunctionDoc]:
        try:
            output = self._process_callable(obj, filepath)

            return FunctionDoc(
                object_type="function",
                description=output["description"],
                params=output["params"],
                return_type=output["return_type"],
                examples=self._process_examples(obj, module),
            )
        except Exception as e:
            self.logger.error(
                filepath, obj.__name__, f"Error processing function: {str(e)}"
            )
            return None

    def _process_class(
        self, cls: Type[Any], filepath: str, module: ModuleType
    ) -> Optional[ClassDoc]:
        constructor = getattr(cls, "__init__", None)

        cls_raw_docstr = inspect.getdoc(cls)

        if cls_raw_docstr is None:
            self.logger.error(filepath, cls.__name__, "No docstring found!")
            return None

        cls_docstr = self._parse_docstring(cls_raw_docstr)

        if not constructor or not callable(constructor):
            self.logger.error(filepath, cls.__name__, "No __init__ method found!")
            return None

        try:
            parsed_constructor = self._process_callable(constructor, filepath)

            return ClassDoc(
                object_type="class",
                description=cls_docstr["description"],
                init={
                    "params": parsed_constructor["params"],
                },
                properties=cls_docstr[
                    "params"
                ],  # TODO: validate this against the class attributes and typehints
                parent_classes=self._list_class_superclasses(cls),
                examples=self._process_examples(cls, module),
            )
        except Exception as e:
            self.logger.error(
                filepath, cls.__name__, f"Error processing init method: {str(e)}"
            )

    _ProcessedCallable = TypedDict(
        "_ProcessedCallable",
        {"params": List[Parameter], "return_type": Optional[str], "description": str},
    )

    def _process_callable(self, obj: Callable, filepath: str) -> _ProcessedCallable:
        raw_docstring = inspect.getdoc(obj)

        if raw_docstring is None:
            raise ValueError(f"Docstring not found for {obj.__name__}")

        parsed_docstr = self._parse_docstring(raw_docstring)

        sig = inspect.signature(obj)
        parsed_sig = self._parse_signature(sig)

        self._validate_params(parsed_sig["params"], parsed_docstr["params"])

        result_params: Dict[str, Parameter] = {}

        for sig_param_name, sig_param in parsed_sig["params"].items():
            docstr_param = parsed_docstr["params"][sig_param_name]
            if docstr_param is None:
                raise ValueError(f"Param '{sig_param_name}': missing from docstring")

            result_params[sig_param_name] = {
                "name": docstr_param["name"],
                "type": docstr_param["type"],
                "description": docstr_param["description"],
                "default": sig_param["default"] or None,
                "required": sig_param["required"] or False,
            }

        return {
            "params": list(result_params.values()),
            "return_type": self._normalize_type_annotation(
                parsed_sig["return_type"] or "None"
            ),
            "description": parsed_docstr["description"],
        }

    ParsedSignature = TypedDict(
        "ParsedSignature",
        {"params": Dict[str, Parameter], "return_type": str},
    )

    def _parse_signature(self, sig: inspect.Signature) -> ParsedSignature:
        IGNORED_PARAMS = ["self", "cls"]
        params = {}

        for name, param in sig.parameters.items():
            if name in IGNORED_PARAMS:
                continue
            # Convert all default values to string representation

            if param.default is inspect.Parameter.empty:
                default_value = "None"
                # Parameter is required if it has no default and is not a var arg
                required = param.kind not in (
                    inspect.Parameter.VAR_POSITIONAL,
                    inspect.Parameter.VAR_KEYWORD,
                )
            else:
                # Use str() for None and repr() for everything else to get proper Python strings
                default_value = "None" if param.default is None else repr(param.default)
                required = False

            annotation = (
                repr(param.annotation)
                if param.annotation is not inspect.Parameter.empty
                else None
            )

            params[name] = {
                "name": name,
                "default": default_value,
                "required": required,
                "type": annotation,
            }

        if sig.return_annotation is inspect.Signature.empty:
            return_type = "Unknown"
        else:
            return_type = repr(sig.return_annotation)

        return {
            "params": params,
            "return_type": return_type,
        }

    def _normalize_type_annotation(self, annotation: str) -> str:
        # Remove <class '...'> wrapper
        annotation = re.sub(r"<class '([^']+)'>", r"\1", annotation)
        # Remove typing prefix (run twice for potential nested cases)
        annotation = annotation.replace("typing.", "")
        # Handle ForwardRef
        annotation = re.sub(r"ForwardRef\('([^']+)'\)", r"\1", annotation)
        # Handle the simplest case: Union[NoneType] -> NoneType
        annotation = re.sub(r"\bUnion\[\s*NoneType\s*\]", "NoneType", annotation)
        # Handle Union[T, NoneType] -> Optional[T]
        annotation = re.sub(
            r"\bUnion\[\s*([^,\]]+)\s*,\s*NoneType\s*\]", r"Optional[\1]", annotation
        )
        # Handle Union[NoneType, T] -> Optional[T]
        annotation = re.sub(
            r"\bUnion\[\s*NoneType\s*,\s*([^,\]]+)\s*\]", r"Optional[\1]", annotation
        )
        # Handle Union[A, B, ..., NoneType] -> Optional[Union[A, B, ...]]
        annotation = re.sub(
            r"\bUnion\[(.*?),\s*NoneType\s*\]", r"Optional[Union[\1]]", annotation
        )
        # Handle Union[NoneType, A, B, ...] -> Optional[Union[A, B, ...]]
        annotation = re.sub(
            r"\bUnion\[\s*NoneType\s*,\s*(.*?)\]", r"Optional[Union[\1]]", annotation
        )
        # Cleanup - If Step D/E resulted in Optional[Union[T]] where T has no comma, simplify it.
        annotation = re.sub(
            r"\bOptional\[\s*Union\[\s*([^,\]]+)\s*\]\s*\]", r"Optional[\1]", annotation
        )
        # Quote replacement
        annotation = annotation.replace("'", '"')

        return annotation

    def _validate_params(
        self,
        sig_params: Dict[str, Parameter],
        docstr_params: Dict[str, BaseParameter],
    ) -> None:
        errors = []

        for sig_param_name, sig_param in sig_params.items():
            if sig_param_name not in docstr_params:
                errors.append(f"'{sig_param_name}' not in docstring.")
                continue

            docstr_param = docstr_params.get(sig_param_name)

            if docstr_param is None:
                errors.append(f"'{sig_param_name}' not in docstring.")
                continue

            if sig_param["type"] is None:
                errors.append(f"'{sig_param_name}' missing type annotation.")
                continue

            if docstr_param.get("description") is None:
                errors.append(f"'{sig_param_name}' missing description.")
                continue

            annotation = self._normalize_type_annotation(sig_param["type"])

            if docstr_param["type"] not in annotation:
                errors.append(
                    f"'{sig_param_name}' type mismatch: {annotation} != {docstr_param['type']}. Have you remembered to use quotes (\"CustomType\")?"
                )
                continue

        for docstr_param_name in docstr_params.keys():
            if docstr_param_name not in sig_params:
                errors.append(f"'{docstr_param_name}' not in signature.")

        if len(errors) > 0:
            raise ValueError(" ".join(errors))

    _ParsedDocstring = TypedDict(
        "_ParsedDocstring", {"params": Dict[str, BaseParameter], "description": str}
    )

    def _parse_docstring(self, docstring: str) -> _ParsedDocstring:
        docstring = docstring.strip()

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

        params = {}
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
                        params[current_param["name"]] = current_param
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
                params[current_param["name"]] = current_param

        return {
            "params": params,
            "description": description,
        }

    def _list_class_superclasses(self, cls):
        filtered_base_names = ["object", "ABC", "Generic"]
        current = [
            base.__name__
            for base in cls.__bases__
            if base.__name__ not in filtered_base_names
        ]

        for base in sorted(cls.__bases__, key=lambda x: x.__name__):
            current.extend(self._list_class_superclasses(base))

        return sorted(
            list(set(filter(lambda x: x not in filtered_base_names, current)))
        )
