from .views import RegisterView, LoginView, LogoutView,ReactAppView
from django.urls import path

urlpatterns = [
    # path('',ReactAppView.as_view(),name='home'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]
