import typing
from dataclasses import dataclass
from .metadata import metadata


@dataclass
class WEvents:
    key: str
    description: str
    payloadSchema: typing.Any


@dataclass
class WDashProperties:
    minWidth: int
    minHeight: int
    initialWidth: int
    initialHeight: int


@dataclass
class WPythonAPIParams:
    argName: str
    description: str
    typeName: str
    isKwarg: bool
    default: typing.Any
    formOnly: bool = False
    dashesInitialValue: typing.Optional[str] = None
    typeDescription: typing.Optional[typing.List[str]] = None


@dataclass
class WPythonAPIReturns:
    typeName: typing.Optional[str]
    typeDescription: str


class WPythonAPI:
    name: str
    params: typing.List[WPythonAPIParams]
    returns: typing.List[WPythonAPIReturns]

    def __init__(self, name, params, returns):
        self.name = name
        self.params = [WPythonAPIParams(**param) for param in params]
        self.returns = [WPythonAPIReturns(**returns) for returns in returns]


@dataclass
class WBrokerAPIParams:
    argName: str
    typeName: typing.Union[str, typing.List[str]]
    description: typing.Optional[str] = None
    default: typing.Any = None
    isOptional: bool = False
    formOnly: bool = False
    items: typing.Any = None
    oneOf: typing.Any = None
    properties: typing.Any = None


class WBrokerAPI:
    params: typing.List[WBrokerAPIParams]

    def __init__(self, params):
        self.params = [WBrokerAPIParams(**param) for param in params]


@dataclass
class WExample:
    props: typing.Dict[str, typing.Any]
    name: str
    description: str
    key: str
    code: str
    iframeHeight: typing.Optional[str] = None


class WMetadata:
    name: str
    description: str
    type: str
    autoHeight: bool
    events: typing.List[WEvents]
    dashProperties: WDashProperties
    pythonAPI: WPythonAPI
    brokerAPI: WBrokerAPI
    examples: typing.List[WExample]
    dashOnly: bool
    formOnly: bool

    def __init__(
        self,
        name,
        description,
        type,
        autoHeight,
        events,
        dashProperties,
        pythonAPI,
        brokerAPI,
        examples,
        dashOnly=False,
        formOnly=False,
    ):
        self.name = name
        self.description = description
        self.type = type
        self.autoHeight = autoHeight
        self.events = [WEvents(**event) for event in events]
        self.dashProperties = WDashProperties(**dashProperties)  # type: ignore
        self.pythonAPI = WPythonAPI(**pythonAPI)  # type: ignore
        self.brokerAPI = WBrokerAPI(**brokerAPI)  # type: ignore
        self.examples = [WExample(**example) for example in examples]
        self.dashOnly = dashOnly
        self.formOnly = formOnly


metadata_objects = {k: WMetadata(**v) for k, v in metadata.items()}
