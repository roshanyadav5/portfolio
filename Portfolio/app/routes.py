from flask import Blueprint, render_template, request, session, url_for, redirect
main = Blueprint('main',__name__, template_folder='templates')
from .models import Projects
from .models import db

Skills=[
    {
        'title':'Python',
        'img': 'static/images/python-skill.png'
    },
    {
        'title':'JavaScript',
        'img': 'static/images/js-skill.png'
    },
    {
        'title': 'Flask',
        'img':'static/images/flask-skill.png'
        
    },
    {
        'title':'Pandas',
        'img': 'static/images/pandas-skill.png'
    },
    {
        'title':'Numpy',
        'img': 'static/images/numpy-skill.png'
    },
    {
        'title':'Pytorch',
        'img': 'static/images/pytorch-skill.png'
    },
    {
        'title':'Tensorflow',
        'img': 'static/images/tensorflow-skill.png'
    },
    {
        'title':'Matplotlib',
        'img': 'static/images/matplotlib-skill.png'
    },
    {
        'title':'HTML',
        'img': 'static/images/html-skill.png'
    },
    {
        'title':'CSS',
        'img': 'static/images/css-skill.png'
    },
    {
        'title':'GSAP',
        'img': 'static/images/gsap-skill.png'
    },
]


@main.route('/')
def home():
    # skills=Skills.query.all()
    projects = Projects.query.all()
    return render_template('home.html',skills=Skills)