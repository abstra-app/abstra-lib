import time

from abstra_internals.services.resources import ResourcesRepository


def resources_polling_loop():
    ResourcesRepository.clear_resources()
    while True:
        try:
            ResourcesRepository.save_usage()
            time.sleep(2)
        except Exception:
            pass
