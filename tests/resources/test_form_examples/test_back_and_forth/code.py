from abstra.forms import Page, run_steps

page1 = Page().read_number("a")
page2 = Page().read_number("b")


def make_sum(ans):
    return dict(sum=ans["a"] + ans["b"])


def render_result(ans):
    return Page().display(ans["sum"])


page_result = Page().reactive(render_result)

run_steps([page1, page2, make_sum, page_result])
