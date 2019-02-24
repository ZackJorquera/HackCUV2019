import unirest
import json
response = unirest.get("https://distanceto.p.rapidapi.com/get?car=false&foot=false&route=%5B%7B%22t%22%3A%2241.855%2C+-87.65005%22%7D%2C%7B%22t%22%3A%22Chicago%22%7D%5D",
  headers={
    "X-RapidAPI-Key": "f8b2f3bb03msh87fe15ffdf82059p10eb70jsnc2a8e576c36a"
  }
)
json_data = json.loads(response.raw_body)
json_data = json_data["steps"]
json_data = json_data[0]
json_data = json_data["distance"]
json_data = json_data["haversine"]
print(json_data)
x = json_data
file = open("testfile.txt","w")
file.write(str(x))
file.close()
