from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class List(models.Model):
    name = models.CharField(max_length=100)
    cards_order = ArrayField(models.IntegerField(), default=list)

    board = models.ForeignKey('boards.Board', on_delete=models.CASCADE, related_name='lists')

    def __str__(self):
        return str(self.name)