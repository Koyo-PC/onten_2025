from django.db import models
from django.urls import reverse


class Circle(models.Model):
    name = models.CharField(verbose_name="サークル名", max_length=20)
    logo = models.ImageField(verbose_name="ロゴ", upload_to="logo/")
    order = models.FloatField(verbose_name="優先順位", default=0)
    location = models.CharField(verbose_name="活動場所", max_length=20)
    introduction = models.TextField(verbose_name="紹介文（HTML可）" ,blank=True)

    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse("circles_detail", args=[self.pk])
    
class Ranking(models.Model):
    name = models.CharField(verbose_name="ニックネーム", max_length=20)
    time = models.DurationField(verbose_name="0:01:23.45の形で")

    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse()

