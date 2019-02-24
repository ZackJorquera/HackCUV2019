from pathlib import Path
import sendText
import time

while(True):
    my_file = Path("/home/txt.txt")
    if my_file.is_file():
        content = my_file.read_text()
        os.remove(my_file)
        
        for line in content.split('\n'):
            sendText.text(line)
    
    time.sleep(10)