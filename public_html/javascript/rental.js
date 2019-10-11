function geocodeLocation(location){
        var map = new google.maps.Map(document.getElementById('map'));

        if (navigator.geolocation){

            navigator.geolocation.getCurrentPosition(function (position) {
               var pos = {
                   lat: position.coords.latitude,
                   lng: position.coords.longitude
               }
            });

            $('#map').googleMap({
                zoom: 10,
                center: [result[0].geometry.location]
            });
        }
    });
}

$(document).ready(function () {

    geocodeLocation("Glasgow");

    $('#showMap').on('click', function () {
        console.log("Clicking");
       let location = $('#location-search').val();
       geocodeLocation(location);
    });
});