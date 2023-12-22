from django.contrib import admin
from django.urls import path, re_path, include


urlpatterns = [
    path('admin/', admin.site.urls),
     path('api/', include(('api.urls', 'api'), namespace='api')),
    path('auth/', include('social_django.urls', namespace='social')),
    


]
