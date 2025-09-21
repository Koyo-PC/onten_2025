from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from .models import Circle

class StaticViewSitemap(Sitemap):
    priority = 0.8
    changefreq = "daily"

    def items(self):
        return ["home", "map", "timetable", "circles"]

    def location(self, item):
        return reverse(item)

class CircleSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.6

    def items(self):
        return Circle.objects.all()

    def location(self, obj):
        return f"/circles_detail/{obj.pk}"