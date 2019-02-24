import socket
import struct
import binascii

s = socket.socket(socket.PF_PACKET, socket.SOCK_RAW, socket. htons(0x0800))

for i in range (1,100):
   packet = s.recvfrom(66565)
   ipheader = packet[0][14:34]
   ip_header = struct.unpack("!12s4s4s", ipheader)
   print("Source IP:" + socket.inet_ntoa(ip_header[1]) + " Destination IP:" + socket.inet_ntoa(ip_header[2]))
