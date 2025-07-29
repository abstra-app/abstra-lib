from unittest import TestCase

from .geometry import Matrix2D, Point2D, Rect


class TestMatrix2D(TestCase):
    def test_inverse_identity(self):
        """Test inverse of identity matrix"""
        identity = Matrix2D.from_rows(
            [
                [1, 0],
                [0, 1],
            ]
        )
        inverse = identity.inverse()
        expected = Matrix2D.from_rows(
            [
                [1, 0],
                [0, 1],
            ]
        )
        for i, value in enumerate(inverse.data):
            self.assertAlmostEqual(value, expected.data[i], places=7)

    def test_determinant_identity(self):
        """Test determinant of identity matrix"""
        identity = Matrix2D.from_rows(
            [
                [1, 0],
                [0, 1],
            ]
        )
        det = identity.determinant()
        self.assertEqual(det, 1)


class TestPoint2D(TestCase):
    def test_cast_to_rect_from_top(self):
        """Test casting point to rectangle from the top"""
        p = Point2D(0, 100)
        rect = Rect(Point2D(0, 0), 10, 10)
        result = p.cast_to_rect(rect)
        self.assertEqual(result.x, 0)
        self.assertEqual(result.y, 5)

    def test_cast_to_rect_from_bottom(self):
        """Test casting point to rectangle from the bottom"""
        p = Point2D(0, -100)
        rect = Rect(Point2D(0, 0), 10, 10)
        result = p.cast_to_rect(rect)
        self.assertEqual(result.x, 0)
        self.assertEqual(result.y, -5)


class TestEdge(TestCase):
    def test_intersect_parallel_lines(self):
        """Test intersection of parallel lines"""
        line1 = Point2D(0, 0).line_to(Point2D(10, 0))
        line2 = Point2D(0, 1).line_to(Point2D(10, 1))
        intersection = line1.intersect(line2)
        self.assertIsNone(intersection)

    def test_intersect_crossing_lines(self):
        """Test intersection of crossing lines"""
        line1 = Point2D(0, 0).line_to(Point2D(10, 10))
        line2 = Point2D(0, 10).line_to(Point2D(10, 0))
        intersection = line1.intersect(line2)
        self.assertIsNotNone(intersection)
        if intersection:  # Type guard for None check
            self.assertEqual(intersection.x, 5)
            self.assertEqual(intersection.y, 5)


class TestRect(TestCase):
    def test_link_from_top(self):
        """Test linking rectangles from the top"""
        r1 = Rect(Point2D(0, 0), 10, 10)
        r2 = Rect(Point2D(0, 100), 10, 10)
        link = r1.link(r2)
        self.assertAlmostEqual(link.p0.x, 0, places=7)
        self.assertAlmostEqual(link.p0.y, 5, places=7)
        self.assertAlmostEqual(link.p1.x, 0, places=7)
        self.assertAlmostEqual(link.p1.y, 95, places=7)
        self.assertAlmostEqual(link.length(), 90, places=7)

    def test_link_from_left(self):
        """Test linking rectangles from the left"""
        r1 = Rect(Point2D(0, 0), 20, 10)
        r2 = Rect(Point2D(-100, 0), 20, 10)
        link = r1.link(r2)
        self.assertAlmostEqual(link.p0.x, -10, places=7)
        self.assertAlmostEqual(link.p0.y, 0, places=7)
        self.assertAlmostEqual(link.p1.x, -90, places=7)
        self.assertAlmostEqual(link.p1.y, 0, places=7)
        self.assertAlmostEqual(link.length(), 80, places=7)

    def test_link_corner_to_corner(self):
        """Test linking rectangles corner to corner"""
        r1 = Rect(Point2D(0, 0), 10, 10)
        r2 = Rect(Point2D(100, 100), 10, 10)
        link = r1.link(r2)
        self.assertAlmostEqual(link.p0.x, 5, places=7)
        self.assertAlmostEqual(link.p0.y, 5, places=7)
        self.assertAlmostEqual(link.p1.x, 95, places=7)
        self.assertAlmostEqual(link.p1.y, 95, places=7)

    def test_link_corner_to_corner_no_squares(self):
        """Test linking non-square rectangles corner to corner"""
        x = -8
        while x < 8:
            r1 = Rect(Point2D(0, 0), 4, 2)
            r2 = Rect(Point2D(x, 4), 4, 2)
            link = r1.link(r2)
            self.assertAlmostEqual(link.p0.y, 1, places=7)
            self.assertAlmostEqual(link.p1.y, 3, places=7)
            x += 0.1

    def test_edges_returns_edges(self):
        """Test that edges() returns correct edges"""
        rect = Rect(Point2D(0, 0), 10, 10)
        edges = rect.edges()

        # Expected edges
        e1 = Point2D(-5, -5).line_to(Point2D(5, -5))
        e2 = Point2D(5, -5).line_to(Point2D(5, 5))
        e3 = Point2D(5, 5).line_to(Point2D(-5, 5))
        e4 = Point2D(-5, 5).line_to(Point2D(-5, -5))

        expected_edges = [e1, e2, e3, e4]

        self.assertEqual(len(edges), 4)

        # Check that each expected edge is found in the actual edges
        for expected_edge in expected_edges:
            found = False
            for edge in edges:
                if (
                    edge.p0.sub(expected_edge.p0).length() < 1e-3
                    and edge.p1.sub(expected_edge.p1).length() < 1e-3
                ):
                    found = True
                    break
            self.assertTrue(
                found,
                f"Expected edge from {expected_edge.p0.x},{expected_edge.p0.y} to {expected_edge.p1.x},{expected_edge.p1.y} not found",
            )
