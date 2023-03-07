from .library.widget_base import Input, Output

# Output types
from .library.PandasOutput import PandasOutput
from .library.ProgressOutput import ProgressOutput
from .library.LinkOutput import LinkOutput
from .library.ImageOutput import ImageOutput
from .library.HtmlOutput import HtmlOutput
from .library.FileOutput import FileOutput
from .library.MarkdownOutput import MarkdownOutput
from .library.PlotlyOutput import PlotlyOutput
from .library.IframeOutput import IframeOutput
from .library.LatexOutput import LatexOutput
from .library.TextOutput import TextOutput

# Input types
from .library.TextareaInput import TextareaInput
from .library.ListInput import ListInput
from .library.VideoInput import VideoInput
from .library.TagInput import TagInput
from .library.TimeInput import TimeInput
from .library.NumberSliderInput import NumberSliderInput
from .library.CheckboxInput import CheckboxInput
from .library.CnpjInput import CnpjInput
from .library.CpfInput import CpfInput
from .library.TextInput import TextInput
from .library.PhoneInput import PhoneInput
from .library.ImageInput import ImageInput
from .library.ToggleInput import ToggleInput
from .library.ChecklistInput import ChecklistInput
from .library.EmailInput import EmailInput
from .library.MultipleChoiceInput import MultipleChoiceInput
from .library.CodeInput import CodeInput
from .library.DateInput import DateInput
from .library.PasswordInput import PasswordInput
from .library.NumberInput import NumberInput
from .library.KanbanBoardInput import KanbanBoardInput
from .library.CardsInput import CardsInput
from .library.AnswerSheetInput import AnswerSheetInput
from .library.NpsInput import NpsInput
from .library.CurrencyInput import CurrencyInput
from .library.FileInput import FileInput
from .library.RatingInput import RatingInput
from .library.ClickInput import ClickInput
from .library.DropdownInput import DropdownInput
from .library.PandasRowSelectionInput import PandasRowSelectionInput


output_types = [
    PandasOutput,
    ProgressOutput,
    LinkOutput,
    ImageOutput,
    HtmlOutput,
    FileOutput,
    MarkdownOutput,
    PlotlyOutput,
    IframeOutput,
    LatexOutput,
    TextOutput,
]

input_types = [
    TextareaInput,
    ListInput,
    VideoInput,
    TagInput,
    TimeInput,
    NumberSliderInput,
    CheckboxInput,
    CnpjInput,
    CpfInput,
    TextInput,
    PhoneInput,
    ImageInput,
    ToggleInput,
    ChecklistInput,
    EmailInput,
    MultipleChoiceInput,
    CodeInput,
    DateInput,
    PasswordInput,
    NumberInput,
    KanbanBoardInput,
    CardsInput,
    AnswerSheetInput,
    NpsInput,
    CurrencyInput,
    FileInput,
    RatingInput,
    ClickInput,
    DropdownInput,
    PandasRowSelectionInput,
]

widget_types = output_types + input_types
