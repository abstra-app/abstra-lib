from typing import Optional

from abstra_internals.credentials import set_credentials
from abstra_internals.repositories.project.project import ProjectRepository


def start(credential_token: Optional[str] = None):
    if ProjectRepository.exists():
        print("This directory already has an Abstra project.")
        print("\nRun 'abstra editor' in the directory to start the editor.")
        return

    ProjectRepository.generate_getting_started_project()

    if credential_token:
        set_credentials(credential_token)

    print("Project initialized successfully.")
    print("\nRun 'abstra editor' in the directory to start the editor.")
