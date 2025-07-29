import math
from typing import List, Optional, Tuple


class Point2D:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def plus(self, vec: "Vector2D") -> "Point2D":
        return Point2D(self.x + vec.dx, self.y + vec.dy)

    def sub(self, p: "Point2D") -> "Vector2D":
        return Vector2D(self.x - p.x, self.y - p.y)

    def scale(self, s: float) -> "Point2D":
        return Point2D(self.x * s, self.y * s)

    def line_to(self, p: "Point2D") -> "Line":
        return Line(self, p)

    def to_vector2d(self) -> "Vector2D":
        return self.sub(Point2D.origin())

    @staticmethod
    def from_number_array(arr: List[float]) -> "Point2D":
        return Point2D(arr[0], arr[1])

    def cast_to_rect(self, rect: "Rect") -> "Point2D":
        edges = rect.edges()
        closest: Optional[Point2D] = None
        min_dist = float("inf")

        for edge in edges:
            intersection = self.line_to(rect.center).intersect(edge)

            if intersection:
                dist = self.sub(intersection).length()
                if dist < min_dist:
                    min_dist = dist
                    closest = intersection

        return closest or self

    @staticmethod
    def origin() -> "Point2D":
        return Point2D(0, 0)


class Vector2D:
    def __init__(self, dx: float, dy: float):
        self.dx = dx
        self.dy = dy

    def norm(self) -> "Vector2D":
        length = self.length()
        if length == 0:
            return Vector2D(0, 0)  # Avoid division by zero
        return Vector2D(self.dx / length, self.dy / length)

    def scale(self, s: float) -> "Vector2D":
        return Vector2D(self.dx * s, self.dy * s)

    def angle(self) -> float:
        return math.atan2(self.dy, self.dx)

    def length(self) -> float:
        return math.sqrt(self.dx * self.dx + self.dy * self.dy)

    def to_number_array(self) -> List[float]:
        return [self.dx, self.dy]

    @staticmethod
    def from_number_array(arr: List[float]) -> "Vector2D":
        return Vector2D(arr[0], arr[1])

    @property
    def data(self) -> Tuple[float, float]:
        return (self.dx, self.dy)

    def plus(self, vec: "Vector2D") -> "Vector2D":
        return Vector2D(self.dx + vec.dx, self.dy + vec.dy)

    def minus(self, vec: "Vector2D") -> "Vector2D":
        return Vector2D(self.dx - vec.dx, self.dy - vec.dy)

    def dot(self, vec: "Vector2D") -> float:
        return self.dx * vec.dx + self.dy * vec.dy

    def cos(self, vec: "Vector2D") -> float:
        dot_product = self.dot(vec)
        lengths_product = self.length() * vec.length()
        return 0 if lengths_product == 0 else dot_product / lengths_product

    def sin(self, vec: "Vector2D") -> float:
        return self.cross(vec) / (self.length() * vec.length())

    def cross(self, vec: "Vector2D") -> float:
        return self.dx * vec.dy - self.dy * vec.dx

    def limit(self, length: float) -> "Vector2D":
        if self.length() <= length:
            return self
        else:
            return self.norm().scale(length)


class Matrix2D:
    def __init__(self, data: List[float]):
        self.data = data

    @staticmethod
    def from_rows(rows: List[List[float]]) -> "Matrix2D":
        return Matrix2D([rows[0][0], rows[0][1], rows[1][0], rows[1][1]])

    @staticmethod
    def from_columns(columns: List[List[float]]) -> "Matrix2D":
        return Matrix2D(
            [
                columns[0][0],
                columns[1][0],
                columns[0][1],
                columns[1][1],
            ]
        )

    def determinant(self) -> float:
        return self.data[0] * self.data[3] - self.data[1] * self.data[2]

    def inverse(self) -> "Matrix2D":
        det = self.determinant()
        if det == 0:
            raise ValueError("Matrix is singular, cannot invert.")
        return Matrix2D(
            [
                self.data[3] / det,
                -self.data[1] / det,
                -self.data[2] / det,
                self.data[0] / det,
            ]
        )

    def mul_vector(self, vec: Vector2D) -> Vector2D:
        return Vector2D(
            self.data[0] * vec.dx + self.data[1] * vec.dy,
            self.data[2] * vec.dx + self.data[3] * vec.dy,
        )

    def mul_matrix(self, other: "Matrix2D") -> "Matrix2D":
        return Matrix2D(
            [
                self.data[0] * other.data[0] + self.data[1] * other.data[2],
                self.data[0] * other.data[1] + self.data[1] * other.data[3],
                self.data[2] * other.data[0] + self.data[3] * other.data[2],
                self.data[2] * other.data[1] + self.data[3] * other.data[3],
            ]
        )


