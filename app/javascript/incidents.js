
$(document).on("turbolinks:load", () => {
    // Allows Crier access to MapQuest API.
    L.mapquest.key = "kS8QjwAkcqw7VH5DkYfiJV0Ay9MBGSYA";
    if ($("#latitude").val() == "0.0" || $("#longitude").val() == "0.0") {
        $("#latitude").val("");
        $("#longitude").val("");
        $("#latitude").removeClass("is-valid");
        $("#longitude").removeClass("is-valid");
    }

    $(document).on("click", "#use-current-location-button", (event) => {
        navigator.geolocation.getCurrentPosition(setCoordinatesAndLocation);
    });

    $(document).on("input", "#location", (event) => {
        var location = $("#location").val();
        if (location.length > 10) {
            var geocoder = L.mapquest.geocoding({ "thumbMaps": false, "maxResults": 1 });
            geocoder.geocode(location, setCoordinates);
        }
    });

    var setCoordinatesAndLocation = (position) => {
        $("#latitude").val(position.coords.latitude);
        $("#longitude").val(position.coords.longitude);
        var geocoder = L.mapquest.geocoding({ "thumbMaps": false, "maxResults": 1 });
        geocoder.reverse([position.coords.latitude, position.coords.longitude], setLocation);
    };

    var setCoordinates = (error, response) => {
        var location = response.results[0].locations[0];
        $("#latitude").val(location.latLng.lat);
        $("#longitude").val(location.latLng.lng);
    };

    var setLocation = (error, response) => {
        var location = response.results[0].locations[0];
        var street = response.street;
        var city = response.adminArea5;
        var stateOrProvince = location.adminArea3;
        var postalCode = location.postalCode;
        $("#location").val(`${street}, ${city}, ${stateOrProvince} ${postalCode}`);
    };
});
