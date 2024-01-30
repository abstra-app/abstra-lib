import os
from typing import Dict
from unittest import TestCase
from .env_masker import EnvMasker


def set_env(env: Dict[str, str]) -> None:
    for k, v in env.items():
        os.environ[k] = v


class TestImportAsNew(TestCase):
    def tearDown(self) -> None:
        os.environ.clear()

    def test_values(self):
        set_env({"ENV1": "brown", "ENV2": "FOX", "ENV3": "1892"})
        masker = EnvMasker(min_value_size=2)
        masked = masker.mask("the quick brown fox jumps over the lazy dog - 1892")
        self.assertEqual(
            masked, "the quick <MASKED> <MASKED> jumps over the lazy dog - <MASKED>"
        )

    def test_small_values(self):
        set_env({"ENV1": "fox", "ENV2": "LAZY", "ENV3": "18", "ENV4": "jump"})
        masker = EnvMasker(min_value_size=4)
        masked = masker.mask("the quick brown fox jumps over the lazy dog - 1892")
        self.assertEqual(
            masked, "the quick brown fox <MASKED>s over the <MASKED> dog - 1892"
        )

    def test_multiline(self):
        set_env(
            {
                "ENV1": """---- BEGIN SSH2 PUBLIC KEY ----"""
                + """AAAAB3NzaC1yc2EAAAABJQAAAQB/nAmOjTmezNUDKYvEeIRf2YnwM9/uUG1d0BYs"""
                + """c8/tRtx+RGi7N2lUbp728MXGwdnL9od4cItzky/zVdLZE2cycOa18xBK9cOWmcKS"""
                + """0A8FYBxEQWJ/q9YVUgZbFKfYGaGQxsER+A0w/fX8ALuk78ktP31K69LcQgxIsl7r"""
                + """NzxsoOQKJ/CIxOGMMxczYTiEoLvQhapFQMs3FL96didKr/QbrfB1WT6s3838SEaX"""
                + """fgZvLef1YB2xmfhbT9OXFE3FXvh2UPBfN+ffE7iiayQf/2XR+8j4N4bW30DiPtOQ"""
                + """---- END SSH2 PUBLIC KEY ----"""
            }
        )
        masker = EnvMasker(min_value_size=4)
        masked = masker.mask(f"credentials: {os.environ['ENV1']}")
        self.assertEqual(masked, "credentials: <MASKED>")
