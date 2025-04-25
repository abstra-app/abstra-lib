"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from datetime import datetime, timedelta

from abstra.forms import AppointmentInput, run


def generate_slots():
    """
    Generate a list of time slots for the next 14 days, excluding weekends and lunch breaks.
    Each slot is 45 minutes long, starting from 10:00 to 18:00 with a 15-minute interval.
    """
    slots = []
    current_date = datetime(
        2025, 1, 1
    )  # Replace with datetime.now() for real-time usage
    max_date = current_date + timedelta(days=14)
    while current_date < max_date:
        if current_date.weekday() < 5:
            for hour in range(10, 18):
                if hour == 12:
                    continue
                begin = current_date.replace(hour=hour, minute=0)
                end = begin + timedelta(minutes=45)
                slots.append((begin, end))
        current_date += timedelta(days=1)

    return [{"begin": begin, "end": end} for begin, end in slots]


# Create a page with the widget
example_page = [
    AppointmentInput(
        "Welcome to Abstra, please select a demo slot", slots=generate_slots()
    ),
]

# Run the form
result = run([example_page])

# Print the result
print(result)
