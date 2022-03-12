from django.urls import path, re_path
from . import views

urlpatterns = [
    # access api end point for creating a new user account
    path('create-user-account',
         views.CreateUserAccountApiView.as_view(), name='create-user'),

    # access api end point for user account activation
    re_path(
        r'^activate-account/(?P<uid>[\w-]+)/(?P<token>[\w-]+)/$', views.UserActivationView.as_view()),
]
