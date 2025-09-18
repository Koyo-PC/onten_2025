from django.db import models
from django.urls import reverse


class Circle(models.Model):
    name = models.CharField(verbose_name="サークル名", max_length=20)
    logo = models.ImageField(verbose_name="ロゴ", upload_to="logo/")
    order = models.FloatField(verbose_name="優先順位", default=0)
    location = models.CharField(verbose_name="活動場所", max_length=20)
    introduction = models.TextField(verbose_name="紹介文（HTML可）" ,blank=True)
    # introduction = models.CharField(max_length=1000, verbose_name="紹介文")
    # account = models.URLField()

    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse()
    
class Ranking(models.Model):
    name = models.CharField(verbose_name="ニックネーム", max_length=20)
    time = models.DurationField(verbose_name="0:01:23.45の形で")

    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse()

class News(models.Model):
    title = models.CharField(verbose_name="タイトル", max_length=30)
    order = models.FloatField(verbose_name="優先順位", default=0)
    text = models.CharField(max_length=1000, verbose_name="テキスト")

    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse()
    
class Concert(models.Model):
    title = models.CharField(verbose_name="グループ名", max_length=30)
    order = models.FloatField(verbose_name="優先順位", default=0)
    text = models.CharField(max_length=1000, verbose_name="説明")

    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse()
    