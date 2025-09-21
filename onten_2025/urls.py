from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static 
from django.conf import settings
from django.contrib.sitemaps.views import sitemap
from main.sitemaps import StaticViewSitemap, CircleSitemap

sitemaps = {
    "static": StaticViewSitemap,
    "circles": CircleSitemap,
}

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('admindayo/', admin.site.urls),
    path('', include("main.urls")),
    path("sitemap.xml", sitemap, {"sitemaps": sitemaps}, name="sitemap"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)