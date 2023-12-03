// var searchByLocationButton = document.getElementById()
var buttonEl = $('button')
var inputEl = $('input')

const filePath = '../assets/docs/data.json'

var zipCodeData = fetch(filePath).then(response => response.json()).then(data =>{
    // console.log(data)
    return data
})

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
        
        })
    }
})