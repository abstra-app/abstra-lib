import json
from typing import Dict

from abstra_internals.contracts_generated import (
    CloudApiCliAiV2PromptPostRequestMessages,
    CloudApiCliAiV2PromptPostRequestMessagesItem,
    CloudApiCliAiV2PromptPostRequestMessagesItemContentItemText,
    CloudApiCliAiV2PromptPostRequestToolsItemFunction,
)
from abstra_internals.repositories.factory import Repositories
from abstra_internals.utils.string import to_snake_case


def build_function_tool_call(
    format: Dict[str, object],
) -> CloudApiCliAiV2PromptPostRequestToolsItemFunction:
    variable_names = list(format.keys())
    description = "get_" + "_and_".join(variable_names)
    return CloudApiCliAiV2PromptPostRequestToolsItemFunction(
        name="get_parameters",
        description=to_snake_case(description),
        parameters={
            "type": "object",
            "properties": format,
            "required": variable_names,
        },
    )


class AiWs:
    seq: int
    repos: Repositories
    messages: CloudApiCliAiV2PromptPostRequestMessages = []
    url_params: Dict[str, str]
    prompt: str

    def __init__(
        self, repos: Repositories, prompt_text: str, url_params: Dict[str, str]
    ) -> None:
        self.repos = repos
        self.prompt = prompt_text
        self.url_params = url_params
        self.seq = 0

    def send(self, message: str):
        if json.loads(message).get("type") not in [
            "form:update-page",
            "form:mount-page",
            "form:render",
        ]:
            return
        self.messages.append(
            CloudApiCliAiV2PromptPostRequestMessagesItem(
                role="user",
                content=[
                    CloudApiCliAiV2PromptPostRequestMessagesItemContentItemText(
                        type="text", text=message
                    )
                ],
            )
        )

    def receive(self) -> str:
        if len(self.messages) == 0:
            return json.dumps(
                {
                    "type": "execution:start",
                }
            )
        else:
            initial_prompt = "\n".join(
                [
                    "You are an AI assistant filling a form.",
                    "The user provided the following prompt:",
                    self.prompt,
                    "Please, answer the last question with the correct answer for each key",
                    "Here is the last message from the user:",
                    str(self.messages[-1].content),
                ]
            )
            from abstra.ai import prompt

            ans = prompt(
                initial_prompt,
                format={
                    "type": ["form:navigation"],
                    "payload": {
                        "type": "object",
                        "additionalProperties": True,
                        "description": "The answer for each input field in the form. It should be a Record which keys are the 'key's properties in the last message from the user.",
                    },
                },
            )
            self.messages.append(
                CloudApiCliAiV2PromptPostRequestMessagesItem(
                    role="assistant",
                    content=[
                        CloudApiCliAiV2PromptPostRequestMessagesItemContentItemText(
                            type="text", text=json.dumps(ans)
                        )
                    ],
                )
            )
            self.seq += 1
            return json.dumps({**ans, "seq": self.seq})

    def close(self):
        self.messages.clear()
