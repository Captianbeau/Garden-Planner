
plantID = "671";
plantKey = "sk-5oBn655d7588a54043071";
plantURL = "https://perenual.com/api/species/details/" + plantID + "?key=" + plantKey;

//Set request option variable
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};
//Fetch Plant API, not the queries in the URL to get desired search results
fetch(plantURL, requestOptions)
  //Parse  
  .then(response => response.json())
  //Check if there is a result, then console log result and run function  
  .then(result => {
   // console.log(result);
    displayPlantCard(result);
    //console.log(result.common_name)
  });








  var displayPlantCard = function (result) {
  //connect to HTML element


  var plantImage = document.querySelector("#plantImage");
  //pull image from data
  var plantImg = result.default_image.small_url;
  //create li element on search page
  var plantImgEl = document.createElement("img")
  //create text for li
  plantImgEl.setAttribute("src", plantImg)
  //append li to ul in the aside
  plantImage.append(plantImgEl)


  //Items to append to list in plant info

  var plantCommonNameLi = document.createElement("li")
  var plantCommonName = result.common_name;
  plantCommonNameLi.textContent = "Common name: " + plantCommonName;
  plantInfo.appendChild(plantCommonNameLi)

  var plantCycleLi = document.createElement("li")
  var plantCycle = result.cycle;
  plantCycleLi.textContent = "Cycle: " + plantCycle;
  plantInfo.appendChild(plantCycleLi);

  var plantMaintenanceLi = document.createElement("li")
  var plantMaintenance = result.maintenance;
  plantMaintenanceLi.textContent = "Maintenance: " + plantMaintenance;
  plantInfo.appendChild(plantMaintenanceLi);

  var plantSunlightLi = document.createElement("li")
  var plantSunlight = result.sunlight;
  plantSunlightLi.textContent = "Sunlight: " + plantSunlight;
  plantInfo.appendChild(plantSunlightLi);

  var plantWateringLi = document.createElement("li")
  var plantWatering = result.watering;
  plantWateringLi.textContent = "Watering: " + plantWatering;
  plantInfo.appendChild(plantWateringLi);

  var plantHardinessLi = document.createElement("li")
  var plantHardinessMin = result.hardiness.min;
  var plantHardinessMax = result.hardiness.max;
  plantHardinessLi.textContent = "Hardiness Zone: " + plantHardinessMin + "-" + plantHardinessMax;
  plantInfo.appendChild(plantHardinessLi);

  var plantDimensionLi = document.createElement("li")
  var plantDimension = result.dimension;
  plantDimensionLi.textContent = "Dimensions, " + plantDimension;
  plantInfo.appendChild(plantDimensionLi);



  var plantAttractsLi = document.createElement("li")
  var plantAttracts= result.attracts;
  plantAttractsLi.textContent = "Attracts: " + plantAttracts;
  plantInfo.appendChild(plantAttractsLi);

  var plantTypeLi = document.createElement("li")
  var plantType= result.type;
  plantTypeLi.textContent = "Type: " + plantType;
  plantInfo.appendChild(plantTypeLi);


}