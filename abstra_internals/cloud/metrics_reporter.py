"""
Metrics Reporter for Worker Executor Pool

Periodically sends executor pool metrics to a push-gateway sidecar container.
The sidecar exposes these metrics in Prometheus format for KEDA to scrape.

This is opt-in: only runs if WORKER_METRICS_ENDPOINT environment variable is set.
"""

import json
import os
import threading
from typing import TYPE_CHECKING, Callable, Optional
from urllib.error import URLError
from urllib.request import Request, urlopen

from abstra_internals.logger import AbstraLogger

if TYPE_CHECKING:
    from abstra_internals.controllers.execution.executor_pool import ExecutorPool


class MetricsReporter:
    """Reports executor pool metrics to a push-gateway endpoint."""

    def __init__(
        self,
        get_stats: Callable[[], dict],
        endpoint: str,
        interval_seconds: float = 15.0,
    ):
        self.get_stats = get_stats
        self.endpoint = endpoint
        self.interval_seconds = interval_seconds
        self._stop_event = threading.Event()
        self._thread: Optional[threading.Thread] = None

    def start(self) -> None:
        """Start the metrics reporting thread."""
        if self._thread is not None:
            return

        self._thread = threading.Thread(
            target=self._report_loop,
            name="MetricsReporter",
            daemon=True,
        )
        self._thread.start()
        AbstraLogger.info(
            f"[MetricsReporter] Started reporting to {self.endpoint} "
            f"every {self.interval_seconds}s"
        )

    def stop(self) -> None:
        """Stop the metrics reporting thread."""
        self._stop_event.set()
        if self._thread is not None:
            self._thread.join(timeout=5.0)
            self._thread = None
        AbstraLogger.info("[MetricsReporter] Stopped")

    def _report_loop(self) -> None:
        """Main loop that periodically reports metrics."""
        while not self._stop_event.is_set():
            try:
                self._send_metrics()
            except Exception as e:
                AbstraLogger.warning(f"[MetricsReporter] Failed to send metrics: {e}")

            # Wait for next interval or until stopped
            self._stop_event.wait(self.interval_seconds)

    def _send_metrics(self) -> None:
        """Send current metrics to the push-gateway."""
        stats = self.get_stats()

        payload = json.dumps(
            {
                "total_executors": stats.get("total_executors", 0),
                "idle": stats.get("idle", 0),
                "busy": stats.get("busy", 0),
                "warming_up": stats.get("warming_up", 0),
                "dead": stats.get("dead", 0),
                "form_capable_idle": stats.get("form_capable_idle", 0),
                "active_executions": stats.get("active_executions", 0),
            }
        ).encode("utf-8")

        request = Request(
            self.endpoint,
            data=payload,
            headers={"Content-Type": "application/json"},
            method="POST",
        )

        try:
            with urlopen(request, timeout=5.0) as response:
                if response.status != 200:
                    AbstraLogger.warning(
                        f"[MetricsReporter] Unexpected status: {response.status}"
                    )
        except URLError as e:
            # Don't spam logs if sidecar is not available
            AbstraLogger.debug(f"[MetricsReporter] POST failed: {e}")


def create_metrics_reporter(
    executor_pool: "ExecutorPool",
) -> Optional[MetricsReporter]:
    """
    Create a MetricsReporter if WORKER_METRICS_ENDPOINT is configured.

    Returns None if the environment variable is not set.
    """
    endpoint = os.environ.get("WORKER_METRICS_ENDPOINT")
    if not endpoint:
        AbstraLogger.debug(
            "[MetricsReporter] WORKER_METRICS_ENDPOINT not set, skipping metrics"
        )
        return None

    return MetricsReporter(
        get_stats=executor_pool.get_stats,
        endpoint=endpoint,
        interval_seconds=15.0,
    )
