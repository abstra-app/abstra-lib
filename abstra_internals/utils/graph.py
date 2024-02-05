from pydantic.dataclasses import dataclass
from typing import Dict, List


@dataclass
class Node:
    id: str


@dataclass
class Edge:
    source_id: str
    target_id: str


@dataclass
class NodeAdjency:
    points_to: List[Node]
    is_pointed_by: List[Node]


@dataclass
class Graph:
    cache: Dict[str, NodeAdjency]

    @staticmethod
    def from_primitives(nodes: List[Node], edges: List[Edge]):
        cache: Dict[str, NodeAdjency] = {}
        for node in nodes:
            cache[node.id] = NodeAdjency(points_to=[], is_pointed_by=[])

        for edge in edges:
            cache[edge.source_id].points_to.append(Node(id=edge.target_id))
            cache[edge.target_id].is_pointed_by.append(Node(id=edge.source_id))

        return Graph(cache=cache)

    def next_to(self, node_id: str) -> List[Node]:
        return self.cache[node_id].points_to

    def previous_to(self, node_id: str) -> List[Node]:
        return self.cache[node_id].is_pointed_by

    def all_neighbors(self, node_id: str) -> List[Node]:
        return self.next_to(node_id) + self.previous_to(node_id)
