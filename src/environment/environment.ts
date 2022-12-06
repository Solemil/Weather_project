// export const environment = {
//   production: false,
//   api: {
//     baseURL: 'https://api.openweathermap.org/data/2.5',
//     weatherApiKey: 'a85aede88ad10fb030e055694b6eb19e',
//     getWeather: '/weather?lat={lat}&lon={lon}&appid={API key}&units=metric',
//   },
// };

export const environment = {
  production: false,
  api: {
    baseURL: 'https://api.openweathermap.org/data/2.5',
    weatherApiKey: 'a85aede88ad10fb030e055694b6eb19e',
    getWeather: '/weather?q={city name}&appid={API key}&units=metric',
  },
};
