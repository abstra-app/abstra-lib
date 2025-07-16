import json
import os
from time import sleep
from typing import TYPE_CHECKING, List, Optional, Union

from pydantic import BaseModel

from abstra.ai import prompt
from abstra.logging import logger

from .drive_commands import commands
from .json_schema import literal, object

if TYPE_CHECKING:
    from selenium.webdriver.remote.webdriver import WebDriver


def command_schema(name: str, params: dict, description: str):
    return {
        "type": "object",
        "description": description,
        "properties": {
            "name": literal(name),
            "params": params,
        },
        "required": ["name", "params"],
    }


class ReActStep(BaseModel):
    thought: Optional[str] = None
    action: Optional[str] = None
    observation: Optional[str] = None


class AiState(BaseModel):
    query: Optional[str] = None
    steps: List[ReActStep] = []
    current_step: int = 0

    @classmethod
    def start(cls, query: str):
        return cls(query=query, steps=[], current_step=1)

    def add_thought(self, thought: str):
        if len(self.steps) == 0 or self.steps[-1].thought is not None:
            self.steps.append(ReActStep(thought=thought))
        else:
            self.steps[-1].thought = thought

    def add_action(self, action: str):
        if len(self.steps) == 0:
            self.steps.append(ReActStep(action=action))
        else:
            self.steps[-1].action = action

    def add_observation(self, observation: str):
        if len(self.steps) > 0:
            self.steps[-1].observation = observation

    def to_prompt(self) -> str:
        trajectory_parts = []
        for i, step in enumerate(self.steps, 1):
            if step.thought:
                trajectory_parts.append(f"Thought {i}: {step.thought}")
            if step.action:
                trajectory_parts.append(f"Action {i}: {step.action}")
            if step.observation:
                trajectory_parts.append(f"Observation {i}: {step.observation}")

        current_trajectory = (
            "\n".join(trajectory_parts) if trajectory_parts else "No actions taken yet."
        )

        # Determine what the AI should do next based on the last step
        last_step = self.steps[-1] if self.steps else None
        next_instruction = ""

        if not self.steps:
            next_instruction = "FIRST STEP: Think about what URL or starting point you need to begin with based on the task, then take an appropriate action"
        elif last_step and last_step.thought and not last_step.action:
            next_instruction = "You just had a thought. Now you MUST take an ACTION. Choose one: get, findElement, findElements, clickElement, or return. Do NOT think again."
        elif last_step and last_step.action and not last_step.observation:
            next_instruction = "Waiting for action result..."
        elif last_step and last_step.observation:
            next_instruction = "Based on the observation, think briefly about what to do next OR take another action to continue."

        # Generate available actions dynamically from commands
        action_descriptions = []
        for cmd_class in commands:
            action_descriptions.append(f"- {cmd_class.__name__}: {cmd_class.__doc__}")

        actions_text = "\n".join(action_descriptions)

        return f"""You are an AI assistant that uses ReAct (Reasoning + Acting) to solve web browsing tasks.

Task: {self.query}

IMPORTANT: You must alternate between thinking and acting. After a thought, you MUST take an action. Do not think multiple times in a row.

Available actions:
{actions_text}
- return: Provide the final answer when you have collected the needed information

Tips for web browsing tasks:
- Use getPageSource to get page HTML and search for specific content
- Use w3cExecuteScript with JavaScript like "return document.body.innerText" to get all visible text
- Navigate to relevant URLs based on your task requirements
- Look for specific sections, elements, or content patterns relevant to your task

Current progress:
{current_trajectory}

{next_instruction}"""


def _normalize_return_params(return_params: Union[dict, BaseModel, None]) -> dict:
    """
    Convert return_params to a dict format for use in JSON schema.

    Args:
        return_params: Either a dict (JSON schema) or BaseModel class/instance

    Returns:
        Dict representing the JSON schema
    """
    if return_params is None:
        return object(
            {
                "done": {
                    "type": "boolean",
                    "description": "Indicates if the task is completed successfully",
                }
            }
        )
    elif isinstance(return_params, dict):
        return return_params
    elif isinstance(return_params, type) and issubclass(return_params, BaseModel):
        # It's a BaseModel class
        return return_params.model_json_schema()
    elif isinstance(return_params, BaseModel):
        # It's a BaseModel instance
        return return_params.model_json_schema()
    else:
        raise ValueError(
            f"return_params must be a dict or BaseModel, got {type(return_params)}"
        )


