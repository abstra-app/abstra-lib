from typing import TYPE_CHECKING, Callable, Optional

from abstra_internals.widgets.widget_base import Input

if TYPE_CHECKING:
    from abstra_internals.interface.sdk.forms.page import Page


class Reactive(Input):
    type = "reactive"
    page: Optional["Page"]
    callback: Callable[[dict], Optional["Page"]]

    def __init__(self, callback: Callable, **kwargs):
        self.set_props(dict(callback=callback, **kwargs))
        self.page = None

    def has_errors(self):
        return self.page.has_errors() if self.page else False

    def _are_pages_different(self, page1: Optional["Page"], page2: Optional["Page"]):
        if page1 is None:
            return page2 is not None

        if page2 is None:
            return True

        return not page1.is_equal_to(page2)

    def render(self, ctx: dict):
        payload = {}
        payload.update(self.value)
        payload.update(ctx)
        new_page = self.callback(payload)

        if self._are_pages_different(self.page, new_page):
            self.page = new_page

            if self.page is not None:
                self.page.set_values(self.value)

        if self.page is None:
            return []

        return self.page.render(ctx)

    def set_value(self, value, set_errors=False):
        self.value = value
        if not hasattr(self, "page") or self.page is None:
            try:
                self.page = self.callback({})
            except Exception:
                self.page = None

        if self.page:
            self.page.set_values(value)

    def serialize_value(self):
        return self.page.serialize_value() if self.page else {}

    def set_props(self, props):
        self.callback = props.get("callback")
        self.set_value(props.get("initial_value", {}))
        self.page = None

    def set_errors(self):
        if self.page:
            self.page.set_errors()

    def parse_value(self, value):
        if self.page:
            parsed = self.page.parse_value(value)
            return parsed
        else:
            return {}


def reactive(func):
    from abstra_internals.interface.sdk.forms.page import Page

    def _partial(ans):
        page = Page(context=ans)

        class ProxyPage:
            def __getattribute__(self, key):
                original_attr = result = page.__getattribute__(key)

                def call_and_return(*args, **kwargs):
                    original_attr(*args, **kwargs)
                    widget = page.widgets[-1]
                    if isinstance(widget, Input):
                        return ans.get(widget.key)
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