class Line:
    def __init__(self, p0: Point2D, p1: Point2D):
        self.p0 = p0
        self.p1 = p1

    def intersect(self, other: "Line") -> Optional[Point2D]:
        # this.p0 + alpha * (this.p1 - this.p0) = other.p0 + beta * (other.p1 - other.p0)
        # (this.p1 - this.p0) * alpha + (other.p0 - other.p1) * beta = other.p0 - this.p0
        A = Matrix2D.from_columns(
            [
                self.p1.sub(self.p0).to_number_array(),
                other.p0.sub(other.p1).to_number_array(),
            ]
        )
        if A.determinant() == 0:
            return None  # Lines are parallel

        b = other.p0.sub(self.p0)
        result = A.inverse().mul_vector(b)
        alpha, beta = result.data

        if alpha < 0 or alpha > 1 or beta < 0 or beta > 1:
            return None  # Intersection is outside the segment

        return self.p0.plus(self.p1.sub(self.p0).scale(alpha))

    def length(self) -> float:
        return self.p0.sub(self.p1).length()

    def shrink_head(self, amount: float) -> "Line":
        direction = self.p1.sub(self.p0).norm()
        new_p1 = self.p1.plus(direction.scale(-amount))
        return Line(self.p0, new_p1)

    def to_delta(self) -> Vector2D:
        return Vector2D(self.p1.x - self.p0.x, self.p1.y - self.p0.y)

    def distance_to_point(self, p: Point2D) -> float:
        projection_length = (
            self.to_delta().cos(p.sub(self.p0)) * p.sub(self.p0).length()
        )
        before_p0 = projection_length < 0
        after_p1 = projection_length > self.length()

        if before_p0:
            return self.p0.sub(p).length()
        elif after_p1:
            return self.p1.sub(p).length()
        else:
            return abs(self.to_delta().sin(p.sub(self.p0)) * p.sub(self.p0).length())

    def distance_to_line(self, other: "Line") -> float:
        intersection = self.intersect(other)
        if intersection:
            return 0  # Lines intersect

        d1 = self.distance_to_point(other.p0)
        d2 = self.distance_to_point(other.p1)
        return min(
            d1, d2
        )  # Return the minimum distance to the endpoints of the other line


class Rect:
    def __init__(self, center: Point2D, width: float, height: float):
        self.center = center
        self.width = width
        self.height = height

    @staticmethod
    def from_top_left_corner(corner: Point2D, width: float, height: float) -> "Rect":
        return Rect(Point2D(corner.x + width / 2, corner.y + height / 2), width, height)

    def edges(self) -> List[Line]:
        v = Vector2D(0, self.height / 2)
        h = Vector2D(self.width / 2, 0)
        top_left = self.center.plus(h.scale(-1)).plus(v.scale(-1))
        top_right = self.center.plus(h).plus(v.scale(-1))
        bottom_right = self.center.plus(h).plus(v)
        bottom_left = self.center.plus(h.scale(-1)).plus(v)

        return [
            top_left.line_to(top_right),
            top_right.line_to(bottom_right),
            bottom_right.line_to(bottom_left),
            bottom_left.line_to(top_left),
        ]

    def expand_by(self, amount: float) -> "Rect":
        return Rect(self.center, self.width + amount * 2, self.height + amount * 2)

    def link(self, other: "Rect") -> Line:
        p0 = self.center.cast_to_rect(other)
        p1 = other.center.cast_to_rect(self)
        return p1.line_to(p0)

    def contains(self, p: Point2D) -> bool:
        half_width = self.width / 2
        half_height = self.height / 2
        return (
            p.x >= self.center.x - half_width
            and p.x <= self.center.x + half_width
            and p.y >= self.center.y - half_height
            and p.y <= self.center.y + half_height
        )

    @property
    def top_left(self) -> Point2D:
        return Point2D(self.center.x - self.width / 2, self.center.y - self.height / 2)

    def distance_to_rect(self, other: "Rect") -> float:
        return self.link(other).length()

    def distance_to_line(self, line: Line) -> float:
        edges = self.edges()
        min_distance = float("inf")

        for edge in edges:
            distance = edge.distance_to_line(line)
            if distance < min_distance:
                min_distance = distance

        return min_distance
