import uuid
from ..apis import main as api_main


class MembershipModel:
    id: uuid.UUID
    name: str
    email: str

    def __init__(self, id: str, name: str, email: str, picture: str):
        self.id = uuid.UUID(id)
        self.name = name
        self.email = email
        self.picture = picture


def list_memberships():
    api_data = api_main.hf_api_runner("GET", "members")
    return [
        MembershipModel(
            id=d["id"], name=d["name"], email=d["email"], picture=d["picture"]
        )
        for d in api_data
    ]


def add_membership(email: str):
    api_main.hf_api_runner("POST", "member", {"email": email})
