class UnboundSDK(Exception):
    def __init__(self):
        self.message = "Files importing Abstra SDK must be run from the Abstra Editor."
        super().__init__(self.message)


class GetUserFailed(Exception):
    def __init__(self):
        self.message = "Failed to get the current user."
        super().__init__(self.message)


class IncompatibleSDK(Exception):
    pass


class IncompatibleScriptSDK(IncompatibleSDK):
    def __init__(self):
        self.message = "`abstra.scripts` can only be used in script stages."
        super().__init__(self.message)


class MissingDependencyError(Exception):
    def __init__(self, package: str):
        self.message = f"The package {package} is required to use this feature. Please install it by running `pip install {package}` and add it to your requirements."
        super().__init__(self.message)


class ExecutionNotFound(Exception):
    pass


class TaskWriteAttempt(Exception):
    def __init__(self):
        self.message = "Task is read-only"
        super().__init__(self.message)


class TaskNotWaiting(Exception):
    def __init__(self):
        self.message = "Task is not in waiting status anymore"
        super().__init__(self.message)


class TaskInvalidStatus(Exception):
    def __init__(self, status: str):
        self.message = f"Can't update task to {status}"
        super().__init__(self.message)


class BadSendResponse(Exception):
    pass
