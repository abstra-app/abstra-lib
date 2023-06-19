from .generated.widget_schema import WidgetSchema


class ListItemSchema(WidgetSchema):
    """A schema for a list item

    This schema is used to define the schema of a list item.
    """

    def __init__(self):
        super().__init__()

    def copy(self):
        import copy

        return copy.deepcopy(self)
