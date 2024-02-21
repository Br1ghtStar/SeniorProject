const KELVIN = 273;
const key = "";

if("geolocator" in navigator){

navigator.geolocation.getCurrentPosition( setPosition, showError );
}else{
notificationElement.style.display = "block";
notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation.</p>"

}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function showError(error) {

    notificationElement.style.display = "block";
    notificationElement.innerHTML= '<p> ${error.message} </p>';
}

function getWeather(latitude, longitude){
let api = 


}