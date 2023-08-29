from .api import run, TablesExecutionError  # exported

## use pypika? ref: https://pypika.readthedocs.io/en/latest/2_tutorial.html
# q = Query.from_('customers').select('id', 'fname', 'lname', 'phone')
# result = run(q.get_sql())
