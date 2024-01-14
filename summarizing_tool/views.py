from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
import openai
import json

# def home(request):
#     return HttpResponse("Hello, Django!")

def home(request):
    return render(request, 'pages/home.html')
def sign_in(request):
    return render(request, 'pages/sign_in.html')
def sign_up(request):
    return render(request, 'pages/sign_up.html')

def summarize_text(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        text = data.get('text', '')

        # Gửi yêu cầu đến OpenAI API và nhận kết quả
        summary = get_text_summary(text)

        return JsonResponse({'summary': summary})

    return JsonResponse({'error': 'Invalid request'})

def get_text_summary(text):
    openai.api_key = 'your_openai_api_key_here'
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=text,
        max_tokens=150
    )
    return response['choices'][0]['text']

def summarize(request):
    if request.method == 'POST':
        text_to_summarize = request.POST.get('text_to_summarize')

        openai.api_key = 'ada236a132364b1a933f64d674f4e4a7'

        response = openai.Completion.create(
            engine="GPT35TURBO", 
            prompt="Tóm tắt nội dung sau: " + text_to_summarize,
            max_tokens=150
        )

        summary = response.choices[0].text.strip()

        return render(request, 'home.html', {'summary': summary})

    return render(request, 'home.html')