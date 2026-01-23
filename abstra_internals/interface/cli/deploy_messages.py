from typing import Optional

from colorama import Fore, Style

CLOUD_CONSOLE_URL = "https://cloud.abstra.io"


class DeployMessages:
    @staticmethod
    def start(method: str = "upload"):
        method_label = "git push" if method == "git" else "upload"
        print(
            Fore.CYAN
            + Style.BRIGHT
            + f"\n[Deploy] Starting deploy via {method_label}...\n"
            + Style.RESET_ALL
        )

    @staticmethod
    def checking_linters():
        print(Fore.CYAN + "[Deploy] Checking for linter issues..." + Style.RESET_ALL)

    @staticmethod
    def authenticating():
        print(Fore.CYAN + "[Deploy] Verifying credentials..." + Style.RESET_ALL)

    @staticmethod
    def packaging():
        print(Fore.CYAN + "[Deploy] Packaging project files..." + Style.RESET_ALL)

    @staticmethod
    def uploading():
        print(
            Fore.CYAN + "[Deploy] Uploading files to Abstra Cloud..." + Style.RESET_ALL
        )

    @staticmethod
    def finalizing():
        print(Fore.CYAN + "[Deploy] Finalizing deploy..." + Style.RESET_ALL)

    @staticmethod
    def pushing(branch: str):
        print(
            Fore.CYAN
            + f"[Deploy] Pushing changes to branch '{branch}'..."
            + Style.RESET_ALL
        )

    @staticmethod
    def success(project_id: Optional[str] = None):
        if project_id:
            builds_url = f"{CLOUD_CONSOLE_URL}/projects/{project_id}/builds"
            print(
                Fore.GREEN
                + Style.BRIGHT
                + "\n[Deploy] Files uploaded successfully! "
                + Style.RESET_ALL
                + f"Track your build progress at: {Fore.GREEN}{builds_url}{Style.RESET_ALL}\n"
            )
        else:
            print(
                Fore.GREEN
                + Style.BRIGHT
                + "\n[Deploy] Files uploaded successfully! "
                + Style.RESET_ALL
                + f"Track your build progress at: {Fore.GREEN}{CLOUD_CONSOLE_URL}{Style.RESET_ALL}\n"
            )

    @staticmethod
    def error(message: str):
        print(
            Fore.RED + Style.BRIGHT + f"\n[Deploy] Error: {message}\n" + Style.RESET_ALL
        )

    @staticmethod
    def no_credentials():
        print(
            Fore.RED
            + Style.BRIGHT
            + "\n[Deploy] No credentials found. "
            + Style.RESET_ALL
            + "Please run 'abstra editor' and login via the web interface.\n"
        )

    @staticmethod
    def validation_error(message: str):
        print(
            Fore.RED
            + Style.BRIGHT
            + "\n[Deploy] Package validation failed: "
            + Style.RESET_ALL
            + f"{message}\n"
        )
