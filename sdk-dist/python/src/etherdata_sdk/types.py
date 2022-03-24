from dataclasses import dataclass
from dataclasses_json import dataclass_json, LetterCase


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass
class _FileUploadResponseData:
    afid: str
    is_exist: bool


@dataclass_json
@dataclass
class FileUploadResponse:
    code: int
    msg: str
    data: _FileUploadResponseData
