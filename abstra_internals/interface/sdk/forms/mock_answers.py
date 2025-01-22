from typing import Any, List

from abstra_internals.controllers.sdk_context import SDKContextStore


def mock_answers(test_answers: List[Any]):
    context = SDKContextStore.get_by_thread()
    context.form_sdk.client.context.is_test = True
    context.form_sdk.client.context.test_answers = test_answers
