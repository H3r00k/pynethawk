from extensions import db
from models.user import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

def create_user(data):
    hashed = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user = User(
        name=data['name'],
        lastname=data['lastname'],
        email=data['email'],
        password_hash=hashed
    )
    db.session.add(user)
    db.session.commit()
    return user