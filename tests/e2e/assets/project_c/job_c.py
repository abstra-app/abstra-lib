from abstra.tasks import get_tasks

tasks = get_tasks()
for task in tasks:
    task.complete()
