from abstra_internals.contracts_generated import AbstraLibApiEditorWebEditorResponse
from abstra_internals.environment import WAITING_ROOM_URL


class WebEditorController:
    def inspect(self) -> AbstraLibApiEditorWebEditorResponse:
        return AbstraLibApiEditorWebEditorResponse(waiting_room_url=WAITING_ROOM_URL)
