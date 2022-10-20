from django.db import models

# Create your models here.
class post(models.Model):
    prodid = models.AutoField(primary_key=True )
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=500)

