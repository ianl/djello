from django.db import models

# Create your models here.
class Card(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, blank=True)

    list = models.ForeignKey('lists.List', on_delete=models.CASCADE, related_name='cards')

    def __str__(self):
        return str(self.name)
