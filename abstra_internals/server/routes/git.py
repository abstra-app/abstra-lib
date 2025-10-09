from typing import cast

import flask

from abstra_internals.controllers.git import EmailProvider, GitController
from abstra_internals.controllers.main import MainController
from abstra_internals.environment import EDITOR_MODE, PROJECT_ID
from abstra_internals.services.jwt import decode_jwt
from abstra_internals.usage import editor_usage


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_git", __name__)
    if EDITOR_MODE == "local":
        # `MainController` implements the get_email method at runtime, but the
        # static type of `MainController` may not be recognized as an
        # `EmailProvider` by the type checker.
        git_controller = GitController(email_provider=cast(EmailProvider, controller))
    else:
        git_controller = GitController()

    @bp.get("/status")
    @editor_usage
    def _get_git_status():
        try:
            status = git_controller.get_status()
            return flask.jsonify(status)
        except Exception as e:
            return flask.jsonify({"available": False, "error": str(e)}), 500

    @bp.post("/checkout")
    @editor_usage
    def _checkout_branch():
        if not flask.request.json:
            flask.abort(400)

        branch_name = flask.request.json.get("branch")
        commit_hash = flask.request.json.get("commitHash")

        if not branch_name and not commit_hash:
            return flask.jsonify(
                {"success": False, "message": "Branch name or commit hash is required"}
            ), 400

        if branch_name and commit_hash:
            return flask.jsonify(
                {
                    "success": False,
                    "message": "Provide either branch or commit, not both",
                }
            ), 400

        try:
            if branch_name:
                result = git_controller.checkout_branch(branch_name)
            else:
                result = git_controller.checkout_commit(commit_hash)

            status_code = 200 if result["success"] else 400
            return flask.jsonify(result), status_code
        except Exception as e:
            return flask.jsonify({"success": False, "message": str(e)}), 500

    @bp.post("/pull")
    @editor_usage
    def _pull_changes():
        try:
            data = flask.request.json
            if data is None:
                flask.abort(400)

            strategy = data.get("strategy", "merge")
            allow_unrelated = data.get("allowUnrelated", True)
            conflict_resolution = data.get("conflictResolution", "theirs")

            result = git_controller.pull_changes(
                strategy=strategy,
                allow_unrelated=allow_unrelated,
                conflict_resolution=conflict_resolution,
            )
            status_code = 200 if result["success"] else 400
            return flask.jsonify(result), status_code
        except Exception as e:
            return flask.jsonify({"success": False, "message": str(e)}), 500

    @bp.post("/commit")
    @editor_usage
    def _commit_changes():
        email = None
        if EDITOR_MODE != "local":
            token = flask.request.cookies.get("editor_auth")
            claims = decode_jwt(token, aud=f"web-editor-{PROJECT_ID}")
            if not claims:
                return flask.make_response({"ok": False, "error": "Invalid token"}, 403)
            email = claims.get("email")

        if not flask.request.json:
            flask.abort(400)

        message = flask.request.json.get("message")
        if not message:
            return flask.jsonify(
                {"success": False, "message": "Commit message is required"}
            ), 400

        try:
            result = git_controller.commit_changes(message, email)
            status_code = 200 if result["success"] else 400
            return flask.jsonify(result), status_code
        except Exception as e:
            return flask.jsonify({"success": False, "message": str(e)}), 500

    @bp.post("/stash")
    @editor_usage
    def _stash_changes():
        try:
            message = "Discarding WIP changes"

            if flask.request.is_json and flask.request.json:
                message = flask.request.json.get("message", "Discarding WIP changes")

            result = git_controller.stash_changes(message)
            status_code = 200 if result["success"] else 400
            return flask.jsonify(result), status_code
        except Exception as e:
            return flask.jsonify({"success": False, "message": str(e)}), 500

    @bp.get("/commits")
    @editor_usage
    def _get_commit_history():
        try:
            limit = int(flask.request.args.get("limit", 200))
            offset = int(flask.request.args.get("offset", 0))
            branch = flask.request.args.get("branch")

            result = git_controller.get_commit_history(
                limit=limit, offset=offset, branch=branch
            )
            return flask.jsonify(result), 200
        except Exception as e:
            return flask.jsonify(
                {"commits": [], "hasMore": False, "error": str(e)}
            ), 500

    @bp.post("/deploy")
    @editor_usage
    def _deploy_to_abstra():
        try:
            controller.linter_repository.update_checks()
            issues = controller.linter_repository.get_blocking_checks()

            if len(issues) > 0:
                return flask.jsonify(
                    {
                        "success": False,
                        "message": "Please fix all linter issues before deploying your project.",
                    }
                ), 400

            data = flask.request.get_json(silent=True)
            branch = data.get("branch", "main") if data else "main"

            result = git_controller.push_and_deploy(branch)
            status_code = 200 if result["success"] else 400
            return flask.jsonify(result), status_code
        except Exception as e:
            return flask.jsonify({"success": False, "message": str(e)}), 500

    @bp.get("/remotes")
    @editor_usage
    def _get_remotes():
        try:
            result = git_controller.get_remotes()
            return flask.jsonify(result), 200
        except Exception as e:
            return flask.jsonify(
                {"remotes": [], "hasAbstraRemote": False, "error": str(e)}
            ), 500

    @bp.post("/revert")
    @editor_usage
    def _revert_commit():
        if not flask.request.json:
            flask.abort(400)

        commit_hash = flask.request.json.get("commitHash")
        if not commit_hash:
            return flask.jsonify(
                {"success": False, "message": "Commit hash is required"}
            ), 400

        try:
            result = git_controller.revert_commit(commit_hash)
            status_code = 200 if result["success"] else 400
            return flask.jsonify(result), status_code
        except Exception as e:
            return flask.jsonify({"success": False, "message": str(e)}), 500

    return bp
