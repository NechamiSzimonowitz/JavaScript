/* global google */
(async function () {
    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker');
    const search = document.querySelector('#search');
    try {
        const response = await fetch(`http://api.geonames.org/wikipediaSearch?q=${search.value}&maxRows=10&username=slubowsky&type=json`);
        const choices = await response.json();
        let position;
        let marker;

        const map = new Map(document.getElementById('map'), {
            zoom: 18,
            center: { lat: -25.344, lng: 131.031 },
            mapId: 'DEMO_MAP_ID',
            mapTypeId: google.maps.MapTypeId.HYBRID
        });


        const sideBar = document.getElementById('sidebar');
        goButton = document.getElementById('go');
        goButton.addEventListener('submit', function addToSidebar() {
            choices.geonames.forEach(choice => {
                const selection = document.createElement('h2');
                selection.className = 'selection';
                selection.textContent = choice.title;
                sideBar.appendChild(selection);
            });

            position = { lat: choice.lat, lng: choice.lng };
            marker = new AdvancedMarkerElement({
                map: map,
                position: position,
                title: choice.title
            })
            const infoWindow = new google.maps.InfoWindow();

            marker.addListener('click', () => {
                infoWindow.setContent(`${choice.title} <a target="_blank" href="${choice.wikipediaUrl}">more info</a>`);
                infoWindow.open(map, marker);
            });

            choice.addEventListener('click', function () {
                map.setCenter = ({ lat: country.lat, lng: country.lng });
            });
        });
    }
    catch (e) {
        console.error('An error occurred:', e);
    }


    const { DrawingManager } = await google.maps.importLibrary('drawing');
    const drawingManager = new DrawingManager();
    drawingManager.setMap(map);

    const markers = [];
    const circles = [];
    const rectangles = [];
    const lines = [];
    google.maps.event.addListener(drawingManager, 'markercomplete', marker => {
        console.log('marker was drawn');
        const MarkerPlace = marker.getPosition({ lat: marker.lat(), lng: marker.lng });
        markers.push(MarkerPlace);
        localStorage.setItem('markers', markers);
    });


    google.maps.event.addListener(drawingManager, 'circlecomplete', circle => {
        console.log('circle was drawn', circle);
        const CirclePlace = (circle.getCenter(), circle.getRadius());
        circles.push(CirclePlace);
        localStorage.setItem('circles', circles);
    });

    google.maps.event.addListener(drawingManager, 'rectanglecomplete', rectangle => {
        console.log('rectangle was drawn', rect);
        const rectPlace = rectangle.getBounds();
        rectangles.push(rectPlace);
        localStorage.setItem('rectangles', rectangles);
    });

    google.maps.event.addListener(drawingManager, 'polyline', line => {
        const linePlace = line.getPath().getArray();
        markers.push(linePlace);
        localStorage.setItem('line', lines);
        //}
    });

    if (localStorage.markers) {
        const savedMarkers = JSON.parse(localStorage.markers);
        savedMarkers.forEach(marker => {
            new AdvancedMarkerElement({
                map: map,
                position: marker
            });
        });
    }
    if (localStorage.circles) {
        const savedCircles = JSON.parse(localStorage.circles);
        savedCircles.forEach(circle => {
            new AdvancedMarkerElement({
                map: map,
                position: circle
            });
        });
    }
    if (localStorage.lines) {
        const savedLines = JSON.parse(localStorage.lines);
        savedLines.forEach(line => {
            new AdvancedMarkerElement({
                map: map,
                position: lines
            });
        });
    }
    if (localStorage.rectangle) {
        const savedRectangles = JSON.parse(localStorage.rectangle);
        savedRectangles.forEach(rectangle => {
            new AdvancedMarkerElement({
                map: map,
                position: rectangle
            });
        });
    }



}());
