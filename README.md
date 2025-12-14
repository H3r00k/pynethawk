Scanner LAN locale fullstack.

## Descrizione
Tool per scoprire dispositivi sulla rete WiFi di casa (IP, MAC, hostname).  
Frontend Angular 20 (standalone, reactive forms, control flow @if/@for).  
Backend Flask con SQLAlchemy, Scapy per ARP scan, pkexec per privilegi sudo (popup GUI).

## Tech stack
- Frontend: Angular 20
- Backend: Flask, SQLAlchemy, Scapy, Flask-Bcrypt
- DB: SQLite

## Come eseguire
```bash
# Backend
cd be
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py  # o sudo per scan senza popup

# Frontend
cd fe
npm install
ng serve
