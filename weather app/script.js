const apikey="abc123xyz";

async function getweather() {
    const city =
document.getElementById("city").Value;

if (city ==="") {
    alert("please enter a city name");
    return;
}
const url =
'https://api.openweathermap.org/data/2.5/weather?q=${city} & appid == $ {apikey} & units == metric' ;
     try{
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("city not found");
        }
        const data = await response.json();

    document.getElementById("result").innerHTML = ' 
    <h2>${data.name}</h2>
    <h3>${data.main.temp} </h3>
    '<p>${data.weather[0].description}</p>'
    '<p>humidity:${data..main.humidity}</p>'
    <p>windspeed : ${data.wind..speed} m/s</p>';

    } catch (error){
        document.getElementById("result").innerHTML="<p>city not found.<\p>";
    }
    }
     

