from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer


class ItemList(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


def auth_api(request):
    if request.method == 'GET':
        # Your logic for handling GET requests here
        return JsonResponse({'message': 'GET request handled in Django'})

    elif request.method == 'POST':
        # Your logic for handling POST requests here
        return JsonResponse({'message': 'POST request handled in Django'})

    # Handle other HTTP methods as needed

    return JsonResponse({'message': 'Unsupported method'}, status=405)