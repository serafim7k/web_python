from flask import Flask, render_template, url_for, request,redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
db = SQLAlchemy(app)

class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    points = db.Column(db.String(100), nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"Article: {self.id}, {self.points}!!!"

    def show_type(self):
        return 'Our type Article'

with app.app_context():
    db.create_all()

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == "POST":
        global good
        global bed
        points = request.form['text']
        if int(points) >= 56:
            good = points
            bed = ''
        else:
            bed = points
            good = ''
        print(points)
        try:
            return redirect('/points')
        except:
            return render_template("index.html")
    else:
        return render_template("index.html")

@app.route('/points')
def points():
    return render_template("points.html", good=good, bed=bed)

if __name__ == '__main__':
    app.run(debug=True)
