
from typing import Any, Dict, List, TYPE_CHECKING
from abstra_internals.widgets.types import AbstraOption
from abstra_internals.interface.sdk.forms.page import Page

if TYPE_CHECKING:
    from pandas import DataFrame

def get_single_value(answer: Dict):
    return list(answer.values())[0]


def read_appointment(label: str, **kwargs):
  
    """A calendar slot selection that allows users to select a time slot for an appointment.

        Position Args: 
		label (str): The label to display to the user
		
        Keyword Args: 
		slots (List[Union[AppointmentSlot, dict, Tuple[datetime, datetime]]]): The available slots for the user to choose from
		initial_value (Union[AppointmentSlot, dict, Tuple[datetime, datetime]]): The initial value to display to the user. Defaults to None.
		disabled (bool): whether the input is disabled. Defaults to False.
		required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
		hint (str): A tooltip displayed to the user. Defaults to None.
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        Returns:
          A dict containing the selected appointment slot
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_appointment(label, **kwargs).run(button_text))


def read_camera(label: str, **kwargs):
  
    """Captures and uploads a photo using the user's camera.

        Position Args: 
		label (str): The label to display to the user
		
        Keyword Args: 
		initial_value (str): The initial value to display to the user. Defaults to "".
		multiple (bool): Whether the user will be allowed to upload multiple files. Defaults to False.
		disabled (bool): whether the input is disabled. Defaults to False.
		required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
		hint (str): A tooltip displayed to the user. Defaults to None.
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        Returns:
          A dict containing the picture taken by the user ({"file": file, "url": str, "content": bytes}) or a list of pictures in case of multiple flag set as True
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_camera(label, **kwargs).run(button_text))


def read_cards(label: str, options: list, **kwargs):
  
    """Presents options as cards for the user. Cards may be selectable.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_cards(label, options, **kwargs).run(button_text))


def read_checkbox(label: str, **kwargs):
  
    """Enables a selection through a single checkbox interaction.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_checkbox(label, **kwargs).run(button_text))


def read_checklist(label: str, options: List[AbstraOption], **kwargs):
  
    """Displays a checklist allowing multiple item selections.

        Position Args: 
		label (str): The label to display to the user
		options (List[AbstraOption]): The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]
		
        Keyword Args: 
		initial_value (str): The initial value to display to the user. Defaults to None.
		min (int): The minimum number of items that must be selected. Defaults to 0.
		max (int): The maximum number of items that can be selected. Defaults to the number of options.
		disabled (bool): whether the input is disabled. Defaults to False.
		required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
		hint (str): A tooltip displayed to the user. Defaults to None.
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        Returns:
          The selected values
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_checklist(label, options, **kwargs).run(button_text))


def read_cnpj(label: str, **kwargs):
  
    """CNPJ number input with validation and masking.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_cnpj(label, **kwargs).run(button_text))


def read_code(label: str, **kwargs):
  
    """Accepts code input with syntax highlighting

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_code(label, **kwargs).run(button_text))


def read_cpf(label: str, **kwargs):
  
    """CPF number input with validation and masking.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_cpf(label, **kwargs).run(button_text))


def read_currency(label: str, **kwargs):
  
    """Enables monetary value input with currency formatting.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_currency(label, **kwargs).run(button_text))


def read_custom(html_body: str, **kwargs):
  
    """Allows for a fully customizable widget with custom HTML, CSS, and JS.

        Position Args: 
		html_body (str): The HTML body content
		
        Keyword Args: 
		initial_value (Any): The initial value to be stored in custom widget state.
		label (str): The label to display to the user
		html_head (str): The HTML head content
		css (str): The widget's CSS
		js (str): The widget's JavaScript
		height (int): The widget's height
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        Returns:
          The custom response
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_custom(html_body, **kwargs).run(button_text))


def read_date(label: str, **kwargs):
  
    """Provides a date picker with calendar interface.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_date(label, **kwargs).run(button_text))


def read_dropdown(label: str, options: List[AbstraOption], **kwargs):
  
    """Provides a dropdown menu for single or multiple selections.

        Position Args: 
		label (str): The label to display to the user
		options (List[AbstraOption]): The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]
		
        Keyword Args: 
		multiple (bool): Whether the user can select multiple options. Defaults to False.
		initial_value (str or list): The initial value to display to the user. Defaults to [].
		placeholder (str): The placeholder text to display to the user. Defaults to "Choose an option".
		min (number): The minimal amount of options that should be selected. Defaults to None.
		max (number): The maximum amount of options that should be selected. Defaults to None.
		disabled (bool): whether the input is disabled. Defaults to False.
		required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
		hint (str): A tooltip displayed to the user. Defaults to None.
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        Returns:
          The value selected by the user
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_dropdown(label, options, **kwargs).run(button_text))


def read_email(label: str, **kwargs):
  
    """ Collects and validates an email address.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_email(label, **kwargs).run(button_text))


def read_file(label: str, **kwargs):
  
    """Enables file upload via file explorer.

        Position Args: 
		label (str): The label to display to the user
		
        Keyword Args: 
		initial_value (str): The initial value to display to the user. Defaults to "".
		multiple (bool): Whether the user will be allowed to upload multiple files. Defaults to False.
		accepted_formats (list): The specific file types that the input should accept. Defaults to [], accepting all file formats.
		max_file_size (float): Maximum size allowed to be transfered in total in MB.
		disabled (bool): whether the input is disabled. Defaults to False.
		required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
		hint (str): A tooltip displayed to the user. Defaults to None.
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        Returns:
          A object containing the file uploaded by the user: FileResponse(path: Path, file: BufferedReader). If the multiple flag is set as True, it might contain a list of FileResponses.
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_file(label, **kwargs).run(button_text))


