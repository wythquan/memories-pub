from django.shortcuts import render


def home(request):
    return render(request, 'pub/home.html')


def drinks(request):
    return render(request, 'pub/drinks.html')


def entertainment(request):
    return render(request, 'pub/entertainment.html')


def contact(request):
    return render(request, 'pub/contact.html')
