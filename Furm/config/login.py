from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import AuthenticationForm


class LoginForm(AuthenticationForm):
    class Meta:
        fields = ["username", "password"]


class Login(LoginView):
    template_name = 'registration/login.html'
    form_class = LoginForm
