function initMap() {
  // add your code here
  L.mapquest.key = 'PcbB0AUGmG1b4Fsb5HPXAhEuevU7iAgu';

  // 'map' refers to a <div> element with the ID map
  L.mapquest.map('map', {
    center: [32.88, -117.236],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.88, -117.236]).addTo(map);
}
