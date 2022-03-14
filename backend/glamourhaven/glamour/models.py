from django.db import models
from django.db.models.deletion import CASCADE, SET_NULL, PROTECT
from datetime import datetime, timezone
from django.contrib.auth.models import User
from django.db.models.fields.related import ForeignKey

# make email in User a mandatory field
User._meta.get_field('email')._unique = True
User._meta.get_field('email').blank = False
User._meta.get_field('email').null = False


class Client(models.Model):
    """a model representation of a glamourhaven client data"""
    user = models.OneToOneField(User, on_delete=CASCADE, primary_key=True)
    phone_number = models.CharField(max_length=15, null=False)
    is_subscribed = models.BooleanField(default=False)
    profile_picture = models.ImageField(
        upload_to='images/profile', null=True)

    def __str__(self):
        """method returns a string representation of a client instance"""
        return self.user.username


class Employee(models.Model):
    """a model representation of a glamourhaven employee"""
    user = models.OneToOneField(User, on_delete=CASCADE, primary_key=True)
    first_name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    phone_number = models.CharField(max_length=15, null=False)
    national_id = models.CharField(max_length=25, unique=True, null=False)
    profile_picture = models.ImageField(
        upload_to='images/profile', null=True)
    specialization = models.TextField(null=False)

    def __str__(self):
        """returns a string representation of an employee instance"""
        return self.first_name + ' ' + self.last_name
