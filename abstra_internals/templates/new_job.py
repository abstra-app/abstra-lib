from abstra.tasks import get_tasks, send_task

# Abstra Jobs are a simple way to schedule Python recurring tasks
# Setup the Schedule at the "Settings" tab

print("🕒 Job is running...")

# You can get all the pending tasks, waiting to be processes in this stage
tasks = get_tasks()

processed_tasks = 0
for task in tasks:
    # Do any processing here
    processed_tasks += 1
    task.complete()

send_task("finished", {"proccessed_tasks": processed_tasks})
