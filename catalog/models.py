from django.db import models


class Item(models.Model):
    title = models.CharField(max_length=500)
    price = models.IntegerField()
    discount_price = models.IntegerField()
    image = models.ImageField(default="default.jpg", upload_to="itemImages")

    def __str__(self):
        return self.title
