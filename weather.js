const API_KEY ="8a7748f9c354b027d570725ddf5821fb";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:last-child");
      const city = document.querySelector("#weather span:first-child");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}

function onGeoErr(){
  alert("Can't find you, No weather For you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
