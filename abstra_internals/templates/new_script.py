from abstra.tasks import get_trigger_task, send_task

# You can get the task that triggered this script execution
task = get_trigger_task()

task.complete()

# And also send tasks to the next stages of your workflow
send_task("confirmation", {"message": "Your request was approved"})
