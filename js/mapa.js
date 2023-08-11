let Coords = {lat: -38.554745 , lng: -58.7410371};
        let map;
        let marker;
        let mapDiv = document.getElementById('map')
        
        function initMap(){
           
             map = new google.maps.Map(mapDiv,{
                zoom:19,
                center: Coords,
            });
        
        marker = new google.maps.Marker ({
                position: Coords,
                mar: map,
            });
        }