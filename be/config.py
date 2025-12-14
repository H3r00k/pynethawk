import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-key-change-me'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or f'sqlite:///{os.path.join(os.path.dirname(__file__), "instance", "H3r00k.db")}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class DevelopmentConfig(Config):
    DEBUG = True


class ProductionConfig(Config):
    DEBUG = False