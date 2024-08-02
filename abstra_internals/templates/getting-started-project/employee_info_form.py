import abstra.forms as af
import abstra.workflows as aw

# Stage Title: Employee Information Collection
# Collect employee information
name = af.read("👋 Welcome! What is your full name?")
email = af.read_email("📧 Please enter your company email:")
department = af.read_dropdown(
    "🏢 Select your department:",
    options=["Product", "Engineering", "Marketing", "Data", "Operations"],
)

# Store data in the current thread
aw.set_data("name", name)
aw.set_data("email", email)
aw.set_data("department", department)

# Display a welcome message
af.display(f"🎉 Welcome to the team, {name}!")
