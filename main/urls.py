from django.urls import path
from django.contrib import admin

from . import views


urlpatterns = [
    path("", views.IndexView.as_view(), name="home"),
    path("map", views.MapView.as_view(),name="map"),
    path("timetable",views.TimeTableView.as_view(),name="timetable"),
    path("circles",views.CirclesView.as_view(),name="circles"),
    path("circles_detail/<int:pk>", views.CirclesDetailView.as_view(), name="circles_detail"),
    path("random_circle/", views.random_circle, name="random_circle"),
]