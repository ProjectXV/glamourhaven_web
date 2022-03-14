# utils/custom_exception.py
from rest_framework import status
from rest_framework.exceptions import APIException, _get_error_details


class CustomException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    # Custom code
    default_code = 400
    # Custom message
    default_detail = None

    def __init__(
            self,
            status_code=status.HTTP_400_BAD_REQUEST,
            code: int = None,
            detail=None,
            data=None,
    ):
        self.status_code = status_code
        self.code = self.default_code if code is None else code
        self.detail = self.default_detail if detail is None else _get_error_details(
            detail, code)

        if data is None:
            self.data = {"detail": self.detail, "code": self.code}
        else:
            self.data = data

    def __str__(self):
        return str(self.code) + self.detail['error']
