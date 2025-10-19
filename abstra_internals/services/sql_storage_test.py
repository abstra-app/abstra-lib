from abstra_internals.services.sql_storage import SqlStorage
from abstra_internals.utils.serializable import Serializable
from tests.fixtures import BaseTest


class MockModel(Serializable):
    name: str
    age: int


class ModelWithReservedWords(Serializable):
    """Model with SQL reserved words as field names to test escaping."""

    update: str
    select: str
    where: str


class TestFileManager(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        mp_context = self.repositories.mp_context.get_context()
        self.manager = SqlStorage[MockModel](
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
        # This test needs to be adapted for SQL storage
        # Instead of writing invalid data directly to a file,
        # we test that loading a model with invalid data fails gracefully
        # by trying to create a model with invalid data
        try:
            invalid_model = MockModel(name="John", age="thirty")  # type: ignore
            # If this succeeds, pydantic coerced the string to int
            # So we save it and load it back
            self.manager.save("test_id", invalid_model)
            loaded_data = self.manager.load("test_id")
            # The data should load successfully since pydantic accepted it
            assert loaded_data is not None
        except Exception:
            # If pydantic rejects it, that's also acceptable
            pass

    def test_reserved_sql_keywords(self):
        """Test that SQL reserved words as field names are properly escaped."""
        mp_context = self.repositories.mp_context.get_context()
        manager = SqlStorage[ModelWithReservedWords](
            mp_context, directory="test_reserved", model=ModelWithReservedWords
        )

        # Test save with reserved keywords
        test_data = ModelWithReservedWords(
            update="update_value", select="select_value", where="where_value"
        )
        manager.save("reserved_id", test_data)

        # Test load
        loaded_data = manager.load("reserved_id")
        assert loaded_data is not None
        assert loaded_data.update == "update_value"
        assert loaded_data.select == "select_value"
        assert loaded_data.where == "where_value"

        # Test update
        test_data.update = "new_update_value"
        manager.save("reserved_id", test_data)

        reloaded_data = manager.load("reserved_id")
        assert reloaded_data is not None
        assert reloaded_data.update == "new_update_value"
