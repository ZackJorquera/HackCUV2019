import socket
import struct
import binascii

s=socket.socket(socket.PF_PACKET, socket.SOCK_RAW, socket.ntohs(0x0800)) #socket class

for x in range(1,10):
    print(s.recvfrom(65565))
