// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 2,
//     center: new google.maps.LatLng(2.8,-187.3),
//     mapTypeId: 'terrain'
//   });
//
//   // Create a <script> tag and set the USGS URL as the source.
//   var script = document.createElement('script');
//   // This example uses a local copy of the GeoJSON stored at
//   // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
//   script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
//   document.getElementsByTagName('head')[0].appendChild(script);
// }
//
// // Loop through the results array and place a marker for each
// // set of coordinates.
// window.eqfeed_callback = function(results) {
//   for (var i = 0; i < 10; i++) {
//     var coords = results.features[i].geometry.coordinates;
//     var latLng = new google.maps.LatLng(coords[1],coords[0]);
//     var marker = new google.maps.Marker({
//       position: latLng,
//       map: map
//     });
//   }
// }
function readForm() {
  var x = document.getElementById("myForm").elements[0].value;
  postage(x)
}

var unirest = require('unirest');
function distance(){
  var json_data = "";
  unirest.get("https://distanceto.p.rapidapi.com/get?car=false&foot=false&route=%5B%7B%22t%22%3A%2241.855%2C+-87.65005%22%7D%2C%7B%22t%22%3A%22Chicago%22%7D%5D")
  .header("X-RapidAPI-Key", "f8b2f3bb03msh87fe15ffdf82059p10eb70jsnc2a8e576c36a")
  .end(function (result) {
    // console.log(result.body);
    json_data = result.body.steps[0].distance.haversine;
    console.log(json_data)
    document.getElementById("totDistance").innerHTML = json_data;

  });
}
function postage(number){
    unirest.get("https://postage-tracker.p.rapidapi.com/?tracking="+number)
  .header("X-RapidAPI-Key", "f8b2f3bb03msh87fe15ffdf82059p10eb70jsnc2a8e576c36a")
  .end(function (result) {
    console.log(result.body);
    var p = document.createElement("div");
    p.innerHTML = result.body;
  });
}
