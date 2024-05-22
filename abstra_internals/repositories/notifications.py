import abc
from typing import List

import requests

from abstra_internals.environment import SIDECAR_HEADERS, SIDECAR_URL


class NotificationRepository(abc.ABC):
    def notify_waiting_thread(
        self,
        recipient_emails: List[str],
        stage_name: str,
        stage_run_id: str,
        stage_path: str,
        stage_run_title: str,
    ):
        raise NotImplementedError()

    def notify_message(self, recipient_emails: List[str], message: str, title: str):
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
        stage_run_title: str,
    ):
        url = self.base_url + "/thread-waiting"
        requests.post(
            url,
            json={
                "recipientEmails": recipient_emails,
                "stageName": stage_name,
                "stageRunId": stage_run_id,
                "stagePath": stage_path,
                "stageRunTitle": stage_run_title,
            },
            headers=SIDECAR_HEADERS,
        )

    def notify_message(self, recipient_emails: List[str], message: str, title: str):
        url = self.base_url + "/message"
        requests.post(
            url,
            json={
                "recipientEmails": recipient_emails,
                "message": message,
                "title": title,
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
        stage_run_title: str,
    ):
        print(
            f"[NOTIFICATION_TEST] Sending notification to emails '{recipient_emails}' for stage '{stage_name}'"
        )
        print(
            f"[NOTIFICATION_TEST] Thread URL: '/{stage_path}/?abstra-run-id={stage_run_id}'"
        )

    def notify_message(self, recipient_emails: List[str], message: str, title: str):
        print(f"[NOTIFICATION_TEST] Sending message to emails '{recipient_emails}'")
        print(f"[NOTIFICATION_TEST] Title: '{title}'")
        print(f"[NOTIFICATION_TEST] Message: '{message}'")


def notification_repository_factory() -> NotificationRepository:
    if SIDECAR_URL is None:
        return LocalNotificationRepository()
    else:
        return ProductionNotificationRepository(SIDECAR_URL)
