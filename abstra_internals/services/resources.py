import os
import threading
from typing import List

import psutil

from abstra_internals.settings import Settings
from abstra_internals.utils.dot_abstra import RESOURCES_FILE


class ResourcesRepository:
    lock = threading.RLock()

    @staticmethod
    def get_file():
        file = Settings.root_path / RESOURCES_FILE
        file.touch(exist_ok=True)
        return file

    @classmethod
    def clear_resources(cls):
        with cls.lock:
            with cls.get_file().open("w") as f:
                f.write("")

    @classmethod
    def save_usage(cls):
        with cls.lock:
            p = psutil.Process(os.getpid())

            mem = int(p.memory_info().rss / 1024 / 1024)
            cpu = p.cpu_percent()

            with cls.get_file().open("a") as f:
                f.write(f"{mem} {cpu}\n")

    @classmethod
    def get_all_usage(cls):
        with cls.lock:
            with cls.get_file().open("r") as f:
                mems: List[int] = []
                cpus: List[float] = []

                for line in f.readlines():
                    try:
                        mem, cpu = line.split()
                        mems.append(int(mem))
                        cpus.append(float(cpu))
                    except Exception:
                        pass

                return mems, cpus
