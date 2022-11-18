from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListCreateRollAPIView.as_view(), name='get_post_rolls'),
    path('<int:pk>/', views.RetrieveUpdateDestroyRollAPIView.as_view(), name='get_delete_update_roll'),
]