import sendText
from pathlib2 import Path
import time
import os

open('config.txt', 'w')
time.sleep(10)
with open('config.txt') as f:
    time.sleep(10)
    f.write('+17202357772/n')
    time.sleep(10)
    f.write("destgps:(50,50)\n")

while (True):
    my_file = Path("/home/linaro/Documents/TextMessage")
    if my_file.is_file():
        content = my_file.read_text()
        os.remove(str(my_file))
        sendText.text(str(content))

    time.sleep(10)
