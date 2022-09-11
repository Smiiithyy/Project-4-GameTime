from django.contrib import admin

# Register your models here.
from .models import Artist, Games, Song, Comment, Bar

admin.site.register(Artist)
admin.site.register(Song)
admin.site.register(Bar)
admin.site.register(Comment)
admin.site.register(Games)