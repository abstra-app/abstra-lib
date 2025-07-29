import math
from random import random
from typing import List

from abstra_internals.repositories.project.project import Stage

from .geometry import Point2D, Rect, Vector2D

# Constantes da simulação
MAX_ACCELERATION = math.inf  # Limite máximo de aceleração
MAX_VELOCITY = 10  # Limite máximo de velocidade

ideal_edge_length = 100.0
node_repulsion_strength = (
    1e5  # Força de repulsão entre nós (re-enabling like TypeScript)
)
attraction_strength = (
    1e-1  # Força de atração entre nós conectados (matching TypeScript)
)
edge_repulsion_strength = (
    0  # Força de repulsão entre nós e arestas (matching TypeScript)
)
damping = 0.9  # Fator de amortecimento para velocidade (matching TypeScript)
noise_size = 1e-2  # Fator de ruído para simulação
stage_width = 200
stage_height = 100


def noise() -> Vector2D:
    return Vector2D((random() - 0.5), (random() - 0.5)).scale(2 * noise_size)


class PhysicsNode:
    def __init__(
        self, position: Point2D, velocity: Vector2D, acceleration: Vector2D, rect: Rect
    ):
        self.position = position
        self.velocity = velocity
        self.acceleration = acceleration
        self.rect = rect


class PhysicsEdge:
    def __init__(self, source: int, target: int):
        self.source = source
        self.target = target


def force_center(nodes: List[PhysicsNode]) -> None:
    average_x = sum(node.position.x for node in nodes) / len(nodes)
    average_y = sum(node.position.y for node in nodes) / len(nodes)
    center = Point2D(average_x, average_y)
    displacement = Point2D(0, 0).sub(center)
    for node in nodes:
        node.position = node.position.plus(displacement)

    assert abs(sum(node.position.x for node in nodes) / len(nodes)) < 1
    assert abs(sum(node.position.y for node in nodes) / len(nodes)) < 1


def apply_forces(nodes: List[PhysicsNode], edges: List[PhysicsEdge]) -> None:
    """
    Apply physics forces to nodes in a force-directed graph layout.

    Args:
        nodes: List of PhysicsNode objects with position, velocity, acceleration, and rect
        edges: List of PhysicsEdge objects with source and target indices
    """

    # Reset acceleration for all nodes
    for node in nodes:
        node.acceleration = Vector2D(0, 0)

    # Apply repulsion forces between nodes
    for i in range(len(nodes)):
        for j in range(i + 1, len(nodes)):
            direction = nodes[i].position.sub(nodes[j].position)
            distance = max(1, nodes[i].rect.distance_to_rect(nodes[j].rect))
            repulsion = direction.norm().scale(
                node_repulsion_strength / (distance * distance)
            )
            nodes[i].acceleration = nodes[i].acceleration.plus(repulsion)
            nodes[j].acceleration = nodes[j].acceleration.minus(repulsion)

    # Apply attraction forces along edges
    for edge in edges:
        source_node = nodes[edge.source]
        target_node = nodes[edge.target]

        direction = source_node.rect.link(target_node.rect).to_delta()
        distance = source_node.rect.distance_to_rect(target_node.rect)
        displacement = distance - ideal_edge_length
        attraction = direction.norm().scale(attraction_strength * displacement)

        source_node.acceleration = source_node.acceleration.plus(attraction)
        target_node.acceleration = target_node.acceleration.minus(attraction)

    # Apply repulsion forces from edges to all nodes
    for edge in edges:
        source_node = nodes[edge.source]
        target_node = nodes[edge.target]

        for node in nodes:
            if node == target_node or node == source_node:
                continue

            direction = source_node.rect.link(target_node.rect)
            distance = node.rect.distance_to_line(direction)

            if distance > 0:
                edge_repulsion = (
                    direction.to_delta()
                    .norm()
                    .scale(edge_repulsion_strength / (distance * distance))
                )
                node.acceleration = node.acceleration.plus(edge_repulsion)

    # Update velocity and position for all nodes
    for node in nodes:
        node.velocity = (
            node.velocity.plus(node.acceleration.plus(noise()).limit(MAX_ACCELERATION))
            .limit(MAX_VELOCITY)
            .scale(damping)
        )
        node.position = node.position.plus(node.velocity)


def simulate_layout(
    stages: List[Stage],
    iterations: int = 100,
):
    """
    Simulate force-directed layout for workflow stages.

    Args:
        stages: List of stage dictionaries with id, position, etc.
        transitions: List of transition dictionaries with sourceStageId, targetStageId
        iterations: Number of physics simulation iterations

    Returns:
        List of updated stage dictionaries with new positions
    """
    # Create a mapping from stage IDs to indices
    stage_id_to_index = {stage.id: i for i, stage in enumerate(stages)}

    # Create physics nodes from stages
    nodes: List[PhysicsNode] = []
    for stage in stages:
        position = Point2D(stage.workflow_position[0], stage.workflow_position[1])
        velocity = Vector2D(0, 0)
        acceleration = Vector2D(0, 0)

        rect = Rect(position, stage_width, stage_height)
        nodes.append(PhysicsNode(position, velocity, acceleration, rect))

    # Create physics edges from transitions
    edges: List[PhysicsEdge] = []
    for stage in stages:
        for transition in stage.workflow_transitions:
            source_id = stage.id
            target_id = transition.target_id

            if source_id in stage_id_to_index and target_id in stage_id_to_index:
                source_idx = stage_id_to_index[source_id]
                target_idx = stage_id_to_index[target_id]
                edges.append(PhysicsEdge(source_idx, target_idx))

    # Run physics simulation
    for _ in range(iterations):
        # Update rect centers to match node positions
        for i, node in enumerate(nodes):
            node.rect.center = node.position

        apply_forces(nodes, edges)
        force_center(nodes)
    # Update stage positions
    for i, stage in enumerate(stages):
        stage.workflow_position = (nodes[i].position.x, nodes[i].position.y)
