from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from YoutubeNotesApp.models import NotesDB
from YoutubeNotesApp.serializers import NotesSerializer
import ast

# Create your views here.
@api_view(['GET'])
def giveNotes(request):
	emailID = None
	videoID = None
	if request.GET.get('emailID',False):
		emailID = request.GET['emailID']
	if request.GET.get('videoID',False):
		videoID = request.GET['videoID']
	if emailID == None or videoID == None:
		return Response(status=status.HTTP_400_BAD_REQUEST)
	try:
		notesSession = NotesDB.objects.filter(emailID=emailID,videoID=videoID)
	except NotesDB.DoesNotExist:
		return Response(status=status.HTTP_404_NOT_FOUND)

	serializer = NotesSerializer(notesSession,many=True)
	return Response(serializer.data)

@api_view(['POST'])
def saveNotes(request):
	serializer = NotesSerializer(data=request.data)
	print request.data
	emailID = request.data.get("emailID",None)
	# if emailID != None:
	# 	emailID = ast.literal_eval(emailID)
	# else:
	# 	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	videoID = request.data.get("videoID",None)

	# if videoID != None:
	# 	videoID = ast.literal_eval(videoID)
	# else:
	# 	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	startTime = request.data.get("startTime",None)

	# if startTime != None:
	# 	startTime = ast.literal_eval(startTime)
	# else:
	# 	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	try:
		if NotesDB.objects.filter(emailID=emailID,videoID=videoID,startTime=startTime).exists():
			NotesDB.objects.filter(emailID=emailID,videoID=videoID,startTime=startTime).delete()
	except NotesDB.DoesNotExist:
		return Response(status=status.HTTP_404_NOT_FOUND)

	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data, status=status.HTTP_201_CREATED)

	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def details(request):
	details = NotesDB.objects.all()
	serializer = NotesSerializer(details,many=True)
	return Response(serializer.data)

@api_view(['POST'])
def deleteNotes(request):
	serializer = NotesSerializer(data=request.data)
	emailID = request.data.get("emailID",None)
	videoID = request.data.get("videoID",None)
	startTime = request.data.get("startTime",None)
	try:
		if NotesDB.objects.filter(emailID=emailID,videoID=videoID,startTime=startTime).exists():
			NotesDB.objects.filter(emailID=emailID,videoID=videoID,startTime=startTime).delete()
	except NotesDB.DoesNotExist:
		return Response(status=status.HTTP_404_NOT_FOUND)
	return Response(status=status.HTTP_204_NO_CONTENT)


