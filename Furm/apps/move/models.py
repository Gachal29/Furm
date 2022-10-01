from django.db import models
from django.contrib.auth.models import User


class Arrangement(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    furniture = models.CharField(
        max_length=150,
        verbose_name = "家具"
    )
    x = models.IntegerField(
        verbose_name = "X座標"
    )
    y = models.IntegerField(
        verbose_name = "Y座標"
    )

    class Meta:
        verbose_name = "家具配置"
        verbose_name_plural = "家具配置"

    def __str__(self):
        return f"id:{self.id}, furniture:{self.furniture}"



