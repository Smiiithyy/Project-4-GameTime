from django.urls import path
from . import views

urlpatterns = [
    # path('', views.artist_list, name='artist_list'),
    # path('songs/', views.song_list, name='song_list'),
    # path('artists/<int:pk>', views.artist_detail, name='artist_detail'),
    # path('songs/<int:pk>', views.song_detail, name='song_detail'),
    # path('artists/new', views.artist_create, name='artist_create'),
    # path('songs/new', views.song_create, name='song_create'),
    # path('artists/<int:pk>/edit', views.artist_edit, name='artist_edit'),
    # path('songs/<int:pk>/edit', views.song_edit, name='song_edit'),
    # path('artists/<int:pk>/delete', views.artist_delete, name='artist_delete'),
    # path('songs/<int:pk>/delete', views.song_delete, name='song_delete'),
    path('bars/', views.bar_list, name='bar_list'),
    path('bars/<int:pk>', views.bar_detail, name='bar_detail'),
    path('comments/', views.comment_list, name='comment_list'),
    path('bar/new', views.bar_create, name='bar_create'),
    path('comment/new', views.comment_create, name='comment_create'),
    path('bars/<int:pk>/delete', views.bar_delete, name='bar_delete'),
    path('comments/<int:pk>/delete', views.comment_delete, name='comment_delete'),


]