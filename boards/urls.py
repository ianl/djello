from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^boards/$', views.BoardList.as_view()),
    url(r'^boards/(?P<pk>[0-9]+)/$', views.BoardDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
