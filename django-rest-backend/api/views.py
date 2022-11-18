from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from django_filters import rest_framework as filters
from .models import Roll
from .permissions import IsOwnerOrReadOnly
from .serializers import RollSerializer

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