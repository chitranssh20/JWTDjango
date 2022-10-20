
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import Register, Checking, tata, getPost, Blacklist

urlpatterns = [
    path('reg/', Register.as_view()),
    path('tata/', tata, name = 'tata'),
    path("checking/", Checking.as_view()),
    path("post/", getPost.as_view()),
     path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/blacklist/',  Blacklist.as_view(), name= "Blacklist" )
]
