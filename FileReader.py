import sendText
from pathlib2 import Path
import time
import os

while(True):
    my_file = Path("/home/linaro/Documents/txt.txt")
    if my_file.is_file():
        content = my_file.read_text()
        os.remove(str(my_file))
        
        for line in content.split('\n'):
            print("sending: ", line)
            sendText.text(str(line))
    
    time.sleep(10)