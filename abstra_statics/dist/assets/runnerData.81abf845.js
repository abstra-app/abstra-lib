import{U as d}from"./registerWidgets.ef15081f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="de18d736-671d-49af-84c1-2a6a720bb71c",e._sentryDebugIdIdentifier="sentry-dbid-de18d736-671d-49af-84c1-2a6a720bb71c")}catch{}})();const k={"answer-sheet-input":{name:"Answer sheet",description:"Retrieve the answers from a test on usual answersheet",type:"answer-sheet-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:200,minHeight:350,initialWidth:200,initialHeight:350},pythonAPI:{name:"read_answer_sheet",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Answer Sheet Title"'},{argName:"options",description:"The options which can be chosen as an answer",typeName:"list",typeDescription:["list[str]"],isKwarg:!1,default:'["A", "B", "C", "D", "E"]',dashesInitialValue:'["A", "B", "C", "D", "E"]'},{argName:"number_of_questions",description:"Number of questions the answersheet will cover",typeName:"int",isKwarg:!1,default:"5",dashesInitialValue:"5"},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:null,typeDescription:"list: The values/value selected by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"options",typeName:"array",description:"The options which can be chosen as an answer"},{argName:"numberOfQuestions",typeName:"number",description:"Number of questions the answersheet will cover"},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"SAT - 2023",options:["A","B","C","D","E"],numberOfQuestions:5},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_answer_sheet",key:"example1",code:`from abstra.forms import read_answer_sheet

answer_sheet = read_answer_sheet("SAT - 2023", ["A", "B", "C", "D", "E"], 5)
# answer_sheet = { '1': 'A', '2': None, '3': 'C' }
`}]},"cards-input":{name:"Card display",description:"Read a text value from the user simple text input",type:"cards-input",autoHeight:!0,events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]},{key:"card-click",description:"Function or expression to be run when a card is clicked",payloadSchema:[{key:"card",typeName:"Object",description:"The card that was clicked"}]}],dashProperties:{minWidth:200,minHeight:200,initialWidth:400,initialHeight:350},pythonAPI:{name:"read_cards",params:[{argName:"label",description:"The text related to this input",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Card Title"'},{argName:"options",description:"List of dicts representing the cards, each dict can have the following keys: title, subtitle, image, description, topLeftExtra, topRightExtra",typeName:"list",typeDescription:["list[{'title': str, 'subtitle': str, 'image': str, 'description': str, 'topLeftExtra': str, 'topRightExtra': str}]"],isKwarg:!1,default:null,dashesInitialValue:`[
          {
            "title": "Option 1",
            "subtitle": "Subtitle 1",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/396px-Mona_Lisa.jpg",
            "description": "option 1 description",
            "topLeftExtra": "Left 1",
            "topRightExtra": "Right 1",
          }
        ]`},{argName:"multiple",description:"Whether the user can select multiple options. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"initial_value",description:"The initial value to display to the user. Defaults to None.",typeName:"list",typeDescription:["list[AbstraCard]"],isKwarg:!0,default:"None",formOnly:!0},{argName:"searchable",description:"Whether to show a search bar. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"layout",description:"Whether the cards layout should be 'list' or 'grid'. Defaults to 'list'. The 'grid' only applies to desktop resolutions.",typeName:"str",typeDescription:["str ('list', 'grid')"],isKwarg:!0,default:"'list'"},{argName:"columns",typeName:"int",description:"When layout is 'grid', how many columns to display",isKwarg:!0,default:"2"},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:null,typeDescription:"list, any: The options/option selected by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"options",typeName:"array",description:"The options that the user can select from",items:{typeName:"object",properties:[{argName:"title",typeName:"string",description:""},{argName:"subtitle",typeName:"string",description:""},{argName:"image",typeName:"string",description:""},{argName:"description",typeName:"string",description:""},{argName:"topLeftExtra",typeName:"string",description:""},{argName:"topRightExtra",typeName:"string",description:""}]}},{argName:"multiple",typeName:"boolean",description:"Whether the input can have multiple values",default:!1,isOptional:!0},{argName:"searchable",typeName:"boolean",description:"Display a search input",isOptional:!0},{argName:"initialValue",typeName:["object","array","null"],description:"The initial value of the input",isOptional:!0,items:{typeName:"object",properties:[{argName:"title",typeName:"string",description:""},{argName:"image",typeName:"string",description:""},{argName:"description",typeName:"string",description:""}],default:null}},{argName:"layout",typeName:"string",description:"Whether the cards layout should be 'list' or 'grid'. Defaults to 'list'. The 'grid' only applies to desktop resolutions.",oneOf:["list","grid"],default:"list",isOptional:!0},{argName:"columns",typeName:"number",description:"When layout is 'grid', how many columns to display",isOptional:!0,default:"2"},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"Choose your character",options:[{title:"Bulbasaur",subtitle:"Grass / Poison",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",description:"There is a plant seed on its back right from the day this Pok\xE9mon is born. The seed slowly grows larger.",topLeftExtra:"N\xBA",topRightExtra:"001"},{title:"Charmander",subtitle:"Fire",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",description:"It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",topLeftExtra:"N\xBA",topRightExtra:"004"},{title:"Squirtle",subtitle:"Water",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",description:"When it retracts its long neck into its shell, it squirts out water with vigorous force.",topLeftExtra:"N\xBA",topRightExtra:"007"}]},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_cards",key:"example1",code:`from abstra.forms import read_cards

card = read_cards(
    "Choose your character",
    [
        {
            "title": "Bulbasaur",
            "subtitle": "Grass / Poison",
            "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            "description": "There is a plant seed on its back right from the day this Pok\xE9mon is born. The seed slowly grows larger.",
            "topLeftExtra": "N\xBA",
            "topRightExtra": "001",
        },
        {
            "title": "Charmander",
            "subtitle": "Fire",
            "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
            "description": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
            "topLeftExtra": "N\xBA",
            "topRightExtra": "004",
        },
        {
            "title": "Squirtle",
            "subtitle": "Water",
            "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
            "description": "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
            "topLeftExtra": "N\xBA",
            "topRightExtra": "007",
        },
    ],
)
# card = { 'title': ..., 'subtitle': ..., 'image': ..., 'description': ..., 'topLeftExtra': ..., 'topRightExtra': ... }
`}]},"checkbox-input":{name:"Checkbox",description:"Allow users to select an option by interacting with a checkbox",type:"checkbox-input",autoHeight:!0,events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],dashProperties:{minWidth:60,minHeight:32,initialWidth:222,initialHeight:32},pythonAPI:{name:"read_checkbox",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Choose your option"'},{argName:"initial_value",description:"The initial value to display to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None",formOnly:!0},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:null,typeDescription:"list(str) or list(float): The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:"any",description:"The initial value of the input",items:{typeName:["string","number"]},default:null,isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"I have read and agree to the terms of services"},name:"Basic Example",description:"Basic use of read_checkbox",key:"example1",code:`from abstra.forms import read_checkbox

ans = read_checkbox("I have read and agree to the terms of services")

print(ans)
`},{props:{label:"Would you like to receive product updates and announcements via email?"},name:"Optional field",description:"If check the box is optional, pass the optional parameter required",key:"example2",code:`from abstra.forms import read_checkbox

ans = read_checkbox(
    "Would you like to receive product updates and announcements via email?",
    required=False,
)

print(ans)
`},{props:{label:"I have read and agree to the [terms of services](https://example.com)"},name:"Use markdown to customize label",description:"Use markdown syntax to customize the label",key:"example3",code:`from abstra.forms import read_checkbox

ans = read_checkbox(
    "I have read and agree to the [terms of services](https://example.com)"
)
`}]},"checklist-input":{name:"Checklist",description:"Show a checklist for users to select items",type:"checklist-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:60,minHeight:32,initialWidth:222,initialHeight:112},pythonAPI:{name:"read_checklist",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Choose your option"'},{argName:"options",description:"The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]",typeName:"list",typeDescription:["list[AbstraOption]"],isKwarg:!1,default:null,dashesInitialValue:`[
    {
      "label": "Option 1",
      "value": 1,
    },
    {
      "label": "Option 2",
      "value": 2,
    },
  ]`},{argName:"initial_value",description:"The initial value to display to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None",formOnly:!0},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:null,typeDescription:"list or any: The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:"any",description:"The initial value of the input",items:{typeName:["string","number"]},default:null,isOptional:!0},{argName:"options",typeName:"array",description:"The options that the user can select from",items:{typeName:["string","object"],properties:[{argName:"key",typeName:"string",description:"The key of the option on the returning object"},{argName:"value",typeName:"any",description:"The value of the option on the returning object"}]}},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"Which programming language have you worked with?",options:["Python","JavaScript","Go","Elixir","Haskell"]},name:"Basic Example",description:"Basic use of read_checklist",key:"example1",code:`from abstra.forms import read_checklist

ans = read_checklist(
    "Which programming language have you worked with?",
    ["Python", "JavaScript", "Go", "Elixir", "Haskell"],
)
`},{props:{label:"What are the solutions to the equation x^2 + 3x + 2 = 0?",options:[{label:"-1",value:"a"},{label:"-2",value:"b"},{label:"0 and -1",value:"c"},{label:"0 and 1",value:"d"},{label:"None of the above",value:"e"}]},name:"Label and value dict",description:"Use a dictionary to specify the label and value of each option. The label will be displayed to the user, and the value will be returned by the widget.",key:"example2",code:`from abstra.forms import read_checklist

ans = read_checklist(
    "What are the solutions to the equation x^2 + 3x + 2 = 0?",
    [
        {"label": "-1", "value": "a"},
        {"label": "-2", "value": "b"},
        {"label": "0 and -1", "value": "c"},
        {"label": "0 and 1", "value": "d"},
        {"label": "None of the above", "value": "e"},
    ],
)

# ans = ["a", "b"]
`},{props:{label:"",options:[{label:"I have read and agree to the [terms of services](https://example.com)",value:"agree"}]},name:"Use markdown in options",description:"Use markdown syntax to customize the options.",key:"example3",code:`from abstra.forms import read_checklist

ans = read_checklist(
    "",
    [
        {
            "label": "I have read and agree to the [terms of services](https://example.com)",
            "value": "agree",
        },
    ],
)
`}]},"click-input":{name:"Button",description:"Buttons allow users to trigger actions.",type:"click-input",autoHeight:!0,events:[{key:"click",description:"Function or expression to be run when the button is clicked",payloadSchema:[]}],dashOnly:!0,dashProperties:{minWidth:60,minHeight:62,initialWidth:140,initialHeight:62},pythonAPI:{name:"read_click",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Click here!"'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:null,typeDescription:"list(str) or list(float): The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"Send"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_click",key:"example1",code:""}]},"cnpj-input":{name:"CNPJ input",description:"Allow users to insert a CNPJ number into the app.",type:"cnpj-input",autoHeight:!0,events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],dashProperties:{minWidth:222,minHeight:70,initialWidth:222,initialHeight:112},pythonAPI:{name:"read_cnpj",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Insert your CNPJ here!"'},{argName:"initial_value",description:"The initial value to display to the user. Defaults to None.",typeName:"str",typeDescription:["str (00.000.000/0001-00)"],isKwarg:!0,default:"None",formOnly:!0},{argName:"invalid_message",description:"The message to display when the user enters an invalid value. Defaults to None.",typeName:"str",isKwarg:!0,default:"None",formOnly:!0},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "00.000.000/0001-00".',typeName:"str",typeDescription:["str (00.000.000/0001-00)"],isKwarg:!0,default:'"00.000.000/0001-00"'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:null,typeDescription:"list(str) or list(float): The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:"string",description:"The initial value of the input",default:"",isOptional:!0},{argName:"invalidMessage",description:"The message to display when the user enters an invalid value. Defaults to None.",typeName:"string",default:"",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input",default:"00.000.000/0001-00"}]},examples:[{props:{label:"Insert your CNPJ below"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_cnpj",key:"example1",code:`from abstra.forms import read_cnpj

