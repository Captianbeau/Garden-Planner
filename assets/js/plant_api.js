
plantKey = "sk-5oBn655d7588a54043071";
pageNum = 1;
searchButton = document.getElementById("searchButton");
var searchResults = document.querySelector("#searchResults");
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};


searchButton.addEventListener("click", function (event) {

  event.preventDefault()

  searchParameter = document.getElementById("searchInput");

  //window.location.href = "./results.html"

  console.log(searchParameter.value);
  searchResults.innerHTML = ""
  searchPlantURL = "https://perenual.com/api/species-list?key=" + plantKey + "&q=" + searchParameter.value + "&edible=1&hardiness=1-13&page=" + pageNum;

  fetch(searchPlantURL, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.data && result.data.length > 0) {
        displayPlants(result);
      } else {
        console.log('No results found.');
      }
    });
})




//Create function to display plants on search page
var displayPlants = function (result) {
  for (var i = 0; i < result.data.length; i++) {
    if (result.data[i].id < 3001) {
    //connect to HTML element

    //pull common name from data
    var plantCommonName = result.data[i].common_name
    var plantID = result.data[i].id
console.log(result.data[i].id)
    //create li element on search page
    var resultItem = document.createElement("li")
    resultItem.setAttribute("class", "list-item")
    //create text for li
    resultItem.textContent = plantCommonName + ", ID= " +plantID;
    //append li to ul in the aside
    searchResults.appendChild(resultItem)
  }}
}


searchResults.addEventListener("click", function (event) {
  console.log(plantID)
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
