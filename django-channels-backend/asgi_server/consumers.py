import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from redlock import Redlock


class Consumer(WebsocketConsumer):
    def connect(self):
        # room name reflects the page that wishes to connect to
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_names = [
            'election',
            f'user_{self.room_name}'
        ]
        self.redlock = Redlock([{"host": "localhost", "port": 6379}])

        # Join room groups
        for room_group_name in self.room_group_names:
            async_to_sync(self.channel_layer.group_add)(
                room_group_name,
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
        msg_type = text_data_json['type']
        msg_group = f'user_{text_data_json["user_id"]}'

        if msg_type == 'unlock':
            lock_check = self.redlock.unlock("election")
            if lock_check:
                async_to_sync(self.channel_layer.group_send)(
                    msg_group,
                    {
                        'type': 'lock_msg',
                        'message':  {
                            'success': True,
                            'type': 'unlock',
                        },                            
                    }
                )
            else:
                async_to_sync(self.channel_layer.group_send)(
                    msg_group,
                    {
                        'type': 'lock_msg',
                        'message': {
                            'success': False,
                            'type': 'unlock',
                        },
                    }
                )
        elif msg_type == 'vote':                
            async_to_sync(self.channel_layer.group_send)(
                msg_group,
                {
                    'type': msg_type,
                    'message': message,
                }
            )

        elif msg_type == 'election':           
            lock_check = self.redlock.lock("election", 100) 
            if lock_check:
                async_to_sync(self.channel_layer.group_send)(
                    'election',
                    {
                        'type': msg_type,
                        'message': message,
                        'sender_channel_name': self.channel_name
                    }
                )   
            else:
                async_to_sync(self.channel_layer.group_send)(
                    msg_group,
                    {
                        'type': 'lock_msg',
                        'message': {
                            'success': False,
                            'type': 'election',
                        },
                    }
                ) 
                
    # Receive message from room group, function name matches the event type
    def election(self, event):
        # lock election to avoid double election
        message = event['message']
        # Send message to WebSocket 
        if self.channel_name != event['sender_channel_name']
            self.send(text_data=json.dumps({
                'type': 'election',
                'message': message
            }))

    def vote(self, event):
        message = event['message']
        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'type': 'vote',
            'message': message
        }))

    def lock_msg(self, event):
        message = event['message']
        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'type': 'lock_msg',
            'message': message
        }))