name = read_cnpj("Insert your CNPJ below")
`}]},"code-input":{name:"Code input",description:"Code input allow users to insert code and reads it.",type:"code-input",autoHeight:!1,events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],dashProperties:{minWidth:377,minHeight:552,initialWidth:377,initialHeight:552},pythonAPI:{name:"read_code",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Send your code here!"'},{argName:"initial_value",description:'The initial value to display to the user. Defaults to "".',typeName:"str",isKwarg:!0,default:'""',formOnly:!0},{argName:"language",description:"The programming language. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"str",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"language",typeName:"string",description:"Programming language for syntax highlighting",isOptional:!0},{argName:"initialValue",typeName:"string",description:"The initial value of the input",default:"",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"Show me the code!",language:"c",initialValue:`#include<stdio.h>
int main(int argc, char** argv) {
char name[256];
scanf("%s", name);
printf("%s, here is", name);
}`},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_code",key:"example1",code:`from abstra.forms import read_code

ans = read_code("Show me the code!", language="c")
`}]},"cpf-input":{name:"CPF input",description:"Allow users to insert a CPF number into the app.",type:"cpf-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:222,minHeight:70,initialWidth:222,initialHeight:112},pythonAPI:{name:"read_cpf",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Insert your CPF here!"'},{argName:"initial_value",description:'The initial value to display to the user. Defaults to "".',typeName:"str",typeDescription:["str (000.000.000-00)"],isKwarg:!0,default:'""',formOnly:!0},{argName:"invalid_message",description:"The message to display when the user enters an invalid value. Defaults to None.",typeName:"str",isKwarg:!0,default:"None",formOnly:!0},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "000.000.000-00".',typeName:"str",typeDescription:["str (000.000.000-00)"],isKwarg:!0,default:'"000.000.000-00"'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"str",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:"string",description:"The initial value of the input",default:"",isOptional:!0},{argName:"invalidMessage",description:"The message to display when the user enters an invalid value. Defaults to None.",typeName:"string",default:"",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input",default:"000.000.000-00"}]},examples:[{props:{label:"Insert your CPF below"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_cpf",key:"example1",code:`from abstra.forms import read_cpf

name = read_cpf("Insert your CPF below")
`}]},"currency-input":{name:"Currency input",description:"Currency input allows users to enter monetary values.",type:"currency-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:100,minHeight:72,initialWidth:300,initialHeight:112},pythonAPI:{name:"read_currency",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Insert the proper amount."'},{argName:"initial_value",description:"The initial value to display to the user. Defaults to 0.",typeName:"str",isKwarg:!0,default:"0",formOnly:!0},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "Insert the amount here".',typeName:"str",isKwarg:!0,default:'"Insert the amount here"'},{argName:"min",description:'The minimum value allowed, eg. "0". Defaults to None.',typeName:"float",isKwarg:!0,default:"None"},{argName:"max",description:'The maximum value allowed, eg. "100". Defaults to None.',typeName:"float",isKwarg:!0,default:"None"},{argName:"step",description:"The value to be incremented or decremented while using the input button. Defaults to None.",typeName:"float",isKwarg:!0,default:"None"},{argName:"currency",description:'The currency to display to the user, eg. "USD", "BRL, "EUR", "GBP". Defaults to "USD".',typeName:"str",isKwarg:!0,default:'"USD"'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"float",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label to display above the input"},{argName:"currency",typeName:"string",description:"The currency to use"},{argName:"initialValue",typeName:"number",description:"The initial value of the input",default:"",isOptional:!0},{argName:"min",typeName:"number",description:"The minimum value of the input",isOptional:!0},{argName:"max",typeName:"number",description:"The maximun value of the input",isOptional:!0},{argName:"step",typeName:"number",description:"The step for the input",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input"}]},examples:[{props:{label:"How many credits do you want?",initialValue:10,min:10,currency:"USD"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_currency",key:"example1",code:`from abstra.forms import read_currency

read_currency(
    f"How many credits do you want?", currency="USD", initial_value=10, min=10
)
`}]},"custom-input":{type:"custom-input",name:"Custom widget",description:"Widget with customizable UI and behaviour",autoHeight:!1,events:[{key:"custom-event",description:"Function or expression to be run when custom event is triggered",payloadSchema:[]},{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],dashProperties:{minWidth:65,minHeight:30,initialWidth:146,initialHeight:32},pythonAPI:{name:"read_custom",params:[{argName:"html_body",description:"The HTML body content",typeName:"str",typeDescription:["str (HTML snippet)"],isKwarg:!1,default:null,dashesInitialValue:'"<h1>Hello World</h1>"'},{argName:"initial_value",description:"The initial value to be stored in custom widget state.",typeName:"Any",isKwarg:!0,default:null,formOnly:!0},{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!0,default:null},{argName:"html_head",description:"The HTML head content",typeName:"str",typeDescription:["str (HTML snippet)"],isKwarg:!0,default:null,dashesInitialValue:'""'},{argName:"css",description:"The widget's CSS",typeName:"str",typeDescription:["str (CSS snippet)"],isKwarg:!0,default:null,dashesInitialValue:'"h1 { color: red; }"'},{argName:"js",description:"The widget's JavaScript",typeName:"str",typeDescription:["str (JavaScript snippet)"],isKwarg:!0,default:null,dashesInitialValue:`"console.log('Hello World')"`},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:null,typeDescription:"any: The custom response"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label to display to the user",isOptional:!0},{argName:"initialValue",typeName:"any",description:"The initial value to be stored in custom widget state.",default:null,isOptional:!0},{argName:"htmlHead",typeName:"string",description:"The HTML head content",isOptional:!0},{argName:"htmlBody",typeName:"string",description:"The HTML body content"},{argName:"css",typeName:"string",description:"The widget's CSS",isOptional:!0},{argName:"js",typeName:"string",description:"The widget's JavaScript",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{htmlBody:"<button id='date-btn'>Get current date</button>",js:`document.getElementById('date-btn').addEventListener('click',function() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    changeEvent(day + '/' + month + '/' + year);
});`,css:`body {
    margin: 0;
    padding: 0;
}

#date-btn {
    cursor: pointer;
    background-color: #343b46;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

#date-btn:hover {
    background-color: #3e4756;
}`,label:"Custom Widget"},name:"Basic Example",description:"The following example shows how to create a custom widget with a button that returns the current date.",key:"example1",code:`from abstra.forms import read_custom

current_date = read_custom(
    "<button id='date-btn'>Get current date</button>",
    label="Custom Widget",
    js="""
    document.getElementById('date-btn').addEventListener('click',function() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        changeEvent(day + '/' + month + '/' + year);
    });
    """,
    css="""
    body {
        margin: 0;
        padding: 0;
    }

    #date-btn {
        cursor: pointer;
        background-color: #343b46;
        border: none;
        border-radius: 4px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    #date-btn:hover {
        background-color: #3e4756;
    }
    """,
)
`}]},"date-input":{name:"Date picker input",description:"Allow users to select  a date, or a range of dates.*",type:"date-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:200,minHeight:72,initialWidth:300,initialHeight:112},pythonAPI:{name:"read_date",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Pick a date of your preference."'},{argName:"initial_value",description:"The initial value to display to the user. Defaults to None.",typeName:"Union[datetime.date, time.struct_time, str]",typeDescription:["datetime.date","time.struct_time","str (YYYY-MM-DD)"],isKwarg:!0,default:"None",formOnly:!0},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"datetime.date",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label to display above the input"},{argName:"initialValue",typeName:"string",description:"The initial value of the input",default:null},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"When were you born?"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_date",key:"example1",code:`from abstra.forms import read_date

birthday = read_date("When were you born?")
year = birthday.year
month = birthday.month
day = birthday.day
`}]},"dropdown-input":{name:"Dropdown",description:"Allow users to select one or more options by selecting items in a dropdown",type:"dropdown-input",autoHeight:!0,events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],dashProperties:{minWidth:60,minHeight:60,initialWidth:223,initialHeight:112},pythonAPI:{name:"read_dropdown",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Select your preference"'},{argName:"options",description:"The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]",typeName:"list",typeDescription:["list[AbstraOption]"],isKwarg:!1,default:null,dashesInitialValue:`[
    {
      "label": "Option 1",
      "value": 1,
    },
    {
      "label": "Option 2",
      "value": 2,
    },
  ]`},{argName:"multiple",description:"Whether the user can select multiple options. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"initial_value",description:"The initial value to display to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None",formOnly:!0},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "Choose an option".',typeName:"str",isKwarg:!0,default:'"Choose an option"'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"str",typeDescription:"The value selected by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label to display above the input"},{argName:"initialValue",typeName:"any",description:"The initial value of the input",items:{typeName:["string","number"]},isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"options",typeName:"array",description:"The options that the user can select from",items:{typeName:["string","object"],properties:[{argName:"key",typeName:"string",description:"The key of the option on the returning object"},{argName:"value",typeName:"any",description:"The value of the option on the returning object"}]}},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input"},{argName:"multiple",typeName:"boolean",description:"Whether the input accepts multiple values or not",isOptional:!0}]},examples:[{props:{label:"Choose a color",options:["Red","Green","Blue"]},name:"Basic Example",description:"Basic use of read_dropdown",key:"example1",code:`from abstra.forms import read_dropdown

ans = read_dropdown(
    "Choose a color",
    ["Red", "Green", "Blue"],
)
# ans = "Red", "Green" or "Blue"
`},{props:{label:"Choose a color",options:["Red","Green","Blue"]},name:"Label and value dict",description:"Use a dictionary to specify the label and value of each option. The label will be displayed to the user, and the value will be returned by the widget.",key:"example2",code:`from abstra.forms import read_dropdown

ans = read_dropdown(
    "Choose a color",
    [
        {"label": "Red", "value": "R"},
        {"label": "Green", "value": "G"},
        {"label": "Blue", "value": "B"},
    ],
)
# ans = "R", "G" or "B"
`}]},"email-input":{name:"Email input",description:"Email input allow users to enter a valid email address.",type:"email-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:220,minHeight:60,initialWidth:223,initialHeight:112},pythonAPI:{name:"read_email",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Insert your email"'},{argName:"initial_value",description:'The initial value to display to the user. Defaults to "".',typeName:"str",isKwarg:!0,default:'""',formOnly:!0},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "Your email here".',typeName:"str",isKwarg:!0,default:'"Your email here"'},{argName:"invalid_email_message",typeName:"str",description:"Invalid e-mail message",isKwarg:!0,default:`"Hmm\u2026 doesn't look like an email"`},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"str",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label to display above the input"},{argName:"invalidEmailMessage",typeName:"string",description:"Invalid e-mail message",default:"Hmm\u2026 doesn't look like an email"},{argName:"initialValue",typeName:"string",description:"The initial value of the input",default:"",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input"}]},examples:[{props:{label:"What is your email?"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_email",key:"example1",code:`from abstra.forms import read_email

email = read_email("What is your email?")
`}]},"file-input":{name:"File upload area",description:"File upload adds a drop-area for users to upload one or more files",type:"file-input",autoHeight:!1,events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],dashProperties:{minWidth:150,minHeight:112,initialWidth:223,initialHeight:112},pythonAPI:{name:"read_file",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Upload a file."'},{argName:"initial_value",description:'The initial value to display to the user. Defaults to "".',typeName:"str",isKwarg:!0,default:'""',formOnly:!0},{argName:"multiple",description:"Whether the user will be allowed to upload multiple files. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"max_file_size",description:"Maximum size allowed to be transfered in total in MB.",typeName:"float",isKwarg:!0,default:"None"},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"Union[FileResponse, List[FileResponse]]",typeDescription:"A dict containing the file uploaded by the user FileResponse(file: TemporaryFile, url: str, content: bytes) or a list of FileResponses in case of multiple flag set as True. \u26A0\uFE0F The url expires after 48 hours"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label to display above the input"},{argName:"initialValue",typeName:["string","array","null"],description:"The initial value of the input",default:""},{argName:"multiple",description:"Whether the user will be allowed to upload multiple files. Defaults to False.",typeName:"boolean",default:"False"},{argName:"maxFileSize",description:"Maximum size allowed to be transfered in total in MB.",typeName:"number",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"Upload your .xlsx file"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_file",key:"example1",code:`from abstra.forms import read_file

