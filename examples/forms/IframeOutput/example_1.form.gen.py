"""
name: Basic Usage
description: This example runs a form with a single page containing the widget
"""

from abstra.forms import IframeOutput, run

url = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"

# Create a page with the widget
example_page = [IframeOutput(url, width="300", height="250")]

# Run the form
result = run([example_page])

# Print the result
print(result)
