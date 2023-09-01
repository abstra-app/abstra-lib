from ..widget_base import Input
from dataclasses import dataclass
from typing import List, Optional
from uuid import uuid4 as uuid


@dataclass
class KanbanStage:
    key: str
    label: str

    @staticmethod
    def make(data):
        if isinstance(data, str):
            return KanbanStage(key=data, label=data)
        elif isinstance(data, dict):
            return KanbanStage(
                key=data.get("key", str(uuid())), label=data.get("label", None)
            )
        elif isinstance(data, KanbanStage):
            return data

    def to_dict(self):
        return {"key": self.key, "label": self.label}


@dataclass
class KanbanTag:
    key: str
    label: str

    @staticmethod
    def make(data):
        if isinstance(data, str):
            return KanbanTag(key=data, label=data)
        elif isinstance(data, dict):
            return KanbanTag(
                key=data.get("key", str(uuid())), label=data.get("label", None)
            )
        elif isinstance(data, KanbanTag):
            return data

    def to_dict(self):
        return {"key": self.key, "label": self.label}


@dataclass
class KanbanCard:
    key: str
    title: Optional[str]
    text: Optional[str]
    tags: List[KanbanTag]
    stageKey: str

    @staticmethod
    def make(data):
        if isinstance(data, str):
            return KanbanCard(key=data, title=data, text=None, tags=[], stageKey=None)
        elif isinstance(data, dict):
            return KanbanCard(
                key=data.get("key", str(uuid())),
                title=data.get("title", None),
                text=data.get("text", None),
                tags=map(KanbanTag.make, data.get("tags", [])),
                stageKey=data.get("stageKey", None),
            )
        elif isinstance(data, KanbanCard):
            return data

    def to_dict(self):
        return {
            "key": self.key,
            "title": self.title,
            "text": self.text,
            "tags": [tag.to_dict() for tag in self.tags],
            "stageKey": self.stageKey,
        }


class KanbanBoardInput(Input):
    type = "kanban-board-input"

    def __init__(self, key: str, **kwargs):
        super().__init__(key)
        self.set_props(kwargs)

    def set_props(self, kwargs):
        self.label = kwargs.get("label", None)
        self.disabled = kwargs.get("disabled", False)
        self.stages = list(
            map(
                KanbanStage.make,
                kwargs.get(
                    "stages",
                    [
                        KanbanStage.make("To-Do"),
                        KanbanStage.make("Doing"),
                        KanbanStage.make("Done"),
                    ],
                ),
            )
        )
        self.set_value(kwargs.get("initial_value", []))

    def set_value(self, value):
        self.value = list(map(KanbanCard.make, value or []))

    def serialize_value(self):
        if self.value is None:
            return []
        return [card.to_dict() for card in self.value]

    def render(self, context: dict):
        stages = [stage.to_dict() for stage in self.stages]
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "value": self.serialize_value(),
            "stages": stages,
            "disabled": self.disabled,
            "errors": self.errors,
        }
