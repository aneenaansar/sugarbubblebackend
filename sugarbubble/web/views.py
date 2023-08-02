from django.shortcuts import render
from web.models import Item,Category

# Create your views here.
def index(request):
    items = Item.objects.filter()[0:6]
    categories = Category.objects.all()
    return render(request, 'web/index.html',{
        'categories': categories,
        'items': items,
    })

def index2(request):
    return render(request,'web/index2.html')
