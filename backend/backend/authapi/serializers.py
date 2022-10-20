from rest_framework import serializers
from .models import post 

class getPostSerializer(serializers.ModelSerializer):
    class Meta: 
        model = post 
        fields =  "__all__"