from app import db

class Projects(db.Model):
    __tablename__ = 'projects'
    id = db.Column(db.Integer, primary_key = True)
    project_title = db.Column(db.String(150), nullable = False)
    project_description = db.Column(db.Text, nullable = False)
    project_image = db.Column(db.String(200))

class Skills(db.Model):
    __tablename__ = "skills"
    id = db.Column(db.Integer, primary_key = True)
    skill_title = db.Column(db.String(150), primary_key = True)
    skill_image = db.Column(db.String(200))
    
class Clients(db.Model):
    __tablename__ = 'clients'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(150))
    email = db.Column(db.String(100), nullable= False)
    message = db.Column(db.Text)

    

