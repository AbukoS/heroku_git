from django.urls import path
from .views import HomeView

urlpatterns = [
    path('products-list', HomeView.as_view(), name='home')
]
