from abstra_internals.controllers.main import MainController


class AgentsController:
    url: str

    def __init__(self, controller: MainController):
        self.controller = controller

    def get_agent_connections(self):
        return self.controller.repositories.agents.get_agent_connections()

    def get_is_usage_mode(self):
        return self.controller.repositories.agents.get_is_usage_mode()
