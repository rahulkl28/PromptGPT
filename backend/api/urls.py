from django.urls import path, include
from .views import ItemList
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('items/', ItemList.as_view(), name='item-list'),
    path('api-auth/', include('rest_framework.urls'))
]