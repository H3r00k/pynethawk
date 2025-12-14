from flask import Blueprint, jsonify
from services.network_service import scan_network
import subprocess
import json
import os

scan_bp = Blueprint('scan', __name__, url_prefix='/api')
SCRIPT_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'scan_privileged.py')

@scan_bp.route('/scan', methods=['GET'])
def scan():
    try:
        result = subprocess.check_output(['pkexec', 'python', SCRIPT_PATH], text=True, timeout=30)
        data = json.loads(result)
        return jsonify(data), 200

    except subprocess.CalledProcessError:
        return jsonify({"error": "Password sudo sbagliata o annullata"}), 403
    except Exception as e:
        return jsonify({"error": str(e)}), 500