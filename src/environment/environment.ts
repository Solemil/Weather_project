export const environment = {
  production: false,
  weatherApi: {
    baseURL: 'https://api.openweathermap.org/data/2.5',
    weatherApiKey: 'a85aede88ad10fb030e055694b6eb19e',
    getWeather: '/weather?q={city name}&appid={API key}&units=metric',
  },
  countryApi: {
    baseURL: 'https://restcountries.com/v3.1/alpha/{Code}',
  },
};