file_response = read_file("Upload your .xlsx file")
file = file_response.file  # File object
`},{props:{label:"Upload your file"},name:"Saving file to a directory on Files storage",description:"This example shows how to save a file to a directory on Files",key:"example2",code:`from abstra.forms import read_file
import shutil, os

file_response = read_file("Upload your file")

destination_dir = "foo/bar/"
# Creates directory if it does not exist
os.makedirs(destination_dir, exist_ok=True)

# Copies file to destination directory
shutil.copy(file_response.file.name, destination_dir + file_response.name)
`}]},"image-input":{name:"Image upload",description:"Image upload adds a drop-area for users to upload one or more image files.",type:"image-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!1,dashProperties:{minWidth:150,minHeight:112,initialWidth:223,initialHeight:112},pythonAPI:{name:"read_image",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Upload"'},{argName:"initial_value",description:'The initial value to display to the user. Defaults to "".',typeName:"str",isKwarg:!0,default:'""',formOnly:!0},{argName:"multiple",description:"Whether the user will be allowed to upload multiple files. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"max_file_size",description:"Maximum size allowed to be transfered in total in MB.",typeName:"float",isKwarg:!0,default:"None"},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"Union[FileResponse, List[FileResponse]]",typeDescription:'A dict containing the image file uploaded by the user ({"file": file, "url": str, "content": bytes}) or a list of images in case of multiple flag set as True'}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label to display above the input"},{argName:"initialValue",typeName:["string","array"],description:"The initial value of the input",default:"",isOptional:!0,items:{typeName:"string"}},{argName:"maxFileSize",description:"Maximum size allowed to be transfered in total in MB.",typeName:"number",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"multiple",typeName:"boolean",description:"Whether the input accepts multiple values or not",isOptional:!0}]},examples:[{props:{label:"Upload your .png image"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_image",key:"example1",code:`from abstra.forms import read_image

file_response = read_image("Upload your .png image")
file = file_response.file  # File object
`}]},"kanban-board-input":{name:"Kanban board",description:"Kanban board",type:"kanban-board-input",dashOnly:!0,events:[],autoHeight:!1,dashProperties:{minWidth:300,minHeight:500,initialWidth:500,initialHeight:500},pythonAPI:{name:"read_kanban_board",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null},{argName:"initial_value",description:"The initial board state.",typeName:"KanbanBoard",isKwarg:!0,default:null,formOnly:!0}],returns:[{typeName:null,typeDescription:"KanbanBoard object containing all stages and cards"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:"object",description:"The initial board state."},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{initialValue:{type:"kanban-board",stages:[{type:"kanban-stage",name:"Backlog",cards:[{type:"kanban-card",name:"Add a new feature #1",description:"Add a new feature to the product",tags:["feature","enhancement"]},{type:"kanban-card",name:"Fix a bug #2",description:"Fix a bug in the product",tags:["bug"]}]},{type:"kanban-stage",name:"In progress",cards:[{type:"kanban-card",name:"Add a new feature #3",description:"Add a new feature to the product",tags:["feature","enhancement"]},{type:"kanban-card",name:"Fix a bug #4",description:"Fix a bug in the product",tags:["bug"]}]},{type:"kanban-stage",name:"Done",cards:[{type:"kanban-card",name:"Add a new feature #5",description:"Add a new feature to the product",tags:["feature","enhancement"]},{type:"kanban-card",name:"Fix a bug #6",description:"Fix a bug in the product",tags:["bug"]}]}]},label:"Spring backlog"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_kanban_board",key:"example1",code:`import abstra.forms as hf

board = {
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
}

hf.read_kanban_board(label="Product spring", initial_value=board)
`}]},"list-input":{name:"List of inputs",description:"Read a list value from the user",type:"list-input",formOnly:!0,events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:146,minHeight:32,initialWidth:146,initialHeight:32},pythonAPI:{name:"read_list",params:[{argName:"item_schema",description:"The schema for the items of the list",typeName:"Any",isKwarg:!1,default:null},{argName:"initial_value",description:"The initial value to display to the user. Defaults to [{}].",typeName:"Any",isKwarg:!0,default:"[{}]",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"min",description:"Min value accepted by the input. Defaults to None.",typeName:"float",isKwarg:!0,default:"None"},{argName:"max",description:"Max value accepted by the input. Defaults to None.",typeName:"float",isKwarg:!0,default:"None"},{argName:"add_button_text",description:'Label to be displayed on the add button. Defaults to "+".',typeName:"str",isKwarg:!0,default:'"+"'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"list",typeDescription:"The values entered by the user"}]},brokerAPI:{params:[{argName:"itemSchema",typeName:"any",description:""},{argName:"initialValue",typeName:"array",description:"",default:[{}],isOptional:!0},{argName:"min",typeName:"number",description:"The minimum number of items to allow",default:"",isOptional:!0},{argName:"max",typeName:"number",description:"The maximum number of items to allow",default:"",isOptional:!0},{argName:"addButtonText",typeName:"string",description:"The text to display on the add button",isOptional:!0},{argName:"overloadedItemSchemas",typeName:"any",description:"",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{initialValue:[{}],min:1,max:3,itemSchema:[{hint:null,initialValue:"",key:"Name",label:"Name",placeholder:"Your answer here",required:!0,type:"text-input"},{hint:null,initialValue:"",key:"Email",label:"Email",placeholder:"Your answer here",required:!0,type:"email-input"}]},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_list",key:"example1",code:`from abstra.forms import ListItemSchema, read_list

item = ListItemSchema().read("Name").read_email("Email")
ans = read_list(item, min=1, max=3)
# ans = [{'Name': '', 'Email': ''}]
`}]},"multiple-choice-input":{name:"Multiple choice",description:"Read a multiple choice value from the user",type:"multiple-choice-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:60,minHeight:70,initialWidth:223,initialHeight:152},pythonAPI:{name:"read_multiple_choice",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Select your choices"'},{argName:"options",description:"The options to display to the user, eg. ['Option 1', 'Option 2'] or [{'label': 'Option 1', 'value': '1'}, {'label': 'Option 2', 'value': '2'}]",typeName:"list",typeDescription:["list[AbstraOption]"],isKwarg:!1,default:null,dashesInitialValue:`[
    {
      "label": "Option 1",
      "value": 1,
    },
    {
      "label": "Option 2",
      "value": 2,
    },
  ]`},{argName:"multiple",description:"Whether the user can select multiple options. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"min",description:"The minimal amount of options that should be selected. Defaults to None.",typeName:"number",isKwarg:!0,default:"None"},{argName:"max",description:"The maximum amount of options that should be selected. Defaults to None.",typeName:"number",isKwarg:!0,default:"None"},{argName:"initial_value",description:"The initial value to display to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None",formOnly:!0},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:null,typeDescription:"list or any: The values/value selected by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label to display above the input"},{argName:"multiple",typeName:"boolean",description:"Whether the input should accept multiple answers",default:!1,isOptional:!0},{argName:"initialValue",typeName:"any",description:"The initial value of the input",items:{typeName:["string","number"]},default:null,isOptional:!0},{argName:"min",typeName:"number",description:"The minimum number of items to allow",default:"",isOptional:!0},{argName:"max",typeName:"number",description:"The maximum number of items to allow",default:"",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"options",typeName:"array",description:"The options that the user can select from",items:{typeName:["string","object"],properties:[{argName:"key",typeName:"string",description:"The key of the option on the returning object"},{argName:"value",typeName:"any",description:"The value of the option on the returning object"}]}}]},examples:[{props:{label:"Which programming language do you prefer?",options:["Python","JavaScript"]},name:"Basic Example",description:"Basic use of read_multiple_choice",key:"example1",code:`from abstra.forms import read_multiple_choice

ans = read_multiple_choice(
    "Which programming language do you prefer?",
    ["Python", "JavaScript"],
)
# ans = "Python" or "JavaScript"
`},{props:{label:"Which programming language do you prefer?",options:["Python","JavaScript"]},name:"Label and value dict",description:"Use a dictionary to specify the label and value of each option. The label will be displayed to the user, and the value will be returned by the widget.",key:"example2",code:`from abstra.forms import read_multiple_choice

ans = read_multiple_choice(
    "Which programming language do you prefer?",
    [{"label": " Python", "value": "py"}, {"label": "JavaScript", "value": "js"}],
)
# ans = "py" or "js"
`},{props:{label:"What features do you love?",options:["forms","jobs","hooks"],multiple:!0},name:"Checkboxes",description:"Use `multiple=true` when you want allow users to select more than one option. This will make it returns a list.",key:"example3",code:`from abstra.forms import read_multiple_choice

ans = read_multiple_choice(
    "What features do you love?", ["forms", "jobs", "hooks"], multiple=True
)
# ans = ["forms", "jobs", "hooks"]
`}]},"nps-input":{name:"NPS feedback",description:"NPS feedback allow users to rank their experience from 0 to 10.",type:"nps-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:120,minHeight:60,initialWidth:608,initialHeight:112},pythonAPI:{name:"read_nps",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Rate us!"'},{argName:"min",description:"Min value accepted by the input. Defaults to 0.",typeName:"int",isKwarg:!0,default:"0"},{argName:"max",description:"Max value accepted by the input. Defaults to 10.",typeName:"int",isKwarg:!0,default:"10"},{argName:"min_hint",description:'Text to display next to the min value. Defaults to "Not at all likely".',typeName:"str",isKwarg:!0,default:'"Not at all likely"'},{argName:"max_hint",description:'Text to display next to the max value. Defaults to "Extremely likely".',typeName:"str",isKwarg:!0,default:'"Extremely likely"'},{argName:"initial_value",description:"The initial value to display to the user. Defaults to None.",typeName:"str",typeDescription:["str (nps format)"],isKwarg:!0,default:"None",formOnly:!0},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"int",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label to display above the input"},{argName:"min",typeName:"number",description:"Minimum value of NPS",default:0,isOptional:!0},{argName:"max",typeName:"number",description:"Maximum value of NPS",default:10,isOptional:!0},{argName:"minHint",typeName:"string",description:"Hint of minimum option",default:"Not at all likely",isOptional:!0},{argName:"maxHint",typeName:"string",description:"Hint of maximum option",default:"Extremely likely",isOptional:!0},{argName:"initialValue",typeName:"number",description:"The initial value of the input",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"How likely are you to recommend Abstra Cloud?",minHint:"No way!",maxHint:"Hell yeah!"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_nps",key:"example1",code:`from abstra.forms import read_nps

ans = read_nps(
    "How likely are you to recommend Abstra Cloud?",
    min_hint="No way!",
    max_hint="Hell yeah!",
)
`}]},"number-input":{name:"Number input",description:"Number input allow users to enter numeric values.",type:"number-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:120,minHeight:60,initialWidth:223,initialHeight:112},pythonAPI:{name:"read_number",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Number"'},{argName:"initial_value",description:"The initial value to display to the user. Defaults to 0.",typeName:"str",isKwarg:!0,default:"0",formOnly:!0},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "Insert a number".',typeName:"str",isKwarg:!0,default:'"Insert a number"'},{argName:"min",description:"Min value accepted by the input. Defaults to None.",typeName:"float",isKwarg:!0,default:"None"},{argName:"max",description:"Max value accepted by the input. Defaults to None.",typeName:"float",isKwarg:!0,default:"None"},{argName:"step",description:"The value to be incremented or decremented while using the input button. Defaults to None.",typeName:"float",isKwarg:!0,default:"None"},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"float",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label to display above the input"},{argName:"initialValue",typeName:"number",description:"The initial value of the input",isOptional:!0},{argName:"min",typeName:"number",description:"The minimum value of the input",isOptional:!0},{argName:"max",typeName:"number",description:"The maximun value of the input",isOptional:!0},{argName:"step",typeName:"number",description:"The step for the input",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input",default:"Insert a number"}]},examples:[{props:{label:"How old are you?"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_number",key:"example1",code:`from abstra.forms import read_number

