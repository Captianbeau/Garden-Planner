

//Set request option variable
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};
//Fetch Plant API, not the queries in the URL to get desired search results
fetch(`https://perenual.com/api/species-list?key=sk-5oBn655d7588a54043071&edible=1&hardiness=1-13&page=1`, requestOptions)
//Parse  
.then(response => response.json())
//Check if there is a result, then console log result and run function  
.then(result => {
    console.log(result);
    if (result.data && result.data.length > 0) {
      displayPlants(result);
      //console.log(result.data[0].common_name)
    } else {
      console.log('No results found.');
    }
  })
  .catch(error => console.log('error', error));

//Create function to display plants on search page
var displayPlants = function (result) {
  for (var i = 0; i < result.data.length; i++) {
    //connect to HTML element
    var searchResults = document.querySelector("#searchResults");
    //pull common name from data
    var plantCommonName = result.data[i].common_name;
    console.log(plantCommonName)
    //create li element on search page
    var resultItem =document.createElement("li")
    //create text for li
    resultItem.textContent = plantCommonName
    //append li to ul in the aside
    searchResults.appendChild(resultItem)
  }
}
