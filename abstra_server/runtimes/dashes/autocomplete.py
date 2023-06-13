from typing import List


def get_suggestions(current_code, added_code_snippet) -> List[str]:
    import jedi

    jedi.settings.call_signatures_validity = 3.0

    complete_code = current_code + "\n" + added_code_snippet
    line = len(complete_code.split("\n"))
    column = len(added_code_snippet)
    script = jedi.Script(complete_code)
    completions = script.complete(line, column)
    result = []

    for c in completions:
        result.append(c.name)

    return result
