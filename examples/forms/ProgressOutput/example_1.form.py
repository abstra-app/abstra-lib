"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from time import sleep

from abstra.forms import ProgressOutput, run


def show_progress_bar(state):
    for i in range(1, 11):
        sleep(1)  # Simulating a time-consuming process
        yield [ProgressOutput(current=i, total=10)]


run([show_progress_bar])
