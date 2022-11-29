from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect
from django.urls import reverse
from .models import Furniture
from .forms import SettingsForm


class TopView(LoginRequiredMixin, TemplateView):
    template_name = "move/top.html"


class SettingsView(LoginRequiredMixin, TemplateView):
    template_name = "move/settings.html"
    SESSION_ENGINE = "django.contrib.sessions.backends.cache"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context["settings_form"] = SettingsForm
        return context

    def post(self, request):
        return redirect(reverse("move:move"))


class MoveView(LoginRequiredMixin, TemplateView):
    template_name = "move/move.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        move_settings = self.request.session.get("move_settings")
        
        furnitures = Furniture.objects.filter(user=self.request.user)
        context["furnitures"] = furnitures

        return context

class SaveView(LoginRequiredMixin, TemplateView):
    template_name = "move/save.html"
