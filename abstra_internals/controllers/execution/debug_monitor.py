import os
import time
from threading import Thread
from typing import TYPE_CHECKING, Dict, List, Optional

import psutil

from abstra_internals.environment import ABSTRA_DEBUG_MODE_INTERVAL
from abstra_internals.logger import AbstraLogger

if TYPE_CHECKING:
    from abstra_internals.controllers.execution.executor_pool import ExecutorPool


def format_bytes(bytes_val: float) -> str:
    for unit in ["B", "KB", "MB", "GB"]:
        if abs(bytes_val) < 1024.0:
            return f"{bytes_val:.1f}{unit}"
        bytes_val /= 1024.0
    return f"{bytes_val:.1f}TB"


class DebugMonitor:
    def __init__(
        self,
        executor_pool: "ExecutorPool",
        interval_seconds: Optional[int] = None,
    ):
        self.executor_pool = executor_pool
        self.interval_seconds = interval_seconds or ABSTRA_DEBUG_MODE_INTERVAL
        self._shutdown_requested = False
        self._monitor_thread: Optional[Thread] = None
        self._main_process = psutil.Process(os.getpid())

    def start(self) -> None:
        AbstraLogger.info(
            f"[DebugMonitor] Starting debug monitor (interval={self.interval_seconds}s)"
        )
        self._monitor_thread = Thread(target=self._monitor_loop, daemon=True)
        self._monitor_thread.start()

    def stop(self) -> None:
        self._shutdown_requested = True
        if self._monitor_thread and self._monitor_thread.is_alive():
            self._monitor_thread.join(timeout=2.0)
        AbstraLogger.info("[DebugMonitor] Debug monitor stopped")

    def _monitor_loop(self) -> None:
        while not self._shutdown_requested:
            try:
                self._print_stats()
            except Exception as e:
                AbstraLogger.error(f"[DebugMonitor] Error collecting stats: {e}")

            for _ in range(self.interval_seconds * 10):
                if self._shutdown_requested:
                    break
                time.sleep(0.1)

    def _print_stats(self) -> None:
        pool_stats = self.executor_pool.get_stats()

        process_stats = self._get_process_stats()

        AbstraLogger.warning(
            f"[DebugMonitor:Pool] "
            f"Executors: total={pool_stats['total_executors']}, "
            f"idle={pool_stats['idle']}, "
            f"busy={pool_stats['busy']}, "
            f"warming_up={pool_stats['warming_up']}, "
            f"dead={pool_stats['dead']}"
        )

        AbstraLogger.warning(
            f"[DebugMonitor:Pool] "
            f"Active executions={pool_stats['active_executions']}, "
            f"Completed={pool_stats.get('total_completed', 0)}, "
            f"Failed={pool_stats.get('total_failed', 0)}, "
            f"Success rate={pool_stats.get('success_rate_percent', 0)}%"
        )

        if pool_stats.get("avg_warmup_ms", 0) > 0:
            AbstraLogger.warning(
                f"[DebugMonitor:Pool] "
                f"Avg warmup={pool_stats.get('avg_warmup_ms', 0):.0f}ms, "
                f"Avg exec={pool_stats.get('avg_execution_time_ms', 0):.0f}ms, "
                f"Avg wait={pool_stats.get('avg_wait_time_ms', 0):.0f}ms"
            )

        main_stats = process_stats.get("main", {})
        AbstraLogger.warning(
            f"[DebugMonitor:Process] Main (PID {main_stats.get('pid', 'N/A')}): "
            f"CPU={main_stats.get('cpu_percent', 0):.1f}%, "
            f"Memory={main_stats.get('memory_formatted', 'N/A')}, "
            f"Threads={main_stats.get('num_threads', 0)}"
        )

        executor_processes = process_stats.get("executors", [])
        if executor_processes:
            total_cpu = sum(p.get("cpu_percent", 0) for p in executor_processes)
            total_memory = sum(p.get("memory_rss", 0) for p in executor_processes)
            alive_count = len(executor_processes)

            AbstraLogger.warning(
                f"[DebugMonitor:Process] Executors ({alive_count} alive): "
                f"Total CPU={total_cpu:.1f}%, "
                f"Total Memory={format_bytes(total_memory)}"
            )

            if len(executor_processes) <= 4:
                for proc in executor_processes:
                    status = proc.get("status", "unknown")
                    AbstraLogger.warning(
                        f"[DebugMonitor:Process]   PID {proc.get('pid', 'N/A')} [{status}]: "
                        f"CPU={proc.get('cpu_percent', 0):.1f}%, "
                        f"Memory={proc.get('memory_formatted', 'N/A')}"
                    )

    def _get_process_stats(self) -> Dict:
        stats: Dict = {"main": {}, "executors": []}

        try:
            main_cpu = self._main_process.cpu_percent(interval=0.1)
            main_mem = self._main_process.memory_info()
            stats["main"] = {
                "pid": self._main_process.pid,
                "cpu_percent": main_cpu,
                "memory_rss": main_mem.rss,
                "memory_formatted": format_bytes(main_mem.rss),
                "num_threads": self._main_process.num_threads(),
            }
        except (psutil.NoSuchProcess, psutil.AccessDenied) as e:
            AbstraLogger.info(f"[DebugMonitor] Cannot access main process: {e}")

        executor_info = self._get_executor_info()
        for info in executor_info:
            pid = info["pid"]
            try:
                proc = psutil.Process(pid)
                cpu = proc.cpu_percent(interval=0.1)
                mem = proc.memory_info()
                stats["executors"].append(
                    {
                        "pid": pid,
                        "status": info["status"],
                        "cpu_percent": cpu,
                        "memory_rss": mem.rss,
                        "memory_formatted": format_bytes(mem.rss),
                    }
                )
            except (psutil.NoSuchProcess, psutil.AccessDenied):
                AbstraLogger.info(
                    f"[DebugMonitor] Cannot access executor process PID {pid}"
                )
                pass

        return stats

    def _get_executor_info(self) -> List[Dict]:
        info = []
        with self.executor_pool.lock:
            for executor in self.executor_pool.executors.values():
                if executor.pid and executor.is_alive():
                    info.append(
                        {
                            "pid": executor.pid,
                            "status": executor.status.value,
                        }
                    )
        return info
