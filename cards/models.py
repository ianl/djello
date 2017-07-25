from django.db import models

# Create your models here.
class Card(models.Model):
    text = models.CharField(max_length=100, blank=True)

    list = models.ForeignKey('lists.List', on_delete=models.CASCADE, related_name='cards')

    def __str__(self):
        return str(self.text)