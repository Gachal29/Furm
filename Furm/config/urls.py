from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.contrib.auth.views import LogoutView
from .login import Login


urlpatterns = [
    path("admin/", admin.site.urls),
    path("login/", Login.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("", include("apps.move.urls")),
]

# if settings.DEBUG:
#     urlpatterns.append(path("__debug__/", include("debug_toolbar.urls")))
