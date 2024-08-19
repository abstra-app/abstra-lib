class UnboundSDK(Exception):
    def __init__(self):
        self.message = "Files importing Abstra SDK must be run from the Abstra Editor."
        super().__init__(self.message)


class UnsetThread(Exception):
    def __init__(self):
        self.message = ""
        super().__init__(self.message)


class ThreadAlreadyRunning(Exception):
    def __init__(self):
        self.message = "Thread already running."
        super().__init__(self.message)


class ThreadNotFound(Exception):
    def __init__(self):
        self.message = "Thread not found for the given filter."
        super().__init__(self.message)


class GetUserFailed(Exception):
    def __init__(self):
        self.message = "Failed to get the current user."
        super().__init__(self.message)


class IncompatibleStage(Exception):
    pass


class MissingDependencyError(Exception):
    def __init__(self, package: str):
        self.message = f"The package {package} is required to use this feature. Please install it by running `pip install {package}` and add it to your requirements."
        super().__init__(self.message)
