from .static_execution import StaticExecution
from .execution import RequestData


class JobExecution(StaticExecution):
    def setup_context(self, request: RequestData):
        self.init_stage_run()
