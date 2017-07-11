from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^lists/$', views.ListList.as_view()),
    url(r'^lists/(?P<pk>[0-9]+)/$', views.ListDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
