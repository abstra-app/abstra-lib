from typing import List, Union, Dict, Any
import io

from ..reactive import Reactive
from abstra_internals.widgets.library import *
from abstra_internals.widgets import Input, Output
from abstra_internals.widgets.types import PlotlyFigure, PandasDataFrame


class WidgetSchema:
    def __init__(self):
        self.widgets: List = []

    def __get_next_result_key(self):
        result_widgets = len(
            [w for w in self.widgets if getattr(w, "key", None) == "result"]
        )
        return "result" if result_widgets == 0 else f"result_{result_widgets}"

    def reactive(self, callback):
        self.widgets.append(Reactive(callback))
        return self

    def has_errors(self):
        return any([widget.has_errors() for widget in self.widgets])

    def set_values(self, values: Dict):
        for widget in self.widgets:
            if isinstance(widget, Output):
                continue
            elif isinstance(widget, Reactive):
                widget.set_value(values)
            elif widget.key in values:
                widget.set_value(values[widget.key], set_errors=True)

    def set_errors(self):
        for widget in self.widgets:
            if isinstance(widget, Output):
                continue
            widget.set_errors()

    def parse_value(self, form_answers: Dict) -> Dict:
        """Convert the answer from the form to the expected format
        Args:
            answer: The answer from the form
        Returns:
            The converted answer
        """
        answer: Dict = {}
        inputs = self.widgets
        for input in inputs:
            if isinstance(input, Reactive):
                answer = {**answer, **input.parse_value(form_answers)}
            elif isinstance(input, Input):
                answer[input.key] = input.parse_value(form_answers.get(input.key))
        return answer

    def get_input_widgets(self):
        return list(filter(lambda widget: isinstance(widget, Input), self.widgets))

    def render(self, context=None):
        output = []
        for widget in self.widgets:
            rendered_widget = widget.render(context)
            if isinstance(rendered_widget, list):
                output.extend(rendered_widget)
            else:
                output.append(rendered_widget)
        return output

    def read_cards(self, label: str, options: list, **kwargs):
        """Read a text value from the user simple text input

        Position Args:
                label (str): The text related to this input
                options (list): List of dicts representing the cards, each dict can have the following keys: title, subtitle, image, description, topLeftExtra, topRightExtra

        Keyword Args:
                multiple (bool): Whether the user can select multiple options. Defaults to False.
                initial_value (list): The initial value to display to the user. Defaults to None.
                searchable (bool): Whether to show a search bar. Defaults to False.
                layout (str): Whether the cards layout should be 'list' or 'grid'. Defaults to 'list'. The 'grid' only applies to desktop resolutions.
                columns (int): When layout is 'grid', how many columns to display
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The options/option selected by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(CardsInput(key, label, options, **kwargs))
        return self

    def read_checkbox(self, label: str, **kwargs):
        """Allow users to select an option by interacting with a checkbox

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user.
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(CheckboxInput(key, label, **kwargs))
        return self

    def read_checklist(self, label: str, options: list, **kwargs):
        """Show a checklist for users to select items

        Position Args:
                label (str): The label to display to the user
                options (list): The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to None.
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The selected values
        """

        key = kwargs.pop("key", label)

        self.widgets.append(ChecklistInput(key, label, options, **kwargs))
        return self

    def read_cnpj(self, label: str, **kwargs):
        """Allow users to insert a CNPJ number into the app.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to None.
                invalid_message (str): The message to display when the user enters an invalid value. Defaults to None.
                placeholder (str): The placeholder text to display to the user. Defaults to "00.000.000/0001-00".
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(CnpjInput(key, label, **kwargs))
        return self

    def read_code(self, label: str, **kwargs):
        """Code input allow users to insert code and reads it.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to "".
                language (str): The programming language. Defaults to None.
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(CodeInput(key, label, **kwargs))
        return self

    def read_cpf(self, label: str, **kwargs):
        """Allow users to insert a CPF number into the app.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to "".
                invalid_message (str): The message to display when the user enters an invalid value. Defaults to None.
                placeholder (str): The placeholder text to display to the user. Defaults to "000.000.000-00".
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(CpfInput(key, label, **kwargs))
        return self

    def read_currency(self, label: str, **kwargs):
        """Currency input allows users to enter monetary values.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to 0.
                placeholder (str): The placeholder text to display to the user. Defaults to "".
                min (float): The minimum value allowed, eg. "0". Defaults to None.
                max (float): The maximum value allowed, eg. "100". Defaults to None.
                currency (str): The currency to display to the user, eg. "USD", "BRL, "EUR", "GBP". Defaults to "USD".
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(CurrencyInput(key, label, **kwargs))
        return self

    def read_custom(self, html_body: str, **kwargs):
        """Widget with customizable UI and behaviour

        Position Args:
                html_body (str): The HTML body content

        Keyword Args:
                initial_value (Any): The initial value to be stored in custom widget state.
                label (str): The label to display to the user
                html_head (str): The HTML head content
                css (str): The widget's CSS
                js (str): The widget's JavaScript
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The custom response
        """

        default_key = kwargs.get("label") or self.__get_next_result_key()
        key = kwargs.pop("key", default_key)

        self.widgets.append(CustomInput(key, html_body, **kwargs))
        return self

    def read_date(self, label: str, **kwargs):
        """Allow users to select  a date, or a range of dates.*

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (Union[datetime.date, time.struct_time, str]): The initial value to display to the user. Defaults to None.
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(DateInput(key, label, **kwargs))
        return self

    def read_dropdown(self, label: str, options: list, **kwargs):
        """Allow users to select one or more options by selecting items in a dropdown

        Position Args:
                label (str): The label to display to the user
                options (list): The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]

        Keyword Args:
                multiple (bool): Whether the user can select multiple options. Defaults to False.
                initial_value (str or list): The initial value to display to the user. Defaults to [].
                placeholder (str): The placeholder text to display to the user. Defaults to "Choose an option".
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value selected by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(DropdownInput(key, label, options, **kwargs))
        return self

    def read_email(self, label: str, **kwargs):
        """Email input allow users to enter a valid email address.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to "".
                placeholder (str): The placeholder text to display to the user. Defaults to "".
                invalid_email_message (str): Invalid e-mail message
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(EmailInput(key, label, **kwargs))
        return self

    def read_file(self, label: str, **kwargs):
        """File upload adds a drop-area for users to upload one or more files

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to "".
                multiple (bool): Whether the user will be allowed to upload multiple files. Defaults to False.
                max_file_size (float): Maximum size allowed to be transfered in total in MB.
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          A dict containing the file uploaded by the user FileResponse(file: TemporaryFile, url: str, content: bytes) or a list of FileResponses in case of multiple flag set as True. ⚠️ The url expires after 48 hours
        """

        key = kwargs.pop("key", label)

        self.widgets.append(FileInput(key, label, **kwargs))
        return self

    def read_image(self, label: str, **kwargs):
        """Image upload adds a drop-area for users to upload one or more image files.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to "".
                multiple (bool): Whether the user will be allowed to upload multiple files. Defaults to False.
                max_file_size (float): Maximum size allowed to be transfered in total in MB.
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          A dict containing the image file uploaded by the user ({"file": file, "url": str, "content": bytes}) or a list of images in case of multiple flag set as True
        """

        key = kwargs.pop("key", label)

        self.widgets.append(ImageInput(key, label, **kwargs))
        return self

    def read_list(self, item_schema: Any, **kwargs):
        """Read a list value from the user

        Position Args:
                item_schema (Any): The schema for the items of the list

        Keyword Args:
                initial_value (array): ''
                min (float): Min value accepted by the input. Defaults to None.
                max (float): Max value accepted by the input. Defaults to None.
                add_button_text (str): ''
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The values entered by the user
        """

        default_key = self.__get_next_result_key()
        key = kwargs.pop("key", default_key)

        self.widgets.append(ListInput(key, item_schema, **kwargs))
        return self

    def read_multiple_choice(self, label: str, options: list, **kwargs):
        """Read a multiple choice value from the user

        Position Args:
                label (str): The label to display to the user
                options (list): The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]

        Keyword Args:
                multiple (bool): Whether the user can select multiple options. Defaults to False.
                min (number): The minimal amount of options that should be selected. Defaults to None.
                max (number): The maximum amount of options that should be selected. Defaults to None.
                initial_value ([]): The initial value of the selection. Defaults to [].
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The values/value selected by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(MultipleChoiceInput(key, label, options, **kwargs))
        return self

    def read_nps(self, label: str, **kwargs):
        """NPS feedback allow users to rank their experience from 0 to 10.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                min (int): Min value accepted by the input. Defaults to 0.
                max (int): Max value accepted by the input. Defaults to 10.
                min_hint (str): Text to display next to the min value. Defaults to "Not at all likely".
                max_hint (str): Text to display next to the max value. Defaults to "Extremely likely".
                initial_value (str): The initial value to display to the user. Defaults to None.
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(NpsInput(key, label, **kwargs))
        return self

    def read_number(self, label: str, **kwargs):
        """Number input allow users to enter numeric values.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to 0.
                placeholder (str): The placeholder text to display to the user. Defaults to "".
                min (float): Min value accepted by the input. Defaults to None.
                max (float): Max value accepted by the input. Defaults to None.
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(NumberInput(key, label, **kwargs))
        return self

    def read_number_slider(self, label: str, **kwargs):
        """Allow users to select values in a slider bar.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (float): The initial value to display to the user. Defaults to 0.
                min (float): Min value accepted by the input. Defaults to None.
                max (float): Max value accepted by the input. Defaults to None.
                step (float): The value to be incremented or decremented while using the input button. Defaults to None.
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(NumberSliderInput(key, label, **kwargs))
        return self

    def read_pandas_row_selection(self, df: PandasDataFrame, **kwargs):
        """Display a pandas dataframe as a table and allow the user to select rows

        Position Args:
                df (PandasDataFrame): The pandas dataframe to be displayed

        Keyword Args:
                display_index (bool): Whether to show a index column. Defaults to False.
                label (str): The label to display to the user
                multiple (bool): Whether the user will be allowed to select multiple rows. Defaults to True.
                initial_value (list): The initial value of the selection. Defaults to []
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The list of selected rows
        """

        default_key = kwargs.get("label") or self.__get_next_result_key()
        key = kwargs.pop("key", default_key)

        self.widgets.append(PandasRowSelectionInput(key, df, **kwargs))
        return self

    def read_password(self, label: str, **kwargs):
        """Password input allow users to enter a password before seen the content.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                placeholder (str): The placeholder text to display to the user. Defaults to "".
                lowercase_required (bool): Whether the input must have at least one lowercase character. Defaults to True.
                uppercase_required (bool): Whether the input must have at least one uppercase character. Defaults to True.
                special_required (bool): Whether the input must have at least one special character. Defaults to True.
                digit_required (bool): Whether the input must have at least one digit. Defaults to True.
                min_length (int): Minimum length of the password. Defaults to 8.
                max_length (int): Maximum length of the password. Defaults to None.
                size (int): Size of the password. Defaults to None.
                pattern (str): A regex pattern for the accepted password. Defaults to None.
                autocomplete (str): The autocomplete HTML attribute. Defaults to "current-password".
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(PasswordInput(key, label, **kwargs))
        return self

    def read_phone(self, label: str, **kwargs):
        """Phone input allow users to enter a valid phone number.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (dict): The initial value to display to the user. It contains two keys: 'country_code' (string with optional + sign or number) and 'national_number' (str). Ex: {'country_code': '55', 'national_number': '21999990000'}.
                placeholder (str): The placeholder text to display to the user. Defaults to "".
                invalid_message (str): The message to display when the input is invalid
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          A dict containing the value entered by the user ({"country_code": str, "national_number": str})
        """

        key = kwargs.pop("key", label)

        self.widgets.append(PhoneInput(key, label, **kwargs))
        return self

    def read_rating(self, label: str, **kwargs):
        """Rating feedback allow users to rank their experience from 1 to 5 starts.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (int): The initial value to display to the user. Defaults to 0.
                max (float): Max value accepted by the input. Defaults to None.
                char (str): Which char should be displayed as icon?
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(RatingInput(key, label, **kwargs))
        return self

    def read_richtext(self, label: str, **kwargs):
        """Rich text input allows users to type and format textual content.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to "".
                placeholder (str): The placeholder text to display to the user. Defaults to "Your rich text here".
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The rich text value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(RichTextInput(key, label, **kwargs))
        return self

    def read_tag(self, label: str, **kwargs):
        """Read a tag value from the user

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (list): The initial value to display to the user. Defaults to [].
                placeholder (str): The placeholder text to display to the user. Defaults to "".
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The values entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(TagInput(key, label, **kwargs))
        return self

    def read(self, label: str, **kwargs):
        """Text fields allow users to insert plain text.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to "".
                placeholder (str): The placeholder text to display to the user. Defaults to "Placeholder".
                mask (str): A mask to apply to the input. Defaults to None.
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(TextInput(key, label, **kwargs))
        return self

    def read_textarea(self, label: str, **kwargs):
        """Long text input allow users to type longer textual content.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str): The initial value to display to the user. Defaults to "".
                placeholder (str): The placeholder text to display to the user. Defaults to "".
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(TextareaInput(key, label, **kwargs))
        return self

    def read_time(self, label: str, **kwargs):
        """Read a time value from the user

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (str or datetime.time): The initial value to display to the user. Defaults to "00:00".
                format (str): Whether the input is in the format 24hs or AM/PM. Defaults to "24hs".
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          A datetime.time object representing the value entered by the user
        """

        key = kwargs.pop("key", label)

        self.widgets.append(TimeInput(key, label, **kwargs))
        return self

    def read_toggle(self, label: str, **kwargs):
        """Allow users to set between two items.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                on_text (str): Text of On Toggle option
                off_text (str): Text of Off Toggle option
                initial_value (bool): Initial value of the toggle
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          The toggle value
        """

        key = kwargs.pop("key", label)

        self.widgets.append(ToggleInput(key, label, **kwargs))
        return self

    def read_video(self, label: str, **kwargs):
        """Video upload adds a drop-area for users to upload one or more video files.

        Position Args:
                label (str): The label to display to the user

        Keyword Args:
                initial_value (Union[str, io.IOBase]): The initial value to display to the user. Defaults to "".
                multiple (bool): Whether the user will be allowed to upload multiple files. Defaults to False.
                max_file_size (float): Maximum size allowed to be transfered in total in MB.
                disabled (bool): whether the input is disabled. Defaults to False.
                required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
                hint (str): A tooltip displayed to the user. Defaults to None.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.

        Returns:
          A dict containing the video uploaded by the user ({"file": file, "url": str, "content": bytes}) or a list of videos in case of multiple flag set as True
        """

        key = kwargs.pop("key", label)

        self.widgets.append(VideoInput(key, label, **kwargs))
        return self

    def display_file(self, file: Union[str, io.IOBase], **kwargs):
        """Show a button for the user to download a file.

        Position Args:
                file (Union[str, io.IOBase]): The file to download

        Keyword Args:
                download_text (str): The text to display on the button that will download the file. Defaults to "Download here".
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.


        """

        self.widgets.append(FileOutput(file, **kwargs))
        return self

    def display_html(self, html: str, **kwargs):
        """Embed HTML to the app.

        Position Args:
                html (str): The html snippet to display to the user

        Keyword Args:
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.


        """

        self.widgets.append(HtmlOutput(html, **kwargs))
        return self

    def display_iframe(self, url_or_html: str, **kwargs):
        """Embed content using iframe.

        Position Args:
                url_or_html (str): The link to the document or the own document to display to the user

        Keyword Args:
                width (int): The width of the iframe. Defaults to "800".
                height (int): The height of the iframe. Defaults to "600".
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.


        """

        self.widgets.append(IframeOutput(url_or_html, **kwargs))
        return self

    def display_image(self, image: Union[str, io.IOBase], **kwargs):
        """Show an image to the user

        Position Args:
                image (Union[str, io.IOBase]): The image to display to the user

        Keyword Args:
                subtitle (str): The subtitle of the image. Defaults to "".
                label (str): The label to display to the user
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.


        """

        self.widgets.append(ImageOutput(image, **kwargs))
        return self

    def display_latex(self, text: str, **kwargs):
        """Show an Latex formula to the user

        Position Args:
                text (str): The latex formula to display to the user

        Keyword Args:
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.


        """

        self.widgets.append(LatexOutput(text, **kwargs))
        return self

    def display_link(self, link_url: str, **kwargs):
        """Allow users to see and open content from text links.

        Position Args:
                link_url (str): The url of the link to display to the user

        Keyword Args:
                link_text (str): The text to display on the link. Defaults to "Click here".
                same_tab (bool): Whether to open the link in the same tab or not. Defaults to False.
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.


        """

        self.widgets.append(LinkOutput(link_url, **kwargs))
        return self

    def display_markdown(self, text: str, **kwargs):
        """Show a formatted text to the user

        Position Args:
                text (str): The formatted text to display to the user

        Keyword Args:
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.


        """

        self.widgets.append(MarkdownOutput(text, **kwargs))
        return self

    def display_pandas(self, df: PandasDataFrame, **kwargs):
        """Display a pandas dataframe to the user

        Position Args:
                df (PandasDataFrame): The dataframe to display to the user

        Keyword Args:
                display_index (bool): Whether to show a index column. Defaults to False.
                label (str): The label to display to the user
                editable (bool): Whether the user will be allowed to edit the cells. Defaults to False.
                actions (list): Actions that can be triggered by table rows
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.


        """

        self.widgets.append(PandasOutput(df, **kwargs))
        return self

    def display_plotly(self, fig: PlotlyFigure, **kwargs):
        """Displays a Plotly figure to the user

        Position Args:
                fig (PlotlyFigure): The figure to display to the user

        Keyword Args:
                label (str): The label to display to the user
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.


        """

        self.widgets.append(PlotlyOutput(fig, **kwargs))
        return self

    def display_progress(self, current: float, total: float, **kwargs):
        """Show a progress bar when loading the app.

        Position Args:
                current (float): The progress being made. Defaults to 50.
                total (float): Total progress. Defaults to 100.

        Keyword Args:
                text (str): The text displayed with this progress step. Defaults to "".
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.


        """

        self.widgets.append(ProgressOutput(current, total, **kwargs))
        return self

    def display(self, text: str, **kwargs):
        """ "Text display" adds textual information into the app.

        Position Args:
                text (str): The text to display to the user

        Keyword Args:
                size (str): The size of the text: 'small', 'medium', 'large'
                end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
                full_width (bool): Whether the input should use full screen width. Defaults to False.
                button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.


        """

        self.widgets.append(TextOutput(text, **kwargs))
        return self

    def serialize_value(self):
        serialized = {}
        for widget in self.get_input_widgets():
            if isinstance(widget, Reactive):
                serialized.update(widget.serialize_value())
            else:
                serialized[widget.key] = widget.serialize_value()
        return serialized

    input = read
