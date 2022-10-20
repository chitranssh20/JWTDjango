from curses.ascii import HT
from os import stat
from pickle import FALSE
from urllib import response
from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny   
from .models import post 
from .serializers import getPostSerializer
from rest_framework import status
from django.contrib.auth.decorators import login_required
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

def tata(request):
    return HttpResponse('Best view ever created')

class getPost(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        if request.method == 'GET':
            posts = post.objects.all()
            print(posts)
            serializer = getPostSerializer(posts, many= True)

            return Response({'post': serializer.data, 'status': status.HTTP_200_OK })

            # return HttpResponse("Best post")

        else:
            return Response({'Use get method'})
            

class Register(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        if request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password'] 

            print(username)
            print(password)
            if User.objects.filter(username = username).exists():
               return HttpResponse('Best respones ever')
            else:
                User.objects.create_user(username = username, password = password)
                print(User.objects.all)
                # return Response({"User has been added"})
                return HttpResponse('second best respnnse')
        else:
            return HttpResponse('request method is not post')
class Checking(APIView):
    def get(self, request):
        number = 5
        return Response({number})

class Blacklist(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist() 
            return Response("Succesfful")
        except Exception as e:
            return Response(status.HTTP_400_BAD_REQUEST)

    