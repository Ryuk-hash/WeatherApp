class UI {
   constructor() {
     this.location = document.getElementById('w-location');
     this.desc = document.getElementById('w-desc');
     this.string = document.getElementById('w-string');
     this.details = document.getElementById('w-details');
     this.icon = document.getElementById('w-icon');
     this.humidity = document.getElementById('w-humidity');
     this.feelsLike = document.getElementById('w-feels-like');
     this.dewpoint= document.getElementById('w-dewpoint');
     this.wind = document.getElementById('w-wind');
   }
   convertToCelsius(kelvinVar) {
    let celsius = kelvinVar-273.15;
    return celsius
  }
   paint(weather) {
     this.location.textContent = `${weather.name}, ${weather.sys.country}`;
     this.desc.textContent = weather.weather[0]['description'];
     this.string.textContent = Math.ceil(this.convertToCelsius(weather.main.temp)) + ' °C';
     this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`);
     this.humidity.textContent = `Relative Humidity: ${Math.ceil(weather.main.humidity)} %`;
     this.feelsLike.textContent = `Feels Like: ${Math.ceil(this.convertToCelsius(weather.main.feels_like))} °C`;
     this.dewpoint.textContent = `Atmospheric Pressure: ${weather.main.pressure} hPa`;
     this.wind.textContent = `Wind: ${weather.wind.speed} meter/sec at ${weather.wind.deg} degrees`;
   }
   
 }