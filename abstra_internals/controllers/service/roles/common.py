from abstra_internals.repositories.factory import Repositories


class RoleCommonController:
    def __init__(self, repos: Repositories):
        self.repos = repos
