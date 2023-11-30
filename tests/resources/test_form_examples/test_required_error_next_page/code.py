from abstra.forms import Page

name = Page().read("What is your name?").read("What is your last name?").run()
