from ..models import User, Client, Employee
from exceptions import CustomException
from rest_framework import status


def has_pending_signup(email_address):
    """Checks whether data submited during user account creation matches a user account
    with a pending signup status."""

    # check if user exists
    if User.objects.filter(email=email_address).exists():
        user = User.objects.get(email=email_address)

        # if user exists and is neither client, employee nor superuser/staff,
        # raise an exception
        if not (Client.objects.filter(user=user).exists() or
                Employee.objects.filter(user=user).exists()
                or user.is_superuser or user.is_staff):

            raise CustomException(
                status_code=status.HTTP_409_CONFLICT,
                code=409,
                detail={"message": [(f"The email address {email_address} already belongs to an existing user account"
                        " with a pending registration status.")],
                        "id": [user.id]}
            )
        else:
            return False
    else:
        return False


def get_session_data(user):
    """get the login status and the necessary session data of a user"""

    if Client.objects.filter(user=user).exists():
        account_id = Client.objects.get(user=user).pk
        try:
            profile_picture = Client.objects.get(
                user=user).profile_picture.url
        except:
            profile_picture = None
        session_status = 'client'
    elif Employee.objects.filter(user=user).exists():
        account_id = Employee.objects.get(user=user).pk
        try:
            profile_picture = Employee.objects.get(
                user=user).profile_picture.url
        except:
            profile_picture = None
        session_status = 'employee'
    elif User.objects.get(id=user.id).is_staff:
        account_id = user.id
        session_status = 'manager'
        profile_picture = None
    else:
        account_id = user.id
        session_status = None
        profile_picture = None
    return {
        'session_status': session_status,
        'account_id': account_id,
        'profile_picture': profile_picture,
    }
