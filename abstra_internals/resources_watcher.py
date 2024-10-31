import time

from abstra_internals.controllers.main import MainController
from abstra_internals.services.resources import ResourcesRepository


def resources_polling_loop(*, controller: MainController):
    ResourcesRepository.clear_resources()
    while True:
        try:
            ResourcesRepository.save_usage()
            time.sleep(2)
        except Exception:
            pass
