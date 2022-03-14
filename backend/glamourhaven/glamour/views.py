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
from .utils.accounts import has_pending_signup, get_session_data


class CreateUserAccountApiView(CreateAPIView):
    """An api end point for creating new user accounts"""
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request):

        serializer = UserSerializer(data=request.data)
        """first verify that the submitted data does not match any of an existsing user with
        a pending registration status"""
        if not has_pending_signup(request.data['email']):
            if serializer.is_valid(raise_exception=True):
                user = serializer.save()
                # override the default return value upon success
                return Response({"user": [user.id],
                                "detail": [("your user account has been successfully created. Please check your"
                                            " email inbox for activation link.")], "status_code": 201})

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserActivationView(APIView):
    """gets user account activation request"""

    def get(self, request, uid, token):
        """gets the activation request, captures the activation id and token from the request link
        and posts them to the djoser account activation url"""

        if request.is_secure():
            protocol = 'https://'
            web_url = protocol + 'glamourhaven.herokuapp.com'
        else:
            protocol = 'http://'
            web_url = protocol + 'localhost:8000'
        post_url = web_url + "/accounts/users/activation/"
        post_data = {'uid': uid, 'token': token}
        result = requests.post(post_url, json=post_data)
        content = result.json()
        return Response(content)


class CreateClientApiView(CreateAPIView):
    """creat new client accounts"""

    serializer_class = ClientSerializer
    queryset = Client.objects.all()

    def post(self, request):

        serializer = ClientSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        client = serializer.save()

        # obtain an auth token for the user who owns this new account
        token, created = Token.objects.get_or_create(user=client.user)
        if not created:
            # update the created time of the token to keep it valid
            token.created = datetime.utcnow().replace(tzinfo=pytz.utc)
            token.save()

        # override the default return value upon success
        return Response({
            'email': client.user.email,
            'session_status': 'client',
            'account_id': client.pk,
            'profile_picture': client.profile_picture.url,
            'token': token.key,
            "detail": ("your client account has been successfully created."
                        " Thank you for choosing GlamourHaven"),
            "status_code": 201})


class CustomAuthToken(ObtainAuthToken):
    """A Custom authentication class that creates an expiring authentication token
    for a user who logs in"""
    serializer_class = CustomTokenCreateSerializer

    def post(self, request, *args, **kwargs):
        """An override of the post method that takes a login request, verifies
        the login credentials and creates an expiring token once the user is verified"""

        try:
            serializer = self.serializer_class(data=request.data,
                                               context={'request': request})

            serializer.is_valid(raise_exception=True)
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            if not created:
                # update the created time of the token to keep it valid
                token.created = datetime.utcnow().replace(tzinfo=pytz.utc)
                token.save()

            session_data = get_session_data(user)

            return Response({
                'token': token.key,
                'email': user.email,
                'session_status': session_data['session_status'],
                'account_id': session_data['account_id'],
                'profile_picture': session_data['profile_picture'],
                'status': 'success',
                'status_code': 200
            })
        except Exception as e:
            raise e
