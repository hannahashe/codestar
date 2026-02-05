from django.contrib import admin
from .models import Post, Comment  #  importing from a file named models in the same directory as the admin.py file, seperate multiple models for import with a comma

# Register your models here.
admin.site.register(Post)
admin.site.register(Comment)
