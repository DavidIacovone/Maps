const mapDiv = document.getElementById('map') as Element;
const mapOptions = {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
}

new google.maps.Map(mapDiv, mapOptions);
