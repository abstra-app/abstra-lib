import unittest


from abstra_internals.interface.cli.version import compare_versions


class TestVersionStatus(unittest.TestCase):
    def test_outdated_version(self):
        current = "1.0.0"
        latest_1 = "1.0.1"
        latest_2 = "1.1.0"
        latest_3 = "2.0.0"

        self.assertEqual(compare_versions(current, latest_1), "out-of-date")
        self.assertEqual(compare_versions(current, latest_2), "out-of-date")
        self.assertEqual(compare_versions(current, latest_3), "out-of-date")

    def test_up_to_date_version(self):
        current = "1.0.1"
        latest = "1.0.1"

        self.assertEqual(compare_versions(current, latest), "up-to-date")

    def test_outdated_latest(self):
        current = "1.1.1"
        latest_1 = "1.1.0"
        latest_2 = "1.0.1"
        latest_3 = "0.0.9"

        self.assertEqual(compare_versions(current, latest_1), "latest-is-outdated")
        self.assertEqual(compare_versions(current, latest_2), "latest-is-outdated")
        self.assertEqual(compare_versions(current, latest_3), "latest-is-outdated")

    def test_unknown_version(self):
        current = "1.0.1"
        latest = "1...."  # invalid version
        another_invalid_latest = ""

        self.assertEqual(compare_versions(current, latest), "unknown")
        self.assertEqual(compare_versions(another_invalid_latest, latest), "unknown")
