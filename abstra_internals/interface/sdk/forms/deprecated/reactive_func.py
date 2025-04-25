from abstra_internals.interface.sdk.forms.deprecated.page import Page
from abstra_internals.interface.sdk.forms.deprecated.widgets.widget_base import Input


def reactive(func):
    def _partial(ans):
        page = Page(context=ans)

        class ProxyPage:
            def __getattribute__(self, key):
                original_attr = result = page.__getattribute__(key)

                def call_and_return(*args, **kwargs):
                    original_attr(*args, **kwargs)
                    widget = page.widgets[-1]
                    if isinstance(widget, Input):
                        return ans.get(widget.key, widget.value)
                    else:
                        return result

                if callable(original_attr):
                    return call_and_return
                else:
                    return original_attr

        fp = ProxyPage()
        func(fp)
        return page

    return Page().reactive(_partial)
