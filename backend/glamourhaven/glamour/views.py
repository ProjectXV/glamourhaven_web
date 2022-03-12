from urllib import request
from django.http import HttpResponse, HttpResponseServerError, JsonResponse
from django.shortcuts import render
import requests

import pytz
from .serializers import *
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.generics import RetrieveUpdateAPIView
from .models import *
from rest_framework import filters
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.core.mail import send_mail
from smtplib import SMTPException
from django.utils import timezone
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend


class CreateUserAccountApiView(CreateAPIView):
    """An api end point for creating new user accounts"""
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request):
        """
        Create a student record
        :param format: Format of the student records to return to
        :param request: Request object for creating student
        :return: Returns a student record
        """
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        # override the default return value upon success
        return Response({"detail": [("your account has been successfully created. Please check your"
                                    " email inbox for activation link.")], "status_code": 201})


class UserActivationView(APIView):
    """gets user account activation request"""

    def get(self, request, uid, token):
        """gets the activation request, captures the activation id and token from the request link
        and posts them to the djoser account activation url"""

        protocol = 'https://' if request.is_secure() else 'http://'
        web_url = protocol + 'glamourhaven.herokuapp.com'
        post_url = web_url + "/accounts/users/activation/"
        post_data = {'uid': uid, 'token': token}
        result = requests.post(post_url, json=post_data)
        content = result.json()
        return Response(content)
