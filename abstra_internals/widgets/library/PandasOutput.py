import json
from typing import Any
from abstra_internals.widgets.widget_base import Output
DEFAULT_PAGE_SIZE = 10


class PandasOutput(Output):
    type = 'pandas-output'

    def __init__(self, df: Any=None, **kwargs):
        self.set_props(dict(df=df, **kwargs))

    def set_props(self, props):
        self.df = props.get('df', '')
        self.full_width = props.get('full_width', True)
        self.display_index = props.get('display_index', False)
        self.label = props.get('label', '')
        self.actions = props.get('actions', [])
        self.filterable = props.get('filterable', False)
        self.page_size = props.get('page_size', DEFAULT_PAGE_SIZE)

    def serialize_table(self):
        if self.df is None:
            import pandas as pd
            df = pd.DataFrame({'change the': [1, 2, 3], 'df property': [4, 
                5, 6]})
            df_json = df.to_json(orient='table')
            if not isinstance(df_json, str):
                raise Exception('df.to_json() did not return a string')
            serialized = json.loads(df_json)
            del serialized['schema']['pandas_version']
            return serialized
        serialized = json.loads(self.df.to_json(orient='table'))
        del serialized['schema']['pandas_version']
        return serialized

    def render(self, ctx: dict):
        return {'type': self.type, 'table': self.serialize_table(),
            'fullWidth': self.full_width, 'displayIndex': self.
            display_index, 'label': self.label, 'actions': self.actions,
            'filterable': self.filterable, 'pageSize': self.page_size}
