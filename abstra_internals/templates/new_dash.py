import abstra.dashes as ad

"""
Abstra dashes are the simplest way to build custom user interfaces for your APIs.
"""

x = 2
y = 3


def get_sum():
    return x + y


def show_sum():
    ad.alert(str(get_sum()))
