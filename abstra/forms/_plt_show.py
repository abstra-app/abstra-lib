from .generated.outputs import display_plotly


def _overload_plotly_show():
    try:
        from plotly.io import renderers
        from plotly.graph_objects import Figure
        from plotly.io._base_renderers import ExternalRenderer

        class FormsRenderer(ExternalRenderer):
            def render(self, fig):
                fig = Figure(data=fig)
                display_plotly(fig)
                return {}

        renderers["abstra-forms"] = FormsRenderer()
        renderers.default = "abstra-forms"
    except Exception:
        pass
