// frontend/script.js
const map = L.map('map').setView([51.505, -0.09], 13);  // Set initial location

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch data from the API and add markers to the map
fetch('http://localhost:6000/api/data')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      L.marker([item.coordinates.lat, item.coordinates.lon])
        .addTo(map)
        .bindPopup(item.name);
    });
  })
  .catch(err => console.log('Error fetching data:', err));


//// Add WMS Layer from GeoServer
// var wmsLayer = L.tileLayer.wms("http://localhost:8080/geoserver/your_workspace/ows?", {
//   layers: 'locations',
//   format: 'image/png',
//   transparent: true,
//   attribution: "GeoServer"
// }).addTo(map);

