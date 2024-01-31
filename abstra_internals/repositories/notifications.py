from typing import List
import abc
import requests
from ..utils.environment import SIDECAR_URL, SIDECAR_HEADERS, PROJECT_ID


class NotificationRepository(abc.ABC):
    def notify_waiting_thread(
        self,
        recipient_emails: List[str],
        stage_name: str,
        stage_run_id: str,
        stage_path: str,
    ):
        raise NotImplementedError()


class ProductionNotificationRepository(NotificationRepository):
    base_url: str

    def __init__(self, sidecar_url: str):
        self.base_url = sidecar_url + "/notifications"

    def notify_waiting_thread(
        self,
        recipient_emails: List[str],
        stage_name: str,
        stage_run_id: str,
        stage_path: str,
    ):
        url = self.base_url + "/notify"
        requests.post(
            url,
            json={
                "recipientEmails": recipient_emails,
                "stageName": stage_name,
                "stageRunId": stage_run_id,
                "stagePath": stage_path,
            },
            headers=SIDECAR_HEADERS,
        )


class LocalNotificationRepository(NotificationRepository):
    def notify_waiting_thread(
        self,
        recipient_emails: List[str],
        stage_name: str,
        stage_run_id: str,
        stage_path: str,
    ):
        print(
            f"[NOTIFICATION_TEST] Sending notification to emails '{recipient_emails}' for stage '{stage_name}'"
        )
        print(
            f"[NOTIFICATION_TEST] Thread URL: '/{stage_path}/?abstra-run-id={stage_run_id}'"
        )


def notification_repository_factory() -> NotificationRepository:
    if SIDECAR_URL is None:
        return LocalNotificationRepository()
    else:
        return ProductionNotificationRepository(SIDECAR_URL)
