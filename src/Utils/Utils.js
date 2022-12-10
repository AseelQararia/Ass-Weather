export function getWeatherImage(temp) {
    switch (true) {
      case temp < 300:
        return `./img/weather-icons/storm.svg`;
      case temp >= 300 && temp < 500:
        return `./img/weather-icons/drizzle.svg`;
      case temp >= 500 && temp < 600:
        return `./img/weather-icons/rain.svg`;
      case temp >= 600 && temp < 700:
        return `./img/weather-icons/snow.svg`;
      case temp >= 700 && temp < 800:
        return `./img/weather-icons/fog.svg`;
      case temp === 800:
        return `./img/weather-icons/clear.svg`;
      case temp === 801:
        return `./img/weather-icons/partlycloudy.svg`;
      case temp > 801 && temp <= 805:
        return `./img/weather-icons/mostlycloudy.svg`;
    }
  }
  
  export function getData(moment){
    let minT = Math.round(moment?.main?.temp_min);
    let maxT = Math.round(moment?.main?.temp_max);
    let humidity= moment?.main?.humidity;
    let pressure= moment?.main?.pressure;
    let {id} = moment?.weather?.find((item) => {
      return item.id;
    });

    let state = getState(id);
    let icon = `./img/weather-icons/${state}.svg`;
    let values = { minT, maxT, humidity, pressure, state, icon};
    return values;
  }