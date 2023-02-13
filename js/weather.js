const API_KEYS = "0f3c027f2b9aced92255ccb2801fd9dd";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYS}&units=metric`
    // url을 부른다(많은 정보에서 날씨와 위치정보를 가져올 것임)
    fetch(url)
    .then(response => response.json()
    .then(data => {
        const weather = document.querySelector(".weather span:last-child");
        const city = document.querySelector(".city span:last-child"); 
        weather.innerHTML = data.weather[0].main;
        city.innerHTML = data.name; 
    }))
}   

function onGeoError() {

}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);