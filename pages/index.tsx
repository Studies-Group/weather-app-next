import axios from "axios";

import Card from "../components/Card";

const apiURL = "api.openweathermap.org/data/2.5/";
const apiKey = "1908a487a1d28bde68413cf0aee969ce";

export default function Home() {
  async function getWeather() {
    await axios
      .get(`http://${apiURL}weather?q=Porto Alegre&appid=${apiKey}`)
      .then((data) => console.log(data))
      .catch((err) => {
        console.log({ type: "error", message: err.message });
      });

    // axios
    //   .post("https://s6emi.sse.codesandbox.io/api/weather", {
    //     city: "Porto Alegre"
    //   })
    //   .then((value) => {
    //     console.log("value: ", value);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  getWeather();

  return (
    <>
      <h1>Hello weather app</h1>

      <Card />
    </>
  );
}