age = read_number("How old are you?")
`}]},"number-slider-input":{name:"Number slider",description:"Allow users to select values in a slider bar. ",type:"number-slider-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:120,minHeight:30,initialWidth:223,initialHeight:72},pythonAPI:{name:"read_number_slider",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Select a value!"'},{argName:"initial_value",description:"The initial value to display to the user. Defaults to 0.",typeName:"float",isKwarg:!0,default:"0",formOnly:!0},{argName:"min",description:"Min value accepted by the input. Defaults to None.",typeName:"float",isKwarg:!0,default:"None"},{argName:"max",description:"Max value accepted by the input. Defaults to None.",typeName:"float",isKwarg:!0,default:"None"},{argName:"step",description:"The value to be incremented or decremented while using the input button. Defaults to None.",typeName:"float",isKwarg:!0,default:"None"},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"float",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label to display above the input"},{argName:"initialValue",typeName:"number",description:"The initial value of the input",isOptional:!0},{argName:"min",typeName:"number",description:"The minimum value of the input",isOptional:!0},{argName:"max",typeName:"number",description:"The maximun value of the input",isOptional:!0},{argName:"step",typeName:"number",description:"The step for the input",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"Set volume"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_number",key:"example1",code:`from hackeforms import read_number_slider

age = read_number_slider("Set volume")
`}]},"pandas-row-selection-input":{name:"Table + selection",description:"Display a pandas dataframe as a table and allow the user to select rows",type:"pandas-row-selection-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!1,dashProperties:{minWidth:200,minHeight:250,initialWidth:500,initialHeight:500},pythonAPI:{name:"read_pandas_row_selection",params:[{argName:"df",description:"The pandas dataframe to be displayed",typeName:"PandasDataFrame",isKwarg:!1,default:null,dashesInitialValue:"pandas.Series([1, 3, 5, 4, 6, 8])"},{argName:"display_index",description:"Whether to show a index column. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!0,default:null},{argName:"multiple",description:"Whether the user will be allowed to select multiple rows. Defaults to True.",typeName:"bool",isKwarg:!0,default:"True"},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"list",typeDescription:"The list of selected rows"}]},brokerAPI:{params:[{argName:"table",typeName:"object",description:"",properties:[{argName:"data",typeName:"array",description:""},{argName:"schema",typeName:"object",description:"",properties:[{argName:"fields",typeName:"array",description:""}]}]},{argName:"displayIndex",typeName:"boolean",description:"",default:!1},{argName:"label",typeName:"string",description:"The label to display above the input",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"multiple",typeName:"boolean",description:"Whether the input accepts multiple values or not",isOptional:!0}]},examples:[{props:{table:{schema:{fields:[{name:"Country",type:"string"},{name:"Population",type:"number"}],primaryKey:["Country"]},data:[{Country:"USA",Population:"32,700,000"},{Country:"China",Population:"1,300,000,000"},{Country:"Japan",Population:"126,000,000"}]}},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_pandas",key:"example1",code:`from abstra.forms import read_pandas_row_selection
import pandas as pd

data = [
    {"Country": "USA", "Population": "32,700,000"},
    {"Country": "China", "Population": "1,300,000,000"},
    {"Country": "Japan", "Population": "126,000,000"},
]
df = pd.DataFrame(data)
read_pandas_row_selection(df)
`}]},"password-input":{name:"Password input",type:"password-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,description:"Password input allow users to enter a password before seen the content.",dashProperties:{minWidth:120,minHeight:60,initialWidth:223,initialHeight:112},pythonAPI:{name:"read_password",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Insert Your password"'},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "".',typeName:"str",isKwarg:!0,default:'""'},{argName:"lowercase_required",description:"Whether the input must have at least one lowercase character. Defaults to True.",typeName:"bool",isKwarg:!0,default:"True"},{argName:"uppercase_required",description:"Whether the input must have at least one uppercase character. Defaults to True.",typeName:"bool",isKwarg:!0,default:"True"},{argName:"special_required",description:"Whether the input must have at least one special character. Defaults to True.",typeName:"bool",isKwarg:!0,default:"True"},{argName:"digit_required",description:"Whether the input must have at least one digit. Defaults to True.",typeName:"bool",isKwarg:!0,default:"True"},{argName:"min_length",description:"Minimum length of the password. Defaults to 8.",typeName:"int",isKwarg:!0,default:"8"},{argName:"max_length",description:"Maximum length of the password. Defaults to None.",typeName:"int",isKwarg:!0,default:"None"},{argName:"size",description:"Size of the password. Defaults to None.",typeName:"int",isKwarg:!0,default:"None"},{argName:"pattern",description:"A regex pattern for the accepted password. Defaults to None.",typeName:"str",typeDescription:["str (regex)"],isKwarg:!0,default:"None"},{argName:"autocomplete",description:'The autocomplete HTML attribute. Defaults to "current-password".',typeName:"str",typeDescription:["str ('off', 'name', 'email', 'username', 'current-password', 'new-password')"],isKwarg:!0,default:'"current-password"'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"str",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"lowercaseRequired",typeName:["boolean","string"],description:"Whether the input must have at least one lowercase character",default:!0,isOptional:!0},{argName:"uppercaseRequired",typeName:["boolean","string"],description:"Whether the input must have at least one uppercase character",default:!0,isOptional:!0},{argName:"specialRequired",typeName:["boolean","string"],description:"Whether the input must have at least one special character",default:!0,isOptional:!0},{argName:"digitRequired",typeName:["boolean","string"],description:"Whether the input must have at least one digit",default:!0,isOptional:!0},{argName:"minLength",typeName:"number",description:"Minimum length of the password",default:8,isOptional:!0},{argName:"maxLength",typeName:["number","null"],description:"Maximum length of the password",default:null,isOptional:!0},{argName:"size",typeName:["number","null"],description:"Size of the password",default:null,isOptional:!0},{argName:"pattern",typeName:["string","null"],description:"A regex pattern for the accepted password",default:null,isOptional:!0},{argName:"autocomplete",typeName:"string",description:"Allow the user's password manager to automatically enter the password",default:"current-password",isOptional:!0},{argName:"secret",typeName:"boolean",description:"Read-only input that indicates whether the widget response value is secret.",default:!0,isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input"}]},examples:[{props:{label:"Insert your password below"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_password",key:"example1",code:`from abstra.forms import read_password

ans = read_password("Insert your password below")
`}]},"phone-input":{name:"Phone input",description:"Phone input allow users to enter a valid phone number.",type:"phone-input",autoHeight:!0,events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],dashProperties:{minWidth:377,minHeight:60,initialWidth:377,initialHeight:112},pythonAPI:{name:"read_phone",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Insert a phone number."'},{argName:"initial_value",description:`The initial value to display to the user. If dictionary, it contains two keys: 'country_code' (string with optional + sign or number) and 'national_number' (str or number). Ex: {'country_code': '+55', 'national_number': '21999990000'}. Defaults to "".`,typeName:"dict",typeDescription:['dict ({"country_code": str, "national_number": str})'],isKwarg:!0,default:'""',formOnly:!0},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "".',typeName:"str",isKwarg:!0,default:'""'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"PhoneResponse",typeDescription:'A dict containing the value entered by the user ({"raw": str, "masked": str})'}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:"object",description:"The initial value of the input",isOptional:!0,properties:[{argName:"countryCode",typeName:"string",description:"The phone number's country code"},{argName:"nationalNumber",typeName:"string",description:"The phone number's national number"}]},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input",default:""}]},examples:[{props:{label:"What is your phone number?"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_phone",key:"example1",code:`from abstra.forms import read_pandas_row_selection

phone = read_phone("What is your phone number?")
number = phone.raw  # eg: 5521999999999
masked = phone.masked  # eg: +55 (21) 99999-9999
`}]},"rating-input":{name:"Rating feedback",description:"Rating feedback allow users to rank their experience from 1 to 5 starts.",type:"rating-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:120,minHeight:60,initialWidth:223,initialHeight:72},pythonAPI:{name:"read_rating",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Rate us!"'},{argName:"initial_value",description:"The initial value to display to the user. Defaults to 0.",typeName:"int",isKwarg:!0,default:"0",formOnly:!0},{argName:"max",description:"Max value accepted by the input. Defaults to None.",typeName:"float",isKwarg:!0,default:"None"},{argName:"char",description:"Which char should be displayed as icon?",typeName:"str",typeDescription:["str (unicode-character)"],isKwarg:!0,default:null},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"float",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:"number",description:"The initial value of the input",default:0,isOptional:!0},{argName:"max",typeName:"number",description:"The maximum value of the input",default:5,isOptional:!0},{argName:"char",typeName:"string",description:"Which char should be displayed as icon?",default:"\u2B50",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"How much do you rate this movie?"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_rating",key:"example1",code:`from abstra.forms import read_rating

rating = read_rating("How do you rate this movie?")
`},{props:{label:"How do you evaluate your Python skills?",char:"\u{1F40D}",max:3},name:"Custom chars and number of points",description:"The following example demonstrate some of the available functionality for read_rating",key:"example2",code:`from abstra.forms import read_rating

rating = read_rating("How do you evaluate your Python skills?", char="\u{1F40D}", max=3)
`}]},"rich-text-input":{name:"Rich text input",type:"rich-text-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],description:"Rich text input allows users to type and format textual content.",autoHeight:!1,dashProperties:{minWidth:100,minHeight:100,initialWidth:200,initialHeight:150},pythonAPI:{name:"read_richtext",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Insert your rich text here!"'},{argName:"initial_value",description:'The initial value to display to the user. Defaults to "".',typeName:"str",isKwarg:!0,default:'""',formOnly:!0},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "Your rich text here".',typeName:"str",isKwarg:!0,default:'"Your rich text here"'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"str",typeDescription:"The rich text value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:"string",description:"The initial value of the input",default:"",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input",default:"Your rich text here"}]},examples:[{props:{label:"Write here your bio"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_richtext",key:"example1",code:`read_richtext("Write here your bio")
`}]},"tag-input":{name:"Tag input",type:"tag-input",autoHeight:!0,events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],description:"Read a tag value from the user",dashProperties:{minWidth:120,minHeight:60,initialWidth:223,initialHeight:112},pythonAPI:{name:"read_tag",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Insert the desired tags."'},{argName:"initial_value",description:"The initial value to display to the user. Defaults to [].",typeName:"list",typeDescription:["list[str]"],isKwarg:!0,default:"[]",formOnly:!0},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "Your answer here".',typeName:"str",isKwarg:!0,default:'"Your answer here"'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:null,typeDescription:"list(str) or list(float): The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:["array","null"],description:"The initial value of the input",default:[""],items:{typeName:["string","number"]},isOptional:!0},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input",default:"Your answer here"},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"Type and press enter to add a tag",initialValue:["Red","Green","Blue"]},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_tag",key:"example1",code:`from abstra.forms import read_tag

ans = read_tag(
    "Type and press enter to add a tag", initial_value=["Red", "Green", "Blue"]
)
# ans = ["Red", "Green" or "Blue"]\`
`}]},"text-input":{name:"Text input",description:"Text fields allow users to insert plain text.",type:"text-input",autoHeight:!0,events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],dashProperties:{minWidth:120,minHeight:60,initialWidth:223,initialHeight:112},pythonAPI:{name:"read",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Insert your text here!"'},{argName:"initial_value",description:'The initial value to display to the user. Defaults to "".',typeName:"str",isKwarg:!0,default:'""',formOnly:!0},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "Placeholder".',typeName:"str",isKwarg:!0,default:'"Placeholder"'},{argName:"mask",description:"A mask to apply to the input. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"str",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:"string",description:"The initial value of the input",default:"",isOptional:!0},{argName:"mask",typeName:"string",description:"A mask to apply to the input",default:null,isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input",default:"Placeholder"}]},examples:[{props:{label:"What is your name?"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read",key:"example1",code:`from abstra.forms import read

name = read("What is your name?")
`},{props:{label:"What is your credit card number?",mask:"0000 0000 0000 0000"},name:"Mask Example",description:"The following example shows the usage of the mask property for read widget. In the mask property, the '0' digit represents a numeric value, the 'a' digit represents an alphabetic value and other digits are recognized as part of the value",key:"example2",code:`from abstra.forms import read

