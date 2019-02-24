import sendText
from pathlib2 import Path
import time
import os

while (True):
    my_file = Path("/home/linaro/Documents/TextMessage")
    if my_file.is_file():
        content = my_file.read_text()
        os.remove(str(my_file))
        sendText.text(str(content))

    time.sleep(10)
