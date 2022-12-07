from django.conf.urls import url
from .consumers import Consumer

websocket_urlpatterns = [
    url(r'ws/consumer/(?P<room_name>\w+)/$', Consumer.as_asgi()),
]