class Weather {

   constructor(city, state) {
      this.apiKey = '3ea25b3f4742537646e3b400459c218a';
      this.city = city;
      this.state = state;
   }

   async getWeather() {

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

      const responseData = await response.json();

      return responseData;
      
   }

   changeLocation(city, state) {

      this.city = city;
      this.state = state;

   }
};


