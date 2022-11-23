import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer

class Consumer(WebsocketConsumer):
    def connect(self):
        # room name reflects the page that wishes to connect to 
        # accueil users, room name is equal to segment name
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            'accueil_accueil',
            {
                'type': 'user_message',
                'message': message
            }
        )

    # Receive message from room group
    def user_message(self, event):
        message = event['message']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))