from django.urls import path
from . import views


app_name = "move"
urlpatterns = [
    path("", views.TopView.as_view(), name="top"),
]