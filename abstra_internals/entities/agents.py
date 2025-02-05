from typing import List, Optional

from pydantic import BaseModel
from pydantic.alias_generators import to_camel, to_snake


class AgentTaskSchema(BaseModel):
    task_type: str
    task_payload_schema: Optional[dict]


class AgentEntrypoint(BaseModel):
    title: str
    client_stage_id: str
    input_schemas: Optional[List[AgentTaskSchema]]
    output_schemas: Optional[List[AgentTaskSchema]]

    @staticmethod
    def from_camel(data: dict):
        snake_data = {to_snake(key): value for key, value in data.items()}
        return AgentEntrypoint.model_validate(snake_data)

    def to_camel(self):
        return {to_camel(key): value for key, value in self.model_dump().items()}


class ConnectionModel(BaseModel):
    token: str
    client_project_id: str
    client_stage_id: str
    client_task_url: str
    agent_project_id: str
    agent_stage_id: str

    @staticmethod
    def from_camel(data: dict):
        snake_data = {to_snake(key): value for key, value in data.items()}
        return ConnectionModel.model_validate(snake_data)


class AgentModel(BaseModel):
    project_id: str
    tasks_url: str


class SignProofResponse(BaseModel):
    signedProof: str
