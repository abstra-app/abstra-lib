metadata = {
    "answer-sheet-input": {
        "name": "Answer sheet",
        "description": "Retrieve the answers from a test on usual answersheet",
        "type": "answer-sheet-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 200,
            "minHeight": 350,
            "initialWidth": 200,
            "initialHeight": 350,
        },
        "pythonAPI": {
            "name": "read_answer_sheet",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Answer Sheet Title"',
                },
                {
                    "argName": "options",
                    "description": "The options which can be chosen as an answer",
                    "typeName": "list",
                    "typeDescription": ["list[str]"],
                    "isKwarg": False,
                    "default": '["A", "B", "C", "D", "E"]',
                    "dashesInitialValue": '["A", "B", "C", "D", "E"]',
                },
                {
                    "argName": "number_of_questions",
                    "description": "Number of questions the answersheet will cover",
                    "typeName": "int",
                    "isKwarg": False,
                    "default": "5",
                    "dashesInitialValue": "5",
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {
                    "typeName": None,
                    "typeDescription": "list: The values/value selected by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "options",
                    "typeName": "array",
                    "description": "The options which can be chosen as an answer",
                },
                {
                    "argName": "numberOfQuestions",
                    "typeName": "number",
                    "description": "Number of questions the answersheet will cover",
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "SAT - 2023",
                    "options": ["A", "B", "C", "D", "E"],
                    "numberOfQuestions": 5,
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_answer_sheet",
                "key": "example1",
                "code": 'from hackerforms import read_answer_sheet\n\nanswer_sheet = read_answer_sheet("SAT - 2023", ["A", "B", "C", "D", "E"], 5)\n# answer_sheet = { \'1\': \'A\', \'2\': None, \'3\': \'C\' }\n',
            }
        ],
    },
    "cards-input": {
        "name": "Card display",
        "description": "Read a text value from the user simple text input",
        "type": "cards-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 530,
            "minHeight": 352,
            "initialWidth": 530,
            "initialHeight": 712,
        },
        "pythonAPI": {
            "name": "read_cards",
            "params": [
                {
                    "argName": "label",
                    "description": "The text related to this field",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Card Title"',
                },
                {
                    "argName": "options",
                    "description": "The options to display to the user, eg. [\n{'title': 'Option 1', 'subtitle': 'Subtitle 1', 'image': 'https://image_1.png', 'description': 'option 1 description', 'topLeftExtra': 'Left 1', 'topRightExtra': 'Right 1' },\n{'title': 'Option 2', 'subtitle': 'Subtitle 2', 'image': 'https://image_2.png', 'description': 'option 2 description', 'topLeftExtra': 'Left 2', 'topRightExtra': 'Right 2' }]",
                    "typeName": "list",
                    "typeDescription": ["list[AbstraCard]"],
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '[\n          {\n            "title": "Option 1",\n            "subtitle": "Subtitle 1",\n            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/396px-Mona_Lisa.jpg",\n            "description": "option 1 description",\n            "topLeftExtra": "Left 1",\n            "topRightExtra": "Right 1",\n          },\n          {\n            "title": "Option 2",\n            "subtitle": "Subtitle 2",\n            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/396px-Mona_Lisa.jpg",\n            "description": "option 2 description",\n            "topLeftExtra": "Left 2",\n            "topRightExtra": "Right 2",\n          },\n        ]',
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
                    "formOnly": True,
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
                    "description": "Whether the cards layout should be 'list' or 'grid'. Defaults to 'list'.%%%",
                    "typeName": "str",
                    "typeDescription": ["str ('list', 'grid')"],
                    "isKwarg": True,
                    "default": "'list'",
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {
                    "typeName": None,
                    "typeDescription": "list, any: The options/option selected by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "options",
                    "typeName": "array",
                    "description": "The options that the user can select from",
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
                {
                    "argName": "multiple",
                    "typeName": "boolean",
                    "description": "Whether the input can have multiple values",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "searchable",
                    "typeName": "boolean",
                    "description": "Display a search input",
                    "isOptional": True,
                },
                {
                    "argName": "initialValue",
                    "typeName": ["object", "array", "null"],
                    "description": "The initial value of the input",
                    "isOptional": True,
                    "items": {
                        "typeName": "object",
                        "properties": [
                            {
                                "argName": "title",
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
                        ],
                        "default": None,
                    },
                },
                {
                    "argName": "layout",
                    "typeName": "string",
                    "description": "Whether the cards layout should be 'list' or 'grid'",
                    "oneOf": ["list", "grid"],
                    "default": "list",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Choose your character",
                    "options": [
                        {
                            "title": "Bulbasaur",
                            "subtitle": "Grass / Poison",
                            "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
                            "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
                            "topLeftExtra": "Nº",
                            "topRightExtra": "001",
                        },
                        {
                            "title": "Charmander",
                            "subtitle": "Fire",
                            "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
                            "description": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
                            "topLeftExtra": "Nº",
                            "topRightExtra": "004",
                        },
                        {
                            "title": "Squirtle",
                            "subtitle": "Water",
                            "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
                            "description": "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
                            "topLeftExtra": "Nº",
                            "topRightExtra": "007",
                        },
                    ],
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_cards",
                "key": "example1",
                "code": 'from hackerforms import read_cards\n\ncard = read_cards(\n    "Choose your character",\n    [\n        {\n            "title": "Bulbasaur",\n            "subtitle": "Grass / Poison",\n            "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",\n            "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",\n            "topLeftExtra": "Nº",\n            "topRightExtra": "001",\n        },\n        {\n            "title": "Charmander",\n            "subtitle": "Fire",\n            "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",\n            "description": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",\n            "topLeftExtra": "Nº",\n            "topRightExtra": "004",\n        },\n        {\n            "title": "Squirtle",\n            "subtitle": "Water",\n            "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",\n            "description": "When it retracts its long neck into its shell, it squirts out water with vigorous force.",\n            "topLeftExtra": "Nº",\n            "topRightExtra": "007",\n        },\n    ],\n)\n# card = { \'title\': ..., \'subtitle\': ..., \'image\': ..., \'description\': ..., \'topLeftExtra\': ..., \'topRightExtra\': ... }\n',
            }
        ],
    },
    "checkbox-input": {
        "name": "Checkbox",
        "description": "Allow users to select an option by interacting with a checkbox",
        "type": "checkbox-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 60,
            "minHeight": 32,
            "initialWidth": 222,
            "initialHeight": 32,
        },
        "pythonAPI": {
            "name": "read_checkbox",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Choose your option"',
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {
                    "typeName": None,
                    "typeDescription": "list(str) or list(float): The value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "any",
                    "description": "The initial value of the input",
                    "items": {"typeName": ["string", "number"]},
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "I have read and agree to the terms of services"},
                "name": "Basic Example",
                "description": "Basic use of read_checkbox",
                "key": "example1",
                "code": 'from hackerforms import read_checkbox\n\nans = read_checkbox("I have read and agree to the terms of services")\n\nprint(ans)\n',
            },
            {
                "props": {
                    "label": "Would you like to receive product updates and announcements via email?"
                },
                "name": "Optional field",
                "description": "If check the box is optional, pass the optional parameter required",
                "key": "example2",
                "code": 'from hackerforms import read_checkbox\n\nans = read_checkbox(\n    "Would you like to receive product updates and announcements via email?",\n    required=False,\n)\n\nprint(ans)\n',
            },
            {
                "props": {
                    "label": "I have read and agree to the [terms of services](https://example.com)"
                },
                "name": "Use markdown to customize label",
                "description": "Use markdown syntax to customize the label",
                "key": "example3",
                "code": 'from hackerforms import read_checkbox\n\nans = read_checkbox(\n    "I have read and agree to the [terms of services](https://example.com)"\n)\n',
            },
        ],
    },
    "checklist-input": {
        "name": "Checkilst",
        "description": "Show a checklist for users to select items",
        "type": "checklist-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 60,
            "minHeight": 32,
            "initialWidth": 222,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_checklist",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Choose your option"',
                },
                {
                    "argName": "options",
                    "description": "The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]",
                    "typeName": "list",
                    "typeDescription": ["list[AbstraOption]"],
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '[\n    {\n      "label": "Option 1",\n      "value": 1,\n    },\n    {\n      "label": "Option 2",\n      "value": 2,\n    },\n  ]',
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {
                    "typeName": None,
                    "typeDescription": "list or any: The value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "any",
                    "description": "The initial value of the input",
                    "items": {"typeName": ["string", "number"]},
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "options",
                    "typeName": "array",
                    "description": "The options that the user can select from",
                    "items": {
                        "typeName": ["string", "object"],
                        "properties": [
                            {
                                "argName": "key",
                                "typeName": "string",
                                "description": "The key of the option on the returning object",
                            },
                            {
                                "argName": "value",
                                "typeName": "any",
                                "description": "The value of the option on the returning object",
                            },
                        ],
                    },
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Which programming language have you worked with?",
                    "options": ["Python", "JavaScript", "Go", "Elixir", "Haskell"],
                },
                "name": "Basic Example",
                "description": "Basic use of read_checklist",
                "key": "example1",
                "code": 'from hackerforms import read_checklist\n\nans = read_checklist(\n    "Which programming language have you worked with?",\n    ["Python", "JavaScript", "Go", "Elixir", "Haskell"],\n)\n',
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
                },
                "name": "Label and value dict",
                "description": "Use a dictionary to specify the label and value of each option. The label will be displayed to the user, and the value will be returned by the widget.",
                "key": "example2",
                "code": 'from hackerforms import read_checklist\n\nans = read_checklist(\n    "What are the solutions to the equation x^2 + 3x + 2 = 0?",\n    [\n        {"label": "-1", "value": "a"},\n        {"label": "-2", "value": "b"},\n        {"label": "0 and -1", "value": "c"},\n        {"label": "0 and 1", "value": "d"},\n        {"label": "None of the above", "value": "e"},\n    ],\n)\n\n# ans = ["a", "b"]\n',
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
                },
                "name": "Use markdown in options",
                "description": "Use markdown syntax to customize the options.",
                "key": "example3",
                "code": 'from hackerforms import read_checklist\n\nans = read_checklist(\n    "",\n    [\n        {\n            "label": "I have read and agree to the [terms of services](https://example.com)",\n            "value": "agree",\n        },\n    ],\n)\n',
            },
        ],
    },
    "click-input": {
        "name": "Button",
        "description": "Buttons allow users to trigger actions.",
        "type": "click-input",
        "events": [
            {
                "key": "click",
                "description": "Function or expression to be run when the button is clicked",
                "payloadSchema": [],
            }
        ],
        "dashOnly": True,
        "dashProperties": {
            "minWidth": 60,
            "minHeight": 62,
            "initialWidth": 140,
            "initialHeight": 62,
        },
        "pythonAPI": {
            "name": "read_click",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Click here!"',
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
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {
                    "typeName": None,
                    "typeDescription": "list(str) or list(float): The value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "Send"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_click",
                "key": "example1",
                "code": "",
            }
        ],
    },
    "cnpj-input": {
        "name": "CNPJ field",
        "description": "Allow users to insert a CNPJ number into the app.",
        "type": "cnpj-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 222,
            "minHeight": 70,
            "initialWidth": 222,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_cnpj",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Insert your CNPJ here!"',
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to None.",
                    "typeName": "str",
                    "typeDescription": ["str (00.000.000/0001-00)"],
                    "isKwarg": True,
                    "default": "None",
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {
                    "typeName": None,
                    "typeDescription": "list(str) or list(float): The value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "string",
                    "description": "The initial value of the input",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "typeName": "string",
                    "description": "The placeholder text to display in the input",
                    "default": "00.000.000/0001-00",
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "Insert your CNPJ below"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_cnpj",
                "key": "example1",
                "code": 'from hackerforms import read_cnpj\n\nname = read_cnpj("Insert your CNPJ below")\n',
            }
        ],
    },
    "code-input": {
        "name": "Code field",
        "description": "Code field allow users to insert code and reads it.",
        "type": "code-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 377,
            "minHeight": 552,
            "initialWidth": 377,
            "initialHeight": 552,
        },
        "pythonAPI": {
            "name": "read_code",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Send your code here!"',
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "language",
                    "typeName": "string",
                    "description": "Programming language for syntax highlighting",
                    "isOptional": True,
                },
                {
                    "argName": "initialValue",
                    "typeName": "string",
                    "description": "The initial value of the input",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Show me the code!",
                    "language": "c",
                    "initialValue": '#include<stdio.h>\nint main(int argc, char** argv) {\nchar name[256];\nscanf("%s", name);\nprintf("%s, here is", name);\n}',
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_code",
                "key": "example1",
                "code": 'from hackerforms import read_code\n\nans = read_code("Show me the code!", language="c")\n',
            }
        ],
    },
    "cpf-input": {
        "name": "CPF field",
        "description": "Allow users to insert a CPF number into the app.",
        "type": "cpf-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 222,
            "minHeight": 70,
            "initialWidth": 222,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_cpf",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Insert your CPF here!"',
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "typeDescription": ["str (000.000.000-00)"],
                    "isKwarg": True,
                    "default": '""',
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "string",
                    "description": "The initial value of the input",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "typeName": "string",
                    "description": "The placeholder text to display in the input",
                    "default": "000.000.000-00",
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "Insert your CPF below"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_cpf",
                "key": "example1",
                "code": 'from hackerforms import read_cpf\n\nname = read_cpf("Insert your CPF below")\n',
            }
        ],
    },
    "currency-input": {
        "name": "Currency field",
        "description": "Currency field allows users to enter monetary values.",
        "type": "currency-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 100,
            "minHeight": 72,
            "initialWidth": 300,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_currency",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Insert the proper amount."',
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to 0.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "0",
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "Insert the amount here".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Insert the amount here"',
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
                    "argName": "step",
                    "description": "The value to be incremented or decremented while using the input button. Defaults to None.",
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
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
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the input",
                },
                {
                    "argName": "currency",
                    "typeName": "string",
                    "description": "The currency to use",
                },
                {
                    "argName": "initialValue",
                    "typeName": "number",
                    "description": "The initial value of the input",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "min",
                    "typeName": "number",
                    "description": "The minimum value of the input",
                    "isOptional": True,
                },
                {
                    "argName": "max",
                    "typeName": "number",
                    "description": "The maximun value of the input",
                    "isOptional": True,
                },
                {
                    "argName": "step",
                    "typeName": "number",
                    "description": "The step for the input",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "typeName": "string",
                    "description": "The placeholder text to display in the input",
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "How many credits do you want?",
                    "initialValue": 10,
                    "min": 10,
                    "currency": "USD",
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_currency",
                "key": "example1",
                "code": 'from hackerforms import read_currency\n\nread_currency(\n    f"How many credits do you want?", currency="USD", initial_value=10, min=10\n)\n',
            }
        ],
    },
    "date-input": {
        "name": "Date picker input",
        "description": "Allow users to select  a date, or a range of dates.*",
        "type": "date-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 200,
            "minHeight": 72,
            "initialWidth": 300,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_date",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Pick a date of your preference."',
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
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
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
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "string",
                    "description": "The initial value of the input",
                    "default": None,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "When were you born?"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_date",
                "key": "example1",
                "code": 'from hackerforms import read_date\n\nbirthday = read_date("When were you born?")\nyear = birthday.year\nmonth = birthday.month\nday = birthday.day\n',
            }
        ],
    },
    "dropdown-input": {
        "name": "Dropdown",
        "description": "Allow users to select one or more options by selecting items in a dropdown",
        "type": "dropdown-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 60,
            "minHeight": 60,
            "initialWidth": 223,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_dropdown",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Select your preference"',
                },
                {
                    "argName": "options",
                    "description": "The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]",
                    "typeName": "list",
                    "typeDescription": ["list[AbstraOption]"],
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '[\n    {\n      "label": "Option 1",\n      "value": 1,\n    },\n    {\n      "label": "Option 2",\n      "value": 2,\n    },\n  ]',
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
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "Choose an option".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Choose an option"',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value selected by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "any",
                    "description": "The initial value of the input",
                    "items": {"typeName": ["string", "number"]},
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "options",
                    "typeName": "array",
                    "description": "The options that the user can select from",
                    "items": {
                        "typeName": ["string", "object"],
                        "properties": [
                            {
                                "argName": "key",
                                "typeName": "string",
                                "description": "The key of the option on the returning object",
                            },
                            {
                                "argName": "value",
                                "typeName": "any",
                                "description": "The value of the option on the returning object",
                            },
                        ],
                    },
                },
                {
                    "argName": "placeholder",
                    "typeName": "string",
                    "description": "The placeholder text to display in the input",
                },
                {
                    "argName": "multiple",
                    "typeName": "boolean",
                    "description": "Whether the input accepts multiple values or not",
                    "isOptional": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Choose a color",
                    "options": ["Red", "Green", "Blue"],
                },
                "name": "Basic Example",
                "description": "Basic use of read_dropdown",
                "key": "example1",
                "code": 'from hackerforms import read_dropdown\n\nans = read_dropdown(\n    "Choose a color",\n    ["Red", "Green", "Blue"],\n)\n# ans = "Red", "Green" or "Blue"\n',
            },
            {
                "props": {
                    "label": "Choose a color",
                    "options": ["Red", "Green", "Blue"],
                },
                "name": "Label and value dict",
                "description": "Use a dictionary to specify the label and value of each option. The label will be displayed to the user, and the value will be returned by the widget.",
                "key": "example2",
                "code": 'from hackerforms import read_dropdown\n\nans = read_dropdown(\n    "Choose a color",\n    [\n        {"label": "Red", "value": "R"},\n        {"label": "Green", "value": "G"},\n        {"label": "Blue", "value": "B"},\n    ],\n)\n# ans = "R", "G" or "B"\n',
            },
        ],
    },
    "email-input": {
        "name": "Email field",
        "description": "Email field allow users to enter a valid email address.",
        "type": "email-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 220,
            "minHeight": 60,
            "initialWidth": 223,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_email",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Insert your email"',
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "Your email here".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Your email here"',
                },
                {
                    "argName": "invalid_email_message",
                    "typeName": "str",
                    "description": "Invalid e-mail message",
                    "isKwarg": True,
                    "default": '"Hmm… doesn\'t look like an email"',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the input",
                },
                {
                    "argName": "invalidEmailMessage",
                    "typeName": "string",
                    "description": "Invalid e-mail message",
                    "default": "Hmm… doesn't look like an email",
                },
                {
                    "argName": "initialValue",
                    "typeName": "string",
                    "description": "The initial value of the input",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "typeName": "string",
                    "description": "The placeholder text to display in the input",
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "What is your email?"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_email",
                "key": "example1",
                "code": 'from hackerforms import read_email\n\nemail = read_email("What is your email?")\n',
            }
        ],
    },
    "file-input": {
        "name": "File upload area",
        "description": "File upload adds a drop-area for users to upload one or more files",
        "type": "file-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 150,
            "minHeight": 112,
            "initialWidth": 223,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_file",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Upload a file."',
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {
                    "typeName": "Union[FileResponse, List[FileResponse]]",
                    "typeDescription": "A dict containing the file uploaded by the user FileResponse(file: TemporaryFile, url: str, content: bytes) or a list of FileResponses in case of multiple flag set as True. ⚠️ The url expires after 48 hours",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": ["string", "array"],
                    "description": "The initial value of the input",
                    "default": "",
                },
                {
                    "argName": "multiple",
                    "description": "Whether the user will be allowed to upload multiple files. Defaults to False.",
                    "typeName": "boolean",
                    "default": "False",
                },
                {
                    "argName": "maxFileSize",
                    "description": "Maximum size allowed to be transfered in total in MB.",
                    "typeName": "number",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "Upload your .xlsx file"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_file",
                "key": "example1",
                "code": 'from hackerforms import read_file\n\nfileResponse = read_file("Upload your .xlsx file")\nfile = fileResponse.file  # File object\nurl = fileResponse.url  # Url to the file\ncontent = fileResponse.content  # Raw file content\n',
            }
        ],
    },
    "image-input": {
        "name": "Image upload",
        "description": "Image upload adds a drop-area for users to upload one or more image files.",
        "type": "image-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 150,
            "minHeight": 112,
            "initialWidth": 223,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_image",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Upload"',
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
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
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": ["string", "array"],
                    "description": "The initial value of the input",
                    "default": "",
                    "isOptional": True,
                    "items": {"typeName": "string"},
                },
                {
                    "argName": "maxFileSize",
                    "description": "Maximum size allowed to be transfered in total in MB.",
                    "typeName": "number",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "multiple",
                    "typeName": "boolean",
                    "description": "Whether the input accepts multiple values or not",
                    "isOptional": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "Upload your .png image"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_image",
                "key": "example1",
                "code": 'from hackerforms import read_image\n\nfileResponse = read_image("Upload your .png image")\nfile = fileResponse.file  # File object\nurl = fileResponse.url  # Url to the file\ncontent = fileResponse.content  # Raw file content\n',
            }
        ],
    },
    "kanban-board-input": {
        "name": "Kanban board",
        "description": "Kanban board",
        "type": "kanban-board-input",
        "dashOnly": True,
        "events": [],
        "dashProperties": {
            "minWidth": 300,
            "minHeight": 500,
            "initialWidth": 500,
            "initialHeight": 500,
        },
        "pythonAPI": {
            "name": "read_kanban_board",
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
                    "description": "The initial board state.",
                    "typeName": "KanbanBoard",
                    "isKwarg": True,
                    "default": None,
                    "formOnly": True,
                },
            ],
            "returns": [
                {
                    "typeName": None,
                    "typeDescription": "KanbanBoard object containing all stages and cards",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "object",
                    "description": "The initial board state.",
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "initialValue": {
                        "type": "kanban-board",
                        "stages": [
                            {
                                "type": "kanban-stage",
                                "name": "Backlog",
                                "cards": [
                                    {
                                        "type": "kanban-card",
                                        "name": "Add a new feature #1",
                                        "description": "Add a new feature to the product",
                                        "tags": ["feature", "enhancement"],
                                    },
                                    {
                                        "type": "kanban-card",
                                        "name": "Fix a bug #2",
                                        "description": "Fix a bug in the product",
                                        "tags": ["bug"],
                                    },
                                ],
                            },
                            {
                                "type": "kanban-stage",
                                "name": "In progress",
                                "cards": [
                                    {
                                        "type": "kanban-card",
                                        "name": "Add a new feature #3",
                                        "description": "Add a new feature to the product",
                                        "tags": ["feature", "enhancement"],
                                    },
                                    {
                                        "type": "kanban-card",
                                        "name": "Fix a bug #4",
                                        "description": "Fix a bug in the product",
                                        "tags": ["bug"],
                                    },
                                ],
                            },
                            {
                                "type": "kanban-stage",
                                "name": "Done",
                                "cards": [
                                    {
                                        "type": "kanban-card",
                                        "name": "Add a new feature #5",
                                        "description": "Add a new feature to the product",
                                        "tags": ["feature", "enhancement"],
                                    },
                                    {
                                        "type": "kanban-card",
                                        "name": "Fix a bug #6",
                                        "description": "Fix a bug in the product",
                                        "tags": ["bug"],
                                    },
                                ],
                            },
                        ],
                    },
                    "label": "Spring backlog",
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_kanban_board",
                "key": "example1",
                "code": 'import hackerforms as hf\n\nboard = {\n    "type": "kanban-board",\n    "stages": [\n        {\n            "type": "kanban-stage",\n            "name": "Backlog",\n            "cards": [\n                {\n                    "type": "kanban-card",\n                    "name": "Add a new feature #1",\n                    "description": "Add a new feature to the product",\n                    "tags": ["feature", "enhancement"],\n                },\n                {\n                    "type": "kanban-card",\n                    "name": "Fix a bug #2",\n                    "description": "Fix a bug in the product",\n                    "tags": ["bug"],\n                },\n            ],\n        },\n        {\n            "type": "kanban-stage",\n            "name": "In progress",\n            "cards": [\n                {\n                    "type": "kanban-card",\n                    "name": "Add a new feature #3",\n                    "description": "Add a new feature to the product",\n                    "tags": ["feature", "enhancement"],\n                },\n                {\n                    "type": "kanban-card",\n                    "name": "Fix a bug #4",\n                    "description": "Fix a bug in the product",\n                    "tags": ["bug"],\n                },\n            ],\n        },\n        {\n            "type": "kanban-stage",\n            "name": "Done",\n            "cards": [\n                {\n                    "type": "kanban-card",\n                    "name": "Add a new feature #5",\n                    "description": "Add a new feature to the product",\n                    "tags": ["feature", "enhancement"],\n                },\n                {\n                    "type": "kanban-card",\n                    "name": "Fix a bug #6",\n                    "description": "Fix a bug in the product",\n                    "tags": ["bug"],\n                },\n            ],\n        },\n    ],\n}\n\nhf.read_kanban_board(label="Product spring", initial_value=board)\n',
            }
        ],
    },
    "list-input": {
        "name": "List of inputs",
        "description": "Read a list value from the user",
        "type": "list-input",
        "formOnly": True,
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 146,
            "minHeight": 32,
            "initialWidth": 146,
            "initialHeight": 32,
        },
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
                    "description": "The initial value to display to the user. Defaults to [{}].",
                    "typeName": "Any",
                    "isKwarg": True,
                    "default": "[{}]",
                    "formOnly": True,
                },
                {
                    "argName": "hint",
                    "description": "A tooltip displayed to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
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
                    "description": 'Label to be displayed on the add button. Defaults to "+".',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
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
                {"argName": "itemSchema", "typeName": "any", "description": ""},
                {
                    "argName": "initialValue",
                    "typeName": "array",
                    "description": "",
                    "default": [{}],
                    "isOptional": True,
                },
                {
                    "argName": "min",
                    "typeName": "number",
                    "description": "The minimum number of items to allow",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "max",
                    "typeName": "number",
                    "description": "The maximum number of items to allow",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "addButtonText",
                    "typeName": "string",
                    "description": "The text to display on the add button",
                    "isOptional": True,
                },
                {
                    "argName": "overloadedItemSchemas",
                    "typeName": "any",
                    "description": "",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "initialValue": [{}],
                    "min": 1,
                    "max": 3,
                    "itemSchema": [
                        {
                            "hint": None,
                            "initialValue": "",
                            "key": "Name",
                            "label": "Name",
                            "placeholder": "Your answer here",
                            "required": True,
                            "type": "text-input",
                        },
                        {
                            "hint": None,
                            "initialValue": "",
                            "key": "Email",
                            "label": "Email",
                            "placeholder": "Your answer here",
                            "required": True,
                            "type": "email-input",
                        },
                    ],
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_list",
                "key": "example1",
                "code": "from hackerforms import ListItemSchema, read_list\n\nitem = ListItemSchema().read(\"Name\").read_email(\"Email\")\nans = read_list(item, min=1, max=3)\n# ans = [{'Name': '', 'Email': ''}]\n",
            }
        ],
    },
    "multiple-choice-input": {
        "name": "Multiple choice",
        "description": "Read a multiple choice value from the user",
        "type": "multiple-choice-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 60,
            "minHeight": 70,
            "initialWidth": 223,
            "initialHeight": 152,
        },
        "pythonAPI": {
            "name": "read_multiple_choice",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Select your choices"',
                },
                {
                    "argName": "options",
                    "description": "The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]",
                    "typeName": "list",
                    "typeDescription": ["list[AbstraOption]"],
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '[\n    {\n      "label": "Option 1",\n      "value": 1,\n    },\n    {\n      "label": "Option 2",\n      "value": 2,\n    },\n  ]',
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
                    "description": "The initial value to display to the user. Defaults to None.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "None",
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {
                    "typeName": None,
                    "typeDescription": "list or any: The values/value selected by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the input",
                },
                {
                    "argName": "multiple",
                    "typeName": "boolean",
                    "description": "Whether the input should accept multiple answers",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "initialValue",
                    "typeName": "any",
                    "description": "The initial value of the input",
                    "items": {"typeName": ["string", "number"]},
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "min",
                    "typeName": "number",
                    "description": "The minimum number of items to allow",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "max",
                    "typeName": "number",
                    "description": "The maximum number of items to allow",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "options",
                    "typeName": "array",
                    "description": "The options that the user can select from",
                    "items": {
                        "typeName": ["string", "object"],
                        "properties": [
                            {
                                "argName": "key",
                                "typeName": "string",
                                "description": "The key of the option on the returning object",
                            },
                            {
                                "argName": "value",
                                "typeName": "any",
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
                },
                "name": "Basic Example",
                "description": "Basic use of read_multiple_choice",
                "key": "example1",
                "code": 'from hackerforms import read_multiple_choice\n\nans = read_multiple_choice(\n    "Which programming language do you prefer?",\n    ["Python", "JavaScript"],\n)\n# ans = "Python" or "JavaScript"\n',
            },
            {
                "props": {
                    "label": "Which programming language do you prefer?",
                    "options": ["Python", "JavaScript"],
                },
                "name": "Label and value dict",
                "description": "Use a dictionary to specify the label and value of each option. The label will be displayed to the user, and the value will be returned by the widget.",
                "key": "example2",
                "code": 'from hackerforms import read_multiple_choice\n\nans = read_multiple_choice(\n    "Which programming language do you prefer?",\n    [{"label": " Python", "value": "py"}, {"label": "JavaScript", "value": "js"}],\n)\n# ans = "py" or "js"\n',
            },
            {
                "props": {
                    "label": "What features do you love?",
                    "options": ["forms", "jobs", "hooks"],
                    "multiple": True,
                },
                "name": "Checkboxes",
                "description": "Use `multiple=true` when you want allow users to select more than one option. This will make it returns a list.",
                "key": "example3",
                "code": 'from hackerforms import read_multiple_choice\n\nans = read_multiple_choice(\n    "What features do you love?", ["forms", "jobs", "hooks"], multiple=True\n)\n# ans = ["forms", "jobs", "hooks"]\n',
            },
        ],
    },
    "nps-input": {
        "name": "NPS feedback",
        "description": "NPS feedback allow users to rank their experience from 0 to 10.",
        "type": "nps-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 120,
            "minHeight": 60,
            "initialWidth": 608,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_nps",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Rate us!"',
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
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {"typeName": "int", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the input",
                },
                {
                    "argName": "min",
                    "typeName": "number",
                    "description": "Minimum value of NPS",
                    "default": 0,
                    "isOptional": True,
                },
                {
                    "argName": "max",
                    "typeName": "number",
                    "description": "Maximum value of NPS",
                    "default": 10,
                    "isOptional": True,
                },
                {
                    "argName": "minHint",
                    "typeName": "string",
                    "description": "Hint of minimum option",
                    "default": "Not at all likely",
                    "isOptional": True,
                },
                {
                    "argName": "maxHint",
                    "typeName": "string",
                    "description": "Hint of maximum option",
                    "default": "Extremely likely",
                    "isOptional": True,
                },
                {
                    "argName": "initialValue",
                    "typeName": "number",
                    "description": "The initial value of the input",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
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
                "key": "example1",
                "code": 'from hackerforms import read_nps\n\nans = read_nps(\n    "How likely are you to recommend Abstra Cloud?",\n    min_hint="No way!",\n    max_hint="Hell yeah!",\n)\n',
            }
        ],
    },
    "number-input": {
        "name": "Number field",
        "description": "Number field allow users to enter numeric values.",
        "type": "number-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 120,
            "minHeight": 60,
            "initialWidth": 223,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_number",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Number"',
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to 0.",
                    "typeName": "str",
                    "isKwarg": True,
                    "default": "0",
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "Insert a number".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Insert a number"',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
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
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "number",
                    "description": "The initial value of the input",
                    "isOptional": True,
                },
                {
                    "argName": "min",
                    "typeName": "number",
                    "description": "The minimum value of the input",
                    "isOptional": True,
                },
                {
                    "argName": "max",
                    "typeName": "number",
                    "description": "The maximun value of the input",
                    "isOptional": True,
                },
                {
                    "argName": "step",
                    "typeName": "number",
                    "description": "The step for the input",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "typeName": "string",
                    "description": "The placeholder text to display in the input",
                    "default": "Insert a number",
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "How old are you?"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_number",
                "key": "example1",
                "code": 'from hackerforms import read_number\n\nage = read_number("How old are you?")\n',
            }
        ],
    },
    "number-slider-input": {
        "name": "Number slider",
        "description": "Allow users to select values in a slider bar. ",
        "type": "number-slider-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 120,
            "minHeight": 30,
            "initialWidth": 223,
            "initialHeight": 72,
        },
        "pythonAPI": {
            "name": "read_number_slider",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Select a value!"',
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to 0.",
                    "typeName": "float",
                    "isKwarg": True,
                    "default": "0",
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
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
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "number",
                    "description": "The initial value of the input",
                    "isOptional": True,
                },
                {
                    "argName": "min",
                    "typeName": "number",
                    "description": "The minimum value of the input",
                    "isOptional": True,
                },
                {
                    "argName": "max",
                    "typeName": "number",
                    "description": "The maximun value of the input",
                    "isOptional": True,
                },
                {
                    "argName": "step",
                    "typeName": "number",
                    "description": "The step for the input",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "Set volume"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_number",
                "key": "example1",
                "code": 'from hackeforms import read_number_slider\n\nage = read_number_slider("Set volume")\n',
            }
        ],
    },
    "pandas-row-selection-input": {
        "name": "Table + selection",
        "description": "Display a pandas dataframe as a table and allow the user to select rows",
        "type": "pandas-row-selection-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 195,
            "minHeight": 72,
            "initialWidth": 245,
            "initialHeight": 72,
        },
        "pythonAPI": {
            "name": "read_pandas_row_selection",
            "params": [
                {
                    "argName": "df",
                    "description": "The pandas dataframe to be displayed",
                    "typeName": "PandasDataFrame",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": "pandas.Series([1, 3, 5, 4, 6, 8])",
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
                    "argName": "multiple",
                    "description": "Whether the user will be allowed to select multiple rows. Defaults to True.",
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
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
                    "description": "",
                    "properties": [
                        {"argName": "data", "typeName": "array", "description": ""},
                        {
                            "argName": "schema",
                            "typeName": "object",
                            "description": "",
                            "properties": [
                                {
                                    "argName": "fields",
                                    "typeName": "array",
                                    "description": "",
                                }
                            ],
                        },
                    ],
                },
                {
                    "argName": "displayIndex",
                    "typeName": "boolean",
                    "description": "",
                    "default": False,
                },
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the input",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "multiple",
                    "typeName": "boolean",
                    "description": "Whether the input accepts multiple values or not",
                    "isOptional": True,
                },
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
                "description": "The following example demonstrate some of the available functionality for read_pandas",
                "key": "example1",
                "code": 'from hackerforms import read_pandas_row_selection\nimport pandas as pd\n\ndata = [\n    {"Country": "USA", "Population": "32,700,000"},\n    {"Country": "China", "Population": "1,300,000,000"},\n    {"Country": "Japan", "Population": "126,000,000"},\n]\ndf = pd.DataFrame(data)\nread_pandas_row_selection(df)\n',
            }
        ],
    },
    "password-input": {
        "name": "Password field",
        "type": "password-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "description": "Password field allow users to enter a password before seen the content.",
        "dashProperties": {
            "minWidth": 120,
            "minHeight": 60,
            "initialWidth": 223,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_password",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Insert Your password"',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "lowercaseRequired",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input must have at least one lowercase character",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "uppercaseRequired",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input must have at least one uppercase character",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "specialRequired",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input must have at least one special character",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "digitRequired",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input must have at least one digit",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "minLength",
                    "typeName": "number",
                    "description": "Minimum length of the password",
                    "default": 8,
                    "isOptional": True,
                },
                {
                    "argName": "maxLength",
                    "typeName": ["number", "null"],
                    "description": "Maximum length of the password",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "size",
                    "typeName": ["number", "null"],
                    "description": "Size of the password",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "pattern",
                    "typeName": ["string", "null"],
                    "description": "A regex pattern for the accepted password",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "autocomplete",
                    "typeName": "string",
                    "description": "Allow the user's password manager to automatically enter the password",
                    "default": "current-password",
                    "isOptional": True,
                },
                {
                    "argName": "secret",
                    "typeName": "boolean",
                    "description": "Read-only field that indicates whether the widget response value is secret.",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "typeName": "string",
                    "description": "The placeholder text to display in the input",
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "Insert your password below"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_password",
                "key": "example1",
                "code": 'from hackerforms import read_password\n\nans = read_password("Insert your password below")\n',
            }
        ],
    },
    "phone-input": {
        "name": "Phone field",
        "description": "Phone field allow users to enter a valid phone number.",
        "type": "phone-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 377,
            "minHeight": 60,
            "initialWidth": 377,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_phone",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Insert a phone number."',
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. If dictionary, it contains two keys: 'country_code' (string with optional + sign or number) and 'national_number' (str or number). Ex: {'country_code': '+55', 'national_number': '21999990000'}. Defaults to \"\".",
                    "typeName": "Union[str, dict]",
                    "typeDescription": ["str (000000000000)", "AbstraPhone"],
                    "isKwarg": True,
                    "default": '""',
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {
                    "typeName": "PhoneResponse",
                    "typeDescription": 'A dict containing the value entered by the user ({"raw": str, "masked": str})',
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "object",
                    "description": "The initial value of the input",
                    "isOptional": True,
                    "properties": [
                        {
                            "argName": "countryCode",
                            "typeName": "string",
                            "description": "The phone number's country code",
                        },
                        {
                            "argName": "nationalNumber",
                            "typeName": "string",
                            "description": "The phone number's national number",
                        },
                    ],
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "typeName": "string",
                    "description": "The placeholder text to display in the input",
                    "default": "",
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "What is your phone number?"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_phone",
                "key": "example1",
                "code": 'from hackerforms import read_pandas_row_selection\n\nphone = read_phone("What is your phone number?")\nnumber = phone.raw  # eg: 5521999999999\nmasked = phone.masked  # eg: +55 (21) 99999-9999\n',
            }
        ],
    },
    "rating-input": {
        "name": "Rating feedback",
        "description": "Rating feedback allow users to rank their experience from 1 to 5 starts.",
        "type": "rating-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 120,
            "minHeight": 60,
            "initialWidth": 223,
            "initialHeight": 72,
        },
        "pythonAPI": {
            "name": "read_rating",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Rate us!"',
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to 0.",
                    "typeName": "int",
                    "isKwarg": True,
                    "default": "0",
                    "formOnly": True,
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
                    "default": None,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
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
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "number",
                    "description": "The initial value of the input",
                    "default": 0,
                    "isOptional": True,
                },
                {
                    "argName": "max",
                    "typeName": "number",
                    "description": "The maximum value of the input",
                    "default": 5,
                    "isOptional": True,
                },
                {
                    "argName": "char",
                    "typeName": "string",
                    "description": "Which char should be displayed as icon?",
                    "default": "⭐",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "How much do you rate this movie?"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_rating",
                "key": "example1",
                "code": 'from hackerforms import read_rating\n\nrating = read_rating("How do you rate this movie?")\n',
            },
            {
                "props": {
                    "label": "How do you evaluate your Python skills?",
                    "char": "🐍",
                    "max": 3,
                },
                "name": "Custom chars and number of points",
                "description": "The following example demonstrate some of the available functionality for read_rating",
                "key": "example2",
                "code": 'from hackerforms import read_rating\n\nrating = read_rating("How do you evaluate your Python skills?", char="🐍", max=3)\n',
            },
        ],
    },
    "tag-input": {
        "name": "Tag input",
        "type": "tag-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "description": "Read a tag value from the user",
        "dashProperties": {
            "minWidth": 120,
            "minHeight": 60,
            "initialWidth": 223,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_tag",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Insert the desired tags."',
                },
                {
                    "argName": "initial_value",
                    "description": "The initial value to display to the user. Defaults to [].",
                    "typeName": "list",
                    "typeDescription": ["list[str]"],
                    "isKwarg": True,
                    "default": "[]",
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "Your answer here".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Your answer here"',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {
                    "typeName": None,
                    "typeDescription": "list(str) or list(float): The value entered by the user",
                }
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": ["array", "null"],
                    "description": "The initial value of the input",
                    "default": [""],
                    "items": {"typeName": ["string", "number"]},
                    "isOptional": True,
                },
                {
                    "argName": "placeholder",
                    "typeName": "string",
                    "description": "The placeholder text to display in the input",
                    "default": "Your answer here",
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "Type and press enter to add a tag",
                    "initialValue": ["Red", "Green", "Blue"],
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_tag",
                "key": "example1",
                "code": 'from hackerforms import read_tag\n\nans = read_tag(\n    "Type and press enter to add a tag", initial_value=["Red", "Green", "Blue"]\n)\n# ans = ["Red", "Green" or "Blue"]`\n',
            }
        ],
    },
    "text-input": {
        "name": "Text field",
        "description": "Text fields allow users to insert plain text.",
        "type": "text-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 120,
            "minHeight": 60,
            "initialWidth": 223,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Insert your text here!"',
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "string",
                    "description": "The initial value of the input",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "mask",
                    "typeName": "string",
                    "description": "A mask to apply to the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "typeName": "string",
                    "description": "The placeholder text to display in the input",
                    "default": "Placeholder",
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "What is your name?"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read",
                "key": "example1",
                "code": 'from hackerforms import read\n\nname = read("What is your name?")\n',
            },
            {
                "props": {
                    "label": "What is your credit card number?",
                    "mask": "0000 0000 0000 0000",
                },
                "name": "Mask Example",
                "description": "The following example shows the usage of the mask property for read widget. In the mask property, the '0' digit represents a numeric value, the 'a' digit represents an alphabetic value and other digits are recognized as part of the value",
                "key": "example2",
                "code": 'from hackerforms import read\n\nread("What is your credit card number?", mask="0000 0000 0000 0000")\n',
            },
        ],
    },
    "textarea-input": {
        "name": "Long text field",
        "type": "textarea-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "description": "Long text field allow users to type longer textual content.",
        "dashProperties": {
            "minWidth": 200,
            "minHeight": 200,
            "initialWidth": 223,
            "initialHeight": 272,
        },
        "pythonAPI": {
            "name": "read_textarea",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Insert your text here!"',
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '""',
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "description": 'The placeholder text to display to the user. Defaults to "Your answer here".',
                    "typeName": "str",
                    "isKwarg": True,
                    "default": '"Your answer here"',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {"typeName": "str", "typeDescription": "The value entered by the user"}
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "string",
                    "description": "The initial value of the input",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "placeholder",
                    "typeName": "string",
                    "description": "The placeholder text to display in the input",
                    "default": "Your answer here",
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "label": "What kind of things are you building with Abstra Cloud?"
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_textarea",
                "key": "example1",
                "code": 'from hackerforms import read_textarea\n\nans = read_textarea("What kind of things are you building with Abstra Cloud?")\n',
            }
        ],
    },
    "time-input": {
        "name": "Time input",
        "type": "time-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "description": "Read a time value from the user",
        "dashProperties": {
            "minWidth": 120,
            "minHeight": 60,
            "initialWidth": 223,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_time",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Choose the desired time."',
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "str",
                    "typeDescription": ["str (HH:MM:SS)"],
                    "isKwarg": True,
                    "default": '""',
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
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
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": "string",
                    "description": "The initial value of the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "format",
                    "typeName": "string",
                    "description": "The format of time options. 24hs (0-23) or ampm (0-12)",
                    "default": "24hs",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "Select a time below"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_time",
                "key": "example1",
                "code": 'from hackerforms import read\n\nans = read_time("Select a time below")\n# ans = 00:00:00\n',
            }
        ],
    },
    "toggle-input": {
        "name": "Toggle",
        "description": "Allow users to set between two items.",
        "type": "toggle-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 120,
            "minHeight": 100,
            "initialWidth": 377,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_toggle",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Click to confirm the following options"',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [
                {"typeName": None, "typeDescription": "bool: if the toggle was checked"}
            ],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "onText",
                    "typeName": "string",
                    "description": "Text of On toggle option",
                },
                {
                    "argName": "offText",
                    "typeName": "string",
                    "description": "Text of Off toggle option",
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "Toggle", "onText": "On", "offText": "Off"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_toggle",
                "key": "example1",
                "code": 'from hackerforms import read_toggle\n\nans = read_toggle("Toggle")\n# ans = True or False\nprint(ans)\n',
            },
            {
                "props": {
                    "label": "Custom Toggle",
                    "onText": "Confirm",
                    "offText": "Cancel",
                },
                "name": "Custom Example",
                "description": "The following example demonstrate how to customize the toggle options text",
                "key": "example2",
                "code": 'from hackerforms import read_toggle\n\nans = read_toggle("Custom Toggle", on_text="Confirm", off_text="Cancel")\n# ans = True or False\n',
            },
        ],
    },
    "video-input": {
        "name": "Video upload",
        "description": "Video upload adds a drop-area for users to upload one or more video files.",
        "type": "video-input",
        "events": [
            {
                "key": "change",
                "description": "Function or expression to be run when the input value changes",
                "payloadSchema": [],
            }
        ],
        "dashProperties": {
            "minWidth": 150,
            "minHeight": 112,
            "initialWidth": 223,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "read_video",
            "params": [
                {
                    "argName": "label",
                    "description": "The label to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Upload your video"',
                },
                {
                    "argName": "initial_value",
                    "description": 'The initial value to display to the user. Defaults to "".',
                    "typeName": "Union[str, io.IOBase]",
                    "typeDescription": ["io.IOBase", "str (filepath)", "str (URL)"],
                    "isKwarg": True,
                    "default": '""',
                    "formOnly": True,
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
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
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label of the input",
                },
                {
                    "argName": "initialValue",
                    "typeName": ["string", "array"],
                    "description": "The initial value of the input",
                    "items": {"typeName": "string"},
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "maxFileSize",
                    "description": "Maximum size allowed to be transfered in total in MB.",
                    "typeName": "number",
                    "isOptional": True,
                },
                {
                    "argName": "key",
                    "typeName": "string",
                    "description": "The key of the input on the returning object",
                },
                {
                    "argName": "disabled",
                    "typeName": "boolean",
                    "description": "Whether the input is disabled",
                },
                {
                    "argName": "hint",
                    "typeName": ["string", "null"],
                    "description": "message describing the input",
                    "default": None,
                    "isOptional": True,
                },
                {
                    "argName": "end_program",
                    "typeName": ["boolean", "null"],
                    "description": "End program after this widget is shown",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "required",
                    "typeName": ["boolean", "string"],
                    "description": "Whether the input is required or not",
                    "default": True,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "multiple",
                    "typeName": "boolean",
                    "description": "Whether the input accepts multiple values or not",
                    "isOptional": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"label": "Upload your video"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_video",
                "key": "example1",
                "code": 'from hackerforms import read_video\n\nfileResponse = read_video("Upload your video")\nfile = fileResponse.file  # File object\nurl = fileResponse.url  # Url to the file\ncontent = fileResponse.content  # Raw file content\n',
            }
        ],
    },
    "file-output": {
        "name": "Download file",
        "description": "Show a button for the user to download a file.",
        "type": "file-output",
        "events": [],
        "dashProperties": {
            "minWidth": 65,
            "minHeight": 30,
            "initialWidth": 223,
            "initialHeight": 72,
        },
        "pythonAPI": {
            "name": "display_file",
            "params": [
                {
                    "argName": "file",
                    "description": "The file to download",
                    "typeName": "Union[str, io.IOBase]",
                    "typeDescription": ["io.IOBase", "str (filepath)", "str (URL)"],
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"https://gist.github.com/armgilles/194bcff35001e7eb53a2a8b441e8b2c6/archive/92200bc0a673d5ce2110aaad4544ed6c4010f687.zip"',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "fileUrl", "typeName": "string", "description": ""},
                {
                    "argName": "downloadText",
                    "typeName": "string",
                    "default": "Download",
                    "description": "",
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
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
                "key": "example1",
                "code": 'from hackerforms import display_file\n\ndisplay_file(\n    "https://placekitten.com/200/300", download_text="Click here to reveal the secret"\n)\n',
            }
        ],
    },
    "html-output": {
        "name": "HTML",
        "description": "Embed HTML to the app.",
        "type": "html-output",
        "events": [],
        "dashProperties": {
            "minWidth": 65,
            "minHeight": 30,
            "initialWidth": 146,
            "initialHeight": 32,
        },
        "pythonAPI": {
            "name": "display_html",
            "params": [
                {
                    "argName": "html",
                    "description": "The html snippet to display to the user",
                    "typeName": "str",
                    "typeDescription": ["str (html snippet)"],
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"<div>Hello World</div>"',
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "html", "typeName": "string", "description": ""},
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "html": '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>'
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_html",
                "key": "example1",
                "code": 'from hackerforms import display_html\n\ndisplay_html(\n    \'<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>\'\n)\n',
            }
        ],
    },
    "iframe-output": {
        "name": "iframe",
        "description": "Embed content using iframe.",
        "type": "iframe-output",
        "events": [],
        "dashProperties": {
            "minWidth": 377,
            "minHeight": 632,
            "initialWidth": 377,
            "initialHeight": 632,
        },
        "pythonAPI": {
            "name": "display_iframe",
            "params": [
                {
                    "argName": "url_or_html",
                    "description": "The link to the document or the own document to display to the user",
                    "typeName": "str",
                    "typeDescription": ["str (URL)", "str (html snippet)"],
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"<div>Hello World</div>"',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "url", "typeName": "string", "description": ""},
                {
                    "argName": "width",
                    "typeName": "string",
                    "description": "",
                    "isOptional": True,
                },
                {
                    "argName": "height",
                    "typeName": "string",
                    "description": "",
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
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
                "key": "example1",
                "code": 'from hackerforms import display_iframe\n\ndisplay_iframe(\n    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319",\n    width="300",\n    height="250",\n)\n',
            }
        ],
    },
    "image-output": {
        "name": "Show image",
        "description": "Show an image to the user",
        "type": "image-output",
        "events": [],
        "dashProperties": {
            "minWidth": 60,
            "minHeight": 60,
            "initialWidth": 223,
            "initialHeight": 312,
        },
        "pythonAPI": {
            "name": "display_image",
            "params": [
                {
                    "argName": "image",
                    "description": "The image to display to the user",
                    "typeName": "Union[str, io.IOBase]",
                    "typeDescription": ["io.IOBase", "str (filepath)", "str (URL)"],
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/396px-Mona_Lisa.jpg"',
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
                    "default": None,
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "imageUrl", "typeName": "string", "description": ""},
                {
                    "argName": "subtitle",
                    "typeName": "string",
                    "default": "",
                    "description": "",
                    "isOptional": True,
                },
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the image",
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "imageUrl": "https://placekitten.com/200/200",
                    "subtitle": "Meooow",
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_image",
                "key": "example1",
                "code": 'from hackerforms import display_image\n\ndisplay_image("https://placekitten.com/200/200", subtitle="Meooow")\n',
            }
        ],
    },
    "latex-output": {
        "name": "Show Latex formula",
        "description": "Show an Latex formula to the user",
        "type": "latex-output",
        "events": [],
        "dashProperties": {
            "minWidth": 60,
            "minHeight": 30,
            "initialWidth": 146,
            "initialHeight": 32,
        },
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
                    "dashesInitialValue": '"\\(x^2 + y^2 = z^2\\)"',
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "text",
                    "typeName": "string",
                    "description": "The latex formula",
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"text": "\\(ax^2 + bx + c = 0\\)"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_latex",
                "key": "example1",
                "code": 'from hackerforms import display_latex\n\ndisplay_latex("\\(ax^2 + bx + c = 0\\)")\n',
            },
            {
                "props": {
                    "text": "When \\(a \\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_latex",
                "key": "example2",
                "code": 'from hackerforms import display_latex\n\ndisplay_latex(\n    """When \\(a \\\\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are\n$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"""\n)\n',
            },
        ],
    },
    "link-output": {
        "name": "Link (text URL)",
        "description": "Allow users to see and open content from text links.",
        "type": "link-output",
        "events": [],
        "dashProperties": {
            "minWidth": 60,
            "minHeight": 72,
            "initialWidth": 146,
            "initialHeight": 72,
        },
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
                    "dashesInitialValue": '"https://www.abstracloud.com"',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "linkText", "typeName": "string", "description": ""},
                {"argName": "linkUrl", "typeName": "string", "description": ""},
                {
                    "argName": "sameTab",
                    "typeName": "boolean",
                    "description": "",
                    "default": False,
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "linkUrl": "https://console.abstracloud.com",
                    "linkText": "Abstra Cloud Homepage",
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_link",
                "key": "example1",
                "code": 'from hackerforms import display_link\n\ndisplay_link("https://console.abstracloud.com", link_text="Abstra Cloud Homepage")\n',
            }
        ],
    },
    "markdown-output": {
        "name": "Markdown",
        "description": "Show a formatted text to the user",
        "type": "markdown-output",
        "events": [],
        "dashProperties": {
            "minWidth": 60,
            "minHeight": 30,
            "initialWidth": 146,
            "initialHeight": 72,
        },
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
                    "dashesInitialValue": '"### Hello World"',
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "text", "typeName": "string", "description": ""},
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {
                    "text": "\n## Let's see some examples 8-)\n\n* 1^th^ H~2~0 \n\n- [ ] Task\n\n* ==Mark==\n\n* [Link](https://www.abstracloud.com/)"
                },
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for display_markdown",
                "key": "example1",
                "code": 'from hackerforms import display_markdown\n\n\ndisplay_markdown(\n    """\n## Let\'s see some examples 8-)\n\n* 1^th^ H~2~0\n\n\n\n- [ ] Task\n\n* ==Mark==\n\n* [Link](https://www.abstracloud.com/)"""\n)\n',
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
            }
        ],
        "dashProperties": {
            "minWidth": 195,
            "minHeight": 72,
            "initialWidth": 245,
            "initialHeight": 72,
        },
        "pythonAPI": {
            "name": "display_pandas",
            "params": [
                {
                    "argName": "df",
                    "description": "The dataframe to display to the user",
                    "typeName": "PandasDataFrame",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": "pandas.Series([1, 3, 5, 4, 6, 8])",
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
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "table",
                    "typeName": "object",
                    "description": "",
                    "properties": [
                        {"argName": "data", "typeName": "array", "description": ""},
                        {
                            "argName": "schema",
                            "typeName": "object",
                            "description": "",
                            "properties": [
                                {
                                    "argName": "fields",
                                    "typeName": "array",
                                    "description": "",
                                }
                            ],
                        },
                    ],
                },
                {
                    "argName": "displayIndex",
                    "typeName": "boolean",
                    "description": "",
                    "default": False,
                },
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the dataframe",
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
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
                "key": "example1",
                "code": "from hackerforms import display_pandas\n\ndisplay_pandas(df)\n",
            }
        ],
    },
    "plotly-output": {
        "name": "Line chart",
        "description": "Show a line chart to the user using Plotly",
        "type": "plotly-output",
        "events": [],
        "dashProperties": {
            "minWidth": 245,
            "minHeight": 112,
            "initialWidth": 245,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "display_plotly",
            "params": [
                {
                    "argName": "fig",
                    "description": "The figure to display to the user",
                    "typeName": "PlotlyFigure",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": 'plotly_express.bar(x=["a", "b", "c"], y=[1, 3, 2])',
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "figure", "typeName": "any", "description": ""},
                {
                    "argName": "label",
                    "typeName": "string",
                    "description": "The label to display above the figure",
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
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
                "key": "example1",
                "code": 'from hackerforms import display_plotly\nimport plotly.graph_objects as go\n\nfigure = go.Figure(\n    data=[go.Bar(x=[1, 2, 3], y=[1, 3, 2])],\n    layout=go.Layout(title=go.layout.Title(text="Bar chart example")),\n)\n\ndisplay_plotly(figure)\n',
            }
        ],
    },
    "progress-output": {
        "name": "Progress bar",
        "description": "Show a progress bar when loading the app.",
        "type": "progress-output",
        "events": [],
        "dashProperties": {
            "minWidth": 60,
            "minHeight": 30,
            "initialWidth": 300,
            "initialHeight": 32,
        },
        "pythonAPI": {
            "name": "display_progress",
            "params": [
                {
                    "argName": "current",
                    "description": "The progress being made. Defaults to 50.",
                    "typeName": "float",
                    "isKwarg": False,
                    "default": "50",
                    "dashesInitialValue": "50",
                },
                {
                    "argName": "total",
                    "description": "Total progress. Defaults to 100.",
                    "typeName": "float",
                    "isKwarg": False,
                    "default": "100",
                    "dashesInitialValue": "100",
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
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {
                    "argName": "current",
                    "typeName": "number",
                    "description": "",
                    "default": 50,
                },
                {
                    "argName": "total",
                    "typeName": "number",
                    "description": "",
                    "default": 100,
                },
                {
                    "argName": "text",
                    "typeName": "string",
                    "description": "",
                    "default": "",
                    "isOptional": True,
                },
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"current": 50, "total": 100},
                "name": "Default behavior",
                "description": "This is what happens when there is no parameter passed",
                "key": "example1",
                "code": "from hackerforms import display_progress\n\ndisplay_progress()\n",
            },
            {
                "props": {"current": 8, "total": 10, "text": "Almost there!"},
                "name": "Custom fields",
                "description": "You can customize the current and total number of steps. Also the message of each step",
                "key": "example2",
                "code": 'from time import sleep\n\ndisplay_progress(0, 10, "Computing values")\n\n# Do some computation\nsleep(1)\n\ndisplay_progress(8, 10, "Almost there!")\n\n# Do some other computation\nsleep(1)\n\ndisplay("Done")\n',
            },
        ],
    },
    "text-output": {
        "name": "Text display",
        "description": '"Text display" adds textual information into the app.',
        "type": "text-output",
        "events": [],
        "dashProperties": {
            "minWidth": 60,
            "minHeight": 30,
            "initialWidth": 223,
            "initialHeight": 112,
        },
        "pythonAPI": {
            "name": "display",
            "params": [
                {
                    "argName": "text",
                    "description": "The text to display to the user",
                    "typeName": "str",
                    "isKwarg": False,
                    "default": None,
                    "dashesInitialValue": '"Your text here!"',
                },
                {
                    "argName": "end_program",
                    "description": "Whether the program should end after the widget is shown. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
                {
                    "argName": "full_width",
                    "description": "Whether the input should use full screen width. Defaults to False.",
                    "typeName": "bool",
                    "isKwarg": True,
                    "default": "False",
                    "formOnly": True,
                },
            ],
            "returns": [],
        },
        "brokerAPI": {
            "params": [
                {"argName": "text", "description": "", "typeName": "string"},
                {
                    "argName": "columns",
                    "typeName": "number",
                    "description": "number of columns this input will take",
                    "isOptional": True,
                    "formOnly": True,
                },
                {
                    "argName": "fullWidth",
                    "typeName": "boolean",
                    "description": "Whether the widget should take up the full width of the page",
                    "isOptional": True,
                    "formOnly": True,
                },
            ]
        },
        "examples": [
            {
                "props": {"text": "Hello world!"},
                "name": "Basic Example",
                "description": "The following example demonstrate some of the available functionality for read_display",
                "key": "example1",
                "code": 'from hackerforms import display\n\ndisplay("Hello world!")\n',
            }
        ],
    },
}
