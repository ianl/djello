from django.db import models

# Create your models here.
class List(models.Model):
    name = models.CharField(max_length=100)

    board = models.ForeignKey('boards.Board', on_delete=models.CASCADE, related_name='lists')

    def __str__(self):
        return str(self.name)