read("What is your credit card number?", mask="0000 0000 0000 0000")
`}]},"textarea-input":{name:"Long text input",type:"textarea-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],description:"Long text input allow users to type longer textual content.",autoHeight:!1,dashProperties:{minWidth:100,minHeight:100,initialWidth:200,initialHeight:150},pythonAPI:{name:"read_textarea",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Insert your text here!"'},{argName:"initial_value",description:'The initial value to display to the user. Defaults to "".',typeName:"str",isKwarg:!0,default:'""',formOnly:!0},{argName:"placeholder",description:'The placeholder text to display to the user. Defaults to "Your answer here".',typeName:"str",isKwarg:!0,default:'"Your answer here"'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"str",typeDescription:"The value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:"string",description:"The initial value of the input",default:"",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"placeholder",typeName:"string",description:"The placeholder text to display in the input",default:"Your answer here"}]},examples:[{props:{label:"What kind of things are you building with Abstra Cloud?"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_textarea",key:"example1",code:`from abstra.forms import read_textarea

ans = read_textarea("What kind of things are you building with Abstra Cloud?")
`}]},"time-input":{name:"Time input",type:"time-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,description:"Read a time value from the user",dashProperties:{minWidth:120,minHeight:60,initialWidth:223,initialHeight:112},pythonAPI:{name:"read_time",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Choose the desired time."'},{argName:"initial_value",description:'The initial value to display to the user. Defaults to "".',typeName:"str",typeDescription:["str (HH:MM:SS)"],isKwarg:!0,default:'""',formOnly:!0},{argName:"format",description:'Whether the input is in the format 24hs or AM/PM. Defaults to "24hs".',typeName:"str",isKwarg:!0,default:'"24hs"'},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"datetime.time",typeDescription:"A datetime.time object representing the value entered by the user"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:"string",description:"The initial value of the input",default:null,isOptional:!0},{argName:"format",typeName:"string",description:"The format of time options. 24hs (0-23) or ampm (0-12)",default:"24hs",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"Select a time below"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_time",key:"example1",code:`from abstra.forms import read

ans = read_time("Select a time below")
# ans = 00:00:00
`}]},"toggle-input":{name:"Toggle",description:"Allow users to set between two items.",type:"toggle-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!0,dashProperties:{minWidth:120,minHeight:60,initialWidth:377,initialHeight:112},pythonAPI:{name:"read_toggle",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Click to confirm the following options"'},{argName:"on_text",description:"Text of On Toggle option",typeName:"str",isKwarg:!0,default:"Yes"},{argName:"off_text",description:"Text of Off Toggle option",typeName:"str",isKwarg:!0,default:"No"},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:null,typeDescription:"bool: if the toggle was checked"}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"onText",typeName:"string",description:"Text of On toggle option"},{argName:"offText",typeName:"string",description:"Text of Off toggle option"},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{label:"Toggle",onText:"On",offText:"Off"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_toggle",key:"example1",code:`from abstra.forms import read_toggle

ans = read_toggle("Toggle")
# ans = True or False
print(ans)
`},{props:{label:"Custom Toggle",onText:"Confirm",offText:"Cancel"},name:"Custom Example",description:"The following example demonstrate how to customize the toggle options text",key:"example2",code:`from abstra.forms import read_toggle

ans = read_toggle("Custom Toggle", on_text="Confirm", off_text="Cancel")
# ans = True or False
`}]},"video-input":{name:"Video upload",description:"Video upload adds a drop-area for users to upload one or more video files.",type:"video-input",events:[{key:"change",description:"Function or expression to be run when the input value changes",payloadSchema:[]}],autoHeight:!1,dashProperties:{minWidth:150,minHeight:112,initialWidth:223,initialHeight:112},pythonAPI:{name:"read_video",params:[{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Upload your video"'},{argName:"initial_value",description:'The initial value to display to the user. Defaults to "".',typeName:"Union[str, io.IOBase]",typeDescription:["io.IOBase","str (filepath)","str (URL)"],isKwarg:!0,default:'""',formOnly:!0},{argName:"multiple",description:"Whether the user will be allowed to upload multiple files. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"max_file_size",description:"Maximum size allowed to be transfered in total in MB.",typeName:"float",isKwarg:!0,default:"None"},{argName:"disabled",description:"whether the input is disabled. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"required",description:'Whether the input is required or not eg. "this field is required". Defaults to True.',typeName:"Union[bool, str]",typeDescription:["bool","str"],isKwarg:!0,default:"True",formOnly:!0},{argName:"hint",description:"A tooltip displayed to the user. Defaults to None.",typeName:"str",isKwarg:!0,default:"None"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[{typeName:"Union[FileResponse, List[FileResponse]]",typeDescription:'A dict containing the video uploaded by the user ({"file": file, "url": str, "content": bytes}) or a list of videos in case of multiple flag set as True'}]},brokerAPI:{params:[{argName:"label",typeName:"string",description:"The label of the input"},{argName:"initialValue",typeName:["string","array"],description:"The initial value of the input",items:{typeName:"string"},default:null,isOptional:!0},{argName:"maxFileSize",description:"Maximum size allowed to be transfered in total in MB.",typeName:"number",isOptional:!0},{argName:"key",typeName:"string",description:"The key of the input on the returning object"},{argName:"disabled",typeName:"boolean",description:"Whether the input is disabled"},{argName:"hint",typeName:["string","null"],description:"message describing the input",default:null,isOptional:!0},{argName:"end_program",typeName:["boolean","null"],description:"End program after this widget is shown",default:!1,isOptional:!0},{argName:"required",typeName:["boolean","string"],description:"Whether the input is required or not",default:!0,isOptional:!0,formOnly:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0},{argName:"multiple",typeName:"boolean",description:"Whether the input accepts multiple values or not",isOptional:!0}]},examples:[{props:{label:"Upload your video"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_video",key:"example1",code:`from abstra.forms import read_video

file_response = read_video("Upload your video")
file = file_response.file  # File object
`}]},"file-output":{name:"Download file",description:"Show a button for the user to download a file.",type:"file-output",autoHeight:!0,events:[],dashProperties:{minWidth:65,minHeight:30,initialWidth:223,initialHeight:72},pythonAPI:{name:"display_file",params:[{argName:"file",description:"The file to download",typeName:"Union[str, io.IOBase]",typeDescription:["io.IOBase","str (filepath)","str (URL)"],isKwarg:!1,default:null,dashesInitialValue:'"https://gist.github.com/armgilles/194bcff35001e7eb53a2a8b441e8b2c6/archive/92200bc0a673d5ce2110aaad4544ed6c4010f687.zip"'},{argName:"download_text",description:'The text to display on the button that will download the file. Defaults to "Download here".',typeName:"str",isKwarg:!0,default:'"Download"'},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[]},brokerAPI:{params:[{argName:"fileUrl",typeName:"string",description:""},{argName:"downloadText",typeName:"string",default:"Download",description:""},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{fileUrl:"https://placekitten.com/200/300",downloadText:"Click here to reveal the secret"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for display_file",key:"example1",code:`from abstra.forms import display_file

display_file(
    "https://placekitten.com/200/300", download_text="Click here to reveal the secret"
)
`}]},"html-output":{name:"HTML",description:"Embed HTML to the app.",type:"html-output",events:[],autoHeight:!0,dashProperties:{minWidth:65,minHeight:30,initialWidth:146,initialHeight:32},pythonAPI:{name:"display_html",params:[{argName:"html",description:"The html snippet to display to the user",typeName:"str",typeDescription:["str (html snippet)"],isKwarg:!1,default:null,dashesInitialValue:'"<div>Hello World</div>"'},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[]},brokerAPI:{params:[{argName:"html",typeName:"string",description:""},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{html:'<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>'},name:"Basic Example",description:"The following example demonstrate some of the available functionality for display_html",key:"example1",code:`from abstra.forms import display_html

display_html(
    '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>'
)
`}]},"iframe-output":{name:"iframe",description:"Embed content using iframe.",type:"iframe-output",events:[],autoHeight:!1,dashProperties:{minWidth:377,minHeight:632,initialWidth:377,initialHeight:632},pythonAPI:{name:"display_iframe",params:[{argName:"url_or_html",description:"The link to the document or the own document to display to the user",typeName:"str",typeDescription:["str (URL)","str (html snippet)"],isKwarg:!1,default:null,dashesInitialValue:'"<div>Hello World</div>"'},{argName:"width",description:'The width of the iframe. Defaults to "800".',typeName:"int",typeDescription:["int (pixels)"],isKwarg:!0,default:'"800"'},{argName:"height",description:'The height of the iframe. Defaults to "600".',typeName:"int",typeDescription:["int (pixels)"],isKwarg:!0,default:'"600"'},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[]},brokerAPI:{params:[{argName:"url",typeName:"string",description:""},{argName:"width",typeName:"string",description:"",isOptional:!0},{argName:"height",typeName:"string",description:"",isOptional:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{url:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319",width:"300",height:"250"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for display_iframe",key:"example1",code:`from abstra.forms import display_iframe

display_iframe(
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319",
    width="300",
    height="250",
)
`}]},"image-output":{name:"Show image",description:"Show an image to the user",type:"image-output",events:[],autoHeight:!1,dashProperties:{minWidth:60,minHeight:60,initialWidth:223,initialHeight:312},pythonAPI:{name:"display_image",params:[{argName:"image",description:"The image to display to the user",typeName:"Union[str, io.IOBase]",typeDescription:["io.IOBase","str (filepath)","str (URL)"],isKwarg:!1,default:null,dashesInitialValue:'"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/396px-Mona_Lisa.jpg"'},{argName:"subtitle",description:'The subtitle of the image. Defaults to "".',typeName:"str",isKwarg:!0,default:'""'},{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!0,default:null},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[]},brokerAPI:{params:[{argName:"imageUrl",typeName:"string",description:""},{argName:"subtitle",typeName:"string",default:"",description:"",isOptional:!0},{argName:"label",typeName:"string",description:"The label to display above the image",isOptional:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{imageUrl:"https://placekitten.com/200/200",subtitle:"Meooow"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for display_image",key:"example1",code:`from abstra.forms import display_image

display_image("https://placekitten.com/200/200", subtitle="Meooow")
`}]},"latex-output":{name:"Show Latex formula",description:"Show an Latex formula to the user",type:"latex-output",events:[],autoHeight:!0,dashProperties:{minWidth:60,minHeight:30,initialWidth:146,initialHeight:32},pythonAPI:{name:"display_latex",params:[{argName:"text",description:"The latex formula to display to the user",typeName:"str",typeDescription:["str (latex snippet)"],isKwarg:!1,default:null,dashesInitialValue:'"\\(x^2 + y^2 = z^2\\)"'},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[]},brokerAPI:{params:[{argName:"text",typeName:"string",description:"The latex formula"},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{text:"\\(ax^2 + bx + c = 0\\)"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for display_latex",key:"example1",code:`from abstra.forms import display_latex

display_latex("\\(ax^2 + bx + c = 0\\)")
`},{props:{text:"When \\(a \\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for display_latex",key:"example2",code:`from abstra.forms import display_latex

display_latex(
    """When \\(a \\\\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are
$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"""
)
`}]},"link-output":{name:"Link (text URL)",description:"Allow users to see and open content from text links.",type:"link-output",events:[],autoHeight:!0,dashProperties:{minWidth:60,minHeight:30,initialWidth:146,initialHeight:72},pythonAPI:{name:"display_link",params:[{argName:"link_url",description:"The url of the link to display to the user",typeName:"str",typeDescription:["str (URL)"],isKwarg:!1,default:null,dashesInitialValue:'"https://www.abstracloud.com"'},{argName:"link_text",description:'The text to display on the link. Defaults to "Click here".',typeName:"str",isKwarg:!0,default:'"Click here"'},{argName:"same_tab",description:"Whether to open the link in the same tab or not. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[]},brokerAPI:{params:[{argName:"linkText",typeName:"string",description:""},{argName:"linkUrl",typeName:"string",description:""},{argName:"sameTab",typeName:"boolean",description:"",default:!1,isOptional:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{linkUrl:"https://console.abstracloud.com",linkText:"Abstra Cloud Homepage"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for display_link",key:"example1",code:`from abstra.forms import display_link

