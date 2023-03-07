from .widget_base import Input


class KanbanBoardInput(Input):
    type = "kanban-board-input"

    def __init__(self, key: str, **kwargs):
        super().__init__(key)
        self.initial_value = kwargs.get("initial_value", "")
        self.label = kwargs.get("label", None)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "initialValue": self.initial_value,
        }

    def convert_answer(self, board: dict) -> str:
        return board
