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
   
    
    if (buttonClickedID && buttonClickedID == "Location_search"){
        console.log(zipCodeData)
        fetch(filePath).then(response => response.json()).then(data =>{
            var zone = data.find(obj => obj['zipcode'] == input)
            console.log(zone)
        })
    }
})