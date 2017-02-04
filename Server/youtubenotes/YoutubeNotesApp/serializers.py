from rest_framework import serializers
from YoutubeNotesApp.models import NotesDB

class NotesSerializer(serializers.ModelSerializer):
	class Meta:
		model = NotesDB
		fields = ('id', 'emailID', 'videoID', 'startTime', 'endTime', 'notes')