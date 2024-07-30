from colorama import Fore, Style

from abstra_internals.interface.cli.tables import ABSTRA_RESTORE_TABLES_FILE


def dump_message(num_tables: int):
    if num_tables == 0:
        print(
            Fore.RED
            + Style.BRIGHT
            + "\nNo tables found in your project.\n"
            + Style.RESET_ALL
        )
    else:
        tables = "table" if num_tables == 1 else "tables"
        print(
            Fore.MAGENTA
            + Style.BRIGHT
            + "\n\nSuccess: "
            + Style.RESET_ALL
            + Style.BRIGHT
            + f"{num_tables} {tables} were dumped at {ABSTRA_RESTORE_TABLES_FILE}\n\n"
            + Style.RESET_ALL
        )


def restore_message(num_tables: int):
    tables = "table" if num_tables == 1 else "tables"
    print(
        Fore.MAGENTA
        + Style.BRIGHT
        + "\n\nSuccess: "
        + Style.RESET_ALL
        + Style.BRIGHT
        + f"{num_tables} {tables} were restored in your project's cloud.\n\n"
        + Style.RESET_ALL
    )


def generic_error():
    print(
        Fore.RED
        + Style.BRIGHT
        + "\n\nError: "
        + Style.RESET_ALL
        + Style.BRIGHT
        + "There was an internal error. You may already have some of the tables.\n\n"
        + Style.RESET_ALL
    )


def file_not_found_error_message():
    print(
        Fore.RED
        + Style.BRIGHT
        + "\n\nError: "
        + Style.RESET_ALL
        + Style.BRIGHT
        + f"The file {ABSTRA_RESTORE_TABLES_FILE} does not exist.\n\n"
        + Style.RESET_ALL
    )


def bad_json_error_message():
    print(
        Fore.RED
        + Style.BRIGHT
        + "\n\nError: "
        + Style.RESET_ALL
        + Style.BRIGHT
        + f"The content in file {ABSTRA_RESTORE_TABLES_FILE} is not in correct JSON format.\n\n"
        + Style.RESET_ALL
    )


def zod_error_message():
    print(
        Fore.RED
        + Style.BRIGHT
        + "\n\nError: "
        + Style.RESET_ALL
        + Style.BRIGHT
        + f"The file {ABSTRA_RESTORE_TABLES_FILE} is not formatted correctly. \n\n"
        + Style.RESET_ALL
    )
