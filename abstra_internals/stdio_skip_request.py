ESCAPE_STRING = "//ABSTRA_DISABLE_LOG_REQUEST//"


def safe_print(text: str):
    print(f"{ESCAPE_STRING}{text}")
