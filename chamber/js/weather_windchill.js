
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&exclude=hourly,daily&appid=7c0325faafc4402f425857fa0c4f99c2'

const kelvinToFahrenheit = (kelvin) => {
    const f = (kelvin - 273.15) * 1.8 + 32;
    return f.toFixed(2);
}

const getWeather = async () => {
    const response = await fetch(url);
    jsObject = await response.json();
  

    let temp = kelvinToFahrenheit(jsObject.main.temp);
    document.querySelector('#current-temp').textContent = temp;

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    // Make description of weather with a capital letter
    const desc = jsObject.weather[0].description.charAt(0).toUpperCase() + jsObject.weather[0].description.slice(1);
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    const windspeed = jsObject.wind.speed;

    let s = windspeed
    let t = temp
    document.getElementById('Windspeed').innerHTML = s;
    // make windchill NA if windspeed is below 2mph
    if (s < 2) {
        // make windchill display NA
        document.getElementById('Windchill').innerHTML = 'N/A';
    
    }
    else {
        let f = Math.round(0.0817 * (3.71 * (Math.pow(s, 0.5)) + 5.81 - 0.25 * s) * (t - 91.4) + 91.4);
        document.getElementById('Windchill').innerHTML = f;
    }


};

getWeather();
