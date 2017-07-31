from rest_framework import generics

from .models import Board
from .serializers import BoardListSerializer, BoardDetailSerializer

# Create your views here.
class BoardList(generics.ListCreateAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardListSerializer

class BoardDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardDetailSerializer