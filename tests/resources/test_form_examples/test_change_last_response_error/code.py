from abstra.forms import *

AorB = None


def getPage1():
    return Page().read_multiple_choice(
        "",
        [
            {"label": " Lets do a)", "value": "doA"},
            {"label": "Lets do b)", "value": "doB"},
        ],
        key="whatodo",
    )


def midway(partial):
    global AorB
    AorB = partial["whatodo"]


def getAorB(partial):
    if AorB == "doA":
        return Page().display("We're Doing A").read("Enter things for A")
    else:
        return Page().display("We're doing B").read("Enter things for B")


def getPage2():
    return Page().reactive(getAorB)


answers = run_steps([getPage1(), midway, getPage2()])
