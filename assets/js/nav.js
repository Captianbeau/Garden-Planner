// variables
var menu = $(".dropdown-trigger")
var navLocation = $(".dropdown")
//event listener
menu.on("click",activatingNav)
//function to activate nav
function activatingNav(){
    if (navLocation.hasClass("is-active")){
        navLocation.removeClass("is-active")
    }else{
    navLocation.addClass("is-active")
}
}
//activateNav function end