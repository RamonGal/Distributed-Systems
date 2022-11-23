from django.urls import path
from . import views

urlpatterns = [
    path('roll/', views.ListCreateRollAPIView.as_view(), name='get_post_rolls'),
    path('roll/<int:pk>/', views.RetrieveUpdateDestroyRollAPIView.as_view(), name='get_delete_update_roll'),
]