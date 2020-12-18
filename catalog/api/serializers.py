from rest_framework import serializers
from catalog.models import Item


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = (
            'id',
            'title',
            'price',
            'discount_price',
            'image',
        )
