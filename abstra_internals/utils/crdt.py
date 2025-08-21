import difflib
from pathlib import Path
from typing import List, Optional, Tuple

from abstra_internals.contracts_generated import (
    AbstraLibApiEditorFilesSafeEditRequestItem,
)


class LSEQIdentifier:
    def __init__(self, pos: int, site_id: int, counter: int) -> None:
        self.pos: int = pos
        self.site_id: int = site_id
        self.counter: int = counter

    def __lt__(self, other: "LSEQIdentifier") -> bool:
        if self.pos != other.pos:
            return self.pos < other.pos
        if self.site_id != other.site_id:
            return self.site_id < other.site_id
        return self.counter < other.counter

    def __repr__(self) -> str:
        return f"LSEQId({self.pos},{self.site_id},{self.counter})"


class CRDTManager:
    def __init__(self, file_path: Optional[Path] = None) -> None:
        self.chars: List[Tuple[LSEQIdentifier, str]] = []
        self.site_id: int = 1  # TODO: assign unique site id per client
        self.counter: int = 0
        if file_path:
            content = file_path.read_text(encoding="utf-8")
            if content is not None:
                for i, c in enumerate(content):
                    self.chars.append((LSEQIdentifier(i, 0, i), c))
        # else: empty doc

    def get_content(self) -> str:
        return "".join(c for _, c in self.chars)

    def apply_operation(self, op: AbstraLibApiEditorFilesSafeEditRequestItem) -> None:
        if op.type == "insert":
            pos = max(0, min(op.pos, len(self.chars)))
            value: str = op.value or ""
            new_items = []
            for i, ch in enumerate(value):
                self.counter += 1
                lseq_id = LSEQIdentifier(pos + i, self.site_id, self.counter)
                new_items.append((lseq_id, ch))
            self.chars[pos:pos] = new_items  # bulk insert at once

        elif op.type == "delete":
            if op.length is None or op.length <= 0:
                return
            pos = max(0, min(op.pos, len(self.chars)))
            end_pos = min(pos + op.length, len(self.chars))
            if pos < end_pos:
                del self.chars[pos:end_pos]

    def apply_operations_from_diff(self, content: Optional[str]) -> None:
        old_content = self.get_content()
        if content is None or content == old_content:
            return

        matcher = difflib.SequenceMatcher(None, old_content, content)

        offset = 0

        for tag, i1, i2, j1, j2 in matcher.get_opcodes():
            if tag == "equal":
                continue

            pos_now = i1 + offset

            if tag == "delete":
                del_len = i2 - i1
                if del_len > 0:
                    self.apply_operation(
                        AbstraLibApiEditorFilesSafeEditRequestItem(
                            type="delete",
                            pos=pos_now,
                            site_id=str(self.site_id),
                            length=del_len,
                        )
                    )
                    offset -= del_len

            elif tag == "insert":
                ins_val = content[j1:j2]
                if ins_val:
                    self.apply_operation(
                        AbstraLibApiEditorFilesSafeEditRequestItem(
                            type="insert",
                            pos=pos_now,
                            site_id=str(self.site_id),
                            value=ins_val,
                        )
                    )
                    offset += len(ins_val)

            elif tag == "replace":
                del_len = i2 - i1
                if del_len > 0:
                    self.apply_operation(
                        AbstraLibApiEditorFilesSafeEditRequestItem(
                            type="delete",
                            pos=pos_now,
                            site_id=str(self.site_id),
                            length=del_len,
                        )
                    )
                    offset -= del_len

                ins_val = content[j1:j2]
                if ins_val:
                    self.apply_operation(
                        AbstraLibApiEditorFilesSafeEditRequestItem(
                            type="insert",
                            pos=pos_now,
                            site_id=str(self.site_id),
                            value=ins_val,
                        )
                    )
                    offset += len(ins_val)
