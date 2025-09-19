from django.urls import path
from django.contrib import admin

from . import views


urlpatterns = [
    path("", views.IndexView.as_view(), name="home"),
    # path("access",views.AccessView.as_view(),name="access"),
    path("map", views.MapView.as_view(),name="map"),
    path("timetable",views.TimeTableView.as_view(),name="timetable"),
    path("circles",views.CirclesView.as_view(),name="circles"),
    path("circles_detail/<int:pk>", views.CirclesDetailView.as_view(), name="circles_detail"),
    # path("aboutus",views.AboutUsView.as_view(),name="aboutus"),
    # path("math",views.MathView.as_view(),name="math"),
    # path("ranking", views.RankingView.as_view(),name="ranking"),
    path("news",views.NewsView.as_view(),name="news"),
    path("news_detail/<int:pk>", views.NewsDetailView.as_view(), name="news_detail"),
    path("concert",views.ConcertView.as_view(),name="concert")

]