import socket
from scapy.layers.l2 import ARP, Ether
from scapy.sendrecv import srp
from scapy.config import conf


def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(("8.8.8.8", 80))
    ip = s.getsockname()[0]
    s.close()
    return ip

def get_network_range():
    ip = get_local_ip()
    prefix = '.'.join(ip.split('.')[:3])
    return f"{prefix}.0/24"

def scan_network():
    ip_range = get_network_range()
    arp = ARP(pdst=ip_range)
    ether = Ether(dst="ff:ff:ff:ff:ff:ff")
    packet = ether / arp
    iface = conf.iface
    result = srp(packet, timeout=3, verbose=0, iface=iface)[0]

    devices = []
    for sent, received in result:
        try:
            hostname = socket.gethostbyaddr(received.psrc)[0]
        except:
            hostname = "N/A"
        devices.append({
            "ip": received.psrc,
            "mac": received.hwsrc,
            "hostname": hostname
        })

    return devices