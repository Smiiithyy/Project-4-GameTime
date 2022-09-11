from django.db import models

# Create your models here.

class Artist(models.Model): 
    name= models.CharField(max_length=100)
    nationality= models.CharField(max_length=100)
    photo_url = models.TextField()
    
    def __str__(self):
        return self.name
    
class Song(models.Model):
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='songs')
    title = models.CharField(max_length=100, default='no song title')
    album = models.CharField(max_length= 100, default= 'no album title')
    preview_url = models.TextField()
    
    def __str__(self):
        return self.title
    
    


class Bar(models.Model):
    bar_name = models.CharField(max_length=100)
    photo_url = models.TextField()
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=20)
    
    def __str__(self):
        return self.bar_name

class Comment(models.Model):
    bar = models.ForeignKey(Bar, on_delete=models.CASCADE, related_name='comment')
    name = models.CharField(max_length=50)
    comment = models.TextField()
    
    def __str__(self):
        return self.comment
    
class Games(models.Model):
    bar = models.ForeignKey(Bar, on_delete=models.CASCADE, related_name='game')
    sport = models.CharField(max_length=100)
    gametime = models.TextField()
    showing = [('Y','Yes'),('N','No')]
    
    def __str__(self):
        return self.sport