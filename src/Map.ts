interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}

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

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.google,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
    }
}