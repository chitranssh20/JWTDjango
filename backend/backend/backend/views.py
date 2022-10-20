from os import stat
from pickle import FALSE
from urllib import response
from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User

class Register(APIView):
    def post(self, request):
        username = request.POST['username']
        password = request.POST['password'] 

        if User.objects.filter(username = username).exists():
            return Response({"Username already taken"})        
        else:
            User.objects.create_user(username = username, password = password)
            return Response({"User has been added"})

class Checking(APIView):
    def get(self, request):
        number = 5
        return Response({number})