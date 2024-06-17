import json
import unittest

from pydantic.dataclasses import dataclass

from abstra_internals.utils.file_store import FileStore
from tests.fixtures import clear_dir, init_dir


@dataclass
class MockModel:
    name: str
    age: int

    def to_dto(self):
        return self.__dict__

    @staticmethod
    def from_dto(dto):
        return MockModel(**dto)


class TestFileStore(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.file_store = FileStore[MockModel](directory="test", model=MockModel)

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_save_and_load(self):
        test_data = MockModel(name="John", age=30)
        self.file_store.save("test_id", test_data)

        loaded_data = self.file_store.load("test_id")
        assert loaded_data is not None
        assert loaded_data.name == "John"
        assert loaded_data.age == 30

    def test_load_all(self):
        test_data1 = MockModel(name="John", age=30)
        test_data2 = MockModel(name="Jane", age=25)

        self.file_store.save("test_id_1", test_data1)
        self.file_store.save("test_id_2", test_data2)

        loaded_data = self.file_store.load_all()
        assert len(loaded_data) == 2

    def test_delete(self):
        test_data = MockModel(name="John", age=30)
        self.file_store.save("test_id", test_data)

        self.file_store.delete("test_id")
        loaded_data = self.file_store.load("test_id")
        assert loaded_data is None

    def test_clear(self):
        test_data1 = MockModel(name="John", age=30)
        test_data2 = MockModel(name="Jane", age=25)

        self.file_store.save("test_id_1", test_data1)
        self.file_store.save("test_id_2", test_data2)

        self.file_store.clear()
        loaded_data = self.file_store.load_all()
        assert len(loaded_data) == 0

    def test_load_nonexistent(self):
        loaded_data = self.file_store.load("nonexistent_id")
        assert loaded_data is None

    def test_save_invalid_data(self):
        invalid_data = {"name": "John", "age": "thirty"}

        file_path = self.file_store._get_file_path("test_id")
        with file_path.open("w", encoding="utf-8") as f:
            json.dump(invalid_data, f, indent=4)

        loaded_data = self.file_store.load("test_id")
        assert loaded_data is None
