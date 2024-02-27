import abstra.workflows as aw

# Abstra Jobs are a simple way to schedule Python recurring tasks
# Setup the Schedule at the "Settings" tab

print("🕒 Job is running...")

# You can store data in the current thread,
# so it will be available in the next stages
aw.set_data("job_output", "Some data from the job!")
