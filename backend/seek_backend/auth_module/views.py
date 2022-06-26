from django.shortcuts import render
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import candidate
from django.contrib.auth.models import User



class ParkingLotView(APIView):


    def get(self,request):

        pass
        return Response({"status":"201","message":"success","data":[]})

    def post(self,request):
        print(request.data,'*********DATA')
        print(request.FILES,'***********FILES')
        user_to_get = User.objects.get(username = request.data['username'])
        candidate_to_get = candidate.objects.get(user = user_to_get)
        candidate_to_get.resume = request.FILES['image']
        candidate_to_get.save()
        
        
            
            

        return Response({"status":"201","message":"success","data":[]})

# Create your views here.



