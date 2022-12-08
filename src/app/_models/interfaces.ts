export interface CardInfo {
    name?: string;
    country?: string;
    temp?: number;
    icon?: string;
}

export interface ResultWeather {
  main: { temp: number };
  weather: { icon: string }[];
  sys: { country: string };
}


export interface ResultCountry {
  name: {
    common: string;
    official: string;
  };
}
