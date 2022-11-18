from rest_framework import serializers
from .models import Roll
from django.contrib.auth.models import User


class RollSerializer(serializers.ModelSerializer):  # create class to serializer model
    creator = serializers.ReadOnlyField(source='creator.username')

    class Meta:
        model = Roll
        fields = ('id', 'title', 'png', 'creator')


class UserSerializer(serializers.ModelSerializer):  # create class to serializer user model
    Rolls = serializers.PrimaryKeyRelatedField(many=True, queryset=Roll.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'Rolls')