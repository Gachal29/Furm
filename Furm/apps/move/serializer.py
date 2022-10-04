from rest_framework import serializers
from .models import Furniture


class FurnitureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = ["image_path"]
