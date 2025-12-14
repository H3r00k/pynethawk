from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from config import DevelopmentConfig
from routes.auth_routes import auth_bp
from extensions import db, bcrypt
from routes.scan_routes import scan_bp


load_dotenv()



def create_app():
    app = Flask(__name__)
    app.config.from_object(DevelopmentConfig)
    CORS(app)

    db.init_app(app)
    bcrypt.init_app(app)
    app.register_blueprint(auth_bp)
    app.register_blueprint(scan_bp)
    return app




if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)