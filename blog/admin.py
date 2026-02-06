from django.contrib import admin
from .models import Post, Comment
from django_summernote.admin import SummernoteModelAdmin

# importing from a file named models in the same directory
# as the admin.py file,
# separate multiple models for import with a comma

@admin.register(Post)
class PostAdmin(SummernoteModelAdmin):
    
    list_display = ('title', 'slug', 'status', 'created_on')
    search_fields = ['title', 'content']
    list_filter = ('status', 'created_on',)
    prepopulated_fields = {'slug': ('title',)}
    summernote_fields = ('content',)

# Register your models here.


admin.site.register(Comment)
