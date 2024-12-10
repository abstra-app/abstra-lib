from abstra.tasks import send_task

send_task(
    "task_job_a",
    {
        "key_a": "job a set this",
    },
)
