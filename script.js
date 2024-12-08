const apikey="fe81d18b48acc055cf19580d84cc5387";

const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");


async function checkweather(city){
    if(!city){
        alert= alert("plese enter city name");
     }
 
//   const searchBox = document.querySelector(".search input");
//   const searchBtn = document.querySelector(".search button");

    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }else {
    var data = await response.json();


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
        else if(data.weather[0].main =="Clear"){
            weatherIcon.src = "images/clear.png"

        }
        else if(data.weather[0].main =="Rain"){
            weatherIcon.src= "./weather/rain.png";

        }
        else if(data.weather[0].main =="Drizzle"){
            weatherIcon.src= "./weather/drizzle.png";

        }
        else if(data.weather[0].main =="Mist"){
            weatherIcon.src = "https://cdn1.iconfinder.com/data/icons/weather-flat-8/50/Weather_Flat-25-512.png";
        }
        else if(data.weather[0].main =="snow"){
            weatherIcon.src = "./weather/snow.png";
        }
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display ="none";
   



  }

}


searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})




