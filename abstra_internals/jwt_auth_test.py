from unittest import TestCase
from unittest.mock import ANY
from datetime import datetime
from tests.utils.match import any_of
from .jwt_auth import decode_jwt, endcode_fake_jwt


class DecodeJwtTest(TestCase):
    def test_decode_jwt(self):
        self.assertEqual(
            decode_jwt(
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20ifQ.BqjOCMNr_fwqTK6VnbGp9WhE_sxR6P_cLG_GjKPoZcc"
            ),
            {"email": "test@test.com"},
        )


class EncodeFakeJwtTest(TestCase):
    def test_encode_fake_jwt(self):
        self.maxDiff = None
        self.assertEqual(
            decode_jwt(endcode_fake_jwt("test@test.com")),
            {
                "email": "test@test.com",
                "exp": any_of(int),
            },
        )
