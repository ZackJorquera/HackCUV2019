from twilio.rest import Client
import re
import sys


# Your Account SID from twilio.com/console
account_sid =  "AC92c65f9777b5d0df6942b43a2fa29760"
# Your Auth Token from twilio.com/console
auth_token  = "4d5a38878d4689ea4274ee74674368f0"

#string = "msg: your package is fucked \n gps:(10.009,-1002) \n jerk:9 \n msg: Possible drop, with change in accel: 9  \n Water:88 \n msg: possible water damage \n msg: low battery" #test s is the test string
#string = "destgps:(100,100)\ngps:(1,1)"


client = Client(account_sid, auth_token)


def textCli(sCli):
    with open("config.txt") as f:
        n = f.readline()
    message = client.messages.create(
        to=n,
        from_="+18653442069",
        body=sCli)

def textServ(sServ):
    message = client.messages.create(
        to="+14434942069",
        from_="+18653442069",
        body=sServ)

def text(s):
    p = re.compile('\((.*?)\)', re.MULTILINE)
    l = p.findall(s)
    m = "";
    for i in l:
        m = m + i + " "
    if (m != ''):
        textServ(m)
    if (len(l) <= 1):
        p = re.compile('^( gps.+)\)[\r \n]+$', re.MULTILINE)
        if(p.sub('', s) != ''):
            textCli(p.sub('', s))


#text(string) #test the text function
