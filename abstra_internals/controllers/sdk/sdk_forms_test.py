from abstra_internals.controllers.sdk.sdk_forms import FormSDKController
from tests.fixtures import BaseTest


class TestFormSDKController(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        mockClient = {}
        mockUsersRepository = {}
        self.controller = FormSDKController(mockClient, mockUsersRepository)  # type: ignore

    def test_reuse(self):
        calls = 0

        def func(a, b, *, c):
            nonlocal calls
            calls += 1
            return a + b + c

        result_a = self.controller.reuse(func, 1, 2, c=3)
        result_b = self.controller.reuse(func, 1, 2, c=3)
        self.assertEqual(result_a, result_b)
        self.assertEqual(calls, 1)

        self.assertEqual(self.controller.reuse(func, 1, 2, c=4), 7)
        self.assertEqual(calls, 2)
