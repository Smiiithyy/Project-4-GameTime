from django.shortcuts import render, redirect

from .forms import BarForm, CommentForm

# Create your views here.
from .models import Bar, Comment


# def artist_list(request): 
#     artists = Artist.objects.all()
#     return render(request, 'find/artist_list.html', {'artists': artists})

# def song_list(request):
#     songs = Song.objects.all()
#     return render(request, 'find/songs_list.html', {'songs': songs})

# def artist_detail(request, pk):
#     artist = Artist.objects.get(id=pk)
#     return render(request, 'find/artist_detail.html', {'artist': artist})

# def song_detail(request, pk):
#     song = Song.objects.get(id=pk)
#     return render(request, 'find/song_detail.html', {'song': song})

# def artist_create(request):
#     if request.method == 'POST':
#         form = ArtistForm(request.POST)
#         if form.is_valid():
#             artist = form.save()
#             return redirect('artist_detail', pk=artist.pk)
#     else:
#         form = ArtistForm()
#     return render(request, 'find/artist_form.html', {'form': form})

# def song_create(request):
#     if request.method == 'POST':
#         form = SongForm(request.POST)
#         if form.is_valid():
#             song = form.save()
#             return redirect('song_detail', pk=song.pk)
#     else:
#         form = SongForm()
#     return render(request, 'find/song_form.html', {'form': form})

# def artist_edit(request, pk):
#     artist = Artist.objects.get(pk=pk)
#     if request.method == "POST":
#         form = ArtistForm(request.POST, instance=artist)
#         if form.is_valid():
#             artist = form.save()
#             return redirect('artist_detail', pk=artist.pk)
#     else:
#         form = ArtistForm(instance=artist)
#     return render(request, 'find/artist_form.html', {'form': form})

# def song_edit(request, pk):
#     artist = Song.objects.get(pk=pk)
#     if request.method == "POST":
#         form = SongForm(request.POST, instance=artist)
#         if form.is_valid():
#             song = form.save()
#             return redirect('song_detail', pk=song.pk)
#     else:
#         form = SongForm(ins`tance=artist)
#     return render(request, 'find/song_form.html', {'form': form})

# def artist_delete(request, pk):
#     Artist.objects.get(id=pk).delete()
#     return redirect('artist_list')

# def song_delete(request, pk):
#     Song.objects.get(id=pk).delete()
#     return redirect('song_list')


# _______________________________

def bar_list(request): 
    bars = Bar.objects.all()
    return render(request, 'find/bar_list.html', {'bars': bars})

def bar_detail(request, pk):
    bar = Bar.objects.get(id=pk)
    return render(request, 'find/bar_detail.html', {'bar': bar})

def comment_list(request):
    comments = Comment.objects.all()
    return render(request, 'find/comment_list.html', {'comments': comments})

def bar_create(request):
    if request.method == 'POST':
        form = BarForm(request.POST)
        if form.is_valid():
            bar = form.save()
            return redirect('bar_detail', pk=bar.pk)
    else:
        form = BarForm()
    return render(request, 'find/bar_form.html', {'form': form})

def comment_create(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save()
            return redirect('bar_detail', pk=comment.pk)
    else:
        form = CommentForm()
    return render(request, 'find/comment_form.html', {'form': form})

def comment_edit(request, pk):
    bar = Comment.objects.get(pk=pk)
    if request.method == "POST":
        form = CommentForm(request.POST, instance=bar)
        if form.is_valid():
            comment = form.save()
            return redirect('bar_detail', pk=comment.pk)
        # Need to fix
    else:
        form = CommentForm(instance=bar)
    return render(request, 'find/comment_form.html', {'form': form})

def bar_delete(request, pk):
    Bar.objects.get(id=pk).delete()
    return redirect('bar_list')

def comment_delete(request, pk):
    Comment.objects.get(id=pk).delete()
    return redirect('bar_list')