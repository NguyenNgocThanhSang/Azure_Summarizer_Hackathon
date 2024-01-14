from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

# def home(request):
#     return HttpResponse("Hello, Django!")

def home(request):
    return render(request, 'pages/home.html')
def sign_in(request):
    return render(request, 'pages/sign_in.html')