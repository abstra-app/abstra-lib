import flask

from abstra_internals.controllers.pysa import (
    Context,
    analyze_python_syntax,
    jedi_get_autocomplete,
    jedi_help,
)


def get_editor_bp():
    bp = flask.Blueprint("editor_pysa", __name__)

    @bp.post("/autocomplete")
    def autocomplete():
        if flask.request.json is None:
            return flask.abort(400)

        ctx = Context(**flask.request.json)
        return jedi_get_autocomplete(ctx.code, ctx.line, ctx.column)

    @bp.post("/help")
    def help():
        if flask.request.json is None:
            return flask.abort(400)

        ctx = Context(**flask.request.json)
        return jedi_help(ctx.code, ctx.line, ctx.column)

    @bp.post("/lint")
    def lint():
        if flask.request.json is None:
            return flask.abort(400)

        ctx = Context(**flask.request.json)
        return analyze_python_syntax(ctx.code)

    return bp