def experimental_prompt_browser(
    query: str,
    response_format: Union[dict, BaseModel, None] = None,
    *,
    driver: Optional["WebDriver"] = None,
    verbose: bool = False,
) -> dict:
    """
    Main browse function using ReAct framework for AI-powered web browsing.

    Args:
        query (str): The query/task to accomplish through web browsing
        response_format (Optional[Union[dict, pydantic.main.BaseModel]]): JSON schema dict or Pydantic BaseModel defining the expected return format
        driver (Optional[WebDriver]): Optional WebDriver instance to use. If not provided, a new one will be created
        verbose (bool): Enable verbose logging for debugging purposes

    Returns:
        Dict containing the results of the browsing task
    """
    from selenium import webdriver

    ABSTRA_ENVIRONMENT = os.getenv("ABSTRA_ENVIRONMENT")
    ABSTRA_SELENIUM_URL = os.getenv("ABSTRA_SELENIUM_URL")

    # Normalize return_params to dict format
    response_format = _normalize_return_params(response_format)

    if verbose:
        logger.debug(
            f"[VERBOSE] Starting experimental_prompt_browser with query: {query}"
        )
        logger.debug(f"[VERBOSE] Response format: {response_format}")

    if driver is not None:
        if verbose:
            logger.debug("[VERBOSE] Using provided WebDriver")
    elif ABSTRA_ENVIRONMENT == "production" and ABSTRA_SELENIUM_URL is not None:
        if verbose:
            logger.debug(
                f"[VERBOSE] Creating remote WebDriver with URL: {ABSTRA_SELENIUM_URL}"
            )
        options = webdriver.ChromeOptions()
        options.add_argument("--no-sandbox")
        driver = webdriver.Remote(command_executor=ABSTRA_SELENIUM_URL, options=options)
    else:
        if verbose:
            logger.debug("[VERBOSE] Creating local Chrome WebDriver")
        driver = webdriver.Chrome()

    state = AiState.start(query)
    max_steps = 25  # Increased for more complex tasks
    step_count = 0

    if verbose:
        logger.debug(f"[VERBOSE] Starting ReAct loop with max_steps: {max_steps}")

    try:
        while step_count < max_steps:
            if verbose:
                logger.debug(f"\n[VERBOSE] === Step {step_count + 1}/{max_steps} ===")

            try:
                # Create the format schema for ReAct
                format_schema = {
                    "command": {
                        "oneOf": [
                            # Thought command
                            {
                                "type": "object",
                                "description": "Think about what to do next, analyze the situation, or reason about the task",
                                "properties": {
                                    "name": literal("thought"),
                                    "params": {
                                        "type": "object",
                                        "properties": {
                                            "reasoning": {
                                                "type": "string",
                                                "description": "Your reasoning or thought process",
                                            }
                                        },
                                        "required": ["reasoning"],
                                    },
                                },
                                "required": ["name", "params"],
                            }
                        ]
                        + [
                            # Action commands (existing selenium commands)
                            command_schema(
                                cls.__name__, cls.model_json_schema(), cls.__doc__ or ""
                            )
                            for cls in commands
                        ]
                        + [
                            # Return command
                            command_schema(
                                "return",
                                _normalize_return_params(response_format),
                                "Use this when you have gathered enough information to answer the user's question",
                            )
                        ],
                    }
                }

                if verbose:
                    logger.debug("[VERBOSE] Sending prompt to AI...")
                    logger.debug(
                        f"[VERBOSE] Current state prompt:\n{state.to_prompt()}"
                    )

                res = prompt(state.to_prompt(), format=format_schema)  # type: ignore

                if verbose:
                    logger.debug(f"[VERBOSE] AI response: {res}")

                if not res or "command" not in res:
                    if verbose:
                        logger.debug(
                            "[VERBOSE] Invalid response from AI, skipping step"
                        )
                    step_count += 1
                    continue

                # Handle command parsing more robustly
                try:
                    if isinstance(res["command"], dict):
                        command = res["command"]
                    elif isinstance(res["command"], str):
                        command = json.loads(res["command"])
                    else:
                        if verbose:
                            logger.debug(
                                f"[VERBOSE] Unexpected command type: {type(res['command'])}"
                            )
                        step_count += 1
                        continue
                except json.JSONDecodeError as e:
                    logger.warning("Failed to parse command JSON", exc_info=e)
                    if verbose:
                        logger.debug(f"[VERBOSE] JSON decode error: {e}")
                    step_count += 1
                    continue

                if verbose:
                    logger.debug(f"[VERBOSE] Parsed command: {command}")

                if command["name"] == "thought":
                    # Handle thought step
                    thought_text = command["params"]["reasoning"]

                    if verbose:
                        logger.debug(f"[VERBOSE] Processing thought: {thought_text}")

                    # Check if we have too many consecutive thoughts without action
                    recent_thoughts = 0
                    for step in reversed(state.steps):
                        if step.thought and not step.action:
                            recent_thoughts += 1
                        else:
                            break

                    if recent_thoughts >= 3:
                        # Force an action instead of allowing more thoughts
                        if verbose:
                            logger.debug(
                                f"[VERBOSE] Too many consecutive thoughts ({recent_thoughts}), forcing action"
                            )
                        # Default to thinking about the next action if no clear starting point
                        action_description = "thought with params: {'reasoning': 'I need to determine the appropriate starting point or URL for this task'}"
                        state.add_thought(
                            "I need to determine the appropriate starting point or URL for this task"
                        )
                    else:
                        state.add_thought(thought_text)

                elif command["name"] == "return":
                    # Handle return - end the process
                    if verbose:
                        logger.debug(
                            f"[VERBOSE] AI returned final result: {command['params']}"
                        )
                    return command["params"]

                else:
                    # Handle action step
                    action_name = command["name"]
                    action_params = command["params"]
                    action_description = f"{action_name} with params: {action_params}"

                    if verbose:
                        logger.debug(
                            f"[VERBOSE] Executing action: {action_description}"
                        )

                    state.add_action(action_description)

                    # Execute the selenium command
                    try:
                        result = driver.execute(
                            command["name"], params=command["params"]
                        )
                        observation = f"Successfully executed {action_name}. Result: {str(result)[:500]}..."
                        if verbose:
                            logger.debug(f"[VERBOSE] Action succeeded: {observation}")
                    except Exception as action_error:
                        error_str = str(action_error)
                        observation = (
                            f"Failed to execute {action_name}. Error: {error_str}"
                        )

                        if verbose:
                            logger.debug(f"[VERBOSE] Action failed: {observation}")

                        # If it's an element ID error, suggest alternative approaches
                        if "'id'" in error_str and action_name == "getElementText":
                            observation += " (Hint: Try using getPageSource or w3cExecuteScript to extract text content instead)"

                    state.add_observation(observation)

            except Exception as e:
                error_msg = f"Error in ReAct step: {e}"
                if verbose:
                    logger.debug(f"[VERBOSE] Exception in step: {error_msg}")
                state.add_observation(error_msg)

            step_count += 1
            sleep(0.5)  # Small delay between steps

        # If we reach max steps, try to summarize findings
        if verbose:
            logger.debug(
                f"[VERBOSE] Reached maximum steps ({max_steps}), attempting to summarize findings"
            )

        # Create a summary from all observations
        observations = [step.observation for step in state.steps if step.observation]
        observations_text = "\n".join(
            [f"Step {i + 1}: {obs}" for i, obs in enumerate(observations)]
        )

        if verbose:
            logger.debug(f"[VERBOSE] Total observations collected: {len(observations)}")

        # Ask the AI to summarize findings from all observations
        summary_prompt = f"""
        Based on all the observations from the browsing session, please summarize what was found:
        
        Original question: {query}
        
        All observations:
        {observations_text}
        
        Please extract and summarize the key findings in a structured way, even if the task is incomplete.
        Return in this format: {json.dumps(response_format)}
        """

        try:
            if verbose:
                logger.debug("[VERBOSE] Requesting AI summary of findings...")
            # Use Abstra's prompt function instead of direct OpenAI API
            summary_response = prompt(summary_prompt, response_format)  # type: ignore
            if verbose:
                logger.debug(f"[VERBOSE] Summary response: {summary_response}")
            return summary_response
        except Exception as e:
            logger.warning("Error summarizing findings", exc_info=e)
            if verbose:
                logger.debug(f"[VERBOSE] Error during summarization: {e}")

        observations_count = len(
            [step.observation for step in state.steps if step.observation]
        )
        return {
            "error": "Maximum steps reached. Task may be incomplete.",
            "observations_count": observations_count,
        }

    finally:
        if verbose:
            logger.debug("[VERBOSE] Closing WebDriver and finishing browser session")
        driver.quit()
