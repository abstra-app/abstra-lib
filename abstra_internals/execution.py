from abstra_internals.controllers.sdk.sdk_context import SDKContextStore


def get_execution_id() -> str:
    """
    Get the execution ID of the current execution.
    """
    return SDKContextStore.get_execution().id
