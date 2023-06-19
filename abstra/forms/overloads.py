import builtins

from .generated.inputs import read
from .generated.outputs import display_plotly


def _overload_input():
    read_overload = lambda msg="": read(msg)
    builtins.input = read_overload
    builtins.raw_input = read_overload


# def _overload_print():
#     def print_overload(*values):
#         page = Page()
#         for value in values:
#             page.display(value)
#         return page.run()

#     builtins.print = print_overload


def _overload_plotly_show():
    try:
        from plotly.io import renderers
        from plotly.graph_objects import Figure
        from plotly.io._base_renderers import ExternalRenderer

        class FormsRenderer(ExternalRenderer):
            def render(self, fig_dict):
                fig = Figure(data=fig_dict)
                display_plotly(fig)
                return {}

        renderers["abstra-forms"] = FormsRenderer()
        renderers.default = "abstra-forms"
    except Exception as e:
        pass


def overload_to_widgets():
    _overload_input()
    _overload_plotly_show()
