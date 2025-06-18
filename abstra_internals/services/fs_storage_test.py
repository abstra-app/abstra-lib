import json

from abstra_internals.services.fs_storage import FileSystemStorage
from abstra_internals.utils.serializable import Serializable
from tests.fixtures import BaseTest


class MockModel(Serializable):
    name: str
    age: int


class TestFileManager(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        mp_context = self.repositories.mp_context.get_context()
        self.manager = FileSystemStorage[MockModel](
            mp_context, directory="test", model=MockModel
        )

    def test_save_and_load(self):
        test_data = MockModel(name="John", age=30)
        self.manager.save("test_id", test_data)

        loaded_data = self.manager.load("test_id")
        assert loaded_data is not None
        assert loaded_data.name == "John"
        assert loaded_data.age == 30

    def test_load_all(self):
        test_data1 = MockModel(name="John", age=30)
        test_data2 = MockModel(name="Jane", age=25)

        self.manager.save("test_id_1", test_data1)
        self.manager.save("test_id_2", test_data2)

        loaded_data = self.manager.load_all()
        assert len(loaded_data) == 2

    def test_delete(self):
        test_data = MockModel(name="John", age=30)
        self.manager.save("test_id", test_data)

        self.manager.delete("test_id")
        loaded_data = self.manager.load("test_id")
        assert loaded_data is None

    def test_clear(self):
        test_data1 = MockModel(name="John", age=30)
        test_data2 = MockModel(name="Jane", age=25)

        self.manager.save("test_id_1", test_data1)
        self.manager.save("test_id_2", test_data2)

        self.manager.clear()
        loaded_data = self.manager.load_all()
        assert len(loaded_data) == 0

    def test_load_nonexistent(self):
        loaded_data = self.manager.load("nonexistent_id")
        assert loaded_data is None

    def test_save_invalid_data(self):
        invalid_data = {"name": "John", "age": "thirty"}

        file_path = self.manager._get_file_path("test_id")
        with file_path.open("w", encoding="utf-8") as f:
            json.dump(invalid_data, f, indent=4)

        loaded_data = self.manager.load("test_id")
        assert loaded_data is None
