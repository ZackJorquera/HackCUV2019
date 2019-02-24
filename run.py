from flask import Flask, request
import flask
from twilio.twiml.messaging_response import Message, MessagingResponse
import twilio


app = Flask(__name__)

messages = [""]

@app.route('/sms', methods=['GET','POST'])
def sms():
    body = request.args.get("Body")
    print(str(body))
    if (str(body) != "None"):
        messages.insert(0, str(body))
        del messages[2, len(messages)]
    return str(messages[0])


if __name__ == "__main__":
    app.run(threaded=True)
