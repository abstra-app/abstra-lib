from unittest import TestCase

from abstra_internals.server.controller.pysa import (
    jedi_get_autocomplete,
    jedi_get_syntax_errors,
    jedi_help,
)

CODE = """
import random
import abstra.hooks as ah
import abstra.workflows as aw
from clients import send_message

print("🕒 Hook is running...")

msg = send_message(text="every hour I RUN")
aw.set_data("thread_ts", msg["ts"])

color = random.choice(["red", "blue"])
aw.set_data("color", color)

ah.send_json({"message": "A message from the hook!"})
"""


class PysaTests(TestCase):
    def test_jedi_get_autocomplete_abstra_lib(self):
        completions = jedi_get_autocomplete(CODE + "\nah.sen", 17, 6)
        self.assertEqual(len(completions), 2)

        completion_names = [c["name"] for c in completions]
        self.assertIn("send_json", completion_names)
        self.assertIn("send_response", completion_names)

    def test_jedi_get_autocomplete_builtin(self):
        completions = jedi_get_autocomplete(CODE + "\nrandom.", 17, 7)
        choice_completion = next(c for c in completions if c["name"] == "choice")
        self.assertEqual(len(choice_completion["params"]), 1)

    def test_jedi_help_abstra_lib(self):
        help = jedi_help(CODE, 15, 5)
        self.assertEqual(len(help), 1)
        self.assertEqual(help[0]["name"], "send_json")

    def test_jedi_help_builtin(self):
        help = jedi_help(CODE, 7, 5)
        self.assertEqual(len(help), 1)
        self.assertEqual(help[0]["name"], "print")

    def test_jedi_get_syntax_errors(self):
        errors = jedi_get_syntax_errors(CODE + "\nif:")
        self.assertEqual(
            errors,
            [
                {
                    "line": 17,
                    "column": 2,
                    "until_line": 17,
                    "until_column": 3,
                    "severity": "error",
                    "message": "SyntaxError: invalid syntax",
                }
            ],
        )
