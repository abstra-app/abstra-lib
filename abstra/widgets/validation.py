from .metadata import metadata


def types_compatible(prop, schema):
    if type(schema["typeName"]) == list:
        return any(
            types_compatible(prop, {**schema, "typeName": type})
            for type in schema["typeName"]
        )

    if schema["typeName"] == "string":
        return type(prop) == str
    if schema["typeName"] == "number":
        return type(prop) == int or type(prop) == float
    if schema["typeName"] == "boolean":
        return type(prop) == bool
    if schema["typeName"] == "array":
        return type(prop) == list
    if schema["typeName"] == "object":
        return type(prop) == dict
    if schema["typeName"] == "null":
        return prop == None
    if schema["typeName"] == "any":
        return True
    raise Exception(f"Unknown type: {schema['typeName']}")


def valid_prop(prop, schema):
    valid = True

    if schema.get("oneOf"):
        valid = valid and prop in schema.get("oneOf")

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
    metadata_widget = metadata[widget["type"]]
    required_props = [
        prop
        for prop in metadata_widget["brokerAPI"]["params"]
        if not prop.get("isOptional", False)
    ]

    for prop in required_props:
        prop_name = prop["argName"]
        if not prop_name in widget:
            raise Exception(
                f"Error in {widget['type']}: {prop_name} not in {widget.keys()}"
            )
        assert types_compatible(widget[prop_name], prop)
        assert valid_prop(widget[prop_name], prop)

    optional_props = [
        prop
        for prop in metadata_widget["brokerAPI"]["params"]
        if prop.get("isOptional", False)
    ]
    for prop in optional_props:
        prop_name = prop["argName"]
        if not (
            widget.get(prop_name) is None
            or (
                types_compatible(widget[prop_name], prop)
                and valid_prop(widget[prop_name], prop)
            )
        ):
            print(types_compatible(widget[prop_name], prop))
            print(widget.get(prop_name))
            print(valid_prop(widget[prop_name], prop))
            raise Exception(
                f"{prop_name}: {type(widget[prop_name])} is not compatible with {prop}"
            )
    for prop in widget:
        if prop == "type":
            continue
        if not (
            prop in param["argName"] for param in metadata_widget["brokerAPI"]["params"]
        ):
            raise Exception(
                f'{prop} not in {metadata_widget["brokerAPI"]["params"].keys()}'
            )
