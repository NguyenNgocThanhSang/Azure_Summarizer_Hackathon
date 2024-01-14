from django.urls import path 
from summarizing_tool import views
from .views import summarize_text
urlpatterns = [
    path("", views.home, name="home"),
    path("sign_in/", views.sign_in, name="sign_in"),
    path("sign_up/", views.sign_up, name="sign_up"),
    path("summarize/", views.summarize, name="summarize"),
]