display_link("https://console.abstracloud.com", link_text="Abstra Cloud Homepage")
`}]},"markdown-output":{name:"Markdown",description:"Show a formatted text to the user",type:"markdown-output",autoHeight:!0,events:[],dashProperties:{minWidth:60,minHeight:30,initialWidth:146,initialHeight:72},pythonAPI:{name:"display_markdown",params:[{argName:"text",description:"The formatted text to display to the user",typeName:"str",typeDescription:["str (markdown snippet)"],isKwarg:!1,default:null,dashesInitialValue:'"### Hello World"'},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[]},brokerAPI:{params:[{argName:"text",typeName:"string",description:""},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{text:`
## Let's see some examples 8-)

* 1^th^ H~2~0 

- [ ] Task

* ==Mark==

* [Link](https://www.abstracloud.com/)`},name:"Basic Example",description:"The following example demonstrate some of the available functionality for display_markdown",key:"example1",code:`from abstra.forms import display_markdown


display_markdown(
    """
## Let's see some examples 8-)

* 1^th^ H~2~0



- [ ] Task

* ==Mark==

* [Link](https://www.abstracloud.com/)"""
)
`}]},"pandas-output":{name:"Table",description:"Display a pandas dataframe to the user",type:"pandas-output",autoHeight:!1,events:[{key:"row-click",description:"When clicking on a row",payloadSchema:[{key:"row",typeName:"pandas.Series",description:"The row that was clicked"}]},{key:"row-edit",description:"Function or expression to be run when the user edits a cell",payloadSchema:[]},{key:"action-click",description:"Function or expression to be run when the input value changes",payloadSchema:[{key:"action",description:"The action that was clicked",typeName:"str"}]}],dashProperties:{minWidth:200,minHeight:250,initialWidth:500,initialHeight:500},pythonAPI:{name:"display_pandas",params:[{argName:"df",description:"The dataframe to display to the user",typeName:"PandasDataFrame",isKwarg:!1,default:null,dashesInitialValue:"pandas.Series([1, 3, 5, 4, 6, 8])"},{argName:"display_index",description:"Whether to show a index column. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!0,default:null},{argName:"editable",description:"Whether the user will be allowed to edit the cells. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False"},{argName:"actions",description:"Actions that can be triggered by table rows",typeName:"list",typeDescription:["list[str]"],isKwarg:!0,default:"[]"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[]},brokerAPI:{params:[{argName:"table",typeName:"object",description:"",properties:[{argName:"data",typeName:"array",description:""},{argName:"schema",typeName:"object",description:"",properties:[{argName:"fields",typeName:"array",description:""}]}]},{argName:"displayIndex",typeName:"boolean",description:"",default:!1},{argName:"label",typeName:"string",description:"The label to display above the dataframe",isOptional:!0},{argName:"editable",typeName:"boolean",description:"Whether the user will be allowed to edit the cells",default:!1},{argName:"actions",typeName:"array",description:"Actions that can be triggered by table rows",isOptional:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{table:{schema:{fields:[{name:"Country",type:"string"},{name:"Population",type:"number"}],primaryKey:["Country"]},data:[{Country:"USA",Population:"32,700,000"},{Country:"China",Population:"1,300,000,000"},{Country:"Japan",Population:"126,000,000"}]}},name:"Basic Example",description:"The following example demonstrate some of the available functionality for display_pandas",key:"example1",code:`from abstra.forms import display_pandas

display_pandas(df)
`}]},"plotly-output":{name:"Plotly graph",description:"Displays a Plotly figure to the user",type:"plotly-output",events:[],autoHeight:!1,dashProperties:{minWidth:245,minHeight:112,initialWidth:245,initialHeight:112},pythonAPI:{name:"display_plotly",params:[{argName:"fig",description:"The figure to display to the user",typeName:"PlotlyFigure",isKwarg:!1,default:null,dashesInitialValue:'plotly_express.bar(x=["a", "b", "c"], y=[1, 3, 2])'},{argName:"label",description:"The label to display to the user",typeName:"str",isKwarg:!0,default:null},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[]},brokerAPI:{params:[{argName:"figure",typeName:"any",description:""},{argName:"label",typeName:"string",description:"The label to display above the figure",isOptional:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{figure:{data:[{type:"bar",x:[1,2,3],y:[1,3,2]}],layout:{title:{text:"Bar chart example"}}}},name:"Basic Example",description:"The following example demonstrate some of the available functionality for display_plotly",key:"example1",code:`from abstra.forms import display_plotly
import plotly.graph_objects as go

figure = go.Figure(
    data=[go.Bar(x=[1, 2, 3], y=[1, 3, 2])],
    layout=go.Layout(title=go.layout.Title(text="Bar chart example")),
)

display_plotly(figure)
`}]},"progress-output":{name:"Progress bar",description:"Show a progress bar when loading the app.",type:"progress-output",events:[],autoHeight:!0,dashProperties:{minWidth:60,minHeight:30,initialWidth:300,initialHeight:32},pythonAPI:{name:"display_progress",params:[{argName:"current",description:"The progress being made. Defaults to 50.",typeName:"float",isKwarg:!1,default:"50",dashesInitialValue:"50"},{argName:"total",description:"Total progress. Defaults to 100.",typeName:"float",isKwarg:!1,default:"100",dashesInitialValue:"100"},{argName:"text",description:'The text displayed with this progress step. Defaults to "".',typeName:"str",isKwarg:!0,default:'""'},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[]},brokerAPI:{params:[{argName:"current",typeName:"number",description:"",default:50},{argName:"total",typeName:"number",description:"",default:100},{argName:"text",typeName:"string",description:"",default:"",isOptional:!0},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{current:50,total:100},name:"Default behavior",description:"This is what happens when there is no parameter passed",key:"example1",code:`from abstra.forms import display_progress

display_progress()
`},{props:{current:8,total:10,text:"Almost there!"},name:"Custom fields",description:"You can customize the current and total number of steps. Also the message of each step",key:"example2",code:`from time import sleep

for i in range(10):
    display_progress(i, 10, text="Computing values")

    sleep(1)  # Do some computation
`}]},"text-output":{name:"Text display",description:'"Text display" adds textual information into the app.',type:"text-output",autoHeight:!0,events:[],dashProperties:{minWidth:60,minHeight:30,initialWidth:223,initialHeight:112},pythonAPI:{name:"display",params:[{argName:"text",description:"The text to display to the user",typeName:"str",isKwarg:!1,default:null,dashesInitialValue:'"Your text here!"'},{argName:"size",description:"The size of the text: 'small', 'medium', 'large'",typeName:"str",isKwarg:!0,default:"medium"},{argName:"end_program",description:"Whether the program should end after the widget is shown. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"full_width",description:"Whether the input should use full screen width. Defaults to False.",typeName:"bool",isKwarg:!0,default:"False",formOnly:!0},{argName:"button_text",description:"What text to display on the button when the widget is not part of a Page. Defaults to 'Next'.",typeName:"str",isKwarg:!0,default:"Next",formOnly:!0}],returns:[]},brokerAPI:{params:[{argName:"text",description:"",typeName:"string"},{argName:"size",description:"",typeName:"string"},{argName:"columns",typeName:"number",description:"number of columns this input will take",isOptional:!0,formOnly:!0},{argName:"fullWidth",typeName:"boolean",description:"Whether the widget should take up the full width of the page",isOptional:!0,formOnly:!0}]},examples:[{props:{text:"Hello world!"},name:"Basic Example",description:"The following example demonstrate some of the available functionality for read_display",key:"example1",code:`from abstra.forms import display

display("Hello world!")
`}]}},v={redirect:{type:"redirect",description:"Redirect the user to another page",pythonAPI:{name:"redirect",params:[{argName:"url",typeName:"str",description:"The URL to redirect to",isKwarg:!1,default:null}],returns:[]},brokerAPI:{params:[{argName:"url",typeName:"string",description:"The URL to redirect to"}]}},"execute-js":{type:"execute-js",description:"Execute JavaScript code on the browser",pythonAPI:{name:"execute_js",params:[{argName:"code",typeName:"str",description:"Execute JavaScript code on the browser",isKwarg:!1,default:null},{argName:"context",typeName:"dict",description:"A dictionary of variables to be passed to the code.",isKwarg:!1,default:"{}"}],returns:[{typeDescription:"the result of the code execution",typeName:"Any"}]},brokerAPI:{params:[{argName:"code",typeName:"string",description:"Execute JavaScript code on the browser"},{argName:"context",typeName:"object",description:"A dictionary of variables to be passed to the code."}]}}},T={alert:`---
sidebar_position: 5
---
# Alert

Use the \`alert(message, severity)\` function to show a alert message to the user displayed as a toast.

\`\`\`python
from abstra.dashes import alert

alert("Welcome to Abstra Cloud!")

alert("Something went wrong", severity="error")

alert("Something went wrong", severity="warning")
\`\`\``,authentication:`---
sidebar_position: 1
---

# Authentication

Verifies user's identity. Since it works passwordless, you don't need additional configuration..

\`\`\`python
auth_info = get_user()
email = auth_info.email

if not '@abstracloud.com' in email:
	display('\u{1F9D9} You shall not pass!')
	exit()
\`\`\`

`,delete:`# Delete

Delete rows from a table.

## Function definition

\`\`\`python
def delete(
    self,
    where: str,
    columns: typing.Optional[typing.List[str]] = None,
    params: typing.Dict[str, typing.Any] = {},
) -> typing.List["SqliteRow"]:
\`\`\`

### Parameters

| Parameter | Description |
| --- | --- |
| \`where\` | Where clause |
| \`columns\` | Columns to delete |
| \`params\` | Parameters for the 'where' clause |

### Return value

| Return value | Description |
| --- | --- |
| \`List[SqliteRow]\` | Returns the deleted rows as a list of \`SqliteRow\` objects. |

## Examples

### Delete with where

Delete rows from a table with a where clause.

\`\`\`python
from abstra.tables import get_table

table = get_table("users")

table.delete(where="age < 18")
\`\`\`

### Delete with parametrized where

Delete rows from a table with a where clause that contains placeholders.

\`\`\`python
from abstra.tables import get_table

table = get_table("users")

table.delete(where="age < :age", params={"age": 18})
\`\`\``,deploy:`# Deploy

To deploy a project for the first time, follow these steps:

- Login to our Cloud at [https://cloud.abstra.io](https://cloud.abstra).
- Navigate to your project. Create an API Key on the \`API Keys\` tab on the sidebar.
- Return to the local editor and press \`Login to deploy\` on the nav bar. Enter your API key.
- Press the new \`Deploy\` button on the nav bar to deploy your project.

:::tip

After this first time, just press \`Deploy\` on the editor to create a new build, as you'll already be logged in.

:::

### Builds
Your deploy will appear on Abstra Cloud as a new build. Monitor its status on the \`Builds\` sidebar tab.
`,execute_js:`---
sidebar_position: 4
---

# Execute JavaScript

Execute JavaScript function can be used to execute arbitrary JavaScript code on the browser.

\`\`\`python
from abstra.forms import execute_js
execute_js("console.log('Hello world!')")
\`\`\`

## Context

The context parameter can be used to pass variables to the JavaScript code.

\`\`\`python
a = 2 + 3
execute_js("console.log('Result: ' + $context.result)", context={"result": a})
# Open your console to check the result!
\`\`\`

## Returning values

The return value of the JavaScript function can be retrieved using the return_value parameter.

\`\`\`python
referrer = execute_js("document.referrer")

display(f"I see you are coming from {referrer}")
\`\`\`




`,getting_started:`---
sidebar_position: 1
---

# Getting started

\u{1F9E9} Dashes are web apps built with a drag-and-drop UI editor and Python code for back-end logic.

\u{1F6AB} With Dashes you skip the need to use any GUI framework, HTML, CSS or JS.

\u{1F9F5}\xA0Connect various Dashes to build multi-page apps or a navigation system.

Building a Dash involves 3 parts:

- [The Layout editor](#layout-editor), to create and edit your app's UI and functionality.
- [Your Python script](#python-script), a local Python file that will run at the start of every app session. It will set any variables, functions and other logic needed for your app's execution.
- [The Settings tab](#settings-tab), to edit app settings.

![](./dashes_no_shadow.png)

## Layout editor

### Canvas
The canvas is where you'll create the look of your app by placing widgets.

It has a 12-column grid. Resize components and play around with custom placing. 

Responsivity is automatic - widgets will stack vertically on mobile.

![](./canvas.gif)

### Shortcuts
- Duplicate: \`Alt\`/\`\u2325\` + drag
- Zoom:
    - Pinch in/out
    - \`Ctrl\`/\`\u2318\` + scroll
- Pan:
    - Two-finger scroll
    - Mouse wheel (+shift for vertical)
    - Middle click + drag

### Interact Toggle
By default, your editor will open in \`edit\` mode. To test your app, switch to \`interact\` mode, where elements are clickable and simulate their behavior in production.

![](./toggle.gif)

### Widgets Toolbar
The widgets toolbar is where all widgets from our library are available for use. You can add them to your app by dragging and dropping them onto the canvas.

![](./widget_toolbar.gif)

### Widget Inspector
When you select a widget, you can change its behavior in the widget inspector. Widgets configurations can be set in two types:

![](./widget_inspector.png)

#### Properties
These are standard properties that alter the widget's behavior. Properties can be visual like an image URL (on images) and text label (on inputs), and they can also be functional like a DataFrame (on pandas tables)/max chars (on text inputs).

Each property config is a [Python expression](https://docs.python.org/3/reference/expressions.html) and must return a value according to its accepted property types.

#### Events
Events are a special type of configuration. A widget can handle multiple events, such as a click, a row selection or a card selection.

For each widget, you can set what will happen for each event by filling out an event config: a Python code snippet that will be executed with each event trigger.

:::info

Remember the code scope: each property and event config will be evaluated within the additional context of your main Python script. There, you can define functions and variables to use within these fields.

:::

##### Event Payloads
Events provide valuable data which you may need to use, such as which card your user has selected.

These pieces of information are available in the event's payload. Access it in the code by passing the variable \`__event__\` as a parameter in a function.

:::tip

Try adding \`print(__event__)\` to an event config to check their payloads at any time.

:::

## Python script
In the Python script is where you define all the background logic you need for your app to function. It's a regular Python file - import and use **any lib** you already like to create powerful functionality for your app.

Examples: make calculations, API requests, plot graphs and charts, etc.

Here is where you also define variables and functions to access on your widgets.

Code it in any IDE you prefer and save to your project's folder.

You can link it to your Dash in the Settings tab.

## Settings tab
This is where you can edit other attributes of your dash not directly related to widgets.

![](./settings_tab.png)

### Name
This is the title of your app. It will be displayed to your users.

### Path
This is how your dash will be available to your users. Each app URL is \`https://[your domain].abstra.app/[path]\`.

### Code
This is the code linked to your Dash. Every function and variable in this code will be accessible on your widgets properties/events.
`,hooks:`# Hooks

Hooks are scripts which are triggered by HTTP requests. When your hook is active, any HTTP request sent to the hook endpoint will trigger the execution of the script.

## Request object

\`\`\`python
from abstra.hooks import get_request

body, query, headers = get_request()
\`\`\`

### Function definition

\`\`\`python
def get_request(local_file=None):
\`\`\`

#### Parameters
| Keyword Arguments    |                                            |
| -------------------- | ------------------------------------------ |
| local_file  (string) | Fallback file location for testing locally |

#### Returns

| Returns                 |                                              |
| ----------------------- | -------------------------------------------- |
| (parsed json or string) | Body parsed according to content-type header |
| (dict)                  | Query parameters                             |
| (dict)                  | Headers                                      |

## Response object

To send the response you have to use on of our builtin utils functions \`send_response\` or \`send_json\`:

\`\`\`python
from abstra.hooks import send_response, send_json

send_response(body="plain text body")
send_json(data={'ok': True}, status_code=200, headers={"ABSTRA": "CLOUD"})
\`\`\`

### \`send_response\`

\`\`\`python
def send_response(body=None, status_code=200, headers=None, local_file=None):
\`\`\`

| Keyword Arguments    | Description                                |
| -------------------- | ------------------------------------------ |
| body (string)        | Plain text response body                   |
| status_code (number) | Http response status code                  |
| headers (dict)       | Headers to be sent back                    |
| local_file (string)  | Fallback file location for testing locally |

### \`send_json\`

\`\`\`python
def send_json(data=None, status_code=200, headers=None, local_file=None):
\`\`\`

| Keyword Arguments             | Description                                                              |
| ----------------------------- | ------------------------------------------------------------------------ |
| data (any serializable value) | Data to be serialized and sent back                                      |
| status_code (number)          | Http response status code                                                |
| headers (dict)                | Headers to be sent back, in addition to \`content-type: application/json\` |
| local_file (string)           | Fallback file location for testing locally                               |

`,insert:`# Insert

Insert value into a table

## Function definition

\`\`\`python
def insert(
    self,
    values: typing.Union[
        typing.Dict[str, typing.Any], typing.List[typing.Dict[str, typing.Any]]
    ] = {},
    columns: typing.Optional[typing.List[str]] = None,
) -> typing.Union[typing.List["SqliteRow"], "SqliteRow"]:
\`\`\`

### Parameters

| Parameter | Description |
| --- | --- |
| \`values\` | Values to insert. This can be either a single dict or a list of dicts |
| \`columns\` | Columns to insert the values into |

### Return value

| Return value | Description |
| --- | --- |
| \`List[SqliteRow]\` or \`SqliteRow\` | A list of the inserted rows represented as \`SqliteRow\` objects if \`values\` is a dict, otherwise a single \`SqliteRow\` object |

## Example

### Insert single row
\`\`\`python
from abstra.tables import get_table

table = get_table("users")

table.insert(values={"name": "Bob", "age": 30})
\`\`\`

### Insert multiple rows
\`\`\`python
from abstra.tables import get_table

table = get_table("users")

rows = [{"name": "Bob", "age": 30}, {"name": "Alice", "age": 32}]
table.insert(values=rows)
\`\`\``,intro:`---
sidebar_position: 1
slug: /
---
# Welcome to Abstra

\u{1F44B}\u{1F3FC} Abstra is an open-source Python app and dashboard builder.

\u{1F9E9}\xA0It simplifies building UI for Python processes in multiple ways, from a drag-and-drop editor to dynamic forms created with a UI-generating library.

\u2601\uFE0F\xA0Our community Cloud offers 1-click deploy, scalable hosting, cron jobs, webhooks and more. We also offer premium features for enterprise teams, such as built-in access control.

\u{1F9E0} Building from scratch is expensive and time-consuming, while no-code platforms end up in lock-ins and logic limitation. Instead, Abstra combines the best of both worlds: build robust applications in a fraction of the time.

## Installation

Make sure you have Python 3.7 or higher installed to use Abstra.

Open your terminal and type:

\`\`\`bash
$ pip install abstra
\`\`\`

:::info

If you already had our previous abstra lib installed, use \`pip install abstra \u2014-upgrade\` instead.

:::

## Creating or running a project

To open the editor, use the \`abstra serve\` command. If you're starting a new project, point to an empty folder.

\`\`\`bash
$ abstra serve ./your-project-directory
\`\`\`

After server started, open \`http://localhost:3000/_editor\` to start editing in your browser.
`,join:`# Join

Join rows from two tables.

## Function definition

\`\`\`python
def join(
    self,
    table,
    on: str,
    params: typing.Dict = {},
) -> "SqliteJoin":
\`\`\`

### Parameters

| Parameter | Description |
| --- | --- |
| \`table\` | The table to be joined with the current table. This can be the actual \`SqLiteTable\` object or a string that represents the name of the table |
| \`on\` | The ON clause which specifies how the tables are related. |
| \`params\` | Parameters for the 'on' clause |

### Return value

| Return value | Description |
| --- | --- |
| \`SqliteJoin\` | An instance of SqliteJoin class, which represents a JOIN operation. |

## Example

This example joins 'consoles' and 'games' tables on the 'id' field of consoles and the 'console_id' field of games. It then selects from the resulting join table where the columns are the 'name' fields of the two original tables.

\`\`\`python
from abstra.tables import get_table

consoles = get_table("consoles")
games = get_table("games")

rows = consoles.join(games, on="games.console_id = consoles.id").select(
            columns=["consoles.name", "games.name"]
        )

for row in rows:
    console_name, game_name = row["consoles.name"], row["games.name"]
    print(f"Console: {console_name}, Game: {game_name}")
\`\`\``,page:`---
sidebar_position: 2
---

import { WidgetPreview } from '@site/src/components/WidgetPreview';

# Page

Page class can be used to combine multiple widgets into a single page. A dictionary is returned with entries containing values from input widgets. These entries are labelled with the widget message if no key is provided.

## Basic use

Basic use of Page class. You can customize the submit button text passing a string to the run method. The default value is 'Next'.

\`\`\`python
contact = (
  Page()
    .read("Name")
    .read_email("Email")
    .run("Send")
)

email = contact["Email"]
name = contact["Name"]

# Alternative way to use values
Name, Email = contact.values()
\`\`\`

<WidgetPreview widgets={[{type: "text-input", props: { label: "Name" }}, {type: "email-input", props: { label: "Email" }}]} buttons={["Next"]} />

## Custom Keys

You can provide custom keys for each widget. These keys will be used to label the entries in the dictionary returned by the run method.

\`\`\`python
contact = (
  Page()
    .read("What is your name?", key="name")
    .read_email("What is your email?", key="email")
    .run()
)

email = contact["email"]
name = contact["name"]
\`\`\`

<WidgetPreview widgets={[{type: "text-input", props: { label: "What is your name?" }}, {type: "email-input", props: { label: "What is your email?" }}]} buttons={["Next"]}/>


## Custom buttons (actions)

You can provide custom buttons (actions) to the run method. The default value is 'Next'.

\`\`\`python
contact = (
  Page()
    .read("Contact's name", key="name")
    .read_email("Contact's email", key="email")
    .run(actions=["Add more", "Finish"])
)

if contact.action == "Finish":
    # Do something
else:
    # Do something else
\`\`\`

## Reactive pages

You can create pages with dinamic content using the reactive widget.
You simply create a function that receives a partial result from the page and returns a new Page, with the widgets you wish to be rendered, which can be both inputs and outputs.

\`\`\`python
def render(partial):
    if partial["age"] and partial["age"] > 60:
        return Page().display("You are eligible for the senior discount")


contact = (
  Page()
    .read("What is you name?", key="name")
    .read_number("What is your age?", key="age")
    .reactive(render)
    .run()
)
\`\`\`

## Page validation

You can pass a validate function to the run method in your page in order to validate it.
This function receives a partial result and can return either a boolean (True for valid and False for invalid) or a string with an error message to show the user.

\`\`\`python
def validate(partial):
    if partial["email"] is None:
        return False
    if partial["email"].endswith("@abstracloud.com"):
        return True    
    return "You must be an Abstra member to use this form"

Page().read_email("Email", key="email").run(validate=validate)
\`\`\`

## Steps

You can allowing back and forth navigation by using our run_steps function.

\`\`\`python
from abstra.forms import run_steps, Page

page1 = (
  Page()
    .display("Bio information")
    .read("Name", key="name")
    .read("Email", key="email")
)

page2 = (
    Page()
      .display(" information information")
      .read("Address", key="address")
      .read("City", key="city")
      .read("State", key="state")
      .read("Zipcode", key="zipcode")
)

page3 = (
  Page()
    .display("Payment information")
    .read("Credit card number", key="cc_number")
    .read("Expiration date", key="cc_expiration")
    .read("Security code", key="cc_security_code")
)

steps_response = run_steps([page1, page2, page3])

page1_response = steps_response[0] # Use the first page response
city = steps_response["city"] # Directly access a page item by key
\`\`\`
<WidgetPreview widgets={[{type: "text-input", props: { label: "What is your name?" }}, {type: "email-input", props: { label: "What is your email?" }}]} buttons={["Next"]} showSteps={true}/>


`,query_params:`---
sidebar_position: 3
---

# Query Params

Use the \`get_query_params()\` function to retrieve query params on the loaded URL.

\`\`\`python
from abstra.dashes import get_query_params

query_params = get_query_params()

# If URL is "https://abstradash.abstra.run/user?user_id=123"
# get_query_params() will return {"user_id": "123"}
\`\`\`

`,redirect:`---
sidebar_position: 4
---

# Redirect

Use the \`redirect(url, params)\` function redirect a user to another URL either external or internal.

## Basic example

\`\`\`python
from abstra.dashes import redirect

def open_abstra_cloud():
  redirect("https://abstra.io")
\`\`\`

## Using query params

You can also pass query params to the redirect function:

\`\`\`python
from abstra.dashes import redirect

def open_user_page(user_id):
  redirect("https://home.abstra.app/user", {"user_id": 123})
  # Redirects to https://home.abstra.app/user?user=123
\`\`\``,row:`# SqliteRow

The \`SqliteRow\` class is designed to interact with rows in an SQLite table.

Each \`SqliteRow\` instance represents a single row from an SQLite table. The instance contains column-value pairs corresponding to the specific row and provides methods for modifying this data.

## Properties

- \`Table\`: The table from which the row was selected.
- \`Row Data\`: The column-value pairs extracted from the row.

## Methods

### \`delete()\`

Deletes the row from the table.

**Example:**

\`\`\`python
from abstra.tables import get_table

users = get_table("users")
user = users.select_one(where="email = :email", params={"email": "uzumaki.naruto@konoha.jp"})
user.delete()
\`\`\`

In the example above, the row representing the user with the email "uzumaki.naruto@konoha.jp" is deleted from the 'users' table.

### \`save()\`

Saves any changes made to the \`SqliteRow\` instance back to the table.

**Example:**

\`\`\`python
from abstra.tables import get_table

users = get_table("users")
user = users.select_one(where="email = :email", params={"email": "haruno.sakura@konoha.jp"})

user["name"] = "Sakura"
user.save()
\`\`\`

In this example, the user's name of the entry with the email "haruno.sakura@konoha.jp" is changed to 'Sakura'. The \`save()\` method is then called to persist this change to the database.

## Usage

Instances of the \`SqliteRow\` class are primarily returned by select queries on \`SqliteTable\` instances. The \`SqliteRow\` instances allow individual rows to be manipulated and changes to be saved back to the database.`,select:`# Select

Select rows from a table.

## Function definition

\`\`\`python
def select(
    self,
    where: typing.Optional[str] = None,
    columns: typing.Optional[typing.List[str]] = None,
    params: typing.Dict[str, typing.Any] = {},
) -> typing.List["SqliteRow"]:
\`\`\`

### Parameters

| Parameter | Description | 
| --- | --- |
| \`where\` | Expression for filtering your data |
| \`columns\` | Columns to select |
| \`params\` | Parameters for substituting placeholders in the where clause |

### Return value

| Return value | Description |
| --- | --- |
| \`List[SqliteRow]\` | A list of selected rows. Each row is represented as an instance of the \`SqliteRow\` class. |

## Examples

### Select all

Select all rows from a table.

\`\`\`python
from abstra.tables import get_table

table = get_table("users")

rows = table.select()
\`\`\`

### Select with where

Select rows from a table with a where clause.

\`\`\`python

from abstra.tables import get_table

table = get_table("users")

rows = table.select(where="age > 18")
\`\`\`

### Select with where and params

Select rows from a table with a where clause and use the \`params\` argument to substitute placeholders in the where clause.

\`\`\`python

from abstra.tables import get_table

table = get_table("users")

rows = table.select(where="age > :age", params={"age": 18})

\`\`\``,select_one:`# Select One

Select a single row from a table. 

## Function definition

\`\`\`python
def select_one(
    self,
    where: typing.Optional[str] = None,
    columns: typing.Optional[typing.List[str]] = None,
    params: typing.Dict[str, typing.Any] = {},
) -> "SqliteRow":
\`\`\`

### Parameters

| Parameter | Description |
| --- | --- |
| \`where\` | Optional parameter used for setting a conditional clause that selectively limits the rows returned from the query |
| \`columns\` | Optional parameter which defines the columns the query will select |
| \`params\` | Parameters for the 'where' clause, used for substituting placeholders in the 'where' clause |

### Return value

| Return value | Description |
| --- | --- |
| \`SqliteRow\` | Returns the selected row as a \`SqliteRow\` object |

## Example

This example selects a single user from a users table where their age is above 18.

\`\`\`python
from abstra.tables import get_table

users = get_table("users")

user = users.select_one(where="age > ?", params={18})

print(f"Name: {user.name}, Age: {user.age}")
\`\`\``,"smart-console":`# Smart Console

![](./smart_console_toggle.png)

Smart Console is not just your ordinary terminal emulator.

Here, you can monitor your script variables in real-time and get assistance from our AI assistant.

You can switch between debug mode and AI assistant by clicking on the icon in the bottom-right corner.

## AI Assistant

Our AI Assistant functions like a regular LLM chat, but it passes the context of your code and error messages to the prompt. This way, you don't need to manually copy and paste snippets.

This AI technology can help you identify bugs, enhance your code quality, or even suggest performance optimizations to your code.

AI Assistant is only available for Abstra Cloud account holders.

## Debug Mode

In this mode, you can evaluate Python expressions. All expressions will be assessed against your code, which aids in inspecting variables and identifying bugs.`,update:`# Update

Update rows in a table.

## Function definition

\`\`\`python
def update(
    self,
    where: str,
    set: typing.Dict[str, typing.Any] = {},
    columns: typing.Optional[typing.List[str]] = None,
    params: typing.Dict[str, typing.Any] = {},
) -> typing.List["SqliteRow"]:
\`\`\`

### Parameters

| Parameter | Description |
| --- | --- |
| \`where\` | Where clause, for determining which rows to update |
| \`set\` | Set clause, specifies the new values of the specified columns |
| \`columns\` | Columns to update |
| \`params\` | A dictionary of placeholders in the 'where' clause |

### Return value

| Return value | Description |
| --- | --- |
| \`List[SqliteRow]\` | Returns the updated rows as a list of \`SqliteRow\` objects |

## Examples

### Update with where

Update rows from a table with a where clause.

\`\`\`python
from abstra.tables import get_table

table = get_table("users")

rows = table.update(where="age > 18", set={"age": 18})
\`\`\`

### Update with parametrized where

Update rows from a table with a where clause that contains placeholders.

\`\`\`python
from abstra.tables import get_table

table = get_table("users")

rows = table.update(where="age > :age", set={"age": 18}, params={"age": 18})
\`\`\``,url_params:`---
sidebar_position: 3
---

# URL Params

URL parameters can be accessed through the \`url_params\` variable

\`\`\`python
# If form is accessed using \`abstra.run/form_id?param1=foo&param2=bar\`

print(url_params['param1']) # foo
print(url_params['param2']) # bar
print(url_params) # {'param1': 'foo', 'param2': 'bar'}
\`\`\`

`},w={widgets:k,actions:v,documentation:T},h=e=>"type"in e&&e.type in w.widgets,D=e=>"type"in e&&e.type in w.widgets,A=e=>d.exports.upperFirst(d.exports.camelCase(e)),q=(e,t)=>d.exports.pickBy(e,a=>{const i=t[a.type].pythonAPI.params,r=d.exports.pickBy(a.props,(n,s)=>{const l=i.find(p=>p.argName===s),u=n.trim();return!(!l||u.length===0)});return!i.some(n=>{if(!n.isKwarg&&!(n.argName in r)&&!n.default)return!0})});function S(e,t){const a=(i,r)=>{var o;return((o=i.toLocaleLowerCase().match(new RegExp(r.toLocaleLowerCase().replace(/(\\)/g,"\\\\"),"g")))!=null?o:[]).length/i.length};return t.reduce((i,r)=>i+10*a(e.type,r)+5*a(e.name,r)+1*a(e.description,r),0)}function H(e,t){return e.length!==t.length?!1:e.every(a=>t.includes(a))}const c=(e,t)=>{for(const a in t){if(a===e)return t[a];const i=t[a];if(h(i))continue;const r=c(e,i.slot);if(r)return r}return null},x=(e,t)=>{for(const a in t){const i=t[a];if(h(i))continue;if(a===e)return i;const r=x(e,i.slot);if(r)return r}return null},E=(e,t)=>c(e,m(t)),R=(e,t)=>{const a=c(e,m(t));if(!a)throw new Error("widget not found");return a.id=e,a},j=(e,t)=>x(e,m(t)),m=e=>e.version==="0.1"?e.widgets:e.slot,C=e=>e.version==="0.1"?"/widgets":"/slot",U=e=>{const t=e.slot,a=[],i=r=>{for(const o in r){const n=r[o];D(n)?a.push(o):i(n.slot)}};return i(t),a},_="#414a58",W="DM Sans",K="Inter";function B(e){var t,a,i,r,o,n,s,l,u,p,g,f,y,N,b;return{id:e.id,path:e.path,theme:(t=e.workspace.theme)!=null?t:"#FFFFFF",brandName:(a=e.workspace.brand_name)!=null?a:null,title:e.title,isLocal:(i=e.is_local)!=null?i:!1,startMessage:(r=e.start_message)!=null?r:null,endMessage:(o=e.end_message)!=null?o:null,errorMessage:(n=e.error_message)!=null?n:null,timeoutMessage:(s=e.timeout_message)!=null?s:null,startButtonText:(l=e.start_button_text)!=null?l:null,restartButtonText:(u=e.restart_button_text)!=null?u:null,logoUrl:e.workspace.logo_url,mainColor:(p=e.workspace.main_color)!=null?p:_,fontFamily:(g=e.workspace.font_family)!=null?g:W,autoStart:(f=e.auto_start)!=null?f:!1,allowRestart:e.allow_restart,welcomeTitle:(y=e.welcome_title)!=null?y:null,runtimeType:"form",sidebar:(b=(N=e.workspace)==null?void 0:N.sidebar)!=null?b:[]}}function L(e){var t,a,i,r,o,n,s;return{id:e.path,path:e.path,title:e.title,theme:(t=e.workspace.theme)!=null?t:"#FFFFFF",brandName:e.workspace.brand_name,logoUrl:e.workspace.logo_url,mainColor:(a=e.workspace.main_color)!=null?a:_,fontFamily:(i=e.workspace.font_family)!=null?i:K,layout:e.layout,workspaceName:(o=(r=e.workspace)==null?void 0:r.name)!=null?o:"Untitled Workspace",runtimeType:"dash",sidebar:(s=(n=e.workspace)==null?void 0:n.sidebar)!=null?s:[]}}const V=e=>({...e,slot:O(m(e))}),F=e=>{var t,a;return{...e,id:(t=e.id)!=null?t:"",variable:(a=e.variable)!=null?a:null,props:Object.keys(e.props),events:Object.keys(e.events),position:{rowStart:e.rowStart,rowEnd:e.rowEnd,colStart:e.colStart,colEnd:e.colEnd}}},P=e=>({...e,slot:O(e.slot),props:Object.keys(e.props),position:{row:e.row,height:e.height,order:e.order}}),O=e=>{if(!e)throw new Error("Slot is undefined");return Object.keys(e).reduce((t,a)=>{const i=e[a];return h(i)?{...t,[a]:F(i)}:{...t,[a]:P(i)}},{})};export{C as a,R as b,j as c,V as d,E as e,c as f,m as g,A as h,h as i,H as j,q as k,U as l,D as m,L as n,B as r,S as s,k as w};
//# sourceMappingURL=runnerData.81abf845.js.map
