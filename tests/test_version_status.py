import unittest


from abstra_internals.interface.cli.version import compare_versions, VersionStatus


class TestVersionStatus(unittest.TestCase):
    def test_outdated_version(self):
        current = "1.0.0"
        latest_1 = "1.0.1"
        latest_2 = "1.1.0"
        latest_3 = "2.0.0"

        self.assertEqual(compare_versions(current, latest_1), VersionStatus.OUT_OF_DATE)
        self.assertEqual(compare_versions(current, latest_2), VersionStatus.OUT_OF_DATE)
        self.assertEqual(compare_versions(current, latest_3), VersionStatus.OUT_OF_DATE)

    def test_up_to_date_version(self):
        current = "1.0.1"
        latest = "1.0.1"

        self.assertEqual(compare_versions(current, latest), VersionStatus.UP_TO_DATE)

    def test_outdated_latest(self):
        current = "1.1.1"
        latest_1 = "1.1.0"
        latest_2 = "1.0.1"
        latest_3 = "0.0.9"

        self.assertEqual(
            compare_versions(current, latest_1), VersionStatus.LATEST_IS_OUTDATED
        )
        self.assertEqual(
            compare_versions(current, latest_2), VersionStatus.LATEST_IS_OUTDATED
        )
        self.assertEqual(
            compare_versions(current, latest_3), VersionStatus.LATEST_IS_OUTDATED
        )

    def test_unknown_version(self):
        current = "1.0.1"
        invalid_version_1 = "1...."
        invalid_version_2 = ""

        self.assertEqual(
            compare_versions(current, invalid_version_1), VersionStatus.UNKNOWN
        )
        self.assertEqual(
            compare_versions(invalid_version_2, current), VersionStatus.UNKNOWN
        )
