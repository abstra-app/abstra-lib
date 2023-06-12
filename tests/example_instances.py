import pandas as pd
import plotly.graph_objs as go
from abstra.widgets.library import *

example_instances = [
    TextInput("text", "What is your name?"),
    TagInput(
        "tags",
        "What are your interests?",
        initial_value=["python", "javascript", "c++"],
    ),
    DateInput("date", "When is your birthday?"),
    FileInput("file", "Upload a file"),
    ImageInput("file", "Upload a image file"),
    VideoInput("file", "Upload a video file"),
    MultipleChoiceInput(
        "multiple-choice",
        "What is your favorite color?",
        options=["Red", "Blue", "Green"],
    ),
    DropdownInput(
        "dropdown", "What is your favorite color?", options=["Red", "Blue", "Green"]
    ),
    TextareaInput("textarea", "What is your favorite color?"),
    NumberInput("number", "What is your favorite number?"),
    EmailInput("email", "What is your email address?"),
    PhoneInput("phone", "What is your phone number?"),
    CardsInput(
        "card",
        "What is your favorite color?",
        options=[
            {
                "title": "red",
                "image": "https://via.placeholder.com/150/FF0000/808080",
                "description": "red",
            },
            {
                "title": "blue",
                "image": "https://via.placeholder.com/150/0000FF/808080",
                "description": "blue",
            },
            {
                "title": "green",
                "image": "https://via.placeholder.com/150/00FF00/808080",
                "description": "green",
            },
        ],
    ),
    TextOutput("Hello, world!"),
    MarkdownOutput("## This is a h2 tag"),
    ImageOutput("https://i.imgur.com/XyqQZ.jpg", subtitle="A cute cat"),
    LinkOutput("https://www.google.com", link_text="Google"),
    FileOutput("https://www.google.com", download_text="Google"),
    HtmlOutput("<h1>Hello, world!</h1>"),
    PandasOutput(pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})),
    PlotlyOutput(go.Figure(data=[go.Scatter(x=[1, 2, 3], y=[2, 1, 2])])),
    IframeOutput("<h1>Hello, world!</h1>", width="100%", height="100%", column=1),
    PandasRowSelectionInput(
        "dataframe", pd.DataFrame(data={"col1": [1, 2], "col2": [3, 4]})
    ),
    TimeInput("time", "What's the meeting time?"),
    PasswordInput("password", "Insert your password"),
    CodeInput("code", "Type your code", language="python"),
    NpsInput(
        "nps", "How likely?", min=1, max=100, min_hint="No way!", max_hint="Hell yeah!"
    ),
    CurrencyInput("currency", "How much?", currency="BRL"),
    ProgressOutput(50, 100),
    NumberSliderInput("slider", "How much?", min=0, max=100, step=1),
    CheckboxInput("checkbox", "Do you agree?"),
    CnpjInput("cnpj", "What is your CNPJ?"),
    CpfInput("cpf", "What is your CPF?"),
    ToggleInput("toggle", "Do you agree?"),
    ChecklistInput(
        "checklist",
        "What are your interests?",
        options=["python", "javascript", "c++"],
    ),
    KanbanBoardInput(
        "kanban",
        label="What are your interests?",
    ),
    AnswerSheetInput(
        "answer-sheet",
        "What are your interests?",
        options=["python", "javascript", "c++"],
        number_of_questions=3,
    ),
    LatexOutput("$$\\frac{1}{2}$$"),
    RatingInput("rating", "How much?", max=10),
    ClickInput("click", "Click me!"),
    CustomInput(
        "custom",
        "<button id='date-btn'>Get current date</button>",
        label="Custom Widget",
        js="console.log('test')",
        css="button { border: none; }",
        html_head="",
    ),
    RichTextInput("rich-text", "Write your blog post here"),
]
