# flake8: noqa
# Can't use __all__ yet because of the wildcard imports and code generation

# Utils
from abstra_internals.interface.sdk.forms.other import (
    execute_js,
    get_query_params,
    get_user,
    redirect,
    url_params,
)
from abstra_internals.interface.sdk.forms.reuse import reuse

# Buttons
from abstra_internals.entities.forms.template import (
    Button,
    NextButton,
    BackButton,
)

# Widgets
from abstra_internals.interface.sdk.forms.list_item_schema import ListItemSchema
from abstra_internals.entities.forms.widgets.library import (
    AppointmentInput,
    CameraInput,
    CardsInput,
    CheckboxInput,
    ChecklistInput,
    CnpjInput,
    CodeInput,
    CpfInput,
    CurrencyInput,
    CustomInput,
    DateInput,
    DropdownInput,
    EmailInput,
    FileInput,
    FileOutput,
    HtmlOutput,
    IframeOutput,
    ImageInput,
    ImageOutput,
    LatexOutput,
    LinkOutput,
    ListInput,
    MarkdownOutput,
    MultipleChoiceInput,
    NpsInput,
    NumberInput,
    NumberSliderInput,
    PandasOutput,
    PandasRowSelectionInput,
    PasswordInput,
    PhoneInput,
    PlotlyOutput,
    ProgressOutput,
    RatingInput,
    RichTextInput,
    TagInput,
    TextInput,
    TextOutput,
    TextareaInput,
    TimeInput,
    ToggleInput,
    VideoInput,
)
from abstra_internals.interface.sdk.forms.form import Form, run
from abstra_internals.interface.sdk.forms.decorators import end_page_step

# Legacy
from abstra_internals.interface.sdk.forms.generated.inputs import (
    read_appointment,
    read_camera,
    read_cards,
    read_checkbox,
    read_checklist,
    read_cnpj,
    read_code,
    read_cpf,
    read_currency,
    read_custom,
    read_date,
    read_dropdown,
    read_email,
    read_file,
    read_image,
    read_list,
    read_multiple_choice,
    read_nps,
    read_number,
    read_number_slider,
    read_pandas_row_selection,
    read_password,
    read_phone,
    read_rating,
    read_richtext,
    read_tag,
    read,
    read_textarea,
    read_time,
    read_toggle,
    read_video,
)
from abstra_internals.interface.sdk.forms.generated.outputs import (
    display_file,
    display_html,
    display_iframe,
    display_image,
    display_latex,
    display_link,
    display_markdown,
    display_pandas,
    display_plotly,
    display_progress,
    display,
)
from abstra_internals.interface.sdk.forms.deprecated.page import Page
from abstra_internals.interface.sdk.forms.deprecated.reactive_func import reactive
from abstra_internals.interface.sdk.forms.deprecated.step import run_steps

__all__ = [
    # Utils
    "execute_js",
    "get_query_params",
    "get_user",
    "redirect",
    "url_params",
    "reuse",
    # Buttons
    "Button",
    "NextButton",
    "BackButton",
    # Widgets
    "ListItemSchema",
    "AppointmentInput",
    "CameraInput",
    "CardsInput",
    "CheckboxInput",
    "ChecklistInput",
    "CnpjInput",
    "CodeInput",
    "CpfInput",
    "CurrencyInput",
    "CustomInput",
    "DateInput",
    "DropdownInput",
    "EmailInput",
    "FileInput",
    "FileOutput",
    "HtmlOutput",
    "IframeOutput",
    "ImageInput",
    "ImageOutput",
    "LatexOutput",
    "LinkOutput",
    "ListInput",
    "MarkdownOutput",
    "MultipleChoiceInput",
    "NpsInput",
    "NumberInput",
    "NumberSliderInput",
    "PandasOutput",
    "PandasRowSelectionInput",
    "PasswordInput",
    "PhoneInput",
    "PlotlyOutput",
    "ProgressOutput",
    "RatingInput",
    "RichTextInput",
    "TagInput",
    "TextInput",
    "TextOutput",
    "TextareaInput",
    "TimeInput",
    "ToggleInput",
    "VideoInput",
    # Form
    "run",
    "end_page_step",
    # Input Functions
    "read_appointment",
    "read_camera",
    "read_cards",
    "read_checkbox",
    "read_checklist",
    "read_cnpj",
    "read_code",
    "read_cpf",
    "read_currency",
    "read_custom",
    "read_date",
    "read_dropdown",
    "read_email",
    "read_file",
    "read_image",
    "read_list",
    "read_multiple_choice",
    "read_nps",
    "read_number",
    "read_number_slider",
    "read_pandas_row_selection",
    "read_password",
    "read_phone",
    "read_rating",
    "read_richtext",
    "read_tag",
    "read",
    "read_textarea",
    "read_time",
    "read_toggle",
    "read_video",
    # Output Functions
    "display_file",
    "display_html",
    "display_iframe",
    "display_image",
    "display_latex",
    "display_link",
    "display_markdown",
    "display_pandas",
    "display_plotly",
    "display_progress",
    "display",
    # Legacy
    "Page",
    "reactive",
    "run_steps",
]
