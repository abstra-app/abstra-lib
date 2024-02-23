import unittest
import ast
from typing import List
from .code import function_called_args, subscript_called_args

# Include the implementation of FunctionCallVisitor and function_called_args here (not repeated to save space)


class TestFunctionCalledArgs(unittest.TestCase):
    def test_import_from_direct_call(self):
        code = """
from os import getenv

getenv("FOO_BAR")
"""
        result = function_called_args(code, ["os"], "getenv")
        assert result is not None
        assert len(result) == 1
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO_BAR"

    def test_import_from_as_no_call(self):
        code = """
from os import getenv as alias

getenv("FOO_BAR")
"""
        result = function_called_args(code, ["os"], "getenv")
        assert result is None

    def test_import_from_as_call(self):
        code = """
from os import getenv as alias

alias("FOO_BAR")
"""
        result = function_called_args(code, ["os"], "getenv")
        assert result is not None
        assert len(result) == 1
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO_BAR"

    def test_import_direct_call(self):
        code = """
import os

os.getenv("FOO_BAR")
"""
        result = function_called_args(code, ["os"], "getenv")
        assert result is not None
        assert len(result) == 1
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO_BAR"

    def test_import_as_no_call(self):
        code = """
import os as alias

os.getenv("FOO_BAR")
"""
        result = function_called_args(code, ["os"], "getenv")
        assert result is None

    def test_import_as_call(self):
        code = """
import os as alias

alias.getenv("FOO_BAR")
"""
        result = function_called_args(code, ["os"], "getenv")
        assert result is not None
        assert len(result) == 1
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO_BAR"

    def test_multiple_calls(self):
        code = """
import os as alias

alias.getenv("FOO")
alias.getenv("BAR")
"""
        result = function_called_args(code, ["os"], "getenv")
        assert result is not None
        assert len(result) == 2
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO"
        assert isinstance(result[1], list)
        assert len(result[1]) == 1
        assert isinstance(result[1][0], ast.Constant)
        assert result[1][0].value == "BAR"

    def test_empty_code(self):
        code = ""
        result = function_called_args(code, ["os"], "getenv")
        assert result is None

    def test_import_from_no_call(self):
        code = """
from os import getenv

os.getenv("FOO_BAR")
"""
        result = function_called_args(code, ["os"], "getenv")
        assert result is None

    def test_import_wildcard(self):
        code = """
from os import *

getenv("FOO_BAR")
"""
        result = function_called_args(code, ["os"], "getenv")
        assert result is not None
        assert len(result) == 1
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO_BAR"

    def test_nested_import_with_alias(self):
        code = """
import abstra.workflows as aw

aw.get_data("FOO_BAR")
"""
        result = function_called_args(code, ["abstra", "workflows"], "get_data")
        assert result is not None
        assert len(result) == 1
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO_BAR"


class TestSubscriptCalledArgs(unittest.TestCase):
    def test_import_direct_subscript(self):
        code = """
import os

os.environ["FOO_BAR"]
"""
        result = subscript_called_args(code, ["os"], "environ")
        assert result is not None
        assert len(result) == 1
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO_BAR"

    def test_import_from_direct_subscript(self):
        code = """
from os import environ

environ["FOO_BAR"]
"""
        result = subscript_called_args(code, ["os"], "environ")
        assert result is not None
        assert len(result) == 1
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO_BAR"

    def test_import_as_subscript_no_call(self):
        code = """
import os as alias

os.environ["FOO_BAR"]
"""
        result = subscript_called_args(code, ["os"], "environ")
        # Since os is aliased to alias but os.environ is directly accessed
        # Depending on implementation, this might not be caught
        assert result is None

    def test_import_as_subscript_call(self):
        code = """
import os as alias

alias.environ["FOO_BAR"]
"""
        result = subscript_called_args(code, ["os"], "environ")
        assert result is not None
        assert len(result) == 1
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO_BAR"

    def test_empty_code(self):
        code = ""
        result = subscript_called_args(code, ["os"], "environ")
        assert result is None

    def test_multiple_subscript_calls(self):
        code = """
import os as alias

alias.environ["FOO"]
alias.environ["BAR"]
"""
        result = subscript_called_args(code, ["os"], "environ")
        assert result is not None
        assert len(result) == 2
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO"
        assert isinstance(result[1], list)
        assert len(result[1]) == 1
        assert isinstance(result[1][0], ast.Constant)
        assert result[1][0].value == "BAR"

    def test_subscript_no_call(self):
        code = """
from os import environ

os.environ["FOO_BAR"]
"""
        result = subscript_called_args(code, ["os"], "environ")
        # If the setup does not interpret os.environ as a call to an imported name,
        # it won't return arguments for it
        assert result is None

    # This test is arguably not directly applicable as wildcards don't affect the way
    # subscript operations are identified in Python code the same way they do with function calls.
    # But if your SubscriptVisitor does handle wildcards in such a way:
    def test_import_wildcard(self):
        code = """
from os import *

environ["FOO_BAR"]
"""
        result = subscript_called_args(code, ["os"], "environ")
        assert result is not None
        assert len(result) == 1
        assert isinstance(result[0], list)
        assert len(result[0]) == 1
        assert isinstance(result[0][0], ast.Constant)
        assert result[0][0].value == "FOO_BAR"
