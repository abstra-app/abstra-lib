from ..apis import main as api_main
from .. import utils as utils


def list_workspace_jobs():
    query = """
        query GetJobs {
            jobs {
                title
                schedule
                identifier
                script {
                    enabled
                }
            }
        }
    """
    return api_main.hf_hasura_runner(query).get("jobs", [])


def add_workspace_job(data):
    _, workspace_id, _ = api_main.get_auth_info()
    job_data = {
        "title": data["name"],
        "script": {
            "data": {
                "workspace_id": workspace_id,
                "enabled": data.get("enabled", True),
                "code": data["code"],
                "name": data["name"],
            }
        },
    }

    data.pop("name", None)
    data.pop("code", None)
    data.pop("enabled", None)
    job_data.update(data)

    query = """
        mutation InsertJob($job_data: [jobs_insert_input!]!) {
            insert_jobs(
                objects: $job_data
            ) {
                returning {
                    identifier
                    title
                }
            }
        }
    """

    return (
        api_main.hf_hasura_runner(query, {"job_data": job_data})
        .get("insert_jobs", {})
        .get("returning", {})[0]
    )


def update_workspace_job(identifier, data):
    job_data = data.copy()
    script_data = {}

    name = job_data.pop("name", None)
    if name:
        job_data["title"] = name
        script_data["name"] = name

    code = job_data.pop("code", None)
    if code:
        script_data["code"] = code

    enabled = job_data.pop("enabled", None)
    if enabled is not None:
        script_data["enabled"] = enabled

    request_data = {
        "identifier": identifier,
        "job_data": job_data,
        "script_data": script_data,
    }
    update_query = """
        mutation UpdateJob($identifier: String!, $job_data: jobs_set_input, $script_data: scripts_set_input = {}) {
            update_jobs(where: {identifier: {_eq: $identifier}}, _set: $job_data) {
                returning {
                    id
                    title
                    identifier
                }
            }
            update_scripts(where: {jobs: {identifier: {_eq: $identifier}}}, _set: $script_data) {
                returning {
                    name
                }
            }
        }
    """
    return api_main.hf_hasura_runner(update_query, request_data)


def upsert_workspace_job(data):
    identifier = data["identifier"]

    query = """
        query FindJob($identifier: String!) {
            jobs(where: {identifier: {_eq: $identifier}}) {
                identifier
            }
        }
    """

    jobs = api_main.hf_hasura_runner(query, {"identifier": identifier}).get("jobs")
    if len(jobs):
        return update_workspace_job(identifier, data)
    else:
        return add_workspace_job(data)


def delete_workspace_job(identifier):
    query = """
        mutation DeleteJob($identifier: String!) {
            delete_jobs(where: {identifier: {_eq: $identifier}}) {
                returning {
                    id
                    identifier
                    title
                }
            }
        }
    """

    return api_main.hf_hasura_runner(query, {"identifier": identifier})


def list_logs(limit=20, offset=0):
    query = """
        query GetJobLogs($limit: Int, $offset: Int) {
            jobs {
                logs(offset: $offset, limit: $limit, order_by: {created_at: desc}) {
                    id
                    created_at
                    search_term
                    start_date
                    end_date
                    exit_code
                    executed_by
                    execution_id
                    trigger
                    job_id
                    status
                    metadata
                    execution {
                        status
                    }
                }
            }
        }
    """

    jobs = api_main.hf_hasura_runner(query).get("jobs", [])
    logs = utils.flat_items_logs(jobs, path_or_id="id")

    return {"logs": utils.sampling(logs, limit, offset)}


def list_logs_by_job_id(id, limit, offset):
    query = """
        query GetJobLogs($limit: Int, $offset: Int, $id: uuid) {
            jobs_by_pk(where: {id: {_eq: $id}}) {
                logs(offset: $offset, limit: $limit, order_by: {created_at: desc}) {
                    id
                    created_at
                    search_term
                    start_date
                    end_date
                    exit_code
                    executed_by
                    execution_id
                    trigger
                    metadata
                    job_id
                    execution {
                        status
                    }
                }
            }
        }
    """
    job = api_main.hf_hasura_runner(
        query, {"id": id, "limit": limit, "offset": offset}
    ).get("jobs_by_pk", None)
    if job:
        return {"logs": utils.flatten_list([job.get("logs")])}
    return {"logs": []}


def list_detailed_log_by_id(id):
    query = """
        query GetDetailedLog($id: uuid!) {
            jobs {
                logs(where: {id: {_eq: $id}}) {
                    stderr_message
                    stdout_message
                    status
                    execution {
                        id
                        status
                    }
                }
            }
        }
    """
    jobs = api_main.hf_hasura_runner(query, {"id": id}).get("jobs", None)
    if jobs:
        return {"detailed_log": utils.flatten_list([job.get("logs") for job in jobs])}
