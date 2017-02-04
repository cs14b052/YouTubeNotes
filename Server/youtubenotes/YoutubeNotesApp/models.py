from __future__ import unicode_literals

from django.db import models

# Create your models here.

class NotesDB(models.Model):
	class Meta:
		unique_together = (('emailID','videoID','startTime'),)

	emailID = models.CharField(max_length=100);
	videoID = models.CharField(max_length=50);
	startTime = models.CharField(max_length=10);
	endTime = models.CharField(max_length=10);
	notes = models.TextField()

