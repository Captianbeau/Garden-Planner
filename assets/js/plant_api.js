//Set key for accessing API
plantKey = "sk-qWo06566be1c917ee3070";

pageNum = 1;
//Set variable for search button
searchButton = document.getElementById("searchButton");

var searchResults = document.querySelector("#searchResults");
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

//event listener for search button
searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  searchParameter = document.getElementById("searchInput");
if (!searchParameter.value) {
  return null
} else {
  sessionStorage.setItem("searchParameterKey", searchParameter.value);
  window.location.href = "./results.html";}
})









//plantURL = "https://perenual.com/api/species-list?key=" + plantKey + "&edible=1&hardiness=1-13&page=" + pageNum;

//browsePlantURL = "https://perenual.com/api/species-list?key=" + plantKey + "&edible=1&hardiness=1-13&page=" + pageNum;
//Set request option variable

//searchPlantURL = "https://perenual.com/api/species-list?key=" + plantKey + "&q=" + searchParameter + "&edible=1&hardiness=1-13&page=" + pageNum;


// fetch(searchPlantURL, requestOptions)
//   .then(response => response.json())
//   .then(result => {
//     if (result.data && result.data.length > 0) {
//       displayPlants(result);
//     } else {
//       console.log('No results found.');
//     }
//   });
