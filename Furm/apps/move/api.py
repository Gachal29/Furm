from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Furniture
from .serializer import FurnitureSerializer


class FurnitureViewSet(viewsets.ModelViewSet):
    serializer_class = FurnitureSerializer
    permission_classes = (IsAuthenticated,)
    
    def get_queryset(self):
        user = self.request.user
        furniture_id = self.request.GET.get("furniture_id")

        return Furniture.objects.filter(
            user = user,
            name = furniture_id
        )
