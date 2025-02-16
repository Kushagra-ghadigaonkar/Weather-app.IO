const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "2c67d0a2710747c754d7e9ed803e061a";
const searchINP = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherimg = document.querySelector(".weather img")
async function checkweather(city) {
    const response = await fetch(url + city + `&appid=${key}`);
    let data = await response.json();
    console.log(data);
    if (response.status == 404) {
        document.querySelector(".err").style.display = "block";
        document.querySelector(".innerdetails").style.display = "none";
    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.ceil(data.main.temp) + "°C";
        document.querySelector(".inpercent").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + "Km/h";
        if (data.weather[0].main == "Smoke") {
            weatherimg.src = "utilities/images/clouds.png"
        }
        else if (data.weather[0].main == "clear") {
            weatherimg.src = "utilities/images/clear.png"
        }
        else if (data.weather[0].main == "drizzle") {
            weatherimg.src = "utilities/images/drizzle.png"
        }
        else if (data.weather[0].main == "mist") {
            weatherimg.src = "utilities/images/mist.png"
        }
        else if (data.weather[0].main == "rain") {
            weatherimg.src = "utilities/images/rain.png"
        }
        else if (data.weather[0].main == "snow") {
            weatherimg.src = "utilities/images/snow.png"
        }
        else if (data.weather[0].main == "Clouds") {
            weatherimg.src = "utilities/images/clouds.png"
        }
        document.querySelector(".innerdetails").style.display = "block";
        document.querySelector(".err").style.display = "none";
    }
}
searchbtn.addEventListener("click", () => {
    checkweather(searchINP.value)

})