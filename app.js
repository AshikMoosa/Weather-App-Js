//Init weather obj
const weather = new Weather("Chicago", "USA");

//Init UI obj
const ui = new UI();

//change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);

  //Get & display weather
  getWeather();

  //CLose modal JQUERY
  $("#locModal").modal("hide");
});

//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);
//weather.changeLocation("Chicago", "USA");
function getWeather() {
  weather
    .getWeather()
    .then((results) => ui.paint(results))
    .catch((err) => console.log(err));
}
