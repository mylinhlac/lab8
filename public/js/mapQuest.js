function initMap() {
	// add your code here
  L.mapquest.key = 'qrC96sz4t52Y9DrJpEQ2beuDk1cl9cW8';

  // 'map' refers to a <div> elemenet with the ID map
  var map = L.mapquest.map('map', {
    center: [32.88, -117.236],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.88, -117.236]).addTo(map);
}
