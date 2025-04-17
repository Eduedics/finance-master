from django.urls import path
from . import views

urlpatterns = [
    path('api/',views.ReactAppView.as_view(),name='api')
]
