from django.contrib import admin
from django.urls import include, path

# urls
urlpatterns = [
    path('api/roll/', include('api.urls')),
    path('api/auth/', include('authentication.urls')),
    path('api/admin/', admin.site.urls),
]