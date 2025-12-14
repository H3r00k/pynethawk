# scan_privileged.py
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from services.network_service import scan_network
import json

devices = scan_network()
json.dump({"devices": devices}, sys.stdout)