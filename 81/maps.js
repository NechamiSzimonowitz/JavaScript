/* global google */
(async function () {
    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker');
    try {
        const response = await fetch('http://api.geonames.org/wikipediaSearch?q=country&maxRows=10&username=Nechami129&type=json');
        const countries = await response.json();
        let position;
        let marker;

        const map = new Map(document.getElementById('map'), {
            zoom: 18,
            center: position,
            mapId: 'DEMO_MAP_ID',
            mapTypeId: google.maps.MapTypeId.HYBRID
        });

        const sideBar = document.getElementById('sidebar');
        countries.geonames.forEach(country => {

            const countryChoice = document.createElement('h2');
            countryChoice.className = 'countryChoice';
            countryChoice.textContent = country.title;

            sideBar.appendChild(countryChoice);

            position = { lat: country.lat, lng: country.lng };
            marker = new AdvancedMarkerElement({
                map: map,
                position: position,
                title: country.title
                //content: beachFlagImg
            })
            const infoWindow = new google.maps.InfoWindow();

            marker.addListener('click', () => {
                infoWindow.setContent(`${country.title} <a target="_blank" href="${country.wikipediaUrl}">more info</a>`);
                infoWindow.open(map, marker);
            });

            countryChoice.addEventListener('click', function () {
                map.setCenter = { lat: this.lat, lng: this.lng }
            });
        });
    }
    catch (e) {
        console.error('An error occurred:', e);
    }



}());
