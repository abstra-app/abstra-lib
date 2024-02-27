import abstra.workflows as aw

# Use Scripts to run Python code after any workflow Stage

# You can store data in the current thread,
# so it will be available in the next stages
aw.set_data("script_output", "Some data from the script!")
