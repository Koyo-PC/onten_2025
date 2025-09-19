from django.shortcuts import render
from django.http import HttpResponse 

from django.views.generic.base import TemplateView
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView

from .models import Circle, News
from .forms import (
    CirclesSearchForm,
)


class IndexView(TemplateView):
    template_name = "main/index.html"

# class AccessView(TemplateView):
#     template_name = "main/access.html"

class MapView(TemplateView):
    template_name = "main/map.html"

class TimeTableView(TemplateView):
    template_name = "main/timetable.html"

# class AboutUsView(TemplateView):
#     template_name = "main/greetings.html"

# class MathView(TemplateView):
#     template_name = "main/math.html"
    
class CirclesView(ListView):
    template_name = "main/circles.html"
    model = Circle
    context_object_name = "circles"

    def get_queryset(self):
        circles = super().get_queryset().order_by('order')
        return circles
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        queryset = self.get_queryset()

        form = CirclesSearchForm(self.request.GET)
        if form.is_valid():
            keyword = form.cleaned_data["keyword"]
            if keyword:
                queryset = queryset.filter(name__icontains=keyword)
                context["keyword"] = keyword

        context["form"] = form
        context["circles"] = queryset
        return context
    
class CirclesDetailView(DetailView):
    model = Circle
    template_name = "main/circles_detail.html"
    context_object_name = "circle"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        data_list = Circle.objects.filter(id=self.kwargs["pk"])
        context["circle_data_list"] = data_list

        return context
    
# class RankingView(ListView):
#     template_name = "main/ranking.html"
#     model = Ranking
#     context_object_name = "rankings"

#     def get_queryset(self):
#         ranking = super().get_queryset().order_by('time')[0:10]
#         return ranking
    
class NewsView(ListView):
    template_name = "main/news.html"
    model = News
    context_object_name = "news"

    def get_queryset(self):
        circles = super().get_queryset().order_by('order')
        return circles

class NewsDetailView(DetailView):
    template_name = "main/news_detail.html"
    model = News
    context_object_name = "news" 

class ConcertView(ListView):
    template_name = "main/keion.html"
    model = News
    context_object_name = "news"