var map;

var coordinateList = [];
function Coordinate(lat, long, number){
    this.lat = lat;
    this.lng = long;
    this.number = number;
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function makeNew(lat, long, number){
  var city = new Coordinate(lat, long, number);
  coordinateList.push(city);
}
function generateRandom() {
  var lat = Math.random()*40;
  var long = Math.random()*40;
  var number = coordinateList.length()+1;
  makeNew(lat,long,number);
}

window.initMap = function(){
  console.log("hi")
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 4,
      styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]
  });
    // var icon = {
    //      url: "01.jpg", // url
    //       scaledSize: new google.maps.Size(50, 54), // scaled size
    //       origin: new google.maps.Point(0,0), // origin
    //       anchor: new google.maps.Point(0, 0) // anchor
    //    };
    // var num = Math.round(Math.random()*(start.storyList.length-1));
    // var num1 = Math.round(Math.random()*(start.imageList.length-1));
    for(var i = 0; i < coordinateList.length; i++){
        console.log(coordinateList[i]);
        var index = i;
        var icon = {
        url: "", // url
        scaledSize: new google.maps.Size(50, 54), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0), // anchor

        };


        var marker = new google.maps.Marker({
          position: {lat: coordinateList[i].lat, lng: coordinateList[i].lng},
          map: map,
          label: (i+1).toString(),
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
          }
        });

        marker.addListener('click', function() {
          console.log(coordinateList[index]);
          // var num = Math.round(Math.random()*(start.markerList[index].storyList.length-1));
          // var num1 = Math.round(Math.random()*(start.imageList.length-1));
          // map.setZoom(8);
          // map.setCenter(marker.getPosition());
           //console.log("Pictures/"+start.imageList[num]);
           // var img1 = "CityPics/"+start.markerList[index].imageList[num];
          //  if(start.stortList[num].equals=="undefined"){
          //   document.getElementById("title").innerHTML = "NO MORE STORIES :( REFRESH FOR MORE";
          //   document.getElementById("imageid").src="indian12.jpg";
          // } else {
            // document.getElementById("title").innerHTML = start.markerList[index].storyList[num];
            //start.storyList.splice(num, 1);
            //start.imageList.splice(num1, 1);
            // document.getElementById("imageid").src=img1;
          // }
          // document.getElementById("overlay").style.display = "block";

        });

        // marker.addListener('click', displayStories(start.markerList[i]));
    }
}
