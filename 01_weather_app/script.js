
const apikey = "3cef1799a9d48ba97216b9fae9e77fa9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city) {
    const response = await fetch(apiurl + city + "&appid=" + apikey);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "assets/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "assets/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "assets/rain.png";
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "assets/mist.png";
    }
    else if (data.weather[0].main == "Snow") {
        weathericon.src = "assets/snow.png";
    }
    else
        weathericon.src = "assets/drizzle.png";
}

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});
