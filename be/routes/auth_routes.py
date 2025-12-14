from flask import Blueprint, request, jsonify
from services.auth_service import create_user
from models.user import User
from extensions import db, bcrypt

auth_bp = Blueprint('auth', __name__, url_prefix='/api')

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data:
        return jsonify({'message': 'No data provided'}), 400

    if User.query.filter_by(email=data.get('email')).first():
        return jsonify({"error": "Email già registrata!"}), 400
    try:
        user = create_user(data)
        return jsonify({"message": "Utente creato", "user_id": user.id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email e password richiesti"}), 400

    user = User.query.filter_by(email=email).first()
    if not user or not bcrypt.check_password_hash(user.password_hash, password):
        return jsonify({"error": "Credenziali errate"}), 401

    return jsonify({
        "meassage": "Login ok",
        "user": {
            "id": user.id,
            "name": user.name,
            "lastname": user.lastname,
            "email": user.email,
        }
    }), 200