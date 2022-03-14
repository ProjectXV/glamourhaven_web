from pyexpat import model
from socket import gaierror
from rest_framework import serializers
from .models import *

from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import authenticate, get_user_model
from djoser.conf import settings
from djoser.signals import user_registered
from djoser.compat import get_user_email
from djoser.serializers import UserCreateSerializer
from django.db import IntegrityError, transaction
from rest_framework import status
from .utils.exceptions import CustomException


class CustomTokenCreateSerializer(AuthTokenSerializer):
    """A customized Authentication token serializer that allows to obtain
    the auth_token for user without activated account."""

    def validate(self, attrs):
        password = attrs.get("password")
        params = {settings.LOGIN_FIELD: attrs.get(settings.LOGIN_FIELD)}

        if password and params[settings.LOGIN_FIELD]:
            user = authenticate(request=self.context.get(
                "request"), **params, password=password)
            if not user:
                user = User.objects.filter(**params).first()
                if user and not user.check_password(password):
                    msg = ('Unable to log in with the provided credentials.')
                    raise serializers.ValidationError(
                        msg, code='authorization')
        else:
            msg = ('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        if user:  # and self.user.is_active:
            attrs['user'] = user
            return attrs

        msg = ('Unable to log in with provided credentials.')
        raise serializers.ValidationError(msg, code='authorization')


class UserSerializer(UserCreateSerializer):
    """A serializer class for django user"""

    def create(self, validated_data):
        """an override of djoser UserCreateSerializer create_user Method. It creates a user and
        sends account activation link to their email address"""

        request = self.context.get("request")

        try:
            # roll back user create if account activation email isn't sent successfully
            with transaction.atomic():
                user = self.perform_create_user(validated_data)
                user_registered.send(sender=self.__class__,
                                     user=user, request=request)

                context = {
                    "user": user,
                    "domain": "glamourhaven.vercel.app",
                    "protocal": "https"
                }
                to = [get_user_email(user)]
                if settings.SEND_ACTIVATION_EMAIL:
                    try:
                        settings.EMAIL.activation(
                            request, context).send(to)
                    except:
                        raise CustomException(
                            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                            code=500,
                            detail={"error": [("Sorry, something went wrong. we are unable to complete your request."
                                    " Please contact support for more information")]},
                        )
        except Exception as e:
            raise e
        return user

    def perform_create_user(self, validated_data):
        """an override of djoser UserCreateSerializer perform_create_user Method."""
        user = User.objects.create_user(**validated_data)
        if settings.SEND_ACTIVATION_EMAIL:
            user.is_active = False
            user.save(update_fields=["is_active"])
        return user


class ClientSerializer(serializers.ModelSerializer):
    """A serializer class for the client model"""

    class Meta:
        model = Client
        fields = '__all__'
