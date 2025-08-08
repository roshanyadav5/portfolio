from flask import render_template, request, session, url_for , redirect

from models import Projects
from models import Skills
from models import Clients

def register_routes(app,db):
    @app.route('/')
    def home():
        skills = Skills.query.all()
        projects = Projects.query.all()
        return render_template('home.html', skills=skills, projects=projects)
    
    @app.route('/submit', methods = ['POST'])
    def submit():
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        clients = Clients(name=name, email=email, message=message)
        db.session.add(clients)
        db.session.commit()
        return redirect(url_for('home'))