function readForm() {
  console.log("hi")
  var x = document.getElementById("data").value;
  postage(x)
}
function distance(x1,y1,x2, y2){
  var json_data = "";
  fetch("https://distanceto.p.rapidapi.com/get?car=false&foot=false&route=%5B%7B%22t%22%3A%22"+y1+"%2C"+x1+"%22%7D%2C%7B%22t%22%3A%22"+y2+"%2C"+x2+"%22%7D%5D", {
    headers: {
      "X-RapidAPI-Key":
      "f8b2f3bb03msh87fe15ffdf82059p10eb70jsnc2a8e576c36a"
    }
  })
  .then(function (response) {
    // console.log(result.body);
    return response.json();
    // json_data = result.body.steps[0].distance.haversine;
    // console.log(json_data + x1 + y2)
    // console.log(x1)
    // document.getElementById("totDistance").innerHTML = json_data;

  })
  .then(function (json) {
    console.log(json);
    json_data = json.steps[0].distance.haversine;
    console.log(json_data)
    document.getElementById("totDistance").innerHTML = json_data;

  })
}
function postage(number){
    fetch("https://postage-tracker.p.rapidapi.com/?tracking="+number, {
      headers: {
        "X-RapidAPI-Key":
        "f8b2f3bb03msh87fe15ffdf82059p10eb70jsnc2a8e576c36a"
      }
    })
  .then(function (response) {

    return response.text();

  })
  .then(function (text) {
    console.log(text);
    var p = document.createElement("div");
    p.innerHTML = text;
    document.body.appendChild(p)
  });
  distance(1, 1, 100, 100)
}
