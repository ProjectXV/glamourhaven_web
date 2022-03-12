from django.db import models
from django.db.models.deletion import CASCADE, SET_NULL, PROTECT
from datetime import datetime, timezone
from django.contrib.auth.models import User
from django.db.models.fields.related import ForeignKey

# make email in User a mandatory field
User._meta.get_field('email')._unique = True
User._meta.get_field('email').blank = False
User._meta.get_field('email').null = False
