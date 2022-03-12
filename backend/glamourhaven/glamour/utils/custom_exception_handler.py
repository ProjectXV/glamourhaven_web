from rest_framework.views import exception_handler
from rest_framework.response import Response
from django.http import JsonResponse
from exceptions import CustomException


def custom_exception_handler(exc, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.

    # Here, the customized customexception is returned directly to ensure that other exceptions in the system will not be affected
    # if isinstance(exc, CustomException):
    #     return Response(data=exc.data, status=exc.status)

    response = exception_handler(exc, context)

    # Now add the HTTP status code to the response.
    if response is not None:
        response.data['status_code'] = response.status_code

    return response
