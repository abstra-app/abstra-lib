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


class IncompatibleStage(Exception):
    pass
