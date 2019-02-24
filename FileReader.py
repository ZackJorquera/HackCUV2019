import sendText
from pathlib2 import Path
import time
import os

os.mknod('config.txt')
with open('config.txt') as f:
    f.write('+17202357772')
    f.write("destgps:(50,50)\n")
    f.close()

initialise = True

while (True):
    my_file = Path("/home/linaro/Documents/TextMessage")
    if my_file.is_file():
        content = my_file.read_text()
        os.remove(str(my_file))

        for line in content.split('\n'):
            if (initialise == True):
                f.open('config.txt', 'r')
                (f.readline())
                line = (f.readline()) + line
                f.close()
                initialise = False
            print("sending: ", line)
            sendText.text(str(line))

    time.sleep(10)
