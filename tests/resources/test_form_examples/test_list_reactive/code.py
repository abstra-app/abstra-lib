from abstra.forms import *

combination_desc = """## Step#2: Add your variants
### Add variants and select the attribute values for each variant"""

skuidlabel_var = (
    "SKU ID, A unique ID you can use to identify this particular variant (Optional)"
)

default_variant_options = [
    "Wood Type",
    "Wood Stain",
    "Metal Type",
    "Metal Finish",
    "Color",
    "Material",
    "Dimension",
    "Other",
]
variant_attributes = [{"attr": "", "values": []}]
variants = None


def renderVariantOpts(result):
    value_sel = ListItemSchema()
    attribute_list = []
    num_attr = 0

    attribute_list = result.get("attr_list")
    global variant_attributes
    variant_attributes = result.get("attr_list")

    if (
        attribute_list
    ):  # make sure attribute_list wasn't set to None on the assignments above
        for variant in attribute_list:
            if variant["attr"] and variant.get("values"):
                attr_val = variant["attr"]
                if attr_val == "Other" or attr_val == "Dimension":
                    attr_val = str(variant.get("extra_desc"))

                value_sel = value_sel.read_dropdown(
                    "Value for " + attr_val, variant["values"], key=attr_val
                )
                num_attr = num_attr + 1

    if num_attr > 0:
        return (
            Page()
            .display_markdown(combination_desc)
            .read_list(value_sel, add_button_text="Add a variant", key="var_list")
        )
    return None


def renderOtherVar(partialPick):
    if not partialPick.get("attr"):
        return None
    else:
        returnPage = Page()
        if partialPick["attr"] == "Other":
            returnPage = returnPage.read(
                " ",
                placeholder="Describe the variation",
                required=True,
                key="extra_desc",
            )
        elif partialPick["attr"] == "Dimension":
            returnPage = returnPage.read(
                " ", placeholder="Which dimension?", required=True, key="extra_desc"
            )
        returnPage = returnPage.read_tag(
            "",
            key="values",
            placeholder=f"Enter Values for {partialPick['attr']}. Press 'Enter' between each value",
            required=True,
        )
        return returnPage


def processVariants(partial):
    global variant_attributes
    try:
        variant_attributes = partial["attr_list"]
        partial["var_list"]
    except:
        print("couldn't save variants")

    # TODO: Rejigger other and dimension variants here
    return None


def renderVariants(partial):
    variation_schema = (
        ListItemSchema()
        .read_dropdown(
            " ",
            default_variant_options,
            placeholder="Select attribute type",
            key="attr",
        )
        .reactive(renderOtherVar)
    )

    return (
        Page()
        .display_markdown("## Define Your Variant Attributes")
        .read_list(
            variation_schema,
            max=4,
            add_button_text="Add a Variant Attribute",
            key="attr_list",
            initial_value=variant_attributes,
        )
        .reactive(renderVariantOpts)
    )


def enterVariants():
    return Page().reactive(renderVariants)


def pageToGoBack():
    return Page().display("i18n_next_action Page. Go back if needed")


enterVariants().run()
