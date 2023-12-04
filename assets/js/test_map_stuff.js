// Selecting elements
const buttonEl = $('button');
const inputEl = $('input');

// File path for JSON data
const filePath = './assets/docs/data.json';

// Fetching zip code data
const zipCodeData = fetch(filePath)
  .then(response => response.json())
  .then(data => data);

// Object to store zone data
let zoneData = {};
let zipCode = '';

// Function to get zip code from city name
function getZipCode(city) {
  const apiKey = 'AIzaSyBwYeLd2bVkQbfhrXRnBLNd_EmkzSREn6E';
  const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=${apiKey}`;

  // Step 1: Get coordinates (latitude and longitude) for the city
  return fetch(geocodingApiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'OK' && data.results.length > 0) {
        const location = data.results[0].geometry.location;
        const reverseGeocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${apiKey}`;

        // Step 2: Reverse geocode to get detailed address information
        return fetch(reverseGeocodingApiUrl)
          .then(response => response.json())
          .then(data => {
            if (data.status === 'OK' && data.results.length > 0) {
              const addressComponents = data.results[0].address_components;

              // Find the zip code from the address components
              zipCode = addressComponents.find(component => component.types.includes('postal_code')).long_name;
              return zipCode;

var zone = {}
buttonEl.on('click',function(event){
    event.preventDefault();
    var buttonClickedID = event.target.parentNode.id
    var input = document.getElementById(buttonClickedID).children[1].value
    var buttonID = event.target.id;
    console.log(buttonID);
   
    
    if (buttonClickedID && buttonClickedID == "Location_search"){
        console.log(zipCodeData)
        fetch(filePath).then(response => response.json()).then(data =>{
            var zone = data.find(obj => obj['zipcode'] == input)
            console.log(zone)
            for (var i = 3; i<13; i++) {
console.log(i)
            if (zone.zone === i + "a" || zone.zone === i || zone.zone === i+"b"  ) {
                var searchParameter= i; }
            sessionStorage.setItem("searchParameterKey", searchParameter)
            }
          });
      }
    });
}

// Event listener for button click
buttonEl.on('click', function (event) {
  event.preventDefault();

  // Get button clicked ID and input value
  const buttonClickedID = event.target.parentNode.id;
  const input = $(`#${buttonClickedID} input`).val();

  // Get zip code from the input city
  getZipCode(input)
    .then(zipCode => {
      if (buttonClickedID && buttonClickedID === 'Location_search') {
        // console.log(zipCodeData);
        // Fetch zone data based on the obtained zip code
        fetch(filePath)
          .then(response => response.json())
          .then(data => {
            zoneData = data.find(obj => obj['zipcode'] === zipCode);
            console.log(zoneData);
          });
      }
    });
});


