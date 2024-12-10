from abstra.tasks import get_trigger_task, send_task

t = get_trigger_task()

send_task(
    "task_script_b",
    {
        **t.get_payload(),
        "key_b": "script b set this",
    },
)
