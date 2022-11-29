from django.urls import path, include
from . import views
from rest_framework import routers
from .api import FurnitureViewSet


router = routers.DefaultRouter()
router.register(r"furniture_img", FurnitureViewSet, basename="get_img")


app_name = "move"
urlpatterns = [
    path("", views.TopView.as_view(), name="top"),
    path("settings/", views.SettingsView.as_view(), name="move_settings"),
    path("move/", views.MoveView.as_view(), name="move"),
    path("save/", views.SaveView.as_view(), name="save"),
    path("api/", include(router.urls))
]
