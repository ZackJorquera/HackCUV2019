import socket

# the public network interface
HOST = socket.gethostbyname(socket.gethostname())
print(socket.gethostname())  # Computer Name

# create a raw socket and bind it to the public interface
s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_IP)
s.bind((HOST, 0))

# Include IP headers
s.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)

# receive all packages
s.ioctl(socket.SIO_RCVALL, socket.RCVALL_ON)

# receive a package
while True:
    print(s.recvfrom(65565))

# disabled promiscuous mode
s.ioctl(socket.SIO_RCVALL, socket.RCVALL_OFF)




















import socket

# the public network interface
HOST = socket.gethostbyname(socket.gethostname())
print(socket.gethostname())  # Host name (socket.gethostname() will give computers name) XPS-15
print(HOST)  # socket host IP

# create a raw socket and bind it to the public interface
#s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_IP)  #I dont think this even works
s = socket.socket(socket.AF_PACKET, socket.SOCK_RAW, socket.ntohs(0x0003))
#s2 = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_TCP)
#s3 = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_UDP)
s.bind((HOST, 0))  # Router IP: 10.203.136.1 with port: 54376. it seems we get the same result with port:0
#s.bind(("157.55.174.235", 443))  #dest address and port
#s.bind(('10.203.136.1', 0))

# Include IP headers
#s.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)

# receive all packages
s.ioctl(socket.SIO_RCVALL, socket.RCVALL_ON)

packets = set()

# receive a package

for i in range(1, 100):
    packet = s.recvfrom(65565)
    print(packet[1])
    packets.add(packet[1])


print(packets)
# disabled promiscuous mode
s.ioctl(socket.SIO_RCVALL, socket.RCVALL_OFF)

