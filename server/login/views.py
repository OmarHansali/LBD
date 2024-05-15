from django.shortcuts import render
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            if user.is_superuser:
                return JsonResponse({"status": "Authenticated", "role": "admin"})
            else:
                return JsonResponse({"status": "Authenticated", "role": "user"})
        else:
            return JsonResponse({"status": "Authentication failed"})
    else:
        return JsonResponse({"status": "Invalid request method"})
