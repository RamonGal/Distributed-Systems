
from django.contrib import admin
from django.urls import include, path

# urls
urlpatterns = [
    path('api/auth/', include('authentication.urls')),
    path('admin/', admin.site.urls),
]