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
  const { main, description } = value.weather[0];

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
  };
}

export async function getCurrentWeather(): Promise<any> {
  const mock: WeatherResponse = {
    weather: [
      {
        id: 2000,
        main: "clear",
        description: "clearsky",
        icon: "abc02",
      },
    ],
    main: {
      feels_like: -40,
      humidity: 59,
      temp: 20,
      temp_max: 21,
      temp_min: 19,
    },
  };

  const { main, weather } = mock;
  console.log(currentWeatherMapper({ main, weather }));
  return Promise.resolve();
  // return await axios
  //   .post(`https://y4dqn.sse.codesandbox.io/api/weather`, {
  //     city: "Porto Alegre"
  //   })
  //   .then((value: AxiosResponse<WeatherResponse>) => {
  //     const { main, weather } = value.data;
  //     currentWeatherMapper({ main, weather });
  //     return value;
  //   })
  //   .catch((err) => {
  //     return err;
  //   });
}
