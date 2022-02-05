function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 11.632787405712818, lng: 165.3867510661298},
        zoom: 8,
        mapId: 'fac143795426e16a'
        });

        new google.maps.Marker({
            position: { lat: 11.597710978295536, lng: 165.37483857105494 },
            map,
            title: "Krusty Krab",
            


          });

          
         



}
initMap();