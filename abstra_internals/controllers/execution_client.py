import abc


class ExecutionClient(abc.ABC):
    @abc.abstractmethod
    def handle_lock_failed(self, status: str) -> None:
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_failure(self, e: Exception) -> None:
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_success(self) -> None:
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_start(self, execution_id: str):
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_unset_thread(self):
        raise NotImplementedError()


# TODO: inherit all clients from BasicClient - same constructor
class BasicClient(ExecutionClient):
    def handle_lock_failed(self, status: str) -> None:
        pass

    def handle_failure(self, e: Exception) -> None:
        pass

    def handle_success(self) -> None:
        pass

    def handle_start(self, execution_id: str):
        pass

    def handle_unset_thread(self):
        pass
