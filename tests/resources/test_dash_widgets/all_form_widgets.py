from abstra.forms import *
import pandas as pd
import plotly.express as px

df = pd.DataFrame({"col1": [1, 2, 3], "col2": [4, 5, 6], "col3": [7, 8, 9]})
fig = px.line(df, x="col1", y="col2")

Page().read("read").read_email("read_email").read_cnpj("read_cnpj").read_cpf(
    "read_cpf"
).read_date("read_date").read_time("read_time").read_phone("read_phone").read_password(
    "read_password"
).read_textarea(
    "read_textarea"
).read_code(
    "read_code"
).read_richtext(
    "read_richtext"
).display(
    "display"
).display_html(
    "display_html"
).display_markdown(
    "display_markdown"
).display_latex(
    "display_latex"
).display_pandas(
    df
).read_pandas_row_selection(
    df
).display_plotly(
    fig
).run()
