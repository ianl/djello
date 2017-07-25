from rest_framework import serializers
from .models import Card

class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = ('id', 'text')
        