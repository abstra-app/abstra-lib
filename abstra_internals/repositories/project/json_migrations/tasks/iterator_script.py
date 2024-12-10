from abstra.tasks import get_trigger_task, send_task

task = get_trigger_task()
payload = task.get_payload()

iterator_list = payload.get("{variable_name}", [])
if isinstance(iterator_list, list):
    for item in iterator_list:
        dto = task.get_dto()
        payload["{item_name}"] = item
        send_task(dto.type, payload)

task.complete()
