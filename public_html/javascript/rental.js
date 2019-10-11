function geocodeLocation(location){

    let geocoder = new google.maps.Geocoder();

    geocoder.geocode({'address': location}, function (result, status) {

        if (status === 'OK'){
            console.log(result[0].geometry.location);

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