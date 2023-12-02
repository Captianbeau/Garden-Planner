//set session storage to contain search parameters
var searchParameter = sessionStorage.getItem("searchParameterKey")
//clear any results in the search results field
//searchResults.innerHTML = ""
//Set URL for search function
searchPlantURL = "https://perenual.com/api/species-list?key=" + plantKey + "&q=" + searchParameter + "&edible=1&hardiness=1-13&page=" + pageNum;
//fetch results based on search term
fetch(searchPlantURL, requestOptions)
    .then(response => response.json())
    .then(result => {
        if (result.data && result.data.length > 0) {
            displayPlants(result);
        } else {
            var noResultItem = document.createElement("li")
            noResultItem.setAttribute("class", "list-item")
            //create text for li
            noResultItem.textContent = "Sorry, No Results Found";
            //append li to ul in the aside
            searchResults.appendChild(noResultItem)
        }
    });
//Create function to display plants on search page
var displayPlants = function (result) {
    //For loop to display all results
    for (var i = 0; i < result.data.length; i++) {
        //Determine if the result is available on free API (first 3000 plants available)
        if (result.data[i].id < 3001) {
            //get common name from data
            var plantCommonName = result.data[i].common_name;
            //get ID code from data
            var plantID = result.data[i].id;
            //create li element on search page
            var resultItem = document.createElement("li");
            //add class to created li
            resultItem.setAttribute("class", "list-item");
            //add the ID code as id for li
            resultItem.setAttribute("id", plantID);
            //create text for li
            resultItem.textContent = plantCommonName;
            //append li to ul in the aside
            searchResults.appendChild(resultItem);
        }
    }
}
//Event listener to click on search result li and display plant card
searchResults.addEventListener("click", function (event) {
    //set li id as the id number to use in url
    var idNumber = event.target.id
    //define url to use for plant cards
    plantURL = "https://perenual.com/api/species/details/" + idNumber + "?key=" + plantKey;

    //Fetch Plant API with specific plant ID
    fetch(plantURL, requestOptions)
        //Parse  
        .then(response => response.json())
        .then(result => {
            // run function display plant card
            displayPlantCard(result);
        });
})