//Set key for accessing API
plantKey = "sk-lgBK656bbc410c0fd3277";

//Set variable for search button
searchButton = document.getElementById("searchButton");
locationSearchButton = document.getElementById("location-search")
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
