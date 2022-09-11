from django import forms
from .models import Artist, Song,Bar, Comment

# class ArtistForm(forms.ModelForm):

#     class Meta:
#         model = Artist
#         fields = ('name', 'photo_url', 'nationality',)
        

# class SongForm(forms.ModelForm):

#     class Meta:
#         model = Song
#         fields = ('title', 'album', 'preview_url', 'artist',)
        

class BarForm(forms.ModelForm):

    class Meta:
        model = Bar
        fields = ('bar_name', 'photo_url', 'address', 'city', 'state',)
        
class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        fields = ('bar','name','comment',)