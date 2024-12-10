from pydantic import BaseModel, ConfigDict, alias_generators


class Serializable(BaseModel):
    model_config = ConfigDict(
        alias_generator=alias_generators.to_camel, populate_by_name=True
    )

    def dump(self):
        return super().model_dump(by_alias=True)

    def dump_json(self, indent=4):
        return super().model_dump_json(by_alias=True, indent=indent)
