
function iniciarMap(){
    var coord = {lat: -38.558149, lng: -58.6694818};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
