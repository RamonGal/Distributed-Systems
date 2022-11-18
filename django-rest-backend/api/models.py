from django.db import models

# Create your models here.
class Roll(models.Model):
    title = models.CharField(max_length=255)
    png = models.TextField()
    creator = models.ForeignKey('auth.User', related_name='rolls', on_delete=models.CASCADE)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title
