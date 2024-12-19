// frontend/script.js
const map = L.map('map').setView([51.505, -0.09], 13);  // Set initial location


// // Array of marker locations in London
// const locations = [
//   { name: 'Big Ben', lat: 51.5007, lon: -0.1246 },
//   { name: 'London Eye', lat: 51.5033, lon: -0.1196 },
//   { name: 'Buckingham Palace', lat: 51.5010, lon: -0.1425 },
//   { name: 'Tower of London', lat: 51.5081, lon: -0.0759 },
//   { name: 'The Shard', lat: 51.5045, lon: -0.0865 },
//   { name: 'Trafalgar Square', lat: 51.5074, lon: -0.1280 },
//   { name: 'Natural History Museum', lat: 51.4967, lon: -0.1764 },
//   { name: 'The British Museum', lat: 51.5194, lon: -0.1270 }
// ];

// // Add markers for each location
// locations.forEach(item => {
//   L.marker([item.lat, item.lon])
//     .addTo(map)
//     .bindPopup(`<b>${item.name}</b>`);  // Display the name of the landmark on the popup
// });


// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch data from the API and add markers to the map
fetch('http://127.0.0.1:6000/api/data')
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

