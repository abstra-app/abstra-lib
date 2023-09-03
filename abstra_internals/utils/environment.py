import os


def is_preview():
    return os.environ.get("ABSTRA_ENVIRONMENT") != "production"
