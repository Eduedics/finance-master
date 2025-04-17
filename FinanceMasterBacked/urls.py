from django.contrib import admin
from django.urls import path, include, re_path
from Api.views import ReactAppView 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('Api.urls')), 
    re_path(r'^.*$', ReactAppView.as_view(), name='react-app'), 
]

