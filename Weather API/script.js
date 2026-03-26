const button = document.getElementById("searchBtn");

button.addEventListener("click", async function(){
  const city = document.getElementById("cityInput").value;

  const res = await fetch("http://localhost:3000/weather/" + city);
  const data = await res.json();

  document.getElementById("temp").textContent = "Temp: " + data.temperature + "F";
  document.getElementById("condition").textContent = "Wind: " + data.windspeed + "mph";
});