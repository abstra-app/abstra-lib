from __future__ import annotations
from dataclasses import dataclass
from typing import Union, Type, Tuple, Any, Optional
import traceback

from ...utils import convert_answer, revert_value
from .autocomplete import get_suggestions
from ...api.classes import DashJSON, SlotJSON, SlottableJSON, DashWidgetJSON
from abstra.widgets import (
    get_widget_class,
    is_prop_required,
    get_widget_name,
    get_prop_type,
    is_broker_prop_form_only,
    Input,
    Output,
)

WidgetClassType = Union[Type[Input], Type[Output]]


@dataclass()
class DashPageState(dict):
    timestamp: int
    widgets: dict


class PythonProgram:
    root: SlotJSON

    def __init__(self, dash: DashJSON, code: str) -> None:
        self.code = code
        self.root = dash.layout.slot

        # state: { [variable: string]: value }
        self.state = {}

    def ex(self, cmd: str):
        exec(cmd, self.state, self.state)

    def ev(self, expr: str):
        return eval(expr, self.state, self.state)

    def execute_initial_code(self):
        if not self.code:
            return

        self.ex(self.code)

    def set_variable(self, variable: str, value):
        try:
            self.state.update({"__temp_value__": value})
            self.ex(f"{variable} = __temp_value__")
        except Exception as e:
            traceback.print_exc()
        finally:
            self.state.pop("__temp_value__", None)

    def execute_widget_event(self, wid, type, payload, dash_page_state: DashPageState):
        widget = self.__get_widget(wid)
        cmd = widget.events.get(type)

        if not cmd:
            return False

        self.__execute_widget_event_command(widget, cmd, payload, dash_page_state)
        return True

    def __execute_widget_event_command(
        self, widget: DashWidgetJSON, cmd: str, payload, dash_page_state: DashPageState
    ):
        _, widget_value = self.__get_widget_context(widget, dash_page_state)

        self.state.update({"__widget__": widget_value})
        self.state.update({"__event__": {"value": widget_value, "payload": payload}})

        try:
            self.ex(cmd)
        except Exception as e:
            traceback.print_exc()
            return {"repr": traceback.format_exc()}
        finally:
            self.state.pop("__widget__", None)
            self.state.pop("__event__", None)

    def execute_widget_input(self, wid: str, dash_page_state: DashPageState):
        widget = self.__get_widget(wid)
        if not widget.variable:
            return False

        _, value = self.__get_widget_context(widget, dash_page_state)
        self.set_variable(widget.variable, value)
        return True

    def evaluate_widgets(self, dash_page_state: DashPageState):
        computed_widgets, computed_variables, errors = self.__compute_slot_widgets(
            self.root, dash_page_state
        )
        return {
            "props": computed_widgets,
            "variables": computed_variables,
            "errors": errors,
            "stateTimestamp": dash_page_state.get("timestamp"),
        }

    def __compute_slot_widgets(self, slot: SlotJSON, dash_page_state: DashPageState):
        computed_widgets = {}
        computed_variables = {}
        errors = {"props": {}, "variables": {}, "widgets": {}}

        for wid, widget in slot.items():
            if isinstance(widget, SlottableJSON):
                (
                    computed_slot,
                    computed_slot_variables,
                    errors_slot,
                ) = self.__compute_slot_widgets(widget.slot, dash_page_state)
                (
                    widget_props,
                    props_errors,
                    widget_errors,
                ) = self.__compute_slottable_props(widget)
                computed_widgets = {**computed_widgets, **computed_slot}
                computed_variables = {**computed_variables, **computed_slot_variables}
                computed_widgets[wid] = widget_props
                if widget_errors:
                    errors["widgets"][wid] = widget_errors
                if props_errors:
                    errors["props"][wid] = props_errors

                merge_errors(errors, errors_slot)
            elif isinstance(widget, DashWidgetJSON):
                variable, props, widget_errors = self.__compute_widget(
                    widget, dash_page_state
                )
                computed_widgets[wid] = props
                computed_variables[wid] = variable
                if widget_errors["props"]:
                    errors["props"][wid] = widget_errors["props"]
                if widget_errors["variables"]:
                    errors["variables"][wid] = widget_errors["variables"]
                if widget_errors["widgets"]:
                    errors["widgets"][wid] = widget_errors["widgets"]
            else:
                raise Exception(f"Invalid widget type {type(widget)}")

        return computed_widgets, computed_variables, errors

    def __compute_widget(self, widget: DashWidgetJSON, dash_page_state: DashPageState):
        widget_class, widget_value = self.__get_widget_context(widget, dash_page_state)
        self.state.update({"__widget__": widget_value})
        errors = {"props": {}, "widgets": {}, "variables": {}}

        variable, errors["variables"] = self.__compute_widget_variable(
            widget, widget_class
        )
        props, errors["props"], errors["widgets"] = self.__compute_widget_props(
            widget, widget_class
        )

        self.state.pop("__widget__", None)
        return variable, props, errors

    def __filter_form_only_props(self, widget: DashWidgetJSON, props: dict):
        return {
            k: v
            for k, v in props.items()
            if not is_broker_prop_form_only(widget.type, k)
        }

    def __compute_widget_props(
        self, widget: DashWidgetJSON, widget_class: WidgetClassType
    ):
        props = {"key": "key"}
        props_errors = {}
        widget_errors = None
        result = None
        for prop, expr in widget.props.items():
            if is_prop_required(widget.type, prop) and (
                expr.strip() == "" or expr is None
            ):
                prop_type = get_prop_type(widget.type, prop)
                widget_name = get_widget_name(widget.type)
                props_errors[prop] = {"repr": "Missing required prop"}
                widget_errors = {
                    "repr": f'Missing required prop "{prop}" ({prop_type}) for widget "{widget_name}".'
                }
                break

            try:
                props[prop] = self.ev(expr) if expr else None
            except Exception as e:
                traceback.print_exc()
                props_errors[prop] = {"repr": traceback.format_exc()}
        else:
            try:
                result = self.__filter_form_only_props(
                    widget, widget_class(**props).json()
                )
            except Exception as e:
                traceback.print_exc()
                widget_errors = {"repr": traceback.format_exc()}

        return result, props_errors, widget_errors

    def __compute_widget_variable(
        self, widget: DashWidgetJSON, widget_class: WidgetClassType
    ):
        if not widget.variable:
            return None, None

        try:
            # Check if it is a variable returning it's value
            self.ev(widget.variable)
            self.ex(f"{widget.variable} = {widget.variable}")
            variable_value = self.ev(widget.variable)
            return revert_value(widget_class, variable_value), None

        except Exception as e:
            traceback.print_exc()
            return None, {"repr": traceback.format_exc()}

    def __compute_slottable_props(self, widget: DashWidgetJSON):
        props = {}
        props_errors = {}
        widget_errors = None
        for prop, expr in widget.props.items():
            try:
                props[prop] = self.ev(expr) if expr else None
            except Exception as e:
                traceback.print_exc()
                props_errors[prop] = {"repr": traceback.format_exc()}

        return props, props_errors, widget_errors

    def __get_widget_context(
        self, widget: DashWidgetJSON, dash_page_state: DashPageState
    ) -> Tuple[WidgetClassType, Any]:
        cls = get_widget_class(widget.type)
        value = dash_page_state["widgets"].get(widget.id, {"value": None})["value"]
        converted_value = convert_answer(cls, value)
        return cls, converted_value

    def __get_widget_id_context(
        self, wid: str, dash_page_state: DashPageState
    ) -> Tuple[WidgetClassType, Any]:
        widget = self.__get_widget(wid)
        return self.__get_widget_context(widget, dash_page_state)

    def __get_widget(self, wid: str):
        widget = search_widget_in_slot(self.root, wid)
        if not widget:
            raise Exception(f"Widget {wid} not found")
        return widget

    def get_autocomplete_suggestions(self, added_code_snippet):
        return get_suggestions(self.code, added_code_snippet)


def search_widget_in_slot(slot: SlotJSON, wid: str) -> Optional[DashWidgetJSON]:
    if slot.get(wid):
        slottable = slot.get(wid)
        if isinstance(slottable, DashWidgetJSON):
            return slottable
        elif not isinstance(slottable, SlottableJSON):
            raise Exception(f"Invalid slottable type {type(slottable)}")

    for widget in slot.values():
        if not isinstance(widget, SlottableJSON):
            continue

        result = search_widget_in_slot(widget.slot, wid)
        if result:
            return result

    return None


def merge_errors(errors, errors_slot):
    errors["props"] = {**errors["props"], **errors_slot["props"]}
    errors["variables"] = {**errors["variables"], **errors_slot["variables"]}
    errors["widgets"] = {**errors["widgets"], **errors_slot["widgets"]}
