from app import create_app
from extensions import db


app = create_app()

with app.app_context():
    from models.user import User
    db.create_all()
    print("DB e tabella users creati!")