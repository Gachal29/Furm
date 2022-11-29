from django.db import models
from django.contrib.auth.models import User


class Furniture(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(
        verbose_name = "家具",
        max_length = 150
    )
    width = models.IntegerField(verbose_name = "横幅")
    height = models.IntegerField(verbose_name = "縦幅")
    image_path = models.URLField(
        verbose_name = "画像ファイル",
    )
    arrangemented = models.BooleanField(
        verbose_name = "設置済み",
        default = True
    )


    class Meta:
        verbose_name = "家具"
        verbose_name_plural = "家具"

        constraints = [
            models.UniqueConstraint(
                fields = ["user", "name"],
                name="furniture_unique"
            )
        ]

    def __str__(self):
        return f"id:{self.id}, user:{self.user}, name:{self.name}"


class Arrangement(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    furniture = models.ForeignKey(Furniture, on_delete=models.CASCADE)
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
