metadata = {
    "appointment-input": {
        "name": "Appointment Input",
        "description": "A calendar slot selection that allows users to select a time slot for an appointment.",
        "type": "appointment-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_appointment",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "slots",
                    "description": "The available slots for the user to choose from",
                    "typeName": "List[Union[AppointmentSlot, dict, Tuple[datetime, datetime]]]",
                    "isKwarg": True,
                    "default": "[]",
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to None.",
                    "typeName": "Union[AppointmentSlot, dict, Tuple[datetime, datetime]]",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "AppointmentSlot",
                    "typeDescription": "A dict containing the selected appointment slot",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "slots", "typeName": "array"},
                {"argName": "value", "typeName": "number"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Welcome to Abstra, please select a demo slot",
                    "slots": [
                        {
                            "begin": "2024-05-31T10:00:39.129608",
                            "end": "2024-05-31T10:45:39.129608",
                        },
                        {
                            "begin": "2024-05-31T11:00:39.129608",
                            "end": "2024-05-31T11:45:39.129608",
                        },
                        {
                            "begin": "2024-05-31T13:00:39.129608",
                            "end": "2024-05-31T13:45:39.129608",
                        },
                        {
                            "begin": "2024-05-31T14:00:39.129608",
                            "end": "2024-05-31T14:45:39.129608",
                        },
                        {
                            "begin": "2024-05-31T15:00:39.129608",
                            "end": "2024-05-31T15:45:39.129608",
                        },
                        {
                            "begin": "2024-05-31T16:00:39.129608",
                            "end": "2024-05-31T16:45:39.129608",
                        },
                        {
                            "begin": "2024-05-31T17:00:39.129608",
                            "end": "2024-05-31T17:45:39.129608",
                        },
                        {
                            "begin": "2024-06-03T10:00:39.129608",
                            "end": "2024-06-03T10:45:39.129608",
                        },
                        {
                            "begin": "2024-06-03T11:00:39.129608",
                            "end": "2024-06-03T11:45:39.129608",
                        },
                        {
                            "begin": "2024-06-03T13:00:39.129608",
                            "end": "2024-06-03T13:45:39.129608",
                        },
                        {
                            "begin": "2024-06-03T14:00:39.129608",
                            "end": "2024-06-03T14:45:39.129608",
                        },
                        {
                            "begin": "2024-06-03T15:00:39.129608",
                            "end": "2024-06-03T15:45:39.129608",
                        },
                        {
                            "begin": "2024-06-03T16:00:39.129608",
                            "end": "2024-06-03T16:45:39.129608",
                        },
                        {
                            "begin": "2024-06-03T17:00:39.129608",
                            "end": "2024-06-03T17:45:39.129608",
                        },
                        {
                            "begin": "2024-06-04T10:00:39.129608",
                            "end": "2024-06-04T10:45:39.129608",
                        },
                        {
                            "begin": "2024-06-04T11:00:39.129608",
                            "end": "2024-06-04T11:45:39.129608",
                        },
                        {
                            "begin": "2024-06-04T13:00:39.129608",
                            "end": "2024-06-04T13:45:39.129608",
                        },
                        {
                            "begin": "2024-06-04T14:00:39.129608",
                            "end": "2024-06-04T14:45:39.129608",
                        },
                        {
                            "begin": "2024-06-04T15:00:39.129608",
                            "end": "2024-06-04T15:45:39.129608",
                        },
                        {
                            "begin": "2024-06-04T16:00:39.129608",
                            "end": "2024-06-04T16:45:39.129608",
                        },
                        {
                            "begin": "2024-06-04T17:00:39.129608",
                            "end": "2024-06-04T17:45:39.129608",
                        },
                        {
                            "begin": "2024-06-05T10:00:39.129608",
                            "end": "2024-06-05T10:45:39.129608",
                        },
                        {
                            "begin": "2024-06-05T11:00:39.129608",
                            "end": "2024-06-05T11:45:39.129608",
                        },
                        {
                            "begin": "2024-06-05T13:00:39.129608",
                            "end": "2024-06-05T13:45:39.129608",
                        },
                        {
                            "begin": "2024-06-05T14:00:39.129608",
                            "end": "2024-06-05T14:45:39.129608",
                        },
                        {
                            "begin": "2024-06-05T15:00:39.129608",
                            "end": "2024-06-05T15:45:39.129608",
                        },
                        {
                            "begin": "2024-06-05T16:00:39.129608",
                            "end": "2024-06-05T16:45:39.129608",
                        },
                        {
                            "begin": "2024-06-05T17:00:39.129608",
                            "end": "2024-06-05T17:45:39.129608",
                        },
                        {
                            "begin": "2024-06-06T10:00:39.129608",
                            "end": "2024-06-06T10:45:39.129608",
                        },
                        {
                            "begin": "2024-06-06T11:00:39.129608",
                            "end": "2024-06-06T11:45:39.129608",
                        },
                        {
                            "begin": "2024-06-06T13:00:39.129608",
                            "end": "2024-06-06T13:45:39.129608",
                        },
                        {
                            "begin": "2024-06-06T14:00:39.129608",
                            "end": "2024-06-06T14:45:39.129608",
                        },
                        {
                            "begin": "2024-06-06T15:00:39.129608",
                            "end": "2024-06-06T15:45:39.129608",
                        },
                        {
                            "begin": "2024-06-06T16:00:39.129608",
                            "end": "2024-06-06T16:45:39.129608",
                        },
                        {
                            "begin": "2024-06-06T17:00:39.129608",
                            "end": "2024-06-06T17:45:39.129608",
                        },
                        {
                            "begin": "2024-06-07T10:00:39.129608",
                            "end": "2024-06-07T10:45:39.129608",
                        },
                        {
                            "begin": "2024-06-07T11:00:39.129608",
                            "end": "2024-06-07T11:45:39.129608",
                        },
                        {
                            "begin": "2024-06-07T13:00:39.129608",
                            "end": "2024-06-07T13:45:39.129608",
                        },
                        {
                            "begin": "2024-06-07T14:00:39.129608",
                            "end": "2024-06-07T14:45:39.129608",
                        },
                        {
                            "begin": "2024-06-07T15:00:39.129608",
                            "end": "2024-06-07T15:45:39.129608",
                        },
                        {
                            "begin": "2024-06-07T16:00:39.129608",
                            "end": "2024-06-07T16:45:39.129608",
                        },
                        {
                            "begin": "2024-06-07T17:00:39.129608",
                            "end": "2024-06-07T17:45:39.129608",
                        },
                        {
                            "begin": "2024-06-10T10:00:39.129608",
                            "end": "2024-06-10T10:45:39.129608",
                        },
                        {
                            "begin": "2024-06-10T11:00:39.129608",
                            "end": "2024-06-10T11:45:39.129608",
                        },
                        {
                            "begin": "2024-06-10T13:00:39.129608",
                            "end": "2024-06-10T13:45:39.129608",
                        },
                        {
                            "begin": "2024-06-10T14:00:39.129608",
                            "end": "2024-06-10T14:45:39.129608",
                        },
                        {
                            "begin": "2024-06-10T15:00:39.129608",
                            "end": "2024-06-10T15:45:39.129608",
                        },
                        {
                            "begin": "2024-06-10T16:00:39.129608",
                            "end": "2024-06-10T16:45:39.129608",
                        },
                        {
                            "begin": "2024-06-10T17:00:39.129608",
                            "end": "2024-06-10T17:45:39.129608",
                        },
                        {
                            "begin": "2024-06-11T10:00:39.129608",
                            "end": "2024-06-11T10:45:39.129608",
                        },
                        {
                            "begin": "2024-06-11T11:00:39.129608",
                            "end": "2024-06-11T11:45:39.129608",
                        },
                        {
                            "begin": "2024-06-11T13:00:39.129608",
                            "end": "2024-06-11T13:45:39.129608",
                        },
                        {
                            "begin": "2024-06-11T14:00:39.129608",
                            "end": "2024-06-11T14:45:39.129608",
                        },
                        {
                            "begin": "2024-06-11T15:00:39.129608",
                            "end": "2024-06-11T15:45:39.129608",
                        },
                        {
                            "begin": "2024-06-11T16:00:39.129608",
                            "end": "2024-06-11T16:45:39.129608",
                        },
                        {
                            "begin": "2024-06-11T17:00:39.129608",
                            "end": "2024-06-11T17:45:39.129608",
                        },
                        {
                            "begin": "2024-06-12T10:00:39.129608",
                            "end": "2024-06-12T10:45:39.129608",
                        },
                        {
                            "begin": "2024-06-12T11:00:39.129608",
                            "end": "2024-06-12T11:45:39.129608",
                        },
                        {
                            "begin": "2024-06-12T13:00:39.129608",
                            "end": "2024-06-12T13:45:39.129608",
                        },
                        {
                            "begin": "2024-06-12T14:00:39.129608",
                            "end": "2024-06-12T14:45:39.129608",
                        },
                        {
                            "begin": "2024-06-12T15:00:39.129608",
                            "end": "2024-06-12T15:45:39.129608",
                        },
                        {
                            "begin": "2024-06-12T16:00:39.129608",
                            "end": "2024-06-12T16:45:39.129608",
                        },
                        {
                            "begin": "2024-06-12T17:00:39.129608",
                            "end": "2024-06-12T17:45:39.129608",
                        },
                        {
                            "begin": "2024-06-13T10:00:39.129608",
                            "end": "2024-06-13T10:45:39.129608",
                        },
                        {
                            "begin": "2024-06-13T11:00:39.129608",
                            "end": "2024-06-13T11:45:39.129608",
                        },
                        {
                            "begin": "2024-06-13T13:00:39.129608",
                            "end": "2024-06-13T13:45:39.129608",
                        },
                        {
                            "begin": "2024-06-13T14:00:39.129608",
                            "end": "2024-06-13T14:45:39.129608",
                        },
                        {
                            "begin": "2024-06-13T15:00:39.129608",
                            "end": "2024-06-13T15:45:39.129608",
                        },
                        {
                            "begin": "2024-06-13T16:00:39.129608",
                            "end": "2024-06-13T16:45:39.129608",
                        },
                        {
                            "begin": "2024-06-13T17:00:39.129608",
                            "end": "2024-06-13T17:45:39.129608",
                        },
                    ],
                },
                "name": "Basic Example",
                "description": "A simple appointment booking selector",
                "iframeHeight": "708px",
                "key": "example1",
                "code": 'from datetime import datetime, timedelta\n\nfrom abstra.forms import read_appointment\n\n# next 14 days\n# only weekdays\n# 10:00 - 18:00\n# 15 minutes interval\n# 45 minutes duration\n# remove lunch break\nslots = []\nmax_date = datetime.now() + timedelta(days=14)\ncurrent_date = datetime.now()\nwhile current_date < max_date:\n    if current_date.weekday() < 5:\n        for hour in range(10, 18):\n            if hour == 12:\n                continue\n            begin = current_date.replace(hour=hour, minute=0)\n            end = begin + timedelta(minutes=45)\n            slots.append((begin, end))\n    current_date += timedelta(days=1)\nread_appointment("Welcome to Abstra, please select a demo slot", slots=slots)\n',
            }
        ],
    },
    "camera-input": {
        "name": "User Camera",
        "description": "Captures and uploads a photo using the user's camera.",
        "type": "camera-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_camera",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "multiple",
                    "description": "Whether the user will be allowed to upload multiple files. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "Union[FileResponse, List[FileResponse]]",
                    "typeDescription": 'A dict containing the picture taken by the user ({"file": file, "url": str, "content": bytes}) or a list of pictures in case of multiple flag set as True',
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": "array"},
                {"argName": "multiple", "typeName": "boolean"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {"label": "Take a picture of your ID", "value": []},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_camera",
                "iframeHeight": "208px",
                "key": "example1",
                "code": 'from abstra.forms import read_camera\n\nread_camera("Take a picture of your ID")\n',
            }
        ],
    },
    "cards-input": {
        "name": "Cards",
        "description": "Presents options as cards for the user. Cards may be selectable.",
        "type": "cards-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            },
            {
                "key": "card-click",
                "description": "Function or expression to be run when a card is clicked",
                "payloadSchema": [
                    {
                        "key": "card",
                        "typeName": "Object",
                        "description": "The card that was clicked",
                    }
                ],
            },
        ],
        "pythonAPI": {
            "name": "read_cards",
            "params": [
                {
                    "argName": "label",
                    "description": "The text related to this input",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "options",
                    "description": "List of dicts representing the cards, each dict can have the following keys: title, subtitle, image, description, topLeftExtra, topRightExtra",
                    "typeName": "list",
                    "typeDescription": [
                        "list[{'title': str, 'subtitle': str, 'image': str, 'description': str, 'topLeftExtra': str, 'topRightExtra': str}]"
                    ],
                    "isKwarg": False,
                    "default": "None",
                },
                {
                    "argName": "multiple",
                    "description": "Whether the user can select multiple options. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to None.",
                    "typeName": "list",
                    "typeDescription": ["list[AbstraCard]"],
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "searchable",
                    "description": "Whether to show a search bar. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "layout",
                    "description": "Whether the cards layout should be 'list' or 'grid'. Defaults to 'list'. The 'grid' only applies to desktop resolutions.",
                    "typeName": "str",
                    "typeDescription": ["str ('list', 'grid')"],
                    "isKwarg": True,
                    "default": "'list'",
                },
                {
                    "argName": "columns",
                    "typeName": "int",
                    "description": "When layout is 'grid', how many columns to display",
                    "isKwarg": True,
                    "default": "2",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "Union[list, any]",
                    "typeDescription": "The options/option selected by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {
                    "argName": "options",
                    "typeName": "array",
                    "items": {
                        "typeName": "object",
                        "properties": [
                            {
                                "argName": "title",
                                "typeName": "string",
                                "description": "",
                            },
                            {
                                "argName": "subtitle",
                                "typeName": "string",
                                "description": "",
                            },
                            {
                                "argName": "image",
                                "typeName": "string",
                                "description": "",
                            },
                            {
                                "argName": "description",
                                "typeName": "string",
                                "description": "",
                            },
                            {
                                "argName": "topLeftExtra",
                                "typeName": "string",
                                "description": "",
                            },
                            {
                                "argName": "topRightExtra",
                                "typeName": "string",
                                "description": "",
                            },
                        ],
                    },
                },
                {"argName": "multiple", "typeName": "boolean"},
                {"argName": "searchable", "typeName": "boolean"},
                {
                    "argName": "value",
                    "typeName": "array",
                    "items": {
                        "typeName": "object",
                        "properties": [
                            {
                                "argName": "title",
                                "typeName": "string",
                                "description": "",
                            },
                            {
                                "argName": "subtitle",
                                "typeName": "string",
                                "description": "",
                            },
                            {
                                "argName": "image",
                                "typeName": "string",
                                "description": "",
                            },
                            {
                                "argName": "description",
                                "typeName": "string",
                                "description": "",
                            },
                            {
                                "argName": "topLeftExtra",
                                "typeName": "string",
                                "description": "",
                            },
                            {
                                "argName": "topRightExtra",
                                "typeName": "string",
                                "description": "",
                            },
                        ],
                    },
                },
                {"argName": "layout", "typeName": "string", "oneOf": ["list", "grid"]},
                {"argName": "columns", "typeName": "number"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "value": [],
                    "label": "Choose your favorite dessert",
                    "options": [
                        {
                            "title": "Crepe",
                            "subtitle": "French",
                            "image": "https://cdn.pixabay.com/photo/2017/01/30/13/56/pancakes-2020870_1280.jpg",
                            "description": "A crêpe or crepe is a type of very thin pancake.",
                        },
                        {
                            "title": "Pancake",
                            "subtitle": "American",
                            "image": "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg",
                            "description": "A pancake is a flat cake, often thin and round.",
                        },
                        {
                            "title": "Waffle",
                            "subtitle": "Belgian",
                            "image": "https://cdn.pixabay.com/photo/2020/05/19/20/54/waffles-5192625_1280.jpg",
                            "description": "A waffle is a patterned dish made from leavened batter or dough.",
                        },
                    ],
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_cards",
                "iframeHeight": "626px",
                "key": "example1",
                "code": 'from abstra.forms import read_cards\n\ncard = read_cards(\n    "Choose your favorite dessert",\n    [\n        {\n            "title": "Crepe",\n            "subtitle": "French",\n            "image": "https://cdn.pixabay.com/photo/2017/01/30/13/56/pancakes-2020870_1280.jpg",\n            "description": "A crêpe or crepe is a type of very thin pancake.",\n        },\n        {\n            "title": "Pancake",\n            "subtitle": "American",\n            "image": "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg",\n            "description": "A pancake is a flat cake, often thin and round.",\n        },\n        {\n            "title": "Waffle",\n            "subtitle": "Belgian",\n            "image": "https://cdn.pixabay.com/photo/2020/05/19/20/54/waffles-5192625_1280.jpg",\n            "description": "A waffle is a patterned dish made from leavened batter or dough.",\n        },\n    ],\n)\n# card = { \'title\': ..., \'subtitle\': ..., \'image\': ..., \'description\': ..., \'topLeftExtra\': ..., \'topRightExtra\': ... }\n',
            },
            {
                "props": {
                    "value": [],
                    "label": "Which desserts do you like?",
                    "options": [
                        {
                            "title": "Crepe",
                            "subtitle": "French",
                            "image": "https://cdn.pixabay.com/photo/2017/01/30/13/56/pancakes-2020870_1280.jpg",
                            "description": "A crêpe or crepe is a type of very thin pancake.",
                        },
                        {
                            "title": "Pancake",
                            "subtitle": "American",
                            "image": "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg",
                            "description": "A pancake is a flat cake, often thin and round.",
                        },
                        {
                            "title": "Waffle",
                            "subtitle": "Belgian",
                            "image": "https://cdn.pixabay.com/photo/2020/05/19/20/54/waffles-5192625_1280.jpg",
                            "description": "A waffle is a patterned dish made from leavened batter or dough.",
                        },
                    ],
                    "multiple": True,
                    "searchable": True,
                },
                "name": "Multiple Selections and Search",
                "description": "A multiple selection question with search enabled.",
                "iframeHeight": "680px",
                "key": "example2",
                "code": 'from abstra.forms import read_cards\n\ncard = read_cards(\n    "Which desserts do you like?",\n    [\n        {\n            "title": "Crepe",\n            "subtitle": "French",\n            "image": "https://cdn.pixabay.com/photo/2017/01/30/13/56/pancakes-2020870_1280.jpg",\n            "description": "A crêpe or crepe is a type of very thin pancake.",\n        },\n        {\n            "title": "Pancake",\n            "subtitle": "American",\n            "image": "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg",\n            "description": "A pancake is a flat cake, often thin and round.",\n        },\n        {\n            "title": "Waffle",\n            "subtitle": "Belgian",\n            "image": "https://cdn.pixabay.com/photo/2020/05/19/20/54/waffles-5192625_1280.jpg",\n            "description": "A waffle is a patterned dish made from leavened batter or dough.",\n        },\n    ],\n    multiple=True,\n    searchable=True,\n)\n',
            },
        ],
    },
    "checkbox-input": {
        "name": "Checkbox",
        "description": "Enables a selection through a single checkbox interaction.",
        "type": "checkbox-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_checkbox",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "bool", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {
                    "argName": "value",
                    "typeName": "boolean",
                    "items": {"typeName": ["string", "number"]},
                },
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "I have read and agree to the terms of services",
                    "value": False,
                },
                "name": "Basic Example",
                "description": "Basic use of read_checkbox",
                "iframeHeight": "96px",
                "key": "example1",
                "code": 'from abstra.forms import read_checkbox\n\nans = read_checkbox("I have read and agree to the terms of services")\n\nprint(ans)\n',
            },
            {
                "props": {
                    "label": "Would you like to receive product updates and announcements via email?",
                    "value": False,
                },
                "name": "Optional field",
                "description": "If check the box is optional, pass the optional parameter required",
                "iframeHeight": "96px",
                "key": "example2",
                "code": 'from abstra.forms import read_checkbox\n\nans = read_checkbox(\n    "Would you like to receive product updates and announcements via email?",\n    required=False,\n)\n\nprint(ans)\n',
            },
            {
                "props": {
                    "label": "I have read and agree to the [terms of services](https://example.com)",
                    "value": False,
                },
                "name": "Use markdown to customize label",
                "description": "Use markdown syntax to customize the label",
                "iframeHeight": "96px",
                "key": "example3",
                "code": 'from abstra.forms import read_checkbox\n\nans = read_checkbox(\n    "I have read and agree to the [terms of services](https://example.com)"\n)\n',
            },
        ],
    },
    "checklist-input": {
        "name": "Checklist",
        "description": "Displays a checklist allowing multiple item selections.",
        "type": "checklist-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_checklist",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "options",
                    "description": "The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]",
                    "typeName": "List[AbstraOption]",
                    "typeDescription": ["List[AbstraOption]"],
                    "isKwarg": False,
                    "default": "None",
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "min",
                    "description": "The minimum number of items that must be selected. Defaults to 0.",
                    "typeName": "int",
                    "isKwarg": True,
                    "default": "0",
                },
                {
                    "argName": "max",
                    "description": "The maximum number of items that can be selected. Defaults to the number of options.",
                    "typeName": "int",
                    "isKwarg": True,
                    "default": "len(options)",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "List[str]", "typeDescription": "The selected values"}
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {
                    "argName": "value",
                    "typeName": "array",
                    "items": {"typeName": ["string"]},
                },
                {
                    "argName": "options",
                    "typeName": "array",
                    "items": {
                        "typeName": ["object"],
                        "properties": [
                            {
                                "argName": "label",
                                "typeName": "string",
                                "description": "The key of the option on the returning object",
                            },
                            {
                                "argName": "value",
                                "typeName": "object",
                                "description": "The value of the option on the returning object",
                            },
                        ],
                    },
                },
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Which programming language have you worked with?",
                    "options": [
                        {"label": "Python", "value": "Python"},
                        {"label": "JavaScript", "value": "JavaScript"},
                        {"label": "Go", "value": "Go"},
                        {"label": "Elixir", "value": "Elixir"},
                        {"label": "Haskell", "value": "Haskell"},
                    ],
                    "value": [],
                },
                "name": "Basic Example",
                "description": "Basic use of read_checklist",
                "iframeHeight": "318px",
                "key": "example1",
                "code": 'from abstra.forms import read_checklist\n\nans = read_checklist(\n    "Which programming language have you worked with?",\n    ["Python", "JavaScript", "Go", "Elixir", "Haskell"],\n)\n',
            },
            {
                "props": {
                    "label": "What are the solutions to the equation x^2 + 3x + 2 = 0?",
                    "options": [
                        {"label": "-1", "value": "a"},
                        {"label": "-2", "value": "b"},
                        {"label": "0 and -1", "value": "c"},
                        {"label": "0 and 1", "value": "d"},
                        {"label": "None of the above", "value": "e"},
                    ],
                    "value": [],
                },
                "name": "Label and value dict",
                "description": "Use a dictionary to specify the label and value of each option. The label will be displayed to the user, and the value will be returned by the widget.",
                "iframeHeight": "318px",
                "key": "example2",
                "code": 'from abstra.forms import read_checklist\n\nans = read_checklist(\n    "What are the solutions to the equation x^2 + 3x + 2 = 0?",\n    [\n        {"label": "-1", "value": "a"},\n        {"label": "-2", "value": "b"},\n        {"label": "0 and -1", "value": "c"},\n        {"label": "0 and 1", "value": "d"},\n        {"label": "None of the above", "value": "e"},\n    ],\n)\n\n# ans = ["a", "b"]\n',
            },
            {
                "props": {
                    "label": "",
                    "options": [
                        {
                            "label": "I have read and agree to the [terms of services](https://example.com)",
                            "value": "agree",
                        }
                    ],
                    "value": [],
                },
                "name": "Use markdown in options",
                "description": "Use markdown syntax to customize the options.",
                "iframeHeight": "96px",
                "key": "example3",
                "code": 'from abstra.forms import read_checklist\n\nans = read_checklist(\n    "",\n    [\n        {\n            "label": "I have read and agree to the [terms of services](https://example.com)",\n            "value": "agree",\n        },\n    ],\n    min=1,\n)\n',
            },
            {
                "props": {
                    "label": "What are your favorite programming languages? Choose up to 3.",
                    "options": [
                        {"label": "Python", "value": "Python"},
                        {"label": "JavaScript", "value": "JavaScript"},
                        {"label": "Go", "value": "Go"},
                        {"label": "Elixir", "value": "Elixir"},
                        {"label": "Haskell", "value": "Haskell"},
                    ],
                    "value": [],
                },
                "name": "Set the range of selections",
                "description": "Set the minimum and maximum number of selections.",
                "iframeHeight": "318px",
                "key": "example4",
                "code": 'from abstra.forms import read_checklist\n\nans = read_checklist(\n    "What are your favorite programming languages? Choose up to 3.",\n    ["Python", "JavaScript", "Go", "Elixir", "Haskell"],\n    min=1,\n    max=3,\n)\n',
            },
        ],
    },
    "cnpj-input": {
        "name": "CNPJ Input",
        "description": "CNPJ number input with validation and masking.",
        "type": "cnpj-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_cnpj",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to None.",
                    "typeName": "str",
                    "typeDescription": ["str (00.000.000/0001-00)"],
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "invalid_message",
                    "description": "The message to display when the user enters an invalid value. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "00.000.000/0001-00".',
                    "typeName": "str",
                    "typeDescription": ["str (00.000.000/0001-00)"],
                    "isKwarg": True,
                    "default": '"00.000.000/0001-00"',
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": "string"},
                {"argName": "invalidMessage", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "placeholder", "typeName": "string"},
            ]
        },
        "examples": [
            {
                "props": {"label": "Insert your CNPJ below", "value": ""},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_cnpj",
                "iframeHeight": "142px",
                "key": "example1",
                "code": 'from abstra.forms import read_cnpj\n\nname = read_cnpj("Insert your CNPJ below")\n',
            }
        ],
    },
    "code-input": {
        "name": "Code Input",
        "description": "Accepts code input with syntax highlighting",
        "type": "code-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_code",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "default": "''",
                    "typeName": "str",
                    "isKwarg": False,
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "language",
                    "description": "The programming language. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "language", "typeName": "string"},
                {"argName": "value", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Show me the code!",
                    "language": "c",
                    "value": '#include<stdio.h>\nint main(int argc, char** argv) {\n  char name[256];\n  scanf("%s", name);\n  printf("%s, here is", name);\n  return 0;\n}',
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_code",
                "iframeHeight": "598px",
                "key": "example1",
                "code": 'from abstra.forms import read_code\n\nans = read_code(\n    "Show me the code!",\n    language="c",\n    initial_value="""\\\n#include<stdio.h>\nint main(int argc, char** argv) {\n  char name[256];\n  scanf("%s", name);\n  printf("%s, here is", name);\n  return 0;\n}""",\n)\n',
            }
        ],
    },
    "cpf-input": {
        "name": "CPF Input",
        "description": "CPF number input with validation and masking.",
        "type": "cpf-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_cpf",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "typeDescription": ["str (000.000.000-00)"],
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "invalid_message",
                    "description": "The message to display when the user enters an invalid value. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "000.000.000-00".',
                    "typeName": "str",
                    "typeDescription": ["str (000.000.000-00)"],
                    "isKwarg": True,
                    "default": '"000.000.000-00"',
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": "string"},
                {"argName": "invalidMessage", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "placeholder", "typeName": "string"},
            ]
        },
        "examples": [
            {
                "props": {"label": "Insert your CPF below"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_cpf",
                "iframeHeight": "142px",
                "key": "example1",
                "code": 'from abstra.forms import read_cpf\n\nname = read_cpf("Insert your CPF below")\n',
            }
        ],
    },
    "currency-input": {
        "name": "Currency Input",
        "description": "Enables monetary value input with currency formatting.",
        "type": "currency-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_currency",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "default": "''",
                    "typeName": "str",
                    "isKwarg": False,
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to 0.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "0",
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "min",
                    "description": 'The minimum value allowed, eg. "0". Defaults to None.',
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "max",
                    "description": 'The maximum value allowed, eg. "100". Defaults to None.',
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "currency",
                    "description": 'The currency to display to the user, eg. "USD", "BRL, "EUR", "GBP". Defaults to "USD".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"USD"',
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "float",
                    "typeDescription": "The value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "currency", "typeName": "string"},
                {"argName": "value", "typeName": ["number", "null"]},
                {"argName": "min", "typeName": ["number", "null"]},
                {"argName": "max", "typeName": ["number", "null"]},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "placeholder", "typeName": "string"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "How many credits do you want?",
                    "value": 10,
                    "min": 10,
                    "currency": "USD",
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_currency",
                "iframeHeight": "142px",
                "key": "example1",
                "code": 'from abstra.forms import read_currency\n\nread_currency("How many credits do you want?", currency="USD", initial_value=10, min=10)\n',
            }
        ],
    },
    "custom-input": {
        "type": "custom-input",
        "name": "Custom Widget",
        "description": "Allows for a fully customizable widget with custom HTML, CSS, and JS.",
        "events": [
            {
                "key": "custom-event",
                "description": "Function or expression to be run when custom event is triggered",
                "payloadSchema": [],
            },
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            },
        ],
        "pythonAPI": {
            "name": "read_custom",
            "params": [
                {
                    "argName": "html_body",
                    "description": "The HTML body content",
                    "typeName": "str",
                    "typeDescription": ["str (HTML snippet)"],
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to be stored in custom widget state.",
                    "typeName": "Any",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "''",
                },
                {
                    "argName": "html_head",
                    "description": "The HTML head content",
                    "typeName": "str",
                    "typeDescription": ["str (HTML snippet)"],
                    "isKwarg": True,
                    "default": "''",
                },
                {
                    "argName": "css",
                    "description": "The widget's CSS",
                    "typeName": "str",
                    "typeDescription": ["str (CSS snippet)"],
                    "isKwarg": True,
                    "default": "''",
                },
                {
                    "argName": "js",
                    "description": "The widget's JavaScript",
                    "typeName": "str",
                    "typeDescription": ["str (JavaScript snippet)"],
                    "isKwarg": True,
                    "default": "''",
                },
                {
                    "argName": "height",
                    "description": "The widget's height",
                    "typeName": "int",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [{"typeName": "Any", "typeDescription": "The custom response"}],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {
                    "argName": "value",
                    "typeName": ["string", "number", "boolean", "object", "null"],
                },
                {"argName": "htmlHead", "typeName": "string"},
                {"argName": "htmlBody", "typeName": "string"},
                {"argName": "css", "typeName": "string"},
                {"argName": "js", "typeName": "string"},
                {"argName": "height", "typeName": "number"},
                {"argName": "key", "typeName": "string"},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "htmlBody": "<button id='date-btn'>Get current date</button>",
                    "js": "document.getElementById('date-btn').addEventListener('click',function() {\n    const date = new Date();\n    const day = date.getDate();\n    const month = date.getMonth() + 1;\n    const year = date.getFullYear();\n\n    changeEvent(day + '/' + month + '/' + year);\n});",
                    "css": "body {\n    margin: 0;\n    padding: 0;\n}\n\n#date-btn {\n    cursor: pointer;\n    background-color: #343b46;\n    border: none;\n    border-radius: 4px;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n}\n\n#date-btn:hover {\n    background-color: #3e4756;\n}",
                    "label": "Custom Widget",
                },
                "name": "Basic Example",
                "description": "The following example shows how to create a custom widget with a button that returns the current date.",
                "iframeHeight": "252px",
                "key": "example1",
                "code": 'from abstra.forms import read_custom\n\ncurrent_date = read_custom(\n    "<button id=\'date-btn\'>Get current date</button>",\n    label="Custom Widget",\n    js="""\n    document.getElementById(\'date-btn\').addEventListener(\'click\',function() {\n        const date = new Date();\n        const day = date.getDate();\n        const month = date.getMonth() + 1;\n        const year = date.getFullYear();\n\n        changeEvent(day + \'/\' + month + \'/\' + year);\n    });\n    """,\n    css="""\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    #date-btn {\n        cursor: pointer;\n        background-color: #343b46;\n        border: none;\n        border-radius: 4px;\n        color: white;\n        padding: 15px 32px;\n        text-align: center;\n        text-decoration: none;\n        display: inline-block;\n        font-size: 16px;\n    }\n\n    #date-btn:hover {\n        background-color: #3e4756;\n    }\n    """,\n)\n',
            }
        ],
    },
    "date-input": {
        "name": "Date Picker",
        "description": "Provides a date picker with calendar interface.",
        "type": "date-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_date",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to None.",
                    "typeName": "Union[datetime.date, time.struct_time, str]",
                    "typeDescription": [
                        "datetime.date",
                        "time.struct_time",
                        "str (YYYY-MM-DD)",
                    ],
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "datetime.date",
                    "typeDescription": "The value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {"label": "When were you born?", "value": ""},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_date",
                "iframeHeight": "144px",
                "key": "example1",
                "code": 'from abstra.forms import read_date\n\nbirthday = read_date("When were you born?")\nyear = birthday.year\nmonth = birthday.month\nday = birthday.day\n',
            }
        ],
    },
    "dropdown-input": {
        "name": "Dropdown",
        "description": "Provides a dropdown menu for single or multiple selections.",
        "type": "dropdown-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_dropdown",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "options",
                    "description": "The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]",
                    "typeName": "List[AbstraOption]",
                    "typeDescription": ["List[AbstraOption]"],
                    "isKwarg": False,
                    "default": "None",
                },
                {
                    "argName": "multiple",
                    "description": "Whether the user can select multiple options. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to [].",
                    "typeName": "str or list",
                    "isKwarg": True,
                    "default": "[]",
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "Choose an option".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Choose an option"',
                },
                {
                    "argName": "min",
                    "description": "The minimal amount of options that should be selected. Defaults to None.",
                    "typeName": "number",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "max",
                    "description": "The maximum amount of options that should be selected. Defaults to None.",
                    "typeName": "number",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value selected by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {
                    "argName": "value",
                    "typeName": "array",
                    "items": {"typeName": "string"},
                },
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {
                    "argName": "options",
                    "typeName": "array",
                    "items": {
                        "typeName": ["object"],
                        "properties": [
                            {
                                "argName": "label",
                                "typeName": "string",
                                "description": "The label of the option on the returning object",
                            },
                            {
                                "argName": "value",
                                "typeName": "object",
                                "description": "The value of the option on the returning object",
                            },
                        ],
                    },
                },
                {"argName": "min", "typeName": ["number", "null"]},
                {"argName": "max", "typeName": ["number", "null"]},
                {"argName": "placeholder", "typeName": "string"},
                {"argName": "multiple", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Choose a color",
                    "options": [
                        {"label": "Red", "value": "Red"},
                        {"label": "Green", "value": "Green"},
                        {"label": "Blue", "value": "Blue"},
                    ],
                    "value": [],
                },
                "name": "Basic Example",
                "description": "Basic use of read_dropdown",
                "iframeHeight": "140px",
                "key": "example1",
                "code": 'from abstra.forms import read_dropdown\n\nans = read_dropdown(\n    "Choose a color",\n    ["Red", "Green", "Blue"],\n)\n# ans = "Red", "Green" or "Blue"\n',
            },
            {
                "props": {
                    "label": "Choose a color",
                    "options": [
                        {"label": "Red", "value": "R"},
                        {"label": "Green", "value": "G"},
                        {"label": "Blue", "value": "B"},
                    ],
                    "value": [],
                },
                "name": "Label and value dict",
                "description": "Use a dictionary to specify the label and value of each option. The label will be displayed to the user, and the value will be returned by the widget.",
                "iframeHeight": "140px",
                "key": "example2",
                "code": 'from abstra.forms import read_dropdown\n\nans = read_dropdown(\n    "Choose a color",\n    [\n        {"label": "Red", "value": "R"},\n        {"label": "Green", "value": "G"},\n        {"label": "Blue", "value": "B"},\n    ],\n)\n# ans = "R", "G" or "B"\n',
            },
        ],
    },
    "email-input": {
        "name": "Email Input",
        "description": " Collects and validates an email address.",
        "type": "email-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_email",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "invalid_email_message",
                    "typeName": "str",
                    "description": "Invalid e-mail message",
                    "isKwarg": True,
                    "default": '"This email is invalid."',
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "invalidEmailMessage", "typeName": "string"},
                {"argName": "value", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "placeholder", "typeName": "string"},
            ]
        },
        "examples": [
            {
                "props": {"label": "What is your email?"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_email",
                "iframeHeight": "142px",
                "key": "example1",
                "code": 'from abstra.forms import read_email\n\nemail = read_email("What is your email?")\n',
            }
        ],
    },
    "file-input": {
        "name": "File Upload",
        "description": "Enables file upload via file explorer.",
        "type": "file-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_file",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "multiple",
                    "description": "Whether the user will be allowed to upload multiple files. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "accepted_formats",
                    "description": "The specific file types that the input should accept. Defaults to [], accepting all file formats.",
                    "typeName": "list",
                    "isKwarg": True,
                    "default": "[]",
                },
                {
                    "argName": "max_file_size",
                    "description": "Maximum size allowed to be transfered in total in MB.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "Union[FileResponse, List[FileResponse]]",
                    "typeDescription": "A object containing the file uploaded by the user: FileResponse(path: Path, file: BufferedReader). If the multiple flag is set as True, it might contain a list of FileResponses.",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": ["array"]},
                {"argName": "multiple", "typeName": "boolean"},
                {"argName": "acceptedFormats", "typeName": "array"},
                {"argName": "maxFileSize", "typeName": ["number", "null"]},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Upload your .xlsx file",
                    "accepted_formats": [".xlsx"],
                    "value": [],
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_file",
                "iframeHeight": "259px",
                "key": "example1",
                "code": 'from abstra.forms import read_file\n\nfile_response = read_file("Upload your .xlsx file", accepted_formats=[".xlsx"])\nfile = file_response.file  # File object\n',
            },
            {
                "props": {"label": "Upload your file", "value": []},
                "name": "Saving file to a directory on Files storage",
                "description": "This example shows how to save a file to a directory on Files",
                "iframeHeight": "259px",
                "key": "example2",
                "code": 'import os\nimport shutil\n\nfrom abstra.forms import read_file\n\nfile_response = read_file("Upload your file")\n\ndestination_dir = "foo/bar/"\n# Creates directory if it does not exist\nos.makedirs(destination_dir, exist_ok=True)\n\n# Copies file to destination directory\nshutil.copy(file_response.file.name, destination_dir + file_response.name)\n',
            },
            {
                "props": {"label": "Upload your file", "value": []},
                "name": "Renaming in File Upload",
                "description": "This example demonstrates how to upload, rename, and save a user file in a persistent directory.",
                "iframeHeight": "259px",
                "key": "example3",
                "code": 'from pathlib import Path\n\nfrom abstra.common import get_persistent_dir\nfrom abstra.forms import read_file\n\nf = read_file("Upload your file.json")\n\n# Get file extension\nextension = Path(f.name).suffix\n\n# if extension is not .json, raise an error\nif extension != ".json":\n    raise ValueError("File must be a .json file")\n\n# if the extension is the expected, saves the file to a persistent directory\nget_persistent_dir().joinpath("keys.json").write_bytes(f.file.read())\n',
            },
            {
                "props": {"label": "Upload your file", "value": []},
                "name": "Preserving Filename in File Upload",
                "description": "This example demonstrates how to read a user-uploaded file and save it to a specific persistent directory, preserving its original name.",
                "iframeHeight": "259px",
                "key": "example4",
                "code": 'from pathlib import Path\n\nfrom abstra.common import get_persistent_dir\nfrom abstra.forms import read_file\n\nf = read_file("Upload your file")\n\n# Get the original filename\noriginal_filename = Path(f.name).name\n\n# Saves the file to a persistent directory\nget_persistent_dir().joinpath(original_filename).write_bytes(f.file.read())\n',
            },
        ],
    },
    "image-input": {
        "name": "Image Upload",
        "description": "Allows for image file uploads with preview and validation.",
        "type": "image-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_image",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "multiple",
                    "description": "Whether the user will be allowed to upload multiple files. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "max_file_size",
                    "description": "Maximum size allowed to be transfered in total in MB.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "Union[FileResponse, List[FileResponse]]",
                    "typeDescription": 'A dict containing the image file uploaded by the user ({"file": file, "url": str, "content": bytes}) or a list of images in case of multiple flag set as True',
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": "array"},
                {"argName": "maxFileSize", "typeName": ["number", "null"]},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "multiple", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {"label": "Upload your .png image", "value": []},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_image",
                "iframeHeight": "208px",
                "key": "example1",
                "code": 'from abstra.forms import read_image\n\nfile_response = read_image("Upload your .png image")\nfile = file_response.file  # File object\n',
            }
        ],
    },
    "list-input": {
        "name": "Custom List",
        "description": "Collects a dynamic list of values based on a specified schema.",
        "type": "list-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_list",
            "params": [
                {
                    "argName": "item_schema",
                    "description": "The schema for the items of the list",
                    "typeName": "Any",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": "''",
                    "typeName": "array",
                    "isKwarg": True,
                    "default": "[]",
                },
                {
                    "argName": "min",
                    "description": "Min value accepted by the input. Defaults to None.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "max",
                    "description": "Max value accepted by the input. Defaults to None.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "add_button_text",
                    "description": "''",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"+"',
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "list",
                    "typeDescription": "The values entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "value", "typeName": "array"},
                {"argName": "min", "typeName": "number"},
                {"argName": "max", "typeName": "number"},
                {"argName": "addButtonText", "typeName": "string"},
                {"argName": "schemas", "typeName": "array"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "value": [{"Name": "", "Email": ""}],
                    "min": 1,
                    "max": 3,
                    "schemas": [
                        [
                            {
                                "type": "text-input",
                                "key": "Name",
                                "label": "Name",
                                "value": "",
                                "placeholder": "",
                                "required": True,
                                "hint": None,
                                "fullWidth": False,
                                "mask": None,
                                "disabled": False,
                                "errors": [],
                            },
                            {
                                "type": "email-input",
                                "key": "Email",
                                "label": "Email",
                                "value": "",
                                "placeholder": "",
                                "required": True,
                                "hint": None,
                                "fullWidth": False,
                                "disabled": False,
                                "errors": [],
                            },
                        ]
                    ],
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_list",
                "iframeHeight": "427px",
                "key": "example1",
                "code": "from abstra.forms import ListItemSchema, read_list\n\nitem = ListItemSchema().read(\"Name\").read_email(\"Email\")\nans = read_list(item, min=1, max=3)\n# ans = [{'Name': '', 'Email': ''}]\n",
            }
        ],
    },
    "multiple-choice-input": {
        "name": "Multiple Choice",
        "description": "Offers multiple choice selections with single or multi-select options.",
        "type": "multiple-choice-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_multiple_choice",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "options",
                    "description": "The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]",
                    "typeName": "List[AbstraOption]",
                    "typeDescription": ["List[AbstraOption]"],
                    "isKwarg": False,
                    "default": "None",
                },
                {
                    "argName": "multiple",
                    "description": "Whether the user can select multiple options. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "min",
                    "description": "The minimal amount of options that should be selected. Defaults to None.",
                    "typeName": "number",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "max",
                    "description": "The maximum amount of options that should be selected. Defaults to None.",
                    "typeName": "number",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "initial_value",
                    "description": "The initial values of the selection. Defaults to [].",
                    "typeName": "[]",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "Union[list, any]",
                    "typeDescription": "The values/value selected by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "multiple", "typeName": "boolean"},
                {
                    "argName": "value",
                    "typeName": "array",
                    "items": {"typeName": "string"},
                },
                {"argName": "min", "typeName": ["number", "null"]},
                {"argName": "max", "typeName": ["number", "null"]},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {
                    "argName": "options",
                    "typeName": "array",
                    "items": {
                        "typeName": ["object"],
                        "properties": [
                            {
                                "argName": "label",
                                "typeName": "string",
                                "description": "The key of the option on the returning object",
                            },
                            {
                                "argName": "value",
                                "typeName": "object",
                                "description": "The value of the option on the returning object",
                            },
                        ],
                    },
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Which programming language do you prefer?",
                    "options": ["Python", "JavaScript"],
                    "value": [],
                },
                "name": "Basic Example",
                "description": "Basic use of read_multiple_choice",
                "iframeHeight": "177px",
                "key": "example1",
                "code": 'from abstra.forms import read_multiple_choice\n\nans = read_multiple_choice(\n    "Which programming language do you prefer?",\n    ["Python", "JavaScript"],\n)\n# ans = "Python" or "JavaScript"\n',
            },
            {
                "props": {
                    "label": "Which programming language do you prefer?",
                    "options": ["Python", "JavaScript"],
                    "value": [],
                },
                "name": "Label and value dict",
                "description": "Use a dictionary to specify the label and value of each option. The label will be displayed to the user, and the value will be returned by the widget.",
                "iframeHeight": "177px",
                "key": "example2",
                "code": 'from abstra.forms import read_multiple_choice\n\nans = read_multiple_choice(\n    "Which programming language do you prefer?",\n    [{"label": " Python", "value": "py"}, {"label": "JavaScript", "value": "js"}],\n)\n# ans = "py" or "js"\n',
            },
            {
                "props": {
                    "label": "What features do you love?",
                    "options": ["forms", "jobs", "hooks"],
                    "multiple": True,
                    "value": [],
                },
                "name": "Checkboxes",
                "description": "Use `multiple=true` when you want allow users to select more than one option. This will make it returns a list.",
                "iframeHeight": "224px",
                "key": "example3",
                "code": 'from abstra.forms import read_multiple_choice\n\nans = read_multiple_choice(\n    "What features do you love?", ["forms", "jobs", "hooks"], multiple=True\n)\n# ans = ["forms", "jobs", "hooks"]\n',
            },
        ],
    },
    "nps-input": {
        "name": "NPS Input",
        "description": "Captures Net Promoter Score feedback with a 0-10 rating scale.",
        "type": "nps-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_nps",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "min",
                    "description": "Min value accepted by the input. Defaults to 0.",
                    "typeName": "int",
                    "isKwarg": True,
                    "default": "0",
                },
                {
                    "argName": "max",
                    "description": "Max value accepted by the input. Defaults to 10.",
                    "typeName": "int",
                    "isKwarg": True,
                    "default": "10",
                },
                {
                    "argName": "min_hint",
                    "description": 'Text to display next to the min value. Defaults to "Not at all likely".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Not at all likely"',
                },
                {
                    "argName": "max_hint",
                    "description": 'Text to display next to the max value. Defaults to "Extremely likely".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Extremely likely"',
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to None.",
                    "typeName": "str",
                    "typeDescription": ["str (nps format)"],
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "int", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "min", "typeName": ["number", "null"]},
                {"argName": "max", "typeName": ["number", "null"]},
                {"argName": "minHint", "typeName": "string"},
                {"argName": "maxHint", "typeName": "string"},
                {"argName": "value", "typeName": ["number", "null"]},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "How likely are you to recommend Abstra Cloud?",
                    "minHint": "No way!",
                    "maxHint": "Hell yeah!",
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_nps",
                "iframeHeight": "158px",
                "key": "example1",
                "code": 'from abstra.forms import read_nps\n\nans = read_nps(\n    "How likely are you to recommend Abstra Cloud?",\n    min_hint="No way!",\n    max_hint="Hell yeah!",\n)\n',
            }
        ],
    },
    "number-input": {
        "name": "Number Input",
        "description": "Collects numeric input with optional min/max limits.",
        "type": "number-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_number",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to 0.",
                    "typeName": "number",
                    "isKwarg": True,
                    "default": "0",
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "min",
                    "description": "Min value accepted by the input. Defaults to None.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "max",
                    "description": "Max value accepted by the input. Defaults to None.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "float",
                    "typeDescription": "The value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": ["number", "null"]},
                {"argName": "min", "typeName": ["number", "null"]},
                {"argName": "max", "typeName": ["number", "null"]},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "placeholder", "typeName": "string"},
            ]
        },
        "examples": [
            {
                "props": {"label": "How old are you?"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_number",
                "iframeHeight": "142px",
                "key": "example1",
                "code": 'from abstra.forms import read_number\n\nage = read_number("How old are you?")\n',
            }
        ],
    },
    "number-slider-input": {
        "name": "Number Slider",
        "description": "Provides a slider for selecting numerical values within a range.",
        "type": "number-slider-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_number_slider",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to 0.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "0",
                },
                {
                    "argName": "min",
                    "description": "Min value accepted by the input. Defaults to None.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "max",
                    "description": "Max value accepted by the input. Defaults to None.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "step",
                    "description": "The value to be incremented or decremented while using the input button. Defaults to None.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "float",
                    "typeDescription": "The value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": "number"},
                {"argName": "min", "typeName": "number"},
                {"argName": "max", "typeName": "number"},
                {"argName": "step", "typeName": "number"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {"label": "Set volume"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_number",
                "iframeHeight": "122px",
                "key": "example1",
                "code": 'from abstra.forms import read_number_slider\n\nage = read_number_slider("Set volume")\n',
            }
        ],
    },
    "pandas-row-selection-input": {
        "name": "Selectable Table",
        "description": "Enables selection of rows from a displayed pandas DataFrame table.",
        "type": "pandas-row-selection-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_pandas_row_selection",
            "params": [
                {
                    "argName": "df",
                    "description": "The pandas dataframe to be displayed",
                    "typeName": '"DataFrame"',
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "display_index",
                    "description": "Whether to show a index column. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value of the selection. Defaults to []",
                    "typeName": "list",
                    "isKwarg": True,
                    "default": "[]",
                },
                {
                    "argName": "multiple",
                    "description": "Whether the user will be allowed to select multiple rows. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "min",
                    "description": "The minimal amount of options that should be selected. Defaults to None.",
                    "typeName": "number",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "max",
                    "description": "The maximum amount of options that should be selected. Defaults to None.",
                    "typeName": "number",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "page_size",
                    "description": "The number of rows to display per page. Defaults to 10.",
                    "typeName": "number",
                    "isKwarg": True,
                    "default": "10",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to True.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "list", "typeDescription": "The list of selected rows"}
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "table",
                    "typeName": "object",
                    "properties": [
                        {"argName": "data", "typeName": "array"},
                        {
                            "argName": "schema",
                            "typeName": "object",
                            "properties": [{"argName": "fields", "typeName": "array"}],
                        },
                    ],
                },
                {"argName": "displayIndex", "typeName": "boolean"},
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": "array"},
                {"argName": "min", "typeName": ["number", "null"]},
                {"argName": "max", "typeName": ["number", "null"]},
                {"argName": "pageSize", "typeName": "number"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "multiple", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "value": [],
                    "table": {
                        "schema": {
                            "fields": [
                                {"name": "Country", "type": "string"},
                                {"name": "Population", "type": "number"},
                            ],
                            "primaryKey": ["Country"],
                        },
                        "data": [
                            {"Country": "USA", "Population": "32,700,000"},
                            {"Country": "China", "Population": "1,300,000,000"},
                            {"Country": "Japan", "Population": "126,000,000"},
                        ],
                    },
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_pandas",
                "iframeHeight": "348px",
                "key": "example1",
                "code": 'import pandas as pd\nfrom abstra.forms import read_pandas_row_selection\n\ndata = [\n    {"Country": "USA", "Population": "32,700,000"},\n    {"Country": "China", "Population": "1,300,000,000"},\n    {"Country": "Japan", "Population": "126,000,000"},\n]\ndf = pd.DataFrame(data)\nread_pandas_row_selection(df)\n',
            }
        ],
    },
    "password-input": {
        "name": "Password Input",
        "type": "password-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "description": "A password field, including strength validation options.",
        "pythonAPI": {
            "name": "read_password",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "lowercase_required",
                    "description": "Whether the input must have at least one lowercase character. Defaults to True.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "uppercase_required",
                    "description": "Whether the input must have at least one uppercase character. Defaults to True.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "special_required",
                    "description": "Whether the input must have at least one special character. Defaults to True.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "digit_required",
                    "description": "Whether the input must have at least one digit. Defaults to True.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "min_length",
                    "description": "Minimum length of the password. Defaults to 8.",
                    "typeName": "int",
                    "isKwarg": True,
                    "default": "8",
                },
                {
                    "argName": "max_length",
                    "description": "Maximum length of the password. Defaults to None.",
                    "typeName": "int",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "size",
                    "description": "Size of the password. Defaults to None.",
                    "typeName": "int",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "pattern",
                    "description": "A regex pattern for the accepted password. Defaults to None.",
                    "typeName": "str",
                    "typeDescription": ["str (regex)"],
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "autocomplete",
                    "description": 'The autocomplete HTML attribute. Defaults to "current-password".',
                    "typeName": "str",
                    "typeDescription": [
                        "str ('off', 'name', 'email', 'username', 'current-password', 'new-password')"
                    ],
                    "isKwarg": True,
                    "default": '"current-password"',
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "lowercaseRequired", "typeName": ["boolean", "string"]},
                {"argName": "uppercaseRequired", "typeName": ["boolean", "string"]},
                {"argName": "specialRequired", "typeName": ["boolean", "string"]},
                {"argName": "digitRequired", "typeName": ["boolean", "string"]},
                {"argName": "minLength", "typeName": "number"},
                {"argName": "maxLength", "typeName": ["number", "null"]},
                {"argName": "size", "typeName": ["number", "null"]},
                {"argName": "pattern", "typeName": ["string", "null"]},
                {"argName": "autocomplete", "typeName": "string"},
                {"argName": "secret", "typeName": "boolean"},
                {"argName": "value", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "placeholder", "typeName": "string"},
            ]
        },
        "examples": [
            {
                "props": {"label": "Insert your password below", "value": ""},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_password",
                "iframeHeight": "142px",
                "key": "example1",
                "code": 'from abstra.forms import read_password\n\nans = read_password("Insert your password below")\n',
            }
        ],
    },
    "phone-input": {
        "name": "Phone Input",
        "description": "A phone inputs with country code and national number.",
        "type": "phone-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_phone",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. It contains two keys: 'country_code' (string with optional + sign or number) and 'national_number' (str). Ex: {'country_code': '55', 'national_number': '21999990000'}.",
                    "typeName": "dict",
                    "typeDescription": [
                        'dict ({"country_code": str, "national_number": str})'
                    ],
                    "isKwarg": True,
                    "default": '{"country_code": "", "national_number": ""}',
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display in the national number input. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "invalid_message",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Invalid phone number."',
                    "description": "The message to display when the input is invalid",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "PhoneResponse",
                    "typeDescription": 'A dict containing the value entered by the user ({"country_code": str, "national_number": str})',
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {
                    "argName": "value",
                    "typeName": "object",
                    "properties": [
                        {"argName": "countryCode", "typeName": "string"},
                        {"argName": "nationalNumber", "typeName": "string"},
                    ],
                },
                {"argName": "invalidMessage", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "placeholder", "typeName": "string"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "What is your phone number?",
                    "value": {"countryCode": "", "nationalNumber": ""},
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_phone",
                "iframeHeight": "142px",
                "key": "example1",
                "code": 'from abstra.forms import read_phone\n\nphone = read_phone("What is your phone number?")\nnumber = phone.raw  # eg: 5521999999999\nmasked = phone.masked  # eg: +55 (21) 99999-9999\n',
            }
        ],
    },
    "rating-input": {
        "name": "Rating Input",
        "description": "Collects user feedback with emoji icons.",
        "type": "rating-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_rating",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to 0.",
                    "typeName": "int",
                    "isKwarg": True,
                    "default": "0",
                },
                {
                    "argName": "max",
                    "description": "Max value accepted by the input. Defaults to None.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "char",
                    "description": "Which char should be displayed as icon?",
                    "typeName": "str",
                    "typeDescription": ["str (unicode-character)"],
                    "isKwarg": True,
                    "default": "⭐️",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "float",
                    "typeDescription": "The value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": ["number", "null"]},
                {"argName": "max", "typeName": "number"},
                {"argName": "char", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {"label": "How much do you rate this movie?", "value": 3},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_rating",
                "iframeHeight": "130px",
                "key": "example1",
                "code": 'from abstra.forms import read_rating\n\nrating = read_rating("How do you rate this movie?")\n',
            },
            {
                "props": {
                    "label": "How do you evaluate your Python skills?",
                    "char": "🐍",
                    "max": 3,
                    "value": 2,
                },
                "name": "Custom chars and number of points",
                "description": "The following example demonstrate some of the available functionality for read_rating",
                "iframeHeight": "130px",
                "key": "example2",
                "code": 'from abstra.forms import read_rating\n\nrating = read_rating("How do you evaluate your Python skills?", char="🐍", max=3)\n',
            },
        ],
    },
    "rich-text-input": {
        "name": "Rich Text Input",
        "type": "rich-text-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "description": "Offers a rich text editor for formatted textual input.",
        "pythonAPI": {
            "name": "read_richtext",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "Your rich text here".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Your rich text here"',
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "str",
                    "typeDescription": "The rich text value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "placeholder", "typeName": "string"},
            ]
        },
        "examples": [
            {
                "props": {"label": "Write here your bio", "value": ""},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_richtext",
                "iframeHeight": "206px",
                "key": "example1",
                "code": 'from abstra.forms import read_richtext\n\nread_richtext("Write here your bio")\n',
            }
        ],
    },
    "tag-input": {
        "name": "Tag Input",
        "type": "tag-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "description": "Enables input of tags or keywords with autocomplete suggestions.",
        "pythonAPI": {
            "name": "read_tag",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to [].",
                    "typeName": "list",
                    "typeDescription": ["list[str]"],
                    "isKwarg": True,
                    "default": "[]",
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "List[str]",
                    "typeDescription": "The values entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": ["array"]},
                {"argName": "placeholder", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Type and press enter to add a tag",
                    "value": ["Red", "Green", "Blue"],
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_tag",
                "iframeHeight": "186px",
                "key": "example1",
                "code": 'from abstra.forms import read_tag\n\nans = read_tag(\n    "Type and press enter to add a tag", initial_value=["Red", "Green", "Blue"]\n)\n# ans = ["Red", "Green" or "Blue"]`\n',
            }
        ],
    },
    "text-input": {
        "name": "Text Input",
        "description": "Collects plain text input with customizable placeholders and validation.",
        "type": "text-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "Placeholder".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Placeholder"',
                },
                {
                    "argName": "mask",
                    "description": "A mask to apply to the input. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": "string"},
                {"argName": "mask", "typeName": ["string", "null"]},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "placeholder", "typeName": "string"},
            ]
        },
        "examples": [
            {
                "props": {"label": "What is your name?", "value": ""},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read",
                "iframeHeight": "142px",
                "key": "example1",
                "code": 'from abstra.forms import read\n\nname = read("What is your name?")\n',
            },
            {
                "props": {
                    "label": "What is your credit card number?",
                    "mask": "0000 0000 0000 0000",
                    "value": "1234567890123456",
                },
                "name": "Mask Example",
                "description": "The following example shows the usage of the mask property for read widget. In the mask property, the '0' digit represents a numeric value, the 'a' digit represents an alphabetic value and other digits are recognized as part of the value",
                "iframeHeight": "142px",
                "key": "example2",
                "code": 'from abstra.forms import read\n\nread("What is your credit card number?", mask="0000 0000 0000 0000")\n',
            },
        ],
    },
    "textarea-input": {
        "name": "Text Box Input",
        "type": "textarea-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "description": "Provides a text area for multi-line text input.",
        "pythonAPI": {
            "name": "read_textarea",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "value", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "placeholder", "typeName": "string"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "What kind of things are you building with Abstra?",
                    "value": "",
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_textarea",
                "iframeHeight": "164px",
                "key": "example1",
                "code": 'from abstra.forms import read_textarea\n\nans = read_textarea("What kind of things are you building with Abstra Cloud?")\n',
            }
        ],
    },
    "time-input": {
        "name": "Time Input",
        "type": "time-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "description": "Allows selection of a specific time.",
        "pythonAPI": {
            "name": "read_time",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "00:00".',
                    "typeName": "str or datetime.time",
                    "typeDescription": ["str (HH:MM:SS)", "datetime.time"],
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "format",
                    "description": 'Whether the input is in the format 24hs or AM/PM. Defaults to "24hs".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"24hs"',
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "datetime.time",
                    "typeDescription": "A datetime.time object representing the value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {
                    "argName": "value",
                    "typeName": "object",
                    "properties": [
                        {"argName": "hour", "typeName": "number"},
                        {"argName": "minute", "typeName": "number"},
                    ],
                },
                {"argName": "format", "typeName": "string"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Select a time below",
                    "value": {"hour": 0, "minute": 0},
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_time",
                "iframeHeight": "144px",
                "key": "example1",
                "code": 'from abstra.forms import read_time\n\nans = read_time("Select a time below")\n# ans = 00:00:00\n',
            }
        ],
    },
    "toggle-input": {
        "name": "Toggle",
        "description": "Offers a toggle switch between two defined options.",
        "type": "toggle-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_toggle",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "on_text",
                    "description": "Text of On Toggle option",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Yes",
                },
                {
                    "argName": "off_text",
                    "description": "Text of Off Toggle option",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "No",
                },
                {
                    "argName": "initial_value",
                    "description": "Initial value of the toggle",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "No",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [{"typeName": "bool", "typeDescription": "The toggle value"}],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {"argName": "onText", "typeName": "string"},
                {"argName": "offText", "typeName": "string"},
                {"argName": "value", "typeName": "boolean"},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Toggle",
                    "onText": "On",
                    "offText": "Off",
                    "value": True,
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_toggle",
                "iframeHeight": "124px",
                "key": "example1",
                "code": 'from abstra.forms import read_toggle\n\nans = read_toggle("Toggle")\n# ans = True or False\nprint(ans)\n',
            },
            {
                "props": {
                    "label": "Custom Toggle",
                    "onText": "Confirm",
                    "offText": "Cancel",
                    "value": True,
                },
                "name": "Custom Example",
                "description": "The following example demonstrate how to customize the toggle options text",
                "iframeHeight": "124px",
                "key": "example2",
                "code": 'from abstra.forms import read_toggle\n\nans = read_toggle("Custom Toggle", on_text="Confirm", off_text="Cancel")\n# ans = True or False\n',
            },
        ],
    },
    "video-input": {
        "name": "Video Upload",
        "description": "Facilitates video file uploads with preview and size validation.",
        "type": "video-input",
        "events": [
            {
                "key": "update:value",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "pythonAPI": {
            "name": "read_video",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "Union[str, io.IOBase]",
                    "typeDescription": ["io.IOBase", "str (filepath)", "str (URL)"],
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "multiple",
                    "description": "Whether the user will be allowed to upload multiple files. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "max_file_size",
                    "description": "Maximum size allowed to be transfered in total in MB.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "disabled",
                    "description": "whether the input is disabled. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "required",
                    "description": 'Whether the input is required or not eg. "this field is required". Defaults to True.',
                    "typeName": "Union[bool, str]",
                    "typeDescription": ["bool", "str"],
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [
                {
                    "typeName": "Union[FileResponse, List[FileResponse]]",
                    "typeDescription": 'A dict containing the video uploaded by the user ({"file": file, "url": str, "content": bytes}) or a list of videos in case of multiple flag set as True',
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {"argName": "label", "typeName": "string"},
                {
                    "argName": "value",
                    "typeName": "array",
                    "items": {"typeName": "string"},
                },
                {"argName": "maxFileSize", "typeName": ["number", "null"]},
                {"argName": "key", "typeName": "string"},
                {"argName": "disabled", "typeName": "boolean"},
                {"argName": "errors", "typeName": "array"},
                {"argName": "hint", "typeName": ["string", "null"]},
                {"argName": "required", "typeName": ["string", "boolean"]},
                {"argName": "fullWidth", "typeName": "boolean"},
                {"argName": "multiple", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {"label": "Upload your video", "value": []},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_video",
                "iframeHeight": "259px",
                "key": "example1",
                "code": 'from abstra.forms import read_video\n\nfile_response = read_video("Upload your video")\nfile = file_response.file  # File object\n',
            }
        ],
    },
    "file-output": {
        "name": "File Download",
        "description": "Show a button for the user to download a file.",
        "type": "file-output",
        "events": [],
        "pythonAPI": {
            "name": "display_file",
            "params": [
                {
                    "argName": "file",
                    "description": "The file to download",
                    "typeName": "Union[str, io.IOBase]",
                    "typeDescription": ["io.IOBase", "str (filepath)", "str (URL)"],
                    "isKwarg": False,
                    "default": "None",
                },
                {
                    "argName": "download_text",
                    "description": 'The text to display on the button that will download the file. Defaults to "Download here".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Download"',
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "fileUrl", "typeName": "string"},
                {"argName": "downloadText", "typeName": "string"},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "fileUrl": "https://placekitten.com/200/300",
                    "downloadText": "Click here to reveal the secret",
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_file",
                "iframeHeight": "96px",
                "key": "example1",
                "code": 'from abstra.forms import display_file\n\ndisplay_file(\n    "https://placekitten.com/200/300", download_text="Click here to reveal the secret"\n)\n',
            }
        ],
    },
    "html-output": {
        "name": "HTML Embed",
        "description": "Simple HTML embed widget.",
        "type": "html-output",
        "events": [],
        "pythonAPI": {
            "name": "display_html",
            "params": [
                {
                    "argName": "html",
                    "description": "The html snippet to display to the user",
                    "typeName": "str",
                    "typeDescription": ["str (html snippet)"],
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "html", "typeName": "string"},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "html": '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>'
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_html",
                "iframeHeight": "168px",
                "key": "example1",
                "code": 'from abstra.forms import display_html\n\ndisplay_html(\n    \'<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>\'\n)\n',
            }
        ],
    },
    "iframe-output": {
        "name": "Iframe Embed",
        "description": "Embed content using an iframe.",
        "type": "iframe-output",
        "events": [],
        "pythonAPI": {
            "name": "display_iframe",
            "params": [
                {
                    "argName": "url_or_html",
                    "description": "The link to the document or the own document to display to the user",
                    "typeName": "str",
                    "typeDescription": ["str (URL)", "str (html snippet)"],
                    "isKwarg": False,
                    "default": "''",
                },
                {
                    "argName": "width",
                    "description": 'The width of the iframe. Defaults to "800".',
                    "typeName": "int",
                    "typeDescription": ["int (pixels)"],
                    "isKwarg": True,
                    "default": '"800"',
                },
                {
                    "argName": "height",
                    "description": 'The height of the iframe. Defaults to "600".',
                    "typeName": "int",
                    "typeDescription": ["int (pixels)"],
                    "isKwarg": True,
                    "default": '"600"',
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "url", "typeName": "string"},
                {"argName": "width", "typeName": ["string", "null"]},
                {"argName": "height", "typeName": ["string", "null"]},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "url": "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319",
                    "width": "300",
                    "height": "250",
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_iframe",
                "iframeHeight": "314px",
                "key": "example1",
                "code": 'from abstra.forms import display_iframe\n\ndisplay_iframe(\n    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319",\n    width="300",\n    height="250",\n)\n',
            }
        ],
    },
    "image-output": {
        "name": "Image Display",
        "description": "Show an image to the user",
        "type": "image-output",
        "events": [],
        "pythonAPI": {
            "name": "display_image",
            "params": [
                {
                    "argName": "image",
                    "description": "The image to display to the user",
                    "typeName": "Union[str, io.IOBase]",
                    "typeDescription": ["io.IOBase", "str (filepath)", "str (URL)"],
                    "isKwarg": False,
                    "default": "None",
                },
                {
                    "argName": "subtitle",
                    "description": 'The subtitle of the image. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "''",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "imageUrl", "typeName": "string"},
                {"argName": "subtitle", "typeName": "string"},
                {"argName": "label", "typeName": "string"},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "imageUrl": "https://cdn.pixabay.com/photo/2019/02/25/19/22/cakes-4020342_1280.jpg",
                    "subtitle": "Happy Birthday!",
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_image",
                "iframeHeight": "411px",
                "key": "example1",
                "code": 'from abstra.forms import display_image\n\ndisplay_image(\n    "https://cdn.pixabay.com/photo/2019/02/25/19/22/cakes-4020342_1280.jpg",\n    subtitle="Happy Birthday!",\n)\n',
            }
        ],
    },
    "latex-output": {
        "name": "Latex",
        "description": "Display a latex formula to the user.",
        "type": "latex-output",
        "events": [],
        "pythonAPI": {
            "name": "display_latex",
            "params": [
                {
                    "argName": "text",
                    "description": "The latex formula to display to the user",
                    "typeName": "str",
                    "typeDescription": ["str (latex snippet)"],
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "text", "typeName": "string"},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {"text": "\\(ax^2 + bx + c = 0\\)"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_latex",
                "iframeHeight": "96px",
                "key": "example1",
                "code": 'from abstra.forms import display_latex\n\ndisplay_latex("\\(ax^2 + bx + c = 0\\)")\n',
            },
            {
                "props": {
                    "text": "When \\(a \\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_latex",
                "iframeHeight": "259px",
                "key": "example2",
                "code": 'from abstra.forms import display_latex\n\ndisplay_latex(\n    """When \\(a \\\\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are\n$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"""\n)\n',
            },
        ],
    },
    "link-output": {
        "name": "Link",
        "description": "Display a link to the user.",
        "type": "link-output",
        "events": [],
        "pythonAPI": {
            "name": "display_link",
            "params": [
                {
                    "argName": "link_url",
                    "description": "The url of the link to display to the user",
                    "typeName": "str",
                    "typeDescription": ["str (URL)"],
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "link_text",
                    "description": 'The text to display on the link. Defaults to "Click here".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Click here"',
                },
                {
                    "argName": "same_tab",
                    "description": "Whether to open the link in the same tab or not. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "linkText", "typeName": "string"},
                {"argName": "linkUrl", "typeName": "string"},
                {"argName": "sameTab", "typeName": "boolean"},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "linkUrl": "https://abstra.io",
                    "linkText": "Abstra Homepage",
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_link",
                "iframeHeight": "94px",
                "key": "example1",
                "code": 'from abstra.forms import display_link\n\ndisplay_link("https://abstra.io", link_text="Abstra Homepage")\n',
            }
        ],
    },
    "markdown-output": {
        "name": "Markdown Display",
        "description": "Show markdown formatted text to the user",
        "type": "markdown-output",
        "events": [],
        "pythonAPI": {
            "name": "display_markdown",
            "params": [
                {
                    "argName": "text",
                    "description": "The formatted text to display to the user",
                    "typeName": "str",
                    "typeDescription": ["str (markdown snippet)"],
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "text", "typeName": "string"},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "text": "\n## Let's see some examples 8-)\n\n* 1^th^ H~2~0 \n\n- [ ] Task\n\n* ==Mark==\n\n* [Link](https://www.abstracloud.com/)"
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_markdown",
                "iframeHeight": "284px",
                "key": "example1",
                "code": 'from abstra.forms import display_markdown\n\ndisplay_markdown(\n    """\n## Let\'s see some examples 8-)\n\n* 1^th^ H~2~0\n\n\n\n- [ ] Task\n\n* ==Mark==\n\n* [Link](https://www.abstracloud.com/)"""\n)\n',
            }
        ],
    },
    "pandas-output": {
        "name": "Table",
        "description": "Display a pandas dataframe to the user",
        "type": "pandas-output",
        "events": [
            {
                "key": "row-click",
                "description": "When clicking on a row",
                "payloadSchema": [
                    {
                        "key": "row",
                        "typeName": "pandas.Series",
                        "description": "The row that was clicked",
                    }
                ],
            },
            {
                "key": "row-edit",
                "description": "Function or expression to be run when the user edits a cell",
                "payloadSchema": [],
            },
            {
                "key": "action-click",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [
                    {
                        "key": "action",
                        "description": "The action that was clicked",
                        "typeName": "str",
                    }
                ],
            },
        ],
        "pythonAPI": {
            "name": "display_pandas",
            "params": [
                {
                    "argName": "df",
                    "description": "The dataframe to display to the user",
                    "typeName": '"DataFrame"',
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "display_index",
                    "description": "Whether to show a index column. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": None,
                },
                {
                    "argName": "page_size",
                    "description": "The number of rows to display per page. Defaults to 10.",
                    "typeName": "number",
                    "isKwarg": True,
                    "default": "10",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to True.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "True",
                },
                {
                    "argName": "actions",
                    "description": "Actions that can be triggered by table rows",
                    "typeName": "list",
                    "typeDescription": ["list[str]"],
                    "isKwarg": True,
                    "default": "[]",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "table",
                    "typeName": "object",
                    "properties": [
                        {"argName": "data", "typeName": "array"},
                        {
                            "argName": "schema",
                            "typeName": "object",
                            "properties": [{"argName": "fields", "typeName": "array"}],
                        },
                    ],
                },
                {"argName": "displayIndex", "typeName": "boolean"},
                {"argName": "label", "typeName": "string"},
                {"argName": "pageSize", "typeName": "number"},
                {"argName": "actions", "typeName": "array"},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "table": {
                        "schema": {
                            "fields": [
                                {"name": "Country", "type": "string"},
                                {"name": "Population", "type": "number"},
                            ],
                            "primaryKey": ["Country"],
                        },
                        "data": [
                            {"Country": "USA", "Population": "32,700,000"},
                            {"Country": "China", "Population": "1,300,000,000"},
                            {"Country": "Japan", "Population": "126,000,000"},
                        ],
                    }
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_pandas",
                "iframeHeight": "348px",
                "key": "example1",
                "code": 'import pandas as pd\nfrom abstra.forms import display_pandas\n\ndf = pd.DataFrame.from_dict(\n    {\n        "A": [1, 2, 3, 4],\n        "B": [5, 6, 7, 8],\n        "C": [9, 10, 11, 12],\n    }\n)\n\ndisplay_pandas(df)\n',
            }
        ],
    },
    "plotly-output": {
        "name": "Plotly",
        "description": "Displays a Plotly figure.",
        "type": "plotly-output",
        "events": [],
        "pythonAPI": {
            "name": "display_plotly",
            "params": [
                {
                    "argName": "fig",
                    "description": "The figure to display to the user",
                    "typeName": '"Figure"',
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": None,
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "figure", "typeName": "object"},
                {"argName": "label", "typeName": "string"},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {
                    "figure": {
                        "data": [{"type": "bar", "x": [1, 2, 3], "y": [1, 3, 2]}],
                        "layout": {"title": {"text": "Bar chart example"}},
                    }
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_plotly",
                "iframeHeight": "514px",
                "key": "example1",
                "code": 'import plotly.graph_objects as go\nfrom abstra.forms import display_plotly\n\nfigure = go.Figure(\n    data=[go.Bar(x=[1, 2, 3], y=[1, 3, 2])],\n    layout=go.Layout(title=go.layout.Title(text="Bar chart example")),\n)\n\ndisplay_plotly(figure)\n',
            }
        ],
    },
    "progress-output": {
        "name": "Progress Bar",
        "description": "Displays a progress bar to the user.",
        "type": "progress-output",
        "events": [],
        "pythonAPI": {
            "name": "display_progress",
            "params": [
                {
                    "argName": "current",
                    "description": "The progress being made. Defaults to 50.",
                    "typeName": "float",
                    "isKwarg": False,
                    "default": "50",
                },
                {
                    "argName": "total",
                    "description": "Total progress. Defaults to 100.",
                    "typeName": "float",
                    "isKwarg": False,
                    "default": "100",
                },
                {
                    "argName": "text",
                    "description": 'The text displayed with this progress step. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "current", "typeName": "number"},
                {"argName": "total", "typeName": "number"},
                {"argName": "text", "typeName": "string"},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {"current": 50, "total": 100},
                "name": "Default behavior",
                "description": "This is what happens when there is no parameter passed",
                "iframeHeight": "104px",
                "key": "example1",
                "code": "from abstra.forms import display_progress\n\ndisplay_progress()\n",
            },
            {
                "props": {"current": 8, "total": 10, "text": "Almost there!"},
                "name": "Custom fields",
                "description": "You can customize the current and total number of steps. Also the message of each step",
                "iframeHeight": "124px",
                "key": "example2",
                "code": 'from time import sleep\n\nfrom abstra.forms import display_progress\n\nfor i in range(10):\n    display_progress(i, 10, text="Computing values")\n\n    sleep(1)  # Do some computation\n',
            },
        ],
    },
    "text-output": {
        "name": "Text Display",
        "description": '"Text display" adds textual information into the app.',
        "type": "text-output",
        "events": [],
        "pythonAPI": {
            "name": "display",
            "params": [
                {
                    "argName": "text",
                    "description": "The text to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                },
                {
                    "argName": "size",
                    "description": "The size of the text: 'small', 'medium', 'large'",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "medium",
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                },
                {
                    "argName": "button_text",
                    "description": "What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "Next",
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "text", "typeName": "string"},
                {"argName": "size", "typeName": "string"},
                {"argName": "fullWidth", "typeName": "boolean"},
            ]
        },
        "examples": [
            {
                "props": {"text": "Hello world!"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_display",
                "iframeHeight": "84px",
                "key": "example1",
                "code": 'from abstra.forms import display\n\ndisplay("Hello world!")\n',
            }
        ],
    },
}
