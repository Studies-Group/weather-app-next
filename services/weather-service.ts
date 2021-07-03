import axios, { AxiosResponse } from "axios";

interface WeatherResponse {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
}

function currentWeatherMapper(value: WeatherResponse) {
  const { main, description, icon } = value.weather[0];

  const {
    temp_max: tempMax,
    temp_min: tempMin,
    feels_like: feelsLike,
    temp,
    humidity,
  } = value.main;

  return {
    tempMax,
    tempMin,
    feelsLike,
    temp,
    humidity,
    main,
    description,
    icon
  };
}

export async function getCurrentWeather(): Promise<any> {
  return await axios
    .post(`http://localhost:3000/api/weather`, {
      city: "Porto Alegre"
    })
    .then((value: AxiosResponse<WeatherResponse>) => {
      const { main, weather } = value.data;
      const res = currentWeatherMapper({ main, weather });
      return res;
    })
    .catch((err) => {
      return err;
    });
}
