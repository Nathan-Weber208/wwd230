
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&exclude=hourly,daily&appid=7c0325faafc4402f425857fa0c4f99c2'

const kelvinToFahrenheit = (kelvin) => {const f = (kelvin - 273.15) * 1.8 + 32;
    return f.toFixed(2);
}

const getWeather = async () => {
    const response = await fetch(url);
    jsObject = await response.json();
    console.log(jsObject);

    let temp = kelvinToFahrenheit(jsObject.main.temp);
    document.querySelector('#current-temp').textContent = temp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

};



getWeather();
