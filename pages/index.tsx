import axios from "axios";

import Card from "../components/Card";

export default function Home() {
  async function getWeather() {
    await axios
      .post("http://localhost:3000/api/weather", {
        city: "Porto Alegre"
      })
      .then((value) => {
        console.log(value)
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getWeather();

  return (
    <>
      <h1>Hello weather app</h1>

      <Card />
    </>
  );
}
