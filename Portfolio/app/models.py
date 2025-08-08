from app import db
import app
class Projects(db.Model):
    id = db.Column(db.Integer , primary_key = True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable = False)
    image = db.Column(db.String(200), nullable = False)

class Skills(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable = False)
    image = db.Column(db.String(200), nullable = False)




