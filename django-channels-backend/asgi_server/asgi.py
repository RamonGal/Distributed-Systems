
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
from channels.security.websocket import AllowedHostsOriginValidator

import django
django.setup()
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from .routing import websocket_urlpatterns

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AllowedHostsOriginValidator(
        URLRouter(
            websocket_urlpatterns
        )
    ),
})
