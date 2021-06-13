import { useEffect, useState } from "react";

import { getCurrentWeather } from "../services/weather";

import Card from "../components/Card";

export default function Home() {
  const [todayWeather, setTodayWeather] = useState({});

  useEffect(() => {
    async function setCurrentWeather() {
      setTodayWeather(await getCurrentWeather());
    }

    setCurrentWeather();
  }, []);

  return (
    <>
      <h1>Hello weather app</h1>
      <hr />
      <h3>'oi'</h3>
      <Card weather={todayWeather as any} />
    </>
  );
}
