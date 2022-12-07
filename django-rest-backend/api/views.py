from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django_filters import rest_framework as filters
from .models import Roll
from .permissions import IsOwnerOrReadOnly
from .serializers import RollSerializer
import requests
import json

class ListCreateRollAPIView(ListCreateAPIView):
    serializer_class = RollSerializer
    queryset = Roll.objects.all()
    permission_classes = [IsAuthenticated]
    filter_backends = (filters.DjangoFilterBackend,)

    def perform_create(self, serializer):
        # Assign the user who created the Roll
        png = self.request.FILES.get('png')
        title = self.request.POST.get('title')
        # transform png to string
        png_string = png.read().decode('utf-8')
        serializer.save(creator=self.request.user, png=png_string, title=title)


class RetrieveUpdateDestroyRollAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = RollSerializer
    queryset = Roll.objects.all()
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]


class RollStyleTransfer(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        content_img = Roll.objects.get(pk).png
        user_id = request.user.id
        style_img = request.POST.get('style_img')
        style_weight = request.POST.get('style_weight')
        url = "http://localhost:4000/jsonrpc"
        headers = {'content-type': 'application/json'}

        # Example echo method
        payload = {
            "method": "styleTransfer",
            "params": {
                "img": content_img,
                "style": style_img,
                "style_weight": style_weight,
            },
            "jsonrpc": "2.0",
            "id": self.context['request'].user.id,
        }
        response = requests.post(
            url, 
            data=json.dumps(payload), 
            headers=headers,
        ).json()
        
        if not (response["jsonrpc"] and response["id"] == user_id):
            return Response({"error": "Error in style transfer"}, status=400)

        if response["success"]:
            return Response({"success": True, "img": response["img"]}, status=200)