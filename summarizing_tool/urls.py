from django.urls import path 
from summarizing_tool import views

urlpatterns = [
    path("", views.home, name="home"),
    path("sign_in/", views.sign_in, name="sign_in"),
]