import typing
from .metadata_parsed import metadata_objects, WBrokerAPIParams


def types_compatible(prop, typeName: typing.Union[typing.List[str], str]):
    if type(typeName) == list:
        return any(types_compatible(prop, tn) for tn in typeName)

    if prop == None:
        return True

    if typeName == "string":
        return type(prop) == str
    if typeName == "number":
        return type(prop) == int or type(prop) == float
    if typeName == "boolean":
        return type(prop) == bool
    if typeName == "array":
        return type(prop) == list
    if typeName == "object":
        return type(prop) == dict
    if typeName == "null":
        return prop == None
    if typeName == "any":
        return True

    raise Exception(f"Unknown type: {typeName}")


def valid_prop(prop, schema: WBrokerAPIParams):
    valid = True

    if schema.oneOf:
        valid = valid and prop in schema.oneOf

    return valid


def to_generic_type(type):
    if type == str:
        return "string"
    if type == int:
        return "number"
    if type == bool:
        return "boolean"
    if type == list:
        return "array"
    if type == dict:
        return "object"
    if type == None:
        return "null"
    raise Exception(f"Unknown type: {type}")


def validate_widget_props(widget):
    metadata_widget = metadata_objects[widget["type"]]
    required_props = [prop for prop in metadata_widget.brokerAPI.params]

    for prop in required_props:
        prop_name = prop.argName
        if not prop_name in widget:
            raise Exception(
                f"Error in {widget['type']}: {prop_name} not in {widget.keys()}"
            )
        if not types_compatible(widget[prop_name], prop.typeName):
            raise Exception(
                f"{widget['type']}: {prop_name}: {type(widget[prop_name])} is not compatible with {prop}"
            )
        if not valid_prop(widget[prop_name], prop):
            raise Exception(f"{prop_name}: {widget[prop_name]} is not valid for {prop}")

    optional_props = [
        prop for prop in metadata_widget.brokerAPI.params if prop.isOptional
    ]
    for prop in optional_props:
        prop_name = prop.argName
        if not (
            widget.get(prop_name) is None
            or (
                types_compatible(widget[prop_name], prop.typeName)
                and valid_prop(widget[prop_name], prop)
            )
        ):
            raise Exception(
                f"{prop_name}: {type(widget[prop_name])} is not compatible with {prop}"
            )
    for prop in widget:
        if prop == "type":
            continue
        if not (prop in param.argName for param in metadata_widget.brokerAPI.params):
            raise Exception(f"{prop} not in {metadata_widget.brokerAPI.params}")
