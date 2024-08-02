import random
import string

import abstra.messages as am
import abstra.workflows as aw

# Stage Title: Send Welcome Email
# Retrieve data from the previous stage
name = aw.get_data("name")
email = aw.get_data("email")
department = aw.get_data("department")

# Generate a unique password
password = "".join(random.choices(string.ascii_letters + string.digits, k=12))

# Create a personalized welcome message
welcome_message = f"""
Hi {name},

Welcome to the {department} department! We're excited to have you on board.

Here are your login credentials for the employee portal:
- **Username**: {email}
- **Password**: {password}

You can access the employee portal using the following link:
[Employee Portal](https://employee-portal.example.com)

Please change your password upon first login.

Best regards,
The HR Team
"""

# Send the welcome email
am.send_email(to=str(email), title="Welcome to the Company!", message=welcome_message)

# Store the password in the current thread (optional)
aw.set_data("password", password)
