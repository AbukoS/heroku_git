from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from .serializers import ProductListSerializer
from catalog.models import Item


class HomeView(ListAPIView):
    permission_classes = (AllowAny, )
    serializer_class = ProductListSerializer
    queryset = Item.objects.all()
