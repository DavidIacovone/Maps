export class Map {
    private google: google.maps.Map;

    constructor() {
        this.google = new google.maps.Map(document.getElementById('map') as Element, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }
}