def read_image(label: str, **kwargs):
  
    """Allows for image file uploads with preview and validation.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_image(label, **kwargs).run(button_text))


def read_list(item_schema: Any, **kwargs):
  
    """Collects a dynamic list of values based on a specified schema.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_list(item_schema, **kwargs).run(button_text))


def read_multiple_choice(label: str, options: List[AbstraOption], **kwargs):
  
    """Offers multiple choice selections with single or multi-select options.

        Position Args: 
		label (str): The label to display to the user
		options (List[AbstraOption]): The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]
		
        Keyword Args: 
		multiple (bool): Whether the user can select multiple options. Defaults to False.
		min (number): The minimal amount of options that should be selected. Defaults to None.
		max (number): The maximum amount of options that should be selected. Defaults to None.
		initial_value ([]): The initial values of the selection. Defaults to [].
		disabled (bool): whether the input is disabled. Defaults to False.
		required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
		hint (str): A tooltip displayed to the user. Defaults to None.
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		full_width (bool): Whether the input should use full screen width. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        Returns:
          The values/value selected by the user
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_multiple_choice(label, options, **kwargs).run(button_text))


def read_nps(label: str, **kwargs):
  
    """Captures Net Promoter Score feedback with a 0-10 rating scale.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_nps(label, **kwargs).run(button_text))


def read_number(label: str, **kwargs):
  
    """Collects numeric input with optional min/max limits.

        Position Args: 
		label (str): The label to display to the user
		
        Keyword Args: 
		initial_value (number): The initial value to display to the user. Defaults to 0.
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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_number(label, **kwargs).run(button_text))


def read_number_slider(label: str, **kwargs):
  
    """Provides a slider for selecting numerical values within a range.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_number_slider(label, **kwargs).run(button_text))


def read_pandas_row_selection(df: "DataFrame", **kwargs):
  
    """Enables selection of rows from a displayed pandas DataFrame table.

        Position Args: 
		df ("DataFrame"): The pandas dataframe to be displayed
		
        Keyword Args: 
		display_index (bool): Whether to show a index column. Defaults to False.
		label (str): The label to display to the user
		initial_value (list): The initial value of the selection. Defaults to []
		multiple (bool): Whether the user will be allowed to select multiple rows. Defaults to False.
		min (number): The minimal amount of options that should be selected. Defaults to None.
		max (number): The maximum amount of options that should be selected. Defaults to None.
		page_size (number): The number of rows to display per page. Defaults to 10.
		full_width (bool): Whether the input should use full screen width. Defaults to True.
		disabled (bool): whether the input is disabled. Defaults to False.
		required (Union[bool, str]): Whether the input is required or not eg. "this field is required". Defaults to True.
		hint (str): A tooltip displayed to the user. Defaults to None.
		end_program (bool): Whether the program should end after the widget is shown. Defaults to False.
		button_text (str): What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.
		
        Returns:
          The list of selected rows
    """

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_pandas_row_selection(df, **kwargs).run(button_text))


def read_password(label: str, **kwargs):
  
    """A password field, including strength validation options.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_password(label, **kwargs).run(button_text))


def read_phone(label: str, **kwargs):
  
    """A phone inputs with country code and national number.

        Position Args: 
		label (str): The label to display to the user
		
        Keyword Args: 
		initial_value (dict): The initial value to display to the user. It contains two keys: 'country_code' (string with optional + sign or number) and 'national_number' (str). Ex: {'country_code': '55', 'national_number': '21999990000'}.
		placeholder (str): The placeholder text to display in the national number input. Defaults to "".
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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_phone(label, **kwargs).run(button_text))


def read_rating(label: str, **kwargs):
  
    """Collects user feedback with emoji icons.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_rating(label, **kwargs).run(button_text))


def read_richtext(label: str, **kwargs):
  
    """Offers a rich text editor for formatted textual input.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_richtext(label, **kwargs).run(button_text))


def read_tag(label: str, **kwargs):
  
    """Enables input of tags or keywords with autocomplete suggestions.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_tag(label, **kwargs).run(button_text))


def read(label: str, **kwargs):
  
    """Collects plain text input with customizable placeholders and validation.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read(label, **kwargs).run(button_text))


def read_textarea(label: str, **kwargs):
  
    """Provides a text area for multi-line text input.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_textarea(label, **kwargs).run(button_text))


def read_time(label: str, **kwargs):
  
    """Allows selection of a specific time.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_time(label, **kwargs).run(button_text))


def read_toggle(label: str, **kwargs):
  
    """Offers a toggle switch between two defined options.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_toggle(label, **kwargs).run(button_text))


def read_video(label: str, **kwargs):
  
    """Facilitates video file uploads with preview and size validation.

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

    
  
    button_text = kwargs.get("button_text", "i18n_next_action")
    return get_single_value(Page().read_video(label, **kwargs).run(button_text))

